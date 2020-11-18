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

//Controlador que muestra el spinner de progreso cuando cambiamos de página
require('./modules/changepage_controller')();
require('./modules/appinfo');


},{"./modules/appinfo":4,"./modules/changepage_controller":5,"./modules/games_request":7,"./modules/responsive_controller":9,"./modules/search_controller":10}],3:[function(require,module,exports){
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
},{"./html_partials":8}],6:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{"mobile-detect":1}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{"./animations":3,"./games_filter":6,"./html_partials":8}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbW9iaWxlLWRldGVjdC9tb2JpbGUtZGV0ZWN0LmpzIiwic3JjL3B1YmxpYy9zcmMvanMvZXJyb3IuanMiLCJzcmMvcHVibGljL3NyYy9qcy9tb2R1bGVzL2FuaW1hdGlvbnMuanMiLCJzcmMvcHVibGljL3NyYy9qcy9tb2R1bGVzL2FwcGluZm8uanMiLCJzcmMvcHVibGljL3NyYy9qcy9tb2R1bGVzL2NoYW5nZXBhZ2VfY29udHJvbGxlci5qcyIsInNyYy9wdWJsaWMvc3JjL2pzL21vZHVsZXMvZ2FtZXNfZmlsdGVyLmpzIiwic3JjL3B1YmxpYy9zcmMvanMvbW9kdWxlcy9nYW1lc19yZXF1ZXN0LmpzIiwic3JjL3B1YmxpYy9zcmMvanMvbW9kdWxlcy9odG1sX3BhcnRpYWxzLmpzIiwic3JjL3B1YmxpYy9zcmMvanMvbW9kdWxlcy9yZXNwb25zaXZlX2NvbnRyb2xsZXIuanMiLCJzcmMvcHVibGljL3NyYy9qcy9tb2R1bGVzL3NlYXJjaF9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIFRISVMgRklMRSBJUyBHRU5FUkFURUQgLSBETyBOT1QgRURJVCFcbi8qIW1vYmlsZS1kZXRlY3QgdjEuNC40IDIwMTktMDktMjEqL1xuLypnbG9iYWwgbW9kdWxlOmZhbHNlLCBkZWZpbmU6ZmFsc2UqL1xuLypqc2hpbnQgbGF0ZWRlZjpmYWxzZSovXG4vKiFAbGljZW5zZSBDb3B5cmlnaHQgMjAxMywgSGVpbnJpY2ggR29lYmwsIExpY2Vuc2U6IE1JVCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9oZ29lYmwvbW9iaWxlLWRldGVjdC5qcyovXG4oZnVuY3Rpb24gKGRlZmluZSwgdW5kZWZpbmVkKSB7XG5kZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBpbXBsID0ge307XG5cbiAgICBpbXBsLm1vYmlsZURldGVjdFJ1bGVzID0ge1xuICAgIFwicGhvbmVzXCI6IHtcbiAgICAgICAgXCJpUGhvbmVcIjogXCJcXFxcYmlQaG9uZVxcXFxifFxcXFxiaVBvZFxcXFxiXCIsXG4gICAgICAgIFwiQmxhY2tCZXJyeVwiOiBcIkJsYWNrQmVycnl8XFxcXGJCQjEwXFxcXGJ8cmltWzAtOV0rfFxcXFxiKEJCQTEwMHxCQkIxMDB8QkJEMTAwfEJCRTEwMHxCQkYxMDB8U1RIMTAwKVxcXFxiLVswLTldK1wiLFxuICAgICAgICBcIkhUQ1wiOiBcIkhUQ3xIVEMuKihTZW5zYXRpb258RXZvfFZpc2lvbnxFeHBsb3Jlcnw2ODAwfDgxMDB8ODkwMHxBNzI3MnxTNTEwZXxDMTEwZXxMZWdlbmR8RGVzaXJlfFQ4MjgyKXxBUFg1MTVDS1R8UXRlazkwOTB8QVBBOTI5MktUfEhEX21pbml8U2Vuc2F0aW9uLipaNzEwZXxQRzg2MTAwfFo3MTVlfERlc2lyZS4qKEE4MTgxfEhEKXxBRFI2MjAwfEFEUjY0MDBMfEFEUjY0MjV8MDAxSFR8SW5zcGlyZSA0R3xBbmRyb2lkLipcXFxcYkVWT1xcXFxifFQtTW9iaWxlIEcxfFo1MjBtfEFuZHJvaWQgWzAtOS5dKzsgUGl4ZWxcIixcbiAgICAgICAgXCJOZXh1c1wiOiBcIk5leHVzIE9uZXxOZXh1cyBTfEdhbGF4eS4qTmV4dXN8QW5kcm9pZC4qTmV4dXMuKk1vYmlsZXxOZXh1cyA0fE5leHVzIDV8TmV4dXMgNlwiLFxuICAgICAgICBcIkRlbGxcIjogXCJEZWxsWztdPyAoU3RyZWFrfEFlcm98VmVudWV8VmVudWUgUHJvfEZsYXNofFNtb2tlfE1pbmkgM2lYKXxYQ0QyOHxYQ0QzNXxcXFxcYjAwMURMXFxcXGJ8XFxcXGIxMDFETFxcXFxifFxcXFxiR1MwMVxcXFxiXCIsXG4gICAgICAgIFwiTW90b3JvbGFcIjogXCJNb3Rvcm9sYXxEUk9JRFh8RFJPSUQgQklPTklDfFxcXFxiRHJvaWRcXFxcYi4qQnVpbGR8QW5kcm9pZC4qWG9vbXxIUkkzOXxNT1QtfEExMjYwfEExNjgwfEE1NTV8QTg1M3xBODU1fEE5NTN8QTk1NXxBOTU2fE1vdG9yb2xhLipFTEVDVFJJRll8TW90b3JvbGEuKmkxfGk4Njd8aTk0MHxNQjIwMHxNQjMwMHxNQjUwMXxNQjUwMnxNQjUwOHxNQjUxMXxNQjUyMHxNQjUyNXxNQjUyNnxNQjYxMXxNQjYxMnxNQjYzMnxNQjgxMHxNQjg1NXxNQjg2MHxNQjg2MXxNQjg2NXxNQjg3MHxNRTUwMXxNRTUwMnxNRTUxMXxNRTUyNXxNRTYwMHxNRTYzMnxNRTcyMnxNRTgxMXxNRTg2MHxNRTg2M3xNRTg2NXxNVDYyMHxNVDcxMHxNVDcxNnxNVDcyMHxNVDgxMHxNVDg3MHxNVDkxN3xNb3Rvcm9sYS4qVElUQU5JVU18V1g0MzV8V1g0NDV8WFQzMDB8WFQzMDF8WFQzMTF8WFQzMTZ8WFQzMTd8WFQzMTl8WFQzMjB8WFQzOTB8WFQ1MDJ8WFQ1MzB8WFQ1MzF8WFQ1MzJ8WFQ1MzV8WFQ2MDN8WFQ2MTB8WFQ2MTF8WFQ2MTV8WFQ2ODF8WFQ3MDF8WFQ3MDJ8WFQ3MTF8WFQ3MjB8WFQ4MDB8WFQ4MDZ8WFQ4NjB8WFQ4NjJ8WFQ4NzV8WFQ4ODJ8WFQ4ODN8WFQ4OTR8WFQ5MDF8WFQ5MDd8WFQ5MDl8WFQ5MTB8WFQ5MTJ8WFQ5Mjh8WFQ5MjZ8WFQ5MTV8WFQ5MTl8WFQ5MjV8WFQxMDIxfFxcXFxiTW90byBFXFxcXGJ8WFQxMDY4fFhUMTA5MnxYVDEwNTJcIixcbiAgICAgICAgXCJTYW1zdW5nXCI6IFwiXFxcXGJTYW1zdW5nXFxcXGJ8U00tRzk1MEZ8U00tRzk1NUZ8U00tRzkyNTB8R1QtMTkzMDB8U0dILUkzMzd8QkdULVM1MjMwfEdULUIyMTAwfEdULUIyNzAwfEdULUIyNzEwfEdULUIzMjEwfEdULUIzMzEwfEdULUIzNDEwfEdULUIzNzMwfEdULUIzNzQwfEdULUI1NTEwfEdULUI1NTEyfEdULUI1NzIyfEdULUI2NTIwfEdULUI3MzAwfEdULUI3MzIwfEdULUI3MzMwfEdULUI3MzUwfEdULUI3NTEwfEdULUI3NzIyfEdULUI3ODAwfEdULUMzMDEwfEdULUMzMDExfEdULUMzMDYwfEdULUMzMjAwfEdULUMzMjEyfEdULUMzMjEySXxHVC1DMzI2MnxHVC1DMzIyMnxHVC1DMzMwMHxHVC1DMzMwMEt8R1QtQzMzMDN8R1QtQzMzMDNLfEdULUMzMzEwfEdULUMzMzIyfEdULUMzMzMwfEdULUMzMzUwfEdULUMzNTAwfEdULUMzNTEwfEdULUMzNTMwfEdULUMzNjMwfEdULUMzNzgwfEdULUM1MDEwfEdULUM1MjEyfEdULUM2NjIwfEdULUM2NjI1fEdULUM2NzEyfEdULUUxMDUwfEdULUUxMDcwfEdULUUxMDc1fEdULUUxMDgwfEdULUUxMDgxfEdULUUxMDg1fEdULUUxMDg3fEdULUUxMTAwfEdULUUxMTA3fEdULUUxMTEwfEdULUUxMTIwfEdULUUxMTI1fEdULUUxMTMwfEdULUUxMTYwfEdULUUxMTcwfEdULUUxMTc1fEdULUUxMTgwfEdULUUxMTgyfEdULUUxMjAwfEdULUUxMjEwfEdULUUxMjI1fEdULUUxMjMwfEdULUUxMzkwfEdULUUyMTAwfEdULUUyMTIwfEdULUUyMTIxfEdULUUyMTUyfEdULUUyMjIwfEdULUUyMjIyfEdULUUyMjMwfEdULUUyMjMyfEdULUUyMjUwfEdULUUyMzcwfEdULUUyNTUwfEdULUUyNjUyfEdULUUzMjEwfEdULUUzMjEzfEdULUk1NTAwfEdULUk1NTAzfEdULUk1NzAwfEdULUk1ODAwfEdULUk1ODAxfEdULUk2NDEwfEdULUk2NDIwfEdULUk3MTEwfEdULUk3NDEwfEdULUk3NTAwfEdULUk4MDAwfEdULUk4MTUwfEdULUk4MTYwfEdULUk4MTkwfEdULUk4MzIwfEdULUk4MzMwfEdULUk4MzUwfEdULUk4NTMwfEdULUk4NzAwfEdULUk4NzAzfEdULUk4OTEwfEdULUk5MDAwfEdULUk5MDAxfEdULUk5MDAzfEdULUk5MDEwfEdULUk5MDIwfEdULUk5MDIzfEdULUk5MDcwfEdULUk5MDgyfEdULUk5MTAwfEdULUk5MTAzfEdULUk5MjIwfEdULUk5MjUwfEdULUk5MzAwfEdULUk5MzA1fEdULUk5NTAwfEdULUk5NTA1fEdULU0zNTEwfEdULU01NjUwfEdULU03NTAwfEdULU03NjAwfEdULU03NjAzfEdULU04ODAwfEdULU04OTEwfEdULU43MDAwfEdULVMzMTEwfEdULVMzMzEwfEdULVMzMzUwfEdULVMzMzUzfEdULVMzMzcwfEdULVMzNjUwfEdULVMzNjUzfEdULVMzNzcwfEdULVMzODUwfEdULVM1MjEwfEdULVM1MjIwfEdULVM1MjI5fEdULVM1MjMwfEdULVM1MjMzfEdULVM1MjUwfEdULVM1MjUzfEdULVM1MjYwfEdULVM1MjYzfEdULVM1MjcwfEdULVM1MzAwfEdULVM1MzMwfEdULVM1MzUwfEdULVM1MzYwfEdULVM1MzYzfEdULVM1MzY5fEdULVM1MzgwfEdULVM1MzgwRHxHVC1TNTU2MHxHVC1TNTU3MHxHVC1TNTYwMHxHVC1TNTYwM3xHVC1TNTYxMHxHVC1TNTYyMHxHVC1TNTY2MHxHVC1TNTY3MHxHVC1TNTY5MHxHVC1TNTc1MHxHVC1TNTc4MHxHVC1TNTgzMHxHVC1TNTgzOXxHVC1TNjEwMnxHVC1TNjUwMHxHVC1TNzA3MHxHVC1TNzIwMHxHVC1TNzIyMHxHVC1TNzIzMHxHVC1TNzIzM3xHVC1TNzI1MHxHVC1TNzUwMHxHVC1TNzUzMHxHVC1TNzU1MHxHVC1TNzU2MnxHVC1TNzcxMHxHVC1TODAwMHxHVC1TODAwM3xHVC1TODUwMHxHVC1TODUzMHxHVC1TODYwMHxTQ0gtQTMxMHxTQ0gtQTUzMHxTQ0gtQTU3MHxTQ0gtQTYxMHxTQ0gtQTYzMHxTQ0gtQTY1MHxTQ0gtQTc5MHxTQ0gtQTc5NXxTQ0gtQTg1MHxTQ0gtQTg3MHxTQ0gtQTg5MHxTQ0gtQTkzMHxTQ0gtQTk1MHxTQ0gtQTk3MHxTQ0gtQTk5MHxTQ0gtSTEwMHxTQ0gtSTExMHxTQ0gtSTQwMHxTQ0gtSTQwNXxTQ0gtSTUwMHxTQ0gtSTUxMHxTQ0gtSTUxNXxTQ0gtSTYwMHxTQ0gtSTczMHxTQ0gtSTc2MHxTQ0gtSTc3MHxTQ0gtSTgzMHxTQ0gtSTkxMHxTQ0gtSTkyMHxTQ0gtSTk1OXxTQ0gtTEMxMXxTQ0gtTjE1MHxTQ0gtTjMwMHxTQ0gtUjEwMHxTQ0gtUjMwMHxTQ0gtUjM1MXxTQ0gtUjQwMHxTQ0gtUjQxMHxTQ0gtVDMwMHxTQ0gtVTMxMHxTQ0gtVTMyMHxTQ0gtVTM1MHxTQ0gtVTM2MHxTQ0gtVTM2NXxTQ0gtVTM3MHxTQ0gtVTM4MHxTQ0gtVTQxMHxTQ0gtVTQzMHxTQ0gtVTQ1MHxTQ0gtVTQ2MHxTQ0gtVTQ3MHxTQ0gtVTQ5MHxTQ0gtVTU0MHxTQ0gtVTU1MHxTQ0gtVTYyMHxTQ0gtVTY0MHxTQ0gtVTY1MHxTQ0gtVTY2MHxTQ0gtVTcwMHxTQ0gtVTc0MHxTQ0gtVTc1MHxTQ0gtVTgxMHxTQ0gtVTgyMHxTQ0gtVTkwMHxTQ0gtVTk0MHxTQ0gtVTk2MHxTQ1MtMjZVQ3xTR0gtQTEwN3xTR0gtQTExN3xTR0gtQTEyN3xTR0gtQTEzN3xTR0gtQTE1N3xTR0gtQTE2N3xTR0gtQTE3N3xTR0gtQTE4N3xTR0gtQTE5N3xTR0gtQTIyN3xTR0gtQTIzN3xTR0gtQTI1N3xTR0gtQTQzN3xTR0gtQTUxN3xTR0gtQTU5N3xTR0gtQTYzN3xTR0gtQTY1N3xTR0gtQTY2N3xTR0gtQTY4N3xTR0gtQTY5N3xTR0gtQTcwN3xTR0gtQTcxN3xTR0gtQTcyN3xTR0gtQTczN3xTR0gtQTc0N3xTR0gtQTc2N3xTR0gtQTc3N3xTR0gtQTc5N3xTR0gtQTgxN3xTR0gtQTgyN3xTR0gtQTgzN3xTR0gtQTg0N3xTR0gtQTg2N3xTR0gtQTg3N3xTR0gtQTg4N3xTR0gtQTg5N3xTR0gtQTkyN3xTR0gtQjEwMHxTR0gtQjEzMHxTR0gtQjIwMHxTR0gtQjIyMHxTR0gtQzEwMHxTR0gtQzExMHxTR0gtQzEyMHxTR0gtQzEzMHxTR0gtQzE0MHxTR0gtQzE2MHxTR0gtQzE3MHxTR0gtQzE4MHxTR0gtQzIwMHxTR0gtQzIwN3xTR0gtQzIxMHxTR0gtQzIyNXxTR0gtQzIzMHxTR0gtQzQxN3xTR0gtQzQ1MHxTR0gtRDMwN3xTR0gtRDM0N3xTR0gtRDM1N3xTR0gtRDQwN3xTR0gtRDQxNXxTR0gtRDc4MHxTR0gtRDgwN3xTR0gtRDk4MHxTR0gtRTEwNXxTR0gtRTIwMHxTR0gtRTMxNXxTR0gtRTMxNnxTR0gtRTMxN3xTR0gtRTMzNXxTR0gtRTU5MHxTR0gtRTYzNXxTR0gtRTcxNXxTR0gtRTg5MHxTR0gtRjMwMHxTR0gtRjQ4MHxTR0gtSTIwMHxTR0gtSTMwMHxTR0gtSTMyMHxTR0gtSTU1MHxTR0gtSTU3N3xTR0gtSTYwMHxTR0gtSTYwN3xTR0gtSTYxN3xTR0gtSTYyN3xTR0gtSTYzN3xTR0gtSTY3N3xTR0gtSTcwMHxTR0gtSTcxN3xTR0gtSTcyN3xTR0gtaTc0N018U0dILUk3Nzd8U0dILUk3ODB8U0dILUk4Mjd8U0dILUk4NDd8U0dILUk4NTd8U0dILUk4OTZ8U0dILUk4OTd8U0dILUk5MDB8U0dILUk5MDd8U0dILUk5MTd8U0dILUk5Mjd8U0dILUk5Mzd8U0dILUk5OTd8U0dILUoxNTB8U0dILUoyMDB8U0dILUwxNzB8U0dILUw3MDB8U0dILU0xMTB8U0dILU0xNTB8U0dILU0yMDB8U0dILU4xMDV8U0dILU41MDB8U0dILU42MDB8U0dILU42MjB8U0dILU42MjV8U0dILU43MDB8U0dILU43MTB8U0dILVAxMDd8U0dILVAyMDd8U0dILVAzMDB8U0dILVAzMTB8U0dILVA1MjB8U0dILVA3MzV8U0dILVA3Nzd8U0dILVExMDV8U0dILVIyMTB8U0dILVIyMjB8U0dILVIyMjV8U0dILVMxMDV8U0dILVMzMDd8U0dILVQxMDl8U0dILVQxMTl8U0dILVQxMzl8U0dILVQyMDl8U0dILVQyMTl8U0dILVQyMjl8U0dILVQyMzl8U0dILVQyNDl8U0dILVQyNTl8U0dILVQzMDl8U0dILVQzMTl8U0dILVQzMjl8U0dILVQzMzl8U0dILVQzNDl8U0dILVQzNTl8U0dILVQzNjl8U0dILVQzNzl8U0dILVQ0MDl8U0dILVQ0Mjl8U0dILVQ0Mzl8U0dILVQ0NTl8U0dILVQ0Njl8U0dILVQ0Nzl8U0dILVQ0OTl8U0dILVQ1MDl8U0dILVQ1MTl8U0dILVQ1Mzl8U0dILVQ1NTl8U0dILVQ1ODl8U0dILVQ2MDl8U0dILVQ2MTl8U0dILVQ2Mjl8U0dILVQ2Mzl8U0dILVQ2NTl8U0dILVQ2Njl8U0dILVQ2Nzl8U0dILVQ3MDl8U0dILVQ3MTl8U0dILVQ3Mjl8U0dILVQ3Mzl8U0dILVQ3NDZ8U0dILVQ3NDl8U0dILVQ3NTl8U0dILVQ3Njl8U0dILVQ4MDl8U0dILVQ4MTl8U0dILVQ4Mzl8U0dILVQ5MTl8U0dILVQ5Mjl8U0dILVQ5Mzl8U0dILVQ5NTl8U0dILVQ5ODl8U0dILVUxMDB8U0dILVUyMDB8U0dILVU4MDB8U0dILVYyMDV8U0dILVYyMDZ8U0dILVgxMDB8U0dILVgxMDV8U0dILVgxMjB8U0dILVgxNDB8U0dILVg0MjZ8U0dILVg0Mjd8U0dILVg0NzV8U0dILVg0OTV8U0dILVg0OTd8U0dILVg1MDd8U0dILVg2MDB8U0dILVg2MTB8U0dILVg2MjB8U0dILVg2MzB8U0dILVg3MDB8U0dILVg4MjB8U0dILVg4OTB8U0dILVoxMzB8U0dILVoxNTB8U0dILVoxNzB8U0dILVpYMTB8U0dILVpYMjB8U0hXLU0xMTB8U1BILUExMjB8U1BILUE0MDB8U1BILUE0MjB8U1BILUE0NjB8U1BILUE1MDB8U1BILUE1NjB8U1BILUE2MDB8U1BILUE2MjB8U1BILUE2NjB8U1BILUE3MDB8U1BILUE3NDB8U1BILUE3NjB8U1BILUE3OTB8U1BILUE4MDB8U1BILUE4MjB8U1BILUE4NDB8U1BILUE4ODB8U1BILUE5MDB8U1BILUE5NDB8U1BILUE5NjB8U1BILUQ2MDB8U1BILUQ3MDB8U1BILUQ3MTB8U1BILUQ3MjB8U1BILUkzMDB8U1BILUkzMjV8U1BILUkzMzB8U1BILUkzNTB8U1BILUk1MDB8U1BILUk2MDB8U1BILUk3MDB8U1BILUw3MDB8U1BILU0xMDB8U1BILU0yMjB8U1BILU0yNDB8U1BILU0zMDB8U1BILU0zMDV8U1BILU0zMjB8U1BILU0zMzB8U1BILU0zNTB8U1BILU0zNjB8U1BILU0zNzB8U1BILU0zODB8U1BILU01MTB8U1BILU01NDB8U1BILU01NTB8U1BILU01NjB8U1BILU01NzB8U1BILU01ODB8U1BILU02MTB8U1BILU02MjB8U1BILU02MzB8U1BILU04MDB8U1BILU04MTB8U1BILU04NTB8U1BILU05MDB8U1BILU05MTB8U1BILU05MjB8U1BILU05MzB8U1BILU4xMDB8U1BILU4yMDB8U1BILU4yNDB8U1BILU4zMDB8U1BILU40MDB8U1BILVo0MDB8U1dDLUUxMDB8U0NILWk5MDl8R1QtTjcxMDB8R1QtTjcxMDV8U0NILUk1MzV8U00tTjkwMEF8U0dILUkzMTd8U0dILVQ5OTlMfEdULVM1MzYwQnxHVC1JODI2MnxHVC1TNjgwMnxHVC1TNjMxMnxHVC1TNjMxMHxHVC1TNTMxMnxHVC1TNTMxMHxHVC1JOTEwNXxHVC1JODUxMHxHVC1TNjc5ME58U00tRzcxMDV8U00tTjkwMDV8R1QtUzUzMDF8R1QtSTkyOTV8R1QtSTkxOTV8U00tQzEwMXxHVC1TNzM5MnxHVC1TNzU2MHxHVC1CNzYxMHxHVC1JNTUxMHxHVC1TNzU4MnxHVC1TNzUzMEV8R1QtSTg3NTB8U00tRzkwMDZWfFNNLUc5MDA4VnxTTS1HOTAwOUR8U00tRzkwMEF8U00tRzkwMER8U00tRzkwMEZ8U00tRzkwMEh8U00tRzkwMEl8U00tRzkwMEp8U00tRzkwMEt8U00tRzkwMEx8U00tRzkwME18U00tRzkwMFB8U00tRzkwMFI0fFNNLUc5MDBTfFNNLUc5MDBUfFNNLUc5MDBWfFNNLUc5MDBXOHxTSFYtRTE2MEt8U0NILVA3MDl8U0NILVA3Mjl8U00tVDI1NTh8R1QtSTkyMDV8U00tRzkzNTB8U00tSjEyMEZ8U00tRzkyMEZ8U00tRzkyMFZ8U00tRzkzMEZ8U00tTjkxMEN8U00tQTMxMEZ8R1QtSTkxOTB8U00tSjUwMEZOfFNNLUc5MDNGfFNNLUozMzBGXCIsXG4gICAgICAgIFwiTEdcIjogXCJcXFxcYkxHXFxcXGI7fExHWy0gXT8oQzgwMHxDOTAwfEU0MDB8RTYxMHxFOTAwfEUtOTAwfEYxNjB8RjE4MEt8RjE4MEx8RjE4MFN8NzMwfDg1NXxMMTYwfExTNzQwfExTODQwfExTOTcwfExVNjIwMHxNUzY5MHxNUzY5NXxNUzc3MHxNUzg0MHxNUzg3MHxNUzkxMHxQNTAwfFA3MDB8UDcwNXxWTTY5NnxBUzY4MHxBUzY5NXxBWDg0MHxDNzI5fEU5NzB8R1M1MDV8MjcyfEMzOTV8RTczOUJLfEU5NjB8TDU1Q3xMNzVDfExTNjk2fExTODYwfFA3NjlCS3xQMzUwfFA1MDB8UDUwOXxQODcwfFVOMjcyfFVTNzMwfFZTODQwfFZTOTUwfExOMjcyfExONTEwfExTNjcwfExTODU1fExXNjkwfE1OMjcwfE1ONTEwfFA1MDl8UDc2OXxQOTMwfFVOMjAwfFVOMjcwfFVONTEwfFVONjEwfFVTNjcwfFVTNzQwfFVTNzYwfFVYMjY1fFVYODQwfFZOMjcxfFZONTMwfFZTNjYwfFZTNzAwfFZTNzQwfFZTNzUwfFZTOTEwfFZTOTIwfFZTOTMwfFZYOTIwMHxWWDExMDAwfEFYODQwQXxMVzc3MHxQNTA2fFA5MjV8UDk5OXxFNjEyfEQ5NTV8RDgwMnxNUzMyM3xNMjU3KXxMTS1HNzEwXCIsXG4gICAgICAgIFwiU29ueVwiOiBcIlNvbnlTVHxTb255TFR8U29ueUVyaWNzc29ufFNvbnlFcmljc3NvbkxUMTVpdnxMVDE4aXxFMTBpfExUMjhofExUMjZ3fFNvbnlFcmljc3Nvbk1UMjdpfEM1MzAzfEM2OTAyfEM2OTAzfEM2OTA2fEM2OTQzfEQyNTMzXCIsXG4gICAgICAgIFwiQXN1c1wiOiBcIkFzdXMuKkdhbGF4eXxQYWRGb25lLipNb2JpbGVcIixcbiAgICAgICAgXCJOb2tpYUx1bWlhXCI6IFwiTHVtaWEgWzAtOV17Myw0fVwiLFxuICAgICAgICBcIk1pY3JvbWF4XCI6IFwiTWljcm9tYXguKlxcXFxiKEEyMTB8QTkyfEE4OHxBNzJ8QTExMXxBMTEwUXxBMTE1fEExMTZ8QTExMHxBOTBTfEEyNnxBNTF8QTM1fEE1NHxBMjV8QTI3fEE4OXxBNjh8QTY1fEE1N3xBOTApXFxcXGJcIixcbiAgICAgICAgXCJQYWxtXCI6IFwiUGFsbVNvdXJjZXxQYWxtXCIsXG4gICAgICAgIFwiVmVydHVcIjogXCJWZXJ0dXxWZXJ0dS4qTHRkfFZlcnR1LipBc2NlbnR8VmVydHUuKkF5eHRhfFZlcnR1LipDb25zdGVsbGF0aW9uKEZ8UXVlc3QpP3xWZXJ0dS4qTW9uaWthfFZlcnR1LipTaWduYXR1cmVcIixcbiAgICAgICAgXCJQYW50ZWNoXCI6IFwiUEFOVEVDSHxJTS1BODUwU3xJTS1BODQwU3xJTS1BODMwTHxJTS1BODMwS3xJTS1BODMwU3xJTS1BODIwTHxJTS1BODEwS3xJTS1BODEwU3xJTS1BODAwU3xJTS1UMTAwS3xJTS1BNzI1THxJTS1BNzgwTHxJTS1BNzc1Q3xJTS1BNzcwS3xJTS1BNzYwU3xJTS1BNzUwS3xJTS1BNzQwU3xJTS1BNzMwU3xJTS1BNzIwTHxJTS1BNzEwS3xJTS1BNjkwTHxJTS1BNjkwU3xJTS1BNjUwU3xJTS1BNjMwS3xJTS1BNjAwU3xWRUdBIFBUTDIxfFBUMDAzfFA4MDEwfEFEUjkxMEx8UDYwMzB8UDYwMjB8UDkwNzB8UDQxMDB8UDkwNjB8UDUwMDB8Q0RNODk5MnxUWFQ4MDQ1fEFEUjg5OTV8SVMxMVBUfFAyMDMwfFA2MDEwfFA4MDAwfFBUMDAyfElTMDZ8Q0RNODk5OXxQOTA1MHxQVDAwMXxUWFQ4MDQwfFAyMDIwfFA5MDIwfFAyMDAwfFA3MDQwfFA3MDAwfEM3OTBcIixcbiAgICAgICAgXCJGbHlcIjogXCJJUTIzMHxJUTQ0NHxJUTQ1MHxJUTQ0MHxJUTQ0MnxJUTQ0MXxJUTI0NXxJUTI1NnxJUTIzNnxJUTI1NXxJUTIzNXxJUTI0NXxJUTI3NXxJUTI0MHxJUTI4NXxJUTI4MHxJUTI3MHxJUTI2MHxJUTI1MFwiLFxuICAgICAgICBcIldpa29cIjogXCJLSVRFIDRHfEhJR0hXQVl8R0VUQVdBWXxTVEFJUldBWXxEQVJLU0lERXxEQVJLRlVMTHxEQVJLTklHSFR8REFSS01PT058U0xJREV8V0FYIDRHfFJBSU5CT1d8QkxPT018U1VOU0VUfEdPQSg/IW5uYSl8TEVOTll8QkFSUll8SUdHWXxPWlpZfENJTksgRklWRXxDSU5LIFBFQVh8Q0lOSyBQRUFYIDJ8Q0lOSyBTTElNfENJTksgU0xJTSAyfENJTksgK3xDSU5LIEtJTkd8Q0lOSyBQRUFYfENJTksgU0xJTXxTVUJMSU1cIixcbiAgICAgICAgXCJpTW9iaWxlXCI6IFwiaS1tb2JpbGUgKElRfGktU1RZTEV8aWRlYXxaQUF8SGl0eilcIixcbiAgICAgICAgXCJTaW1WYWxsZXlcIjogXCJcXFxcYihTUC04MHxYVC05MzB8U1gtMzQwfFhULTkzMHxTWC0zMTB8U1AtMzYwfFNQNjB8U1BULTgwMHxTUC0xMjB8U1BULTgwMHxTUC0xNDB8U1BYLTV8U1BYLTh8U1AtMTAwfFNQWC04fFNQWC0xMilcXFxcYlwiLFxuICAgICAgICBcIldvbGZnYW5nXCI6IFwiQVQtQjI0RHxBVC1BUzUwSER8QVQtQVM0MFd8QVQtQVM1NUhEfEFULUFTNDVxMnxBVC1CMjZEfEFULUFTNTBRXCIsXG4gICAgICAgIFwiQWxjYXRlbFwiOiBcIkFsY2F0ZWxcIixcbiAgICAgICAgXCJOaW50ZW5kb1wiOiBcIk5pbnRlbmRvICgzRFN8U3dpdGNoKVwiLFxuICAgICAgICBcIkFtb2lcIjogXCJBbW9pXCIsXG4gICAgICAgIFwiSU5RXCI6IFwiSU5RXCIsXG4gICAgICAgIFwiT25lUGx1c1wiOiBcIk9ORVBMVVNcIixcbiAgICAgICAgXCJHZW5lcmljUGhvbmVcIjogXCJUYXBhdGFsa3xQREE7fFNBR0VNfFxcXFxibW1wXFxcXGJ8cG9ja2V0fFxcXFxicHNwXFxcXGJ8c3ltYmlhbnxTbWFydHBob25lfHNtYXJ0Zm9ufHRyZW98dXAuYnJvd3Nlcnx1cC5saW5rfHZvZGFmb25lfFxcXFxid2FwXFxcXGJ8bm9raWF8U2VyaWVzNDB8U2VyaWVzNjB8UzYwfFNvbnlFcmljc3NvbnxOOTAwfE1BVUkuKldBUC4qQnJvd3NlclwiXG4gICAgfSxcbiAgICBcInRhYmxldHNcIjoge1xuICAgICAgICBcImlQYWRcIjogXCJpUGFkfGlQYWQuKk1vYmlsZVwiLFxuICAgICAgICBcIk5leHVzVGFibGV0XCI6IFwiQW5kcm9pZC4qTmV4dXNbXFxcXHNdKyg3fDl8MTApXCIsXG4gICAgICAgIFwiR29vZ2xlVGFibGV0XCI6IFwiQW5kcm9pZC4qUGl4ZWwgQ1wiLFxuICAgICAgICBcIlNhbXN1bmdUYWJsZXRcIjogXCJTQU1TVU5HLipUYWJsZXR8R2FsYXh5LipUYWJ8U0MtMDFDfEdULVAxMDAwfEdULVAxMDAzfEdULVAxMDEwfEdULVAzMTA1fEdULVA2MjEwfEdULVA2ODAwfEdULVA2ODEwfEdULVA3MTAwfEdULVA3MzAwfEdULVA3MzEwfEdULVA3NTAwfEdULVA3NTEwfFNDSC1JODAwfFNDSC1JODE1fFNDSC1JOTA1fFNHSC1JOTU3fFNHSC1JOTg3fFNHSC1UODQ5fFNHSC1UODU5fFNHSC1UODY5fFNQSC1QMTAwfEdULVAzMTAwfEdULVAzMTA4fEdULVAzMTEwfEdULVA1MTAwfEdULVA1MTEwfEdULVA2MjAwfEdULVA3MzIwfEdULVA3NTExfEdULU44MDAwfEdULVA4NTEwfFNHSC1JNDk3fFNQSC1QNTAwfFNHSC1UNzc5fFNDSC1JNzA1fFNDSC1JOTE1fEdULU44MDEzfEdULVAzMTEzfEdULVA1MTEzfEdULVA4MTEwfEdULU44MDEwfEdULU44MDA1fEdULU44MDIwfEdULVAxMDEzfEdULVA2MjAxfEdULVA3NTAxfEdULU41MTAwfEdULU41MTA1fEdULU41MTEwfFNIVi1FMTQwS3xTSFYtRTE0MEx8U0hWLUUxNDBTfFNIVi1FMTUwU3xTSFYtRTIzMEt8U0hWLUUyMzBMfFNIVi1FMjMwU3xTSFctTTE4MEt8U0hXLU0xODBMfFNIVy1NMTgwU3xTSFctTTE4MFd8U0hXLU0zMDBXfFNIVy1NMzA1V3xTSFctTTM4MEt8U0hXLU0zODBTfFNIVy1NMzgwV3xTSFctTTQzMFd8U0hXLU00ODBLfFNIVy1NNDgwU3xTSFctTTQ4MFd8U0hXLU00ODVXfFNIVy1NNDg2V3xTSFctTTUwMFd8R1QtSTkyMjh8U0NILVA3Mzl8U0NILUk5MjV8R1QtSTkyMDB8R1QtUDUyMDB8R1QtUDUyMTB8R1QtUDUyMTBYfFNNLVQzMTF8U00tVDMxMHxTTS1UMzEwWHxTTS1UMjEwfFNNLVQyMTBSfFNNLVQyMTF8U00tUDYwMHxTTS1QNjAxfFNNLVA2MDV8U00tUDkwMHxTTS1QOTAxfFNNLVQyMTd8U00tVDIxN0F8U00tVDIxN1N8U00tUDYwMDB8U00tVDMxMDB8U0dILUk0Njd8WEU1MDB8U00tVDExMHxHVC1QNTIyMHxHVC1JOTIwMFh8R1QtTjUxMTBYfEdULU41MTIwfFNNLVA5MDV8U00tVDExMXxTTS1UMjEwNXxTTS1UMzE1fFNNLVQzMjB8U00tVDMyMFh8U00tVDMyMXxTTS1UNTIwfFNNLVQ1MjV8U00tVDUzME5VfFNNLVQyMzBOVXxTTS1UMzMwTlV8U00tVDkwMHxYRTUwMFQxQ3xTTS1QNjA1VnxTTS1QOTA1VnxTTS1UMzM3VnxTTS1UNTM3VnxTTS1UNzA3VnxTTS1UODA3VnxTTS1QNjAwWHxTTS1QOTAwWHxTTS1UMjEwWHxTTS1UMjMwfFNNLVQyMzBYfFNNLVQzMjV8R1QtUDc1MDN8U00tVDUzMXxTTS1UMzMwfFNNLVQ1MzB8U00tVDcwNXxTTS1UNzA1Q3xTTS1UNTM1fFNNLVQzMzF8U00tVDgwMHxTTS1UNzAwfFNNLVQ1Mzd8U00tVDgwN3xTTS1QOTA3QXxTTS1UMzM3QXxTTS1UNTM3QXxTTS1UNzA3QXxTTS1UODA3QXxTTS1UMjM3fFNNLVQ4MDdQfFNNLVA2MDdUfFNNLVQyMTdUfFNNLVQzMzdUfFNNLVQ4MDdUfFNNLVQxMTZOUXxTTS1UMTE2QlV8U00tUDU1MHxTTS1UMzUwfFNNLVQ1NTB8U00tVDkwMDB8U00tUDkwMDB8U00tVDcwNVl8U00tVDgwNXxHVC1QMzExM3xTTS1UNzEwfFNNLVQ4MTB8U00tVDgxNXxTTS1UMzYwfFNNLVQ1MzN8U00tVDExM3xTTS1UMzM1fFNNLVQ3MTV8U00tVDU2MHxTTS1UNjcwfFNNLVQ2Nzd8U00tVDM3N3xTTS1UNTY3fFNNLVQzNTdUfFNNLVQ1NTV8U00tVDU2MXxTTS1UNzEzfFNNLVQ3MTl8U00tVDgxM3xTTS1UODE5fFNNLVQ1ODB8U00tVDM1NVk/fFNNLVQyODB8U00tVDgxN0F8U00tVDgyMHxTTS1XNzAwfFNNLVA1ODB8U00tVDU4N3xTTS1QMzUwfFNNLVA1NTVNfFNNLVAzNTVNfFNNLVQxMTNOVXxTTS1UODE1WXxTTS1UNTg1fFNNLVQyODV8U00tVDgyNXxTTS1XNzA4fFNNLVQ4MzV8U00tVDgzMHxTTS1UODM3VnxTTS1UNzIwfFNNLVQ1MTB8U00tVDM4N1ZcIixcbiAgICAgICAgXCJLaW5kbGVcIjogXCJLaW5kbGV8U2lsay4qQWNjZWxlcmF0ZWR8QW5kcm9pZC4qXFxcXGIoS0ZPVHxLRlRUfEtGSldJfEtGSldBfEtGT1RFfEtGU09XSXxLRlRIV0l8S0ZUSFdBfEtGQVBXSXxLRkFQV0F8V0ZKV0FFfEtGU0FXQXxLRlNBV0l8S0ZBU1dJfEtGQVJXSXxLRkZPV0l8S0ZHSVdJfEtGTUVXSSlcXFxcYnxBbmRyb2lkLipTaWxrXFwvWzAtOS5dKyBsaWtlIENocm9tZVxcL1swLTkuXSsgKD8hTW9iaWxlKVwiLFxuICAgICAgICBcIlN1cmZhY2VUYWJsZXRcIjogXCJXaW5kb3dzIE5UIFswLTkuXSs7IEFSTTsuKihUYWJsZXR8QVJNQkpTKVwiLFxuICAgICAgICBcIkhQVGFibGV0XCI6IFwiSFAgU2xhdGUgKDd8OHwxMCl8SFAgRWxpdGVQYWQgOTAwfGhwLXRhYmxldHxFbGl0ZUJvb2suKlRvdWNofEhQIDh8U2xhdGUgMjF8SFAgU2xhdGVCb29rIDEwXCIsXG4gICAgICAgIFwiQXN1c1RhYmxldFwiOiBcIl4uKlBhZEZvbmUoKD8hTW9iaWxlKS4pKiR8VHJhbnNmb3JtZXJ8VEYxMDF8VEYxMDFHfFRGMzAwVHxURjMwMFRHfFRGMzAwVEx8VEY3MDBUfFRGNzAwS0x8VEY3MDFUfFRGODEwQ3xNRTE3MXxNRTMwMVR8TUUzMDJDfE1FMzcxTUd8TUUzNzBUfE1FMzcyTUd8TUUxNzJWfE1FMTczWHxNRTQwMEN8U2xpZGVyIFNMMTAxfFxcXFxiSzAwRlxcXFxifFxcXFxiSzAwQ1xcXFxifFxcXFxiSzAwRVxcXFxifFxcXFxiSzAwTFxcXFxifFRYMjAxTEF8TUUxNzZDfE1FMTAyQXxcXFxcYk04MFRBXFxcXGJ8TUUzNzJDTHxNRTU2MENHfE1FMzcyQ0d8TUUzMDJLTHwgSzAxMCB8IEswMTEgfCBLMDE3IHwgSzAxRSB8TUU1NzJDfE1FMTAzS3xNRTE3MEN8TUUxNzFDfFxcXFxiTUU3MENcXFxcYnxNRTU4MUN8TUU1ODFDTHxNRTg1MTBDfE1FMTgxQ3xQMDFZfFBPMU1BfFAwMVp8XFxcXGJQMDI3XFxcXGJ8XFxcXGJQMDI0XFxcXGJ8XFxcXGJQMDBDXFxcXGJcIixcbiAgICAgICAgXCJCbGFja0JlcnJ5VGFibGV0XCI6IFwiUGxheUJvb2t8UklNIFRhYmxldFwiLFxuICAgICAgICBcIkhUQ3RhYmxldFwiOiBcIkhUQ19GbHllcl9QNTEyfEhUQyBGbHllcnxIVEMgSmV0c3RyZWFtfEhUQy1QNzE1YXxIVEMgRVZPIFZpZXcgNEd8UEc0MTIwMHxQRzA5NDEwXCIsXG4gICAgICAgIFwiTW90b3JvbGFUYWJsZXRcIjogXCJ4b29tfHNob2xlc3R8TVo2MTV8TVo2MDV8TVo1MDV8TVo2MDF8TVo2MDJ8TVo2MDN8TVo2MDR8TVo2MDZ8TVo2MDd8TVo2MDh8TVo2MDl8TVo2MTV8TVo2MTZ8TVo2MTdcIixcbiAgICAgICAgXCJOb29rVGFibGV0XCI6IFwiQW5kcm9pZC4qTm9va3xOb29rQ29sb3J8bm9vayBicm93c2VyfEJOUlYyMDB8Qk5SVjIwMEF8Qk5UVjI1MHxCTlRWMjUwQXxCTlRWNDAwfEJOVFY2MDB8TG9naWNQRCBab29tMlwiLFxuICAgICAgICBcIkFjZXJUYWJsZXRcIjogXCJBbmRyb2lkLio7IFxcXFxiKEExMDB8QTEwMXxBMTEwfEEyMDB8QTIxMHxBMjExfEE1MDB8QTUwMXxBNTEwfEE1MTF8QTcwMHxBNzAxfFc1MDB8VzUwMFB8VzUwMXxXNTAxUHxXNTEwfFc1MTF8VzcwMHxHMTAwfEcxMDBXfEIxLUE3MXxCMS03MTB8QjEtNzExfEExLTgxMHxBMS04MTF8QTEtODMwKVxcXFxifFczLTgxMHxcXFxcYkEzLUExMFxcXFxifFxcXFxiQTMtQTExXFxcXGJ8XFxcXGJBMy1BMjBcXFxcYnxcXFxcYkEzLUEzMFwiLFxuICAgICAgICBcIlRvc2hpYmFUYWJsZXRcIjogXCJBbmRyb2lkLiooQVQxMDB8QVQxMDV8QVQyMDB8QVQyMDV8QVQyNzB8QVQyNzV8QVQzMDB8QVQzMDV8QVQxUzV8QVQ1MDB8QVQ1NzB8QVQ3MDB8QVQ4MzApfFRPU0hJQkEuKkZPTElPXCIsXG4gICAgICAgIFwiTEdUYWJsZXRcIjogXCJcXFxcYkwtMDZDfExHLVY5MDl8TEctVjkwMHxMRy1WNzAwfExHLVY1MTB8TEctVjUwMHxMRy1WNDEwfExHLVY0MDB8TEctVks4MTBcXFxcYlwiLFxuICAgICAgICBcIkZ1aml0c3VUYWJsZXRcIjogXCJBbmRyb2lkLipcXFxcYihGLTAxRHxGLTAyRnxGLTA1RXxGLTEwRHxNNTMyfFE1NzIpXFxcXGJcIixcbiAgICAgICAgXCJQcmVzdGlnaW9UYWJsZXRcIjogXCJQTVAzMTcwQnxQTVAzMjcwQnxQTVAzNDcwQnxQTVA3MTcwQnxQTVAzMzcwQnxQTVAzNTcwQ3xQTVA1ODcwQ3xQTVAzNjcwQnxQTVA1NTcwQ3xQTVA1NzcwRHxQTVAzOTcwQnxQTVAzODcwQ3xQTVA1NTgwQ3xQTVA1ODgwRHxQTVA1NzgwRHxQTVA1NTg4Q3xQTVA3MjgwQ3xQTVA3MjgwQzNHfFBNUDcyODB8UE1QNzg4MER8UE1QNTU5N0R8UE1QNTU5N3xQTVA3MTAwRHxQRVIzNDY0fFBFUjMyNzR8UEVSMzU3NHxQRVIzODg0fFBFUjUyNzR8UEVSNTQ3NHxQTVA1MDk3Q1BST3xQTVA1MDk3fFBNUDczODBEfFBNUDUyOTdDfFBNUDUyOTdDX1FVQUR8UE1QODEyRXxQTVA4MTJFM0d8UE1QODEyRnxQTVA4MTBFfFBNUDg4MFREfFBNVDMwMTd8UE1UMzAzN3xQTVQzMDQ3fFBNVDMwNTd8UE1UNzAwOHxQTVQ1ODg3fFBNVDUwMDF8UE1UNTAwMlwiLFxuICAgICAgICBcIkxlbm92b1RhYmxldFwiOiBcIkxlbm92byBUQUJ8SWRlYShUYWJ8UGFkKSggQTF8QTEwfCBLMXwpfFRoaW5rUGFkKFsgXSspP1RhYmxldHxZVDMtODUwTXxZVDMtWDkwTHxZVDMtWDkwRnxZVDMtWDkwWHxMZW5vdm8uKihTMjEwOXxTMjExMHxTNTAwMHxTNjAwMHxLMzAxMXxBMzAwMHxBMzUwMHxBMTAwMHxBMjEwN3xBMjEwOXxBMTEwN3xBNTUwMHxBNzYwMHxCNjAwMHxCODAwMHxCODA4MCkoLXwpKEZMfEZ8SFZ8SHwpfFRCLVgxMDNGfFRCLVgzMDRYfFRCLVgzMDRGfFRCLVgzMDRMfFRCLVg1MDVGfFRCLVg1MDVMfFRCLVg1MDVYfFRCLVg2MDVGfFRCLVg2MDVMfFRCLTg3MDNGfFRCLTg3MDNYfFRCLTg3MDNOfFRCLTg3MDROfFRCLTg3MDRGfFRCLTg3MDRYfFRCLTg3MDRWfFRCLTczMDRGfFRCLTczMDRJfFRCLTczMDRYfFRhYjJBNy0xMEZ8VGFiMkE3LTIwRnxUQjItWDMwTHxZVDMtWDUwTHxZVDMtWDUwRnxZVDMtWDUwTXxZVC1YNzA1RnxZVC1YNzAzRnxZVC1YNzAzTHxZVC1YNzA1THxZVC1YNzA1WHxUQjItWDMwRnxUQjItWDMwTHxUQjItWDMwTXxBMjEwN0EtRnxBMjEwN0EtSHxUQjMtNzMwRnxUQjMtNzMwTXxUQjMtNzMwWHxUQi03NTA0RnxUQi03NTA0WFwiLFxuICAgICAgICBcIkRlbGxUYWJsZXRcIjogXCJWZW51ZSAxMXxWZW51ZSA4fFZlbnVlIDd8RGVsbCBTdHJlYWsgMTB8RGVsbCBTdHJlYWsgN1wiLFxuICAgICAgICBcIllhcnZpa1RhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiKFRBQjIxMHxUQUIyMTF8VEFCMjI0fFRBQjI1MHxUQUIyNjB8VEFCMjY0fFRBQjMxMHxUQUIzNjB8VEFCMzY0fFRBQjQxMHxUQUI0MTF8VEFCNDIwfFRBQjQyNHxUQUI0NTB8VEFCNDYwfFRBQjQ2MXxUQUI0NjR8VEFCNDY1fFRBQjQ2N3xUQUI0Njh8VEFCMDctMTAwfFRBQjA3LTEwMXxUQUIwNy0xNTB8VEFCMDctMTUxfFRBQjA3LTE1MnxUQUIwNy0yMDB8VEFCMDctMjAxLTNHfFRBQjA3LTIxMHxUQUIwNy0yMTF8VEFCMDctMjEyfFRBQjA3LTIxNHxUQUIwNy0yMjB8VEFCMDctNDAwfFRBQjA3LTQ4NXxUQUIwOC0xNTB8VEFCMDgtMjAwfFRBQjA4LTIwMS0zR3xUQUIwOC0yMDEtMzB8VEFCMDktMTAwfFRBQjA5LTIxMXxUQUIwOS00MTB8VEFCMTAtMTUwfFRBQjEwLTIwMXxUQUIxMC0yMTF8VEFCMTAtNDAwfFRBQjEwLTQxMHxUQUIxMy0yMDF8VEFCMjc0RVVLfFRBQjI3NUVVS3xUQUIzNzRFVUt8VEFCNDYyRVVLfFRBQjQ3NEVVS3xUQUI5LTIwMClcXFxcYlwiLFxuICAgICAgICBcIk1lZGlvblRhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiT1lPXFxcXGJ8TElGRS4qKFA5MjEyfFA5NTE0fFA5NTE2fFM5NTEyKXxMSUZFVEFCXCIsXG4gICAgICAgIFwiQXJub3ZhVGFibGV0XCI6IFwiOTdHNHxBTjEwRzJ8QU43YkczfEFON2ZHM3xBTjhHM3xBTjhjRzN8QU43RzN8QU45RzN8QU43ZEczfEFON2RHM1NUfEFON2RHM0NoaWxkUGFkfEFOMTBiRzN8QU4xMGJHM0RUfEFOOUcyXCIsXG4gICAgICAgIFwiSW50ZW5zb1RhYmxldFwiOiBcIklOTTgwMDJLUHxJTk0xMDEwRlB8SU5NODA1TkR8SW50ZW5zbyBUYWJ8VEFCMTAwNFwiLFxuICAgICAgICBcIklSVVRhYmxldFwiOiBcIk03MDJwcm9cIixcbiAgICAgICAgXCJNZWdhZm9uVGFibGV0XCI6IFwiTWVnYUZvbiBWOXxcXFxcYlpURSBWOVxcXFxifEFuZHJvaWQuKlxcXFxiTVQ3QVxcXFxiXCIsXG4gICAgICAgIFwiRWJvZGFUYWJsZXRcIjogXCJFLUJvZGEgKFN1cHJlbWV8SW1wcmVzc3BlZWR8SXp6eWNvbW18RXNzZW50aWFsKVwiLFxuICAgICAgICBcIkFsbFZpZXdUYWJsZXRcIjogXCJBbGx2aWV3LiooVml2YXxBbGxkcm98Q2l0eXxTcGVlZHxBbGwgVFZ8RnJlbnp5fFF1YXNhcnxTaGluZXxUWDF8QVgxfEFYMilcIixcbiAgICAgICAgXCJBcmNob3NUYWJsZXRcIjogXCJcXFxcYigxMDFHOXw4MEc5fEExMDFJVClcXFxcYnxRaWxpdmUgOTdSfEFyY2hvczV8XFxcXGJBUkNIT1MgKDcwfDc5fDgwfDkwfDk3fDEwMXxGQU1JTFlQQUR8KShifGN8KShHMTB8IENvYmFsdHwgVElUQU5JVU0oSER8KXwgWGVub258IE5lb258WFNLfCAyfCBYUyAyfCBQTEFUSU5VTXwgQ0FSQk9OfEdBTUVQQUQpXFxcXGJcIixcbiAgICAgICAgXCJBaW5vbFRhYmxldFwiOiBcIk5PVk83fE5PVk84fE5PVk8xMHxOb3ZvN0F1cm9yYXxOb3ZvN0Jhc2ljfE5PVk83UEFMQURJTnxub3ZvOS1TcGFya1wiLFxuICAgICAgICBcIk5va2lhTHVtaWFUYWJsZXRcIjogXCJMdW1pYSAyNTIwXCIsXG4gICAgICAgIFwiU29ueVRhYmxldFwiOiBcIlNvbnkuKlRhYmxldHxYcGVyaWEgVGFibGV0fFNvbnkgVGFibGV0IFN8U08tMDNFfFNHUFQxMnxTR1BUMTN8U0dQVDExNHxTR1BUMTIxfFNHUFQxMjJ8U0dQVDEyM3xTR1BUMTExfFNHUFQxMTJ8U0dQVDExM3xTR1BUMTMxfFNHUFQxMzJ8U0dQVDEzM3xTR1BUMjExfFNHUFQyMTJ8U0dQVDIxM3xTR1AzMTF8U0dQMzEyfFNHUDMyMXxFQlJEMTEwMXxFQlJEMTEwMnxFQlJEMTIwMXxTR1AzNTF8U0dQMzQxfFNHUDUxMXxTR1A1MTJ8U0dQNTIxfFNHUDU0MXxTR1A1NTF8U0dQNjIxfFNHUDY0MXxTR1A2MTJ8U09UMzF8U0dQNzcxfFNHUDYxMXxTR1A2MTJ8U0dQNzEyXCIsXG4gICAgICAgIFwiUGhpbGlwc1RhYmxldFwiOiBcIlxcXFxiKFBJMjAxMHxQSTMwMDB8UEkzMTAwfFBJMzEwNXxQSTMxMTB8UEkzMjA1fFBJMzIxMHxQSTM5MDB8UEk0MDEwfFBJNzAwMHxQSTcxMDApXFxcXGJcIixcbiAgICAgICAgXCJDdWJlVGFibGV0XCI6IFwiQW5kcm9pZC4qKEs4R1R8VTlHVHxVMTBHVHxVMTZHVHxVMTdHVHxVMThHVHxVMTlHVHxVMjBHVHxVMjNHVHxVMzBHVCl8Q1VCRSBVOEdUXCIsXG4gICAgICAgIFwiQ29ieVRhYmxldFwiOiBcIk1JRDEwNDJ8TUlEMTA0NXxNSUQxMTI1fE1JRDExMjZ8TUlENzAxMnxNSUQ3MDE0fE1JRDcwMTV8TUlENzAzNHxNSUQ3MDM1fE1JRDcwMzZ8TUlENzA0MnxNSUQ3MDQ4fE1JRDcxMjd8TUlEODA0MnxNSUQ4MDQ4fE1JRDgxMjd8TUlEOTA0MnxNSUQ5NzQwfE1JRDk3NDJ8TUlENzAyMnxNSUQ3MDEwXCIsXG4gICAgICAgIFwiTUlEVGFibGV0XCI6IFwiTTk3MDF8TTkwMDB8TTkxMDB8TTgwNnxNMTA1MnxNODA2fFQ3MDN8TUlENzAxfE1JRDcxM3xNSUQ3MTB8TUlENzI3fE1JRDc2MHxNSUQ4MzB8TUlENzI4fE1JRDkzM3xNSUQxMjV8TUlEODEwfE1JRDczMnxNSUQxMjB8TUlEOTMwfE1JRDgwMHxNSUQ3MzF8TUlEOTAwfE1JRDEwMHxNSUQ4MjB8TUlENzM1fE1JRDk4MHxNSUQxMzB8TUlEODMzfE1JRDczN3xNSUQ5NjB8TUlEMTM1fE1JRDg2MHxNSUQ3MzZ8TUlEMTQwfE1JRDkzMHxNSUQ4MzV8TUlENzMzfE1JRDRYMTBcIixcbiAgICAgICAgXCJNU0lUYWJsZXRcIjogXCJNU0kgXFxcXGIoUHJpbW8gNzNLfFByaW1vIDczTHxQcmltbyA4MUx8UHJpbW8gNzd8UHJpbW8gOTN8UHJpbW8gNzV8UHJpbW8gNzZ8UHJpbW8gNzN8UHJpbW8gODF8UHJpbW8gOTF8UHJpbW8gOTB8RW5qb3kgNzF8RW5qb3kgN3xFbmpveSAxMClcXFxcYlwiLFxuICAgICAgICBcIlNNaVRUYWJsZXRcIjogXCJBbmRyb2lkLiooXFxcXGJNSURcXFxcYnxNSUQtNTYwfE1UVi1UMTIwMHxNVFYtUE5ENTMxfE1UVi1QMTEwMXxNVFYtUE5ENTMwKVwiLFxuICAgICAgICBcIlJvY2tDaGlwVGFibGV0XCI6IFwiQW5kcm9pZC4qKFJLMjgxOHxSSzI4MDhBfFJLMjkxOHxSSzMwNjYpfFJLMjczOHxSSzI4MDhBXCIsXG4gICAgICAgIFwiRmx5VGFibGV0XCI6IFwiSVEzMTB8Rmx5IFZpc2lvblwiLFxuICAgICAgICBcImJxVGFibGV0XCI6IFwiQW5kcm9pZC4qKGJxKT8uKlxcXFxiKEVsY2Fub3xDdXJpZXxFZGlzb258TWF4d2VsbHxLZXBsZXJ8UGFzY2FsfFRlc2xhfEh5cGF0aWF8UGxhdG9ufE5ld3RvbnxMaXZpbmdzdG9uZXxDZXJ2YW50ZXN8QXZhbnR8QXF1YXJpcyAoW0V8TV0xMHxNOCkpXFxcXGJ8TWF4d2VsbC4qTGl0ZXxNYXh3ZWxsLipQbHVzXCIsXG4gICAgICAgIFwiSHVhd2VpVGFibGV0XCI6IFwiTWVkaWFQYWR8TWVkaWFQYWQgNyBZb3V0aHxJREVPUyBTN3xTNy0yMDFjfFM3LTIwMnV8UzctMTAxfFM3LTEwM3xTNy0xMDR8UzctMTA1fFM3LTEwNnxTNy0yMDF8UzctU2xpbXxNMi1BMDFMfEJBSC1MMDl8QkFILVcwOXxBR1MtTDA5fENNUi1BTDE5XCIsXG4gICAgICAgIFwiTmVjVGFibGV0XCI6IFwiXFxcXGJOLTA2RHxcXFxcYk4tMDhEXCIsXG4gICAgICAgIFwiUGFudGVjaFRhYmxldFwiOiBcIlBhbnRlY2guKlA0MTAwXCIsXG4gICAgICAgIFwiQnJvbmNob1RhYmxldFwiOiBcIkJyb25jaG8uKihONzAxfE43MDh8TjgwMnxhNzEwKVwiLFxuICAgICAgICBcIlZlcnN1c1RhYmxldFwiOiBcIlRPVUNIUEFELipbNzg5MTBdfFxcXFxiVE9VQ0hUQUJcXFxcYlwiLFxuICAgICAgICBcIlp5bmNUYWJsZXRcIjogXCJ6MTAwMHxaOTkgMkd8ejkzMHx6OTkwfHo5MDl8WjkxOXx6OTAwXCIsXG4gICAgICAgIFwiUG9zaXRpdm9UYWJsZXRcIjogXCJUQjA3U1RBfFRCMTBTVEF8VEIwN0ZUQXxUQjEwRlRBXCIsXG4gICAgICAgIFwiTmFiaVRhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiTmFiaVwiLFxuICAgICAgICBcIktvYm9UYWJsZXRcIjogXCJLb2JvIFRvdWNofFxcXFxiSzA4MFxcXFxifFxcXFxiVm94XFxcXGIgQnVpbGR8XFxcXGJBcmNcXFxcYiBCdWlsZFwiLFxuICAgICAgICBcIkRhbmV3VGFibGV0XCI6IFwiRFNsaWRlLipcXFxcYig3MDB8NzAxUnw3MDJ8NzAzUnw3MDR8ODAyfDk3MHw5NzF8OTcyfDk3M3w5NzR8MTAxMHwxMDEyKVxcXFxiXCIsXG4gICAgICAgIFwiVGV4ZXRUYWJsZXRcIjogXCJOYXZpUGFkfFRCLTc3MkF8VE0tNzA0NXxUTS03MDU1fFRNLTk3NTB8VE0tNzAxNnxUTS03MDI0fFRNLTcwMjZ8VE0tNzA0MXxUTS03MDQzfFRNLTcwNDd8VE0tODA0MXxUTS05NzQxfFRNLTk3NDd8VE0tOTc0OHxUTS05NzUxfFRNLTcwMjJ8VE0tNzAyMXxUTS03MDIwfFRNLTcwMTF8VE0tNzAxMHxUTS03MDIzfFRNLTcwMjV8VE0tNzAzN1d8VE0tNzAzOFd8VE0tNzAyN1d8VE0tOTcyMHxUTS05NzI1fFRNLTk3MzdXfFRNLTEwMjB8VE0tOTczOFd8VE0tOTc0MHxUTS05NzQzV3xUQi04MDdBfFRCLTc3MUF8VEItNzI3QXxUQi03MjVBfFRCLTcxOUF8VEItODIzQXxUQi04MDVBfFRCLTcyM0F8VEItNzE1QXxUQi03MDdBfFRCLTcwNUF8VEItNzA5QXxUQi03MTFBfFRCLTg5MEhEfFRCLTg4MEhEfFRCLTc5MEhEfFRCLTc4MEhEfFRCLTc3MEhEfFRCLTcyMUhEfFRCLTcxMEhEfFRCLTQzNEhEfFRCLTg2MEhEfFRCLTg0MEhEfFRCLTc2MEhEfFRCLTc1MEhEfFRCLTc0MEhEfFRCLTczMEhEfFRCLTcyMkhEfFRCLTcyMEhEfFRCLTcwMEhEfFRCLTUwMEhEfFRCLTQ3MEhEfFRCLTQzMUhEfFRCLTQzMEhEfFRCLTUwNnxUQi01MDR8VEItNDQ2fFRCLTQzNnxUQi00MTZ8VEItMTQ2U0V8VEItMTI2U0VcIixcbiAgICAgICAgXCJQbGF5c3RhdGlvblRhYmxldFwiOiBcIlBsYXlzdGF0aW9uLiooUG9ydGFibGV8Vml0YSlcIixcbiAgICAgICAgXCJUcmVrc3RvclRhYmxldFwiOiBcIlNUMTA0MTYtMXxWVDEwNDE2LTF8U1Q3MDQwOC0xfFNUNzAyeHgtMXxTVDcwMnh4LTJ8U1Q4MDIwOHxTVDk3MjE2fFNUNzAxMDQtMnxWVDEwNDE2LTJ8U1QxMDIxNi0yQXxTdXJmVGFiXCIsXG4gICAgICAgIFwiUHlsZUF1ZGlvVGFibGV0XCI6IFwiXFxcXGIoUFRCTDEwQ0VVfFBUQkwxMEN8UFRCTDcyQkN8UFRCTDcyQkNFVXxQVEJMN0NFVXxQVEJMN0N8UFRCTDkyQkN8UFRCTDkyQkNFVXxQVEJMOUNFVXxQVEJMOUNVS3xQVEJMOUMpXFxcXGJcIixcbiAgICAgICAgXCJBZHZhblRhYmxldFwiOiBcIkFuZHJvaWQuKiBcXFxcYihFM0F8VDNYfFQ1Q3xUNUJ8VDNFfFQzQ3xUM0J8VDFKfFQxRnxUMkF8VDFIfFQxaXxFMUN8VDEtRXxUNS1BfFQ0fEUxLUJ8VDJDaXxUMS1CfFQxLUR8TzEtQXxFMS1BfFQxLUF8VDNBfFQ0aSlcXFxcYiBcIixcbiAgICAgICAgXCJEYW55VGVjaFRhYmxldFwiOiBcIkdlbml1cyBUYWIgRzN8R2VuaXVzIFRhYiBTMnxHZW5pdXMgVGFiIFEzfEdlbml1cyBUYWIgRzR8R2VuaXVzIFRhYiBRNHxHZW5pdXMgVGFiIEctSUl8R2VuaXVzIFRBQiBHSUl8R2VuaXVzIFRBQiBHSUlJfEdlbml1cyBUYWIgUzFcIixcbiAgICAgICAgXCJHYWxhcGFkVGFibGV0XCI6IFwiQW5kcm9pZC4qXFxcXGJHMVxcXFxiKD8hXFxcXCkpXCIsXG4gICAgICAgIFwiTWljcm9tYXhUYWJsZXRcIjogXCJGdW5ib29rfE1pY3JvbWF4LipcXFxcYihQMjUwfFA1NjB8UDM2MHxQMzYyfFA2MDB8UDMwMHxQMzUwfFA1MDB8UDI3NSlcXFxcYlwiLFxuICAgICAgICBcIkthcmJvbm5UYWJsZXRcIjogXCJBbmRyb2lkLipcXFxcYihBMzl8QTM3fEEzNHxTVDh8U1QxMHxTVDd8U21hcnQgVGFiM3xTbWFydCBUYWIyKVxcXFxiXCIsXG4gICAgICAgIFwiQWxsRmluZVRhYmxldFwiOiBcIkZpbmU3IEdlbml1c3xGaW5lNyBTaGluZXxGaW5lNyBBaXJ8RmluZTggU3R5bGV8RmluZTkgTW9yZXxGaW5lMTAgSm95fEZpbmUxMSBXaWRlXCIsXG4gICAgICAgIFwiUFJPU0NBTlRhYmxldFwiOiBcIlxcXFxiKFBFTTYzfFBMVDEwMjNHfFBMVDEwNDF8UExUMTA0NHxQTFQxMDQ0R3xQTFQxMDkxfFBMVDQzMTF8UExUNDMxMVBMfFBMVDQzMTV8UExUNzAzMHxQTFQ3MDMzfFBMVDcwMzNEfFBMVDcwMzV8UExUNzAzNUR8UExUNzA0NEt8UExUNzA0NUt8UExUNzA0NUtCfFBMVDcwNzFLR3xQTFQ3MDcyfFBMVDcyMjNHfFBMVDcyMjVHfFBMVDc3NzdHfFBMVDc4MTBLfFBMVDc4NDlHfFBMVDc4NTFHfFBMVDc4NTJHfFBMVDgwMTV8UExUODAzMXxQTFQ4MDM0fFBMVDgwMzZ8UExUODA4MEt8UExUODA4MnxQTFQ4MDg4fFBMVDgyMjNHfFBMVDgyMzRHfFBMVDgyMzVHfFBMVDg4MTZLfFBMVDkwMTF8UExUOTA0NUt8UExUOTIzM0d8UExUOTczNXxQTFQ5NzYwR3xQTFQ5NzcwRylcXFxcYlwiLFxuICAgICAgICBcIllPTkVTVGFibGV0XCI6IFwiQlExMDc4fEJDMTAwM3xCQzEwNzd8Uks5NzAyfEJDOTczMHxCQzkwMDF8SVQ5MDAxfEJDNzAwOHxCQzcwMTB8QkM3MDh8QkM3Mjh8QkM3MDEyfEJDNzAzMHxCQzcwMjd8QkM3MDI2XCIsXG4gICAgICAgIFwiQ2hhbmdKaWFUYWJsZXRcIjogXCJUUEM3MTAyfFRQQzcxMDN8VFBDNzEwNXxUUEM3MTA2fFRQQzcxMDd8VFBDNzIwMXxUUEM3MjAzfFRQQzcyMDV8VFBDNzIxMHxUUEM3NzA4fFRQQzc3MDl8VFBDNzcxMnxUUEM3MTEwfFRQQzgxMDF8VFBDODEwM3xUUEM4MTA1fFRQQzgxMDZ8VFBDODIwM3xUUEM4MjA1fFRQQzg1MDN8VFBDOTEwNnxUUEM5NzAxfFRQQzk3MTAxfFRQQzk3MTAzfFRQQzk3MTA1fFRQQzk3MTA2fFRQQzk3MTExfFRQQzk3MTEzfFRQQzk3MjAzfFRQQzk3NjAzfFRQQzk3ODA5fFRQQzk3MjA1fFRQQzEwMTAxfFRQQzEwMTAzfFRQQzEwMTA2fFRQQzEwMTExfFRQQzEwMjAzfFRQQzEwMjA1fFRQQzEwNTAzXCIsXG4gICAgICAgIFwiR1VUYWJsZXRcIjogXCJUWC1BMTMwMXxUWC1NOTAwMnxRNzAyfGtmMDI2XCIsXG4gICAgICAgIFwiUG9pbnRPZlZpZXdUYWJsZXRcIjogXCJUQUItUDUwNnxUQUItbmF2aS03LTNHLU18VEFCLVA1MTd8VEFCLVAtNTI3fFRBQi1QNzAxfFRBQi1QNzAzfFRBQi1QNzIxfFRBQi1QNzMxTnxUQUItUDc0MXxUQUItUDgyNXxUQUItUDkwNXxUQUItUDkyNXxUQUItUFI5NDV8VEFCLVBMMTAxNXxUQUItUDEwMjV8VEFCLVBJMTA0NXxUQUItUDEzMjV8VEFCLVBST1RBQlswLTldK3xUQUItUFJPVEFCMjV8VEFCLVBST1RBQjI2fFRBQi1QUk9UQUIyN3xUQUItUFJPVEFCMjZYTHxUQUItUFJPVEFCMi1JUFM5fFRBQi1QUk9UQUIzMC1JUFM5fFRBQi1QUk9UQUIyNVhYTHxUQUItUFJPVEFCMjYtSVBTMTB8VEFCLVBST1RBQjMwLUlQUzEwXCIsXG4gICAgICAgIFwiT3Zlcm1heFRhYmxldFwiOiBcIk9WLShTdGVlbENvcmV8TmV3QmFzZXxCYXNlY29yZXxCYXNlb25lfEV4ZWxsZW58UXVhdHRvcnxFZHVUYWJ8U29sdXRpb258QUNUSU9OfEJhc2ljVGFifFRlZGR5VGFifE1hZ2ljVGFifFN0cmVhbXxUQi0wOHxUQi0wOSl8UXVhbGNvcmUgMTAyN1wiLFxuICAgICAgICBcIkhDTFRhYmxldFwiOiBcIkhDTC4qVGFibGV0fENvbm5lY3QtM0ctMi4wfENvbm5lY3QtMkctMi4wfE1FIFRhYmxldCBVMXxNRSBUYWJsZXQgVTJ8TUUgVGFibGV0IEcxfE1FIFRhYmxldCBYMXxNRSBUYWJsZXQgWTJ8TUUgVGFibGV0IFN5bmNcIixcbiAgICAgICAgXCJEUFNUYWJsZXRcIjogXCJEUFMgRHJlYW0gOXxEUFMgRHVhbCA3XCIsXG4gICAgICAgIFwiVmlzdHVyZVRhYmxldFwiOiBcIlY5NyBIRHxpNzUgM0d8VmlzdHVyZSBWNCggSEQpP3xWaXN0dXJlIFY1KCBIRCk/fFZpc3R1cmUgVjEwXCIsXG4gICAgICAgIFwiQ3Jlc3RhVGFibGV0XCI6IFwiQ1RQKC0pPzgxMHxDVFAoLSk/ODE4fENUUCgtKT84Mjh8Q1RQKC0pPzgzOHxDVFAoLSk/ODg4fENUUCgtKT85Nzh8Q1RQKC0pPzk4MHxDVFAoLSk/OTg3fENUUCgtKT85ODh8Q1RQKC0pPzk4OVwiLFxuICAgICAgICBcIk1lZGlhdGVrVGFibGV0XCI6IFwiXFxcXGJNVDgxMjV8TVQ4Mzg5fE1UODEzNXxNVDgzNzdcXFxcYlwiLFxuICAgICAgICBcIkNvbmNvcmRlVGFibGV0XCI6IFwiQ29uY29yZGUoWyBdKyk/VGFifENvbkNvcmRlIFJlYWRNYW5cIixcbiAgICAgICAgXCJHb0NsZXZlclRhYmxldFwiOiBcIkdPQ0xFVkVSIFRBQnxBN0dPQ0xFVkVSfE0xMDQyfE03ODQxfE03NDJ8UjEwNDJCS3xSMTA0MXxUQUIgQTk3NXxUQUIgQTc4NDJ8VEFCIEE3NDF8VEFCIEE3NDFMfFRBQiBNNzIzR3xUQUIgTTcyMXxUQUIgQTEwMjF8VEFCIEk5MjF8VEFCIFI3MjF8VEFCIEk3MjB8VEFCIFQ3NnxUQUIgUjcwfFRBQiBSNzYuMnxUQUIgUjEwNnxUQUIgUjgzLjJ8VEFCIE04MTNHfFRBQiBJNzIxfEdDVEE3MjJ8VEFCIEk3MHxUQUIgSTcxfFRBQiBTNzN8VEFCIFI3M3xUQUIgUjc0fFRBQiBSOTN8VEFCIFI3NXxUQUIgUjc2LjF8VEFCIEE3M3xUQUIgQTkzfFRBQiBBOTMuMnxUQUIgVDcyfFRBQiBSODN8VEFCIFI5NzR8VEFCIFI5NzN8VEFCIEExMDF8VEFCIEExMDN8VEFCIEExMDR8VEFCIEExMDQuMnxSMTA1Qkt8TTcxM0d8QTk3MkJLfFRBQiBBOTcxfFRBQiBSOTc0LjJ8VEFCIFIxMDR8VEFCIFI4My4zfFRBQiBBMTA0MlwiLFxuICAgICAgICBcIk1vZGVjb21UYWJsZXRcIjogXCJGcmVlVEFCIDkwMDB8RnJlZVRBQiA3LjR8RnJlZVRBQiA3MDA0fEZyZWVUQUIgNzgwMHxGcmVlVEFCIDIwOTZ8RnJlZVRBQiA3LjV8RnJlZVRBQiAxMDE0fEZyZWVUQUIgMTAwMSB8RnJlZVRBQiA4MDAxfEZyZWVUQUIgOTcwNnxGcmVlVEFCIDk3MDJ8RnJlZVRBQiA3MDAzfEZyZWVUQUIgNzAwMnxGcmVlVEFCIDEwMDJ8RnJlZVRBQiA3ODAxfEZyZWVUQUIgMTMzMXxGcmVlVEFCIDEwMDR8RnJlZVRBQiA4MDAyfEZyZWVUQUIgODAxNHxGcmVlVEFCIDk3MDR8RnJlZVRBQiAxMDAzXCIsXG4gICAgICAgIFwiVm9uaW5vVGFibGV0XCI6IFwiXFxcXGIoQXJndXNbIF9dP1N8RGlhbW9uZFsgX10/NzlIRHxFbWVyYWxkWyBfXT83OEV8THVuYVsgX10/NzBDfE9ueXhbIF9dP1N8T255eFsgX10/WnxPcmluWyBfXT9IRHxPcmluWyBfXT9TfE90aXNbIF9dP1N8U3BlZWRTdGFyWyBfXT9TfE1hZ25ldFsgX10/TTl8UHJpbXVzWyBfXT85NFsgX10/M0d8UHJpbXVzWyBfXT85NEhEfFByaW11c1sgX10/UVN8QW5kcm9pZC4qXFxcXGJROFxcXFxifFNpcml1c1sgX10/RVZPWyBfXT9RU3xTaXJpdXNbIF9dP1FTfFNwaXJpdFsgX10/UylcXFxcYlwiLFxuICAgICAgICBcIkVDU1RhYmxldFwiOiBcIlYwN09UMnxUTTEwNUF8UzEwT1QxfFRSMTBDUzFcIixcbiAgICAgICAgXCJTdG9yZXhUYWJsZXRcIjogXCJlWmVlW18nXT8oVGFifEdvKVswLTldK3xUYWJMQzd8TG9vbmV5IFR1bmVzIFRhYlwiLFxuICAgICAgICBcIlZvZGFmb25lVGFibGV0XCI6IFwiU21hcnRUYWIoWyBdKyk/WzAtOV0rfFNtYXJ0VGFiSUkxMHxTbWFydFRhYklJN3xWRi0xNDk3fFZGRCAxNDAwXCIsXG4gICAgICAgIFwiRXNzZW50aWVsQlRhYmxldFwiOiBcIlNtYXJ0WyAnXT9UQUJbIF0rP1swLTldK3xGYW1pbHlbICddP1RBQjJcIixcbiAgICAgICAgXCJSb3NzTW9vclRhYmxldFwiOiBcIlJNLTc5MHxSTS05OTd8Uk1ELTg3OEd8Uk1ELTk3NFJ8Uk1ULTcwNUF8Uk1ULTcwMXxSTUUtNjAxfFJNVC01MDF8Uk1ULTcxMVwiLFxuICAgICAgICBcImlNb2JpbGVUYWJsZXRcIjogXCJpLW1vYmlsZSBpLW5vdGVcIixcbiAgICAgICAgXCJUb2xpbm9UYWJsZXRcIjogXCJ0b2xpbm8gdGFiIFswLTkuXSt8dG9saW5vIHNoaW5lXCIsXG4gICAgICAgIFwiQXVkaW9Tb25pY1RhYmxldFwiOiBcIlxcXFxiQy0yMlF8VDctUUN8VC0xN0J8VC0xN1BcXFxcYlwiLFxuICAgICAgICBcIkFNUEVUYWJsZXRcIjogXCJBbmRyb2lkLiogQTc4IFwiLFxuICAgICAgICBcIlNra1RhYmxldFwiOiBcIkFuZHJvaWQuKiAoU0tZUEFEfFBIT0VOSVh8Q1lDTE9QUylcIixcbiAgICAgICAgXCJUZWNub1RhYmxldFwiOiBcIlRFQ05PIFA5fFRFQ05PIERQOERcIixcbiAgICAgICAgXCJKWERUYWJsZXRcIjogXCJBbmRyb2lkLiogXFxcXGIoRjMwMDB8QTMzMDB8SlhENTAwMHxKWEQzMDAwfEpYRDIwMDB8SlhEMzAwQnxKWEQzMDB8UzU4MDB8Uzc4MDB8UzYwMmJ8UzUxMTBifFM3MzAwfFM1MzAwfFM2MDJ8UzYwM3xTNTEwMHxTNTExMHxTNjAxfFM3MTAwYXxQMzAwMEZ8UDMwMDBzfFAxMDF8UDIwMHN8UDEwMDBtfFAyMDBtfFA5MTAwfFAxMDAwc3xTNjYwMGJ8UzkwOHxQMTAwMHxQMzAwfFMxOHxTNjYwMHxTOTEwMClcXFxcYlwiLFxuICAgICAgICBcImlKb3lUYWJsZXRcIjogXCJUYWJsZXQgKFNwaXJpdCA3fEVzc2VudGlhfEdhbGF0ZWF8RnVzaW9ufE9uaXggN3xMYW5kYXxUaXRhbnxTY29vYnl8RGVveHxTdGVsbGF8VGhlbWlzfEFyZ29ufFVuaXF1ZSA3fFN5Z251c3xIZXhlbnxGaW5pdHkgN3xDcmVhbXxDcmVhbSBYMnxKYWRlfE5lb24gN3xOZXJvbiA3fEthbmR5fFNjYXBlfFNhcGh5ciA3fFJlYmVsfEJpb3h8UmViZWx8UmViZWwgOEdCfE15c3R8RHJhY28gN3xNeXN0fFRhYjctMDA0fE15c3R8VGFkZW8gSm9uZXN8VGFibGV0IEJvaW5nfEFycm93fERyYWNvIER1YWwgQ2FtfEF1cml4fE1pbnR8QW1pdHl8UmV2b2x1dGlvbnxGaW5pdHkgOXxOZW9uIDl8VDl3fEFtaXR5IDRHQiBEdWFsIENhbXxTdG9uZSA0R0J8U3RvbmUgOEdCfEFuZHJvbWVkYXxTaWxrZW58WDJ8QW5kcm9tZWRhIElJfEhhbGxleXxGbGFtZXxTYXBoeXIgOSw3fFRvdWNoIDh8UGxhbmV0fFRyaXRvbnxVbmlxdWUgMTB8SGV4ZW4gMTB8TWVtcGhpcyA0R0J8TWVtcGhpcyA4R0J8T25peCAxMClcIixcbiAgICAgICAgXCJGWDJUYWJsZXRcIjogXCJGWDIgUEFEN3xGWDIgUEFEMTBcIixcbiAgICAgICAgXCJYb3JvVGFibGV0XCI6IFwiS2lkc1BBRCA3MDF8UEFEWyBdPzcxMnxQQURbIF0/NzE0fFBBRFsgXT83MTZ8UEFEWyBdPzcxN3xQQURbIF0/NzE4fFBBRFsgXT83MjB8UEFEWyBdPzcyMXxQQURbIF0/NzIyfFBBRFsgXT83OTB8UEFEWyBdPzc5MnxQQURbIF0/OTAwfFBBRFsgXT85NzE1RHxQQURbIF0/OTcxNkRSfFBBRFsgXT85NzE4RFJ8UEFEWyBdPzk3MTlRUnxQQURbIF0/OTcyMFFSfFRlbGVQQUQxMDMwfFRlbGVwYWQxMDMyfFRlbGVQQUQ3MzB8VGVsZVBBRDczMXxUZWxlUEFENzMyfFRlbGVQQUQ3MzVRfFRlbGVQQUQ4MzB8VGVsZVBBRDk3MzB8VGVsZVBBRDc5NXxNZWdhUEFEIDEzMzF8TWVnYVBBRCAxODUxfE1lZ2FQQUQgMjE1MVwiLFxuICAgICAgICBcIlZpZXdzb25pY1RhYmxldFwiOiBcIlZpZXdQYWQgMTBwaXxWaWV3UGFkIDEwZXxWaWV3UGFkIDEwc3xWaWV3UGFkIEU3MnxWaWV3UGFkN3xWaWV3UGFkIEUxMDB8Vmlld1BhZCA3ZXxWaWV3U29uaWMgVkI3MzN8VkIxMDBhXCIsXG4gICAgICAgIFwiVmVyaXpvblRhYmxldFwiOiBcIlFUQVFaM3xRVEFJUjd8UVRBUVRaM3xRVEFTVU4xfFFUQVNVTjJ8UVRBWElBMVwiLFxuICAgICAgICBcIk9keXNUYWJsZXRcIjogXCJMT09YfFhFTk8xMHxPRFlTWyAtXShTcGFjZXxFVk98WHByZXNzfE5PT04pfFxcXFxiWEVMSU9cXFxcYnxYZWxpbzEwUHJvfFhFTElPN1BIT05FVEFCfFhFTElPMTBFWFRSRU1FfFhFTElPUFQyfE5FT19RVUFEMTBcIixcbiAgICAgICAgXCJDYXB0aXZhVGFibGV0XCI6IFwiQ0FQVElWQSBQQURcIixcbiAgICAgICAgXCJJY29uYml0VGFibGV0XCI6IFwiTmV0VEFCfE5ULTM3MDJ8TlQtMzcwMlN8TlQtMzcwMlN8TlQtMzYwM1B8TlQtMzYwM1B8TlQtMDcwNFN8TlQtMDcwNFN8TlQtMzgwNUN8TlQtMzgwNUN8TlQtMDgwNkN8TlQtMDgwNkN8TlQtMDkwOVR8TlQtMDkwOVR8TlQtMDkwN1N8TlQtMDkwN1N8TlQtMDkwMlN8TlQtMDkwMlNcIixcbiAgICAgICAgXCJUZWNsYXN0VGFibGV0XCI6IFwiVDk4IDRHfFxcXFxiUDgwXFxcXGJ8XFxcXGJYOTBIRFxcXFxifFg5OCBBaXJ8WDk4IEFpciAzR3xcXFxcYlg4OVxcXFxifFA4MCAzR3xcXFxcYlg4MGhcXFxcYnxQOTggQWlyfFxcXFxiWDg5SERcXFxcYnxQOTggM0d8XFxcXGJQOTBIRFxcXFxifFA4OSAzR3xYOTggM0d8XFxcXGJQNzBoXFxcXGJ8UDc5SEQgM0d8RzE4ZCAzR3xcXFxcYlA3OUhEXFxcXGJ8XFxcXGJQODlzXFxcXGJ8XFxcXGJBODhcXFxcYnxcXFxcYlAxMEhEXFxcXGJ8XFxcXGJQMTlIRFxcXFxifEcxOCAzR3xcXFxcYlA3OEhEXFxcXGJ8XFxcXGJBNzhcXFxcYnxcXFxcYlA3NVxcXFxifEcxN3MgM0d8RzE3aCAzR3xcXFxcYlA4NXRcXFxcYnxcXFxcYlA5MFxcXFxifFxcXFxiUDExXFxcXGJ8XFxcXGJQOTh0XFxcXGJ8XFxcXGJQOThIRFxcXFxifFxcXFxiRzE4ZFxcXFxifFxcXFxiUDg1c1xcXFxifFxcXFxiUDExSERcXFxcYnxcXFxcYlA4OHNcXFxcYnxcXFxcYkE4MEhEXFxcXGJ8XFxcXGJBODBzZVxcXFxifFxcXFxiQTEwaFxcXFxifFxcXFxiUDg5XFxcXGJ8XFxcXGJQNzhzXFxcXGJ8XFxcXGJHMThcXFxcYnxcXFxcYlA4NVxcXFxifFxcXFxiQTcwaFxcXFxifFxcXFxiQTcwXFxcXGJ8XFxcXGJHMTdcXFxcYnxcXFxcYlAxOFxcXFxifFxcXFxiQTgwc1xcXFxifFxcXFxiQTExc1xcXFxifFxcXFxiUDg4SERcXFxcYnxcXFxcYkE4MGhcXFxcYnxcXFxcYlA3NnNcXFxcYnxcXFxcYlA3NmhcXFxcYnxcXFxcYlA5OFxcXFxifFxcXFxiQTEwSERcXFxcYnxcXFxcYlA3OFxcXFxifFxcXFxiUDg4XFxcXGJ8XFxcXGJBMTFcXFxcYnxcXFxcYkExMHRcXFxcYnxcXFxcYlA3NmFcXFxcYnxcXFxcYlA3NnRcXFxcYnxcXFxcYlA3NmVcXFxcYnxcXFxcYlA4NUhEXFxcXGJ8XFxcXGJQODVhXFxcXGJ8XFxcXGJQODZcXFxcYnxcXFxcYlA3NUhEXFxcXGJ8XFxcXGJQNzZ2XFxcXGJ8XFxcXGJBMTJcXFxcYnxcXFxcYlA3NWFcXFxcYnxcXFxcYkExNVxcXFxifFxcXFxiUDc2VGlcXFxcYnxcXFxcYlA4MUhEXFxcXGJ8XFxcXGJBMTBcXFxcYnxcXFxcYlQ3NjBWRVxcXFxifFxcXFxiVDcyMEhEXFxcXGJ8XFxcXGJQNzZcXFxcYnxcXFxcYlA3M1xcXFxifFxcXFxiUDcxXFxcXGJ8XFxcXGJQNzJcXFxcYnxcXFxcYlQ3MjBTRVxcXFxifFxcXFxiQzUyMFRpXFxcXGJ8XFxcXGJUNzYwXFxcXGJ8XFxcXGJUNzIwVkVcXFxcYnxUNzIwLTNHRXxUNzIwLVdpRmlcIixcbiAgICAgICAgXCJPbmRhVGFibGV0XCI6IFwiXFxcXGIoVjk3NWl8VmkzMHxWWDUzMHxWNzAxfFZpNjB8VjcwMXN8Vmk1MHxWODAxc3xWNzE5fFZ4NjEwd3xWWDYxMFd8VjgxOWl8VmkxMHxWWDU4MFd8VmkxMHxWNzExc3xWODEzfFY4MTF8VjgyMHd8VjgyMHxWaTIwfFY3MTF8VkkzMFd8VjcxMnxWODkxd3xWOTcyfFY4MTl3fFY4MjB3fFZpNjB8VjgyMHd8VjcxMXxWODEzc3xWODAxfFY4MTl8Vjk3NXN8VjgwMXxWODE5fFY4MTl8VjgxOHxWODExfFY3MTJ8Vjk3NW18VjEwMXd8Vjk2MXd8VjgxMnxWODE4fFY5NzF8Vjk3MXN8VjkxOXxWOTg5fFYxMTZ3fFYxMDJ3fFY5NzN8Vmk0MClcXFxcYltcXFxcc10rfFYxMCBcXFxcYjRHXFxcXGJcIixcbiAgICAgICAgXCJKYXl0ZWNoVGFibGV0XCI6IFwiVFBDLVBBNzYyXCIsXG4gICAgICAgIFwiQmxhdXB1bmt0VGFibGV0XCI6IFwiRW5kZWF2b3VyIDgwME5HfEVuZGVhdm91ciAxMDEwXCIsXG4gICAgICAgIFwiRGlnbWFUYWJsZXRcIjogXCJcXFxcYihpRHgxMHxpRHg5fGlEeDh8aUR4N3xpRHhEN3xpRHhEOHxpRHNROHxpRHNRN3xpRHNROHxpRHNEMTB8aURuRDd8M1RTODA0SHxpRHNRMTF8aURqN3xpRHMxMClcXFxcYlwiLFxuICAgICAgICBcIkV2b2xpb1RhYmxldFwiOiBcIkFSSUFfTWluaV93aWZpfEFyaWFbIF9dTWluaXxFdm9saW8gWDEwfEV2b2xpbyBYN3xFdm9saW8gWDh8XFxcXGJFdm90YWJcXFxcYnxcXFxcYk5ldXJhXFxcXGJcIixcbiAgICAgICAgXCJMYXZhVGFibGV0XCI6IFwiUVBBRCBFNzA0fFxcXFxiSXZvcnlTXFxcXGJ8RS1UQUIgSVZPUll8XFxcXGJFLVRBQlxcXFxiXCIsXG4gICAgICAgIFwiQW9jVGFibGV0XCI6IFwiTVcwODExfE1XMDgxMnxNVzA5MjJ8TVRLODM4MnxNVzEwMzF8TVcwODMxfE1XMDgyMXxNVzA5MzF8TVcwNzEyXCIsXG4gICAgICAgIFwiTXBtYW5UYWJsZXRcIjogXCJNUDExIE9DVEF8TVAxMCBPQ1RBfE1QUUMxMTE0fE1QUUMxMDA0fE1QUUM5OTR8TVBRQzk3NHxNUFFDOTczfE1QUUM4MDR8TVBRQzc4NHxNUFFDNzgwfFxcXFxiTVBHN1xcXFxifE1QRENHNzV8TVBEQ0c3MXxNUERDMTAwNnxNUDEwMURDfE1QREM5MDAwfE1QREM5MDV8TVBEQzcwNkhEfE1QREM3MDZ8TVBEQzcwNXxNUERDMTEwfE1QREMxMDB8TVBEQzk5fE1QREM5N3xNUERDODh8TVBEQzh8TVBEQzc3fE1QNzA5fE1JRDcwMXxNSUQ3MTF8TUlEMTcwfE1QREM3MDN8TVBRQzEwMTBcIixcbiAgICAgICAgXCJDZWxrb25UYWJsZXRcIjogXCJDVDY5NXxDVDg4OHxDVFtcXFxcc10/OTEwfENUNyBUYWJ8Q1Q5IFRhYnxDVDMgVGFifENUMiBUYWJ8Q1QxIFRhYnxDODIwfEM3MjB8XFxcXGJDVC0xXFxcXGJcIixcbiAgICAgICAgXCJXb2xkZXJUYWJsZXRcIjogXCJtaVRhYiBcXFxcYihESUFNT05EfFNQQUNFfEJST09LTFlOfE5FT3xGTFl8TUFOSEFUVEFOfEZVTkt8RVZPTFVUSU9OfFNLWXxHT0NBUnxJUk9OfEdFTklVU3xQT1B8TUlOVHxFUFNJTE9OfEJST0FEV0FZfEpVTVB8SE9QfExFR0VORHxORVcgQUdFfExJTkV8QURWQU5DRXxGRUVMfEZPTExPV3xMSUtFfExJTkt8TElWRXxUSElOS3xGUkVFRE9NfENISUNBR098Q0xFVkVMQU5EfEJBTFRJTU9SRS1HSHxJT1dBfEJPU1RPTnxTRUFUVExFfFBIT0VOSVh8REFMTEFTfElOIDEwMXxNYXN0ZXJDaGVmKVxcXFxiXCIsXG4gICAgICAgIFwiTWVkaWFjb21UYWJsZXRcIjogXCJNLU1QSTEwQzNHfE0tU1AxMEVHfE0tU1AxMEVHUHxNLVNQMTBIWEFIfE0tU1A3SFhBSHxNLVNQMTBIWEJIfE0tU1A4SFhBSHxNLVNQOE1YQVwiLFxuICAgICAgICBcIk1pVGFibGV0XCI6IFwiXFxcXGJNSSBQQURcXFxcYnxcXFxcYkhNIE5PVEUgMVdcXFxcYlwiLFxuICAgICAgICBcIk5pYmlydVRhYmxldFwiOiBcIk5pYmlydSBNMXxOaWJpcnUgSnVwaXRlciBPbmVcIixcbiAgICAgICAgXCJOZXhvVGFibGV0XCI6IFwiTkVYTyBOT1ZBfE5FWE8gMTB8TkVYTyBBVklPfE5FWE8gRlJFRXxORVhPIEdPfE5FWE8gRVZPfE5FWE8gM0d8TkVYTyBTTUFSVHxORVhPIEtJRERPfE5FWE8gTU9CSVwiLFxuICAgICAgICBcIkxlYWRlclRhYmxldFwiOiBcIlRCTFQxMFF8VEJMVDEwSXxUQkwtMTBXREtCfFRCTC0xMFdES0JPMjAxM3xUQkwtVzIzMFYyfFRCTC1XNDUwfFRCTC1XNTAwfFNWNTcyfFRCTFQ3SXxUQkEtQUM3LThHfFRCTFQ3OXxUQkwtOFcxNnxUQkwtMTBXMzJ8VEJMLTEwV0tCfFRCTC1XMTAwXCIsXG4gICAgICAgIFwiVWJpc2xhdGVUYWJsZXRcIjogXCJVYmlTbGF0ZVtcXFxcc10/N0NcIixcbiAgICAgICAgXCJQb2NrZXRCb29rVGFibGV0XCI6IFwiUG9ja2V0Ym9va1wiLFxuICAgICAgICBcIktvY2Fzb1RhYmxldFwiOiBcIlxcXFxiKFRCLTEyMDcpXFxcXGJcIixcbiAgICAgICAgXCJIaXNlbnNlVGFibGV0XCI6IFwiXFxcXGIoRjUyODF8RTIzNzEpXFxcXGJcIixcbiAgICAgICAgXCJIdWRsXCI6IFwiSHVkbCBIVDdTM3xIdWRsIDJcIixcbiAgICAgICAgXCJUZWxzdHJhVGFibGV0XCI6IFwiVC1IdWIyXCIsXG4gICAgICAgIFwiR2VuZXJpY1RhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiOTdEXFxcXGJ8VGFibGV0KD8hLipQQyl8Qk5UVjI1MEF8TUlELVdDRE1BfExvZ2ljUEQgWm9vbTJ8XFxcXGJBN0VCXFxcXGJ8Q2F0Tm92YTh8QTFfMDd8Q1Q3MDR8Q1QxMDAyfFxcXFxiTTcyMVxcXFxifHJrMzBzZGt8XFxcXGJFVk9UQUJcXFxcYnxNNzU4QXxFVDkwNHxBTFVNSVVNMTB8U21hcnRmcmVuIFRhYnxFbmRlYXZvdXIgMTAxMHxUYWJsZXQtUEMtNHxUYWdpIFRhYnxcXFxcYk02cHJvXFxcXGJ8Q1QxMDIwV3xhcmMgMTBIRHxcXFxcYlRQNzUwXFxcXGJ8XFxcXGJRVEFRWjNcXFxcYnxXVlQxMDF8VE0xMDg4fEtUMTA3XCJcbiAgICB9LFxuICAgIFwib3NzXCI6IHtcbiAgICAgICAgXCJBbmRyb2lkT1NcIjogXCJBbmRyb2lkXCIsXG4gICAgICAgIFwiQmxhY2tCZXJyeU9TXCI6IFwiYmxhY2tiZXJyeXxcXFxcYkJCMTBcXFxcYnxyaW0gdGFibGV0IG9zXCIsXG4gICAgICAgIFwiUGFsbU9TXCI6IFwiUGFsbU9TfGF2YW50Z298YmxhemVyfGVsYWluZXxoaXB0b3B8cGFsbXxwbHVja2VyfHhpaW5vXCIsXG4gICAgICAgIFwiU3ltYmlhbk9TXCI6IFwiU3ltYmlhbnxTeW1iT1N8U2VyaWVzNjB8U2VyaWVzNDB8U1lCLVswLTldK3xcXFxcYlM2MFxcXFxiXCIsXG4gICAgICAgIFwiV2luZG93c01vYmlsZU9TXCI6IFwiV2luZG93cyBDRS4qKFBQQ3xTbWFydHBob25lfE1vYmlsZXxbMC05XXszfXhbMC05XXszfSl8V2luZG93cyBNb2JpbGV8V2luZG93cyBQaG9uZSBbMC05Ll0rfFdDRTtcIixcbiAgICAgICAgXCJXaW5kb3dzUGhvbmVPU1wiOiBcIldpbmRvd3MgUGhvbmUgMTAuMHxXaW5kb3dzIFBob25lIDguMXxXaW5kb3dzIFBob25lIDguMHxXaW5kb3dzIFBob25lIE9TfFhCTFdQN3xadW5lV1A3fFdpbmRvd3MgTlQgNi5bMjNdOyBBUk07XCIsXG4gICAgICAgIFwiaU9TXCI6IFwiXFxcXGJpUGhvbmUuKk1vYmlsZXxcXFxcYmlQb2R8XFxcXGJpUGFkfEFwcGxlQ29yZU1lZGlhXCIsXG4gICAgICAgIFwiaVBhZE9TXCI6IFwiQ1BVIE9TIDEzXCIsXG4gICAgICAgIFwiTWVlR29PU1wiOiBcIk1lZUdvXCIsXG4gICAgICAgIFwiTWFlbW9PU1wiOiBcIk1hZW1vXCIsXG4gICAgICAgIFwiSmF2YU9TXCI6IFwiSjJNRVxcL3xcXFxcYk1JRFBcXFxcYnxcXFxcYkNMRENcXFxcYlwiLFxuICAgICAgICBcIndlYk9TXCI6IFwid2ViT1N8aHB3T1NcIixcbiAgICAgICAgXCJiYWRhT1NcIjogXCJcXFxcYkJhZGFcXFxcYlwiLFxuICAgICAgICBcIkJSRVdPU1wiOiBcIkJSRVdcIlxuICAgIH0sXG4gICAgXCJ1YXNcIjoge1xuICAgICAgICBcIkNocm9tZVwiOiBcIlxcXFxiQ3JNb1xcXFxifENyaU9TfEFuZHJvaWQuKkNocm9tZVxcL1suMC05XSogKE1vYmlsZSk/XCIsXG4gICAgICAgIFwiRG9sZmluXCI6IFwiXFxcXGJEb2xmaW5cXFxcYlwiLFxuICAgICAgICBcIk9wZXJhXCI6IFwiT3BlcmEuKk1pbml8T3BlcmEuKk1vYml8QW5kcm9pZC4qT3BlcmF8TW9iaWxlLipPUFJcXC9bMC05Ll0rJHxDb2FzdFxcL1swLTkuXStcIixcbiAgICAgICAgXCJTa3lmaXJlXCI6IFwiU2t5ZmlyZVwiLFxuICAgICAgICBcIkVkZ2VcIjogXCJNb2JpbGUgU2FmYXJpXFwvWy4wLTldKiBFZGdlXCIsXG4gICAgICAgIFwiSUVcIjogXCJJRU1vYmlsZXxNU0lFTW9iaWxlXCIsXG4gICAgICAgIFwiRmlyZWZveFwiOiBcImZlbm5lY3xmaXJlZm94LiptYWVtb3woTW9iaWxlfFRhYmxldCkuKkZpcmVmb3h8RmlyZWZveC4qTW9iaWxlfEZ4aU9TXCIsXG4gICAgICAgIFwiQm9sdFwiOiBcImJvbHRcIixcbiAgICAgICAgXCJUZWFTaGFya1wiOiBcInRlYXNoYXJrXCIsXG4gICAgICAgIFwiQmxhemVyXCI6IFwiQmxhemVyXCIsXG4gICAgICAgIFwiU2FmYXJpXCI6IFwiVmVyc2lvbi4qTW9iaWxlLipTYWZhcml8U2FmYXJpLipNb2JpbGV8TW9iaWxlU2FmYXJpXCIsXG4gICAgICAgIFwiV2VDaGF0XCI6IFwiXFxcXGJNaWNyb01lc3NlbmdlclxcXFxiXCIsXG4gICAgICAgIFwiVUNCcm93c2VyXCI6IFwiVUMuKkJyb3dzZXJ8VUNXRUJcIixcbiAgICAgICAgXCJiYWlkdWJveGFwcFwiOiBcImJhaWR1Ym94YXBwXCIsXG4gICAgICAgIFwiYmFpZHVicm93c2VyXCI6IFwiYmFpZHVicm93c2VyXCIsXG4gICAgICAgIFwiRGlpZ29Ccm93c2VyXCI6IFwiRGlpZ29Ccm93c2VyXCIsXG4gICAgICAgIFwiTWVyY3VyeVwiOiBcIlxcXFxiTWVyY3VyeVxcXFxiXCIsXG4gICAgICAgIFwiT2JpZ29Ccm93c2VyXCI6IFwiT2JpZ29cIixcbiAgICAgICAgXCJOZXRGcm9udFwiOiBcIk5GLUJyb3dzZXJcIixcbiAgICAgICAgXCJHZW5lcmljQnJvd3NlclwiOiBcIk5va2lhQnJvd3NlcnxPdmlCcm93c2VyfE9uZUJyb3dzZXJ8VHdvbmt5QmVhbUJyb3dzZXJ8U0VNQy4qQnJvd3NlcnxGbHlGbG93fE1pbmltb3xOZXRGcm9udHxOb3ZhcnJhLVZpc2lvbnxNUVFCcm93c2VyfE1pY3JvTWVzc2VuZ2VyXCIsXG4gICAgICAgIFwiUGFsZU1vb25cIjogXCJBbmRyb2lkLipQYWxlTW9vbnxNb2JpbGUuKlBhbGVNb29uXCJcbiAgICB9LFxuICAgIFwicHJvcHNcIjoge1xuICAgICAgICBcIk1vYmlsZVwiOiBcIk1vYmlsZVxcL1tWRVJdXCIsXG4gICAgICAgIFwiQnVpbGRcIjogXCJCdWlsZFxcL1tWRVJdXCIsXG4gICAgICAgIFwiVmVyc2lvblwiOiBcIlZlcnNpb25cXC9bVkVSXVwiLFxuICAgICAgICBcIlZlbmRvcklEXCI6IFwiVmVuZG9ySURcXC9bVkVSXVwiLFxuICAgICAgICBcImlQYWRcIjogXCJpUGFkLipDUFVbYS16IF0rW1ZFUl1cIixcbiAgICAgICAgXCJpUGhvbmVcIjogXCJpUGhvbmUuKkNQVVthLXogXStbVkVSXVwiLFxuICAgICAgICBcImlQb2RcIjogXCJpUG9kLipDUFVbYS16IF0rW1ZFUl1cIixcbiAgICAgICAgXCJLaW5kbGVcIjogXCJLaW5kbGVcXC9bVkVSXVwiLFxuICAgICAgICBcIkNocm9tZVwiOiBbXG4gICAgICAgICAgICBcIkNocm9tZVxcL1tWRVJdXCIsXG4gICAgICAgICAgICBcIkNyaU9TXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiQ3JNb1xcL1tWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJDb2FzdFwiOiBbXG4gICAgICAgICAgICBcIkNvYXN0XFwvW1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIkRvbGZpblwiOiBcIkRvbGZpblxcL1tWRVJdXCIsXG4gICAgICAgIFwiRmlyZWZveFwiOiBbXG4gICAgICAgICAgICBcIkZpcmVmb3hcXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJGeGlPU1xcL1tWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJGZW5uZWNcIjogXCJGZW5uZWNcXC9bVkVSXVwiLFxuICAgICAgICBcIkVkZ2VcIjogXCJFZGdlXFwvW1ZFUl1cIixcbiAgICAgICAgXCJJRVwiOiBbXG4gICAgICAgICAgICBcIklFTW9iaWxlXFwvW1ZFUl07XCIsXG4gICAgICAgICAgICBcIklFTW9iaWxlIFtWRVJdXCIsXG4gICAgICAgICAgICBcIk1TSUUgW1ZFUl07XCIsXG4gICAgICAgICAgICBcIlRyaWRlbnRcXC9bMC05Ll0rOy4qcnY6W1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIk5ldEZyb250XCI6IFwiTmV0RnJvbnRcXC9bVkVSXVwiLFxuICAgICAgICBcIk5va2lhQnJvd3NlclwiOiBcIk5va2lhQnJvd3NlclxcL1tWRVJdXCIsXG4gICAgICAgIFwiT3BlcmFcIjogW1xuICAgICAgICAgICAgXCIgT1BSXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiT3BlcmEgTWluaVxcL1tWRVJdXCIsXG4gICAgICAgICAgICBcIlZlcnNpb25cXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiT3BlcmEgTWluaVwiOiBcIk9wZXJhIE1pbmlcXC9bVkVSXVwiLFxuICAgICAgICBcIk9wZXJhIE1vYmlcIjogXCJWZXJzaW9uXFwvW1ZFUl1cIixcbiAgICAgICAgXCJVQ0Jyb3dzZXJcIjogW1xuICAgICAgICAgICAgXCJVQ1dFQltWRVJdXCIsXG4gICAgICAgICAgICBcIlVDLipCcm93c2VyXFwvW1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIk1RUUJyb3dzZXJcIjogXCJNUVFCcm93c2VyXFwvW1ZFUl1cIixcbiAgICAgICAgXCJNaWNyb01lc3NlbmdlclwiOiBcIk1pY3JvTWVzc2VuZ2VyXFwvW1ZFUl1cIixcbiAgICAgICAgXCJiYWlkdWJveGFwcFwiOiBcImJhaWR1Ym94YXBwXFwvW1ZFUl1cIixcbiAgICAgICAgXCJiYWlkdWJyb3dzZXJcIjogXCJiYWlkdWJyb3dzZXJcXC9bVkVSXVwiLFxuICAgICAgICBcIlNhbXN1bmdCcm93c2VyXCI6IFwiU2Ftc3VuZ0Jyb3dzZXJcXC9bVkVSXVwiLFxuICAgICAgICBcIklyb25cIjogXCJJcm9uXFwvW1ZFUl1cIixcbiAgICAgICAgXCJTYWZhcmlcIjogW1xuICAgICAgICAgICAgXCJWZXJzaW9uXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiU2FmYXJpXFwvW1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIlNreWZpcmVcIjogXCJTa3lmaXJlXFwvW1ZFUl1cIixcbiAgICAgICAgXCJUaXplblwiOiBcIlRpemVuXFwvW1ZFUl1cIixcbiAgICAgICAgXCJXZWJraXRcIjogXCJ3ZWJraXRbIFxcL11bVkVSXVwiLFxuICAgICAgICBcIlBhbGVNb29uXCI6IFwiUGFsZU1vb25cXC9bVkVSXVwiLFxuICAgICAgICBcIkdlY2tvXCI6IFwiR2Vja29cXC9bVkVSXVwiLFxuICAgICAgICBcIlRyaWRlbnRcIjogXCJUcmlkZW50XFwvW1ZFUl1cIixcbiAgICAgICAgXCJQcmVzdG9cIjogXCJQcmVzdG9cXC9bVkVSXVwiLFxuICAgICAgICBcIkdvYW5uYVwiOiBcIkdvYW5uYVxcL1tWRVJdXCIsXG4gICAgICAgIFwiaU9TXCI6IFwiIFxcXFxiaT9PU1xcXFxiIFtWRVJdWyA7XXsxfVwiLFxuICAgICAgICBcIkFuZHJvaWRcIjogXCJBbmRyb2lkIFtWRVJdXCIsXG4gICAgICAgIFwiQmxhY2tCZXJyeVwiOiBbXG4gICAgICAgICAgICBcIkJsYWNrQmVycnlbXFxcXHddK1xcL1tWRVJdXCIsXG4gICAgICAgICAgICBcIkJsYWNrQmVycnkuKlZlcnNpb25cXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJWZXJzaW9uXFwvW1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIkJSRVdcIjogXCJCUkVXIFtWRVJdXCIsXG4gICAgICAgIFwiSmF2YVwiOiBcIkphdmFcXC9bVkVSXVwiLFxuICAgICAgICBcIldpbmRvd3MgUGhvbmUgT1NcIjogW1xuICAgICAgICAgICAgXCJXaW5kb3dzIFBob25lIE9TIFtWRVJdXCIsXG4gICAgICAgICAgICBcIldpbmRvd3MgUGhvbmUgW1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIldpbmRvd3MgUGhvbmVcIjogXCJXaW5kb3dzIFBob25lIFtWRVJdXCIsXG4gICAgICAgIFwiV2luZG93cyBDRVwiOiBcIldpbmRvd3MgQ0VcXC9bVkVSXVwiLFxuICAgICAgICBcIldpbmRvd3MgTlRcIjogXCJXaW5kb3dzIE5UIFtWRVJdXCIsXG4gICAgICAgIFwiU3ltYmlhblwiOiBbXG4gICAgICAgICAgICBcIlN5bWJpYW5PU1xcL1tWRVJdXCIsXG4gICAgICAgICAgICBcIlN5bWJpYW5cXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwid2ViT1NcIjogW1xuICAgICAgICAgICAgXCJ3ZWJPU1xcL1tWRVJdXCIsXG4gICAgICAgICAgICBcImhwd09TXFwvW1ZFUl07XCJcbiAgICAgICAgXVxuICAgIH0sXG4gICAgXCJ1dGlsc1wiOiB7XG4gICAgICAgIFwiQm90XCI6IFwiR29vZ2xlYm90fGZhY2Vib29rZXh0ZXJuYWxoaXR8R29vZ2xlLUFNUEhUTUx8c35hbXAtdmFsaWRhdG9yfEFkc0JvdC1Hb29nbGV8R29vZ2xlIEtleXdvcmQgU3VnZ2VzdGlvbnxGYWNlYm90fFlhbmRleEJvdHxZYW5kZXhNb2JpbGVCb3R8YmluZ2JvdHxpYV9hcmNoaXZlcnxBaHJlZnNCb3R8RXpvb21zfEdTTEZib3R8V0JTZWFyY2hCb3R8VHdpdHRlcmJvdHxUd2VldG1lbWVCb3R8VHdpa2xlfFBhcGVyTGlCb3R8V290Ym94fFVud2luZEZldGNob3J8RXhhYm90fE1KMTJib3R8WWFuZGV4SW1hZ2VzfFR1cm5pdGluQm90fFBpbmdkb218Y29udGVudGtpbmdhcHBcIixcbiAgICAgICAgXCJNb2JpbGVCb3RcIjogXCJHb29nbGVib3QtTW9iaWxlfEFkc0JvdC1Hb29nbGUtTW9iaWxlfFlhaG9vU2Vla2VyXFwvTTFBMS1SMkQyXCIsXG4gICAgICAgIFwiRGVza3RvcE1vZGVcIjogXCJXUERlc2t0b3BcIixcbiAgICAgICAgXCJUVlwiOiBcIlNvbnlEVFZ8SGJiVFZcIixcbiAgICAgICAgXCJXZWJLaXRcIjogXCIod2Via2l0KVsgXFwvXShbXFxcXHcuXSspXCIsXG4gICAgICAgIFwiQ29uc29sZVwiOiBcIlxcXFxiKE5pbnRlbmRvfE5pbnRlbmRvIFdpaVV8TmludGVuZG8gM0RTfE5pbnRlbmRvIFN3aXRjaHxQTEFZU1RBVElPTnxYYm94KVxcXFxiXCIsXG4gICAgICAgIFwiV2F0Y2hcIjogXCJTTS1WNzAwXCJcbiAgICB9XG59O1xuXG4gICAgLy8gZm9sbG93aW5nIHBhdHRlcm5zIGNvbWUgZnJvbSBodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tL1xuICAgIGltcGwuZGV0ZWN0TW9iaWxlQnJvd3NlcnMgPSB7XG4gICAgICAgIGZ1bGxQYXR0ZXJuOiAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2ksXG4gICAgICAgIHNob3J0UGF0dGVybjogLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2ksXG4gICAgICAgIHRhYmxldFBhdHRlcm46IC9hbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pXG4gICAgfTtcblxuICAgIHZhciBoYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgaXNBcnJheTtcblxuICAgIGltcGwuRkFMTEJBQ0tfUEhPTkUgPSAnVW5rbm93blBob25lJztcbiAgICBpbXBsLkZBTExCQUNLX1RBQkxFVCA9ICdVbmtub3duVGFibGV0JztcbiAgICBpbXBsLkZBTExCQUNLX01PQklMRSA9ICdVbmtub3duTW9iaWxlJztcblxuICAgIGlzQXJyYXkgPSAoJ2lzQXJyYXknIGluIEFycmF5KSA/XG4gICAgICAgIEFycmF5LmlzQXJyYXkgOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7IH07XG5cbiAgICBmdW5jdGlvbiBlcXVhbElDKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgIT0gbnVsbCAmJiBiICE9IG51bGwgJiYgYS50b0xvd2VyQ2FzZSgpID09PSBiLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udGFpbnNJQyhhcnJheSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlTEMsIGksIGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgaWYgKCFsZW4gfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVMQyA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlTEMgPT09IGFycmF5W2ldLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udmVydFByb3BzVG9SZWdFeHAob2JqZWN0KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBuZXcgUmVnRXhwKG9iamVjdFtrZXldLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJlcGFyZVVzZXJBZ2VudCh1c2VyQWdlbnQpIHtcbiAgICAgICAgcmV0dXJuICh1c2VyQWdlbnQgfHwgJycpLnN1YnN0cigwLCA1MDApOyAvLyBtaXRpZ2F0ZSB2dWxuZXJhYmxlIHRvIFJlRG9TXG4gICAgfVxuXG4gICAgKGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBrZXksIHZhbHVlcywgdmFsdWUsIGksIGxlbiwgdmVyUG9zLCBtb2JpbGVEZXRlY3RSdWxlcyA9IGltcGwubW9iaWxlRGV0ZWN0UnVsZXM7XG4gICAgICAgIGZvciAoa2V5IGluIG1vYmlsZURldGVjdFJ1bGVzLnByb3BzKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKG1vYmlsZURldGVjdFJ1bGVzLnByb3BzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gbW9iaWxlRGV0ZWN0UnVsZXMucHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVuID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZlclBvcyA9IHZhbHVlLmluZGV4T2YoJ1tWRVJdJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2ZXJQb3MgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdmVyUG9zKSArICcoW1xcXFx3Ll9cXFxcK10rKScgKyB2YWx1ZS5zdWJzdHJpbmcodmVyUG9zICsgNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ldID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW9iaWxlRGV0ZWN0UnVsZXMucHJvcHNba2V5XSA9IHZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb252ZXJ0UHJvcHNUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlcy5vc3MpO1xuICAgICAgICBjb252ZXJ0UHJvcHNUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlcy5waG9uZXMpO1xuICAgICAgICBjb252ZXJ0UHJvcHNUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlcy50YWJsZXRzKTtcbiAgICAgICAgY29udmVydFByb3BzVG9SZWdFeHAobW9iaWxlRGV0ZWN0UnVsZXMudWFzKTtcbiAgICAgICAgY29udmVydFByb3BzVG9SZWdFeHAobW9iaWxlRGV0ZWN0UnVsZXMudXRpbHMpO1xuXG4gICAgICAgIC8vIGNvcHkgc29tZSBwYXR0ZXJucyB0byBvc3MwIHdoaWNoIGFyZSB0ZXN0ZWQgZmlyc3QgKHNlZSBpc3N1ZSMxNSlcbiAgICAgICAgbW9iaWxlRGV0ZWN0UnVsZXMub3NzMCA9IHtcbiAgICAgICAgICAgIFdpbmRvd3NQaG9uZU9TOiBtb2JpbGVEZXRlY3RSdWxlcy5vc3MuV2luZG93c1Bob25lT1MsXG4gICAgICAgICAgICBXaW5kb3dzTW9iaWxlT1M6IG1vYmlsZURldGVjdFJ1bGVzLm9zcy5XaW5kb3dzTW9iaWxlT1NcbiAgICAgICAgfTtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogVGVzdCB1c2VyQWdlbnQgc3RyaW5nIGFnYWluc3QgYSBzZXQgb2YgcnVsZXMgYW5kIGZpbmQgdGhlIGZpcnN0IG1hdGNoZWQga2V5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBydWxlcyAoa2V5IGlzIFN0cmluZywgdmFsdWUgaXMgUmVnRXhwKVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnQgdGhlIG5hdmlnYXRvci51c2VyQWdlbnQgKG9yIEhUVFAtSGVhZGVyICdVc2VyLUFnZW50JykuXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSB0aGUgbWF0Y2hlZCBrZXkgaWYgZm91bmQsIG90aGVyd2lzZSA8dHQ+bnVsbDwvdHQ+XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpbXBsLmZpbmRNYXRjaCA9IGZ1bmN0aW9uKHJ1bGVzLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHJ1bGVzKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKHJ1bGVzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVzW2tleV0udGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUZXN0IHVzZXJBZ2VudCBzdHJpbmcgYWdhaW5zdCBhIHNldCBvZiBydWxlcyBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIG1hdGNoZWQga2V5cy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcnVsZXMgKGtleSBpcyBTdHJpbmcsIHZhbHVlIGlzIFJlZ0V4cClcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50IHRoZSBuYXZpZ2F0b3IudXNlckFnZW50IChvciBIVFRQLUhlYWRlciAnVXNlci1BZ2VudCcpLlxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gYW4gYXJyYXkgb2YgbWF0Y2hlZCBrZXlzLCBtYXkgYmUgZW1wdHkgd2hlbiB0aGVyZSBpcyBubyBtYXRjaCwgYnV0IG5vdCA8dHQ+bnVsbDwvdHQ+XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpbXBsLmZpbmRNYXRjaGVzID0gZnVuY3Rpb24ocnVsZXMsIHVzZXJBZ2VudCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBydWxlcykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChydWxlcywga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChydWxlc1trZXldLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0aGUgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgaW4gdGhlIFVzZXItQWdlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gdmVyc2lvbiBvciA8dHQ+bnVsbDwvdHQ+IGlmIHZlcnNpb24gbm90IGZvdW5kXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpbXBsLmdldFZlcnNpb25TdHIgPSBmdW5jdGlvbiAocHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIHByb3BzID0gaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy5wcm9wcywgcGF0dGVybnMsIGksIGxlbiwgbWF0Y2g7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwocHJvcHMsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIHBhdHRlcm5zID0gcHJvcHNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIGxlbiA9IHBhdHRlcm5zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybnNbaV0uZXhlYyh1c2VyQWdlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0aGUgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgaW4gdGhlIFVzZXItQWdlbnQuXG4gICAgICogV2lsbCByZXR1cm4gYSBmbG9hdCBudW1iZXIuIChlZy4gMl8wIHdpbGwgcmV0dXJuIDIuMCwgNC4zLjEgd2lsbCByZXR1cm4gNC4zMSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50XG4gICAgICogQHJldHVybiB7TnVtYmVyfSB2ZXJzaW9uIG9yIDx0dD5OYU48L3R0PiBpZiB2ZXJzaW9uIG5vdCBmb3VuZFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaW1wbC5nZXRWZXJzaW9uID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSwgdXNlckFnZW50KSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gaW1wbC5nZXRWZXJzaW9uU3RyKHByb3BlcnR5TmFtZSwgdXNlckFnZW50KTtcbiAgICAgICAgcmV0dXJuIHZlcnNpb24gPyBpbXBsLnByZXBhcmVWZXJzaW9uTm8odmVyc2lvbikgOiBOYU47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgdGhlIHZlcnNpb24gbnVtYmVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSB2ZXJzaW9uIG51bWJlciBhcyBhIGZsb2F0aW5nIG51bWJlclxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaW1wbC5wcmVwYXJlVmVyc2lvbk5vID0gZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgdmFyIG51bWJlcnM7XG5cbiAgICAgICAgbnVtYmVycyA9IHZlcnNpb24uc3BsaXQoL1thLXouXyBcXC9cXC1dL2kpO1xuICAgICAgICBpZiAobnVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBudW1iZXJzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBudW1iZXJzWzBdICsgJy4nO1xuICAgICAgICAgICAgbnVtYmVycy5zaGlmdCgpO1xuICAgICAgICAgICAgdmVyc2lvbiArPSBudW1iZXJzLmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOdW1iZXIodmVyc2lvbik7XG4gICAgfTtcblxuICAgIGltcGwuaXNNb2JpbGVGYWxsYmFjayA9IGZ1bmN0aW9uICh1c2VyQWdlbnQpIHtcbiAgICAgICAgcmV0dXJuIGltcGwuZGV0ZWN0TW9iaWxlQnJvd3NlcnMuZnVsbFBhdHRlcm4udGVzdCh1c2VyQWdlbnQpIHx8XG4gICAgICAgICAgICBpbXBsLmRldGVjdE1vYmlsZUJyb3dzZXJzLnNob3J0UGF0dGVybi50ZXN0KHVzZXJBZ2VudC5zdWJzdHIoMCw0KSk7XG4gICAgfTtcblxuICAgIGltcGwuaXNUYWJsZXRGYWxsYmFjayA9IGZ1bmN0aW9uICh1c2VyQWdlbnQpIHtcbiAgICAgICAgcmV0dXJuIGltcGwuZGV0ZWN0TW9iaWxlQnJvd3NlcnMudGFibGV0UGF0dGVybi50ZXN0KHVzZXJBZ2VudCk7XG4gICAgfTtcblxuICAgIGltcGwucHJlcGFyZURldGVjdGlvbkNhY2hlID0gZnVuY3Rpb24gKGNhY2hlLCB1c2VyQWdlbnQsIG1heFBob25lV2lkdGgpIHtcbiAgICAgICAgaWYgKGNhY2hlLm1vYmlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBob25lLCB0YWJsZXQsIHBob25lU2l6ZWQ7XG5cbiAgICAgICAgLy8gZmlyc3QgY2hlY2sgZm9yIHN0cm9uZ2VyIHRhYmxldCBydWxlcywgdGhlbiBwaG9uZSAoc2VlIGlzc3VlIzUpXG4gICAgICAgIHRhYmxldCA9IGltcGwuZmluZE1hdGNoKGltcGwubW9iaWxlRGV0ZWN0UnVsZXMudGFibGV0cywgdXNlckFnZW50KTtcbiAgICAgICAgaWYgKHRhYmxldCkge1xuICAgICAgICAgICAgY2FjaGUubW9iaWxlID0gY2FjaGUudGFibGV0ID0gdGFibGV0O1xuICAgICAgICAgICAgY2FjaGUucGhvbmUgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuOyAvLyB1bmFtYmlndW91c2x5IGlkZW50aWZpZWQgYXMgdGFibGV0XG4gICAgICAgIH1cblxuICAgICAgICBwaG9uZSA9IGltcGwuZmluZE1hdGNoKGltcGwubW9iaWxlRGV0ZWN0UnVsZXMucGhvbmVzLCB1c2VyQWdlbnQpO1xuICAgICAgICBpZiAocGhvbmUpIHtcbiAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGNhY2hlLnBob25lID0gcGhvbmU7XG4gICAgICAgICAgICBjYWNoZS50YWJsZXQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuOyAvLyB1bmFtYmlndW91c2x5IGlkZW50aWZpZWQgYXMgcGhvbmVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG91ciBydWxlcyBoYXZlbid0IGZvdW5kIGEgbWF0Y2ggLT4gdHJ5IG1vcmUgZ2VuZXJhbCBmYWxsYmFjayBydWxlc1xuICAgICAgICBpZiAoaW1wbC5pc01vYmlsZUZhbGxiYWNrKHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHBob25lU2l6ZWQgPSBNb2JpbGVEZXRlY3QuaXNQaG9uZVNpemVkKG1heFBob25lV2lkdGgpO1xuICAgICAgICAgICAgaWYgKHBob25lU2l6ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGltcGwuRkFMTEJBQ0tfTU9CSUxFO1xuICAgICAgICAgICAgICAgIGNhY2hlLnRhYmxldCA9IGNhY2hlLnBob25lID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGhvbmVTaXplZCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGNhY2hlLnBob25lID0gaW1wbC5GQUxMQkFDS19QSE9ORTtcbiAgICAgICAgICAgICAgICBjYWNoZS50YWJsZXQgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5tb2JpbGUgPSBjYWNoZS50YWJsZXQgPSBpbXBsLkZBTExCQUNLX1RBQkxFVDtcbiAgICAgICAgICAgICAgICBjYWNoZS5waG9uZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW1wbC5pc1RhYmxldEZhbGxiYWNrKHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGNhY2hlLnRhYmxldCA9IGltcGwuRkFMTEJBQ0tfVEFCTEVUO1xuICAgICAgICAgICAgY2FjaGUucGhvbmUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm90IG1vYmlsZSBhdCBhbGwhXG4gICAgICAgICAgICBjYWNoZS5tb2JpbGUgPSBjYWNoZS50YWJsZXQgPSBjYWNoZS5waG9uZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gdCBpcyBhIHJlZmVyZW5jZSB0byBhIE1vYmlsZURldGVjdCBpbnN0YW5jZVxuICAgIGltcGwubW9iaWxlR3JhZGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAvLyBpbXBsIG5vdGU6XG4gICAgICAgIC8vIFRvIGtlZXAgaW4gc3luYyB3LyBNb2JpbGVfRGV0ZWN0LnBocCBlYXNpbHksIHRoZSBmb2xsb3dpbmcgY29kZSBpcyB0aWdodGx5IGFsaWduZWQgdG8gdGhlIFBIUCB2ZXJzaW9uLlxuICAgICAgICAvLyBXaGVuIGNoYW5nZXMgYXJlIG1hZGUgaW4gTW9iaWxlX0RldGVjdC5waHAsIGNvcHkgdGhpcyBtZXRob2QgYW5kIHJlcGxhY2U6XG4gICAgICAgIC8vICAgICAkdGhpcy0+IC8gdC5cbiAgICAgICAgLy8gICAgIHNlbGY6Ok1PQklMRV9HUkFERV8oLikgLyAnJDEnXG4gICAgICAgIC8vICAgICAsIHNlbGY6OlZFUlNJT05fVFlQRV9GTE9BVCAvIChub3RoaW5nKVxuICAgICAgICAvLyAgICAgaXNJT1MoKSAvIG9zKCdpT1MnKVxuICAgICAgICAvLyAgICAgW3JlZ10gLyAobm90aGluZykgICA8LS0ganNkZWxpdnIgY29tcGxhaW5pbmcgYWJvdXQgdW5lc2NhcGVkIHVuaWNvZGUgY2hhcmFjdGVyIFUrMDBBRVxuICAgICAgICB2YXIgJGlzTW9iaWxlID0gdC5tb2JpbGUoKSAhPT0gbnVsbDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBBcHBsZSBpT1MgMy4yLTUuMSAtIFRlc3RlZCBvbiB0aGUgb3JpZ2luYWwgaVBhZCAoNC4zIC8gNS4wKSwgaVBhZCAyICg0LjMpLCBpUGFkIDMgKDUuMSksIG9yaWdpbmFsIGlQaG9uZSAoMy4xKSwgaVBob25lIDMgKDMuMiksIDNHUyAoNC4zKSwgNCAoNC4zIC8gNS4wKSwgYW5kIDRTICg1LjEpXG4gICAgICAgICAgICB0Lm9zKCdpT1MnKSAmJiB0LnZlcnNpb24oJ2lQYWQnKT49NC4zIHx8XG4gICAgICAgICAgICB0Lm9zKCdpT1MnKSAmJiB0LnZlcnNpb24oJ2lQaG9uZScpPj0zLjEgfHxcbiAgICAgICAgICAgIHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBvZCcpPj0zLjEgfHxcblxuICAgICAgICAgICAgLy8gQW5kcm9pZCAyLjEtMi4zIC0gVGVzdGVkIG9uIHRoZSBIVEMgSW5jcmVkaWJsZSAoMi4yKSwgb3JpZ2luYWwgRHJvaWQgKDIuMiksIEhUQyBBcmlhICgyLjEpLCBHb29nbGUgTmV4dXMgUyAoMi4zKS4gRnVuY3Rpb25hbCBvbiAxLjUgJiAxLjYgYnV0IHBlcmZvcm1hbmNlIG1heSBiZSBzbHVnZ2lzaCwgdGVzdGVkIG9uIEdvb2dsZSBHMSAoMS41KVxuICAgICAgICAgICAgLy8gQW5kcm9pZCAzLjEgKEhvbmV5Y29tYikgIC0gVGVzdGVkIG9uIHRoZSBTYW1zdW5nIEdhbGF4eSBUYWIgMTAuMSBhbmQgTW90b3JvbGEgWE9PTVxuICAgICAgICAgICAgLy8gQW5kcm9pZCA0LjAgKElDUykgIC0gVGVzdGVkIG9uIGEgR2FsYXh5IE5leHVzLiBOb3RlOiB0cmFuc2l0aW9uIHBlcmZvcm1hbmNlIGNhbiBiZSBwb29yIG9uIHVwZ3JhZGVkIGRldmljZXNcbiAgICAgICAgICAgIC8vIEFuZHJvaWQgNC4xIChKZWxseSBCZWFuKSAgLSBUZXN0ZWQgb24gYSBHYWxheHkgTmV4dXMgYW5kIEdhbGF4eSA3XG4gICAgICAgICAgICAoIHQudmVyc2lvbignQW5kcm9pZCcpPjIuMSAmJiB0LmlzKCdXZWJraXQnKSApIHx8XG5cbiAgICAgICAgICAgIC8vIFdpbmRvd3MgUGhvbmUgNy03LjUgLSBUZXN0ZWQgb24gdGhlIEhUQyBTdXJyb3VuZCAoNy4wKSBIVEMgVHJvcGh5ICg3LjUpLCBMRy1FOTAwICg3LjUpLCBOb2tpYSBMdW1pYSA4MDBcbiAgICAgICAgICAgIHQudmVyc2lvbignV2luZG93cyBQaG9uZSBPUycpPj03LjAgfHxcblxuICAgICAgICAgICAgLy8gQmxhY2tiZXJyeSA3IC0gVGVzdGVkIG9uIEJsYWNrQmVycnkgVG9yY2ggOTgxMFxuICAgICAgICAgICAgLy8gQmxhY2tiZXJyeSA2LjAgLSBUZXN0ZWQgb24gdGhlIFRvcmNoIDk4MDAgYW5kIFN0eWxlIDk2NzBcbiAgICAgICAgICAgIHQuaXMoJ0JsYWNrQmVycnknKSAmJiB0LnZlcnNpb24oJ0JsYWNrQmVycnknKT49Ni4wIHx8XG4gICAgICAgICAgICAvLyBCbGFja2JlcnJ5IFBsYXlib29rICgxLjAtMi4wKSAtIFRlc3RlZCBvbiBQbGF5Qm9va1xuICAgICAgICAgICAgdC5tYXRjaCgnUGxheWJvb2suKlRhYmxldCcpIHx8XG5cbiAgICAgICAgICAgIC8vIFBhbG0gV2ViT1MgKDEuNC0yLjApIC0gVGVzdGVkIG9uIHRoZSBQYWxtIFBpeGkgKDEuNCksIFByZSAoMS40KSwgUHJlIDIgKDIuMClcbiAgICAgICAgICAgICggdC52ZXJzaW9uKCd3ZWJPUycpPj0xLjQgJiYgdC5tYXRjaCgnUGFsbXxQcmV8UGl4aScpICkgfHxcbiAgICAgICAgICAgIC8vIFBhbG0gV2ViT1MgMy4wICAtIFRlc3RlZCBvbiBIUCBUb3VjaFBhZFxuICAgICAgICAgICAgdC5tYXRjaCgnaHAuKlRvdWNoUGFkJykgfHxcblxuICAgICAgICAgICAgLy8gRmlyZWZveCBNb2JpbGUgKDEyIEJldGEpIC0gVGVzdGVkIG9uIEFuZHJvaWQgMi4zIGRldmljZVxuICAgICAgICAgICAgKCB0LmlzKCdGaXJlZm94JykgJiYgdC52ZXJzaW9uKCdGaXJlZm94Jyk+PTEyICkgfHxcblxuICAgICAgICAgICAgLy8gQ2hyb21lIGZvciBBbmRyb2lkIC0gVGVzdGVkIG9uIEFuZHJvaWQgNC4wLCA0LjEgZGV2aWNlXG4gICAgICAgICAgICAoIHQuaXMoJ0Nocm9tZScpICYmIHQuaXMoJ0FuZHJvaWRPUycpICYmIHQudmVyc2lvbignQW5kcm9pZCcpPj00LjAgKSB8fFxuXG4gICAgICAgICAgICAvLyBTa3lmaXJlIDQuMSAtIFRlc3RlZCBvbiBBbmRyb2lkIDIuMyBkZXZpY2VcbiAgICAgICAgICAgICggdC5pcygnU2t5ZmlyZScpICYmIHQudmVyc2lvbignU2t5ZmlyZScpPj00LjEgJiYgdC5pcygnQW5kcm9pZE9TJykgJiYgdC52ZXJzaW9uKCdBbmRyb2lkJyk+PTIuMyApIHx8XG5cbiAgICAgICAgICAgIC8vIE9wZXJhIE1vYmlsZSAxMS41LTEyOiBUZXN0ZWQgb24gQW5kcm9pZCAyLjNcbiAgICAgICAgICAgICggdC5pcygnT3BlcmEnKSAmJiB0LnZlcnNpb24oJ09wZXJhIE1vYmknKT4xMSAmJiB0LmlzKCdBbmRyb2lkT1MnKSApIHx8XG5cbiAgICAgICAgICAgIC8vIE1lZWdvIDEuMiAtIFRlc3RlZCBvbiBOb2tpYSA5NTAgYW5kIE45XG4gICAgICAgICAgICB0LmlzKCdNZWVHb09TJykgfHxcblxuICAgICAgICAgICAgLy8gVGl6ZW4gKHByZS1yZWxlYXNlKSAtIFRlc3RlZCBvbiBlYXJseSBoYXJkd2FyZVxuICAgICAgICAgICAgdC5pcygnVGl6ZW4nKSB8fFxuXG4gICAgICAgICAgICAvLyBTYW1zdW5nIEJhZGEgMi4wIC0gVGVzdGVkIG9uIGEgU2Ftc3VuZyBXYXZlIDMsIERvbHBoaW4gYnJvd3NlclxuICAgICAgICAgICAgLy8gQHRvZG86IG1vcmUgdGVzdHMgaGVyZSFcbiAgICAgICAgICAgIHQuaXMoJ0RvbGZpbicpICYmIHQudmVyc2lvbignQmFkYScpPj0yLjAgfHxcblxuICAgICAgICAgICAgLy8gVUMgQnJvd3NlciAtIFRlc3RlZCBvbiBBbmRyb2lkIDIuMyBkZXZpY2VcbiAgICAgICAgICAgICggKHQuaXMoJ1VDIEJyb3dzZXInKSB8fCB0LmlzKCdEb2xmaW4nKSkgJiYgdC52ZXJzaW9uKCdBbmRyb2lkJyk+PTIuMyApIHx8XG5cbiAgICAgICAgICAgIC8vIEtpbmRsZSAzIGFuZCBGaXJlICAtIFRlc3RlZCBvbiB0aGUgYnVpbHQtaW4gV2ViS2l0IGJyb3dzZXIgZm9yIGVhY2hcbiAgICAgICAgICAgICggdC5tYXRjaCgnS2luZGxlIEZpcmUnKSB8fFxuICAgICAgICAgICAgICAgIHQuaXMoJ0tpbmRsZScpICYmIHQudmVyc2lvbignS2luZGxlJyk+PTMuMCApIHx8XG5cbiAgICAgICAgICAgIC8vIE5vb2sgQ29sb3IgMS40LjEgLSBUZXN0ZWQgb24gb3JpZ2luYWwgTm9vayBDb2xvciwgbm90IE5vb2sgVGFibGV0XG4gICAgICAgICAgICB0LmlzKCdBbmRyb2lkT1MnKSAmJiB0LmlzKCdOb29rVGFibGV0JykgfHxcblxuICAgICAgICAgICAgLy8gQ2hyb21lIERlc2t0b3AgMTEtMjEgLSBUZXN0ZWQgb24gT1MgWCAxMC43IGFuZCBXaW5kb3dzIDdcbiAgICAgICAgICAgIHQudmVyc2lvbignQ2hyb21lJyk+PTExICYmICEkaXNNb2JpbGUgfHxcblxuICAgICAgICAgICAgLy8gU2FmYXJpIERlc2t0b3AgNC01IC0gVGVzdGVkIG9uIE9TIFggMTAuNyBhbmQgV2luZG93cyA3XG4gICAgICAgICAgICB0LnZlcnNpb24oJ1NhZmFyaScpPj01LjAgJiYgISRpc01vYmlsZSB8fFxuXG4gICAgICAgICAgICAvLyBGaXJlZm94IERlc2t0b3AgNC0xMyAtIFRlc3RlZCBvbiBPUyBYIDEwLjcgYW5kIFdpbmRvd3MgN1xuICAgICAgICAgICAgdC52ZXJzaW9uKCdGaXJlZm94Jyk+PTQuMCAmJiAhJGlzTW9iaWxlIHx8XG5cbiAgICAgICAgICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDctOSAtIFRlc3RlZCBvbiBXaW5kb3dzIFhQLCBWaXN0YSBhbmQgN1xuICAgICAgICAgICAgdC52ZXJzaW9uKCdNU0lFJyk+PTcuMCAmJiAhJGlzTW9iaWxlIHx8XG5cbiAgICAgICAgICAgIC8vIE9wZXJhIERlc2t0b3AgMTAtMTIgLSBUZXN0ZWQgb24gT1MgWCAxMC43IGFuZCBXaW5kb3dzIDdcbiAgICAgICAgICAgIC8vIEByZWZlcmVuY2U6IGh0dHA6Ly9teS5vcGVyYS5jb20vY29tbXVuaXR5L29wZW53ZWIvaWRvcGVyYS9cbiAgICAgICAgICAgIHQudmVyc2lvbignT3BlcmEnKT49MTAgJiYgISRpc01vYmlsZVxuXG4gICAgICAgICAgICApe1xuICAgICAgICAgICAgcmV0dXJuICdBJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBhZCcpPDQuMyB8fFxuICAgICAgICAgICAgdC5vcygnaU9TJykgJiYgdC52ZXJzaW9uKCdpUGhvbmUnKTwzLjEgfHxcbiAgICAgICAgICAgIHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBvZCcpPDMuMSB8fFxuXG4gICAgICAgICAgICAvLyBCbGFja2JlcnJ5IDUuMDogVGVzdGVkIG9uIHRoZSBTdG9ybSAyIDk1NTAsIEJvbGQgOTc3MFxuICAgICAgICAgICAgdC5pcygnQmxhY2tiZXJyeScpICYmIHQudmVyc2lvbignQmxhY2tCZXJyeScpPj01ICYmIHQudmVyc2lvbignQmxhY2tCZXJyeScpPDYgfHxcblxuICAgICAgICAgICAgLy9PcGVyYSBNaW5pICg1LjAtNi41KSAtIFRlc3RlZCBvbiBpT1MgMy4yLzQuMyBhbmQgQW5kcm9pZCAyLjNcbiAgICAgICAgICAgICggdC52ZXJzaW9uKCdPcGVyYSBNaW5pJyk+PTUuMCAmJiB0LnZlcnNpb24oJ09wZXJhIE1pbmknKTw9Ni41ICYmXG4gICAgICAgICAgICAgICAgKHQudmVyc2lvbignQW5kcm9pZCcpPj0yLjMgfHwgdC5pcygnaU9TJykpICkgfHxcblxuICAgICAgICAgICAgLy8gTm9raWEgU3ltYmlhbl4zIC0gVGVzdGVkIG9uIE5va2lhIE44IChTeW1iaWFuXjMpLCBDNyAoU3ltYmlhbl4zKSwgYWxzbyB3b3JrcyBvbiBOOTcgKFN5bWJpYW5eMSlcbiAgICAgICAgICAgIHQubWF0Y2goJ05va2lhTjh8Tm9raWFDN3xOOTcuKlNlcmllczYwfFN5bWJpYW4vMycpIHx8XG5cbiAgICAgICAgICAgIC8vIEB0b2RvOiByZXBvcnQgdGhpcyAodGVzdGVkIG9uIE5va2lhIE43MSlcbiAgICAgICAgICAgIHQudmVyc2lvbignT3BlcmEgTW9iaScpPj0xMSAmJiB0LmlzKCdTeW1iaWFuT1MnKVxuICAgICAgICAgICAgKXtcbiAgICAgICAgICAgIHJldHVybiAnQic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgIC8vIEJsYWNrYmVycnkgNC54IC0gVGVzdGVkIG9uIHRoZSBDdXJ2ZSA4MzMwXG4gICAgICAgICAgICB0LnZlcnNpb24oJ0JsYWNrQmVycnknKTw1LjAgfHxcbiAgICAgICAgICAgIC8vIFdpbmRvd3MgTW9iaWxlIC0gVGVzdGVkIG9uIHRoZSBIVEMgTGVvIChXaW5NbyA1LjIpXG4gICAgICAgICAgICB0Lm1hdGNoKCdNU0lFTW9iaWxlfFdpbmRvd3MgQ0UuKk1vYmlsZScpIHx8IHQudmVyc2lvbignV2luZG93cyBNb2JpbGUnKTw9NS4yXG5cbiAgICAgICAgICAgICl7XG4gICAgICAgICAgICByZXR1cm4gJ0MnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9BbGwgb2xkZXIgc21hcnRwaG9uZSBwbGF0Zm9ybXMgYW5kIGZlYXR1cmVwaG9uZXMgLSBBbnkgZGV2aWNlIHRoYXQgZG9lc24ndCBzdXBwb3J0IG1lZGlhIHF1ZXJpZXNcbiAgICAgICAgLy93aWxsIHJlY2VpdmUgdGhlIGJhc2ljLCBDIGdyYWRlIGV4cGVyaWVuY2UuXG4gICAgICAgIHJldHVybiAnQyc7XG4gICAgfTtcblxuICAgIGltcGwuZGV0ZWN0T1MgPSBmdW5jdGlvbiAodWEpIHtcbiAgICAgICAgcmV0dXJuIGltcGwuZmluZE1hdGNoKGltcGwubW9iaWxlRGV0ZWN0UnVsZXMub3NzMCwgdWEpIHx8XG4gICAgICAgICAgICBpbXBsLmZpbmRNYXRjaChpbXBsLm1vYmlsZURldGVjdFJ1bGVzLm9zcywgdWEpO1xuICAgIH07XG5cbiAgICBpbXBsLmdldERldmljZVNtYWxsZXJTaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LnNjcmVlbi53aWR0aCA8IHdpbmRvdy5zY3JlZW4uaGVpZ2h0ID9cbiAgICAgICAgICAgIHdpbmRvdy5zY3JlZW4ud2lkdGggOlxuICAgICAgICAgICAgd2luZG93LnNjcmVlbi5oZWlnaHQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBNb2JpbGVEZXRlY3Qgb2JqZWN0LlxuICAgICAqIDxicj5cbiAgICAgKiBTdWNoIGFuIG9iamVjdCB3aWxsIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIGdpdmVuIHVzZXItYWdlbnQgc3RyaW5nIGFuZCBjYWNoZSBtb3N0IG9mIHRoZSBkZXRlY3QgcXVlcmllcy48YnI+XG4gICAgICogPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7IGJvcmRlcjogMXB4IHNvbGlkICNiY2U4ZjE7IGNvbG9yOiAjM2E4N2FkOyBwYWRkaW5nOiAxNHB4OyBib3JkZXItcmFkaXVzOiAycHg7IG1hcmdpbi10b3A6IDIwcHhcIj5cbiAgICAgKiAgICAgPHN0cm9uZz5GaW5kIGluZm9ybWF0aW9uIGhvdyB0byBkb3dubG9hZCBhbmQgaW5zdGFsbDo8L3N0cm9uZz5cbiAgICAgKiAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oZ29lYmwvbW9iaWxlLWRldGVjdC5qcy9cIj5naXRodWIuY29tL2hnb2VibC9tb2JpbGUtZGV0ZWN0LmpzLzwvYT5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxwcmU+XG4gICAgICogICAgIHZhciBtZCA9IG5ldyBNb2JpbGVEZXRlY3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAqICAgICBpZiAobWQubW9iaWxlKCkpIHtcbiAgICAgKiAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAobWQubW9iaWxlR3JhZGUoKSA9PT0gJ0EnKSA/ICcvbW9iaWxlLycgOiAnL2x5bngvJztcbiAgICAgKiAgICAgfVxuICAgICAqIDwvcHJlPlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJBZ2VudCB0eXBpY2FsbHkgdGFrZW4gZnJvbSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCBvciBodHRwX2hlYWRlclsnVXNlci1BZ2VudCddXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXhQaG9uZVdpZHRoPTYwMF0gPHN0cm9uZz5vbmx5IGZvciBicm93c2Vyczwvc3Ryb25nPiBzcGVjaWZ5IGEgdmFsdWUgZm9yIHRoZSBtYXhpbXVtXG4gICAgICogICAgICAgIHdpZHRoIG9mIHNtYWxsZXN0IGRldmljZSBzaWRlIChpbiBsb2dpY2FsIFwiQ1NTXCIgcGl4ZWxzKSB1bnRpbCBhIGRldmljZSBkZXRlY3RlZCBhcyBtb2JpbGUgd2lsbCBiZSBoYW5kbGVkXG4gICAgICogICAgICAgIGFzIHBob25lLlxuICAgICAqICAgICAgICBUaGlzIGlzIG9ubHkgdXNlZCBpbiBjYXNlcyB3aGVyZSB0aGUgZGV2aWNlIGNhbm5vdCBiZSBjbGFzc2lmaWVkIGFzIHBob25lIG9yIHRhYmxldC48YnI+XG4gICAgICogICAgICAgIFNlZSA8YSBocmVmPVwiaHR0cDovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9ndWlkZS9wcmFjdGljZXMvc2NyZWVuc19zdXBwb3J0Lmh0bWxcIj5EZWNsYXJpbmcgVGFibGV0IExheW91dHNcbiAgICAgKiAgICAgICAgZm9yIEFuZHJvaWQ8L2E+Ljxicj5cbiAgICAgKiAgICAgICAgSWYgeW91IHByb3ZpZGUgYSB2YWx1ZSA8IDAsIHRoZW4gdGhpcyBcImZ1enp5XCIgY2hlY2sgaXMgZGlzYWJsZWQuXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQGdsb2JhbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE1vYmlsZURldGVjdCh1c2VyQWdlbnQsIG1heFBob25lV2lkdGgpIHtcbiAgICAgICAgdGhpcy51YSA9IHByZXBhcmVVc2VyQWdlbnQodXNlckFnZW50KTtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgICAgICAgLy82MDBkcCBpcyB0eXBpY2FsIDdcIiB0YWJsZXQgbWluaW11bSB3aWR0aFxuICAgICAgICB0aGlzLm1heFBob25lV2lkdGggPSBtYXhQaG9uZVdpZHRoIHx8IDYwMDtcbiAgICB9XG5cbiAgICBNb2JpbGVEZXRlY3QucHJvdG90eXBlID0ge1xuICAgICAgICBjb25zdHJ1Y3RvcjogTW9iaWxlRGV0ZWN0LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkZXRlY3RlZCBwaG9uZSBvciB0YWJsZXQgdHlwZSBvciA8dHQ+bnVsbDwvdHQ+IGlmIGl0IGlzIG5vdCBhIG1vYmlsZSBkZXZpY2UuXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogRm9yIGEgbGlzdCBvZiBwb3NzaWJsZSByZXR1cm4gdmFsdWVzIHNlZSB7QGxpbmsgTW9iaWxlRGV0ZWN0I3Bob25lfSBhbmQge0BsaW5rIE1vYmlsZURldGVjdCN0YWJsZXR9Ljxicj5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBJZiB0aGUgZGV2aWNlIGlzIG5vdCBkZXRlY3RlZCBieSB0aGUgcmVndWxhciBleHByZXNzaW9ucyBmcm9tIE1vYmlsZS1EZXRlY3QsIGEgdGVzdCBpcyBtYWRlIGFnYWluc3RcbiAgICAgICAgICogdGhlIHBhdHRlcm5zIG9mIDxhIGhyZWY9XCJodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tL1wiPmRldGVjdG1vYmlsZWJyb3dzZXJzLmNvbTwvYT4uIElmIHRoaXMgdGVzdFxuICAgICAgICAgKiBpcyBwb3NpdGl2ZSwgYSB2YWx1ZSBvZiA8Y29kZT5Vbmtub3duUGhvbmU8L2NvZGU+LCA8Y29kZT5Vbmtub3duVGFibGV0PC9jb2RlPiBvclxuICAgICAgICAgKiA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiBpcyByZXR1cm5lZC48YnI+XG4gICAgICAgICAqIFdoZW4gdXNlZCBpbiBicm93c2VyLCB0aGUgZGVjaXNpb24gd2hldGhlciBwaG9uZSBvciB0YWJsZXQgaXMgbWFkZSBiYXNlZCBvbiA8Y29kZT5zY3JlZW4ud2lkdGgvaGVpZ2h0PC9jb2RlPi48YnI+XG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogV2hlbiB1c2VkIHNlcnZlci1zaWRlIChub2RlLmpzKSwgdGhlcmUgaXMgbm8gd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiA8Y29kZT5Vbmtub3duVGFibGV0PC9jb2RlPlxuICAgICAgICAgKiBhbmQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4sIHNvIHlvdSB3aWxsIGdldCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiBoZXJlLjxicj5cbiAgICAgICAgICogQmUgYXdhcmUgdGhhdCBzaW5jZSB2MS4wLjAgaW4gdGhpcyBzcGVjaWFsIGNhc2UgeW91IHdpbGwgZ2V0IDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IG9ubHkgZm9yOlxuICAgICAgICAgKiB7QGxpbmsgTW9iaWxlRGV0ZWN0I21vYmlsZX0sIG5vdCBmb3Ige0BsaW5rIE1vYmlsZURldGVjdCNwaG9uZX0gYW5kIHtAbGluayBNb2JpbGVEZXRlY3QjdGFibGV0fS5cbiAgICAgICAgICogSW4gdmVyc2lvbnMgYmVmb3JlIHYxLjAuMCBhbGwgMyBtZXRob2RzIHJldHVybmVkIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IHdoaWNoIHdhcyB0ZWRpb3VzIHRvIHVzZS5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBJbiBtb3N0IGNhc2VzIHlvdSB3aWxsIHVzZSB0aGUgcmV0dXJuIHZhbHVlIGp1c3QgYXMgYSBib29sZWFuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUga2V5IGZvciB0aGUgcGhvbmUgZmFtaWx5IG9yIHRhYmxldCBmYW1pbHksIGUuZy4gXCJOZXh1c1wiLlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I21vYmlsZVxuICAgICAgICAgKi9cbiAgICAgICAgbW9iaWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbXBsLnByZXBhcmVEZXRlY3Rpb25DYWNoZSh0aGlzLl9jYWNoZSwgdGhpcy51YSwgdGhpcy5tYXhQaG9uZVdpZHRoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS5tb2JpbGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRldGVjdGVkIHBob25lIHR5cGUvZmFtaWx5IHN0cmluZyBvciA8dHQ+bnVsbDwvdHQ+LlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIFRoZSByZXR1cm5lZCB0YWJsZXQgKGZhbWlseSBvciBwcm9kdWNlcikgaXMgb25lIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5pUGhvbmUsIEJsYWNrQmVycnksIEhUQywgTmV4dXMsIERlbGwsIE1vdG9yb2xhLCBTYW1zdW5nLCBMRywgU29ueSwgQXN1cyxcbiAgICAgICAgICogTm9raWFMdW1pYSwgTWljcm9tYXgsIFBhbG0sIFZlcnR1LCBQYW50ZWNoLCBGbHksIFdpa28sIGlNb2JpbGUsIFNpbVZhbGxleSxcbiAgICAgICAgICogV29sZmdhbmcsIEFsY2F0ZWwsIE5pbnRlbmRvLCBBbW9pLCBJTlEsIE9uZVBsdXMsIEdlbmVyaWNQaG9uZTwvdHQ+PGJyPlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIElmIHRoZSBkZXZpY2UgaXMgbm90IGRldGVjdGVkIGJ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIGZyb20gTW9iaWxlLURldGVjdCwgYSB0ZXN0IGlzIG1hZGUgYWdhaW5zdFxuICAgICAgICAgKiB0aGUgcGF0dGVybnMgb2YgPGEgaHJlZj1cImh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXCI+ZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tPC9hPi4gSWYgdGhpcyB0ZXN0XG4gICAgICAgICAqIGlzIHBvc2l0aXZlLCBhIHZhbHVlIG9mIDxjb2RlPlVua25vd25QaG9uZTwvY29kZT4gb3IgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gaXMgcmV0dXJuZWQuPGJyPlxuICAgICAgICAgKiBXaGVuIHVzZWQgaW4gYnJvd3NlciwgdGhlIGRlY2lzaW9uIHdoZXRoZXIgcGhvbmUgb3IgdGFibGV0IGlzIG1hZGUgYmFzZWQgb24gPGNvZGU+c2NyZWVuLndpZHRoL2hlaWdodDwvY29kZT4uPGJyPlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIFdoZW4gdXNlZCBzZXJ2ZXItc2lkZSAobm9kZS5qcyksIHRoZXJlIGlzIG5vIHdheSB0byB0ZWxsIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gPGNvZGU+VW5rbm93blRhYmxldDwvY29kZT5cbiAgICAgICAgICogYW5kIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+LCBzbyB5b3Ugd2lsbCBnZXQgPGNvZGU+bnVsbDwvY29kZT4gaGVyZSwgd2hpbGUge0BsaW5rIE1vYmlsZURldGVjdCNtb2JpbGV9XG4gICAgICAgICAqIHdpbGwgcmV0dXJuIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+Ljxicj5cbiAgICAgICAgICogQmUgYXdhcmUgdGhhdCBzaW5jZSB2MS4wLjAgaW4gdGhpcyBzcGVjaWFsIGNhc2UgeW91IHdpbGwgZ2V0IDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IG9ubHkgZm9yOlxuICAgICAgICAgKiB7QGxpbmsgTW9iaWxlRGV0ZWN0I21vYmlsZX0sIG5vdCBmb3Ige0BsaW5rIE1vYmlsZURldGVjdCNwaG9uZX0gYW5kIHtAbGluayBNb2JpbGVEZXRlY3QjdGFibGV0fS5cbiAgICAgICAgICogSW4gdmVyc2lvbnMgYmVmb3JlIHYxLjAuMCBhbGwgMyBtZXRob2RzIHJldHVybmVkIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IHdoaWNoIHdhcyB0ZWRpb3VzIHRvIHVzZS5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBJbiBtb3N0IGNhc2VzIHlvdSB3aWxsIHVzZSB0aGUgcmV0dXJuIHZhbHVlIGp1c3QgYXMgYSBib29sZWFuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUga2V5IG9mIHRoZSBwaG9uZSBmYW1pbHkgb3IgcHJvZHVjZXIsIGUuZy4gXCJpUGhvbmVcIlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3Bob25lXG4gICAgICAgICAqL1xuICAgICAgICBwaG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW1wbC5wcmVwYXJlRGV0ZWN0aW9uQ2FjaGUodGhpcy5fY2FjaGUsIHRoaXMudWEsIHRoaXMubWF4UGhvbmVXaWR0aCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUucGhvbmU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRldGVjdGVkIHRhYmxldCB0eXBlL2ZhbWlseSBzdHJpbmcgb3IgPHR0Pm51bGw8L3R0Pi5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBUaGUgcmV0dXJuZWQgdGFibGV0IChmYW1pbHkgb3IgcHJvZHVjZXIpIGlzIG9uZSBvZiBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAqIDxicj48dHQ+aVBhZCwgTmV4dXNUYWJsZXQsIEdvb2dsZVRhYmxldCwgU2Ftc3VuZ1RhYmxldCwgS2luZGxlLCBTdXJmYWNlVGFibGV0LFxuICAgICAgICAgKiBIUFRhYmxldCwgQXN1c1RhYmxldCwgQmxhY2tCZXJyeVRhYmxldCwgSFRDdGFibGV0LCBNb3Rvcm9sYVRhYmxldCwgTm9va1RhYmxldCxcbiAgICAgICAgICogQWNlclRhYmxldCwgVG9zaGliYVRhYmxldCwgTEdUYWJsZXQsIEZ1aml0c3VUYWJsZXQsIFByZXN0aWdpb1RhYmxldCxcbiAgICAgICAgICogTGVub3ZvVGFibGV0LCBEZWxsVGFibGV0LCBZYXJ2aWtUYWJsZXQsIE1lZGlvblRhYmxldCwgQXJub3ZhVGFibGV0LFxuICAgICAgICAgKiBJbnRlbnNvVGFibGV0LCBJUlVUYWJsZXQsIE1lZ2Fmb25UYWJsZXQsIEVib2RhVGFibGV0LCBBbGxWaWV3VGFibGV0LFxuICAgICAgICAgKiBBcmNob3NUYWJsZXQsIEFpbm9sVGFibGV0LCBOb2tpYUx1bWlhVGFibGV0LCBTb255VGFibGV0LCBQaGlsaXBzVGFibGV0LFxuICAgICAgICAgKiBDdWJlVGFibGV0LCBDb2J5VGFibGV0LCBNSURUYWJsZXQsIE1TSVRhYmxldCwgU01pVFRhYmxldCwgUm9ja0NoaXBUYWJsZXQsXG4gICAgICAgICAqIEZseVRhYmxldCwgYnFUYWJsZXQsIEh1YXdlaVRhYmxldCwgTmVjVGFibGV0LCBQYW50ZWNoVGFibGV0LCBCcm9uY2hvVGFibGV0LFxuICAgICAgICAgKiBWZXJzdXNUYWJsZXQsIFp5bmNUYWJsZXQsIFBvc2l0aXZvVGFibGV0LCBOYWJpVGFibGV0LCBLb2JvVGFibGV0LCBEYW5ld1RhYmxldCxcbiAgICAgICAgICogVGV4ZXRUYWJsZXQsIFBsYXlzdGF0aW9uVGFibGV0LCBUcmVrc3RvclRhYmxldCwgUHlsZUF1ZGlvVGFibGV0LCBBZHZhblRhYmxldCxcbiAgICAgICAgICogRGFueVRlY2hUYWJsZXQsIEdhbGFwYWRUYWJsZXQsIE1pY3JvbWF4VGFibGV0LCBLYXJib25uVGFibGV0LCBBbGxGaW5lVGFibGV0LFxuICAgICAgICAgKiBQUk9TQ0FOVGFibGV0LCBZT05FU1RhYmxldCwgQ2hhbmdKaWFUYWJsZXQsIEdVVGFibGV0LCBQb2ludE9mVmlld1RhYmxldCxcbiAgICAgICAgICogT3Zlcm1heFRhYmxldCwgSENMVGFibGV0LCBEUFNUYWJsZXQsIFZpc3R1cmVUYWJsZXQsIENyZXN0YVRhYmxldCxcbiAgICAgICAgICogTWVkaWF0ZWtUYWJsZXQsIENvbmNvcmRlVGFibGV0LCBHb0NsZXZlclRhYmxldCwgTW9kZWNvbVRhYmxldCwgVm9uaW5vVGFibGV0LFxuICAgICAgICAgKiBFQ1NUYWJsZXQsIFN0b3JleFRhYmxldCwgVm9kYWZvbmVUYWJsZXQsIEVzc2VudGllbEJUYWJsZXQsIFJvc3NNb29yVGFibGV0LFxuICAgICAgICAgKiBpTW9iaWxlVGFibGV0LCBUb2xpbm9UYWJsZXQsIEF1ZGlvU29uaWNUYWJsZXQsIEFNUEVUYWJsZXQsIFNra1RhYmxldCxcbiAgICAgICAgICogVGVjbm9UYWJsZXQsIEpYRFRhYmxldCwgaUpveVRhYmxldCwgRlgyVGFibGV0LCBYb3JvVGFibGV0LCBWaWV3c29uaWNUYWJsZXQsXG4gICAgICAgICAqIFZlcml6b25UYWJsZXQsIE9keXNUYWJsZXQsIENhcHRpdmFUYWJsZXQsIEljb25iaXRUYWJsZXQsIFRlY2xhc3RUYWJsZXQsXG4gICAgICAgICAqIE9uZGFUYWJsZXQsIEpheXRlY2hUYWJsZXQsIEJsYXVwdW5rdFRhYmxldCwgRGlnbWFUYWJsZXQsIEV2b2xpb1RhYmxldCxcbiAgICAgICAgICogTGF2YVRhYmxldCwgQW9jVGFibGV0LCBNcG1hblRhYmxldCwgQ2Vsa29uVGFibGV0LCBXb2xkZXJUYWJsZXQsIE1lZGlhY29tVGFibGV0LFxuICAgICAgICAgKiBNaVRhYmxldCwgTmliaXJ1VGFibGV0LCBOZXhvVGFibGV0LCBMZWFkZXJUYWJsZXQsIFViaXNsYXRlVGFibGV0LFxuICAgICAgICAgKiBQb2NrZXRCb29rVGFibGV0LCBLb2Nhc29UYWJsZXQsIEhpc2Vuc2VUYWJsZXQsIEh1ZGwsIFRlbHN0cmFUYWJsZXQsXG4gICAgICAgICAqIEdlbmVyaWNUYWJsZXQ8L3R0Pjxicj5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBJZiB0aGUgZGV2aWNlIGlzIG5vdCBkZXRlY3RlZCBieSB0aGUgcmVndWxhciBleHByZXNzaW9ucyBmcm9tIE1vYmlsZS1EZXRlY3QsIGEgdGVzdCBpcyBtYWRlIGFnYWluc3RcbiAgICAgICAgICogdGhlIHBhdHRlcm5zIG9mIDxhIGhyZWY9XCJodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tL1wiPmRldGVjdG1vYmlsZWJyb3dzZXJzLmNvbTwvYT4uIElmIHRoaXMgdGVzdFxuICAgICAgICAgKiBpcyBwb3NpdGl2ZSwgYSB2YWx1ZSBvZiA8Y29kZT5Vbmtub3duVGFibGV0PC9jb2RlPiBvciA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiBpcyByZXR1cm5lZC48YnI+XG4gICAgICAgICAqIFdoZW4gdXNlZCBpbiBicm93c2VyLCB0aGUgZGVjaXNpb24gd2hldGhlciBwaG9uZSBvciB0YWJsZXQgaXMgbWFkZSBiYXNlZCBvbiA8Y29kZT5zY3JlZW4ud2lkdGgvaGVpZ2h0PC9jb2RlPi48YnI+XG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogV2hlbiB1c2VkIHNlcnZlci1zaWRlIChub2RlLmpzKSwgdGhlcmUgaXMgbm8gd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiA8Y29kZT5Vbmtub3duVGFibGV0PC9jb2RlPlxuICAgICAgICAgKiBhbmQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4sIHNvIHlvdSB3aWxsIGdldCA8Y29kZT5udWxsPC9jb2RlPiBoZXJlLCB3aGlsZSB7QGxpbmsgTW9iaWxlRGV0ZWN0I21vYmlsZX1cbiAgICAgICAgICogd2lsbCByZXR1cm4gPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4uPGJyPlxuICAgICAgICAgKiBCZSBhd2FyZSB0aGF0IHNpbmNlIHYxLjAuMCBpbiB0aGlzIHNwZWNpYWwgY2FzZSB5b3Ugd2lsbCBnZXQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gb25seSBmb3I6XG4gICAgICAgICAqIHtAbGluayBNb2JpbGVEZXRlY3QjbW9iaWxlfSwgbm90IGZvciB7QGxpbmsgTW9iaWxlRGV0ZWN0I3Bob25lfSBhbmQge0BsaW5rIE1vYmlsZURldGVjdCN0YWJsZXR9LlxuICAgICAgICAgKiBJbiB2ZXJzaW9ucyBiZWZvcmUgdjEuMC4wIGFsbCAzIG1ldGhvZHMgcmV0dXJuZWQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gd2hpY2ggd2FzIHRlZGlvdXMgdG8gdXNlLlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIEluIG1vc3QgY2FzZXMgeW91IHdpbGwgdXNlIHRoZSByZXR1cm4gdmFsdWUganVzdCBhcyBhIGJvb2xlYW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBrZXkgb2YgdGhlIHRhYmxldCBmYW1pbHkgb3IgcHJvZHVjZXIsIGUuZy4gXCJTYW1zdW5nVGFibGV0XCJcbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCN0YWJsZXRcbiAgICAgICAgICovXG4gICAgICAgIHRhYmxldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW1wbC5wcmVwYXJlRGV0ZWN0aW9uQ2FjaGUodGhpcy5fY2FjaGUsIHRoaXMudWEsIHRoaXMubWF4UGhvbmVXaWR0aCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUudGFibGV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSAoZmlyc3QpIGRldGVjdGVkIHVzZXItYWdlbnQgc3RyaW5nIG9yIDx0dD5udWxsPC90dD4uXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogVGhlIHJldHVybmVkIHVzZXItYWdlbnQgaXMgb25lIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5DaHJvbWUsIERvbGZpbiwgT3BlcmEsIFNreWZpcmUsIEVkZ2UsIElFLCBGaXJlZm94LCBCb2x0LCBUZWFTaGFyaywgQmxhemVyLFxuICAgICAgICAgKiBTYWZhcmksIFdlQ2hhdCwgVUNCcm93c2VyLCBiYWlkdWJveGFwcCwgYmFpZHVicm93c2VyLCBEaWlnb0Jyb3dzZXIsIE1lcmN1cnksXG4gICAgICAgICAqIE9iaWdvQnJvd3NlciwgTmV0RnJvbnQsIEdlbmVyaWNCcm93c2VyLCBQYWxlTW9vbjwvdHQ+PGJyPlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIEluIG1vc3QgY2FzZXMgY2FsbGluZyB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudH0gd2lsbCBiZSBzdWZmaWNpZW50LiBCdXQgdGhlcmUgYXJlIHJhcmVcbiAgICAgICAgICogY2FzZXMgd2hlcmUgYSBtb2JpbGUgZGV2aWNlIHByZXRlbmRzIHRvIGJlIG1vcmUgdGhhbiBvbmUgcGFydGljdWxhciBicm93c2VyLiBZb3UgY2FuIGdldCB0aGVcbiAgICAgICAgICogbGlzdCBvZiBhbGwgbWF0Y2hlcyB3aXRoIHtAbGluayBNb2JpbGVEZXRlY3QjdXNlckFnZW50c30gb3IgY2hlY2sgZm9yIGEgcGFydGljdWxhciB2YWx1ZSBieVxuICAgICAgICAgKiBwcm92aWRpbmcgb25lIG9mIHRoZSBkZWZpbmVkIGtleXMgYXMgZmlyc3QgYXJndW1lbnQgdG8ge0BsaW5rIE1vYmlsZURldGVjdCNpc30uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBrZXkgZm9yIHRoZSBkZXRlY3RlZCB1c2VyLWFnZW50IG9yIDx0dD5udWxsPC90dD5cbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCN1c2VyQWdlbnRcbiAgICAgICAgICovXG4gICAgICAgIHVzZXJBZ2VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlLnVzZXJBZ2VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGUudXNlckFnZW50ID0gaW1wbC5maW5kTWF0Y2goaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy51YXMsIHRoaXMudWEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLnVzZXJBZ2VudDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhbGwgZGV0ZWN0ZWQgdXNlci1hZ2VudCBzdHJpbmdzLlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIFRoZSBhcnJheSBpcyBlbXB0eSBvciBjb250YWlucyBvbmUgb3IgbW9yZSBvZiBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAqIDxicj48dHQ+Q2hyb21lLCBEb2xmaW4sIE9wZXJhLCBTa3lmaXJlLCBFZGdlLCBJRSwgRmlyZWZveCwgQm9sdCwgVGVhU2hhcmssIEJsYXplcixcbiAgICAgICAgICogU2FmYXJpLCBXZUNoYXQsIFVDQnJvd3NlciwgYmFpZHVib3hhcHAsIGJhaWR1YnJvd3NlciwgRGlpZ29Ccm93c2VyLCBNZXJjdXJ5LFxuICAgICAgICAgKiBPYmlnb0Jyb3dzZXIsIE5ldEZyb250LCBHZW5lcmljQnJvd3NlciwgUGFsZU1vb248L3R0Pjxicj5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBJbiBtb3N0IGNhc2VzIGNhbGxpbmcge0BsaW5rIE1vYmlsZURldGVjdCN1c2VyQWdlbnR9IHdpbGwgYmUgc3VmZmljaWVudC4gQnV0IHRoZXJlIGFyZSByYXJlXG4gICAgICAgICAqIGNhc2VzIHdoZXJlIGEgbW9iaWxlIGRldmljZSBwcmV0ZW5kcyB0byBiZSBtb3JlIHRoYW4gb25lIHBhcnRpY3VsYXIgYnJvd3Nlci4gWW91IGNhbiBnZXQgdGhlXG4gICAgICAgICAqIGxpc3Qgb2YgYWxsIG1hdGNoZXMgd2l0aCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudHN9IG9yIGNoZWNrIGZvciBhIHBhcnRpY3VsYXIgdmFsdWUgYnlcbiAgICAgICAgICogcHJvdmlkaW5nIG9uZSBvZiB0aGUgZGVmaW5lZCBrZXlzIGFzIGZpcnN0IGFyZ3VtZW50IHRvIHtAbGluayBNb2JpbGVEZXRlY3QjaXN9LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBhcnJheSBvZiBkZXRlY3RlZCB1c2VyLWFnZW50IGtleXMgb3IgPHR0PltdPC90dD5cbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCN1c2VyQWdlbnRzXG4gICAgICAgICAqL1xuICAgICAgICB1c2VyQWdlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FjaGUudXNlckFnZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGUudXNlckFnZW50cyA9IGltcGwuZmluZE1hdGNoZXMoaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy51YXMsIHRoaXMudWEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLnVzZXJBZ2VudHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRldGVjdGVkIG9wZXJhdGluZyBzeXN0ZW0gc3RyaW5nIG9yIDx0dD5udWxsPC90dD4uXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogVGhlIG9wZXJhdGluZyBzeXN0ZW0gaXMgb25lIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5BbmRyb2lkT1MsIEJsYWNrQmVycnlPUywgUGFsbU9TLCBTeW1iaWFuT1MsIFdpbmRvd3NNb2JpbGVPUywgV2luZG93c1Bob25lT1MsXG4gICAgICAgICAqIGlPUywgaVBhZE9TLCBNZWVHb09TLCBNYWVtb09TLCBKYXZhT1MsIHdlYk9TLCBiYWRhT1MsIEJSRVdPUzwvdHQ+PGJyPlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUga2V5IGZvciB0aGUgZGV0ZWN0ZWQgb3BlcmF0aW5nIHN5c3RlbS5cbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCNvc1xuICAgICAgICAgKi9cbiAgICAgICAgb3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZS5vcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGUub3MgPSBpbXBsLmRldGVjdE9TKHRoaXMudWEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLm9zO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIHZlcnNpb24gKGFzIE51bWJlcikgb2YgdGhlIGdpdmVuIHByb3BlcnR5IGluIHRoZSBVc2VyLUFnZW50LlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIFdpbGwgcmV0dXJuIGEgZmxvYXQgbnVtYmVyLiAoZWcuIDJfMCB3aWxsIHJldHVybiAyLjAsIDQuMy4xIHdpbGwgcmV0dXJuIDQuMzEpXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgYSBrZXkgZGVmaW5pbmcgYSB0aGluZyB3aGljaCBoYXMgYSB2ZXJzaW9uLjxicj5cbiAgICAgICAgICogICAgICAgIFlvdSBjYW4gdXNlIG9uZSBvZiBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAqIDxicj48dHQ+TW9iaWxlLCBCdWlsZCwgVmVyc2lvbiwgVmVuZG9ySUQsIGlQYWQsIGlQaG9uZSwgaVBvZCwgS2luZGxlLCBDaHJvbWUsIENvYXN0LFxuICAgICAgICAgKiBEb2xmaW4sIEZpcmVmb3gsIEZlbm5lYywgRWRnZSwgSUUsIE5ldEZyb250LCBOb2tpYUJyb3dzZXIsIE9wZXJhLCBPcGVyYSBNaW5pLFxuICAgICAgICAgKiBPcGVyYSBNb2JpLCBVQ0Jyb3dzZXIsIE1RUUJyb3dzZXIsIE1pY3JvTWVzc2VuZ2VyLCBiYWlkdWJveGFwcCwgYmFpZHVicm93c2VyLFxuICAgICAgICAgKiBTYW1zdW5nQnJvd3NlciwgSXJvbiwgU2FmYXJpLCBTa3lmaXJlLCBUaXplbiwgV2Via2l0LCBQYWxlTW9vbiwgR2Vja28sIFRyaWRlbnQsXG4gICAgICAgICAqIFByZXN0bywgR29hbm5hLCBpT1MsIEFuZHJvaWQsIEJsYWNrQmVycnksIEJSRVcsIEphdmEsIFdpbmRvd3MgUGhvbmUgT1MsIFdpbmRvd3NcbiAgICAgICAgICogUGhvbmUsIFdpbmRvd3MgQ0UsIFdpbmRvd3MgTlQsIFN5bWJpYW4sIHdlYk9TPC90dD48YnI+XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSB2ZXJzaW9uIGFzIGZsb2F0IG9yIDx0dD5OYU48L3R0PiBpZiBVc2VyLUFnZW50IGRvZXNuJ3QgY29udGFpbiB0aGlzIHZlcnNpb24uXG4gICAgICAgICAqICAgICAgICAgIEJlIGNhcmVmdWwgd2hlbiBjb21wYXJpbmcgdGhpcyB2YWx1ZSB3aXRoICc9PScgb3BlcmF0b3IhXG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjdmVyc2lvblxuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvbjogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGltcGwuZ2V0VmVyc2lvbihrZXksIHRoaXMudWEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIHZlcnNpb24gKGFzIFN0cmluZykgb2YgdGhlIGdpdmVuIHByb3BlcnR5IGluIHRoZSBVc2VyLUFnZW50LlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgYSBrZXkgZGVmaW5pbmcgYSB0aGluZyB3aGljaCBoYXMgYSB2ZXJzaW9uLjxicj5cbiAgICAgICAgICogICAgICAgIFlvdSBjYW4gdXNlIG9uZSBvZiBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAqIDxicj48dHQ+TW9iaWxlLCBCdWlsZCwgVmVyc2lvbiwgVmVuZG9ySUQsIGlQYWQsIGlQaG9uZSwgaVBvZCwgS2luZGxlLCBDaHJvbWUsIENvYXN0LFxuICAgICAgICAgKiBEb2xmaW4sIEZpcmVmb3gsIEZlbm5lYywgRWRnZSwgSUUsIE5ldEZyb250LCBOb2tpYUJyb3dzZXIsIE9wZXJhLCBPcGVyYSBNaW5pLFxuICAgICAgICAgKiBPcGVyYSBNb2JpLCBVQ0Jyb3dzZXIsIE1RUUJyb3dzZXIsIE1pY3JvTWVzc2VuZ2VyLCBiYWlkdWJveGFwcCwgYmFpZHVicm93c2VyLFxuICAgICAgICAgKiBTYW1zdW5nQnJvd3NlciwgSXJvbiwgU2FmYXJpLCBTa3lmaXJlLCBUaXplbiwgV2Via2l0LCBQYWxlTW9vbiwgR2Vja28sIFRyaWRlbnQsXG4gICAgICAgICAqIFByZXN0bywgR29hbm5hLCBpT1MsIEFuZHJvaWQsIEJsYWNrQmVycnksIEJSRVcsIEphdmEsIFdpbmRvd3MgUGhvbmUgT1MsIFdpbmRvd3NcbiAgICAgICAgICogUGhvbmUsIFdpbmRvd3MgQ0UsIFdpbmRvd3MgTlQsIFN5bWJpYW4sIHdlYk9TPC90dD48YnI+XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBcInJhd1wiIHZlcnNpb24gYXMgU3RyaW5nIG9yIDx0dD5udWxsPC90dD4gaWYgVXNlci1BZ2VudCBkb2Vzbid0IGNvbnRhaW4gdGhpcyB2ZXJzaW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3ZlcnNpb25TdHJcbiAgICAgICAgICovXG4gICAgICAgIHZlcnNpb25TdHI6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbXBsLmdldFZlcnNpb25TdHIoa2V5LCB0aGlzLnVhKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2xvYmFsIHRlc3Qga2V5IGFnYWluc3QgdXNlckFnZW50LCBvcywgcGhvbmUsIHRhYmxldCBhbmQgc29tZSBvdGhlciBwcm9wZXJ0aWVzIG9mIHVzZXJBZ2VudCBzdHJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIGtleSAoY2FzZS1pbnNlbnNpdGl2ZSkgb2YgYSB1c2VyQWdlbnQsIGFuIG9wZXJhdGluZyBzeXN0ZW0sIHBob25lIG9yXG4gICAgICAgICAqICAgICAgICB0YWJsZXQgZmFtaWx5Ljxicj5cbiAgICAgICAgICogICAgICAgIEZvciBhIGNvbXBsZXRlIGxpc3Qgb2YgcG9zc2libGUgdmFsdWVzLCBzZWUge0BsaW5rIE1vYmlsZURldGVjdCN1c2VyQWdlbnR9LFxuICAgICAgICAgKiAgICAgICAge0BsaW5rIE1vYmlsZURldGVjdCNvc30sIHtAbGluayBNb2JpbGVEZXRlY3QjcGhvbmV9LCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3RhYmxldH0uPGJyPlxuICAgICAgICAgKiAgICAgICAgQWRkaXRpb25hbGx5IHlvdSBoYXZlIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5Cb3QsIE1vYmlsZUJvdCwgRGVza3RvcE1vZGUsIFRWLCBXZWJLaXQsIENvbnNvbGUsIFdhdGNoPC90dD48YnI+XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSA8dHQ+dHJ1ZTwvdHQ+IHdoZW4gdGhlIGdpdmVuIGtleSBpcyBvbmUgb2YgdGhlIGRlZmluZWQga2V5cyBvZiB1c2VyQWdlbnQsIG9zLCBwaG9uZSxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgIHRhYmxldCBvciBvbmUgb2YgdGhlIGxpc3RlZCBhZGRpdGlvbmFsIGtleXMsIG90aGVyd2lzZSA8dHQ+ZmFsc2U8L3R0PlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I2lzXG4gICAgICAgICAqL1xuICAgICAgICBpczogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5zSUModGhpcy51c2VyQWdlbnRzKCksIGtleSkgfHxcbiAgICAgICAgICAgICAgICAgICBlcXVhbElDKGtleSwgdGhpcy5vcygpKSB8fFxuICAgICAgICAgICAgICAgICAgIGVxdWFsSUMoa2V5LCB0aGlzLnBob25lKCkpIHx8XG4gICAgICAgICAgICAgICAgICAgZXF1YWxJQyhrZXksIHRoaXMudGFibGV0KCkpIHx8XG4gICAgICAgICAgICAgICAgICAgY29udGFpbnNJQyhpbXBsLmZpbmRNYXRjaGVzKGltcGwubW9iaWxlRGV0ZWN0UnVsZXMudXRpbHMsIHRoaXMudWEpLCBrZXkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEbyBhIHF1aWNrIHRlc3QgYWdhaW5zdCBuYXZpZ2F0b3I6OnVzZXJBZ2VudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBwYXR0ZXJuIHRoZSBwYXR0ZXJuLCBlaXRoZXIgYXMgU3RyaW5nIG9yIFJlZ0V4cFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgIChhIHN0cmluZyB3aWxsIGJlIGNvbnZlcnRlZCB0byBhIGNhc2UtaW5zZW5zaXRpdmUgUmVnRXhwKS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IDx0dD50cnVlPC90dD4gd2hlbiB0aGUgcGF0dGVybiBtYXRjaGVzLCBvdGhlcndpc2UgPHR0PmZhbHNlPC90dD5cbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCNtYXRjaFxuICAgICAgICAgKi9cbiAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICBpZiAoIShwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSkge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgbW9iaWxlIGRldmljZSBjYW4gYmUgY29uc2lkZXJlZCBhcyBwaG9uZSByZWdhcmRpbmcgPGNvZGU+c2NyZWVuLndpZHRoPC9jb2RlPi5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBPYnZpb3VzbHkgdGhpcyBtZXRob2QgbWFrZXMgc2Vuc2UgaW4gYnJvd3NlciBlbnZpcm9ubWVudHMgb25seSAobm90IGZvciBOb2RlLmpzKSFcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXhQaG9uZVdpZHRoXSB0aGUgbWF4aW11bSBsb2dpY2FsIHBpeGVscyAoYWthLiBDU1MtcGl4ZWxzKSB0byBiZSBjb25zaWRlcmVkIGFzIHBob25lLjxicj5cbiAgICAgICAgICogICAgICAgIFRoZSBhcmd1bWVudCBpcyBvcHRpb25hbCBhbmQgaWYgbm90IHByZXNlbnQgb3IgZmFsc3ksIHRoZSB2YWx1ZSBvZiB0aGUgY29uc3RydWN0b3IgaXMgdGFrZW4uXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufHVuZGVmaW5lZH0gPGNvZGU+dW5kZWZpbmVkPC9jb2RlPiBpZiBzY3JlZW4gc2l6ZSB3YXNuJ3QgZGV0ZWN0YWJsZSwgZWxzZSA8Y29kZT50cnVlPC9jb2RlPlxuICAgICAgICAgKiAgICAgICAgICB3aGVuIHNjcmVlbi53aWR0aCBpcyBsZXNzIG9yIGVxdWFsIHRvIG1heFBob25lV2lkdGgsIG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uPGJyPlxuICAgICAgICAgKiAgICAgICAgICBXaWxsIGFsd2F5cyByZXR1cm4gPGNvZGU+dW5kZWZpbmVkPC9jb2RlPiBzZXJ2ZXItc2lkZS5cbiAgICAgICAgICovXG4gICAgICAgIGlzUGhvbmVTaXplZDogZnVuY3Rpb24gKG1heFBob25lV2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBNb2JpbGVEZXRlY3QuaXNQaG9uZVNpemVkKG1heFBob25lV2lkdGggfHwgdGhpcy5tYXhQaG9uZVdpZHRoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbW9iaWxlIGdyYWRlICgnQScsICdCJywgJ0MnKS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gb25lIG9mIHRoZSBtb2JpbGUgZ3JhZGVzICgnQScsICdCJywgJ0MnKS5cbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCNtb2JpbGVHcmFkZVxuICAgICAgICAgKi9cbiAgICAgICAgbW9iaWxlR3JhZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZS5ncmFkZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGUuZ3JhZGUgPSBpbXBsLm1vYmlsZUdyYWRlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLmdyYWRlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGVudmlyb25tZW50LWRlcGVuZGVudFxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuc2NyZWVuKSB7XG4gICAgICAgIE1vYmlsZURldGVjdC5pc1Bob25lU2l6ZWQgPSBmdW5jdGlvbiAobWF4UGhvbmVXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG1heFBob25lV2lkdGggPCAwID8gdW5kZWZpbmVkIDogaW1wbC5nZXREZXZpY2VTbWFsbGVyU2lkZSgpIDw9IG1heFBob25lV2lkdGg7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgTW9iaWxlRGV0ZWN0LmlzUGhvbmVTaXplZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIH1cblxuICAgIC8vIHNob3VsZCBub3QgYmUgcmVwbGFjZWQgYnkgYSBjb21wbGV0ZWx5IG5ldyBvYmplY3QgLSBqdXN0IG92ZXJ3cml0ZSBleGlzdGluZyBtZXRob2RzXG4gICAgTW9iaWxlRGV0ZWN0Ll9pbXBsID0gaW1wbDtcbiAgICBcbiAgICBNb2JpbGVEZXRlY3QudmVyc2lvbiA9ICcxLjQuNCAyMDE5LTA5LTIxJztcblxuICAgIHJldHVybiBNb2JpbGVEZXRlY3Q7XG59KTsgLy8gZW5kIG9mIGNhbGwgb2YgZGVmaW5lKClcbn0pKChmdW5jdGlvbiAodW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTsgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICByZXR1cm4gZGVmaW5lO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmYWN0b3J5KSB7IHdpbmRvdy5Nb2JpbGVEZXRlY3QgPSBmYWN0b3J5KCk7IH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGxlYXNlIGZpbGUgYSBidWcgaWYgeW91IGdldCB0aGlzIGVycm9yIVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gZW52aXJvbm1lbnQnKTtcbiAgICB9XG59KSgpKTsiLCJjb25zdCByZXNwb25zaXZlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbW9kdWxlcy9yZXNwb25zaXZlX2NvbnRyb2xsZXInKTtcclxuY29uc3Qgc2VhcmNoQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbW9kdWxlcy9zZWFyY2hfY29udHJvbGxlcicpO1xyXG5jb25zdCBnYW1lc1JlcXVlc3QgPSByZXF1aXJlKCcuL21vZHVsZXMvZ2FtZXNfcmVxdWVzdCcpO1xyXG5cclxucmVzcG9uc2l2ZUNvbnRyb2xsZXIoe1xyXG5cdG5hdmlnYXRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZpZ2F0aW9uJyksXHJcblx0dG9nZ2xlQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlTmF2QnV0dG9uJylcclxufSlcclxuXHJcbi8vIFNvbGljaXR1ZCBkZSBqdWVnb3MgYWwgc2Vydmlkb3JcclxuZ2FtZXNSZXF1ZXN0KCkudGhlbihyZXMgPT4ge1xyXG5cdGlmKHR5cGVvZiByZXMgIT09ICdzdHJpbmcnKXtcclxuXHRcdHNlYXJjaENvbnRyb2xsZXIocmVzLCB7XHJcblx0XHRcdGlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoSW5wdXQnKSxcclxuXHRcdFx0c3VnZ2VzdGlvbkJveDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Z2dlc3Rpb25Cb3gnKSxcclxuXHRcdFx0cm9vdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaFJlc3VsdHNSb290JyksXHJcblx0XHRcdG1vcmVSZXN1bHRzQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvd01vcmVSZXN1bHRzQnV0dG9uJylcclxuXHRcdH0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdH1cclxufSlcclxuXHJcbi8vQ29udHJvbGFkb3IgcXVlIG11ZXN0cmEgZWwgc3Bpbm5lciBkZSBwcm9ncmVzbyBjdWFuZG8gY2FtYmlhbW9zIGRlIHDDoWdpbmFcclxucmVxdWlyZSgnLi9tb2R1bGVzL2NoYW5nZXBhZ2VfY29udHJvbGxlcicpKCk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9hcHBpbmZvJyk7XHJcblxyXG4iLCJjb25zdCBhbmltYXRpb25zID0ge307XHJcblxyXG5jb25zdCBjcmVhdGVBbmltID0gKGVsZW1lbnQsIHBhcmFtcykgPT4ge1xyXG5cdHJldHVybiBlbGVtZW50LmFuaW1hdGUocGFyYW1zLmtleWZyYW1lcywgcGFyYW1zLnByb3BzKTtcclxufVxyXG5cclxuY29uc3Qga2V5ZnJhbWVzID0ge1xyXG5cdGZhZGVJbjogW1xyXG5cdFx0e3RyYW5zZm9ybTogJ3NjYWxlKDAuNiknLCBvcGFjaXR5OiAwfSxcclxuXHRcdHt0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6IDF9XHJcblx0XSxcclxuXHRmYWRlT3V0RG93bjogW1xyXG5cdFx0e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OiAxfSxcclxuXHRcdHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDIwMHB4KScsIG9wYWNpdHk6IDB9XHJcblx0XSxcclxuXHRzcGluOiBbXHJcblx0XHR7dHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJ30sXHJcblx0XHR7dHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknfVxyXG5cdF1cclxufTtcclxuXHJcbmFuaW1hdGlvbnMuZmFkZU91dERvd24gPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBjcmVhdGVBbmltKGVsZW1lbnQsIHtcclxuXHRcdGtleWZyYW1lczoga2V5ZnJhbWVzLmZhZGVPdXREb3duLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0ZmlsbDogJ2JvdGgnLFxyXG5cdFx0XHRlYXNpbmc6ICdlYXNlJyxcclxuXHRcdFx0ZHVyYXRpb246IDEwMDAsXHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmFuaW1hdGlvbnMuZmFkZUluID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gY3JlYXRlQW5pbShlbGVtZW50LCB7XHJcblx0XHRrZXlmcmFtZXM6IGtleWZyYW1lcy5mYWRlSW4sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRmaWxsOiAnYm90aCcsXHJcblx0XHRcdGVhc2luZzogJ2Vhc2UnLFxyXG5cdFx0XHRkdXJhdGlvbjogMTAwMCxcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuYW5pbWF0aW9ucy5zcGluID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gY3JlYXRlQW5pbShlbGVtZW50LCB7XHJcblx0XHRrZXlmcmFtZXM6IGtleWZyYW1lcy5zcGluLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0aXRlcmF0aW9uczogJ0luZmluaXR5JyxcclxuXHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcclxuXHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFuaW1hdGlvbnM7IiwiY29uc29sZS5sb2coXCJCdWVub3MgSnVlZ29zIFtQT1JUQUxdIHYxLjAuMFwiKTsiLCJjb25zdCBodG1sUGFydGlhbHMgPSByZXF1aXJlKCcuL2h0bWxfcGFydGlhbHMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoZSkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChodG1sUGFydGlhbHMuY2hhbmdlUGFnZVNwaW5uZXIoKSk7XHJcblx0XHRjb25zb2xlLmxvZygnRVZFTlQgW2JlZm9yZXVubG9hZF0nKTtcclxuXHR9KVxyXG59IiwiY29uc3Qgbm9ybWFsaXplU3RyID0gKHN0cikgPT4ge1xyXG5cdGxldCBzdHJpbmcgPSBzdHIudG9Mb3dlckNhc2UoKTtcclxuICBcdHJldHVybiBzdHJpbmcubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpO1xyXG59IFxyXG5cclxuY29uc3QgZmlsdGVyR2FtZXMgPSAoZ2FtZXMsIHRvRmlsdGVyKSA9PiB7XHJcblx0cmV0dXJuIGdhbWVzLmZpbHRlcigoZWwpID0+IHtcclxuXHRcdGxldCBhbGxXb3JkcyA9IGVsLnRpdGxlICsgJyAnICsgZWwuZGVzY3JpcHRpb247XHJcblx0XHRhbGxXb3JkcyA9IG5vcm1hbGl6ZVN0cihhbGxXb3Jkcyk7XHJcblx0XHRsZXQgcmVnZXggPSBuZXcgUmVnRXhwKG5vcm1hbGl6ZVN0cih0b0ZpbHRlcikpO1xyXG5cdFx0LyppZihyZWdleC50ZXN0KGFsbFdvcmRzKSl7XHJcblx0XHRcdGNvbnNvbGUubG9nKGFsbFdvcmRzLCByZWdleCk7XHJcblx0XHR9Ki9cclxuXHRcdHJldHVybiByZWdleC50ZXN0KGFsbFdvcmRzKTtcclxuXHR9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwYXJhbXMgPT4ge1xyXG5cdC8qXHJcblx0XHRvYmpldG8gJ3BhcmFtcycgZXNwZXJhZG86IFxyXG5cdFx0cGFyYW1zID0ge1xyXG5cdFx0XHRnYW1lcyxcclxuXHRcdFx0Y2F0ZWdvcnksXHJcblx0XHRcdHRvRmlsdGVyXHJcblx0XHR9XHJcblx0Ki9cclxuXHJcblx0bGV0IGdhbWVzID0gcGFyYW1zLmdhbWVzO1xyXG5cdGNvbnN0IGNhdGVnb3J5ID0gcGFyYW1zLmNhdGVnb3J5LCBcclxuXHRcdHRvRmlsdGVyID0gcGFyYW1zLnRvRmlsdGVyLFxyXG5cdFx0ZnJvbSA9IHBhcmFtcy5mcm9tLFxyXG5cdFx0dG8gPSBwYXJhbXMudG87XHJcblxyXG5cdGlmKGNhdGVnb3J5ICE9PSAnJykge1xyXG5cdFx0Z2FtZXMgPSBnYW1lcy5maWx0ZXIoKGVsKSA9PiBlbC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpO1xyXG5cdFx0Z2FtZXMgPSBnYW1lcy5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRcdHJldHVybiBiLnZvdGUuYXZlcmFnZSAtIGEudm90ZS5hdmVyYWdlO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGlmKHRvRmlsdGVyICE9PSAnJykge1xyXG5cdFx0Z2FtZXMgPSBmaWx0ZXJHYW1lcyhnYW1lcywgdG9GaWx0ZXIpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdhbWVzO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2pzb24vanVlZ29zJywge1xyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcblx0XHR9XHJcblx0fSlcclxuXHRpZihyZXNwb25zZS5vayA9PT0gdHJ1ZSl7XHJcblx0XHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gJ2dhbWVzIHJlcXVlc3QgaHR0cCBlcnJvcic7XHJcblx0fVxyXG59IiwiY29uc3QgTW9iaWxlRGV0ZWN0ID0gcmVxdWlyZSgnbW9iaWxlLWRldGVjdCcpO1xyXG5jb25zdCBtb2JpbGVEZXZpY2UgPSBuZXcgTW9iaWxlRGV0ZWN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuY29uc3QgaHRtbFBhcnRpYWxzID0ge307XHJcblxyXG5jb25zdCBvbmx5RGVza3RvcEF2YWlsYWJsZSA9IChtb2JpbGVSZWFkeSkgPT4ge1xyXG5cdHJldHVybiAobW9iaWxlRGV2aWNlLm1vYmlsZSgpICE9PSBudWxsICYmIG1vYmlsZVJlYWR5ID09PSBmYWxzZSk7XHJcbn1cclxuXHJcbmNvbnN0IGdldFByZXR0eUNhdGVnb3J5TmFtZSA9IChjYXRlZ29yeSkgPT4ge1xyXG5cdHN3aXRjaChjYXRlZ29yeSl7XHJcblx0XHRjYXNlICdhY2Npb24nOiByZXR1cm4gJ0FjY2nDs24nOyBicmVhaztcclxuXHRcdGNhc2UgJ2F2ZW50dXJhJzogcmV0dXJuICdBdmVudHVyYSc7IGJyZWFrO1xyXG5cdFx0Y2FzZSAnY2hpY2FzJzogcmV0dXJuICdDaGljYXMnOyBicmVhaztcclxuXHRcdGNhc2UgJ2FyY2FkZSc6IHJldHVybiAnQXJjYWRlJzsgYnJlYWs7XHJcblx0XHRjYXNlICdkZXBvcnRlcyc6IHJldHVybiAnRGVwb3J0ZXMnOyBicmVhaztcclxuXHRcdGNhc2UgJ3B1enpsZSc6IHJldHVybiAnUHV6emxlJzsgYnJlYWs7XHJcblx0XHRjYXNlICdjYXJyZXJhcyc6IHJldHVybiAnQ2FycmVyYXMnOyBicmVhaztcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXJzID0gKHZhbG9yYXRpb24pID0+IHtcclxuXHRsZXQgaHRtbFN0YXJzID0gJyc7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XHJcblx0XHRodG1sU3RhcnMgKz0gKGkgPCB2YWxvcmF0aW9uKSA/ICc8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPicgOiAnPGkgY2xhc3M9XCJmYXIgZmEtc3RhclwiPjwvaT4nO1xyXG5cdH1cclxuXHRyZXR1cm4gaHRtbFN0YXJzO1xyXG59IFxyXG5cclxuaHRtbFBhcnRpYWxzLnNlYXJjaEdhbWUgPSAoZ2FtZVBhcmFtcykgPT4ge1xyXG5cdGNvbnN0IHRpdGxlID0gZ2FtZVBhcmFtcy50aXRsZTtcclxuXHRjb25zdCB1cmwgPSBnYW1lUGFyYW1zLnVybDtcclxuXHRjb25zdCBtb2JpbGVSZWFkeSA9IGdhbWVQYXJhbXMubW9iaWxlcmVhZHk7XHJcblxyXG5cdGNvbnN0IGh0bWwgPSAoKSA9PiB7XHJcblx0XHRsZXQgc3RyID0gJyc7XHJcblx0XHRpZihvbmx5RGVza3RvcEF2YWlsYWJsZShtb2JpbGVSZWFkeSkpe1xyXG5cdFx0XHRzdHIgKz0gYDxhIGNsYXNzPVwic3VnZ2VzdGlvbi1saW5rIG5vc2VsZWN0YWJsZVwiIGhyZWY9XCIvanVnYXIvJHt1cmx9XCI+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cInN1Z2dlc3Rpb24tbGlua19fb25seS1kZXNrdG9wXCIgc3JjPVwiL3N0YXRpYy9pbWcvb25seWRlc2t0b3Auc3ZnXCIgYWx0PVwiRGlzcG9uaWJsZSBzb2xvIGVuIGVzY3JpdG9yaW9cIj5gO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RyICs9IGA8YSBjbGFzcz1cInN1Z2dlc3Rpb24tbGlua1wiIGhyZWY9XCIvanVnYXIvJHt1cmx9XCI+YDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3RyICs9IGA8aW1nIGNsYXNzPVwic3VnZ2VzdGlvbi1saW5rX19pbWdcIiBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9idWVub3NqdWVnb3MvaW1hZ2UvdXBsb2FkL2NfZmlsbCxnX2NlbnRlcixoXzE1MCx3XzE1MC8ke3VybH0uanBnXCIgYWx0PVwiJHt0aXRsZX1cIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdWdnZXN0aW9uLWxpbmtfX3RpdGxlXCI+JHt0aXRsZX08L3NwYW4+XHJcblx0XHRcdFx0PC9hPmA7XHJcblxyXG5cdFx0cmV0dXJuIHN0cjtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gaHRtbCgpO1xyXG59XHJcblxyXG5odG1sUGFydGlhbHMuZ2FtZSA9IChnYW1lUGFyYW1zKSA9PiB7XHJcblx0Y29uc3QgdGl0bGUgPSBnYW1lUGFyYW1zLnRpdGxlO1xyXG5cdGNvbnN0IHVybCA9IGdhbWVQYXJhbXMudXJsO1xyXG5cdGNvbnN0IGNhdGVnb3J5ID0gZ2V0UHJldHR5Q2F0ZWdvcnlOYW1lKGdhbWVQYXJhbXMuY2F0ZWdvcnkpO1xyXG5cdGNvbnN0IHZhbG9yYXRpb24gPSBNYXRoLnJvdW5kKGdhbWVQYXJhbXMudm90ZS5hdmVyYWdlKTtcclxuXHRjb25zdCBtb2JpbGVSZWFkeSA9IGdhbWVQYXJhbXMubW9iaWxlcmVhZHk7XHJcblxyXG5cdGNvbnN0IGh0bWwgPSAoKSA9PiB7XHJcblx0XHRsZXQgc3RyID0gJyc7XHJcblxyXG5cdFx0aWYob25seURlc2t0b3BBdmFpbGFibGUobW9iaWxlUmVhZHkpKXtcclxuXHRcdFx0c3RyICs9IGA8aW1nIGNsYXNzPVwiZ2FtZS1pdGVtX19vbmx5LWRlc2t0b3BcIiBzcmM9XCIvc3RhdGljL2ltZy9vbmx5ZGVza3RvcC5zdmdcIiBhbHQ9XCJEaXNwb25pYmxlIHNvbG8gZW4gZXNjcml0b3Jpb1wiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3M9XCJnYW1lLWl0ZW1fX2xpbmsgbm9zZWxlY3RhYmxlXCIgaHJlZj1cIi9qdWdhci8ke3VybH1cIj5gO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RyICs9IGA8YSBjbGFzcz1cImdhbWUtaXRlbV9fbGlua1wiIGhyZWY9XCIvanVnYXIvJHt1cmx9XCI+YFxyXG5cdFx0fVxyXG5cclxuXHRcdHN0ciArPSAgYDxpbWcgY2xhc3M9XCJnYW1lLWl0ZW1fX2ltZ1wiIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2J1ZW5vc2p1ZWdvcy9pbWFnZS91cGxvYWQvY19maWxsLGdfY2VudGVyLGhfMjUwLHdfMjUwLyR7dXJsfS5qcGdcIiBhbHQ9XCIke3RpdGxlfVwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnYW1lLWl0ZW1fX3RpdGxlXCI+JHt0aXRsZX08L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbWUtaXRlbV9fcm93XCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImdhbWUtaXRlbV9fY2F0ZWdvcnlcIj4ke2NhdGVnb3J5fTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ2FtZS1pdGVtX192YWxvcmF0aW9uXCI+XHJcblx0XHRcdFx0XHRcdCR7c3RhcnModmFsb3JhdGlvbil9XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvYT5gO1xyXG5cclxuXHRcdHJldHVybiBzdHI7XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZWxlbWVudC5jbGFzc05hbWUgPSAnZ2FtZS1pdGVtJztcclxuXHRlbGVtZW50LmlubmVySFRNTCA9IGh0bWwoKTtcclxuXHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcblxyXG5odG1sUGFydGlhbHMuZGVsZXRhYmxlR2FtZSA9IChnYW1lUGFyYW1zKSA9PiB7XHJcblx0Y29uc3QgaWQgPSBnYW1lUGFyYW1zLmlkO1xyXG5cdGNvbnN0IHRpdGxlID0gZ2FtZVBhcmFtcy50aXRsZTtcclxuXHRjb25zdCB1cmwgPSBnYW1lUGFyYW1zLnVybDtcclxuXHRjb25zdCBjYXRlZ29yeSA9IGdldFByZXR0eUNhdGVnb3J5TmFtZShnYW1lUGFyYW1zLmNhdGVnb3J5KTtcclxuXHRjb25zdCB2YWxvcmF0aW9uID0gTWF0aC5yb3VuZChnYW1lUGFyYW1zLnZvdGUuYXZlcmFnZSk7XHJcblxyXG5cdGNvbnN0IGh0bWwgPSBgXHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJnYW1lLWl0ZW1fX2RlbGV0ZSBkZWxldGUtYnV0dG9uXCIgZGF0YS1pZD1cIiR7aWR9XCI+IFxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGEgY2xhc3M9XCJnYW1lLWl0ZW1fX2xpbmtcIiBocmVmPVwiL2p1Z2FyLyR7dXJsfVwiPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJnYW1lLWl0ZW1fX2ltZ1wiIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2J1ZW5vc2p1ZWdvcy9pbWFnZS91cGxvYWQvY19maWxsLGdfY2VudGVyLGhfMjUwLHdfMjUwLyR7dXJsfS5qcGdcIiBhbHQ9XCIke3RpdGxlfVwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnYW1lLWl0ZW1fX3RpdGxlXCI+JHt0aXRsZX08L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbWUtaXRlbV9fcm93XCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImdhbWUtaXRlbV9fY2F0ZWdvcnlcIj4ke2NhdGVnb3J5fTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ2FtZS1pdGVtX192YWxvcmF0aW9uXCI+XHJcblx0XHRcdFx0XHRcdCR7c3RhcnModmFsb3JhdGlvbil9XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvYT5gO1xyXG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlbGVtZW50LmNsYXNzTmFtZSA9ICdnYW1lLWl0ZW0nO1xyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmh0bWxQYXJ0aWFscy5lbXB0eUdyaWRNc2cgPSAobXNnKSA9PiB7XHJcblx0cmV0dXJuIGA8cCBjbGFzcz1cImdyaWQtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZSBmYS1wdWxsLWxlZnRcIj48L2k+XHJcblx0XHRcdFx0JHttc2d9XHJcblx0XHRcdDwvcD5gO1xyXG59XHJcblxyXG5odG1sUGFydGlhbHMuY2hhbmdlUGFnZVNwaW5uZXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVsZW1lbnQuY2xhc3NOYW1lID0gJ2NoYW5nZXBhZ2Utc3Bpbm5lcic7XHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2Rpdj4nO1xyXG5cdHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5odG1sUGFydGlhbHMuZ2FtZURvbnRBdmFpbGFibGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVsZW1lbnQuY2xhc3NOYW1lID0gJ2RvbnQtYXZhaWxhYmxlJztcclxuXHRlbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZG9udC1hdmFpbGFibGVfX2JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiZG9udC1hdmFpbGFibGVfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIGZhLXB1bGwtbGVmdFwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdEVzdGUganVlZ28gPGI+c29sbyBlc3TDoSBkaXNwb25pYmxlIGVuIFBDPC9iPiwgcmVncmVzYSBkZXNkZSB0dSBjb21wdXRhZG9yYVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzcz1cImJsYWNrLWJvcmRlci1idXR0b25cIiBocmVmPVwiL1wiPlZlciBvdHJvcyBqdWVnb3M8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PmA7XHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaHRtbFBhcnRpYWxzOyIsIm1vZHVsZS5leHBvcnRzID0gZG9tID0+IHtcclxuXHQvKlxyXG5cdFx0b2JqZXRvICdkb20nIGVzcGVyYWRvOlxyXG5cdFx0ZG9tID0ge1xyXG5cdFx0XHRuYXZpZ2F0aW9uLFxyXG5cdFx0XHR0b2dnbGVCdXR0b25cclxuXHRcdH1cclxuXHQqL1xyXG5cclxuXHRjb25zdCBuYXZpZ2F0aW9uID0gZG9tLm5hdmlnYXRpb247XHJcblx0Y29uc3QgdG9nZ2xlQnV0dG9uID0gZG9tLnRvZ2dsZUJ1dHRvbjtcclxuXHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cclxuXHQvLyBFdmVudG8gZGUgY2xpY2sgcXVlIGFicmUgeSBjaWVycmEgbGEgbmF2ZWdhY2nDs24uIFF1aXRhIGVsIHNjcm9sbCBkZWwgYm9keS5cclxuXHR0b2dnbGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuXHRcdG5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG5cdFx0Ym9keS5jbGFzc0xpc3QudG9nZ2xlKCdub3Njcm9sbCcpO1xyXG5cdH1cclxufSIsImNvbnN0IGFuaW1hdGlvbnMgPSByZXF1aXJlKCcuL2FuaW1hdGlvbnMnKTtcclxuY29uc3QgZ2FtZXNGaWx0ZXIgPSByZXF1aXJlKCcuL2dhbWVzX2ZpbHRlcicpO1xyXG5jb25zdCBodG1sUGFydGlhbHMgPSByZXF1aXJlKCcuL2h0bWxfcGFydGlhbHMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKGdtcywgZG9tKSA9PiB7XHJcblx0LypcclxuXHRcdG9iamV0byAnZG9tJyBlc3BlcmFkbzpcclxuXHRcdGRvbSA9IHtcclxuXHRcdFx0aW5wdXQsXHJcblx0XHRcdHN1Z2dlc3Rpb25Cb3gsXHJcblx0XHRcdHJvb3QsXHJcblx0XHRcdG1vcmVSZXN1bHRzQnV0dG9uXHJcblx0XHR9XHJcblx0Ki9cclxuXHRjb25zdCBnYW1lcyA9IGdtcztcclxuXHRjb25zdCBpbnB1dCA9IGRvbS5pbnB1dDtcclxuXHRjb25zdCBzdWdnZXN0aW9uQm94ID0gZG9tLnN1Z2dlc3Rpb25Cb3g7XHJcblx0Y29uc3Qgcm9vdCA9IGRvbS5yb290O1xyXG5cdGNvbnN0IG1vcmVSZXN1bHRzQnV0dG9uID0gZG9tLm1vcmVSZXN1bHRzQnV0dG9uO1xyXG5cclxuXHRsZXQgc3VnZ2VzdGlvbk9wZW4gPSBmYWxzZTtcclxuXHRsZXQgYW5pbSA9IGFuaW1hdGlvbnMuZmFkZUluKHN1Z2dlc3Rpb25Cb3gpO1xyXG5cdGFuaW0uZmluaXNoKCk7XHJcblxyXG5cdC8vIEV2ZW50byBjdWFuZG8gc2UgZXNjcmliZSBlbiBlbCBpbnB1dFxyXG5cdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG5cdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMyl7XHJcblxyXG5cdFx0XHRsZXQgZmlsdGVyZWRHYW1lcyA9IGdhbWVzRmlsdGVyKHtcclxuXHRcdFx0XHRnYW1lcyxcclxuXHRcdFx0XHRjYXRlZ29yeTogJycsXHJcblx0XHRcdFx0dG9GaWx0ZXI6IGlucHV0LnZhbHVlXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYoZmlsdGVyZWRHYW1lcy5sZW5ndGggPiAxMCkge1xyXG5cdFx0XHRcdG1vcmVSZXN1bHRzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdG1vcmVSZXN1bHRzQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRpbnB1dC5wYXJlbnROb2RlLnN1Ym1pdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtb3JlUmVzdWx0c0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmaWx0ZXJlZEdhbWVzID0gZmlsdGVyZWRHYW1lcy5zbGljZSgwLCAxMCk7XHJcblxyXG5cdFx0XHRpZihmaWx0ZXJlZEdhbWVzLmxlbmd0aCA+IDAgJiYgIXN1Z2dlc3Rpb25PcGVuKXtcclxuXHRcdFx0XHRyb290LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdGZvcihnYW1lIG9mIGZpbHRlcmVkR2FtZXMpIHtcclxuXHRcdFx0XHRcdHJvb3QuaW5uZXJIVE1MICs9IGh0bWxQYXJ0aWFscy5zZWFyY2hHYW1lKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGdhbWUudGl0bGUsXHJcblx0XHRcdFx0XHRcdHVybDogZ2FtZS51cmwsXHJcblx0XHRcdFx0XHRcdG1vYmlsZXJlYWR5OiBnYW1lLm1vYmlsZXJlYWR5XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdWdnZXN0aW9uQm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdGFuaW0ucGxheWJhY2tSYXRlID0gMTtcclxuXHRcdFx0XHRhbmltLnBsYXkoKTtcclxuXHRcdFx0XHRzdWdnZXN0aW9uT3BlbiA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9IGVsc2UgaWYoc3VnZ2VzdGlvbk9wZW4pe1xyXG5cdFx0XHRhbmltLnBsYXliYWNrUmF0ZSA9IC0xO1xyXG5cdFx0XHRhbmltLm9uZmluaXNoID0gZnVuY3Rpb24oZXZ0KXtcclxuXHRcdFx0XHRzdWdnZXN0aW9uQm94LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG5cdFx0XHRcdHN1Z2dlc3Rpb25PcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0YW5pbS5vbmZpbmlzaCA9ICgpID0+IHt9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufSJdfQ==
