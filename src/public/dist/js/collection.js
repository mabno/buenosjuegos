(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// THIS FILE IS GENERATED - DO NOT EDIT!
/*!mobile-detect v1.4.4 2019-09-21*/
/*global module:false, define:false*/
/*jshint latedef:false*/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function (define, undefined) {
define(function () {
    'use strict';

    var impl = {};

    impl.mobileDetectRules = {
    "phones": {
        "iPhone": "\\biPhone\\b|\\biPod\\b",
        "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
        "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
        "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
        "Dell": "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
        "Samsung": "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
        "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
        "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
        "Asus": "Asus.*Galaxy|PadFone.*Mobile",
        "NokiaLumia": "Lumia [0-9]{3,4}",
        "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        "Palm": "PalmSource|Palm",
        "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
        "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
        "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
        "Alcatel": "Alcatel",
        "Nintendo": "Nintendo (3DS|Switch)",
        "Amoi": "Amoi",
        "INQ": "INQ",
        "OnePlus": "ONEPLUS",
        "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
    },
    "tablets": {
        "iPad": "iPad|iPad.*Mobile",
        "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
        "GoogleTablet": "Android.*Pixel C",
        "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
        "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)",
        "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
        "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
        "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
        "BlackBerryTablet": "PlayBook|RIM Tablet",
        "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
        "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
        "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
        "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
        "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
        "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
        "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
        "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
        "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
        "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
        "IRUTablet": "M702pro",
        "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
        "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
        "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        "NokiaLumiaTablet": "Lumia 2520",
        "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
        "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
        "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
        "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
        "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        "FlyTablet": "IQ310|Fly Vision",
        "bqTablet": "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
        "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
        "NecTablet": "\\bN-06D|\\bN-08D",
        "PantechTablet": "Pantech.*P4100",
        "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
        "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        "ZyncTablet": "z1000|Z99 2G|z930|z990|z909|Z919|z900",
        "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
        "NabiTablet": "Android.*\\bNabi",
        "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        "PlaystationTablet": "Playstation.*(Portable|Vita)",
        "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
        "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
        "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
        "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
        "GalapadTablet": "Android.*\\bG1\\b(?!\\))",
        "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
        "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
        "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        "DPSTablet": "DPS Dream 9|DPS Dual 7",
        "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
        "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
        "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
        "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
        "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
        "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
        "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
        "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
        "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
        "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
        "iMobileTablet": "i-mobile i-note",
        "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
        "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
        "AMPETablet": "Android.* A78 ",
        "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
        "TecnoTablet": "TECNO P9|TECNO DP8D",
        "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
        "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
        "FX2Tablet": "FX2 PAD7|FX2 PAD10",
        "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
        "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
        "VerizonTablet": "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
        "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
        "CaptivaTablet": "CAPTIVA PAD",
        "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
        "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
        "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
        "JaytechTablet": "TPC-PA762",
        "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
        "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
        "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
        "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
        "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
        "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
        "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
        "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
        "MediacomTablet": "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
        "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
        "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
        "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
        "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
        "UbislateTablet": "UbiSlate[\\s]?7C",
        "PocketBookTablet": "Pocketbook",
        "KocasoTablet": "\\b(TB-1207)\\b",
        "HisenseTablet": "\\b(F5281|E2371)\\b",
        "Hudl": "Hudl HT7S3|Hudl 2",
        "TelstraTablet": "T-Hub2",
        "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
    },
    "oss": {
        "AndroidOS": "Android",
        "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
        "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
        "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
        "iPadOS": "CPU OS 13",
        "MeeGoOS": "MeeGo",
        "MaemoOS": "Maemo",
        "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
        "webOS": "webOS|hpwOS",
        "badaOS": "\\bBada\\b",
        "BREWOS": "BREW"
    },
    "uas": {
        "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
        "Dolfin": "\\bDolfin\\b",
        "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+$|Coast\/[0-9.]+",
        "Skyfire": "Skyfire",
        "Edge": "Mobile Safari\/[.0-9]* Edge",
        "IE": "IEMobile|MSIEMobile",
        "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
        "Bolt": "bolt",
        "TeaShark": "teashark",
        "Blazer": "Blazer",
        "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        "WeChat": "\\bMicroMessenger\\b",
        "UCBrowser": "UC.*Browser|UCWEB",
        "baiduboxapp": "baiduboxapp",
        "baidubrowser": "baidubrowser",
        "DiigoBrowser": "DiigoBrowser",
        "Mercury": "\\bMercury\\b",
        "ObigoBrowser": "Obigo",
        "NetFront": "NF-Browser",
        "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
        "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
    },
    "props": {
        "Mobile": "Mobile\/[VER]",
        "Build": "Build\/[VER]",
        "Version": "Version\/[VER]",
        "VendorID": "VendorID\/[VER]",
        "iPad": "iPad.*CPU[a-z ]+[VER]",
        "iPhone": "iPhone.*CPU[a-z ]+[VER]",
        "iPod": "iPod.*CPU[a-z ]+[VER]",
        "Kindle": "Kindle\/[VER]",
        "Chrome": [
            "Chrome\/[VER]",
            "CriOS\/[VER]",
            "CrMo\/[VER]"
        ],
        "Coast": [
            "Coast\/[VER]"
        ],
        "Dolfin": "Dolfin\/[VER]",
        "Firefox": [
            "Firefox\/[VER]",
            "FxiOS\/[VER]"
        ],
        "Fennec": "Fennec\/[VER]",
        "Edge": "Edge\/[VER]",
        "IE": [
            "IEMobile\/[VER];",
            "IEMobile [VER]",
            "MSIE [VER];",
            "Trident\/[0-9.]+;.*rv:[VER]"
        ],
        "NetFront": "NetFront\/[VER]",
        "NokiaBrowser": "NokiaBrowser\/[VER]",
        "Opera": [
            " OPR\/[VER]",
            "Opera Mini\/[VER]",
            "Version\/[VER]"
        ],
        "Opera Mini": "Opera Mini\/[VER]",
        "Opera Mobi": "Version\/[VER]",
        "UCBrowser": [
            "UCWEB[VER]",
            "UC.*Browser\/[VER]"
        ],
        "MQQBrowser": "MQQBrowser\/[VER]",
        "MicroMessenger": "MicroMessenger\/[VER]",
        "baiduboxapp": "baiduboxapp\/[VER]",
        "baidubrowser": "baidubrowser\/[VER]",
        "SamsungBrowser": "SamsungBrowser\/[VER]",
        "Iron": "Iron\/[VER]",
        "Safari": [
            "Version\/[VER]",
            "Safari\/[VER]"
        ],
        "Skyfire": "Skyfire\/[VER]",
        "Tizen": "Tizen\/[VER]",
        "Webkit": "webkit[ \/][VER]",
        "PaleMoon": "PaleMoon\/[VER]",
        "Gecko": "Gecko\/[VER]",
        "Trident": "Trident\/[VER]",
        "Presto": "Presto\/[VER]",
        "Goanna": "Goanna\/[VER]",
        "iOS": " \\bi?OS\\b [VER][ ;]{1}",
        "Android": "Android [VER]",
        "BlackBerry": [
            "BlackBerry[\\w]+\/[VER]",
            "BlackBerry.*Version\/[VER]",
            "Version\/[VER]"
        ],
        "BREW": "BREW [VER]",
        "Java": "Java\/[VER]",
        "Windows Phone OS": [
            "Windows Phone OS [VER]",
            "Windows Phone [VER]"
        ],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE\/[VER]",
        "Windows NT": "Windows NT [VER]",
        "Symbian": [
            "SymbianOS\/[VER]",
            "Symbian\/[VER]"
        ],
        "webOS": [
            "webOS\/[VER]",
            "hpwOS\/[VER];"
        ]
    },
    "utils": {
        "Bot": "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
        "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
        "DesktopMode": "WPDesktop",
        "TV": "SonyDTV|HbbTV",
        "WebKit": "(webkit)[ \/]([\\w.]+)",
        "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
        "Watch": "SM-V700"
    }
};

    // following patterns come from http://detectmobilebrowsers.com/
    impl.detectMobileBrowsers = {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        tabletPattern: /android|ipad|playbook|silk/i
    };

    var hasOwnProp = Object.prototype.hasOwnProperty,
        isArray;

    impl.FALLBACK_PHONE = 'UnknownPhone';
    impl.FALLBACK_TABLET = 'UnknownTablet';
    impl.FALLBACK_MOBILE = 'UnknownMobile';

    isArray = ('isArray' in Array) ?
        Array.isArray : function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };

    function equalIC(a, b) {
        return a != null && b != null && a.toLowerCase() === b.toLowerCase();
    }

    function containsIC(array, value) {
        var valueLC, i, len = array.length;
        if (!len || !value) {
            return false;
        }
        valueLC = value.toLowerCase();
        for (i = 0; i < len; ++i) {
            if (valueLC === array[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    function convertPropsToRegExp(object) {
        for (var key in object) {
            if (hasOwnProp.call(object, key)) {
                object[key] = new RegExp(object[key], 'i');
            }
        }
    }

    function prepareUserAgent(userAgent) {
        return (userAgent || '').substr(0, 500); // mitigate vulnerable to ReDoS
    }

    (function init() {
        var key, values, value, i, len, verPos, mobileDetectRules = impl.mobileDetectRules;
        for (key in mobileDetectRules.props) {
            if (hasOwnProp.call(mobileDetectRules.props, key)) {
                values = mobileDetectRules.props[key];
                if (!isArray(values)) {
                    values = [values];
                }
                len = values.length;
                for (i = 0; i < len; ++i) {
                    value = values[i];
                    verPos = value.indexOf('[VER]');
                    if (verPos >= 0) {
                        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                    }
                    values[i] = new RegExp(value, 'i');
                }
                mobileDetectRules.props[key] = values;
            }
        }
        convertPropsToRegExp(mobileDetectRules.oss);
        convertPropsToRegExp(mobileDetectRules.phones);
        convertPropsToRegExp(mobileDetectRules.tablets);
        convertPropsToRegExp(mobileDetectRules.uas);
        convertPropsToRegExp(mobileDetectRules.utils);

        // copy some patterns to oss0 which are tested first (see issue#15)
        mobileDetectRules.oss0 = {
            WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
            WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
        };
    }());

    /**
     * Test userAgent string against a set of rules and find the first matched key.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
     * @private
     */
    impl.findMatch = function(rules, userAgent) {
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    return key;
                }
            }
        }
        return null;
    };

    /**
     * Test userAgent string against a set of rules and return an array of matched keys.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
     * @private
     */
    impl.findMatches = function(rules, userAgent) {
        var result = [];
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    result.push(key);
                }
            }
        }
        return result;
    };

    /**
     * Check the version of the given property in the User-Agent.
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    impl.getVersionStr = function (propertyName, userAgent) {
        var props = impl.mobileDetectRules.props, patterns, i, len, match;
        if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;
            for (i = 0; i < len; ++i) {
                match = patterns[i].exec(userAgent);
                if (match !== null) {
                    return match[1];
                }
            }
        }
        return null;
    };

    /**
     * Check the version of the given property in the User-Agent.
     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {Number} version or <tt>NaN</tt> if version not found
     * @private
     */
    impl.getVersion = function (propertyName, userAgent) {
        var version = impl.getVersionStr(propertyName, userAgent);
        return version ? impl.prepareVersionNo(version) : NaN;
    };

    /**
     * Prepare the version number.
     *
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    impl.prepareVersionNo = function (version) {
        var numbers;

        numbers = version.split(/[a-z._ \/\-]/i);
        if (numbers.length === 1) {
            version = numbers[0];
        }
        if (numbers.length > 1) {
            version = numbers[0] + '.';
            numbers.shift();
            version += numbers.join('');
        }
        return Number(version);
    };

    impl.isMobileFallback = function (userAgent) {
        return impl.detectMobileBrowsers.fullPattern.test(userAgent) ||
            impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0,4));
    };

    impl.isTabletFallback = function (userAgent) {
        return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
    };

    impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
        if (cache.mobile !== undefined) {
            return;
        }
        var phone, tablet, phoneSized;

        // first check for stronger tablet rules, then phone (see issue#5)
        tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
        if (tablet) {
            cache.mobile = cache.tablet = tablet;
            cache.phone = null;
            return; // unambiguously identified as tablet
        }

        phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
        if (phone) {
            cache.mobile = cache.phone = phone;
            cache.tablet = null;
            return; // unambiguously identified as phone
        }

        // our rules haven't found a match -> try more general fallback rules
        if (impl.isMobileFallback(userAgent)) {
            phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
            if (phoneSized === undefined) {
                cache.mobile = impl.FALLBACK_MOBILE;
                cache.tablet = cache.phone = null;
            } else if (phoneSized) {
                cache.mobile = cache.phone = impl.FALLBACK_PHONE;
                cache.tablet = null;
            } else {
                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                cache.phone = null;
            }
        } else if (impl.isTabletFallback(userAgent)) {
            cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
            cache.phone = null;
        } else {
            // not mobile at all!
            cache.mobile = cache.tablet = cache.phone = null;
        }
    };

    // t is a reference to a MobileDetect instance
    impl.mobileGrade = function (t) {
        // impl note:
        // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
        // When changes are made in Mobile_Detect.php, copy this method and replace:
        //     $this-> / t.
        //     self::MOBILE_GRADE_(.) / '$1'
        //     , self::VERSION_TYPE_FLOAT / (nothing)
        //     isIOS() / os('iOS')
        //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
        var $isMobile = t.mobile() !== null;

        if (
            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
            t.os('iOS') && t.version('iPad')>=4.3 ||
            t.os('iOS') && t.version('iPhone')>=3.1 ||
            t.os('iOS') && t.version('iPod')>=3.1 ||

            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
            ( t.version('Android')>2.1 && t.is('Webkit') ) ||

            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
            t.version('Windows Phone OS')>=7.0 ||

            // Blackberry 7 - Tested on BlackBerry Torch 9810
            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
            t.is('BlackBerry') && t.version('BlackBerry')>=6.0 ||
            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
            t.match('Playbook.*Tablet') ||

            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
            ( t.version('webOS')>=1.4 && t.match('Palm|Pre|Pixi') ) ||
            // Palm WebOS 3.0  - Tested on HP TouchPad
            t.match('hp.*TouchPad') ||

            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
            ( t.is('Firefox') && t.version('Firefox')>=12 ) ||

            // Chrome for Android - Tested on Android 4.0, 4.1 device
            ( t.is('Chrome') && t.is('AndroidOS') && t.version('Android')>=4.0 ) ||

            // Skyfire 4.1 - Tested on Android 2.3 device
            ( t.is('Skyfire') && t.version('Skyfire')>=4.1 && t.is('AndroidOS') && t.version('Android')>=2.3 ) ||

            // Opera Mobile 11.5-12: Tested on Android 2.3
            ( t.is('Opera') && t.version('Opera Mobi')>11 && t.is('AndroidOS') ) ||

            // Meego 1.2 - Tested on Nokia 950 and N9
            t.is('MeeGoOS') ||

            // Tizen (pre-release) - Tested on early hardware
            t.is('Tizen') ||

            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
            // @todo: more tests here!
            t.is('Dolfin') && t.version('Bada')>=2.0 ||

            // UC Browser - Tested on Android 2.3 device
            ( (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android')>=2.3 ) ||

            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
            ( t.match('Kindle Fire') ||
                t.is('Kindle') && t.version('Kindle')>=3.0 ) ||

            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
            t.is('AndroidOS') && t.is('NookTablet') ||

            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
            t.version('Chrome')>=11 && !$isMobile ||

            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
            t.version('Safari')>=5.0 && !$isMobile ||

            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
            t.version('Firefox')>=4.0 && !$isMobile ||

            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
            t.version('MSIE')>=7.0 && !$isMobile ||

            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
            // @reference: http://my.opera.com/community/openweb/idopera/
            t.version('Opera')>=10 && !$isMobile

            ){
            return 'A';
        }

        if (
            t.os('iOS') && t.version('iPad')<4.3 ||
            t.os('iOS') && t.version('iPhone')<3.1 ||
            t.os('iOS') && t.version('iPod')<3.1 ||

            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
            t.is('Blackberry') && t.version('BlackBerry')>=5 && t.version('BlackBerry')<6 ||

            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
            ( t.version('Opera Mini')>=5.0 && t.version('Opera Mini')<=6.5 &&
                (t.version('Android')>=2.3 || t.is('iOS')) ) ||

            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

            // @todo: report this (tested on Nokia N71)
            t.version('Opera Mobi')>=11 && t.is('SymbianOS')
            ){
            return 'B';
        }

        if (
        // Blackberry 4.x - Tested on the Curve 8330
            t.version('BlackBerry')<5.0 ||
            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile')<=5.2

            ){
            return 'C';
        }

        //All older smartphone platforms and featurephones - Any device that doesn't support media queries
        //will receive the basic, C grade experience.
        return 'C';
    };

    impl.detectOS = function (ua) {
        return impl.findMatch(impl.mobileDetectRules.oss0, ua) ||
            impl.findMatch(impl.mobileDetectRules.oss, ua);
    };

    impl.getDeviceSmallerSide = function () {
        return window.screen.width < window.screen.height ?
            window.screen.width :
            window.screen.height;
    };

    /**
     * Constructor for MobileDetect object.
     * <br>
     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
     *     <strong>Find information how to download and install:</strong>
     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
     * </div>
     *
     * @example <pre>
     *     var md = new MobileDetect(window.navigator.userAgent);
     *     if (md.mobile()) {
     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
     *     }
     * </pre>
     *
     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
     * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
     *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
     *        as phone.
     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
     *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
     *        for Android</a>.<br>
     *        If you provide a value < 0, then this "fuzzy" check is disabled.
     * @constructor
     * @global
     */
    function MobileDetect(userAgent, maxPhoneWidth) {
        this.ua = prepareUserAgent(userAgent);
        this._cache = {};
        //600dp is typical 7" tablet minimum width
        this.maxPhoneWidth = maxPhoneWidth || 600;
    }

    MobileDetect.prototype = {
        constructor: MobileDetect,

        /**
         * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
         * <br>
         * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
         * <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
         * @function MobileDetect#mobile
         */
        mobile: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.mobile;
        },

        /**
         * Returns the detected phone type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
         * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
         * Wolfgang, Alcatel, Nintendo, Amoi, INQ, OnePlus, GenericPhone</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the phone family or producer, e.g. "iPhone"
         * @function MobileDetect#phone
         */
        phone: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.phone;
        },

        /**
         * Returns the detected tablet type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPad, NexusTablet, GoogleTablet, SamsungTablet, Kindle, SurfaceTablet,
         * HPTablet, AsusTablet, BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet,
         * AcerTablet, ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet,
         * LenovoTablet, DellTablet, YarvikTablet, MedionTablet, ArnovaTablet,
         * IntensoTablet, IRUTablet, MegafonTablet, EbodaTablet, AllViewTablet,
         * ArchosTablet, AinolTablet, NokiaLumiaTablet, SonyTablet, PhilipsTablet,
         * CubeTablet, CobyTablet, MIDTablet, MSITablet, SMiTTablet, RockChipTablet,
         * FlyTablet, bqTablet, HuaweiTablet, NecTablet, PantechTablet, BronchoTablet,
         * VersusTablet, ZyncTablet, PositivoTablet, NabiTablet, KoboTablet, DanewTablet,
         * TexetTablet, PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
         * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
         * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
         * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
         * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
         * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
         * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
         * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
         * VerizonTablet, OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet,
         * OndaTablet, JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet,
         * LavaTablet, AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MediacomTablet,
         * MiTablet, NibiruTablet, NexoTablet, LeaderTablet, UbislateTablet,
         * PocketBookTablet, KocasoTablet, HisenseTablet, Hudl, TelstraTablet,
         * GenericTablet</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
         * @function MobileDetect#tablet
         */
        tablet: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.tablet;
        },

        /**
         * Returns the (first) detected user-agent string or <tt>null</tt>.
         * <br>
         * The returned user-agent is one of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
         * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
         * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {String} the key for the detected user-agent or <tt>null</tt>
         * @function MobileDetect#userAgent
         */
        userAgent: function () {
            if (this._cache.userAgent === undefined) {
                this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgent;
        },

        /**
         * Returns all detected user-agent strings.
         * <br>
         * The array is empty or contains one or more of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
         * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
         * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
         * @function MobileDetect#userAgents
         */
        userAgents: function () {
            if (this._cache.userAgents === undefined) {
                this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgents;
        },

        /**
         * Returns the detected operating system string or <tt>null</tt>.
         * <br>
         * The operating system is one of following keys:<br>
         * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
         * iOS, iPadOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
         *
         * @returns {String} the key for the detected operating system.
         * @function MobileDetect#os
         */
        os: function () {
            if (this._cache.os === undefined) {
                this._cache.os = impl.detectOS(this.ua);
            }
            return this._cache.os;
        },

        /**
         * Get the version (as Number) of the given property in the User-Agent.
         * <br>
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
         *          Be careful when comparing this value with '==' operator!
         * @function MobileDetect#version
         */
        version: function (key) {
            return impl.getVersion(key, this.ua);
        },

        /**
         * Get the version (as String) of the given property in the User-Agent.
         * <br>
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
         *
         * @function MobileDetect#versionStr
         */
        versionStr: function (key) {
            return impl.getVersionStr(key, this.ua);
        },

        /**
         * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
         *
         * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
         *        tablet family.<br>
         *        For a complete list of possible values, see {@link MobileDetect#userAgent},
         *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
         *        Additionally you have following keys:<br>
         * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
         *
         * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
         *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
         * @function MobileDetect#is
         */
        is: function (key) {
            return containsIC(this.userAgents(), key) ||
                   equalIC(key, this.os()) ||
                   equalIC(key, this.phone()) ||
                   equalIC(key, this.tablet()) ||
                   containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
        },

        /**
         * Do a quick test against navigator::userAgent.
         *
         * @param {String|RegExp} pattern the pattern, either as String or RegExp
         *                        (a string will be converted to a case-insensitive RegExp).
         * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
         * @function MobileDetect#match
         */
        match: function (pattern) {
            if (!(pattern instanceof RegExp)) {
                pattern = new RegExp(pattern, 'i');
            }
            return pattern.test(this.ua);
        },

        /**
         * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
         * <br>
         * Obviously this method makes sense in browser environments only (not for Node.js)!
         * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
         *        The argument is optional and if not present or falsy, the value of the constructor is taken.
         * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
         *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
         *          Will always return <code>undefined</code> server-side.
         */
        isPhoneSized: function (maxPhoneWidth) {
            return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
        },

        /**
         * Returns the mobile grade ('A', 'B', 'C').
         *
         * @returns {String} one of the mobile grades ('A', 'B', 'C').
         * @function MobileDetect#mobileGrade
         */
        mobileGrade: function () {
            if (this._cache.grade === undefined) {
                this._cache.grade = impl.mobileGrade(this);
            }
            return this._cache.grade;
        }
    };

    // environment-dependent
    if (typeof window !== 'undefined' && window.screen) {
        MobileDetect.isPhoneSized = function (maxPhoneWidth) {
            return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
        };
    } else {
        MobileDetect.isPhoneSized = function () {};
    }

    // should not be replaced by a completely new object - just overwrite existing methods
    MobileDetect._impl = impl;
    
    MobileDetect.version = '1.4.4 2019-09-21';

    return MobileDetect;
}); // end of call of define()
})((function (undefined) {
    if (typeof module !== 'undefined' && module.exports) {
        return function (factory) { module.exports = factory(); };
    } else if (typeof define === 'function' && define.amd) {
        return define;
    } else if (typeof window !== 'undefined') {
        return function (factory) { window.MobileDetect = factory(); };
    } else {
        // please file a bug if you get this error!
        throw new Error('unknown environment');
    }
})());
},{}],2:[function(require,module,exports){
const responsiveController = require('./modules/responsive_controller');
const searchController = require('./modules/search_controller');
const gamesRequest = require('./modules/games_request');
const storageData = require('./modules/storage_data');
const gamesInsert = require('./modules/games_insert');
const htmlPartials = require('./modules/html_partials');

responsiveController({
	navigation: document.querySelector('#navigation'),
	toggleButton: document.querySelector('#toggleNavButton')
})

// Solicitud de juegos al servidor
gamesRequest().then(res => {
	if(typeof res !== 'string'){
		searchController(res, {
			input: document.querySelector('#searchInput'),
			suggestionBox: document.querySelector('#suggestionBox'),
			root: document.querySelector('#searchResultsRoot'),
			moreResultsButton: document.querySelector('#showMoreResultsButton')
		});
	} else {
		console.log(res);
	}
})

const lastPlayedList = storageData.get('lastplayed') || [];
const favoritesList = storageData.get('favorites') || [];

const lastPlayedRoot = document.querySelector('#lastPlayedRoot');
const favoritesRoot = document.querySelector('#favoritesRoot');

const removeFavoriteGame = (id) => {
	for(let i = 0; i < favoritesList.length; i++){
		if(favoritesList[i].id === id){
			favoritesList.splice(i, 1);
			storageData.set('favorites', favoritesList);
		}
	}
}

setTimeout(function(){
	// Muestra los ultimos juegos que jugó el usuarios
	// En caso de que no haya ningun juego muestra un mensaje.
	gamesInsert({
		root: lastPlayedRoot,
		gamesToInsert: lastPlayedList,
		html: htmlPartials.game
	}).then(() => {
		if(lastPlayedRoot.children.length === 0){
			lastPlayedRoot.innerHTML = htmlPartials.emptyGridMsg('Aun no has jugado ningún juego');
		}
	})

	// Muestra los juegos favoritos del usuario
	// Eventos de click para poder eliminar el juego del DOM y del localstorage
	// En caso de que no haya ningun juego muestra un mensaje.
	gamesInsert({
		root: favoritesRoot,
		gamesToInsert: favoritesList,
		html: htmlPartials.deletableGame
	}).then(() => { 
		const deleteButtons = document.getElementsByClassName('delete-button');
		for(let button of deleteButtons){
			button.onclick = () => {
				removeFavoriteGame(button.dataset.id);
				button.parentNode.remove();
				showEmptyMsg();
			}
		}

		const showEmptyMsg = () => {
			if(favoritesRoot.children.length === 0){
				favoritesRoot.innerHTML = htmlPartials.emptyGridMsg('Aun no has indicado a ningún juego como favorito');
			}
		}
		showEmptyMsg();
	});
}, 1500);


//Controlador que muestra el spinner de progreso cuando cambiamos de página
require('./modules/changepage_controller')();
require('./modules/appinfo');

},{"./modules/appinfo":4,"./modules/changepage_controller":5,"./modules/games_insert":7,"./modules/games_request":8,"./modules/html_partials":9,"./modules/responsive_controller":10,"./modules/search_controller":11,"./modules/storage_data":12}],3:[function(require,module,exports){
const animations = {};

const createAnim = (element, params) => {
	return element.animate(params.keyframes, params.props);
}

const keyframes = {
	fadeIn: [
		{transform: 'scale(0.6)', opacity: 0},
		{transform: 'scale(1)', opacity: 1}
	],
	fadeOutDown: [
		{transform: 'translateY(0)', opacity: 1},
		{transform: 'translateY(200px)', opacity: 0}
	],
	spin: [
		{transform: 'rotate(0deg)'},
		{transform: 'rotate(360deg)'}
	]
};

animations.fadeOutDown = (element) => {
	return createAnim(element, {
		keyframes: keyframes.fadeOutDown,
		props: {
			fill: 'both',
			easing: 'ease',
			duration: 1000,
		}
	});
}

animations.fadeIn = (element) => {
	return createAnim(element, {
		keyframes: keyframes.fadeIn,
		props: {
			fill: 'both',
			easing: 'ease',
			duration: 1000,
		}
	});
}

animations.spin = (element) => {
	return createAnim(element, {
		keyframes: keyframes.spin,
		props: {
			iterations: 'Infinity',
			easing: 'linear',
			duration: 1000
		}
	})
}

module.exports = animations;
},{}],4:[function(require,module,exports){
console.log("Buenos Juegos [PORTAL] v1.0.0");
},{}],5:[function(require,module,exports){
const htmlPartials = require('./html_partials');

module.exports = () => {
	window.addEventListener('beforeunload', (e) => {
		document.body.appendChild(htmlPartials.changePageSpinner());
		console.log('EVENT [beforeunload]');
	})
}
},{"./html_partials":9}],6:[function(require,module,exports){
const normalizeStr = (str) => {
	let string = str.toLowerCase();
  	return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

const filterGames = (games, toFilter) => {
	return games.filter((el) => {
		let allWords = el.title + ' ' + el.description;
		allWords = normalizeStr(allWords);
		let regex = new RegExp(normalizeStr(toFilter));
		/*if(regex.test(allWords)){
			console.log(allWords, regex);
		}*/
		return regex.test(allWords);
	});
}

module.exports = params => {
	/*
		objeto 'params' esperado: 
		params = {
			games,
			category,
			toFilter
		}
	*/

	let games = params.games;
	const category = params.category, 
		toFilter = params.toFilter,
		from = params.from,
		to = params.to;

	if(category !== '') {
		games = games.filter((el) => el.category === category);
		games = games.sort((a, b) => {
			return b.vote.average - a.vote.average;
		})
	}

	if(toFilter !== '') {
		games = filterGames(games, toFilter);
	}

	return games;
}
},{}],7:[function(require,module,exports){
const htmlPartials = require('./html_partials');

module.exports = params => {
	/*
		objeto 'params' esperado:
		params = {
			root,
			gamesToInsert,
			html
		}
	*/
	const root = params.root;
	const gamesToInsert = params.gamesToInsert;
	const html = params.html;
	let i = 0;

	return new Promise((resolve, reject) => {
		setInterval(() => {
			if(i < gamesToInsert.length){
				root.appendChild(html(gamesToInsert[i]));
				i++;
			} else {
				resolve();
			}
		}, 100);
	})
}
},{"./html_partials":9}],8:[function(require,module,exports){
module.exports = async () => {
	const response = await fetch('/json/juegos', {
		method: 'get',
		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		}
	})
	if(response.ok === true){
		return await response.json();
	} else {
		return 'games request http error';
	}
}
},{}],9:[function(require,module,exports){
const MobileDetect = require('mobile-detect');
const mobileDevice = new MobileDetect(window.navigator.userAgent);
const htmlPartials = {};

const onlyDesktopAvailable = (mobileReady) => {
	return (mobileDevice.mobile() !== null && mobileReady === false);
}

const getPrettyCategoryName = (category) => {
	switch(category){
		case 'accion': return 'Acción'; break;
		case 'aventura': return 'Aventura'; break;
		case 'chicas': return 'Chicas'; break;
		case 'arcade': return 'Arcade'; break;
		case 'deportes': return 'Deportes'; break;
		case 'puzzle': return 'Puzzle'; break;
		case 'carreras': return 'Carreras'; break;
	}
}

const stars = (valoration) => {
	let htmlStars = '';
	for(let i = 0; i < 5; i++){
		htmlStars += (i < valoration) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
	}
	return htmlStars;
} 

htmlPartials.searchGame = (gameParams) => {
	const title = gameParams.title;
	const url = gameParams.url;
	const mobileReady = gameParams.mobileready;

	const html = () => {
		let str = '';
		if(onlyDesktopAvailable(mobileReady)){
			str += `<a class="suggestion-link noselectable" href="/jugar/${url}">
				<img class="suggestion-link__only-desktop" src="/static/img/onlydesktop.svg" alt="Disponible solo en escritorio">`;
		} else {
			str += `<a class="suggestion-link" href="/jugar/${url}">`;
		}
		
		str += `<img class="suggestion-link__img" src="https://res.cloudinary.com/buenosjuegos/image/upload/c_fill,g_center,h_150,w_150/${url}.jpg" alt="${title}" width="100" height="100">
					<span class="suggestion-link__title">${title}</span>
				</a>`;

		return str;
	};

	return html();
}

htmlPartials.game = (gameParams) => {
	const title = gameParams.title;
	const url = gameParams.url;
	const category = getPrettyCategoryName(gameParams.category);
	const valoration = Math.round(gameParams.vote.average);
	const mobileReady = gameParams.mobileready;

	const html = () => {
		let str = '';

		if(onlyDesktopAvailable(mobileReady)){
			str += `<img class="game-item__only-desktop" src="/static/img/onlydesktop.svg" alt="Disponible solo en escritorio">
					<a class="game-item__link noselectable" href="/jugar/${url}">`;
		} else {
			str += `<a class="game-item__link" href="/jugar/${url}">`
		}

		str +=  `<img class="game-item__img" src="https://res.cloudinary.com/buenosjuegos/image/upload/c_fill,g_center,h_250,w_250/${url}.jpg" alt="${title}" width="100" height="100">
				<span class="game-item__title">${title}</span>
				<div class="game-item__row">
					<span class="game-item__category">${category}</span>
					<span class="game-item__valoration">
						${stars(valoration)}
					</span>
				</div>
			</a>`;

		return str;
	};
	
	const element = document.createElement('div');
	element.className = 'game-item';
	element.innerHTML = html();

	return element;
}


htmlPartials.deletableGame = (gameParams) => {
	const id = gameParams.id;
	const title = gameParams.title;
	const url = gameParams.url;
	const category = getPrettyCategoryName(gameParams.category);
	const valoration = Math.round(gameParams.vote.average);

	const html = `
			<button class="game-item__delete delete-button" data-id="${id}"> 
				<i class="fas fa-times"></i>
			</button>
			<a class="game-item__link" href="/jugar/${url}">
				<img class="game-item__img" src="https://res.cloudinary.com/buenosjuegos/image/upload/c_fill,g_center,h_250,w_250/${url}.jpg" alt="${title}" width="100" height="100">
				<span class="game-item__title">${title}</span>
				<div class="game-item__row">
					<span class="game-item__category">${category}</span>
					<span class="game-item__valoration">
						${stars(valoration)}
					</span>
				</div>
			</a>`;
	const element = document.createElement('div');
	element.className = 'game-item';
	element.innerHTML = html;

	return element;
}

htmlPartials.emptyGridMsg = (msg) => {
	return `<p class="grid-message">
				<i class="fas fa-exclamation-circle fa-pull-left"></i>
				${msg}
			</p>`;
}

htmlPartials.changePageSpinner = () => {
	const element = document.createElement('div');
	element.className = 'changepage-spinner';
	element.innerHTML = '<div class="fas fa-spinner fa-spin"></div>';
	return element;
}

htmlPartials.gameDontAvailable = () => {
	const element = document.createElement('div');
	element.className = 'dont-available';
	element.innerHTML = `<div class="dont-available__box">
							<p class="dont-available__text">
								<i class="fas fa-exclamation-triangle fa-pull-left"></i>
								Este juego <b>solo está disponible en PC</b>, regresa desde tu computadora
							</p>
							<a class="black-border-button" href="/">Ver otros juegos</a>
						</div>`;
	return element;
}

module.exports = htmlPartials;
},{"mobile-detect":1}],10:[function(require,module,exports){
module.exports = dom => {
	/*
		objeto 'dom' esperado:
		dom = {
			navigation,
			toggleButton
		}
	*/

	const navigation = dom.navigation;
	const toggleButton = dom.toggleButton;

	const body = document.body;


	// Evento de click que abre y cierra la navegación. Quita el scroll del body.
	toggleButton.onclick = () => {
		navigation.classList.toggle('open');
		body.classList.toggle('noscroll');
	}
}
},{}],11:[function(require,module,exports){
const animations = require('./animations');
const gamesFilter = require('./games_filter');
const htmlPartials = require('./html_partials');

module.exports = (gms, dom) => {
	/*
		objeto 'dom' esperado:
		dom = {
			input,
			suggestionBox,
			root,
			moreResultsButton
		}
	*/
	const games = gms;
	const input = dom.input;
	const suggestionBox = dom.suggestionBox;
	const root = dom.root;
	const moreResultsButton = dom.moreResultsButton;

	let suggestionOpen = false;
	let anim = animations.fadeIn(suggestionBox);
	anim.finish();

	// Evento cuando se escribe en el input
	input.addEventListener('input', () => {
		if(input.value.length > 3){

			let filteredGames = gamesFilter({
				games,
				category: '',
				toFilter: input.value
			});

			if(filteredGames.length > 10) {
				moreResultsButton.style.display = 'block';
				moreResultsButton.onclick = () => {
					input.parentNode.submit();
				}
			} else {
				moreResultsButton.style.display = 'none';
			}

			filteredGames = filteredGames.slice(0, 10);

			if(filteredGames.length > 0 && !suggestionOpen){
				root.innerHTML = '';
				for(game of filteredGames) {
					root.innerHTML += htmlPartials.searchGame({
						title: game.title,
						url: game.url,
						mobileready: game.mobileready
					})
				}
				suggestionBox.style.display = 'block';
				anim.playbackRate = 1;
				anim.play();
				suggestionOpen = true;
			}
			
		} else if(suggestionOpen){
			anim.playbackRate = -1;
			anim.onfinish = function(evt){
				suggestionBox.style.display = null;
				suggestionOpen = false;
				anim.onfinish = () => {};
			}
		}
	})
}
},{"./animations":3,"./games_filter":6,"./html_partials":9}],12:[function(require,module,exports){
module.exports = {
	get: (name) => {
		return JSON.parse(localStorage.getItem(name));
	},
	set: (name, object) => {
		localStorage.setItem(name, JSON.stringify(object));
	}
}
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbW9iaWxlLWRldGVjdC9tb2JpbGUtZGV0ZWN0LmpzIiwic3JjL3B1YmxpYy9zcmMvanMvY29sbGVjdGlvbi5qcyIsInNyYy9wdWJsaWMvc3JjL2pzL21vZHVsZXMvYW5pbWF0aW9ucy5qcyIsInNyYy9wdWJsaWMvc3JjL2pzL21vZHVsZXMvYXBwaW5mby5qcyIsInNyYy9wdWJsaWMvc3JjL2pzL21vZHVsZXMvY2hhbmdlcGFnZV9jb250cm9sbGVyLmpzIiwic3JjL3B1YmxpYy9zcmMvanMvbW9kdWxlcy9nYW1lc19maWx0ZXIuanMiLCJzcmMvcHVibGljL3NyYy9qcy9tb2R1bGVzL2dhbWVzX2luc2VydC5qcyIsInNyYy9wdWJsaWMvc3JjL2pzL21vZHVsZXMvZ2FtZXNfcmVxdWVzdC5qcyIsInNyYy9wdWJsaWMvc3JjL2pzL21vZHVsZXMvaHRtbF9wYXJ0aWFscy5qcyIsInNyYy9wdWJsaWMvc3JjL2pzL21vZHVsZXMvcmVzcG9uc2l2ZV9jb250cm9sbGVyLmpzIiwic3JjL3B1YmxpYy9zcmMvanMvbW9kdWxlcy9zZWFyY2hfY29udHJvbGxlci5qcyIsInNyYy9wdWJsaWMvc3JjL2pzL21vZHVsZXMvc3RvcmFnZV9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gVEhJUyBGSUxFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBFRElUIVxuLyohbW9iaWxlLWRldGVjdCB2MS40LjQgMjAxOS0wOS0yMSovXG4vKmdsb2JhbCBtb2R1bGU6ZmFsc2UsIGRlZmluZTpmYWxzZSovXG4vKmpzaGludCBsYXRlZGVmOmZhbHNlKi9cbi8qIUBsaWNlbnNlIENvcHlyaWdodCAyMDEzLCBIZWlucmljaCBHb2VibCwgTGljZW5zZTogTUlULCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hnb2VibC9tb2JpbGUtZGV0ZWN0LmpzKi9cbihmdW5jdGlvbiAoZGVmaW5lLCB1bmRlZmluZWQpIHtcbmRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGltcGwgPSB7fTtcblxuICAgIGltcGwubW9iaWxlRGV0ZWN0UnVsZXMgPSB7XG4gICAgXCJwaG9uZXNcIjoge1xuICAgICAgICBcImlQaG9uZVwiOiBcIlxcXFxiaVBob25lXFxcXGJ8XFxcXGJpUG9kXFxcXGJcIixcbiAgICAgICAgXCJCbGFja0JlcnJ5XCI6IFwiQmxhY2tCZXJyeXxcXFxcYkJCMTBcXFxcYnxyaW1bMC05XSt8XFxcXGIoQkJBMTAwfEJCQjEwMHxCQkQxMDB8QkJFMTAwfEJCRjEwMHxTVEgxMDApXFxcXGItWzAtOV0rXCIsXG4gICAgICAgIFwiSFRDXCI6IFwiSFRDfEhUQy4qKFNlbnNhdGlvbnxFdm98VmlzaW9ufEV4cGxvcmVyfDY4MDB8ODEwMHw4OTAwfEE3MjcyfFM1MTBlfEMxMTBlfExlZ2VuZHxEZXNpcmV8VDgyODIpfEFQWDUxNUNLVHxRdGVrOTA5MHxBUEE5MjkyS1R8SERfbWluaXxTZW5zYXRpb24uKlo3MTBlfFBHODYxMDB8WjcxNWV8RGVzaXJlLiooQTgxODF8SEQpfEFEUjYyMDB8QURSNjQwMEx8QURSNjQyNXwwMDFIVHxJbnNwaXJlIDRHfEFuZHJvaWQuKlxcXFxiRVZPXFxcXGJ8VC1Nb2JpbGUgRzF8WjUyMG18QW5kcm9pZCBbMC05Ll0rOyBQaXhlbFwiLFxuICAgICAgICBcIk5leHVzXCI6IFwiTmV4dXMgT25lfE5leHVzIFN8R2FsYXh5LipOZXh1c3xBbmRyb2lkLipOZXh1cy4qTW9iaWxlfE5leHVzIDR8TmV4dXMgNXxOZXh1cyA2XCIsXG4gICAgICAgIFwiRGVsbFwiOiBcIkRlbGxbO10/IChTdHJlYWt8QWVyb3xWZW51ZXxWZW51ZSBQcm98Rmxhc2h8U21va2V8TWluaSAzaVgpfFhDRDI4fFhDRDM1fFxcXFxiMDAxRExcXFxcYnxcXFxcYjEwMURMXFxcXGJ8XFxcXGJHUzAxXFxcXGJcIixcbiAgICAgICAgXCJNb3Rvcm9sYVwiOiBcIk1vdG9yb2xhfERST0lEWHxEUk9JRCBCSU9OSUN8XFxcXGJEcm9pZFxcXFxiLipCdWlsZHxBbmRyb2lkLipYb29tfEhSSTM5fE1PVC18QTEyNjB8QTE2ODB8QTU1NXxBODUzfEE4NTV8QTk1M3xBOTU1fEE5NTZ8TW90b3JvbGEuKkVMRUNUUklGWXxNb3Rvcm9sYS4qaTF8aTg2N3xpOTQwfE1CMjAwfE1CMzAwfE1CNTAxfE1CNTAyfE1CNTA4fE1CNTExfE1CNTIwfE1CNTI1fE1CNTI2fE1CNjExfE1CNjEyfE1CNjMyfE1CODEwfE1CODU1fE1CODYwfE1CODYxfE1CODY1fE1CODcwfE1FNTAxfE1FNTAyfE1FNTExfE1FNTI1fE1FNjAwfE1FNjMyfE1FNzIyfE1FODExfE1FODYwfE1FODYzfE1FODY1fE1UNjIwfE1UNzEwfE1UNzE2fE1UNzIwfE1UODEwfE1UODcwfE1UOTE3fE1vdG9yb2xhLipUSVRBTklVTXxXWDQzNXxXWDQ0NXxYVDMwMHxYVDMwMXxYVDMxMXxYVDMxNnxYVDMxN3xYVDMxOXxYVDMyMHxYVDM5MHxYVDUwMnxYVDUzMHxYVDUzMXxYVDUzMnxYVDUzNXxYVDYwM3xYVDYxMHxYVDYxMXxYVDYxNXxYVDY4MXxYVDcwMXxYVDcwMnxYVDcxMXxYVDcyMHxYVDgwMHxYVDgwNnxYVDg2MHxYVDg2MnxYVDg3NXxYVDg4MnxYVDg4M3xYVDg5NHxYVDkwMXxYVDkwN3xYVDkwOXxYVDkxMHxYVDkxMnxYVDkyOHxYVDkyNnxYVDkxNXxYVDkxOXxYVDkyNXxYVDEwMjF8XFxcXGJNb3RvIEVcXFxcYnxYVDEwNjh8WFQxMDkyfFhUMTA1MlwiLFxuICAgICAgICBcIlNhbXN1bmdcIjogXCJcXFxcYlNhbXN1bmdcXFxcYnxTTS1HOTUwRnxTTS1HOTU1RnxTTS1HOTI1MHxHVC0xOTMwMHxTR0gtSTMzN3xCR1QtUzUyMzB8R1QtQjIxMDB8R1QtQjI3MDB8R1QtQjI3MTB8R1QtQjMyMTB8R1QtQjMzMTB8R1QtQjM0MTB8R1QtQjM3MzB8R1QtQjM3NDB8R1QtQjU1MTB8R1QtQjU1MTJ8R1QtQjU3MjJ8R1QtQjY1MjB8R1QtQjczMDB8R1QtQjczMjB8R1QtQjczMzB8R1QtQjczNTB8R1QtQjc1MTB8R1QtQjc3MjJ8R1QtQjc4MDB8R1QtQzMwMTB8R1QtQzMwMTF8R1QtQzMwNjB8R1QtQzMyMDB8R1QtQzMyMTJ8R1QtQzMyMTJJfEdULUMzMjYyfEdULUMzMjIyfEdULUMzMzAwfEdULUMzMzAwS3xHVC1DMzMwM3xHVC1DMzMwM0t8R1QtQzMzMTB8R1QtQzMzMjJ8R1QtQzMzMzB8R1QtQzMzNTB8R1QtQzM1MDB8R1QtQzM1MTB8R1QtQzM1MzB8R1QtQzM2MzB8R1QtQzM3ODB8R1QtQzUwMTB8R1QtQzUyMTJ8R1QtQzY2MjB8R1QtQzY2MjV8R1QtQzY3MTJ8R1QtRTEwNTB8R1QtRTEwNzB8R1QtRTEwNzV8R1QtRTEwODB8R1QtRTEwODF8R1QtRTEwODV8R1QtRTEwODd8R1QtRTExMDB8R1QtRTExMDd8R1QtRTExMTB8R1QtRTExMjB8R1QtRTExMjV8R1QtRTExMzB8R1QtRTExNjB8R1QtRTExNzB8R1QtRTExNzV8R1QtRTExODB8R1QtRTExODJ8R1QtRTEyMDB8R1QtRTEyMTB8R1QtRTEyMjV8R1QtRTEyMzB8R1QtRTEzOTB8R1QtRTIxMDB8R1QtRTIxMjB8R1QtRTIxMjF8R1QtRTIxNTJ8R1QtRTIyMjB8R1QtRTIyMjJ8R1QtRTIyMzB8R1QtRTIyMzJ8R1QtRTIyNTB8R1QtRTIzNzB8R1QtRTI1NTB8R1QtRTI2NTJ8R1QtRTMyMTB8R1QtRTMyMTN8R1QtSTU1MDB8R1QtSTU1MDN8R1QtSTU3MDB8R1QtSTU4MDB8R1QtSTU4MDF8R1QtSTY0MTB8R1QtSTY0MjB8R1QtSTcxMTB8R1QtSTc0MTB8R1QtSTc1MDB8R1QtSTgwMDB8R1QtSTgxNTB8R1QtSTgxNjB8R1QtSTgxOTB8R1QtSTgzMjB8R1QtSTgzMzB8R1QtSTgzNTB8R1QtSTg1MzB8R1QtSTg3MDB8R1QtSTg3MDN8R1QtSTg5MTB8R1QtSTkwMDB8R1QtSTkwMDF8R1QtSTkwMDN8R1QtSTkwMTB8R1QtSTkwMjB8R1QtSTkwMjN8R1QtSTkwNzB8R1QtSTkwODJ8R1QtSTkxMDB8R1QtSTkxMDN8R1QtSTkyMjB8R1QtSTkyNTB8R1QtSTkzMDB8R1QtSTkzMDV8R1QtSTk1MDB8R1QtSTk1MDV8R1QtTTM1MTB8R1QtTTU2NTB8R1QtTTc1MDB8R1QtTTc2MDB8R1QtTTc2MDN8R1QtTTg4MDB8R1QtTTg5MTB8R1QtTjcwMDB8R1QtUzMxMTB8R1QtUzMzMTB8R1QtUzMzNTB8R1QtUzMzNTN8R1QtUzMzNzB8R1QtUzM2NTB8R1QtUzM2NTN8R1QtUzM3NzB8R1QtUzM4NTB8R1QtUzUyMTB8R1QtUzUyMjB8R1QtUzUyMjl8R1QtUzUyMzB8R1QtUzUyMzN8R1QtUzUyNTB8R1QtUzUyNTN8R1QtUzUyNjB8R1QtUzUyNjN8R1QtUzUyNzB8R1QtUzUzMDB8R1QtUzUzMzB8R1QtUzUzNTB8R1QtUzUzNjB8R1QtUzUzNjN8R1QtUzUzNjl8R1QtUzUzODB8R1QtUzUzODBEfEdULVM1NTYwfEdULVM1NTcwfEdULVM1NjAwfEdULVM1NjAzfEdULVM1NjEwfEdULVM1NjIwfEdULVM1NjYwfEdULVM1NjcwfEdULVM1NjkwfEdULVM1NzUwfEdULVM1NzgwfEdULVM1ODMwfEdULVM1ODM5fEdULVM2MTAyfEdULVM2NTAwfEdULVM3MDcwfEdULVM3MjAwfEdULVM3MjIwfEdULVM3MjMwfEdULVM3MjMzfEdULVM3MjUwfEdULVM3NTAwfEdULVM3NTMwfEdULVM3NTUwfEdULVM3NTYyfEdULVM3NzEwfEdULVM4MDAwfEdULVM4MDAzfEdULVM4NTAwfEdULVM4NTMwfEdULVM4NjAwfFNDSC1BMzEwfFNDSC1BNTMwfFNDSC1BNTcwfFNDSC1BNjEwfFNDSC1BNjMwfFNDSC1BNjUwfFNDSC1BNzkwfFNDSC1BNzk1fFNDSC1BODUwfFNDSC1BODcwfFNDSC1BODkwfFNDSC1BOTMwfFNDSC1BOTUwfFNDSC1BOTcwfFNDSC1BOTkwfFNDSC1JMTAwfFNDSC1JMTEwfFNDSC1JNDAwfFNDSC1JNDA1fFNDSC1JNTAwfFNDSC1JNTEwfFNDSC1JNTE1fFNDSC1JNjAwfFNDSC1JNzMwfFNDSC1JNzYwfFNDSC1JNzcwfFNDSC1JODMwfFNDSC1JOTEwfFNDSC1JOTIwfFNDSC1JOTU5fFNDSC1MQzExfFNDSC1OMTUwfFNDSC1OMzAwfFNDSC1SMTAwfFNDSC1SMzAwfFNDSC1SMzUxfFNDSC1SNDAwfFNDSC1SNDEwfFNDSC1UMzAwfFNDSC1VMzEwfFNDSC1VMzIwfFNDSC1VMzUwfFNDSC1VMzYwfFNDSC1VMzY1fFNDSC1VMzcwfFNDSC1VMzgwfFNDSC1VNDEwfFNDSC1VNDMwfFNDSC1VNDUwfFNDSC1VNDYwfFNDSC1VNDcwfFNDSC1VNDkwfFNDSC1VNTQwfFNDSC1VNTUwfFNDSC1VNjIwfFNDSC1VNjQwfFNDSC1VNjUwfFNDSC1VNjYwfFNDSC1VNzAwfFNDSC1VNzQwfFNDSC1VNzUwfFNDSC1VODEwfFNDSC1VODIwfFNDSC1VOTAwfFNDSC1VOTQwfFNDSC1VOTYwfFNDUy0yNlVDfFNHSC1BMTA3fFNHSC1BMTE3fFNHSC1BMTI3fFNHSC1BMTM3fFNHSC1BMTU3fFNHSC1BMTY3fFNHSC1BMTc3fFNHSC1BMTg3fFNHSC1BMTk3fFNHSC1BMjI3fFNHSC1BMjM3fFNHSC1BMjU3fFNHSC1BNDM3fFNHSC1BNTE3fFNHSC1BNTk3fFNHSC1BNjM3fFNHSC1BNjU3fFNHSC1BNjY3fFNHSC1BNjg3fFNHSC1BNjk3fFNHSC1BNzA3fFNHSC1BNzE3fFNHSC1BNzI3fFNHSC1BNzM3fFNHSC1BNzQ3fFNHSC1BNzY3fFNHSC1BNzc3fFNHSC1BNzk3fFNHSC1BODE3fFNHSC1BODI3fFNHSC1BODM3fFNHSC1BODQ3fFNHSC1BODY3fFNHSC1BODc3fFNHSC1BODg3fFNHSC1BODk3fFNHSC1BOTI3fFNHSC1CMTAwfFNHSC1CMTMwfFNHSC1CMjAwfFNHSC1CMjIwfFNHSC1DMTAwfFNHSC1DMTEwfFNHSC1DMTIwfFNHSC1DMTMwfFNHSC1DMTQwfFNHSC1DMTYwfFNHSC1DMTcwfFNHSC1DMTgwfFNHSC1DMjAwfFNHSC1DMjA3fFNHSC1DMjEwfFNHSC1DMjI1fFNHSC1DMjMwfFNHSC1DNDE3fFNHSC1DNDUwfFNHSC1EMzA3fFNHSC1EMzQ3fFNHSC1EMzU3fFNHSC1ENDA3fFNHSC1ENDE1fFNHSC1ENzgwfFNHSC1EODA3fFNHSC1EOTgwfFNHSC1FMTA1fFNHSC1FMjAwfFNHSC1FMzE1fFNHSC1FMzE2fFNHSC1FMzE3fFNHSC1FMzM1fFNHSC1FNTkwfFNHSC1FNjM1fFNHSC1FNzE1fFNHSC1FODkwfFNHSC1GMzAwfFNHSC1GNDgwfFNHSC1JMjAwfFNHSC1JMzAwfFNHSC1JMzIwfFNHSC1JNTUwfFNHSC1JNTc3fFNHSC1JNjAwfFNHSC1JNjA3fFNHSC1JNjE3fFNHSC1JNjI3fFNHSC1JNjM3fFNHSC1JNjc3fFNHSC1JNzAwfFNHSC1JNzE3fFNHSC1JNzI3fFNHSC1pNzQ3TXxTR0gtSTc3N3xTR0gtSTc4MHxTR0gtSTgyN3xTR0gtSTg0N3xTR0gtSTg1N3xTR0gtSTg5NnxTR0gtSTg5N3xTR0gtSTkwMHxTR0gtSTkwN3xTR0gtSTkxN3xTR0gtSTkyN3xTR0gtSTkzN3xTR0gtSTk5N3xTR0gtSjE1MHxTR0gtSjIwMHxTR0gtTDE3MHxTR0gtTDcwMHxTR0gtTTExMHxTR0gtTTE1MHxTR0gtTTIwMHxTR0gtTjEwNXxTR0gtTjUwMHxTR0gtTjYwMHxTR0gtTjYyMHxTR0gtTjYyNXxTR0gtTjcwMHxTR0gtTjcxMHxTR0gtUDEwN3xTR0gtUDIwN3xTR0gtUDMwMHxTR0gtUDMxMHxTR0gtUDUyMHxTR0gtUDczNXxTR0gtUDc3N3xTR0gtUTEwNXxTR0gtUjIxMHxTR0gtUjIyMHxTR0gtUjIyNXxTR0gtUzEwNXxTR0gtUzMwN3xTR0gtVDEwOXxTR0gtVDExOXxTR0gtVDEzOXxTR0gtVDIwOXxTR0gtVDIxOXxTR0gtVDIyOXxTR0gtVDIzOXxTR0gtVDI0OXxTR0gtVDI1OXxTR0gtVDMwOXxTR0gtVDMxOXxTR0gtVDMyOXxTR0gtVDMzOXxTR0gtVDM0OXxTR0gtVDM1OXxTR0gtVDM2OXxTR0gtVDM3OXxTR0gtVDQwOXxTR0gtVDQyOXxTR0gtVDQzOXxTR0gtVDQ1OXxTR0gtVDQ2OXxTR0gtVDQ3OXxTR0gtVDQ5OXxTR0gtVDUwOXxTR0gtVDUxOXxTR0gtVDUzOXxTR0gtVDU1OXxTR0gtVDU4OXxTR0gtVDYwOXxTR0gtVDYxOXxTR0gtVDYyOXxTR0gtVDYzOXxTR0gtVDY1OXxTR0gtVDY2OXxTR0gtVDY3OXxTR0gtVDcwOXxTR0gtVDcxOXxTR0gtVDcyOXxTR0gtVDczOXxTR0gtVDc0NnxTR0gtVDc0OXxTR0gtVDc1OXxTR0gtVDc2OXxTR0gtVDgwOXxTR0gtVDgxOXxTR0gtVDgzOXxTR0gtVDkxOXxTR0gtVDkyOXxTR0gtVDkzOXxTR0gtVDk1OXxTR0gtVDk4OXxTR0gtVTEwMHxTR0gtVTIwMHxTR0gtVTgwMHxTR0gtVjIwNXxTR0gtVjIwNnxTR0gtWDEwMHxTR0gtWDEwNXxTR0gtWDEyMHxTR0gtWDE0MHxTR0gtWDQyNnxTR0gtWDQyN3xTR0gtWDQ3NXxTR0gtWDQ5NXxTR0gtWDQ5N3xTR0gtWDUwN3xTR0gtWDYwMHxTR0gtWDYxMHxTR0gtWDYyMHxTR0gtWDYzMHxTR0gtWDcwMHxTR0gtWDgyMHxTR0gtWDg5MHxTR0gtWjEzMHxTR0gtWjE1MHxTR0gtWjE3MHxTR0gtWlgxMHxTR0gtWlgyMHxTSFctTTExMHxTUEgtQTEyMHxTUEgtQTQwMHxTUEgtQTQyMHxTUEgtQTQ2MHxTUEgtQTUwMHxTUEgtQTU2MHxTUEgtQTYwMHxTUEgtQTYyMHxTUEgtQTY2MHxTUEgtQTcwMHxTUEgtQTc0MHxTUEgtQTc2MHxTUEgtQTc5MHxTUEgtQTgwMHxTUEgtQTgyMHxTUEgtQTg0MHxTUEgtQTg4MHxTUEgtQTkwMHxTUEgtQTk0MHxTUEgtQTk2MHxTUEgtRDYwMHxTUEgtRDcwMHxTUEgtRDcxMHxTUEgtRDcyMHxTUEgtSTMwMHxTUEgtSTMyNXxTUEgtSTMzMHxTUEgtSTM1MHxTUEgtSTUwMHxTUEgtSTYwMHxTUEgtSTcwMHxTUEgtTDcwMHxTUEgtTTEwMHxTUEgtTTIyMHxTUEgtTTI0MHxTUEgtTTMwMHxTUEgtTTMwNXxTUEgtTTMyMHxTUEgtTTMzMHxTUEgtTTM1MHxTUEgtTTM2MHxTUEgtTTM3MHxTUEgtTTM4MHxTUEgtTTUxMHxTUEgtTTU0MHxTUEgtTTU1MHxTUEgtTTU2MHxTUEgtTTU3MHxTUEgtTTU4MHxTUEgtTTYxMHxTUEgtTTYyMHxTUEgtTTYzMHxTUEgtTTgwMHxTUEgtTTgxMHxTUEgtTTg1MHxTUEgtTTkwMHxTUEgtTTkxMHxTUEgtTTkyMHxTUEgtTTkzMHxTUEgtTjEwMHxTUEgtTjIwMHxTUEgtTjI0MHxTUEgtTjMwMHxTUEgtTjQwMHxTUEgtWjQwMHxTV0MtRTEwMHxTQ0gtaTkwOXxHVC1ONzEwMHxHVC1ONzEwNXxTQ0gtSTUzNXxTTS1OOTAwQXxTR0gtSTMxN3xTR0gtVDk5OUx8R1QtUzUzNjBCfEdULUk4MjYyfEdULVM2ODAyfEdULVM2MzEyfEdULVM2MzEwfEdULVM1MzEyfEdULVM1MzEwfEdULUk5MTA1fEdULUk4NTEwfEdULVM2NzkwTnxTTS1HNzEwNXxTTS1OOTAwNXxHVC1TNTMwMXxHVC1JOTI5NXxHVC1JOTE5NXxTTS1DMTAxfEdULVM3MzkyfEdULVM3NTYwfEdULUI3NjEwfEdULUk1NTEwfEdULVM3NTgyfEdULVM3NTMwRXxHVC1JODc1MHxTTS1HOTAwNlZ8U00tRzkwMDhWfFNNLUc5MDA5RHxTTS1HOTAwQXxTTS1HOTAwRHxTTS1HOTAwRnxTTS1HOTAwSHxTTS1HOTAwSXxTTS1HOTAwSnxTTS1HOTAwS3xTTS1HOTAwTHxTTS1HOTAwTXxTTS1HOTAwUHxTTS1HOTAwUjR8U00tRzkwMFN8U00tRzkwMFR8U00tRzkwMFZ8U00tRzkwMFc4fFNIVi1FMTYwS3xTQ0gtUDcwOXxTQ0gtUDcyOXxTTS1UMjU1OHxHVC1JOTIwNXxTTS1HOTM1MHxTTS1KMTIwRnxTTS1HOTIwRnxTTS1HOTIwVnxTTS1HOTMwRnxTTS1OOTEwQ3xTTS1BMzEwRnxHVC1JOTE5MHxTTS1KNTAwRk58U00tRzkwM0Z8U00tSjMzMEZcIixcbiAgICAgICAgXCJMR1wiOiBcIlxcXFxiTEdcXFxcYjt8TEdbLSBdPyhDODAwfEM5MDB8RTQwMHxFNjEwfEU5MDB8RS05MDB8RjE2MHxGMTgwS3xGMTgwTHxGMTgwU3w3MzB8ODU1fEwxNjB8TFM3NDB8TFM4NDB8TFM5NzB8TFU2MjAwfE1TNjkwfE1TNjk1fE1TNzcwfE1TODQwfE1TODcwfE1TOTEwfFA1MDB8UDcwMHxQNzA1fFZNNjk2fEFTNjgwfEFTNjk1fEFYODQwfEM3Mjl8RTk3MHxHUzUwNXwyNzJ8QzM5NXxFNzM5Qkt8RTk2MHxMNTVDfEw3NUN8TFM2OTZ8TFM4NjB8UDc2OUJLfFAzNTB8UDUwMHxQNTA5fFA4NzB8VU4yNzJ8VVM3MzB8VlM4NDB8VlM5NTB8TE4yNzJ8TE41MTB8TFM2NzB8TFM4NTV8TFc2OTB8TU4yNzB8TU41MTB8UDUwOXxQNzY5fFA5MzB8VU4yMDB8VU4yNzB8VU41MTB8VU42MTB8VVM2NzB8VVM3NDB8VVM3NjB8VVgyNjV8VVg4NDB8Vk4yNzF8Vk41MzB8VlM2NjB8VlM3MDB8VlM3NDB8VlM3NTB8VlM5MTB8VlM5MjB8VlM5MzB8Vlg5MjAwfFZYMTEwMDB8QVg4NDBBfExXNzcwfFA1MDZ8UDkyNXxQOTk5fEU2MTJ8RDk1NXxEODAyfE1TMzIzfE0yNTcpfExNLUc3MTBcIixcbiAgICAgICAgXCJTb255XCI6IFwiU29ueVNUfFNvbnlMVHxTb255RXJpY3Nzb258U29ueUVyaWNzc29uTFQxNWl2fExUMThpfEUxMGl8TFQyOGh8TFQyNnd8U29ueUVyaWNzc29uTVQyN2l8QzUzMDN8QzY5MDJ8QzY5MDN8QzY5MDZ8QzY5NDN8RDI1MzNcIixcbiAgICAgICAgXCJBc3VzXCI6IFwiQXN1cy4qR2FsYXh5fFBhZEZvbmUuKk1vYmlsZVwiLFxuICAgICAgICBcIk5va2lhTHVtaWFcIjogXCJMdW1pYSBbMC05XXszLDR9XCIsXG4gICAgICAgIFwiTWljcm9tYXhcIjogXCJNaWNyb21heC4qXFxcXGIoQTIxMHxBOTJ8QTg4fEE3MnxBMTExfEExMTBRfEExMTV8QTExNnxBMTEwfEE5MFN8QTI2fEE1MXxBMzV8QTU0fEEyNXxBMjd8QTg5fEE2OHxBNjV8QTU3fEE5MClcXFxcYlwiLFxuICAgICAgICBcIlBhbG1cIjogXCJQYWxtU291cmNlfFBhbG1cIixcbiAgICAgICAgXCJWZXJ0dVwiOiBcIlZlcnR1fFZlcnR1LipMdGR8VmVydHUuKkFzY2VudHxWZXJ0dS4qQXl4dGF8VmVydHUuKkNvbnN0ZWxsYXRpb24oRnxRdWVzdCk/fFZlcnR1LipNb25pa2F8VmVydHUuKlNpZ25hdHVyZVwiLFxuICAgICAgICBcIlBhbnRlY2hcIjogXCJQQU5URUNIfElNLUE4NTBTfElNLUE4NDBTfElNLUE4MzBMfElNLUE4MzBLfElNLUE4MzBTfElNLUE4MjBMfElNLUE4MTBLfElNLUE4MTBTfElNLUE4MDBTfElNLVQxMDBLfElNLUE3MjVMfElNLUE3ODBMfElNLUE3NzVDfElNLUE3NzBLfElNLUE3NjBTfElNLUE3NTBLfElNLUE3NDBTfElNLUE3MzBTfElNLUE3MjBMfElNLUE3MTBLfElNLUE2OTBMfElNLUE2OTBTfElNLUE2NTBTfElNLUE2MzBLfElNLUE2MDBTfFZFR0EgUFRMMjF8UFQwMDN8UDgwMTB8QURSOTEwTHxQNjAzMHxQNjAyMHxQOTA3MHxQNDEwMHxQOTA2MHxQNTAwMHxDRE04OTkyfFRYVDgwNDV8QURSODk5NXxJUzExUFR8UDIwMzB8UDYwMTB8UDgwMDB8UFQwMDJ8SVMwNnxDRE04OTk5fFA5MDUwfFBUMDAxfFRYVDgwNDB8UDIwMjB8UDkwMjB8UDIwMDB8UDcwNDB8UDcwMDB8Qzc5MFwiLFxuICAgICAgICBcIkZseVwiOiBcIklRMjMwfElRNDQ0fElRNDUwfElRNDQwfElRNDQyfElRNDQxfElRMjQ1fElRMjU2fElRMjM2fElRMjU1fElRMjM1fElRMjQ1fElRMjc1fElRMjQwfElRMjg1fElRMjgwfElRMjcwfElRMjYwfElRMjUwXCIsXG4gICAgICAgIFwiV2lrb1wiOiBcIktJVEUgNEd8SElHSFdBWXxHRVRBV0FZfFNUQUlSV0FZfERBUktTSURFfERBUktGVUxMfERBUktOSUdIVHxEQVJLTU9PTnxTTElERXxXQVggNEd8UkFJTkJPV3xCTE9PTXxTVU5TRVR8R09BKD8hbm5hKXxMRU5OWXxCQVJSWXxJR0dZfE9aWll8Q0lOSyBGSVZFfENJTksgUEVBWHxDSU5LIFBFQVggMnxDSU5LIFNMSU18Q0lOSyBTTElNIDJ8Q0lOSyArfENJTksgS0lOR3xDSU5LIFBFQVh8Q0lOSyBTTElNfFNVQkxJTVwiLFxuICAgICAgICBcImlNb2JpbGVcIjogXCJpLW1vYmlsZSAoSVF8aS1TVFlMRXxpZGVhfFpBQXxIaXR6KVwiLFxuICAgICAgICBcIlNpbVZhbGxleVwiOiBcIlxcXFxiKFNQLTgwfFhULTkzMHxTWC0zNDB8WFQtOTMwfFNYLTMxMHxTUC0zNjB8U1A2MHxTUFQtODAwfFNQLTEyMHxTUFQtODAwfFNQLTE0MHxTUFgtNXxTUFgtOHxTUC0xMDB8U1BYLTh8U1BYLTEyKVxcXFxiXCIsXG4gICAgICAgIFwiV29sZmdhbmdcIjogXCJBVC1CMjREfEFULUFTNTBIRHxBVC1BUzQwV3xBVC1BUzU1SER8QVQtQVM0NXEyfEFULUIyNkR8QVQtQVM1MFFcIixcbiAgICAgICAgXCJBbGNhdGVsXCI6IFwiQWxjYXRlbFwiLFxuICAgICAgICBcIk5pbnRlbmRvXCI6IFwiTmludGVuZG8gKDNEU3xTd2l0Y2gpXCIsXG4gICAgICAgIFwiQW1vaVwiOiBcIkFtb2lcIixcbiAgICAgICAgXCJJTlFcIjogXCJJTlFcIixcbiAgICAgICAgXCJPbmVQbHVzXCI6IFwiT05FUExVU1wiLFxuICAgICAgICBcIkdlbmVyaWNQaG9uZVwiOiBcIlRhcGF0YWxrfFBEQTt8U0FHRU18XFxcXGJtbXBcXFxcYnxwb2NrZXR8XFxcXGJwc3BcXFxcYnxzeW1iaWFufFNtYXJ0cGhvbmV8c21hcnRmb258dHJlb3x1cC5icm93c2VyfHVwLmxpbmt8dm9kYWZvbmV8XFxcXGJ3YXBcXFxcYnxub2tpYXxTZXJpZXM0MHxTZXJpZXM2MHxTNjB8U29ueUVyaWNzc29ufE45MDB8TUFVSS4qV0FQLipCcm93c2VyXCJcbiAgICB9LFxuICAgIFwidGFibGV0c1wiOiB7XG4gICAgICAgIFwiaVBhZFwiOiBcImlQYWR8aVBhZC4qTW9iaWxlXCIsXG4gICAgICAgIFwiTmV4dXNUYWJsZXRcIjogXCJBbmRyb2lkLipOZXh1c1tcXFxcc10rKDd8OXwxMClcIixcbiAgICAgICAgXCJHb29nbGVUYWJsZXRcIjogXCJBbmRyb2lkLipQaXhlbCBDXCIsXG4gICAgICAgIFwiU2Ftc3VuZ1RhYmxldFwiOiBcIlNBTVNVTkcuKlRhYmxldHxHYWxheHkuKlRhYnxTQy0wMUN8R1QtUDEwMDB8R1QtUDEwMDN8R1QtUDEwMTB8R1QtUDMxMDV8R1QtUDYyMTB8R1QtUDY4MDB8R1QtUDY4MTB8R1QtUDcxMDB8R1QtUDczMDB8R1QtUDczMTB8R1QtUDc1MDB8R1QtUDc1MTB8U0NILUk4MDB8U0NILUk4MTV8U0NILUk5MDV8U0dILUk5NTd8U0dILUk5ODd8U0dILVQ4NDl8U0dILVQ4NTl8U0dILVQ4Njl8U1BILVAxMDB8R1QtUDMxMDB8R1QtUDMxMDh8R1QtUDMxMTB8R1QtUDUxMDB8R1QtUDUxMTB8R1QtUDYyMDB8R1QtUDczMjB8R1QtUDc1MTF8R1QtTjgwMDB8R1QtUDg1MTB8U0dILUk0OTd8U1BILVA1MDB8U0dILVQ3Nzl8U0NILUk3MDV8U0NILUk5MTV8R1QtTjgwMTN8R1QtUDMxMTN8R1QtUDUxMTN8R1QtUDgxMTB8R1QtTjgwMTB8R1QtTjgwMDV8R1QtTjgwMjB8R1QtUDEwMTN8R1QtUDYyMDF8R1QtUDc1MDF8R1QtTjUxMDB8R1QtTjUxMDV8R1QtTjUxMTB8U0hWLUUxNDBLfFNIVi1FMTQwTHxTSFYtRTE0MFN8U0hWLUUxNTBTfFNIVi1FMjMwS3xTSFYtRTIzMEx8U0hWLUUyMzBTfFNIVy1NMTgwS3xTSFctTTE4MEx8U0hXLU0xODBTfFNIVy1NMTgwV3xTSFctTTMwMFd8U0hXLU0zMDVXfFNIVy1NMzgwS3xTSFctTTM4MFN8U0hXLU0zODBXfFNIVy1NNDMwV3xTSFctTTQ4MEt8U0hXLU00ODBTfFNIVy1NNDgwV3xTSFctTTQ4NVd8U0hXLU00ODZXfFNIVy1NNTAwV3xHVC1JOTIyOHxTQ0gtUDczOXxTQ0gtSTkyNXxHVC1JOTIwMHxHVC1QNTIwMHxHVC1QNTIxMHxHVC1QNTIxMFh8U00tVDMxMXxTTS1UMzEwfFNNLVQzMTBYfFNNLVQyMTB8U00tVDIxMFJ8U00tVDIxMXxTTS1QNjAwfFNNLVA2MDF8U00tUDYwNXxTTS1QOTAwfFNNLVA5MDF8U00tVDIxN3xTTS1UMjE3QXxTTS1UMjE3U3xTTS1QNjAwMHxTTS1UMzEwMHxTR0gtSTQ2N3xYRTUwMHxTTS1UMTEwfEdULVA1MjIwfEdULUk5MjAwWHxHVC1ONTExMFh8R1QtTjUxMjB8U00tUDkwNXxTTS1UMTExfFNNLVQyMTA1fFNNLVQzMTV8U00tVDMyMHxTTS1UMzIwWHxTTS1UMzIxfFNNLVQ1MjB8U00tVDUyNXxTTS1UNTMwTlV8U00tVDIzME5VfFNNLVQzMzBOVXxTTS1UOTAwfFhFNTAwVDFDfFNNLVA2MDVWfFNNLVA5MDVWfFNNLVQzMzdWfFNNLVQ1MzdWfFNNLVQ3MDdWfFNNLVQ4MDdWfFNNLVA2MDBYfFNNLVA5MDBYfFNNLVQyMTBYfFNNLVQyMzB8U00tVDIzMFh8U00tVDMyNXxHVC1QNzUwM3xTTS1UNTMxfFNNLVQzMzB8U00tVDUzMHxTTS1UNzA1fFNNLVQ3MDVDfFNNLVQ1MzV8U00tVDMzMXxTTS1UODAwfFNNLVQ3MDB8U00tVDUzN3xTTS1UODA3fFNNLVA5MDdBfFNNLVQzMzdBfFNNLVQ1MzdBfFNNLVQ3MDdBfFNNLVQ4MDdBfFNNLVQyMzd8U00tVDgwN1B8U00tUDYwN1R8U00tVDIxN1R8U00tVDMzN1R8U00tVDgwN1R8U00tVDExNk5RfFNNLVQxMTZCVXxTTS1QNTUwfFNNLVQzNTB8U00tVDU1MHxTTS1UOTAwMHxTTS1QOTAwMHxTTS1UNzA1WXxTTS1UODA1fEdULVAzMTEzfFNNLVQ3MTB8U00tVDgxMHxTTS1UODE1fFNNLVQzNjB8U00tVDUzM3xTTS1UMTEzfFNNLVQzMzV8U00tVDcxNXxTTS1UNTYwfFNNLVQ2NzB8U00tVDY3N3xTTS1UMzc3fFNNLVQ1Njd8U00tVDM1N1R8U00tVDU1NXxTTS1UNTYxfFNNLVQ3MTN8U00tVDcxOXxTTS1UODEzfFNNLVQ4MTl8U00tVDU4MHxTTS1UMzU1WT98U00tVDI4MHxTTS1UODE3QXxTTS1UODIwfFNNLVc3MDB8U00tUDU4MHxTTS1UNTg3fFNNLVAzNTB8U00tUDU1NU18U00tUDM1NU18U00tVDExM05VfFNNLVQ4MTVZfFNNLVQ1ODV8U00tVDI4NXxTTS1UODI1fFNNLVc3MDh8U00tVDgzNXxTTS1UODMwfFNNLVQ4MzdWfFNNLVQ3MjB8U00tVDUxMHxTTS1UMzg3VlwiLFxuICAgICAgICBcIktpbmRsZVwiOiBcIktpbmRsZXxTaWxrLipBY2NlbGVyYXRlZHxBbmRyb2lkLipcXFxcYihLRk9UfEtGVFR8S0ZKV0l8S0ZKV0F8S0ZPVEV8S0ZTT1dJfEtGVEhXSXxLRlRIV0F8S0ZBUFdJfEtGQVBXQXxXRkpXQUV8S0ZTQVdBfEtGU0FXSXxLRkFTV0l8S0ZBUldJfEtGRk9XSXxLRkdJV0l8S0ZNRVdJKVxcXFxifEFuZHJvaWQuKlNpbGtcXC9bMC05Ll0rIGxpa2UgQ2hyb21lXFwvWzAtOS5dKyAoPyFNb2JpbGUpXCIsXG4gICAgICAgIFwiU3VyZmFjZVRhYmxldFwiOiBcIldpbmRvd3MgTlQgWzAtOS5dKzsgQVJNOy4qKFRhYmxldHxBUk1CSlMpXCIsXG4gICAgICAgIFwiSFBUYWJsZXRcIjogXCJIUCBTbGF0ZSAoN3w4fDEwKXxIUCBFbGl0ZVBhZCA5MDB8aHAtdGFibGV0fEVsaXRlQm9vay4qVG91Y2h8SFAgOHxTbGF0ZSAyMXxIUCBTbGF0ZUJvb2sgMTBcIixcbiAgICAgICAgXCJBc3VzVGFibGV0XCI6IFwiXi4qUGFkRm9uZSgoPyFNb2JpbGUpLikqJHxUcmFuc2Zvcm1lcnxURjEwMXxURjEwMUd8VEYzMDBUfFRGMzAwVEd8VEYzMDBUTHxURjcwMFR8VEY3MDBLTHxURjcwMVR8VEY4MTBDfE1FMTcxfE1FMzAxVHxNRTMwMkN8TUUzNzFNR3xNRTM3MFR8TUUzNzJNR3xNRTE3MlZ8TUUxNzNYfE1FNDAwQ3xTbGlkZXIgU0wxMDF8XFxcXGJLMDBGXFxcXGJ8XFxcXGJLMDBDXFxcXGJ8XFxcXGJLMDBFXFxcXGJ8XFxcXGJLMDBMXFxcXGJ8VFgyMDFMQXxNRTE3NkN8TUUxMDJBfFxcXFxiTTgwVEFcXFxcYnxNRTM3MkNMfE1FNTYwQ0d8TUUzNzJDR3xNRTMwMktMfCBLMDEwIHwgSzAxMSB8IEswMTcgfCBLMDFFIHxNRTU3MkN8TUUxMDNLfE1FMTcwQ3xNRTE3MUN8XFxcXGJNRTcwQ1xcXFxifE1FNTgxQ3xNRTU4MUNMfE1FODUxMEN8TUUxODFDfFAwMVl8UE8xTUF8UDAxWnxcXFxcYlAwMjdcXFxcYnxcXFxcYlAwMjRcXFxcYnxcXFxcYlAwMENcXFxcYlwiLFxuICAgICAgICBcIkJsYWNrQmVycnlUYWJsZXRcIjogXCJQbGF5Qm9va3xSSU0gVGFibGV0XCIsXG4gICAgICAgIFwiSFRDdGFibGV0XCI6IFwiSFRDX0ZseWVyX1A1MTJ8SFRDIEZseWVyfEhUQyBKZXRzdHJlYW18SFRDLVA3MTVhfEhUQyBFVk8gVmlldyA0R3xQRzQxMjAwfFBHMDk0MTBcIixcbiAgICAgICAgXCJNb3Rvcm9sYVRhYmxldFwiOiBcInhvb218c2hvbGVzdHxNWjYxNXxNWjYwNXxNWjUwNXxNWjYwMXxNWjYwMnxNWjYwM3xNWjYwNHxNWjYwNnxNWjYwN3xNWjYwOHxNWjYwOXxNWjYxNXxNWjYxNnxNWjYxN1wiLFxuICAgICAgICBcIk5vb2tUYWJsZXRcIjogXCJBbmRyb2lkLipOb29rfE5vb2tDb2xvcnxub29rIGJyb3dzZXJ8Qk5SVjIwMHxCTlJWMjAwQXxCTlRWMjUwfEJOVFYyNTBBfEJOVFY0MDB8Qk5UVjYwMHxMb2dpY1BEIFpvb20yXCIsXG4gICAgICAgIFwiQWNlclRhYmxldFwiOiBcIkFuZHJvaWQuKjsgXFxcXGIoQTEwMHxBMTAxfEExMTB8QTIwMHxBMjEwfEEyMTF8QTUwMHxBNTAxfEE1MTB8QTUxMXxBNzAwfEE3MDF8VzUwMHxXNTAwUHxXNTAxfFc1MDFQfFc1MTB8VzUxMXxXNzAwfEcxMDB8RzEwMFd8QjEtQTcxfEIxLTcxMHxCMS03MTF8QTEtODEwfEExLTgxMXxBMS04MzApXFxcXGJ8VzMtODEwfFxcXFxiQTMtQTEwXFxcXGJ8XFxcXGJBMy1BMTFcXFxcYnxcXFxcYkEzLUEyMFxcXFxifFxcXFxiQTMtQTMwXCIsXG4gICAgICAgIFwiVG9zaGliYVRhYmxldFwiOiBcIkFuZHJvaWQuKihBVDEwMHxBVDEwNXxBVDIwMHxBVDIwNXxBVDI3MHxBVDI3NXxBVDMwMHxBVDMwNXxBVDFTNXxBVDUwMHxBVDU3MHxBVDcwMHxBVDgzMCl8VE9TSElCQS4qRk9MSU9cIixcbiAgICAgICAgXCJMR1RhYmxldFwiOiBcIlxcXFxiTC0wNkN8TEctVjkwOXxMRy1WOTAwfExHLVY3MDB8TEctVjUxMHxMRy1WNTAwfExHLVY0MTB8TEctVjQwMHxMRy1WSzgxMFxcXFxiXCIsXG4gICAgICAgIFwiRnVqaXRzdVRhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiKEYtMDFEfEYtMDJGfEYtMDVFfEYtMTBEfE01MzJ8UTU3MilcXFxcYlwiLFxuICAgICAgICBcIlByZXN0aWdpb1RhYmxldFwiOiBcIlBNUDMxNzBCfFBNUDMyNzBCfFBNUDM0NzBCfFBNUDcxNzBCfFBNUDMzNzBCfFBNUDM1NzBDfFBNUDU4NzBDfFBNUDM2NzBCfFBNUDU1NzBDfFBNUDU3NzBEfFBNUDM5NzBCfFBNUDM4NzBDfFBNUDU1ODBDfFBNUDU4ODBEfFBNUDU3ODBEfFBNUDU1ODhDfFBNUDcyODBDfFBNUDcyODBDM0d8UE1QNzI4MHxQTVA3ODgwRHxQTVA1NTk3RHxQTVA1NTk3fFBNUDcxMDBEfFBFUjM0NjR8UEVSMzI3NHxQRVIzNTc0fFBFUjM4ODR8UEVSNTI3NHxQRVI1NDc0fFBNUDUwOTdDUFJPfFBNUDUwOTd8UE1QNzM4MER8UE1QNTI5N0N8UE1QNTI5N0NfUVVBRHxQTVA4MTJFfFBNUDgxMkUzR3xQTVA4MTJGfFBNUDgxMEV8UE1QODgwVER8UE1UMzAxN3xQTVQzMDM3fFBNVDMwNDd8UE1UMzA1N3xQTVQ3MDA4fFBNVDU4ODd8UE1UNTAwMXxQTVQ1MDAyXCIsXG4gICAgICAgIFwiTGVub3ZvVGFibGV0XCI6IFwiTGVub3ZvIFRBQnxJZGVhKFRhYnxQYWQpKCBBMXxBMTB8IEsxfCl8VGhpbmtQYWQoWyBdKyk/VGFibGV0fFlUMy04NTBNfFlUMy1YOTBMfFlUMy1YOTBGfFlUMy1YOTBYfExlbm92by4qKFMyMTA5fFMyMTEwfFM1MDAwfFM2MDAwfEszMDExfEEzMDAwfEEzNTAwfEExMDAwfEEyMTA3fEEyMTA5fEExMTA3fEE1NTAwfEE3NjAwfEI2MDAwfEI4MDAwfEI4MDgwKSgtfCkoRkx8RnxIVnxIfCl8VEItWDEwM0Z8VEItWDMwNFh8VEItWDMwNEZ8VEItWDMwNEx8VEItWDUwNUZ8VEItWDUwNUx8VEItWDUwNVh8VEItWDYwNUZ8VEItWDYwNUx8VEItODcwM0Z8VEItODcwM1h8VEItODcwM058VEItODcwNE58VEItODcwNEZ8VEItODcwNFh8VEItODcwNFZ8VEItNzMwNEZ8VEItNzMwNEl8VEItNzMwNFh8VGFiMkE3LTEwRnxUYWIyQTctMjBGfFRCMi1YMzBMfFlUMy1YNTBMfFlUMy1YNTBGfFlUMy1YNTBNfFlULVg3MDVGfFlULVg3MDNGfFlULVg3MDNMfFlULVg3MDVMfFlULVg3MDVYfFRCMi1YMzBGfFRCMi1YMzBMfFRCMi1YMzBNfEEyMTA3QS1GfEEyMTA3QS1IfFRCMy03MzBGfFRCMy03MzBNfFRCMy03MzBYfFRCLTc1MDRGfFRCLTc1MDRYXCIsXG4gICAgICAgIFwiRGVsbFRhYmxldFwiOiBcIlZlbnVlIDExfFZlbnVlIDh8VmVudWUgN3xEZWxsIFN0cmVhayAxMHxEZWxsIFN0cmVhayA3XCIsXG4gICAgICAgIFwiWWFydmlrVGFibGV0XCI6IFwiQW5kcm9pZC4qXFxcXGIoVEFCMjEwfFRBQjIxMXxUQUIyMjR8VEFCMjUwfFRBQjI2MHxUQUIyNjR8VEFCMzEwfFRBQjM2MHxUQUIzNjR8VEFCNDEwfFRBQjQxMXxUQUI0MjB8VEFCNDI0fFRBQjQ1MHxUQUI0NjB8VEFCNDYxfFRBQjQ2NHxUQUI0NjV8VEFCNDY3fFRBQjQ2OHxUQUIwNy0xMDB8VEFCMDctMTAxfFRBQjA3LTE1MHxUQUIwNy0xNTF8VEFCMDctMTUyfFRBQjA3LTIwMHxUQUIwNy0yMDEtM0d8VEFCMDctMjEwfFRBQjA3LTIxMXxUQUIwNy0yMTJ8VEFCMDctMjE0fFRBQjA3LTIyMHxUQUIwNy00MDB8VEFCMDctNDg1fFRBQjA4LTE1MHxUQUIwOC0yMDB8VEFCMDgtMjAxLTNHfFRBQjA4LTIwMS0zMHxUQUIwOS0xMDB8VEFCMDktMjExfFRBQjA5LTQxMHxUQUIxMC0xNTB8VEFCMTAtMjAxfFRBQjEwLTIxMXxUQUIxMC00MDB8VEFCMTAtNDEwfFRBQjEzLTIwMXxUQUIyNzRFVUt8VEFCMjc1RVVLfFRBQjM3NEVVS3xUQUI0NjJFVUt8VEFCNDc0RVVLfFRBQjktMjAwKVxcXFxiXCIsXG4gICAgICAgIFwiTWVkaW9uVGFibGV0XCI6IFwiQW5kcm9pZC4qXFxcXGJPWU9cXFxcYnxMSUZFLiooUDkyMTJ8UDk1MTR8UDk1MTZ8Uzk1MTIpfExJRkVUQUJcIixcbiAgICAgICAgXCJBcm5vdmFUYWJsZXRcIjogXCI5N0c0fEFOMTBHMnxBTjdiRzN8QU43ZkczfEFOOEczfEFOOGNHM3xBTjdHM3xBTjlHM3xBTjdkRzN8QU43ZEczU1R8QU43ZEczQ2hpbGRQYWR8QU4xMGJHM3xBTjEwYkczRFR8QU45RzJcIixcbiAgICAgICAgXCJJbnRlbnNvVGFibGV0XCI6IFwiSU5NODAwMktQfElOTTEwMTBGUHxJTk04MDVORHxJbnRlbnNvIFRhYnxUQUIxMDA0XCIsXG4gICAgICAgIFwiSVJVVGFibGV0XCI6IFwiTTcwMnByb1wiLFxuICAgICAgICBcIk1lZ2Fmb25UYWJsZXRcIjogXCJNZWdhRm9uIFY5fFxcXFxiWlRFIFY5XFxcXGJ8QW5kcm9pZC4qXFxcXGJNVDdBXFxcXGJcIixcbiAgICAgICAgXCJFYm9kYVRhYmxldFwiOiBcIkUtQm9kYSAoU3VwcmVtZXxJbXByZXNzcGVlZHxJenp5Y29tbXxFc3NlbnRpYWwpXCIsXG4gICAgICAgIFwiQWxsVmlld1RhYmxldFwiOiBcIkFsbHZpZXcuKihWaXZhfEFsbGRyb3xDaXR5fFNwZWVkfEFsbCBUVnxGcmVuenl8UXVhc2FyfFNoaW5lfFRYMXxBWDF8QVgyKVwiLFxuICAgICAgICBcIkFyY2hvc1RhYmxldFwiOiBcIlxcXFxiKDEwMUc5fDgwRzl8QTEwMUlUKVxcXFxifFFpbGl2ZSA5N1J8QXJjaG9zNXxcXFxcYkFSQ0hPUyAoNzB8Nzl8ODB8OTB8OTd8MTAxfEZBTUlMWVBBRHwpKGJ8Y3wpKEcxMHwgQ29iYWx0fCBUSVRBTklVTShIRHwpfCBYZW5vbnwgTmVvbnxYU0t8IDJ8IFhTIDJ8IFBMQVRJTlVNfCBDQVJCT058R0FNRVBBRClcXFxcYlwiLFxuICAgICAgICBcIkFpbm9sVGFibGV0XCI6IFwiTk9WTzd8Tk9WTzh8Tk9WTzEwfE5vdm83QXVyb3JhfE5vdm83QmFzaWN8Tk9WTzdQQUxBRElOfG5vdm85LVNwYXJrXCIsXG4gICAgICAgIFwiTm9raWFMdW1pYVRhYmxldFwiOiBcIkx1bWlhIDI1MjBcIixcbiAgICAgICAgXCJTb255VGFibGV0XCI6IFwiU29ueS4qVGFibGV0fFhwZXJpYSBUYWJsZXR8U29ueSBUYWJsZXQgU3xTTy0wM0V8U0dQVDEyfFNHUFQxM3xTR1BUMTE0fFNHUFQxMjF8U0dQVDEyMnxTR1BUMTIzfFNHUFQxMTF8U0dQVDExMnxTR1BUMTEzfFNHUFQxMzF8U0dQVDEzMnxTR1BUMTMzfFNHUFQyMTF8U0dQVDIxMnxTR1BUMjEzfFNHUDMxMXxTR1AzMTJ8U0dQMzIxfEVCUkQxMTAxfEVCUkQxMTAyfEVCUkQxMjAxfFNHUDM1MXxTR1AzNDF8U0dQNTExfFNHUDUxMnxTR1A1MjF8U0dQNTQxfFNHUDU1MXxTR1A2MjF8U0dQNjQxfFNHUDYxMnxTT1QzMXxTR1A3NzF8U0dQNjExfFNHUDYxMnxTR1A3MTJcIixcbiAgICAgICAgXCJQaGlsaXBzVGFibGV0XCI6IFwiXFxcXGIoUEkyMDEwfFBJMzAwMHxQSTMxMDB8UEkzMTA1fFBJMzExMHxQSTMyMDV8UEkzMjEwfFBJMzkwMHxQSTQwMTB8UEk3MDAwfFBJNzEwMClcXFxcYlwiLFxuICAgICAgICBcIkN1YmVUYWJsZXRcIjogXCJBbmRyb2lkLiooSzhHVHxVOUdUfFUxMEdUfFUxNkdUfFUxN0dUfFUxOEdUfFUxOUdUfFUyMEdUfFUyM0dUfFUzMEdUKXxDVUJFIFU4R1RcIixcbiAgICAgICAgXCJDb2J5VGFibGV0XCI6IFwiTUlEMTA0MnxNSUQxMDQ1fE1JRDExMjV8TUlEMTEyNnxNSUQ3MDEyfE1JRDcwMTR8TUlENzAxNXxNSUQ3MDM0fE1JRDcwMzV8TUlENzAzNnxNSUQ3MDQyfE1JRDcwNDh8TUlENzEyN3xNSUQ4MDQyfE1JRDgwNDh8TUlEODEyN3xNSUQ5MDQyfE1JRDk3NDB8TUlEOTc0MnxNSUQ3MDIyfE1JRDcwMTBcIixcbiAgICAgICAgXCJNSURUYWJsZXRcIjogXCJNOTcwMXxNOTAwMHxNOTEwMHxNODA2fE0xMDUyfE04MDZ8VDcwM3xNSUQ3MDF8TUlENzEzfE1JRDcxMHxNSUQ3Mjd8TUlENzYwfE1JRDgzMHxNSUQ3Mjh8TUlEOTMzfE1JRDEyNXxNSUQ4MTB8TUlENzMyfE1JRDEyMHxNSUQ5MzB8TUlEODAwfE1JRDczMXxNSUQ5MDB8TUlEMTAwfE1JRDgyMHxNSUQ3MzV8TUlEOTgwfE1JRDEzMHxNSUQ4MzN8TUlENzM3fE1JRDk2MHxNSUQxMzV8TUlEODYwfE1JRDczNnxNSUQxNDB8TUlEOTMwfE1JRDgzNXxNSUQ3MzN8TUlENFgxMFwiLFxuICAgICAgICBcIk1TSVRhYmxldFwiOiBcIk1TSSBcXFxcYihQcmltbyA3M0t8UHJpbW8gNzNMfFByaW1vIDgxTHxQcmltbyA3N3xQcmltbyA5M3xQcmltbyA3NXxQcmltbyA3NnxQcmltbyA3M3xQcmltbyA4MXxQcmltbyA5MXxQcmltbyA5MHxFbmpveSA3MXxFbmpveSA3fEVuam95IDEwKVxcXFxiXCIsXG4gICAgICAgIFwiU01pVFRhYmxldFwiOiBcIkFuZHJvaWQuKihcXFxcYk1JRFxcXFxifE1JRC01NjB8TVRWLVQxMjAwfE1UVi1QTkQ1MzF8TVRWLVAxMTAxfE1UVi1QTkQ1MzApXCIsXG4gICAgICAgIFwiUm9ja0NoaXBUYWJsZXRcIjogXCJBbmRyb2lkLiooUksyODE4fFJLMjgwOEF8UksyOTE4fFJLMzA2Nil8UksyNzM4fFJLMjgwOEFcIixcbiAgICAgICAgXCJGbHlUYWJsZXRcIjogXCJJUTMxMHxGbHkgVmlzaW9uXCIsXG4gICAgICAgIFwiYnFUYWJsZXRcIjogXCJBbmRyb2lkLiooYnEpPy4qXFxcXGIoRWxjYW5vfEN1cmllfEVkaXNvbnxNYXh3ZWxsfEtlcGxlcnxQYXNjYWx8VGVzbGF8SHlwYXRpYXxQbGF0b258TmV3dG9ufExpdmluZ3N0b25lfENlcnZhbnRlc3xBdmFudHxBcXVhcmlzIChbRXxNXTEwfE04KSlcXFxcYnxNYXh3ZWxsLipMaXRlfE1heHdlbGwuKlBsdXNcIixcbiAgICAgICAgXCJIdWF3ZWlUYWJsZXRcIjogXCJNZWRpYVBhZHxNZWRpYVBhZCA3IFlvdXRofElERU9TIFM3fFM3LTIwMWN8UzctMjAydXxTNy0xMDF8UzctMTAzfFM3LTEwNHxTNy0xMDV8UzctMTA2fFM3LTIwMXxTNy1TbGltfE0yLUEwMUx8QkFILUwwOXxCQUgtVzA5fEFHUy1MMDl8Q01SLUFMMTlcIixcbiAgICAgICAgXCJOZWNUYWJsZXRcIjogXCJcXFxcYk4tMDZEfFxcXFxiTi0wOERcIixcbiAgICAgICAgXCJQYW50ZWNoVGFibGV0XCI6IFwiUGFudGVjaC4qUDQxMDBcIixcbiAgICAgICAgXCJCcm9uY2hvVGFibGV0XCI6IFwiQnJvbmNoby4qKE43MDF8TjcwOHxOODAyfGE3MTApXCIsXG4gICAgICAgIFwiVmVyc3VzVGFibGV0XCI6IFwiVE9VQ0hQQUQuKls3ODkxMF18XFxcXGJUT1VDSFRBQlxcXFxiXCIsXG4gICAgICAgIFwiWnluY1RhYmxldFwiOiBcInoxMDAwfFo5OSAyR3x6OTMwfHo5OTB8ejkwOXxaOTE5fHo5MDBcIixcbiAgICAgICAgXCJQb3NpdGl2b1RhYmxldFwiOiBcIlRCMDdTVEF8VEIxMFNUQXxUQjA3RlRBfFRCMTBGVEFcIixcbiAgICAgICAgXCJOYWJpVGFibGV0XCI6IFwiQW5kcm9pZC4qXFxcXGJOYWJpXCIsXG4gICAgICAgIFwiS29ib1RhYmxldFwiOiBcIktvYm8gVG91Y2h8XFxcXGJLMDgwXFxcXGJ8XFxcXGJWb3hcXFxcYiBCdWlsZHxcXFxcYkFyY1xcXFxiIEJ1aWxkXCIsXG4gICAgICAgIFwiRGFuZXdUYWJsZXRcIjogXCJEU2xpZGUuKlxcXFxiKDcwMHw3MDFSfDcwMnw3MDNSfDcwNHw4MDJ8OTcwfDk3MXw5NzJ8OTczfDk3NHwxMDEwfDEwMTIpXFxcXGJcIixcbiAgICAgICAgXCJUZXhldFRhYmxldFwiOiBcIk5hdmlQYWR8VEItNzcyQXxUTS03MDQ1fFRNLTcwNTV8VE0tOTc1MHxUTS03MDE2fFRNLTcwMjR8VE0tNzAyNnxUTS03MDQxfFRNLTcwNDN8VE0tNzA0N3xUTS04MDQxfFRNLTk3NDF8VE0tOTc0N3xUTS05NzQ4fFRNLTk3NTF8VE0tNzAyMnxUTS03MDIxfFRNLTcwMjB8VE0tNzAxMXxUTS03MDEwfFRNLTcwMjN8VE0tNzAyNXxUTS03MDM3V3xUTS03MDM4V3xUTS03MDI3V3xUTS05NzIwfFRNLTk3MjV8VE0tOTczN1d8VE0tMTAyMHxUTS05NzM4V3xUTS05NzQwfFRNLTk3NDNXfFRCLTgwN0F8VEItNzcxQXxUQi03MjdBfFRCLTcyNUF8VEItNzE5QXxUQi04MjNBfFRCLTgwNUF8VEItNzIzQXxUQi03MTVBfFRCLTcwN0F8VEItNzA1QXxUQi03MDlBfFRCLTcxMUF8VEItODkwSER8VEItODgwSER8VEItNzkwSER8VEItNzgwSER8VEItNzcwSER8VEItNzIxSER8VEItNzEwSER8VEItNDM0SER8VEItODYwSER8VEItODQwSER8VEItNzYwSER8VEItNzUwSER8VEItNzQwSER8VEItNzMwSER8VEItNzIySER8VEItNzIwSER8VEItNzAwSER8VEItNTAwSER8VEItNDcwSER8VEItNDMxSER8VEItNDMwSER8VEItNTA2fFRCLTUwNHxUQi00NDZ8VEItNDM2fFRCLTQxNnxUQi0xNDZTRXxUQi0xMjZTRVwiLFxuICAgICAgICBcIlBsYXlzdGF0aW9uVGFibGV0XCI6IFwiUGxheXN0YXRpb24uKihQb3J0YWJsZXxWaXRhKVwiLFxuICAgICAgICBcIlRyZWtzdG9yVGFibGV0XCI6IFwiU1QxMDQxNi0xfFZUMTA0MTYtMXxTVDcwNDA4LTF8U1Q3MDJ4eC0xfFNUNzAyeHgtMnxTVDgwMjA4fFNUOTcyMTZ8U1Q3MDEwNC0yfFZUMTA0MTYtMnxTVDEwMjE2LTJBfFN1cmZUYWJcIixcbiAgICAgICAgXCJQeWxlQXVkaW9UYWJsZXRcIjogXCJcXFxcYihQVEJMMTBDRVV8UFRCTDEwQ3xQVEJMNzJCQ3xQVEJMNzJCQ0VVfFBUQkw3Q0VVfFBUQkw3Q3xQVEJMOTJCQ3xQVEJMOTJCQ0VVfFBUQkw5Q0VVfFBUQkw5Q1VLfFBUQkw5QylcXFxcYlwiLFxuICAgICAgICBcIkFkdmFuVGFibGV0XCI6IFwiQW5kcm9pZC4qIFxcXFxiKEUzQXxUM1h8VDVDfFQ1QnxUM0V8VDNDfFQzQnxUMUp8VDFGfFQyQXxUMUh8VDFpfEUxQ3xUMS1FfFQ1LUF8VDR8RTEtQnxUMkNpfFQxLUJ8VDEtRHxPMS1BfEUxLUF8VDEtQXxUM0F8VDRpKVxcXFxiIFwiLFxuICAgICAgICBcIkRhbnlUZWNoVGFibGV0XCI6IFwiR2VuaXVzIFRhYiBHM3xHZW5pdXMgVGFiIFMyfEdlbml1cyBUYWIgUTN8R2VuaXVzIFRhYiBHNHxHZW5pdXMgVGFiIFE0fEdlbml1cyBUYWIgRy1JSXxHZW5pdXMgVEFCIEdJSXxHZW5pdXMgVEFCIEdJSUl8R2VuaXVzIFRhYiBTMVwiLFxuICAgICAgICBcIkdhbGFwYWRUYWJsZXRcIjogXCJBbmRyb2lkLipcXFxcYkcxXFxcXGIoPyFcXFxcKSlcIixcbiAgICAgICAgXCJNaWNyb21heFRhYmxldFwiOiBcIkZ1bmJvb2t8TWljcm9tYXguKlxcXFxiKFAyNTB8UDU2MHxQMzYwfFAzNjJ8UDYwMHxQMzAwfFAzNTB8UDUwMHxQMjc1KVxcXFxiXCIsXG4gICAgICAgIFwiS2FyYm9ublRhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiKEEzOXxBMzd8QTM0fFNUOHxTVDEwfFNUN3xTbWFydCBUYWIzfFNtYXJ0IFRhYjIpXFxcXGJcIixcbiAgICAgICAgXCJBbGxGaW5lVGFibGV0XCI6IFwiRmluZTcgR2VuaXVzfEZpbmU3IFNoaW5lfEZpbmU3IEFpcnxGaW5lOCBTdHlsZXxGaW5lOSBNb3JlfEZpbmUxMCBKb3l8RmluZTExIFdpZGVcIixcbiAgICAgICAgXCJQUk9TQ0FOVGFibGV0XCI6IFwiXFxcXGIoUEVNNjN8UExUMTAyM0d8UExUMTA0MXxQTFQxMDQ0fFBMVDEwNDRHfFBMVDEwOTF8UExUNDMxMXxQTFQ0MzExUEx8UExUNDMxNXxQTFQ3MDMwfFBMVDcwMzN8UExUNzAzM0R8UExUNzAzNXxQTFQ3MDM1RHxQTFQ3MDQ0S3xQTFQ3MDQ1S3xQTFQ3MDQ1S0J8UExUNzA3MUtHfFBMVDcwNzJ8UExUNzIyM0d8UExUNzIyNUd8UExUNzc3N0d8UExUNzgxMEt8UExUNzg0OUd8UExUNzg1MUd8UExUNzg1Mkd8UExUODAxNXxQTFQ4MDMxfFBMVDgwMzR8UExUODAzNnxQTFQ4MDgwS3xQTFQ4MDgyfFBMVDgwODh8UExUODIyM0d8UExUODIzNEd8UExUODIzNUd8UExUODgxNkt8UExUOTAxMXxQTFQ5MDQ1S3xQTFQ5MjMzR3xQTFQ5NzM1fFBMVDk3NjBHfFBMVDk3NzBHKVxcXFxiXCIsXG4gICAgICAgIFwiWU9ORVNUYWJsZXRcIjogXCJCUTEwNzh8QkMxMDAzfEJDMTA3N3xSSzk3MDJ8QkM5NzMwfEJDOTAwMXxJVDkwMDF8QkM3MDA4fEJDNzAxMHxCQzcwOHxCQzcyOHxCQzcwMTJ8QkM3MDMwfEJDNzAyN3xCQzcwMjZcIixcbiAgICAgICAgXCJDaGFuZ0ppYVRhYmxldFwiOiBcIlRQQzcxMDJ8VFBDNzEwM3xUUEM3MTA1fFRQQzcxMDZ8VFBDNzEwN3xUUEM3MjAxfFRQQzcyMDN8VFBDNzIwNXxUUEM3MjEwfFRQQzc3MDh8VFBDNzcwOXxUUEM3NzEyfFRQQzcxMTB8VFBDODEwMXxUUEM4MTAzfFRQQzgxMDV8VFBDODEwNnxUUEM4MjAzfFRQQzgyMDV8VFBDODUwM3xUUEM5MTA2fFRQQzk3MDF8VFBDOTcxMDF8VFBDOTcxMDN8VFBDOTcxMDV8VFBDOTcxMDZ8VFBDOTcxMTF8VFBDOTcxMTN8VFBDOTcyMDN8VFBDOTc2MDN8VFBDOTc4MDl8VFBDOTcyMDV8VFBDMTAxMDF8VFBDMTAxMDN8VFBDMTAxMDZ8VFBDMTAxMTF8VFBDMTAyMDN8VFBDMTAyMDV8VFBDMTA1MDNcIixcbiAgICAgICAgXCJHVVRhYmxldFwiOiBcIlRYLUExMzAxfFRYLU05MDAyfFE3MDJ8a2YwMjZcIixcbiAgICAgICAgXCJQb2ludE9mVmlld1RhYmxldFwiOiBcIlRBQi1QNTA2fFRBQi1uYXZpLTctM0ctTXxUQUItUDUxN3xUQUItUC01Mjd8VEFCLVA3MDF8VEFCLVA3MDN8VEFCLVA3MjF8VEFCLVA3MzFOfFRBQi1QNzQxfFRBQi1QODI1fFRBQi1QOTA1fFRBQi1QOTI1fFRBQi1QUjk0NXxUQUItUEwxMDE1fFRBQi1QMTAyNXxUQUItUEkxMDQ1fFRBQi1QMTMyNXxUQUItUFJPVEFCWzAtOV0rfFRBQi1QUk9UQUIyNXxUQUItUFJPVEFCMjZ8VEFCLVBST1RBQjI3fFRBQi1QUk9UQUIyNlhMfFRBQi1QUk9UQUIyLUlQUzl8VEFCLVBST1RBQjMwLUlQUzl8VEFCLVBST1RBQjI1WFhMfFRBQi1QUk9UQUIyNi1JUFMxMHxUQUItUFJPVEFCMzAtSVBTMTBcIixcbiAgICAgICAgXCJPdmVybWF4VGFibGV0XCI6IFwiT1YtKFN0ZWVsQ29yZXxOZXdCYXNlfEJhc2Vjb3JlfEJhc2VvbmV8RXhlbGxlbnxRdWF0dG9yfEVkdVRhYnxTb2x1dGlvbnxBQ1RJT058QmFzaWNUYWJ8VGVkZHlUYWJ8TWFnaWNUYWJ8U3RyZWFtfFRCLTA4fFRCLTA5KXxRdWFsY29yZSAxMDI3XCIsXG4gICAgICAgIFwiSENMVGFibGV0XCI6IFwiSENMLipUYWJsZXR8Q29ubmVjdC0zRy0yLjB8Q29ubmVjdC0yRy0yLjB8TUUgVGFibGV0IFUxfE1FIFRhYmxldCBVMnxNRSBUYWJsZXQgRzF8TUUgVGFibGV0IFgxfE1FIFRhYmxldCBZMnxNRSBUYWJsZXQgU3luY1wiLFxuICAgICAgICBcIkRQU1RhYmxldFwiOiBcIkRQUyBEcmVhbSA5fERQUyBEdWFsIDdcIixcbiAgICAgICAgXCJWaXN0dXJlVGFibGV0XCI6IFwiVjk3IEhEfGk3NSAzR3xWaXN0dXJlIFY0KCBIRCk/fFZpc3R1cmUgVjUoIEhEKT98VmlzdHVyZSBWMTBcIixcbiAgICAgICAgXCJDcmVzdGFUYWJsZXRcIjogXCJDVFAoLSk/ODEwfENUUCgtKT84MTh8Q1RQKC0pPzgyOHxDVFAoLSk/ODM4fENUUCgtKT84ODh8Q1RQKC0pPzk3OHxDVFAoLSk/OTgwfENUUCgtKT85ODd8Q1RQKC0pPzk4OHxDVFAoLSk/OTg5XCIsXG4gICAgICAgIFwiTWVkaWF0ZWtUYWJsZXRcIjogXCJcXFxcYk1UODEyNXxNVDgzODl8TVQ4MTM1fE1UODM3N1xcXFxiXCIsXG4gICAgICAgIFwiQ29uY29yZGVUYWJsZXRcIjogXCJDb25jb3JkZShbIF0rKT9UYWJ8Q29uQ29yZGUgUmVhZE1hblwiLFxuICAgICAgICBcIkdvQ2xldmVyVGFibGV0XCI6IFwiR09DTEVWRVIgVEFCfEE3R09DTEVWRVJ8TTEwNDJ8TTc4NDF8TTc0MnxSMTA0MkJLfFIxMDQxfFRBQiBBOTc1fFRBQiBBNzg0MnxUQUIgQTc0MXxUQUIgQTc0MUx8VEFCIE03MjNHfFRBQiBNNzIxfFRBQiBBMTAyMXxUQUIgSTkyMXxUQUIgUjcyMXxUQUIgSTcyMHxUQUIgVDc2fFRBQiBSNzB8VEFCIFI3Ni4yfFRBQiBSMTA2fFRBQiBSODMuMnxUQUIgTTgxM0d8VEFCIEk3MjF8R0NUQTcyMnxUQUIgSTcwfFRBQiBJNzF8VEFCIFM3M3xUQUIgUjczfFRBQiBSNzR8VEFCIFI5M3xUQUIgUjc1fFRBQiBSNzYuMXxUQUIgQTczfFRBQiBBOTN8VEFCIEE5My4yfFRBQiBUNzJ8VEFCIFI4M3xUQUIgUjk3NHxUQUIgUjk3M3xUQUIgQTEwMXxUQUIgQTEwM3xUQUIgQTEwNHxUQUIgQTEwNC4yfFIxMDVCS3xNNzEzR3xBOTcyQkt8VEFCIEE5NzF8VEFCIFI5NzQuMnxUQUIgUjEwNHxUQUIgUjgzLjN8VEFCIEExMDQyXCIsXG4gICAgICAgIFwiTW9kZWNvbVRhYmxldFwiOiBcIkZyZWVUQUIgOTAwMHxGcmVlVEFCIDcuNHxGcmVlVEFCIDcwMDR8RnJlZVRBQiA3ODAwfEZyZWVUQUIgMjA5NnxGcmVlVEFCIDcuNXxGcmVlVEFCIDEwMTR8RnJlZVRBQiAxMDAxIHxGcmVlVEFCIDgwMDF8RnJlZVRBQiA5NzA2fEZyZWVUQUIgOTcwMnxGcmVlVEFCIDcwMDN8RnJlZVRBQiA3MDAyfEZyZWVUQUIgMTAwMnxGcmVlVEFCIDc4MDF8RnJlZVRBQiAxMzMxfEZyZWVUQUIgMTAwNHxGcmVlVEFCIDgwMDJ8RnJlZVRBQiA4MDE0fEZyZWVUQUIgOTcwNHxGcmVlVEFCIDEwMDNcIixcbiAgICAgICAgXCJWb25pbm9UYWJsZXRcIjogXCJcXFxcYihBcmd1c1sgX10/U3xEaWFtb25kWyBfXT83OUhEfEVtZXJhbGRbIF9dPzc4RXxMdW5hWyBfXT83MEN8T255eFsgX10/U3xPbnl4WyBfXT9afE9yaW5bIF9dP0hEfE9yaW5bIF9dP1N8T3Rpc1sgX10/U3xTcGVlZFN0YXJbIF9dP1N8TWFnbmV0WyBfXT9NOXxQcmltdXNbIF9dPzk0WyBfXT8zR3xQcmltdXNbIF9dPzk0SER8UHJpbXVzWyBfXT9RU3xBbmRyb2lkLipcXFxcYlE4XFxcXGJ8U2lyaXVzWyBfXT9FVk9bIF9dP1FTfFNpcml1c1sgX10/UVN8U3Bpcml0WyBfXT9TKVxcXFxiXCIsXG4gICAgICAgIFwiRUNTVGFibGV0XCI6IFwiVjA3T1QyfFRNMTA1QXxTMTBPVDF8VFIxMENTMVwiLFxuICAgICAgICBcIlN0b3JleFRhYmxldFwiOiBcImVaZWVbXyddPyhUYWJ8R28pWzAtOV0rfFRhYkxDN3xMb29uZXkgVHVuZXMgVGFiXCIsXG4gICAgICAgIFwiVm9kYWZvbmVUYWJsZXRcIjogXCJTbWFydFRhYihbIF0rKT9bMC05XSt8U21hcnRUYWJJSTEwfFNtYXJ0VGFiSUk3fFZGLTE0OTd8VkZEIDE0MDBcIixcbiAgICAgICAgXCJFc3NlbnRpZWxCVGFibGV0XCI6IFwiU21hcnRbICddP1RBQlsgXSs/WzAtOV0rfEZhbWlseVsgJ10/VEFCMlwiLFxuICAgICAgICBcIlJvc3NNb29yVGFibGV0XCI6IFwiUk0tNzkwfFJNLTk5N3xSTUQtODc4R3xSTUQtOTc0UnxSTVQtNzA1QXxSTVQtNzAxfFJNRS02MDF8Uk1ULTUwMXxSTVQtNzExXCIsXG4gICAgICAgIFwiaU1vYmlsZVRhYmxldFwiOiBcImktbW9iaWxlIGktbm90ZVwiLFxuICAgICAgICBcIlRvbGlub1RhYmxldFwiOiBcInRvbGlubyB0YWIgWzAtOS5dK3x0b2xpbm8gc2hpbmVcIixcbiAgICAgICAgXCJBdWRpb1NvbmljVGFibGV0XCI6IFwiXFxcXGJDLTIyUXxUNy1RQ3xULTE3QnxULTE3UFxcXFxiXCIsXG4gICAgICAgIFwiQU1QRVRhYmxldFwiOiBcIkFuZHJvaWQuKiBBNzggXCIsXG4gICAgICAgIFwiU2trVGFibGV0XCI6IFwiQW5kcm9pZC4qIChTS1lQQUR8UEhPRU5JWHxDWUNMT1BTKVwiLFxuICAgICAgICBcIlRlY25vVGFibGV0XCI6IFwiVEVDTk8gUDl8VEVDTk8gRFA4RFwiLFxuICAgICAgICBcIkpYRFRhYmxldFwiOiBcIkFuZHJvaWQuKiBcXFxcYihGMzAwMHxBMzMwMHxKWEQ1MDAwfEpYRDMwMDB8SlhEMjAwMHxKWEQzMDBCfEpYRDMwMHxTNTgwMHxTNzgwMHxTNjAyYnxTNTExMGJ8UzczMDB8UzUzMDB8UzYwMnxTNjAzfFM1MTAwfFM1MTEwfFM2MDF8UzcxMDBhfFAzMDAwRnxQMzAwMHN8UDEwMXxQMjAwc3xQMTAwMG18UDIwMG18UDkxMDB8UDEwMDBzfFM2NjAwYnxTOTA4fFAxMDAwfFAzMDB8UzE4fFM2NjAwfFM5MTAwKVxcXFxiXCIsXG4gICAgICAgIFwiaUpveVRhYmxldFwiOiBcIlRhYmxldCAoU3Bpcml0IDd8RXNzZW50aWF8R2FsYXRlYXxGdXNpb258T25peCA3fExhbmRhfFRpdGFufFNjb29ieXxEZW94fFN0ZWxsYXxUaGVtaXN8QXJnb258VW5pcXVlIDd8U3lnbnVzfEhleGVufEZpbml0eSA3fENyZWFtfENyZWFtIFgyfEphZGV8TmVvbiA3fE5lcm9uIDd8S2FuZHl8U2NhcGV8U2FwaHlyIDd8UmViZWx8QmlveHxSZWJlbHxSZWJlbCA4R0J8TXlzdHxEcmFjbyA3fE15c3R8VGFiNy0wMDR8TXlzdHxUYWRlbyBKb25lc3xUYWJsZXQgQm9pbmd8QXJyb3d8RHJhY28gRHVhbCBDYW18QXVyaXh8TWludHxBbWl0eXxSZXZvbHV0aW9ufEZpbml0eSA5fE5lb24gOXxUOXd8QW1pdHkgNEdCIER1YWwgQ2FtfFN0b25lIDRHQnxTdG9uZSA4R0J8QW5kcm9tZWRhfFNpbGtlbnxYMnxBbmRyb21lZGEgSUl8SGFsbGV5fEZsYW1lfFNhcGh5ciA5LDd8VG91Y2ggOHxQbGFuZXR8VHJpdG9ufFVuaXF1ZSAxMHxIZXhlbiAxMHxNZW1waGlzIDRHQnxNZW1waGlzIDhHQnxPbml4IDEwKVwiLFxuICAgICAgICBcIkZYMlRhYmxldFwiOiBcIkZYMiBQQUQ3fEZYMiBQQUQxMFwiLFxuICAgICAgICBcIlhvcm9UYWJsZXRcIjogXCJLaWRzUEFEIDcwMXxQQURbIF0/NzEyfFBBRFsgXT83MTR8UEFEWyBdPzcxNnxQQURbIF0/NzE3fFBBRFsgXT83MTh8UEFEWyBdPzcyMHxQQURbIF0/NzIxfFBBRFsgXT83MjJ8UEFEWyBdPzc5MHxQQURbIF0/NzkyfFBBRFsgXT85MDB8UEFEWyBdPzk3MTVEfFBBRFsgXT85NzE2RFJ8UEFEWyBdPzk3MThEUnxQQURbIF0/OTcxOVFSfFBBRFsgXT85NzIwUVJ8VGVsZVBBRDEwMzB8VGVsZXBhZDEwMzJ8VGVsZVBBRDczMHxUZWxlUEFENzMxfFRlbGVQQUQ3MzJ8VGVsZVBBRDczNVF8VGVsZVBBRDgzMHxUZWxlUEFEOTczMHxUZWxlUEFENzk1fE1lZ2FQQUQgMTMzMXxNZWdhUEFEIDE4NTF8TWVnYVBBRCAyMTUxXCIsXG4gICAgICAgIFwiVmlld3NvbmljVGFibGV0XCI6IFwiVmlld1BhZCAxMHBpfFZpZXdQYWQgMTBlfFZpZXdQYWQgMTBzfFZpZXdQYWQgRTcyfFZpZXdQYWQ3fFZpZXdQYWQgRTEwMHxWaWV3UGFkIDdlfFZpZXdTb25pYyBWQjczM3xWQjEwMGFcIixcbiAgICAgICAgXCJWZXJpem9uVGFibGV0XCI6IFwiUVRBUVozfFFUQUlSN3xRVEFRVFozfFFUQVNVTjF8UVRBU1VOMnxRVEFYSUExXCIsXG4gICAgICAgIFwiT2R5c1RhYmxldFwiOiBcIkxPT1h8WEVOTzEwfE9EWVNbIC1dKFNwYWNlfEVWT3xYcHJlc3N8Tk9PTil8XFxcXGJYRUxJT1xcXFxifFhlbGlvMTBQcm98WEVMSU83UEhPTkVUQUJ8WEVMSU8xMEVYVFJFTUV8WEVMSU9QVDJ8TkVPX1FVQUQxMFwiLFxuICAgICAgICBcIkNhcHRpdmFUYWJsZXRcIjogXCJDQVBUSVZBIFBBRFwiLFxuICAgICAgICBcIkljb25iaXRUYWJsZXRcIjogXCJOZXRUQUJ8TlQtMzcwMnxOVC0zNzAyU3xOVC0zNzAyU3xOVC0zNjAzUHxOVC0zNjAzUHxOVC0wNzA0U3xOVC0wNzA0U3xOVC0zODA1Q3xOVC0zODA1Q3xOVC0wODA2Q3xOVC0wODA2Q3xOVC0wOTA5VHxOVC0wOTA5VHxOVC0wOTA3U3xOVC0wOTA3U3xOVC0wOTAyU3xOVC0wOTAyU1wiLFxuICAgICAgICBcIlRlY2xhc3RUYWJsZXRcIjogXCJUOTggNEd8XFxcXGJQODBcXFxcYnxcXFxcYlg5MEhEXFxcXGJ8WDk4IEFpcnxYOTggQWlyIDNHfFxcXFxiWDg5XFxcXGJ8UDgwIDNHfFxcXFxiWDgwaFxcXFxifFA5OCBBaXJ8XFxcXGJYODlIRFxcXFxifFA5OCAzR3xcXFxcYlA5MEhEXFxcXGJ8UDg5IDNHfFg5OCAzR3xcXFxcYlA3MGhcXFxcYnxQNzlIRCAzR3xHMThkIDNHfFxcXFxiUDc5SERcXFxcYnxcXFxcYlA4OXNcXFxcYnxcXFxcYkE4OFxcXFxifFxcXFxiUDEwSERcXFxcYnxcXFxcYlAxOUhEXFxcXGJ8RzE4IDNHfFxcXFxiUDc4SERcXFxcYnxcXFxcYkE3OFxcXFxifFxcXFxiUDc1XFxcXGJ8RzE3cyAzR3xHMTdoIDNHfFxcXFxiUDg1dFxcXFxifFxcXFxiUDkwXFxcXGJ8XFxcXGJQMTFcXFxcYnxcXFxcYlA5OHRcXFxcYnxcXFxcYlA5OEhEXFxcXGJ8XFxcXGJHMThkXFxcXGJ8XFxcXGJQODVzXFxcXGJ8XFxcXGJQMTFIRFxcXFxifFxcXFxiUDg4c1xcXFxifFxcXFxiQTgwSERcXFxcYnxcXFxcYkE4MHNlXFxcXGJ8XFxcXGJBMTBoXFxcXGJ8XFxcXGJQODlcXFxcYnxcXFxcYlA3OHNcXFxcYnxcXFxcYkcxOFxcXFxifFxcXFxiUDg1XFxcXGJ8XFxcXGJBNzBoXFxcXGJ8XFxcXGJBNzBcXFxcYnxcXFxcYkcxN1xcXFxifFxcXFxiUDE4XFxcXGJ8XFxcXGJBODBzXFxcXGJ8XFxcXGJBMTFzXFxcXGJ8XFxcXGJQODhIRFxcXFxifFxcXFxiQTgwaFxcXFxifFxcXFxiUDc2c1xcXFxifFxcXFxiUDc2aFxcXFxifFxcXFxiUDk4XFxcXGJ8XFxcXGJBMTBIRFxcXFxifFxcXFxiUDc4XFxcXGJ8XFxcXGJQODhcXFxcYnxcXFxcYkExMVxcXFxifFxcXFxiQTEwdFxcXFxifFxcXFxiUDc2YVxcXFxifFxcXFxiUDc2dFxcXFxifFxcXFxiUDc2ZVxcXFxifFxcXFxiUDg1SERcXFxcYnxcXFxcYlA4NWFcXFxcYnxcXFxcYlA4NlxcXFxifFxcXFxiUDc1SERcXFxcYnxcXFxcYlA3NnZcXFxcYnxcXFxcYkExMlxcXFxifFxcXFxiUDc1YVxcXFxifFxcXFxiQTE1XFxcXGJ8XFxcXGJQNzZUaVxcXFxifFxcXFxiUDgxSERcXFxcYnxcXFxcYkExMFxcXFxifFxcXFxiVDc2MFZFXFxcXGJ8XFxcXGJUNzIwSERcXFxcYnxcXFxcYlA3NlxcXFxifFxcXFxiUDczXFxcXGJ8XFxcXGJQNzFcXFxcYnxcXFxcYlA3MlxcXFxifFxcXFxiVDcyMFNFXFxcXGJ8XFxcXGJDNTIwVGlcXFxcYnxcXFxcYlQ3NjBcXFxcYnxcXFxcYlQ3MjBWRVxcXFxifFQ3MjAtM0dFfFQ3MjAtV2lGaVwiLFxuICAgICAgICBcIk9uZGFUYWJsZXRcIjogXCJcXFxcYihWOTc1aXxWaTMwfFZYNTMwfFY3MDF8Vmk2MHxWNzAxc3xWaTUwfFY4MDFzfFY3MTl8Vng2MTB3fFZYNjEwV3xWODE5aXxWaTEwfFZYNTgwV3xWaTEwfFY3MTFzfFY4MTN8VjgxMXxWODIwd3xWODIwfFZpMjB8VjcxMXxWSTMwV3xWNzEyfFY4OTF3fFY5NzJ8VjgxOXd8VjgyMHd8Vmk2MHxWODIwd3xWNzExfFY4MTNzfFY4MDF8VjgxOXxWOTc1c3xWODAxfFY4MTl8VjgxOXxWODE4fFY4MTF8VjcxMnxWOTc1bXxWMTAxd3xWOTYxd3xWODEyfFY4MTh8Vjk3MXxWOTcxc3xWOTE5fFY5ODl8VjExNnd8VjEwMnd8Vjk3M3xWaTQwKVxcXFxiW1xcXFxzXSt8VjEwIFxcXFxiNEdcXFxcYlwiLFxuICAgICAgICBcIkpheXRlY2hUYWJsZXRcIjogXCJUUEMtUEE3NjJcIixcbiAgICAgICAgXCJCbGF1cHVua3RUYWJsZXRcIjogXCJFbmRlYXZvdXIgODAwTkd8RW5kZWF2b3VyIDEwMTBcIixcbiAgICAgICAgXCJEaWdtYVRhYmxldFwiOiBcIlxcXFxiKGlEeDEwfGlEeDl8aUR4OHxpRHg3fGlEeEQ3fGlEeEQ4fGlEc1E4fGlEc1E3fGlEc1E4fGlEc0QxMHxpRG5EN3wzVFM4MDRIfGlEc1ExMXxpRGo3fGlEczEwKVxcXFxiXCIsXG4gICAgICAgIFwiRXZvbGlvVGFibGV0XCI6IFwiQVJJQV9NaW5pX3dpZml8QXJpYVsgX11NaW5pfEV2b2xpbyBYMTB8RXZvbGlvIFg3fEV2b2xpbyBYOHxcXFxcYkV2b3RhYlxcXFxifFxcXFxiTmV1cmFcXFxcYlwiLFxuICAgICAgICBcIkxhdmFUYWJsZXRcIjogXCJRUEFEIEU3MDR8XFxcXGJJdm9yeVNcXFxcYnxFLVRBQiBJVk9SWXxcXFxcYkUtVEFCXFxcXGJcIixcbiAgICAgICAgXCJBb2NUYWJsZXRcIjogXCJNVzA4MTF8TVcwODEyfE1XMDkyMnxNVEs4MzgyfE1XMTAzMXxNVzA4MzF8TVcwODIxfE1XMDkzMXxNVzA3MTJcIixcbiAgICAgICAgXCJNcG1hblRhYmxldFwiOiBcIk1QMTEgT0NUQXxNUDEwIE9DVEF8TVBRQzExMTR8TVBRQzEwMDR8TVBRQzk5NHxNUFFDOTc0fE1QUUM5NzN8TVBRQzgwNHxNUFFDNzg0fE1QUUM3ODB8XFxcXGJNUEc3XFxcXGJ8TVBEQ0c3NXxNUERDRzcxfE1QREMxMDA2fE1QMTAxREN8TVBEQzkwMDB8TVBEQzkwNXxNUERDNzA2SER8TVBEQzcwNnxNUERDNzA1fE1QREMxMTB8TVBEQzEwMHxNUERDOTl8TVBEQzk3fE1QREM4OHxNUERDOHxNUERDNzd8TVA3MDl8TUlENzAxfE1JRDcxMXxNSUQxNzB8TVBEQzcwM3xNUFFDMTAxMFwiLFxuICAgICAgICBcIkNlbGtvblRhYmxldFwiOiBcIkNUNjk1fENUODg4fENUW1xcXFxzXT85MTB8Q1Q3IFRhYnxDVDkgVGFifENUMyBUYWJ8Q1QyIFRhYnxDVDEgVGFifEM4MjB8QzcyMHxcXFxcYkNULTFcXFxcYlwiLFxuICAgICAgICBcIldvbGRlclRhYmxldFwiOiBcIm1pVGFiIFxcXFxiKERJQU1PTkR8U1BBQ0V8QlJPT0tMWU58TkVPfEZMWXxNQU5IQVRUQU58RlVOS3xFVk9MVVRJT058U0tZfEdPQ0FSfElST058R0VOSVVTfFBPUHxNSU5UfEVQU0lMT058QlJPQURXQVl8SlVNUHxIT1B8TEVHRU5EfE5FVyBBR0V8TElORXxBRFZBTkNFfEZFRUx8Rk9MTE9XfExJS0V8TElOS3xMSVZFfFRISU5LfEZSRUVET018Q0hJQ0FHT3xDTEVWRUxBTkR8QkFMVElNT1JFLUdIfElPV0F8Qk9TVE9OfFNFQVRUTEV8UEhPRU5JWHxEQUxMQVN8SU4gMTAxfE1hc3RlckNoZWYpXFxcXGJcIixcbiAgICAgICAgXCJNZWRpYWNvbVRhYmxldFwiOiBcIk0tTVBJMTBDM0d8TS1TUDEwRUd8TS1TUDEwRUdQfE0tU1AxMEhYQUh8TS1TUDdIWEFIfE0tU1AxMEhYQkh8TS1TUDhIWEFIfE0tU1A4TVhBXCIsXG4gICAgICAgIFwiTWlUYWJsZXRcIjogXCJcXFxcYk1JIFBBRFxcXFxifFxcXFxiSE0gTk9URSAxV1xcXFxiXCIsXG4gICAgICAgIFwiTmliaXJ1VGFibGV0XCI6IFwiTmliaXJ1IE0xfE5pYmlydSBKdXBpdGVyIE9uZVwiLFxuICAgICAgICBcIk5leG9UYWJsZXRcIjogXCJORVhPIE5PVkF8TkVYTyAxMHxORVhPIEFWSU98TkVYTyBGUkVFfE5FWE8gR098TkVYTyBFVk98TkVYTyAzR3xORVhPIFNNQVJUfE5FWE8gS0lERE98TkVYTyBNT0JJXCIsXG4gICAgICAgIFwiTGVhZGVyVGFibGV0XCI6IFwiVEJMVDEwUXxUQkxUMTBJfFRCTC0xMFdES0J8VEJMLTEwV0RLQk8yMDEzfFRCTC1XMjMwVjJ8VEJMLVc0NTB8VEJMLVc1MDB8U1Y1NzJ8VEJMVDdJfFRCQS1BQzctOEd8VEJMVDc5fFRCTC04VzE2fFRCTC0xMFczMnxUQkwtMTBXS0J8VEJMLVcxMDBcIixcbiAgICAgICAgXCJVYmlzbGF0ZVRhYmxldFwiOiBcIlViaVNsYXRlW1xcXFxzXT83Q1wiLFxuICAgICAgICBcIlBvY2tldEJvb2tUYWJsZXRcIjogXCJQb2NrZXRib29rXCIsXG4gICAgICAgIFwiS29jYXNvVGFibGV0XCI6IFwiXFxcXGIoVEItMTIwNylcXFxcYlwiLFxuICAgICAgICBcIkhpc2Vuc2VUYWJsZXRcIjogXCJcXFxcYihGNTI4MXxFMjM3MSlcXFxcYlwiLFxuICAgICAgICBcIkh1ZGxcIjogXCJIdWRsIEhUN1MzfEh1ZGwgMlwiLFxuICAgICAgICBcIlRlbHN0cmFUYWJsZXRcIjogXCJULUh1YjJcIixcbiAgICAgICAgXCJHZW5lcmljVGFibGV0XCI6IFwiQW5kcm9pZC4qXFxcXGI5N0RcXFxcYnxUYWJsZXQoPyEuKlBDKXxCTlRWMjUwQXxNSUQtV0NETUF8TG9naWNQRCBab29tMnxcXFxcYkE3RUJcXFxcYnxDYXROb3ZhOHxBMV8wN3xDVDcwNHxDVDEwMDJ8XFxcXGJNNzIxXFxcXGJ8cmszMHNka3xcXFxcYkVWT1RBQlxcXFxifE03NThBfEVUOTA0fEFMVU1JVU0xMHxTbWFydGZyZW4gVGFifEVuZGVhdm91ciAxMDEwfFRhYmxldC1QQy00fFRhZ2kgVGFifFxcXFxiTTZwcm9cXFxcYnxDVDEwMjBXfGFyYyAxMEhEfFxcXFxiVFA3NTBcXFxcYnxcXFxcYlFUQVFaM1xcXFxifFdWVDEwMXxUTTEwODh8S1QxMDdcIlxuICAgIH0sXG4gICAgXCJvc3NcIjoge1xuICAgICAgICBcIkFuZHJvaWRPU1wiOiBcIkFuZHJvaWRcIixcbiAgICAgICAgXCJCbGFja0JlcnJ5T1NcIjogXCJibGFja2JlcnJ5fFxcXFxiQkIxMFxcXFxifHJpbSB0YWJsZXQgb3NcIixcbiAgICAgICAgXCJQYWxtT1NcIjogXCJQYWxtT1N8YXZhbnRnb3xibGF6ZXJ8ZWxhaW5lfGhpcHRvcHxwYWxtfHBsdWNrZXJ8eGlpbm9cIixcbiAgICAgICAgXCJTeW1iaWFuT1NcIjogXCJTeW1iaWFufFN5bWJPU3xTZXJpZXM2MHxTZXJpZXM0MHxTWUItWzAtOV0rfFxcXFxiUzYwXFxcXGJcIixcbiAgICAgICAgXCJXaW5kb3dzTW9iaWxlT1NcIjogXCJXaW5kb3dzIENFLiooUFBDfFNtYXJ0cGhvbmV8TW9iaWxlfFswLTldezN9eFswLTldezN9KXxXaW5kb3dzIE1vYmlsZXxXaW5kb3dzIFBob25lIFswLTkuXSt8V0NFO1wiLFxuICAgICAgICBcIldpbmRvd3NQaG9uZU9TXCI6IFwiV2luZG93cyBQaG9uZSAxMC4wfFdpbmRvd3MgUGhvbmUgOC4xfFdpbmRvd3MgUGhvbmUgOC4wfFdpbmRvd3MgUGhvbmUgT1N8WEJMV1A3fFp1bmVXUDd8V2luZG93cyBOVCA2LlsyM107IEFSTTtcIixcbiAgICAgICAgXCJpT1NcIjogXCJcXFxcYmlQaG9uZS4qTW9iaWxlfFxcXFxiaVBvZHxcXFxcYmlQYWR8QXBwbGVDb3JlTWVkaWFcIixcbiAgICAgICAgXCJpUGFkT1NcIjogXCJDUFUgT1MgMTNcIixcbiAgICAgICAgXCJNZWVHb09TXCI6IFwiTWVlR29cIixcbiAgICAgICAgXCJNYWVtb09TXCI6IFwiTWFlbW9cIixcbiAgICAgICAgXCJKYXZhT1NcIjogXCJKMk1FXFwvfFxcXFxiTUlEUFxcXFxifFxcXFxiQ0xEQ1xcXFxiXCIsXG4gICAgICAgIFwid2ViT1NcIjogXCJ3ZWJPU3xocHdPU1wiLFxuICAgICAgICBcImJhZGFPU1wiOiBcIlxcXFxiQmFkYVxcXFxiXCIsXG4gICAgICAgIFwiQlJFV09TXCI6IFwiQlJFV1wiXG4gICAgfSxcbiAgICBcInVhc1wiOiB7XG4gICAgICAgIFwiQ2hyb21lXCI6IFwiXFxcXGJDck1vXFxcXGJ8Q3JpT1N8QW5kcm9pZC4qQ2hyb21lXFwvWy4wLTldKiAoTW9iaWxlKT9cIixcbiAgICAgICAgXCJEb2xmaW5cIjogXCJcXFxcYkRvbGZpblxcXFxiXCIsXG4gICAgICAgIFwiT3BlcmFcIjogXCJPcGVyYS4qTWluaXxPcGVyYS4qTW9iaXxBbmRyb2lkLipPcGVyYXxNb2JpbGUuKk9QUlxcL1swLTkuXSskfENvYXN0XFwvWzAtOS5dK1wiLFxuICAgICAgICBcIlNreWZpcmVcIjogXCJTa3lmaXJlXCIsXG4gICAgICAgIFwiRWRnZVwiOiBcIk1vYmlsZSBTYWZhcmlcXC9bLjAtOV0qIEVkZ2VcIixcbiAgICAgICAgXCJJRVwiOiBcIklFTW9iaWxlfE1TSUVNb2JpbGVcIixcbiAgICAgICAgXCJGaXJlZm94XCI6IFwiZmVubmVjfGZpcmVmb3guKm1hZW1vfChNb2JpbGV8VGFibGV0KS4qRmlyZWZveHxGaXJlZm94LipNb2JpbGV8RnhpT1NcIixcbiAgICAgICAgXCJCb2x0XCI6IFwiYm9sdFwiLFxuICAgICAgICBcIlRlYVNoYXJrXCI6IFwidGVhc2hhcmtcIixcbiAgICAgICAgXCJCbGF6ZXJcIjogXCJCbGF6ZXJcIixcbiAgICAgICAgXCJTYWZhcmlcIjogXCJWZXJzaW9uLipNb2JpbGUuKlNhZmFyaXxTYWZhcmkuKk1vYmlsZXxNb2JpbGVTYWZhcmlcIixcbiAgICAgICAgXCJXZUNoYXRcIjogXCJcXFxcYk1pY3JvTWVzc2VuZ2VyXFxcXGJcIixcbiAgICAgICAgXCJVQ0Jyb3dzZXJcIjogXCJVQy4qQnJvd3NlcnxVQ1dFQlwiLFxuICAgICAgICBcImJhaWR1Ym94YXBwXCI6IFwiYmFpZHVib3hhcHBcIixcbiAgICAgICAgXCJiYWlkdWJyb3dzZXJcIjogXCJiYWlkdWJyb3dzZXJcIixcbiAgICAgICAgXCJEaWlnb0Jyb3dzZXJcIjogXCJEaWlnb0Jyb3dzZXJcIixcbiAgICAgICAgXCJNZXJjdXJ5XCI6IFwiXFxcXGJNZXJjdXJ5XFxcXGJcIixcbiAgICAgICAgXCJPYmlnb0Jyb3dzZXJcIjogXCJPYmlnb1wiLFxuICAgICAgICBcIk5ldEZyb250XCI6IFwiTkYtQnJvd3NlclwiLFxuICAgICAgICBcIkdlbmVyaWNCcm93c2VyXCI6IFwiTm9raWFCcm93c2VyfE92aUJyb3dzZXJ8T25lQnJvd3NlcnxUd29ua3lCZWFtQnJvd3NlcnxTRU1DLipCcm93c2VyfEZseUZsb3d8TWluaW1vfE5ldEZyb250fE5vdmFycmEtVmlzaW9ufE1RUUJyb3dzZXJ8TWljcm9NZXNzZW5nZXJcIixcbiAgICAgICAgXCJQYWxlTW9vblwiOiBcIkFuZHJvaWQuKlBhbGVNb29ufE1vYmlsZS4qUGFsZU1vb25cIlxuICAgIH0sXG4gICAgXCJwcm9wc1wiOiB7XG4gICAgICAgIFwiTW9iaWxlXCI6IFwiTW9iaWxlXFwvW1ZFUl1cIixcbiAgICAgICAgXCJCdWlsZFwiOiBcIkJ1aWxkXFwvW1ZFUl1cIixcbiAgICAgICAgXCJWZXJzaW9uXCI6IFwiVmVyc2lvblxcL1tWRVJdXCIsXG4gICAgICAgIFwiVmVuZG9ySURcIjogXCJWZW5kb3JJRFxcL1tWRVJdXCIsXG4gICAgICAgIFwiaVBhZFwiOiBcImlQYWQuKkNQVVthLXogXStbVkVSXVwiLFxuICAgICAgICBcImlQaG9uZVwiOiBcImlQaG9uZS4qQ1BVW2EteiBdK1tWRVJdXCIsXG4gICAgICAgIFwiaVBvZFwiOiBcImlQb2QuKkNQVVthLXogXStbVkVSXVwiLFxuICAgICAgICBcIktpbmRsZVwiOiBcIktpbmRsZVxcL1tWRVJdXCIsXG4gICAgICAgIFwiQ2hyb21lXCI6IFtcbiAgICAgICAgICAgIFwiQ2hyb21lXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiQ3JpT1NcXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJDck1vXFwvW1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIkNvYXN0XCI6IFtcbiAgICAgICAgICAgIFwiQ29hc3RcXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiRG9sZmluXCI6IFwiRG9sZmluXFwvW1ZFUl1cIixcbiAgICAgICAgXCJGaXJlZm94XCI6IFtcbiAgICAgICAgICAgIFwiRmlyZWZveFxcL1tWRVJdXCIsXG4gICAgICAgICAgICBcIkZ4aU9TXFwvW1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIkZlbm5lY1wiOiBcIkZlbm5lY1xcL1tWRVJdXCIsXG4gICAgICAgIFwiRWRnZVwiOiBcIkVkZ2VcXC9bVkVSXVwiLFxuICAgICAgICBcIklFXCI6IFtcbiAgICAgICAgICAgIFwiSUVNb2JpbGVcXC9bVkVSXTtcIixcbiAgICAgICAgICAgIFwiSUVNb2JpbGUgW1ZFUl1cIixcbiAgICAgICAgICAgIFwiTVNJRSBbVkVSXTtcIixcbiAgICAgICAgICAgIFwiVHJpZGVudFxcL1swLTkuXSs7LipydjpbVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiTmV0RnJvbnRcIjogXCJOZXRGcm9udFxcL1tWRVJdXCIsXG4gICAgICAgIFwiTm9raWFCcm93c2VyXCI6IFwiTm9raWFCcm93c2VyXFwvW1ZFUl1cIixcbiAgICAgICAgXCJPcGVyYVwiOiBbXG4gICAgICAgICAgICBcIiBPUFJcXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJPcGVyYSBNaW5pXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiVmVyc2lvblxcL1tWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJPcGVyYSBNaW5pXCI6IFwiT3BlcmEgTWluaVxcL1tWRVJdXCIsXG4gICAgICAgIFwiT3BlcmEgTW9iaVwiOiBcIlZlcnNpb25cXC9bVkVSXVwiLFxuICAgICAgICBcIlVDQnJvd3NlclwiOiBbXG4gICAgICAgICAgICBcIlVDV0VCW1ZFUl1cIixcbiAgICAgICAgICAgIFwiVUMuKkJyb3dzZXJcXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiTVFRQnJvd3NlclwiOiBcIk1RUUJyb3dzZXJcXC9bVkVSXVwiLFxuICAgICAgICBcIk1pY3JvTWVzc2VuZ2VyXCI6IFwiTWljcm9NZXNzZW5nZXJcXC9bVkVSXVwiLFxuICAgICAgICBcImJhaWR1Ym94YXBwXCI6IFwiYmFpZHVib3hhcHBcXC9bVkVSXVwiLFxuICAgICAgICBcImJhaWR1YnJvd3NlclwiOiBcImJhaWR1YnJvd3NlclxcL1tWRVJdXCIsXG4gICAgICAgIFwiU2Ftc3VuZ0Jyb3dzZXJcIjogXCJTYW1zdW5nQnJvd3NlclxcL1tWRVJdXCIsXG4gICAgICAgIFwiSXJvblwiOiBcIklyb25cXC9bVkVSXVwiLFxuICAgICAgICBcIlNhZmFyaVwiOiBbXG4gICAgICAgICAgICBcIlZlcnNpb25cXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJTYWZhcmlcXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiU2t5ZmlyZVwiOiBcIlNreWZpcmVcXC9bVkVSXVwiLFxuICAgICAgICBcIlRpemVuXCI6IFwiVGl6ZW5cXC9bVkVSXVwiLFxuICAgICAgICBcIldlYmtpdFwiOiBcIndlYmtpdFsgXFwvXVtWRVJdXCIsXG4gICAgICAgIFwiUGFsZU1vb25cIjogXCJQYWxlTW9vblxcL1tWRVJdXCIsXG4gICAgICAgIFwiR2Vja29cIjogXCJHZWNrb1xcL1tWRVJdXCIsXG4gICAgICAgIFwiVHJpZGVudFwiOiBcIlRyaWRlbnRcXC9bVkVSXVwiLFxuICAgICAgICBcIlByZXN0b1wiOiBcIlByZXN0b1xcL1tWRVJdXCIsXG4gICAgICAgIFwiR29hbm5hXCI6IFwiR29hbm5hXFwvW1ZFUl1cIixcbiAgICAgICAgXCJpT1NcIjogXCIgXFxcXGJpP09TXFxcXGIgW1ZFUl1bIDtdezF9XCIsXG4gICAgICAgIFwiQW5kcm9pZFwiOiBcIkFuZHJvaWQgW1ZFUl1cIixcbiAgICAgICAgXCJCbGFja0JlcnJ5XCI6IFtcbiAgICAgICAgICAgIFwiQmxhY2tCZXJyeVtcXFxcd10rXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiQmxhY2tCZXJyeS4qVmVyc2lvblxcL1tWRVJdXCIsXG4gICAgICAgICAgICBcIlZlcnNpb25cXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiQlJFV1wiOiBcIkJSRVcgW1ZFUl1cIixcbiAgICAgICAgXCJKYXZhXCI6IFwiSmF2YVxcL1tWRVJdXCIsXG4gICAgICAgIFwiV2luZG93cyBQaG9uZSBPU1wiOiBbXG4gICAgICAgICAgICBcIldpbmRvd3MgUGhvbmUgT1MgW1ZFUl1cIixcbiAgICAgICAgICAgIFwiV2luZG93cyBQaG9uZSBbVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiV2luZG93cyBQaG9uZVwiOiBcIldpbmRvd3MgUGhvbmUgW1ZFUl1cIixcbiAgICAgICAgXCJXaW5kb3dzIENFXCI6IFwiV2luZG93cyBDRVxcL1tWRVJdXCIsXG4gICAgICAgIFwiV2luZG93cyBOVFwiOiBcIldpbmRvd3MgTlQgW1ZFUl1cIixcbiAgICAgICAgXCJTeW1iaWFuXCI6IFtcbiAgICAgICAgICAgIFwiU3ltYmlhbk9TXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiU3ltYmlhblxcL1tWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJ3ZWJPU1wiOiBbXG4gICAgICAgICAgICBcIndlYk9TXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiaHB3T1NcXC9bVkVSXTtcIlxuICAgICAgICBdXG4gICAgfSxcbiAgICBcInV0aWxzXCI6IHtcbiAgICAgICAgXCJCb3RcIjogXCJHb29nbGVib3R8ZmFjZWJvb2tleHRlcm5hbGhpdHxHb29nbGUtQU1QSFRNTHxzfmFtcC12YWxpZGF0b3J8QWRzQm90LUdvb2dsZXxHb29nbGUgS2V5d29yZCBTdWdnZXN0aW9ufEZhY2Vib3R8WWFuZGV4Qm90fFlhbmRleE1vYmlsZUJvdHxiaW5nYm90fGlhX2FyY2hpdmVyfEFocmVmc0JvdHxFem9vbXN8R1NMRmJvdHxXQlNlYXJjaEJvdHxUd2l0dGVyYm90fFR3ZWV0bWVtZUJvdHxUd2lrbGV8UGFwZXJMaUJvdHxXb3Rib3h8VW53aW5kRmV0Y2hvcnxFeGFib3R8TUoxMmJvdHxZYW5kZXhJbWFnZXN8VHVybml0aW5Cb3R8UGluZ2RvbXxjb250ZW50a2luZ2FwcFwiLFxuICAgICAgICBcIk1vYmlsZUJvdFwiOiBcIkdvb2dsZWJvdC1Nb2JpbGV8QWRzQm90LUdvb2dsZS1Nb2JpbGV8WWFob29TZWVrZXJcXC9NMUExLVIyRDJcIixcbiAgICAgICAgXCJEZXNrdG9wTW9kZVwiOiBcIldQRGVza3RvcFwiLFxuICAgICAgICBcIlRWXCI6IFwiU29ueURUVnxIYmJUVlwiLFxuICAgICAgICBcIldlYktpdFwiOiBcIih3ZWJraXQpWyBcXC9dKFtcXFxcdy5dKylcIixcbiAgICAgICAgXCJDb25zb2xlXCI6IFwiXFxcXGIoTmludGVuZG98TmludGVuZG8gV2lpVXxOaW50ZW5kbyAzRFN8TmludGVuZG8gU3dpdGNofFBMQVlTVEFUSU9OfFhib3gpXFxcXGJcIixcbiAgICAgICAgXCJXYXRjaFwiOiBcIlNNLVY3MDBcIlxuICAgIH1cbn07XG5cbiAgICAvLyBmb2xsb3dpbmcgcGF0dGVybnMgY29tZSBmcm9tIGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXG4gICAgaW1wbC5kZXRlY3RNb2JpbGVCcm93c2VycyA9IHtcbiAgICAgICAgZnVsbFBhdHRlcm46IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaSxcbiAgICAgICAgc2hvcnRQYXR0ZXJuOiAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaSxcbiAgICAgICAgdGFibGV0UGF0dGVybjogL2FuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2lcbiAgICB9O1xuXG4gICAgdmFyIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgICAgICBpc0FycmF5O1xuXG4gICAgaW1wbC5GQUxMQkFDS19QSE9ORSA9ICdVbmtub3duUGhvbmUnO1xuICAgIGltcGwuRkFMTEJBQ0tfVEFCTEVUID0gJ1Vua25vd25UYWJsZXQnO1xuICAgIGltcGwuRkFMTEJBQ0tfTU9CSUxFID0gJ1Vua25vd25Nb2JpbGUnO1xuXG4gICAgaXNBcnJheSA9ICgnaXNBcnJheScgaW4gQXJyYXkpID9cbiAgICAgICAgQXJyYXkuaXNBcnJheSA6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJzsgfTtcblxuICAgIGZ1bmN0aW9uIGVxdWFsSUMoYSwgYikge1xuICAgICAgICByZXR1cm4gYSAhPSBudWxsICYmIGIgIT0gbnVsbCAmJiBhLnRvTG93ZXJDYXNlKCkgPT09IGIudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250YWluc0lDKGFycmF5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWVMQywgaSwgbGVuID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICBpZiAoIWxlbiB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZUxDID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVMQyA9PT0gYXJyYXlbaV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0UHJvcHNUb1JlZ0V4cChvYmplY3QpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IG5ldyBSZWdFeHAob2JqZWN0W2tleV0sICdpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwYXJlVXNlckFnZW50KHVzZXJBZ2VudCkge1xuICAgICAgICByZXR1cm4gKHVzZXJBZ2VudCB8fCAnJykuc3Vic3RyKDAsIDUwMCk7IC8vIG1pdGlnYXRlIHZ1bG5lcmFibGUgdG8gUmVEb1NcbiAgICB9XG5cbiAgICAoZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIGtleSwgdmFsdWVzLCB2YWx1ZSwgaSwgbGVuLCB2ZXJQb3MsIG1vYmlsZURldGVjdFJ1bGVzID0gaW1wbC5tb2JpbGVEZXRlY3RSdWxlcztcbiAgICAgICAgZm9yIChrZXkgaW4gbW9iaWxlRGV0ZWN0UnVsZXMucHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwobW9iaWxlRGV0ZWN0UnVsZXMucHJvcHMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBtb2JpbGVEZXRlY3RSdWxlcy5wcm9wc1trZXldO1xuICAgICAgICAgICAgICAgIGlmICghaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZW4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmVyUG9zID0gdmFsdWUuaW5kZXhPZignW1ZFUl0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZlclBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCB2ZXJQb3MpICsgJyhbXFxcXHcuX1xcXFwrXSspJyArIHZhbHVlLnN1YnN0cmluZyh2ZXJQb3MgKyA1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaV0gPSBuZXcgUmVnRXhwKHZhbHVlLCAnaScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb2JpbGVEZXRlY3RSdWxlcy5wcm9wc1trZXldID0gdmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnZlcnRQcm9wc1RvUmVnRXhwKG1vYmlsZURldGVjdFJ1bGVzLm9zcyk7XG4gICAgICAgIGNvbnZlcnRQcm9wc1RvUmVnRXhwKG1vYmlsZURldGVjdFJ1bGVzLnBob25lcyk7XG4gICAgICAgIGNvbnZlcnRQcm9wc1RvUmVnRXhwKG1vYmlsZURldGVjdFJ1bGVzLnRhYmxldHMpO1xuICAgICAgICBjb252ZXJ0UHJvcHNUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlcy51YXMpO1xuICAgICAgICBjb252ZXJ0UHJvcHNUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlcy51dGlscyk7XG5cbiAgICAgICAgLy8gY29weSBzb21lIHBhdHRlcm5zIHRvIG9zczAgd2hpY2ggYXJlIHRlc3RlZCBmaXJzdCAoc2VlIGlzc3VlIzE1KVxuICAgICAgICBtb2JpbGVEZXRlY3RSdWxlcy5vc3MwID0ge1xuICAgICAgICAgICAgV2luZG93c1Bob25lT1M6IG1vYmlsZURldGVjdFJ1bGVzLm9zcy5XaW5kb3dzUGhvbmVPUyxcbiAgICAgICAgICAgIFdpbmRvd3NNb2JpbGVPUzogbW9iaWxlRGV0ZWN0UnVsZXMub3NzLldpbmRvd3NNb2JpbGVPU1xuICAgICAgICB9O1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBUZXN0IHVzZXJBZ2VudCBzdHJpbmcgYWdhaW5zdCBhIHNldCBvZiBydWxlcyBhbmQgZmluZCB0aGUgZmlyc3QgbWF0Y2hlZCBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJ1bGVzIChrZXkgaXMgU3RyaW5nLCB2YWx1ZSBpcyBSZWdFeHApXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudCB0aGUgbmF2aWdhdG9yLnVzZXJBZ2VudCAob3IgSFRUUC1IZWFkZXIgJ1VzZXItQWdlbnQnKS5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IHRoZSBtYXRjaGVkIGtleSBpZiBmb3VuZCwgb3RoZXJ3aXNlIDx0dD5udWxsPC90dD5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGltcGwuZmluZE1hdGNoID0gZnVuY3Rpb24ocnVsZXMsIHVzZXJBZ2VudCkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcnVsZXMpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwocnVsZXMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocnVsZXNba2V5XS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRlc3QgdXNlckFnZW50IHN0cmluZyBhZ2FpbnN0IGEgc2V0IG9mIHJ1bGVzIGFuZCByZXR1cm4gYW4gYXJyYXkgb2YgbWF0Y2hlZCBrZXlzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBydWxlcyAoa2V5IGlzIFN0cmluZywgdmFsdWUgaXMgUmVnRXhwKVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnQgdGhlIG5hdmlnYXRvci51c2VyQWdlbnQgKG9yIEhUVFAtSGVhZGVyICdVc2VyLUFnZW50JykuXG4gICAgICogQHJldHVybnMge0FycmF5fSBhbiBhcnJheSBvZiBtYXRjaGVkIGtleXMsIG1heSBiZSBlbXB0eSB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoLCBidXQgbm90IDx0dD5udWxsPC90dD5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGltcGwuZmluZE1hdGNoZXMgPSBmdW5jdGlvbihydWxlcywgdXNlckFnZW50KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHJ1bGVzKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKHJ1bGVzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVzW2tleV0udGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRoZSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgVXNlci1BZ2VudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50XG4gICAgICogQHJldHVybiB7U3RyaW5nfSB2ZXJzaW9uIG9yIDx0dD5udWxsPC90dD4gaWYgdmVyc2lvbiBub3QgZm91bmRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGltcGwuZ2V0VmVyc2lvblN0ciA9IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUsIHVzZXJBZ2VudCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBpbXBsLm1vYmlsZURldGVjdFJ1bGVzLnByb3BzLCBwYXR0ZXJucywgaSwgbGVuLCBtYXRjaDtcbiAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChwcm9wcywgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgcGF0dGVybnMgPSBwcm9wc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgbGVuID0gcGF0dGVybnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuc1tpXS5leGVjKHVzZXJBZ2VudCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRoZSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgVXNlci1BZ2VudC5cbiAgICAgKiBXaWxsIHJldHVybiBhIGZsb2F0IG51bWJlci4gKGVnLiAyXzAgd2lsbCByZXR1cm4gMi4wLCA0LjMuMSB3aWxsIHJldHVybiA0LjMxKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHZlcnNpb24gb3IgPHR0Pk5hTjwvdHQ+IGlmIHZlcnNpb24gbm90IGZvdW5kXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpbXBsLmdldFZlcnNpb24gPSBmdW5jdGlvbiAocHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBpbXBsLmdldFZlcnNpb25TdHIocHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbiA/IGltcGwucHJlcGFyZVZlcnNpb25Obyh2ZXJzaW9uKSA6IE5hTjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSB0aGUgdmVyc2lvbiBudW1iZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmVyc2lvblxuICAgICAqIEByZXR1cm4ge051bWJlcn0gdGhlIHZlcnNpb24gbnVtYmVyIGFzIGEgZmxvYXRpbmcgbnVtYmVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpbXBsLnByZXBhcmVWZXJzaW9uTm8gPSBmdW5jdGlvbiAodmVyc2lvbikge1xuICAgICAgICB2YXIgbnVtYmVycztcblxuICAgICAgICBudW1iZXJzID0gdmVyc2lvbi5zcGxpdCgvW2Etei5fIFxcL1xcLV0vaSk7XG4gICAgICAgIGlmIChudW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF0gKyAnLic7XG4gICAgICAgICAgICBudW1iZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2ZXJzaW9uICs9IG51bWJlcnMuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE51bWJlcih2ZXJzaW9uKTtcbiAgICB9O1xuXG4gICAgaW1wbC5pc01vYmlsZUZhbGxiYWNrID0gZnVuY3Rpb24gKHVzZXJBZ2VudCkge1xuICAgICAgICByZXR1cm4gaW1wbC5kZXRlY3RNb2JpbGVCcm93c2Vycy5mdWxsUGF0dGVybi50ZXN0KHVzZXJBZ2VudCkgfHxcbiAgICAgICAgICAgIGltcGwuZGV0ZWN0TW9iaWxlQnJvd3NlcnMuc2hvcnRQYXR0ZXJuLnRlc3QodXNlckFnZW50LnN1YnN0cigwLDQpKTtcbiAgICB9O1xuXG4gICAgaW1wbC5pc1RhYmxldEZhbGxiYWNrID0gZnVuY3Rpb24gKHVzZXJBZ2VudCkge1xuICAgICAgICByZXR1cm4gaW1wbC5kZXRlY3RNb2JpbGVCcm93c2Vycy50YWJsZXRQYXR0ZXJuLnRlc3QodXNlckFnZW50KTtcbiAgICB9O1xuXG4gICAgaW1wbC5wcmVwYXJlRGV0ZWN0aW9uQ2FjaGUgPSBmdW5jdGlvbiAoY2FjaGUsIHVzZXJBZ2VudCwgbWF4UGhvbmVXaWR0aCkge1xuICAgICAgICBpZiAoY2FjaGUubW9iaWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGhvbmUsIHRhYmxldCwgcGhvbmVTaXplZDtcblxuICAgICAgICAvLyBmaXJzdCBjaGVjayBmb3Igc3Ryb25nZXIgdGFibGV0IHJ1bGVzLCB0aGVuIHBob25lIChzZWUgaXNzdWUjNSlcbiAgICAgICAgdGFibGV0ID0gaW1wbC5maW5kTWF0Y2goaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy50YWJsZXRzLCB1c2VyQWdlbnQpO1xuICAgICAgICBpZiAodGFibGV0KSB7XG4gICAgICAgICAgICBjYWNoZS5tb2JpbGUgPSBjYWNoZS50YWJsZXQgPSB0YWJsZXQ7XG4gICAgICAgICAgICBjYWNoZS5waG9uZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47IC8vIHVuYW1iaWd1b3VzbHkgaWRlbnRpZmllZCBhcyB0YWJsZXRcbiAgICAgICAgfVxuXG4gICAgICAgIHBob25lID0gaW1wbC5maW5kTWF0Y2goaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy5waG9uZXMsIHVzZXJBZ2VudCk7XG4gICAgICAgIGlmIChwaG9uZSkge1xuICAgICAgICAgICAgY2FjaGUubW9iaWxlID0gY2FjaGUucGhvbmUgPSBwaG9uZTtcbiAgICAgICAgICAgIGNhY2hlLnRhYmxldCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47IC8vIHVuYW1iaWd1b3VzbHkgaWRlbnRpZmllZCBhcyBwaG9uZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3VyIHJ1bGVzIGhhdmVuJ3QgZm91bmQgYSBtYXRjaCAtPiB0cnkgbW9yZSBnZW5lcmFsIGZhbGxiYWNrIHJ1bGVzXG4gICAgICAgIGlmIChpbXBsLmlzTW9iaWxlRmFsbGJhY2sodXNlckFnZW50KSkge1xuICAgICAgICAgICAgcGhvbmVTaXplZCA9IE1vYmlsZURldGVjdC5pc1Bob25lU2l6ZWQobWF4UGhvbmVXaWR0aCk7XG4gICAgICAgICAgICBpZiAocGhvbmVTaXplZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUubW9iaWxlID0gaW1wbC5GQUxMQkFDS19NT0JJTEU7XG4gICAgICAgICAgICAgICAgY2FjaGUudGFibGV0ID0gY2FjaGUucGhvbmUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwaG9uZVNpemVkKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUubW9iaWxlID0gY2FjaGUucGhvbmUgPSBpbXBsLkZBTExCQUNLX1BIT05FO1xuICAgICAgICAgICAgICAgIGNhY2hlLnRhYmxldCA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGNhY2hlLnRhYmxldCA9IGltcGwuRkFMTEJBQ0tfVEFCTEVUO1xuICAgICAgICAgICAgICAgIGNhY2hlLnBob25lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbXBsLmlzVGFibGV0RmFsbGJhY2sodXNlckFnZW50KSkge1xuICAgICAgICAgICAgY2FjaGUubW9iaWxlID0gY2FjaGUudGFibGV0ID0gaW1wbC5GQUxMQkFDS19UQUJMRVQ7XG4gICAgICAgICAgICBjYWNoZS5waG9uZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub3QgbW9iaWxlIGF0IGFsbCFcbiAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGNhY2hlLnRhYmxldCA9IGNhY2hlLnBob25lID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB0IGlzIGEgcmVmZXJlbmNlIHRvIGEgTW9iaWxlRGV0ZWN0IGluc3RhbmNlXG4gICAgaW1wbC5tb2JpbGVHcmFkZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIC8vIGltcGwgbm90ZTpcbiAgICAgICAgLy8gVG8ga2VlcCBpbiBzeW5jIHcvIE1vYmlsZV9EZXRlY3QucGhwIGVhc2lseSwgdGhlIGZvbGxvd2luZyBjb2RlIGlzIHRpZ2h0bHkgYWxpZ25lZCB0byB0aGUgUEhQIHZlcnNpb24uXG4gICAgICAgIC8vIFdoZW4gY2hhbmdlcyBhcmUgbWFkZSBpbiBNb2JpbGVfRGV0ZWN0LnBocCwgY29weSB0aGlzIG1ldGhvZCBhbmQgcmVwbGFjZTpcbiAgICAgICAgLy8gICAgICR0aGlzLT4gLyB0LlxuICAgICAgICAvLyAgICAgc2VsZjo6TU9CSUxFX0dSQURFXyguKSAvICckMSdcbiAgICAgICAgLy8gICAgICwgc2VsZjo6VkVSU0lPTl9UWVBFX0ZMT0FUIC8gKG5vdGhpbmcpXG4gICAgICAgIC8vICAgICBpc0lPUygpIC8gb3MoJ2lPUycpXG4gICAgICAgIC8vICAgICBbcmVnXSAvIChub3RoaW5nKSAgIDwtLSBqc2RlbGl2ciBjb21wbGFpbmluZyBhYm91dCB1bmVzY2FwZWQgdW5pY29kZSBjaGFyYWN0ZXIgVSswMEFFXG4gICAgICAgIHZhciAkaXNNb2JpbGUgPSB0Lm1vYmlsZSgpICE9PSBudWxsO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIEFwcGxlIGlPUyAzLjItNS4xIC0gVGVzdGVkIG9uIHRoZSBvcmlnaW5hbCBpUGFkICg0LjMgLyA1LjApLCBpUGFkIDIgKDQuMyksIGlQYWQgMyAoNS4xKSwgb3JpZ2luYWwgaVBob25lICgzLjEpLCBpUGhvbmUgMyAoMy4yKSwgM0dTICg0LjMpLCA0ICg0LjMgLyA1LjApLCBhbmQgNFMgKDUuMSlcbiAgICAgICAgICAgIHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBhZCcpPj00LjMgfHxcbiAgICAgICAgICAgIHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBob25lJyk+PTMuMSB8fFxuICAgICAgICAgICAgdC5vcygnaU9TJykgJiYgdC52ZXJzaW9uKCdpUG9kJyk+PTMuMSB8fFxuXG4gICAgICAgICAgICAvLyBBbmRyb2lkIDIuMS0yLjMgLSBUZXN0ZWQgb24gdGhlIEhUQyBJbmNyZWRpYmxlICgyLjIpLCBvcmlnaW5hbCBEcm9pZCAoMi4yKSwgSFRDIEFyaWEgKDIuMSksIEdvb2dsZSBOZXh1cyBTICgyLjMpLiBGdW5jdGlvbmFsIG9uIDEuNSAmIDEuNiBidXQgcGVyZm9ybWFuY2UgbWF5IGJlIHNsdWdnaXNoLCB0ZXN0ZWQgb24gR29vZ2xlIEcxICgxLjUpXG4gICAgICAgICAgICAvLyBBbmRyb2lkIDMuMSAoSG9uZXljb21iKSAgLSBUZXN0ZWQgb24gdGhlIFNhbXN1bmcgR2FsYXh5IFRhYiAxMC4xIGFuZCBNb3Rvcm9sYSBYT09NXG4gICAgICAgICAgICAvLyBBbmRyb2lkIDQuMCAoSUNTKSAgLSBUZXN0ZWQgb24gYSBHYWxheHkgTmV4dXMuIE5vdGU6IHRyYW5zaXRpb24gcGVyZm9ybWFuY2UgY2FuIGJlIHBvb3Igb24gdXBncmFkZWQgZGV2aWNlc1xuICAgICAgICAgICAgLy8gQW5kcm9pZCA0LjEgKEplbGx5IEJlYW4pICAtIFRlc3RlZCBvbiBhIEdhbGF4eSBOZXh1cyBhbmQgR2FsYXh5IDdcbiAgICAgICAgICAgICggdC52ZXJzaW9uKCdBbmRyb2lkJyk+Mi4xICYmIHQuaXMoJ1dlYmtpdCcpICkgfHxcblxuICAgICAgICAgICAgLy8gV2luZG93cyBQaG9uZSA3LTcuNSAtIFRlc3RlZCBvbiB0aGUgSFRDIFN1cnJvdW5kICg3LjApIEhUQyBUcm9waHkgKDcuNSksIExHLUU5MDAgKDcuNSksIE5va2lhIEx1bWlhIDgwMFxuICAgICAgICAgICAgdC52ZXJzaW9uKCdXaW5kb3dzIFBob25lIE9TJyk+PTcuMCB8fFxuXG4gICAgICAgICAgICAvLyBCbGFja2JlcnJ5IDcgLSBUZXN0ZWQgb24gQmxhY2tCZXJyeSBUb3JjaCA5ODEwXG4gICAgICAgICAgICAvLyBCbGFja2JlcnJ5IDYuMCAtIFRlc3RlZCBvbiB0aGUgVG9yY2ggOTgwMCBhbmQgU3R5bGUgOTY3MFxuICAgICAgICAgICAgdC5pcygnQmxhY2tCZXJyeScpICYmIHQudmVyc2lvbignQmxhY2tCZXJyeScpPj02LjAgfHxcbiAgICAgICAgICAgIC8vIEJsYWNrYmVycnkgUGxheWJvb2sgKDEuMC0yLjApIC0gVGVzdGVkIG9uIFBsYXlCb29rXG4gICAgICAgICAgICB0Lm1hdGNoKCdQbGF5Ym9vay4qVGFibGV0JykgfHxcblxuICAgICAgICAgICAgLy8gUGFsbSBXZWJPUyAoMS40LTIuMCkgLSBUZXN0ZWQgb24gdGhlIFBhbG0gUGl4aSAoMS40KSwgUHJlICgxLjQpLCBQcmUgMiAoMi4wKVxuICAgICAgICAgICAgKCB0LnZlcnNpb24oJ3dlYk9TJyk+PTEuNCAmJiB0Lm1hdGNoKCdQYWxtfFByZXxQaXhpJykgKSB8fFxuICAgICAgICAgICAgLy8gUGFsbSBXZWJPUyAzLjAgIC0gVGVzdGVkIG9uIEhQIFRvdWNoUGFkXG4gICAgICAgICAgICB0Lm1hdGNoKCdocC4qVG91Y2hQYWQnKSB8fFxuXG4gICAgICAgICAgICAvLyBGaXJlZm94IE1vYmlsZSAoMTIgQmV0YSkgLSBUZXN0ZWQgb24gQW5kcm9pZCAyLjMgZGV2aWNlXG4gICAgICAgICAgICAoIHQuaXMoJ0ZpcmVmb3gnKSAmJiB0LnZlcnNpb24oJ0ZpcmVmb3gnKT49MTIgKSB8fFxuXG4gICAgICAgICAgICAvLyBDaHJvbWUgZm9yIEFuZHJvaWQgLSBUZXN0ZWQgb24gQW5kcm9pZCA0LjAsIDQuMSBkZXZpY2VcbiAgICAgICAgICAgICggdC5pcygnQ2hyb21lJykgJiYgdC5pcygnQW5kcm9pZE9TJykgJiYgdC52ZXJzaW9uKCdBbmRyb2lkJyk+PTQuMCApIHx8XG5cbiAgICAgICAgICAgIC8vIFNreWZpcmUgNC4xIC0gVGVzdGVkIG9uIEFuZHJvaWQgMi4zIGRldmljZVxuICAgICAgICAgICAgKCB0LmlzKCdTa3lmaXJlJykgJiYgdC52ZXJzaW9uKCdTa3lmaXJlJyk+PTQuMSAmJiB0LmlzKCdBbmRyb2lkT1MnKSAmJiB0LnZlcnNpb24oJ0FuZHJvaWQnKT49Mi4zICkgfHxcblxuICAgICAgICAgICAgLy8gT3BlcmEgTW9iaWxlIDExLjUtMTI6IFRlc3RlZCBvbiBBbmRyb2lkIDIuM1xuICAgICAgICAgICAgKCB0LmlzKCdPcGVyYScpICYmIHQudmVyc2lvbignT3BlcmEgTW9iaScpPjExICYmIHQuaXMoJ0FuZHJvaWRPUycpICkgfHxcblxuICAgICAgICAgICAgLy8gTWVlZ28gMS4yIC0gVGVzdGVkIG9uIE5va2lhIDk1MCBhbmQgTjlcbiAgICAgICAgICAgIHQuaXMoJ01lZUdvT1MnKSB8fFxuXG4gICAgICAgICAgICAvLyBUaXplbiAocHJlLXJlbGVhc2UpIC0gVGVzdGVkIG9uIGVhcmx5IGhhcmR3YXJlXG4gICAgICAgICAgICB0LmlzKCdUaXplbicpIHx8XG5cbiAgICAgICAgICAgIC8vIFNhbXN1bmcgQmFkYSAyLjAgLSBUZXN0ZWQgb24gYSBTYW1zdW5nIFdhdmUgMywgRG9scGhpbiBicm93c2VyXG4gICAgICAgICAgICAvLyBAdG9kbzogbW9yZSB0ZXN0cyBoZXJlIVxuICAgICAgICAgICAgdC5pcygnRG9sZmluJykgJiYgdC52ZXJzaW9uKCdCYWRhJyk+PTIuMCB8fFxuXG4gICAgICAgICAgICAvLyBVQyBCcm93c2VyIC0gVGVzdGVkIG9uIEFuZHJvaWQgMi4zIGRldmljZVxuICAgICAgICAgICAgKCAodC5pcygnVUMgQnJvd3NlcicpIHx8IHQuaXMoJ0RvbGZpbicpKSAmJiB0LnZlcnNpb24oJ0FuZHJvaWQnKT49Mi4zICkgfHxcblxuICAgICAgICAgICAgLy8gS2luZGxlIDMgYW5kIEZpcmUgIC0gVGVzdGVkIG9uIHRoZSBidWlsdC1pbiBXZWJLaXQgYnJvd3NlciBmb3IgZWFjaFxuICAgICAgICAgICAgKCB0Lm1hdGNoKCdLaW5kbGUgRmlyZScpIHx8XG4gICAgICAgICAgICAgICAgdC5pcygnS2luZGxlJykgJiYgdC52ZXJzaW9uKCdLaW5kbGUnKT49My4wICkgfHxcblxuICAgICAgICAgICAgLy8gTm9vayBDb2xvciAxLjQuMSAtIFRlc3RlZCBvbiBvcmlnaW5hbCBOb29rIENvbG9yLCBub3QgTm9vayBUYWJsZXRcbiAgICAgICAgICAgIHQuaXMoJ0FuZHJvaWRPUycpICYmIHQuaXMoJ05vb2tUYWJsZXQnKSB8fFxuXG4gICAgICAgICAgICAvLyBDaHJvbWUgRGVza3RvcCAxMS0yMSAtIFRlc3RlZCBvbiBPUyBYIDEwLjcgYW5kIFdpbmRvd3MgN1xuICAgICAgICAgICAgdC52ZXJzaW9uKCdDaHJvbWUnKT49MTEgJiYgISRpc01vYmlsZSB8fFxuXG4gICAgICAgICAgICAvLyBTYWZhcmkgRGVza3RvcCA0LTUgLSBUZXN0ZWQgb24gT1MgWCAxMC43IGFuZCBXaW5kb3dzIDdcbiAgICAgICAgICAgIHQudmVyc2lvbignU2FmYXJpJyk+PTUuMCAmJiAhJGlzTW9iaWxlIHx8XG5cbiAgICAgICAgICAgIC8vIEZpcmVmb3ggRGVza3RvcCA0LTEzIC0gVGVzdGVkIG9uIE9TIFggMTAuNyBhbmQgV2luZG93cyA3XG4gICAgICAgICAgICB0LnZlcnNpb24oJ0ZpcmVmb3gnKT49NC4wICYmICEkaXNNb2JpbGUgfHxcblxuICAgICAgICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNy05IC0gVGVzdGVkIG9uIFdpbmRvd3MgWFAsIFZpc3RhIGFuZCA3XG4gICAgICAgICAgICB0LnZlcnNpb24oJ01TSUUnKT49Ny4wICYmICEkaXNNb2JpbGUgfHxcblxuICAgICAgICAgICAgLy8gT3BlcmEgRGVza3RvcCAxMC0xMiAtIFRlc3RlZCBvbiBPUyBYIDEwLjcgYW5kIFdpbmRvd3MgN1xuICAgICAgICAgICAgLy8gQHJlZmVyZW5jZTogaHR0cDovL215Lm9wZXJhLmNvbS9jb21tdW5pdHkvb3BlbndlYi9pZG9wZXJhL1xuICAgICAgICAgICAgdC52ZXJzaW9uKCdPcGVyYScpPj0xMCAmJiAhJGlzTW9iaWxlXG5cbiAgICAgICAgICAgICl7XG4gICAgICAgICAgICByZXR1cm4gJ0EnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdC5vcygnaU9TJykgJiYgdC52ZXJzaW9uKCdpUGFkJyk8NC4zIHx8XG4gICAgICAgICAgICB0Lm9zKCdpT1MnKSAmJiB0LnZlcnNpb24oJ2lQaG9uZScpPDMuMSB8fFxuICAgICAgICAgICAgdC5vcygnaU9TJykgJiYgdC52ZXJzaW9uKCdpUG9kJyk8My4xIHx8XG5cbiAgICAgICAgICAgIC8vIEJsYWNrYmVycnkgNS4wOiBUZXN0ZWQgb24gdGhlIFN0b3JtIDIgOTU1MCwgQm9sZCA5NzcwXG4gICAgICAgICAgICB0LmlzKCdCbGFja2JlcnJ5JykgJiYgdC52ZXJzaW9uKCdCbGFja0JlcnJ5Jyk+PTUgJiYgdC52ZXJzaW9uKCdCbGFja0JlcnJ5Jyk8NiB8fFxuXG4gICAgICAgICAgICAvL09wZXJhIE1pbmkgKDUuMC02LjUpIC0gVGVzdGVkIG9uIGlPUyAzLjIvNC4zIGFuZCBBbmRyb2lkIDIuM1xuICAgICAgICAgICAgKCB0LnZlcnNpb24oJ09wZXJhIE1pbmknKT49NS4wICYmIHQudmVyc2lvbignT3BlcmEgTWluaScpPD02LjUgJiZcbiAgICAgICAgICAgICAgICAodC52ZXJzaW9uKCdBbmRyb2lkJyk+PTIuMyB8fCB0LmlzKCdpT1MnKSkgKSB8fFxuXG4gICAgICAgICAgICAvLyBOb2tpYSBTeW1iaWFuXjMgLSBUZXN0ZWQgb24gTm9raWEgTjggKFN5bWJpYW5eMyksIEM3IChTeW1iaWFuXjMpLCBhbHNvIHdvcmtzIG9uIE45NyAoU3ltYmlhbl4xKVxuICAgICAgICAgICAgdC5tYXRjaCgnTm9raWFOOHxOb2tpYUM3fE45Ny4qU2VyaWVzNjB8U3ltYmlhbi8zJykgfHxcblxuICAgICAgICAgICAgLy8gQHRvZG86IHJlcG9ydCB0aGlzICh0ZXN0ZWQgb24gTm9raWEgTjcxKVxuICAgICAgICAgICAgdC52ZXJzaW9uKCdPcGVyYSBNb2JpJyk+PTExICYmIHQuaXMoJ1N5bWJpYW5PUycpXG4gICAgICAgICAgICApe1xuICAgICAgICAgICAgcmV0dXJuICdCJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgLy8gQmxhY2tiZXJyeSA0LnggLSBUZXN0ZWQgb24gdGhlIEN1cnZlIDgzMzBcbiAgICAgICAgICAgIHQudmVyc2lvbignQmxhY2tCZXJyeScpPDUuMCB8fFxuICAgICAgICAgICAgLy8gV2luZG93cyBNb2JpbGUgLSBUZXN0ZWQgb24gdGhlIEhUQyBMZW8gKFdpbk1vIDUuMilcbiAgICAgICAgICAgIHQubWF0Y2goJ01TSUVNb2JpbGV8V2luZG93cyBDRS4qTW9iaWxlJykgfHwgdC52ZXJzaW9uKCdXaW5kb3dzIE1vYmlsZScpPD01LjJcblxuICAgICAgICAgICAgKXtcbiAgICAgICAgICAgIHJldHVybiAnQyc7XG4gICAgICAgIH1cblxuICAgICAgICAvL0FsbCBvbGRlciBzbWFydHBob25lIHBsYXRmb3JtcyBhbmQgZmVhdHVyZXBob25lcyAtIEFueSBkZXZpY2UgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbWVkaWEgcXVlcmllc1xuICAgICAgICAvL3dpbGwgcmVjZWl2ZSB0aGUgYmFzaWMsIEMgZ3JhZGUgZXhwZXJpZW5jZS5cbiAgICAgICAgcmV0dXJuICdDJztcbiAgICB9O1xuXG4gICAgaW1wbC5kZXRlY3RPUyA9IGZ1bmN0aW9uICh1YSkge1xuICAgICAgICByZXR1cm4gaW1wbC5maW5kTWF0Y2goaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy5vc3MwLCB1YSkgfHxcbiAgICAgICAgICAgIGltcGwuZmluZE1hdGNoKGltcGwubW9iaWxlRGV0ZWN0UnVsZXMub3NzLCB1YSk7XG4gICAgfTtcblxuICAgIGltcGwuZ2V0RGV2aWNlU21hbGxlclNpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuc2NyZWVuLndpZHRoIDwgd2luZG93LnNjcmVlbi5oZWlnaHQgP1xuICAgICAgICAgICAgd2luZG93LnNjcmVlbi53aWR0aCA6XG4gICAgICAgICAgICB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIE1vYmlsZURldGVjdCBvYmplY3QuXG4gICAgICogPGJyPlxuICAgICAqIFN1Y2ggYW4gb2JqZWN0IHdpbGwga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgZ2l2ZW4gdXNlci1hZ2VudCBzdHJpbmcgYW5kIGNhY2hlIG1vc3Qgb2YgdGhlIGRldGVjdCBxdWVyaWVzLjxicj5cbiAgICAgKiA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNzsgYm9yZGVyOiAxcHggc29saWQgI2JjZThmMTsgY29sb3I6ICMzYTg3YWQ7IHBhZGRpbmc6IDE0cHg7IGJvcmRlci1yYWRpdXM6IDJweDsgbWFyZ2luLXRvcDogMjBweFwiPlxuICAgICAqICAgICA8c3Ryb25nPkZpbmQgaW5mb3JtYXRpb24gaG93IHRvIGRvd25sb2FkIGFuZCBpbnN0YWxsOjwvc3Ryb25nPlxuICAgICAqICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hnb2VibC9tb2JpbGUtZGV0ZWN0LmpzL1wiPmdpdGh1Yi5jb20vaGdvZWJsL21vYmlsZS1kZXRlY3QuanMvPC9hPlxuICAgICAqIDwvZGl2PlxuICAgICAqXG4gICAgICogQGV4YW1wbGUgPHByZT5cbiAgICAgKiAgICAgdmFyIG1kID0gbmV3IE1vYmlsZURldGVjdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICogICAgIGlmIChtZC5tb2JpbGUoKSkge1xuICAgICAqICAgICAgICAgbG9jYXRpb24uaHJlZiA9IChtZC5tb2JpbGVHcmFkZSgpID09PSAnQScpID8gJy9tb2JpbGUvJyA6ICcvbHlueC8nO1xuICAgICAqICAgICB9XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFnZW50IHR5cGljYWxseSB0YWtlbiBmcm9tIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IG9yIGh0dHBfaGVhZGVyWydVc2VyLUFnZW50J11cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heFBob25lV2lkdGg9NjAwXSA8c3Ryb25nPm9ubHkgZm9yIGJyb3dzZXJzPC9zdHJvbmc+IHNwZWNpZnkgYSB2YWx1ZSBmb3IgdGhlIG1heGltdW1cbiAgICAgKiAgICAgICAgd2lkdGggb2Ygc21hbGxlc3QgZGV2aWNlIHNpZGUgKGluIGxvZ2ljYWwgXCJDU1NcIiBwaXhlbHMpIHVudGlsIGEgZGV2aWNlIGRldGVjdGVkIGFzIG1vYmlsZSB3aWxsIGJlIGhhbmRsZWRcbiAgICAgKiAgICAgICAgYXMgcGhvbmUuXG4gICAgICogICAgICAgIFRoaXMgaXMgb25seSB1c2VkIGluIGNhc2VzIHdoZXJlIHRoZSBkZXZpY2UgY2Fubm90IGJlIGNsYXNzaWZpZWQgYXMgcGhvbmUgb3IgdGFibGV0Ljxicj5cbiAgICAgKiAgICAgICAgU2VlIDxhIGhyZWY9XCJodHRwOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2d1aWRlL3ByYWN0aWNlcy9zY3JlZW5zX3N1cHBvcnQuaHRtbFwiPkRlY2xhcmluZyBUYWJsZXQgTGF5b3V0c1xuICAgICAqICAgICAgICBmb3IgQW5kcm9pZDwvYT4uPGJyPlxuICAgICAqICAgICAgICBJZiB5b3UgcHJvdmlkZSBhIHZhbHVlIDwgMCwgdGhlbiB0aGlzIFwiZnV6enlcIiBjaGVjayBpcyBkaXNhYmxlZC5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAZ2xvYmFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gTW9iaWxlRGV0ZWN0KHVzZXJBZ2VudCwgbWF4UGhvbmVXaWR0aCkge1xuICAgICAgICB0aGlzLnVhID0gcHJlcGFyZVVzZXJBZ2VudCh1c2VyQWdlbnQpO1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgICAgICAvLzYwMGRwIGlzIHR5cGljYWwgN1wiIHRhYmxldCBtaW5pbXVtIHdpZHRoXG4gICAgICAgIHRoaXMubWF4UGhvbmVXaWR0aCA9IG1heFBob25lV2lkdGggfHwgNjAwO1xuICAgIH1cblxuICAgIE1vYmlsZURldGVjdC5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBNb2JpbGVEZXRlY3QsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRldGVjdGVkIHBob25lIG9yIHRhYmxldCB0eXBlIG9yIDx0dD5udWxsPC90dD4gaWYgaXQgaXMgbm90IGEgbW9iaWxlIGRldmljZS5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBGb3IgYSBsaXN0IG9mIHBvc3NpYmxlIHJldHVybiB2YWx1ZXMgc2VlIHtAbGluayBNb2JpbGVEZXRlY3QjcGhvbmV9IGFuZCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3RhYmxldH0uPGJyPlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIElmIHRoZSBkZXZpY2UgaXMgbm90IGRldGVjdGVkIGJ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIGZyb20gTW9iaWxlLURldGVjdCwgYSB0ZXN0IGlzIG1hZGUgYWdhaW5zdFxuICAgICAgICAgKiB0aGUgcGF0dGVybnMgb2YgPGEgaHJlZj1cImh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXCI+ZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tPC9hPi4gSWYgdGhpcyB0ZXN0XG4gICAgICAgICAqIGlzIHBvc2l0aXZlLCBhIHZhbHVlIG9mIDxjb2RlPlVua25vd25QaG9uZTwvY29kZT4sIDxjb2RlPlVua25vd25UYWJsZXQ8L2NvZGU+IG9yXG4gICAgICAgICAqIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IGlzIHJldHVybmVkLjxicj5cbiAgICAgICAgICogV2hlbiB1c2VkIGluIGJyb3dzZXIsIHRoZSBkZWNpc2lvbiB3aGV0aGVyIHBob25lIG9yIHRhYmxldCBpcyBtYWRlIGJhc2VkIG9uIDxjb2RlPnNjcmVlbi53aWR0aC9oZWlnaHQ8L2NvZGU+Ljxicj5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBXaGVuIHVzZWQgc2VydmVyLXNpZGUgKG5vZGUuanMpLCB0aGVyZSBpcyBubyB3YXkgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDxjb2RlPlVua25vd25UYWJsZXQ8L2NvZGU+XG4gICAgICAgICAqIGFuZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiwgc28geW91IHdpbGwgZ2V0IDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IGhlcmUuPGJyPlxuICAgICAgICAgKiBCZSBhd2FyZSB0aGF0IHNpbmNlIHYxLjAuMCBpbiB0aGlzIHNwZWNpYWwgY2FzZSB5b3Ugd2lsbCBnZXQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gb25seSBmb3I6XG4gICAgICAgICAqIHtAbGluayBNb2JpbGVEZXRlY3QjbW9iaWxlfSwgbm90IGZvciB7QGxpbmsgTW9iaWxlRGV0ZWN0I3Bob25lfSBhbmQge0BsaW5rIE1vYmlsZURldGVjdCN0YWJsZXR9LlxuICAgICAgICAgKiBJbiB2ZXJzaW9ucyBiZWZvcmUgdjEuMC4wIGFsbCAzIG1ldGhvZHMgcmV0dXJuZWQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gd2hpY2ggd2FzIHRlZGlvdXMgdG8gdXNlLlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIEluIG1vc3QgY2FzZXMgeW91IHdpbGwgdXNlIHRoZSByZXR1cm4gdmFsdWUganVzdCBhcyBhIGJvb2xlYW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBrZXkgZm9yIHRoZSBwaG9uZSBmYW1pbHkgb3IgdGFibGV0IGZhbWlseSwgZS5nLiBcIk5leHVzXCIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjbW9iaWxlXG4gICAgICAgICAqL1xuICAgICAgICBtb2JpbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGltcGwucHJlcGFyZURldGVjdGlvbkNhY2hlKHRoaXMuX2NhY2hlLCB0aGlzLnVhLCB0aGlzLm1heFBob25lV2lkdGgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLm1vYmlsZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGV0ZWN0ZWQgcGhvbmUgdHlwZS9mYW1pbHkgc3RyaW5nIG9yIDx0dD5udWxsPC90dD4uXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogVGhlIHJldHVybmVkIHRhYmxldCAoZmFtaWx5IG9yIHByb2R1Y2VyKSBpcyBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0PmlQaG9uZSwgQmxhY2tCZXJyeSwgSFRDLCBOZXh1cywgRGVsbCwgTW90b3JvbGEsIFNhbXN1bmcsIExHLCBTb255LCBBc3VzLFxuICAgICAgICAgKiBOb2tpYUx1bWlhLCBNaWNyb21heCwgUGFsbSwgVmVydHUsIFBhbnRlY2gsIEZseSwgV2lrbywgaU1vYmlsZSwgU2ltVmFsbGV5LFxuICAgICAgICAgKiBXb2xmZ2FuZywgQWxjYXRlbCwgTmludGVuZG8sIEFtb2ksIElOUSwgT25lUGx1cywgR2VuZXJpY1Bob25lPC90dD48YnI+XG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogSWYgdGhlIGRldmljZSBpcyBub3QgZGV0ZWN0ZWQgYnkgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZnJvbSBNb2JpbGUtRGV0ZWN0LCBhIHRlc3QgaXMgbWFkZSBhZ2FpbnN0XG4gICAgICAgICAqIHRoZSBwYXR0ZXJucyBvZiA8YSBocmVmPVwiaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXJzLmNvbS9cIj5kZXRlY3Rtb2JpbGVicm93c2Vycy5jb208L2E+LiBJZiB0aGlzIHRlc3RcbiAgICAgICAgICogaXMgcG9zaXRpdmUsIGEgdmFsdWUgb2YgPGNvZGU+VW5rbm93blBob25lPC9jb2RlPiBvciA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiBpcyByZXR1cm5lZC48YnI+XG4gICAgICAgICAqIFdoZW4gdXNlZCBpbiBicm93c2VyLCB0aGUgZGVjaXNpb24gd2hldGhlciBwaG9uZSBvciB0YWJsZXQgaXMgbWFkZSBiYXNlZCBvbiA8Y29kZT5zY3JlZW4ud2lkdGgvaGVpZ2h0PC9jb2RlPi48YnI+XG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogV2hlbiB1c2VkIHNlcnZlci1zaWRlIChub2RlLmpzKSwgdGhlcmUgaXMgbm8gd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiA8Y29kZT5Vbmtub3duVGFibGV0PC9jb2RlPlxuICAgICAgICAgKiBhbmQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4sIHNvIHlvdSB3aWxsIGdldCA8Y29kZT5udWxsPC9jb2RlPiBoZXJlLCB3aGlsZSB7QGxpbmsgTW9iaWxlRGV0ZWN0I21vYmlsZX1cbiAgICAgICAgICogd2lsbCByZXR1cm4gPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4uPGJyPlxuICAgICAgICAgKiBCZSBhd2FyZSB0aGF0IHNpbmNlIHYxLjAuMCBpbiB0aGlzIHNwZWNpYWwgY2FzZSB5b3Ugd2lsbCBnZXQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gb25seSBmb3I6XG4gICAgICAgICAqIHtAbGluayBNb2JpbGVEZXRlY3QjbW9iaWxlfSwgbm90IGZvciB7QGxpbmsgTW9iaWxlRGV0ZWN0I3Bob25lfSBhbmQge0BsaW5rIE1vYmlsZURldGVjdCN0YWJsZXR9LlxuICAgICAgICAgKiBJbiB2ZXJzaW9ucyBiZWZvcmUgdjEuMC4wIGFsbCAzIG1ldGhvZHMgcmV0dXJuZWQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gd2hpY2ggd2FzIHRlZGlvdXMgdG8gdXNlLlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIEluIG1vc3QgY2FzZXMgeW91IHdpbGwgdXNlIHRoZSByZXR1cm4gdmFsdWUganVzdCBhcyBhIGJvb2xlYW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBrZXkgb2YgdGhlIHBob25lIGZhbWlseSBvciBwcm9kdWNlciwgZS5nLiBcImlQaG9uZVwiXG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjcGhvbmVcbiAgICAgICAgICovXG4gICAgICAgIHBob25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbXBsLnByZXBhcmVEZXRlY3Rpb25DYWNoZSh0aGlzLl9jYWNoZSwgdGhpcy51YSwgdGhpcy5tYXhQaG9uZVdpZHRoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS5waG9uZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGV0ZWN0ZWQgdGFibGV0IHR5cGUvZmFtaWx5IHN0cmluZyBvciA8dHQ+bnVsbDwvdHQ+LlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIFRoZSByZXR1cm5lZCB0YWJsZXQgKGZhbWlseSBvciBwcm9kdWNlcikgaXMgb25lIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5pUGFkLCBOZXh1c1RhYmxldCwgR29vZ2xlVGFibGV0LCBTYW1zdW5nVGFibGV0LCBLaW5kbGUsIFN1cmZhY2VUYWJsZXQsXG4gICAgICAgICAqIEhQVGFibGV0LCBBc3VzVGFibGV0LCBCbGFja0JlcnJ5VGFibGV0LCBIVEN0YWJsZXQsIE1vdG9yb2xhVGFibGV0LCBOb29rVGFibGV0LFxuICAgICAgICAgKiBBY2VyVGFibGV0LCBUb3NoaWJhVGFibGV0LCBMR1RhYmxldCwgRnVqaXRzdVRhYmxldCwgUHJlc3RpZ2lvVGFibGV0LFxuICAgICAgICAgKiBMZW5vdm9UYWJsZXQsIERlbGxUYWJsZXQsIFlhcnZpa1RhYmxldCwgTWVkaW9uVGFibGV0LCBBcm5vdmFUYWJsZXQsXG4gICAgICAgICAqIEludGVuc29UYWJsZXQsIElSVVRhYmxldCwgTWVnYWZvblRhYmxldCwgRWJvZGFUYWJsZXQsIEFsbFZpZXdUYWJsZXQsXG4gICAgICAgICAqIEFyY2hvc1RhYmxldCwgQWlub2xUYWJsZXQsIE5va2lhTHVtaWFUYWJsZXQsIFNvbnlUYWJsZXQsIFBoaWxpcHNUYWJsZXQsXG4gICAgICAgICAqIEN1YmVUYWJsZXQsIENvYnlUYWJsZXQsIE1JRFRhYmxldCwgTVNJVGFibGV0LCBTTWlUVGFibGV0LCBSb2NrQ2hpcFRhYmxldCxcbiAgICAgICAgICogRmx5VGFibGV0LCBicVRhYmxldCwgSHVhd2VpVGFibGV0LCBOZWNUYWJsZXQsIFBhbnRlY2hUYWJsZXQsIEJyb25jaG9UYWJsZXQsXG4gICAgICAgICAqIFZlcnN1c1RhYmxldCwgWnluY1RhYmxldCwgUG9zaXRpdm9UYWJsZXQsIE5hYmlUYWJsZXQsIEtvYm9UYWJsZXQsIERhbmV3VGFibGV0LFxuICAgICAgICAgKiBUZXhldFRhYmxldCwgUGxheXN0YXRpb25UYWJsZXQsIFRyZWtzdG9yVGFibGV0LCBQeWxlQXVkaW9UYWJsZXQsIEFkdmFuVGFibGV0LFxuICAgICAgICAgKiBEYW55VGVjaFRhYmxldCwgR2FsYXBhZFRhYmxldCwgTWljcm9tYXhUYWJsZXQsIEthcmJvbm5UYWJsZXQsIEFsbEZpbmVUYWJsZXQsXG4gICAgICAgICAqIFBST1NDQU5UYWJsZXQsIFlPTkVTVGFibGV0LCBDaGFuZ0ppYVRhYmxldCwgR1VUYWJsZXQsIFBvaW50T2ZWaWV3VGFibGV0LFxuICAgICAgICAgKiBPdmVybWF4VGFibGV0LCBIQ0xUYWJsZXQsIERQU1RhYmxldCwgVmlzdHVyZVRhYmxldCwgQ3Jlc3RhVGFibGV0LFxuICAgICAgICAgKiBNZWRpYXRla1RhYmxldCwgQ29uY29yZGVUYWJsZXQsIEdvQ2xldmVyVGFibGV0LCBNb2RlY29tVGFibGV0LCBWb25pbm9UYWJsZXQsXG4gICAgICAgICAqIEVDU1RhYmxldCwgU3RvcmV4VGFibGV0LCBWb2RhZm9uZVRhYmxldCwgRXNzZW50aWVsQlRhYmxldCwgUm9zc01vb3JUYWJsZXQsXG4gICAgICAgICAqIGlNb2JpbGVUYWJsZXQsIFRvbGlub1RhYmxldCwgQXVkaW9Tb25pY1RhYmxldCwgQU1QRVRhYmxldCwgU2trVGFibGV0LFxuICAgICAgICAgKiBUZWNub1RhYmxldCwgSlhEVGFibGV0LCBpSm95VGFibGV0LCBGWDJUYWJsZXQsIFhvcm9UYWJsZXQsIFZpZXdzb25pY1RhYmxldCxcbiAgICAgICAgICogVmVyaXpvblRhYmxldCwgT2R5c1RhYmxldCwgQ2FwdGl2YVRhYmxldCwgSWNvbmJpdFRhYmxldCwgVGVjbGFzdFRhYmxldCxcbiAgICAgICAgICogT25kYVRhYmxldCwgSmF5dGVjaFRhYmxldCwgQmxhdXB1bmt0VGFibGV0LCBEaWdtYVRhYmxldCwgRXZvbGlvVGFibGV0LFxuICAgICAgICAgKiBMYXZhVGFibGV0LCBBb2NUYWJsZXQsIE1wbWFuVGFibGV0LCBDZWxrb25UYWJsZXQsIFdvbGRlclRhYmxldCwgTWVkaWFjb21UYWJsZXQsXG4gICAgICAgICAqIE1pVGFibGV0LCBOaWJpcnVUYWJsZXQsIE5leG9UYWJsZXQsIExlYWRlclRhYmxldCwgVWJpc2xhdGVUYWJsZXQsXG4gICAgICAgICAqIFBvY2tldEJvb2tUYWJsZXQsIEtvY2Fzb1RhYmxldCwgSGlzZW5zZVRhYmxldCwgSHVkbCwgVGVsc3RyYVRhYmxldCxcbiAgICAgICAgICogR2VuZXJpY1RhYmxldDwvdHQ+PGJyPlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIElmIHRoZSBkZXZpY2UgaXMgbm90IGRldGVjdGVkIGJ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIGZyb20gTW9iaWxlLURldGVjdCwgYSB0ZXN0IGlzIG1hZGUgYWdhaW5zdFxuICAgICAgICAgKiB0aGUgcGF0dGVybnMgb2YgPGEgaHJlZj1cImh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXCI+ZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tPC9hPi4gSWYgdGhpcyB0ZXN0XG4gICAgICAgICAqIGlzIHBvc2l0aXZlLCBhIHZhbHVlIG9mIDxjb2RlPlVua25vd25UYWJsZXQ8L2NvZGU+IG9yIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IGlzIHJldHVybmVkLjxicj5cbiAgICAgICAgICogV2hlbiB1c2VkIGluIGJyb3dzZXIsIHRoZSBkZWNpc2lvbiB3aGV0aGVyIHBob25lIG9yIHRhYmxldCBpcyBtYWRlIGJhc2VkIG9uIDxjb2RlPnNjcmVlbi53aWR0aC9oZWlnaHQ8L2NvZGU+Ljxicj5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBXaGVuIHVzZWQgc2VydmVyLXNpZGUgKG5vZGUuanMpLCB0aGVyZSBpcyBubyB3YXkgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDxjb2RlPlVua25vd25UYWJsZXQ8L2NvZGU+XG4gICAgICAgICAqIGFuZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiwgc28geW91IHdpbGwgZ2V0IDxjb2RlPm51bGw8L2NvZGU+IGhlcmUsIHdoaWxlIHtAbGluayBNb2JpbGVEZXRlY3QjbW9iaWxlfVxuICAgICAgICAgKiB3aWxsIHJldHVybiA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPi48YnI+XG4gICAgICAgICAqIEJlIGF3YXJlIHRoYXQgc2luY2UgdjEuMC4wIGluIHRoaXMgc3BlY2lhbCBjYXNlIHlvdSB3aWxsIGdldCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiBvbmx5IGZvcjpcbiAgICAgICAgICoge0BsaW5rIE1vYmlsZURldGVjdCNtb2JpbGV9LCBub3QgZm9yIHtAbGluayBNb2JpbGVEZXRlY3QjcGhvbmV9IGFuZCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3RhYmxldH0uXG4gICAgICAgICAqIEluIHZlcnNpb25zIGJlZm9yZSB2MS4wLjAgYWxsIDMgbWV0aG9kcyByZXR1cm5lZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiB3aGljaCB3YXMgdGVkaW91cyB0byB1c2UuXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogSW4gbW9zdCBjYXNlcyB5b3Ugd2lsbCB1c2UgdGhlIHJldHVybiB2YWx1ZSBqdXN0IGFzIGEgYm9vbGVhbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIGtleSBvZiB0aGUgdGFibGV0IGZhbWlseSBvciBwcm9kdWNlciwgZS5nLiBcIlNhbXN1bmdUYWJsZXRcIlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3RhYmxldFxuICAgICAgICAgKi9cbiAgICAgICAgdGFibGV0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbXBsLnByZXBhcmVEZXRlY3Rpb25DYWNoZSh0aGlzLl9jYWNoZSwgdGhpcy51YSwgdGhpcy5tYXhQaG9uZVdpZHRoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS50YWJsZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIChmaXJzdCkgZGV0ZWN0ZWQgdXNlci1hZ2VudCBzdHJpbmcgb3IgPHR0Pm51bGw8L3R0Pi5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBUaGUgcmV0dXJuZWQgdXNlci1hZ2VudCBpcyBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0PkNocm9tZSwgRG9sZmluLCBPcGVyYSwgU2t5ZmlyZSwgRWRnZSwgSUUsIEZpcmVmb3gsIEJvbHQsIFRlYVNoYXJrLCBCbGF6ZXIsXG4gICAgICAgICAqIFNhZmFyaSwgV2VDaGF0LCBVQ0Jyb3dzZXIsIGJhaWR1Ym94YXBwLCBiYWlkdWJyb3dzZXIsIERpaWdvQnJvd3NlciwgTWVyY3VyeSxcbiAgICAgICAgICogT2JpZ29Ccm93c2VyLCBOZXRGcm9udCwgR2VuZXJpY0Jyb3dzZXIsIFBhbGVNb29uPC90dD48YnI+XG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogSW4gbW9zdCBjYXNlcyBjYWxsaW5nIHtAbGluayBNb2JpbGVEZXRlY3QjdXNlckFnZW50fSB3aWxsIGJlIHN1ZmZpY2llbnQuIEJ1dCB0aGVyZSBhcmUgcmFyZVxuICAgICAgICAgKiBjYXNlcyB3aGVyZSBhIG1vYmlsZSBkZXZpY2UgcHJldGVuZHMgdG8gYmUgbW9yZSB0aGFuIG9uZSBwYXJ0aWN1bGFyIGJyb3dzZXIuIFlvdSBjYW4gZ2V0IHRoZVxuICAgICAgICAgKiBsaXN0IG9mIGFsbCBtYXRjaGVzIHdpdGgge0BsaW5rIE1vYmlsZURldGVjdCN1c2VyQWdlbnRzfSBvciBjaGVjayBmb3IgYSBwYXJ0aWN1bGFyIHZhbHVlIGJ5XG4gICAgICAgICAqIHByb3ZpZGluZyBvbmUgb2YgdGhlIGRlZmluZWQga2V5cyBhcyBmaXJzdCBhcmd1bWVudCB0byB7QGxpbmsgTW9iaWxlRGV0ZWN0I2lzfS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIGtleSBmb3IgdGhlIGRldGVjdGVkIHVzZXItYWdlbnQgb3IgPHR0Pm51bGw8L3R0PlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudFxuICAgICAgICAgKi9cbiAgICAgICAgdXNlckFnZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FjaGUudXNlckFnZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZS51c2VyQWdlbnQgPSBpbXBsLmZpbmRNYXRjaChpbXBsLm1vYmlsZURldGVjdFJ1bGVzLnVhcywgdGhpcy51YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUudXNlckFnZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGFsbCBkZXRlY3RlZCB1c2VyLWFnZW50IHN0cmluZ3MuXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogVGhlIGFycmF5IGlzIGVtcHR5IG9yIGNvbnRhaW5zIG9uZSBvciBtb3JlIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5DaHJvbWUsIERvbGZpbiwgT3BlcmEsIFNreWZpcmUsIEVkZ2UsIElFLCBGaXJlZm94LCBCb2x0LCBUZWFTaGFyaywgQmxhemVyLFxuICAgICAgICAgKiBTYWZhcmksIFdlQ2hhdCwgVUNCcm93c2VyLCBiYWlkdWJveGFwcCwgYmFpZHVicm93c2VyLCBEaWlnb0Jyb3dzZXIsIE1lcmN1cnksXG4gICAgICAgICAqIE9iaWdvQnJvd3NlciwgTmV0RnJvbnQsIEdlbmVyaWNCcm93c2VyLCBQYWxlTW9vbjwvdHQ+PGJyPlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIEluIG1vc3QgY2FzZXMgY2FsbGluZyB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudH0gd2lsbCBiZSBzdWZmaWNpZW50LiBCdXQgdGhlcmUgYXJlIHJhcmVcbiAgICAgICAgICogY2FzZXMgd2hlcmUgYSBtb2JpbGUgZGV2aWNlIHByZXRlbmRzIHRvIGJlIG1vcmUgdGhhbiBvbmUgcGFydGljdWxhciBicm93c2VyLiBZb3UgY2FuIGdldCB0aGVcbiAgICAgICAgICogbGlzdCBvZiBhbGwgbWF0Y2hlcyB3aXRoIHtAbGluayBNb2JpbGVEZXRlY3QjdXNlckFnZW50c30gb3IgY2hlY2sgZm9yIGEgcGFydGljdWxhciB2YWx1ZSBieVxuICAgICAgICAgKiBwcm92aWRpbmcgb25lIG9mIHRoZSBkZWZpbmVkIGtleXMgYXMgZmlyc3QgYXJndW1lbnQgdG8ge0BsaW5rIE1vYmlsZURldGVjdCNpc30uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtBcnJheX0gdGhlIGFycmF5IG9mIGRldGVjdGVkIHVzZXItYWdlbnQga2V5cyBvciA8dHQ+W108L3R0PlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudHNcbiAgICAgICAgICovXG4gICAgICAgIHVzZXJBZ2VudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZS51c2VyQWdlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZS51c2VyQWdlbnRzID0gaW1wbC5maW5kTWF0Y2hlcyhpbXBsLm1vYmlsZURldGVjdFJ1bGVzLnVhcywgdGhpcy51YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUudXNlckFnZW50cztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGV0ZWN0ZWQgb3BlcmF0aW5nIHN5c3RlbSBzdHJpbmcgb3IgPHR0Pm51bGw8L3R0Pi5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBUaGUgb3BlcmF0aW5nIHN5c3RlbSBpcyBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0PkFuZHJvaWRPUywgQmxhY2tCZXJyeU9TLCBQYWxtT1MsIFN5bWJpYW5PUywgV2luZG93c01vYmlsZU9TLCBXaW5kb3dzUGhvbmVPUyxcbiAgICAgICAgICogaU9TLCBpUGFkT1MsIE1lZUdvT1MsIE1hZW1vT1MsIEphdmFPUywgd2ViT1MsIGJhZGFPUywgQlJFV09TPC90dD48YnI+XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBrZXkgZm9yIHRoZSBkZXRlY3RlZCBvcGVyYXRpbmcgc3lzdGVtLlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I29zXG4gICAgICAgICAqL1xuICAgICAgICBvczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlLm9zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZS5vcyA9IGltcGwuZGV0ZWN0T1ModGhpcy51YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUub3M7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgdmVyc2lvbiAoYXMgTnVtYmVyKSBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgaW4gdGhlIFVzZXItQWdlbnQuXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogV2lsbCByZXR1cm4gYSBmbG9hdCBudW1iZXIuIChlZy4gMl8wIHdpbGwgcmV0dXJuIDIuMCwgNC4zLjEgd2lsbCByZXR1cm4gNC4zMSlcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBhIGtleSBkZWZpbmluZyBhIHRoaW5nIHdoaWNoIGhhcyBhIHZlcnNpb24uPGJyPlxuICAgICAgICAgKiAgICAgICAgWW91IGNhbiB1c2Ugb25lIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5Nb2JpbGUsIEJ1aWxkLCBWZXJzaW9uLCBWZW5kb3JJRCwgaVBhZCwgaVBob25lLCBpUG9kLCBLaW5kbGUsIENocm9tZSwgQ29hc3QsXG4gICAgICAgICAqIERvbGZpbiwgRmlyZWZveCwgRmVubmVjLCBFZGdlLCBJRSwgTmV0RnJvbnQsIE5va2lhQnJvd3NlciwgT3BlcmEsIE9wZXJhIE1pbmksXG4gICAgICAgICAqIE9wZXJhIE1vYmksIFVDQnJvd3NlciwgTVFRQnJvd3NlciwgTWljcm9NZXNzZW5nZXIsIGJhaWR1Ym94YXBwLCBiYWlkdWJyb3dzZXIsXG4gICAgICAgICAqIFNhbXN1bmdCcm93c2VyLCBJcm9uLCBTYWZhcmksIFNreWZpcmUsIFRpemVuLCBXZWJraXQsIFBhbGVNb29uLCBHZWNrbywgVHJpZGVudCxcbiAgICAgICAgICogUHJlc3RvLCBHb2FubmEsIGlPUywgQW5kcm9pZCwgQmxhY2tCZXJyeSwgQlJFVywgSmF2YSwgV2luZG93cyBQaG9uZSBPUywgV2luZG93c1xuICAgICAgICAgKiBQaG9uZSwgV2luZG93cyBDRSwgV2luZG93cyBOVCwgU3ltYmlhbiwgd2ViT1M8L3R0Pjxicj5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge051bWJlcn0gdGhlIHZlcnNpb24gYXMgZmxvYXQgb3IgPHR0Pk5hTjwvdHQ+IGlmIFVzZXItQWdlbnQgZG9lc24ndCBjb250YWluIHRoaXMgdmVyc2lvbi5cbiAgICAgICAgICogICAgICAgICAgQmUgY2FyZWZ1bCB3aGVuIGNvbXBhcmluZyB0aGlzIHZhbHVlIHdpdGggJz09JyBvcGVyYXRvciFcbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCN2ZXJzaW9uXG4gICAgICAgICAqL1xuICAgICAgICB2ZXJzaW9uOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gaW1wbC5nZXRWZXJzaW9uKGtleSwgdGhpcy51YSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgdmVyc2lvbiAoYXMgU3RyaW5nKSBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgaW4gdGhlIFVzZXItQWdlbnQuXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBhIGtleSBkZWZpbmluZyBhIHRoaW5nIHdoaWNoIGhhcyBhIHZlcnNpb24uPGJyPlxuICAgICAgICAgKiAgICAgICAgWW91IGNhbiB1c2Ugb25lIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5Nb2JpbGUsIEJ1aWxkLCBWZXJzaW9uLCBWZW5kb3JJRCwgaVBhZCwgaVBob25lLCBpUG9kLCBLaW5kbGUsIENocm9tZSwgQ29hc3QsXG4gICAgICAgICAqIERvbGZpbiwgRmlyZWZveCwgRmVubmVjLCBFZGdlLCBJRSwgTmV0RnJvbnQsIE5va2lhQnJvd3NlciwgT3BlcmEsIE9wZXJhIE1pbmksXG4gICAgICAgICAqIE9wZXJhIE1vYmksIFVDQnJvd3NlciwgTVFRQnJvd3NlciwgTWljcm9NZXNzZW5nZXIsIGJhaWR1Ym94YXBwLCBiYWlkdWJyb3dzZXIsXG4gICAgICAgICAqIFNhbXN1bmdCcm93c2VyLCBJcm9uLCBTYWZhcmksIFNreWZpcmUsIFRpemVuLCBXZWJraXQsIFBhbGVNb29uLCBHZWNrbywgVHJpZGVudCxcbiAgICAgICAgICogUHJlc3RvLCBHb2FubmEsIGlPUywgQW5kcm9pZCwgQmxhY2tCZXJyeSwgQlJFVywgSmF2YSwgV2luZG93cyBQaG9uZSBPUywgV2luZG93c1xuICAgICAgICAgKiBQaG9uZSwgV2luZG93cyBDRSwgV2luZG93cyBOVCwgU3ltYmlhbiwgd2ViT1M8L3R0Pjxicj5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIFwicmF3XCIgdmVyc2lvbiBhcyBTdHJpbmcgb3IgPHR0Pm51bGw8L3R0PiBpZiBVc2VyLUFnZW50IGRvZXNuJ3QgY29udGFpbiB0aGlzIHZlcnNpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjdmVyc2lvblN0clxuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvblN0cjogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGltcGwuZ2V0VmVyc2lvblN0cihrZXksIHRoaXMudWEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHbG9iYWwgdGVzdCBrZXkgYWdhaW5zdCB1c2VyQWdlbnQsIG9zLCBwaG9uZSwgdGFibGV0IGFuZCBzb21lIG90aGVyIHByb3BlcnRpZXMgb2YgdXNlckFnZW50IHN0cmluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUga2V5IChjYXNlLWluc2Vuc2l0aXZlKSBvZiBhIHVzZXJBZ2VudCwgYW4gb3BlcmF0aW5nIHN5c3RlbSwgcGhvbmUgb3JcbiAgICAgICAgICogICAgICAgIHRhYmxldCBmYW1pbHkuPGJyPlxuICAgICAgICAgKiAgICAgICAgRm9yIGEgY29tcGxldGUgbGlzdCBvZiBwb3NzaWJsZSB2YWx1ZXMsIHNlZSB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudH0sXG4gICAgICAgICAqICAgICAgICB7QGxpbmsgTW9iaWxlRGV0ZWN0I29zfSwge0BsaW5rIE1vYmlsZURldGVjdCNwaG9uZX0sIHtAbGluayBNb2JpbGVEZXRlY3QjdGFibGV0fS48YnI+XG4gICAgICAgICAqICAgICAgICBBZGRpdGlvbmFsbHkgeW91IGhhdmUgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0PkJvdCwgTW9iaWxlQm90LCBEZXNrdG9wTW9kZSwgVFYsIFdlYktpdCwgQ29uc29sZSwgV2F0Y2g8L3R0Pjxicj5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IDx0dD50cnVlPC90dD4gd2hlbiB0aGUgZ2l2ZW4ga2V5IGlzIG9uZSBvZiB0aGUgZGVmaW5lZCBrZXlzIG9mIHVzZXJBZ2VudCwgb3MsIHBob25lLFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgdGFibGV0IG9yIG9uZSBvZiB0aGUgbGlzdGVkIGFkZGl0aW9uYWwga2V5cywgb3RoZXJ3aXNlIDx0dD5mYWxzZTwvdHQ+XG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjaXNcbiAgICAgICAgICovXG4gICAgICAgIGlzOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbnNJQyh0aGlzLnVzZXJBZ2VudHMoKSwga2V5KSB8fFxuICAgICAgICAgICAgICAgICAgIGVxdWFsSUMoa2V5LCB0aGlzLm9zKCkpIHx8XG4gICAgICAgICAgICAgICAgICAgZXF1YWxJQyhrZXksIHRoaXMucGhvbmUoKSkgfHxcbiAgICAgICAgICAgICAgICAgICBlcXVhbElDKGtleSwgdGhpcy50YWJsZXQoKSkgfHxcbiAgICAgICAgICAgICAgICAgICBjb250YWluc0lDKGltcGwuZmluZE1hdGNoZXMoaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy51dGlscywgdGhpcy51YSksIGtleSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERvIGEgcXVpY2sgdGVzdCBhZ2FpbnN0IG5hdmlnYXRvcjo6dXNlckFnZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IHBhdHRlcm4gdGhlIHBhdHRlcm4sIGVpdGhlciBhcyBTdHJpbmcgb3IgUmVnRXhwXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgKGEgc3RyaW5nIHdpbGwgYmUgY29udmVydGVkIHRvIGEgY2FzZS1pbnNlbnNpdGl2ZSBSZWdFeHApLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gPHR0PnRydWU8L3R0PiB3aGVuIHRoZSBwYXR0ZXJuIG1hdGNoZXMsIG90aGVyd2lzZSA8dHQ+ZmFsc2U8L3R0PlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I21hdGNoXG4gICAgICAgICAqL1xuICAgICAgICBtYXRjaDogZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIGlmICghKHBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHApKSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBtb2JpbGUgZGV2aWNlIGNhbiBiZSBjb25zaWRlcmVkIGFzIHBob25lIHJlZ2FyZGluZyA8Y29kZT5zY3JlZW4ud2lkdGg8L2NvZGU+LlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIE9idmlvdXNseSB0aGlzIG1ldGhvZCBtYWtlcyBzZW5zZSBpbiBicm93c2VyIGVudmlyb25tZW50cyBvbmx5IChub3QgZm9yIE5vZGUuanMpIVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heFBob25lV2lkdGhdIHRoZSBtYXhpbXVtIGxvZ2ljYWwgcGl4ZWxzIChha2EuIENTUy1waXhlbHMpIHRvIGJlIGNvbnNpZGVyZWQgYXMgcGhvbmUuPGJyPlxuICAgICAgICAgKiAgICAgICAgVGhlIGFyZ3VtZW50IGlzIG9wdGlvbmFsIGFuZCBpZiBub3QgcHJlc2VudCBvciBmYWxzeSwgdGhlIHZhbHVlIG9mIHRoZSBjb25zdHJ1Y3RvciBpcyB0YWtlbi5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW58dW5kZWZpbmVkfSA8Y29kZT51bmRlZmluZWQ8L2NvZGU+IGlmIHNjcmVlbiBzaXplIHdhc24ndCBkZXRlY3RhYmxlLCBlbHNlIDxjb2RlPnRydWU8L2NvZGU+XG4gICAgICAgICAqICAgICAgICAgIHdoZW4gc2NyZWVuLndpZHRoIGlzIGxlc3Mgb3IgZXF1YWwgdG8gbWF4UGhvbmVXaWR0aCwgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi48YnI+XG4gICAgICAgICAqICAgICAgICAgIFdpbGwgYWx3YXlzIHJldHVybiA8Y29kZT51bmRlZmluZWQ8L2NvZGU+IHNlcnZlci1zaWRlLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNQaG9uZVNpemVkOiBmdW5jdGlvbiAobWF4UGhvbmVXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIE1vYmlsZURldGVjdC5pc1Bob25lU2l6ZWQobWF4UGhvbmVXaWR0aCB8fCB0aGlzLm1heFBob25lV2lkdGgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtb2JpbGUgZ3JhZGUgKCdBJywgJ0InLCAnQycpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBvbmUgb2YgdGhlIG1vYmlsZSBncmFkZXMgKCdBJywgJ0InLCAnQycpLlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I21vYmlsZUdyYWRlXG4gICAgICAgICAqL1xuICAgICAgICBtb2JpbGVHcmFkZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlLmdyYWRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZS5ncmFkZSA9IGltcGwubW9iaWxlR3JhZGUodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUuZ3JhZGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZW52aXJvbm1lbnQtZGVwZW5kZW50XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5zY3JlZW4pIHtcbiAgICAgICAgTW9iaWxlRGV0ZWN0LmlzUGhvbmVTaXplZCA9IGZ1bmN0aW9uIChtYXhQaG9uZVdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF4UGhvbmVXaWR0aCA8IDAgPyB1bmRlZmluZWQgOiBpbXBsLmdldERldmljZVNtYWxsZXJTaWRlKCkgPD0gbWF4UGhvbmVXaWR0aDtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBNb2JpbGVEZXRlY3QuaXNQaG9uZVNpemVkID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuXG4gICAgLy8gc2hvdWxkIG5vdCBiZSByZXBsYWNlZCBieSBhIGNvbXBsZXRlbHkgbmV3IG9iamVjdCAtIGp1c3Qgb3ZlcndyaXRlIGV4aXN0aW5nIG1ldGhvZHNcbiAgICBNb2JpbGVEZXRlY3QuX2ltcGwgPSBpbXBsO1xuICAgIFxuICAgIE1vYmlsZURldGVjdC52ZXJzaW9uID0gJzEuNC40IDIwMTktMDktMjEnO1xuXG4gICAgcmV0dXJuIE1vYmlsZURldGVjdDtcbn0pOyAvLyBlbmQgb2YgY2FsbCBvZiBkZWZpbmUoKVxufSkoKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmU7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZhY3RvcnkpIHsgd2luZG93Lk1vYmlsZURldGVjdCA9IGZhY3RvcnkoKTsgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGVhc2UgZmlsZSBhIGJ1ZyBpZiB5b3UgZ2V0IHRoaXMgZXJyb3IhXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBlbnZpcm9ubWVudCcpO1xuICAgIH1cbn0pKCkpOyIsImNvbnN0IHJlc3BvbnNpdmVDb250cm9sbGVyID0gcmVxdWlyZSgnLi9tb2R1bGVzL3Jlc3BvbnNpdmVfY29udHJvbGxlcicpO1xyXG5jb25zdCBzZWFyY2hDb250cm9sbGVyID0gcmVxdWlyZSgnLi9tb2R1bGVzL3NlYXJjaF9jb250cm9sbGVyJyk7XHJcbmNvbnN0IGdhbWVzUmVxdWVzdCA9IHJlcXVpcmUoJy4vbW9kdWxlcy9nYW1lc19yZXF1ZXN0Jyk7XHJcbmNvbnN0IHN0b3JhZ2VEYXRhID0gcmVxdWlyZSgnLi9tb2R1bGVzL3N0b3JhZ2VfZGF0YScpO1xyXG5jb25zdCBnYW1lc0luc2VydCA9IHJlcXVpcmUoJy4vbW9kdWxlcy9nYW1lc19pbnNlcnQnKTtcclxuY29uc3QgaHRtbFBhcnRpYWxzID0gcmVxdWlyZSgnLi9tb2R1bGVzL2h0bWxfcGFydGlhbHMnKTtcclxuXHJcbnJlc3BvbnNpdmVDb250cm9sbGVyKHtcclxuXHRuYXZpZ2F0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbicpLFxyXG5cdHRvZ2dsZUJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZU5hdkJ1dHRvbicpXHJcbn0pXHJcblxyXG4vLyBTb2xpY2l0dWQgZGUganVlZ29zIGFsIHNlcnZpZG9yXHJcbmdhbWVzUmVxdWVzdCgpLnRoZW4ocmVzID0+IHtcclxuXHRpZih0eXBlb2YgcmVzICE9PSAnc3RyaW5nJyl7XHJcblx0XHRzZWFyY2hDb250cm9sbGVyKHJlcywge1xyXG5cdFx0XHRpbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaElucHV0JyksXHJcblx0XHRcdHN1Z2dlc3Rpb25Cb3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWdnZXN0aW9uQm94JyksXHJcblx0XHRcdHJvb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hSZXN1bHRzUm9vdCcpLFxyXG5cdFx0XHRtb3JlUmVzdWx0c0J1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3dNb3JlUmVzdWx0c0J1dHRvbicpXHJcblx0XHR9KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHR9XHJcbn0pXHJcblxyXG5jb25zdCBsYXN0UGxheWVkTGlzdCA9IHN0b3JhZ2VEYXRhLmdldCgnbGFzdHBsYXllZCcpIHx8IFtdO1xyXG5jb25zdCBmYXZvcml0ZXNMaXN0ID0gc3RvcmFnZURhdGEuZ2V0KCdmYXZvcml0ZXMnKSB8fCBbXTtcclxuXHJcbmNvbnN0IGxhc3RQbGF5ZWRSb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhc3RQbGF5ZWRSb290Jyk7XHJcbmNvbnN0IGZhdm9yaXRlc1Jvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF2b3JpdGVzUm9vdCcpO1xyXG5cclxuY29uc3QgcmVtb3ZlRmF2b3JpdGVHYW1lID0gKGlkKSA9PiB7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IGZhdm9yaXRlc0xpc3QubGVuZ3RoOyBpKyspe1xyXG5cdFx0aWYoZmF2b3JpdGVzTGlzdFtpXS5pZCA9PT0gaWQpe1xyXG5cdFx0XHRmYXZvcml0ZXNMaXN0LnNwbGljZShpLCAxKTtcclxuXHRcdFx0c3RvcmFnZURhdGEuc2V0KCdmYXZvcml0ZXMnLCBmYXZvcml0ZXNMaXN0KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHQvLyBNdWVzdHJhIGxvcyB1bHRpbW9zIGp1ZWdvcyBxdWUganVnw7MgZWwgdXN1YXJpb3NcclxuXHQvLyBFbiBjYXNvIGRlIHF1ZSBubyBoYXlhIG5pbmd1biBqdWVnbyBtdWVzdHJhIHVuIG1lbnNhamUuXHJcblx0Z2FtZXNJbnNlcnQoe1xyXG5cdFx0cm9vdDogbGFzdFBsYXllZFJvb3QsXHJcblx0XHRnYW1lc1RvSW5zZXJ0OiBsYXN0UGxheWVkTGlzdCxcclxuXHRcdGh0bWw6IGh0bWxQYXJ0aWFscy5nYW1lXHJcblx0fSkudGhlbigoKSA9PiB7XHJcblx0XHRpZihsYXN0UGxheWVkUm9vdC5jaGlsZHJlbi5sZW5ndGggPT09IDApe1xyXG5cdFx0XHRsYXN0UGxheWVkUm9vdC5pbm5lckhUTUwgPSBodG1sUGFydGlhbHMuZW1wdHlHcmlkTXNnKCdBdW4gbm8gaGFzIGp1Z2FkbyBuaW5nw7puIGp1ZWdvJyk7XHJcblx0XHR9XHJcblx0fSlcclxuXHJcblx0Ly8gTXVlc3RyYSBsb3MganVlZ29zIGZhdm9yaXRvcyBkZWwgdXN1YXJpb1xyXG5cdC8vIEV2ZW50b3MgZGUgY2xpY2sgcGFyYSBwb2RlciBlbGltaW5hciBlbCBqdWVnbyBkZWwgRE9NIHkgZGVsIGxvY2Fsc3RvcmFnZVxyXG5cdC8vIEVuIGNhc28gZGUgcXVlIG5vIGhheWEgbmluZ3VuIGp1ZWdvIG11ZXN0cmEgdW4gbWVuc2FqZS5cclxuXHRnYW1lc0luc2VydCh7XHJcblx0XHRyb290OiBmYXZvcml0ZXNSb290LFxyXG5cdFx0Z2FtZXNUb0luc2VydDogZmF2b3JpdGVzTGlzdCxcclxuXHRcdGh0bWw6IGh0bWxQYXJ0aWFscy5kZWxldGFibGVHYW1lXHJcblx0fSkudGhlbigoKSA9PiB7IFxyXG5cdFx0Y29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlbGV0ZS1idXR0b24nKTtcclxuXHRcdGZvcihsZXQgYnV0dG9uIG9mIGRlbGV0ZUJ1dHRvbnMpe1xyXG5cdFx0XHRidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuXHRcdFx0XHRyZW1vdmVGYXZvcml0ZUdhbWUoYnV0dG9uLmRhdGFzZXQuaWQpO1xyXG5cdFx0XHRcdGJ1dHRvbi5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG5cdFx0XHRcdHNob3dFbXB0eU1zZygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgc2hvd0VtcHR5TXNnID0gKCkgPT4ge1xyXG5cdFx0XHRpZihmYXZvcml0ZXNSb290LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCl7XHJcblx0XHRcdFx0ZmF2b3JpdGVzUm9vdC5pbm5lckhUTUwgPSBodG1sUGFydGlhbHMuZW1wdHlHcmlkTXNnKCdBdW4gbm8gaGFzIGluZGljYWRvIGEgbmluZ8O6biBqdWVnbyBjb21vIGZhdm9yaXRvJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHNob3dFbXB0eU1zZygpO1xyXG5cdH0pO1xyXG59LCAxNTAwKTtcclxuXHJcblxyXG4vL0NvbnRyb2xhZG9yIHF1ZSBtdWVzdHJhIGVsIHNwaW5uZXIgZGUgcHJvZ3Jlc28gY3VhbmRvIGNhbWJpYW1vcyBkZSBww6FnaW5hXHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9jaGFuZ2VwYWdlX2NvbnRyb2xsZXInKSgpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvYXBwaW5mbycpO1xyXG4iLCJjb25zdCBhbmltYXRpb25zID0ge307XHJcblxyXG5jb25zdCBjcmVhdGVBbmltID0gKGVsZW1lbnQsIHBhcmFtcykgPT4ge1xyXG5cdHJldHVybiBlbGVtZW50LmFuaW1hdGUocGFyYW1zLmtleWZyYW1lcywgcGFyYW1zLnByb3BzKTtcclxufVxyXG5cclxuY29uc3Qga2V5ZnJhbWVzID0ge1xyXG5cdGZhZGVJbjogW1xyXG5cdFx0e3RyYW5zZm9ybTogJ3NjYWxlKDAuNiknLCBvcGFjaXR5OiAwfSxcclxuXHRcdHt0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6IDF9XHJcblx0XSxcclxuXHRmYWRlT3V0RG93bjogW1xyXG5cdFx0e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OiAxfSxcclxuXHRcdHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDIwMHB4KScsIG9wYWNpdHk6IDB9XHJcblx0XSxcclxuXHRzcGluOiBbXHJcblx0XHR7dHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJ30sXHJcblx0XHR7dHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknfVxyXG5cdF1cclxufTtcclxuXHJcbmFuaW1hdGlvbnMuZmFkZU91dERvd24gPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBjcmVhdGVBbmltKGVsZW1lbnQsIHtcclxuXHRcdGtleWZyYW1lczoga2V5ZnJhbWVzLmZhZGVPdXREb3duLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0ZmlsbDogJ2JvdGgnLFxyXG5cdFx0XHRlYXNpbmc6ICdlYXNlJyxcclxuXHRcdFx0ZHVyYXRpb246IDEwMDAsXHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmFuaW1hdGlvbnMuZmFkZUluID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gY3JlYXRlQW5pbShlbGVtZW50LCB7XHJcblx0XHRrZXlmcmFtZXM6IGtleWZyYW1lcy5mYWRlSW4sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRmaWxsOiAnYm90aCcsXHJcblx0XHRcdGVhc2luZzogJ2Vhc2UnLFxyXG5cdFx0XHRkdXJhdGlvbjogMTAwMCxcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuYW5pbWF0aW9ucy5zcGluID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gY3JlYXRlQW5pbShlbGVtZW50LCB7XHJcblx0XHRrZXlmcmFtZXM6IGtleWZyYW1lcy5zcGluLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0aXRlcmF0aW9uczogJ0luZmluaXR5JyxcclxuXHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcclxuXHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFuaW1hdGlvbnM7IiwiY29uc29sZS5sb2coXCJCdWVub3MgSnVlZ29zIFtQT1JUQUxdIHYxLjAuMFwiKTsiLCJjb25zdCBodG1sUGFydGlhbHMgPSByZXF1aXJlKCcuL2h0bWxfcGFydGlhbHMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoZSkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChodG1sUGFydGlhbHMuY2hhbmdlUGFnZVNwaW5uZXIoKSk7XHJcblx0XHRjb25zb2xlLmxvZygnRVZFTlQgW2JlZm9yZXVubG9hZF0nKTtcclxuXHR9KVxyXG59IiwiY29uc3Qgbm9ybWFsaXplU3RyID0gKHN0cikgPT4ge1xyXG5cdGxldCBzdHJpbmcgPSBzdHIudG9Mb3dlckNhc2UoKTtcclxuICBcdHJldHVybiBzdHJpbmcubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpO1xyXG59IFxyXG5cclxuY29uc3QgZmlsdGVyR2FtZXMgPSAoZ2FtZXMsIHRvRmlsdGVyKSA9PiB7XHJcblx0cmV0dXJuIGdhbWVzLmZpbHRlcigoZWwpID0+IHtcclxuXHRcdGxldCBhbGxXb3JkcyA9IGVsLnRpdGxlICsgJyAnICsgZWwuZGVzY3JpcHRpb247XHJcblx0XHRhbGxXb3JkcyA9IG5vcm1hbGl6ZVN0cihhbGxXb3Jkcyk7XHJcblx0XHRsZXQgcmVnZXggPSBuZXcgUmVnRXhwKG5vcm1hbGl6ZVN0cih0b0ZpbHRlcikpO1xyXG5cdFx0LyppZihyZWdleC50ZXN0KGFsbFdvcmRzKSl7XHJcblx0XHRcdGNvbnNvbGUubG9nKGFsbFdvcmRzLCByZWdleCk7XHJcblx0XHR9Ki9cclxuXHRcdHJldHVybiByZWdleC50ZXN0KGFsbFdvcmRzKTtcclxuXHR9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwYXJhbXMgPT4ge1xyXG5cdC8qXHJcblx0XHRvYmpldG8gJ3BhcmFtcycgZXNwZXJhZG86IFxyXG5cdFx0cGFyYW1zID0ge1xyXG5cdFx0XHRnYW1lcyxcclxuXHRcdFx0Y2F0ZWdvcnksXHJcblx0XHRcdHRvRmlsdGVyXHJcblx0XHR9XHJcblx0Ki9cclxuXHJcblx0bGV0IGdhbWVzID0gcGFyYW1zLmdhbWVzO1xyXG5cdGNvbnN0IGNhdGVnb3J5ID0gcGFyYW1zLmNhdGVnb3J5LCBcclxuXHRcdHRvRmlsdGVyID0gcGFyYW1zLnRvRmlsdGVyLFxyXG5cdFx0ZnJvbSA9IHBhcmFtcy5mcm9tLFxyXG5cdFx0dG8gPSBwYXJhbXMudG87XHJcblxyXG5cdGlmKGNhdGVnb3J5ICE9PSAnJykge1xyXG5cdFx0Z2FtZXMgPSBnYW1lcy5maWx0ZXIoKGVsKSA9PiBlbC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpO1xyXG5cdFx0Z2FtZXMgPSBnYW1lcy5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRcdHJldHVybiBiLnZvdGUuYXZlcmFnZSAtIGEudm90ZS5hdmVyYWdlO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGlmKHRvRmlsdGVyICE9PSAnJykge1xyXG5cdFx0Z2FtZXMgPSBmaWx0ZXJHYW1lcyhnYW1lcywgdG9GaWx0ZXIpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdhbWVzO1xyXG59IiwiY29uc3QgaHRtbFBhcnRpYWxzID0gcmVxdWlyZSgnLi9odG1sX3BhcnRpYWxzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmFtcyA9PiB7XHJcblx0LypcclxuXHRcdG9iamV0byAncGFyYW1zJyBlc3BlcmFkbzpcclxuXHRcdHBhcmFtcyA9IHtcclxuXHRcdFx0cm9vdCxcclxuXHRcdFx0Z2FtZXNUb0luc2VydCxcclxuXHRcdFx0aHRtbFxyXG5cdFx0fVxyXG5cdCovXHJcblx0Y29uc3Qgcm9vdCA9IHBhcmFtcy5yb290O1xyXG5cdGNvbnN0IGdhbWVzVG9JbnNlcnQgPSBwYXJhbXMuZ2FtZXNUb0luc2VydDtcclxuXHRjb25zdCBodG1sID0gcGFyYW1zLmh0bWw7XHJcblx0bGV0IGkgPSAwO1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRpZihpIDwgZ2FtZXNUb0luc2VydC5sZW5ndGgpe1xyXG5cdFx0XHRcdHJvb3QuYXBwZW5kQ2hpbGQoaHRtbChnYW1lc1RvSW5zZXJ0W2ldKSk7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMTAwKTtcclxuXHR9KVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2pzb24vanVlZ29zJywge1xyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcblx0XHR9XHJcblx0fSlcclxuXHRpZihyZXNwb25zZS5vayA9PT0gdHJ1ZSl7XHJcblx0XHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gJ2dhbWVzIHJlcXVlc3QgaHR0cCBlcnJvcic7XHJcblx0fVxyXG59IiwiY29uc3QgTW9iaWxlRGV0ZWN0ID0gcmVxdWlyZSgnbW9iaWxlLWRldGVjdCcpO1xyXG5jb25zdCBtb2JpbGVEZXZpY2UgPSBuZXcgTW9iaWxlRGV0ZWN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuY29uc3QgaHRtbFBhcnRpYWxzID0ge307XHJcblxyXG5jb25zdCBvbmx5RGVza3RvcEF2YWlsYWJsZSA9IChtb2JpbGVSZWFkeSkgPT4ge1xyXG5cdHJldHVybiAobW9iaWxlRGV2aWNlLm1vYmlsZSgpICE9PSBudWxsICYmIG1vYmlsZVJlYWR5ID09PSBmYWxzZSk7XHJcbn1cclxuXHJcbmNvbnN0IGdldFByZXR0eUNhdGVnb3J5TmFtZSA9IChjYXRlZ29yeSkgPT4ge1xyXG5cdHN3aXRjaChjYXRlZ29yeSl7XHJcblx0XHRjYXNlICdhY2Npb24nOiByZXR1cm4gJ0FjY2nDs24nOyBicmVhaztcclxuXHRcdGNhc2UgJ2F2ZW50dXJhJzogcmV0dXJuICdBdmVudHVyYSc7IGJyZWFrO1xyXG5cdFx0Y2FzZSAnY2hpY2FzJzogcmV0dXJuICdDaGljYXMnOyBicmVhaztcclxuXHRcdGNhc2UgJ2FyY2FkZSc6IHJldHVybiAnQXJjYWRlJzsgYnJlYWs7XHJcblx0XHRjYXNlICdkZXBvcnRlcyc6IHJldHVybiAnRGVwb3J0ZXMnOyBicmVhaztcclxuXHRcdGNhc2UgJ3B1enpsZSc6IHJldHVybiAnUHV6emxlJzsgYnJlYWs7XHJcblx0XHRjYXNlICdjYXJyZXJhcyc6IHJldHVybiAnQ2FycmVyYXMnOyBicmVhaztcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXJzID0gKHZhbG9yYXRpb24pID0+IHtcclxuXHRsZXQgaHRtbFN0YXJzID0gJyc7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XHJcblx0XHRodG1sU3RhcnMgKz0gKGkgPCB2YWxvcmF0aW9uKSA/ICc8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPicgOiAnPGkgY2xhc3M9XCJmYXIgZmEtc3RhclwiPjwvaT4nO1xyXG5cdH1cclxuXHRyZXR1cm4gaHRtbFN0YXJzO1xyXG59IFxyXG5cclxuaHRtbFBhcnRpYWxzLnNlYXJjaEdhbWUgPSAoZ2FtZVBhcmFtcykgPT4ge1xyXG5cdGNvbnN0IHRpdGxlID0gZ2FtZVBhcmFtcy50aXRsZTtcclxuXHRjb25zdCB1cmwgPSBnYW1lUGFyYW1zLnVybDtcclxuXHRjb25zdCBtb2JpbGVSZWFkeSA9IGdhbWVQYXJhbXMubW9iaWxlcmVhZHk7XHJcblxyXG5cdGNvbnN0IGh0bWwgPSAoKSA9PiB7XHJcblx0XHRsZXQgc3RyID0gJyc7XHJcblx0XHRpZihvbmx5RGVza3RvcEF2YWlsYWJsZShtb2JpbGVSZWFkeSkpe1xyXG5cdFx0XHRzdHIgKz0gYDxhIGNsYXNzPVwic3VnZ2VzdGlvbi1saW5rIG5vc2VsZWN0YWJsZVwiIGhyZWY9XCIvanVnYXIvJHt1cmx9XCI+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cInN1Z2dlc3Rpb24tbGlua19fb25seS1kZXNrdG9wXCIgc3JjPVwiL3N0YXRpYy9pbWcvb25seWRlc2t0b3Auc3ZnXCIgYWx0PVwiRGlzcG9uaWJsZSBzb2xvIGVuIGVzY3JpdG9yaW9cIj5gO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RyICs9IGA8YSBjbGFzcz1cInN1Z2dlc3Rpb24tbGlua1wiIGhyZWY9XCIvanVnYXIvJHt1cmx9XCI+YDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3RyICs9IGA8aW1nIGNsYXNzPVwic3VnZ2VzdGlvbi1saW5rX19pbWdcIiBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9idWVub3NqdWVnb3MvaW1hZ2UvdXBsb2FkL2NfZmlsbCxnX2NlbnRlcixoXzE1MCx3XzE1MC8ke3VybH0uanBnXCIgYWx0PVwiJHt0aXRsZX1cIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdWdnZXN0aW9uLWxpbmtfX3RpdGxlXCI+JHt0aXRsZX08L3NwYW4+XHJcblx0XHRcdFx0PC9hPmA7XHJcblxyXG5cdFx0cmV0dXJuIHN0cjtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gaHRtbCgpO1xyXG59XHJcblxyXG5odG1sUGFydGlhbHMuZ2FtZSA9IChnYW1lUGFyYW1zKSA9PiB7XHJcblx0Y29uc3QgdGl0bGUgPSBnYW1lUGFyYW1zLnRpdGxlO1xyXG5cdGNvbnN0IHVybCA9IGdhbWVQYXJhbXMudXJsO1xyXG5cdGNvbnN0IGNhdGVnb3J5ID0gZ2V0UHJldHR5Q2F0ZWdvcnlOYW1lKGdhbWVQYXJhbXMuY2F0ZWdvcnkpO1xyXG5cdGNvbnN0IHZhbG9yYXRpb24gPSBNYXRoLnJvdW5kKGdhbWVQYXJhbXMudm90ZS5hdmVyYWdlKTtcclxuXHRjb25zdCBtb2JpbGVSZWFkeSA9IGdhbWVQYXJhbXMubW9iaWxlcmVhZHk7XHJcblxyXG5cdGNvbnN0IGh0bWwgPSAoKSA9PiB7XHJcblx0XHRsZXQgc3RyID0gJyc7XHJcblxyXG5cdFx0aWYob25seURlc2t0b3BBdmFpbGFibGUobW9iaWxlUmVhZHkpKXtcclxuXHRcdFx0c3RyICs9IGA8aW1nIGNsYXNzPVwiZ2FtZS1pdGVtX19vbmx5LWRlc2t0b3BcIiBzcmM9XCIvc3RhdGljL2ltZy9vbmx5ZGVza3RvcC5zdmdcIiBhbHQ9XCJEaXNwb25pYmxlIHNvbG8gZW4gZXNjcml0b3Jpb1wiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3M9XCJnYW1lLWl0ZW1fX2xpbmsgbm9zZWxlY3RhYmxlXCIgaHJlZj1cIi9qdWdhci8ke3VybH1cIj5gO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RyICs9IGA8YSBjbGFzcz1cImdhbWUtaXRlbV9fbGlua1wiIGhyZWY9XCIvanVnYXIvJHt1cmx9XCI+YFxyXG5cdFx0fVxyXG5cclxuXHRcdHN0ciArPSAgYDxpbWcgY2xhc3M9XCJnYW1lLWl0ZW1fX2ltZ1wiIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2J1ZW5vc2p1ZWdvcy9pbWFnZS91cGxvYWQvY19maWxsLGdfY2VudGVyLGhfMjUwLHdfMjUwLyR7dXJsfS5qcGdcIiBhbHQ9XCIke3RpdGxlfVwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnYW1lLWl0ZW1fX3RpdGxlXCI+JHt0aXRsZX08L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbWUtaXRlbV9fcm93XCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImdhbWUtaXRlbV9fY2F0ZWdvcnlcIj4ke2NhdGVnb3J5fTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ2FtZS1pdGVtX192YWxvcmF0aW9uXCI+XHJcblx0XHRcdFx0XHRcdCR7c3RhcnModmFsb3JhdGlvbil9XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvYT5gO1xyXG5cclxuXHRcdHJldHVybiBzdHI7XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZWxlbWVudC5jbGFzc05hbWUgPSAnZ2FtZS1pdGVtJztcclxuXHRlbGVtZW50LmlubmVySFRNTCA9IGh0bWwoKTtcclxuXHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcblxyXG5odG1sUGFydGlhbHMuZGVsZXRhYmxlR2FtZSA9IChnYW1lUGFyYW1zKSA9PiB7XHJcblx0Y29uc3QgaWQgPSBnYW1lUGFyYW1zLmlkO1xyXG5cdGNvbnN0IHRpdGxlID0gZ2FtZVBhcmFtcy50aXRsZTtcclxuXHRjb25zdCB1cmwgPSBnYW1lUGFyYW1zLnVybDtcclxuXHRjb25zdCBjYXRlZ29yeSA9IGdldFByZXR0eUNhdGVnb3J5TmFtZShnYW1lUGFyYW1zLmNhdGVnb3J5KTtcclxuXHRjb25zdCB2YWxvcmF0aW9uID0gTWF0aC5yb3VuZChnYW1lUGFyYW1zLnZvdGUuYXZlcmFnZSk7XHJcblxyXG5cdGNvbnN0IGh0bWwgPSBgXHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJnYW1lLWl0ZW1fX2RlbGV0ZSBkZWxldGUtYnV0dG9uXCIgZGF0YS1pZD1cIiR7aWR9XCI+IFxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGEgY2xhc3M9XCJnYW1lLWl0ZW1fX2xpbmtcIiBocmVmPVwiL2p1Z2FyLyR7dXJsfVwiPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJnYW1lLWl0ZW1fX2ltZ1wiIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2J1ZW5vc2p1ZWdvcy9pbWFnZS91cGxvYWQvY19maWxsLGdfY2VudGVyLGhfMjUwLHdfMjUwLyR7dXJsfS5qcGdcIiBhbHQ9XCIke3RpdGxlfVwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnYW1lLWl0ZW1fX3RpdGxlXCI+JHt0aXRsZX08L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbWUtaXRlbV9fcm93XCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImdhbWUtaXRlbV9fY2F0ZWdvcnlcIj4ke2NhdGVnb3J5fTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ2FtZS1pdGVtX192YWxvcmF0aW9uXCI+XHJcblx0XHRcdFx0XHRcdCR7c3RhcnModmFsb3JhdGlvbil9XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvYT5gO1xyXG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlbGVtZW50LmNsYXNzTmFtZSA9ICdnYW1lLWl0ZW0nO1xyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmh0bWxQYXJ0aWFscy5lbXB0eUdyaWRNc2cgPSAobXNnKSA9PiB7XHJcblx0cmV0dXJuIGA8cCBjbGFzcz1cImdyaWQtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZSBmYS1wdWxsLWxlZnRcIj48L2k+XHJcblx0XHRcdFx0JHttc2d9XHJcblx0XHRcdDwvcD5gO1xyXG59XHJcblxyXG5odG1sUGFydGlhbHMuY2hhbmdlUGFnZVNwaW5uZXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVsZW1lbnQuY2xhc3NOYW1lID0gJ2NoYW5nZXBhZ2Utc3Bpbm5lcic7XHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2Rpdj4nO1xyXG5cdHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5odG1sUGFydGlhbHMuZ2FtZURvbnRBdmFpbGFibGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVsZW1lbnQuY2xhc3NOYW1lID0gJ2RvbnQtYXZhaWxhYmxlJztcclxuXHRlbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZG9udC1hdmFpbGFibGVfX2JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiZG9udC1hdmFpbGFibGVfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIGZhLXB1bGwtbGVmdFwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdEVzdGUganVlZ28gPGI+c29sbyBlc3TDoSBkaXNwb25pYmxlIGVuIFBDPC9iPiwgcmVncmVzYSBkZXNkZSB0dSBjb21wdXRhZG9yYVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzcz1cImJsYWNrLWJvcmRlci1idXR0b25cIiBocmVmPVwiL1wiPlZlciBvdHJvcyBqdWVnb3M8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PmA7XHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaHRtbFBhcnRpYWxzOyIsIm1vZHVsZS5leHBvcnRzID0gZG9tID0+IHtcclxuXHQvKlxyXG5cdFx0b2JqZXRvICdkb20nIGVzcGVyYWRvOlxyXG5cdFx0ZG9tID0ge1xyXG5cdFx0XHRuYXZpZ2F0aW9uLFxyXG5cdFx0XHR0b2dnbGVCdXR0b25cclxuXHRcdH1cclxuXHQqL1xyXG5cclxuXHRjb25zdCBuYXZpZ2F0aW9uID0gZG9tLm5hdmlnYXRpb247XHJcblx0Y29uc3QgdG9nZ2xlQnV0dG9uID0gZG9tLnRvZ2dsZUJ1dHRvbjtcclxuXHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cclxuXHQvLyBFdmVudG8gZGUgY2xpY2sgcXVlIGFicmUgeSBjaWVycmEgbGEgbmF2ZWdhY2nDs24uIFF1aXRhIGVsIHNjcm9sbCBkZWwgYm9keS5cclxuXHR0b2dnbGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuXHRcdG5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG5cdFx0Ym9keS5jbGFzc0xpc3QudG9nZ2xlKCdub3Njcm9sbCcpO1xyXG5cdH1cclxufSIsImNvbnN0IGFuaW1hdGlvbnMgPSByZXF1aXJlKCcuL2FuaW1hdGlvbnMnKTtcclxuY29uc3QgZ2FtZXNGaWx0ZXIgPSByZXF1aXJlKCcuL2dhbWVzX2ZpbHRlcicpO1xyXG5jb25zdCBodG1sUGFydGlhbHMgPSByZXF1aXJlKCcuL2h0bWxfcGFydGlhbHMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKGdtcywgZG9tKSA9PiB7XHJcblx0LypcclxuXHRcdG9iamV0byAnZG9tJyBlc3BlcmFkbzpcclxuXHRcdGRvbSA9IHtcclxuXHRcdFx0aW5wdXQsXHJcblx0XHRcdHN1Z2dlc3Rpb25Cb3gsXHJcblx0XHRcdHJvb3QsXHJcblx0XHRcdG1vcmVSZXN1bHRzQnV0dG9uXHJcblx0XHR9XHJcblx0Ki9cclxuXHRjb25zdCBnYW1lcyA9IGdtcztcclxuXHRjb25zdCBpbnB1dCA9IGRvbS5pbnB1dDtcclxuXHRjb25zdCBzdWdnZXN0aW9uQm94ID0gZG9tLnN1Z2dlc3Rpb25Cb3g7XHJcblx0Y29uc3Qgcm9vdCA9IGRvbS5yb290O1xyXG5cdGNvbnN0IG1vcmVSZXN1bHRzQnV0dG9uID0gZG9tLm1vcmVSZXN1bHRzQnV0dG9uO1xyXG5cclxuXHRsZXQgc3VnZ2VzdGlvbk9wZW4gPSBmYWxzZTtcclxuXHRsZXQgYW5pbSA9IGFuaW1hdGlvbnMuZmFkZUluKHN1Z2dlc3Rpb25Cb3gpO1xyXG5cdGFuaW0uZmluaXNoKCk7XHJcblxyXG5cdC8vIEV2ZW50byBjdWFuZG8gc2UgZXNjcmliZSBlbiBlbCBpbnB1dFxyXG5cdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG5cdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMyl7XHJcblxyXG5cdFx0XHRsZXQgZmlsdGVyZWRHYW1lcyA9IGdhbWVzRmlsdGVyKHtcclxuXHRcdFx0XHRnYW1lcyxcclxuXHRcdFx0XHRjYXRlZ29yeTogJycsXHJcblx0XHRcdFx0dG9GaWx0ZXI6IGlucHV0LnZhbHVlXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYoZmlsdGVyZWRHYW1lcy5sZW5ndGggPiAxMCkge1xyXG5cdFx0XHRcdG1vcmVSZXN1bHRzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdG1vcmVSZXN1bHRzQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRpbnB1dC5wYXJlbnROb2RlLnN1Ym1pdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtb3JlUmVzdWx0c0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmaWx0ZXJlZEdhbWVzID0gZmlsdGVyZWRHYW1lcy5zbGljZSgwLCAxMCk7XHJcblxyXG5cdFx0XHRpZihmaWx0ZXJlZEdhbWVzLmxlbmd0aCA+IDAgJiYgIXN1Z2dlc3Rpb25PcGVuKXtcclxuXHRcdFx0XHRyb290LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdGZvcihnYW1lIG9mIGZpbHRlcmVkR2FtZXMpIHtcclxuXHRcdFx0XHRcdHJvb3QuaW5uZXJIVE1MICs9IGh0bWxQYXJ0aWFscy5zZWFyY2hHYW1lKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGdhbWUudGl0bGUsXHJcblx0XHRcdFx0XHRcdHVybDogZ2FtZS51cmwsXHJcblx0XHRcdFx0XHRcdG1vYmlsZXJlYWR5OiBnYW1lLm1vYmlsZXJlYWR5XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdWdnZXN0aW9uQm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdGFuaW0ucGxheWJhY2tSYXRlID0gMTtcclxuXHRcdFx0XHRhbmltLnBsYXkoKTtcclxuXHRcdFx0XHRzdWdnZXN0aW9uT3BlbiA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9IGVsc2UgaWYoc3VnZ2VzdGlvbk9wZW4pe1xyXG5cdFx0XHRhbmltLnBsYXliYWNrUmF0ZSA9IC0xO1xyXG5cdFx0XHRhbmltLm9uZmluaXNoID0gZnVuY3Rpb24oZXZ0KXtcclxuXHRcdFx0XHRzdWdnZXN0aW9uQm94LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG5cdFx0XHRcdHN1Z2dlc3Rpb25PcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0YW5pbS5vbmZpbmlzaCA9ICgpID0+IHt9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldDogKG5hbWUpID0+IHtcclxuXHRcdHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpKTtcclxuXHR9LFxyXG5cdHNldDogKG5hbWUsIG9iamVjdCkgPT4ge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcblx0fVxyXG59Il19
