require('dotenv').config();

const path = require('path');
const { src, dest, series, watch} = require('gulp');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const browserify = require('browserify');
const tap = require('gulp-tap');
const buffer = require('gulp-buffer');
const hash = require('gulp-hash');
const obfuscator = require('gulp-javascript-obfuscator');
const del = require('delete');
sass.compiler = require('node-sass');

// PROJECT BUILD PATHS
const paths = {
	styles: {
		src: 'src/public/src/sass/main.scss',
		dest: 'src/public/dist/css'
	},
	scripts: {
		src: 'src/public/src/js/*.js',
		dest: 'src/public/dist/js'
	},
	images: {
		src: 'src/public/src/img/*',
		dest: 'src/public/dist/img'
	},
	fonts: {
		src: 'src/public/src/fonts/**',
		dest: 'src/public/dist/fonts'
	},
	favicon: {
		src: 'src/public/src/favicon/**',
		dest: 'src/public/dist/favicon'
	},
	delete: ['src/public/dist/**', 'src/helpers/json/static_manifest.json'],
	manifest: 'src/helpers/json',
	watch: 'src/public/src/**'
}

// TEST ENVIROMENT MODE RETURN FALSE || TRUE
const isProduction = () => process.env.NODE_ENV !== 'development';


// CLEAN BUILD DIRECTORY
const deleteFiles = () => {
	return del(paths.delete);
};


// BUILD .SASS FILES
const buildStyles = () => {
	return src(paths.styles.src)
		.pipe(sass())
		.pipe(gulpif(isProduction(), cleanCSS()))
		.pipe(hash({
			hashLength: 20,
			template: isProduction() ? '<%= hash %><%= ext %>' : '<%= name %><%= ext %>'
		}))
		.pipe(dest(paths.styles.dest))
		.pipe(hash.manifest('static_manifest.json'))
		.pipe(dest(paths.manifest));
};

// BUILD .JS FILES - USE BROWSERIFY
const buildScripts = () => {
	return src(paths.scripts.src, {read: false})
		.pipe(tap((file) => {
			console.log('[BUNDLING', path.basename(file.path), 'WITH BROWSERIFY...]');
			file.contents = browserify(file.path, {debug: true}).bundle();
		}))
		.pipe(buffer())
		.pipe(gulpif(isProduction(), obfuscator({compact: true})))
		.pipe(hash({
			hashLength: 20,
			template: isProduction() ? '<%= hash %>.bundle<%= ext %>' : '<%= name %><%= ext %>'
		}))
		.pipe(dest(paths.scripts.dest))
		.pipe(hash.manifest('static_manifest.json'))
		.pipe(dest(paths.manifest));
};

// BUILD IMAGES
const buildImages = () => {
	return src(paths.images.src)
		.pipe(dest(paths.images.dest));
}

// MOVE FONTS ASSETS
const moveFonts = () => {
	return src(paths.fonts.src)
		.pipe(dest(paths.fonts.dest));
}

// MOVE FAVICON ASSETS
const moveFavicon = () => {
	return src(paths.favicon.src)
		.pipe(dest(paths.favicon.dest));
}

// EXPORT DEFAULT TASK (WATCHING FILES CHANGES)
exports.default = () => {
	watch(paths.watch, series(deleteFiles, buildStyles, buildScripts, buildImages, moveFonts, moveFavicon));
}