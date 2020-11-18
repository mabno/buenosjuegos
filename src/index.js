/*Require al modulo dotenv, en produccion (Heroku) este modulo no va a estar ya que es una dependencia de
desarrollo, por lo que lo encerramos en un bloque try para que no falle el servidor*/
try{
	require('dotenv').config();
} catch(e){}

const port = process.env.PORT;

// DATABASE
require('./config/database');

// SERVER CONFIG
const app = require('./config/server');

// SERVER LISTENING
app.listen(port, () => {
	console.log('Server listening in port', port);
})