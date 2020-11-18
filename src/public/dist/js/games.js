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
const gamesController = require('./modules/games_controller');
const searchController = require('./modules/search_controller');
const gamesRequest = require('./modules/games_request');

const resultsMessage = document.querySelector('#resultsMessage');
if(resultsMessage !== null){
	resultsMessage.style.display = 'none';
}

responsiveController({
	navigation: document.querySelector('#navigation'),
	toggleButton: document.querySelector('#toggleNavButton')
})

// Solicitud de juegos al servidor
gamesRequest().then(res => {
	if(typeof res !== 'string'){
		gamesController(res, {
			root: document.querySelector('#root'),
			button: document.querySelector('#showMoreButton'),
			showMoreData: document.querySelector('#showMoreButton').dataset,
			resultsMessage
		});

		searchController(res, {
			input: document.querySelector('#searchInput'),
			suggestionBox: document.querySelector('#suggestionBox'),
			root: document.querySelector('#searchResultsRoot'),
			moreResultsButton: document.querySelector('#showMoreResultsButton')
		});

		document.querySelector('#preloadGames').remove();
	} else {
		console.log(res);
	}
})

//Controlador que muestra el spinner de progreso cuando cambiamos de página
require('./modules/changepage_controller')();
require('./modules/appinfo');

},{"./modules/appinfo":4,"./modules/changepage_controller":5,"./modules/games_controller":6,"./modules/games_request":9,"./modules/responsive_controller":11,"./modules/search_controller":12}],3:[function(require,module,exports){
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
},{"./html_partials":10}],6:[function(require,module,exports){
const animations = require('./animations');
const gamesFilter = require('./games_filter');
const gamesInsert = require('./games_insert');
const htmlPartials = require('./html_partials');
let games;


module.exports = (gms, dom) => {
	/* 
	Objeto 'dom' esperado:
	dom = {
		root,
		button,
		showMoreData: {
			category,
			filter
		},
		resultsMessage (opcional)
	}
	*/

	const games = gms;
	const root = dom.root;
	const button = dom.button;
	const data = dom.showMoreData;
	const resultsMessage = dom.resultsMessage;

	const showGamesNum = 24; 
	let pagination = 0;
	let maxPagination;
	let gamesFiltered;
	/* 
		Le da una animacion al boton e inserta juegos en el DOM. Cuando termine de insertar 
		juegos le sacamos la animacion al boton. Si hay mas juegos que mostrar, muestra el boton.
		Si la paginacion llega a su limite, elimina el boton.
	*/
	const showMore = () => {
		let fadeOut = animations.fadeOutDown(button);

		gamesFiltered = gamesFilter({
			games,
			category: data.category,
			toFilter: data.filter
		})

		maxPagination = Math.ceil(gamesFiltered.length/showGamesNum);

		gamesInsert({
			root,
			gamesToInsert: gamesFiltered.slice(showGamesNum*pagination, (showGamesNum*pagination) + showGamesNum),
			html: htmlPartials.game
		})
		.then(() => {
			if(pagination < maxPagination){
				button.style.display = 'block';
				animations.fadeIn(button);
			}
		})

		pagination++;

		fadeOut.onfinish = () => {
			if(pagination === maxPagination){
				button.remove();
			}
		}

		if(gamesFiltered.length === 0 && resultsMessage !== null){
			resultsMessage.style.display = 'block';
		}
	}

	// Llamamos a showMore() por primera vez
	// Le damos un eventListener click al boton
	showMore();
	button.addEventListener('click', showMore, false);
}

},{"./animations":3,"./games_filter":7,"./games_insert":8,"./html_partials":10}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{"./html_partials":10}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{"mobile-detect":1}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
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
},{"./animations":3,"./games_filter":7,"./html_partials":10}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbW9iaWxlLWRldGVjdC9tb2JpbGUtZGV0ZWN0LmpzIiwic3JjL3B1YmxpYy9zcmMvanMvZ2FtZXMuanMiLCJzcmMvcHVibGljL3NyYy9qcy9tb2R1bGVzL2FuaW1hdGlvbnMuanMiLCJzcmMvcHVibGljL3NyYy9qcy9tb2R1bGVzL2FwcGluZm8uanMiLCJzcmMvcHVibGljL3NyYy9qcy9tb2R1bGVzL2NoYW5nZXBhZ2VfY29udHJvbGxlci5qcyIsInNyYy9wdWJsaWMvc3JjL2pzL21vZHVsZXMvZ2FtZXNfY29udHJvbGxlci5qcyIsInNyYy9wdWJsaWMvc3JjL2pzL21vZHVsZXMvZ2FtZXNfZmlsdGVyLmpzIiwic3JjL3B1YmxpYy9zcmMvanMvbW9kdWxlcy9nYW1lc19pbnNlcnQuanMiLCJzcmMvcHVibGljL3NyYy9qcy9tb2R1bGVzL2dhbWVzX3JlcXVlc3QuanMiLCJzcmMvcHVibGljL3NyYy9qcy9tb2R1bGVzL2h0bWxfcGFydGlhbHMuanMiLCJzcmMvcHVibGljL3NyYy9qcy9tb2R1bGVzL3Jlc3BvbnNpdmVfY29udHJvbGxlci5qcyIsInNyYy9wdWJsaWMvc3JjL2pzL21vZHVsZXMvc2VhcmNoX2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzMrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBUSElTIEZJTEUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIEVESVQhXG4vKiFtb2JpbGUtZGV0ZWN0IHYxLjQuNCAyMDE5LTA5LTIxKi9cbi8qZ2xvYmFsIG1vZHVsZTpmYWxzZSwgZGVmaW5lOmZhbHNlKi9cbi8qanNoaW50IGxhdGVkZWY6ZmFsc2UqL1xuLyohQGxpY2Vuc2UgQ29weXJpZ2h0IDIwMTMsIEhlaW5yaWNoIEdvZWJsLCBMaWNlbnNlOiBNSVQsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vaGdvZWJsL21vYmlsZS1kZXRlY3QuanMqL1xuKGZ1bmN0aW9uIChkZWZpbmUsIHVuZGVmaW5lZCkge1xuZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgaW1wbCA9IHt9O1xuXG4gICAgaW1wbC5tb2JpbGVEZXRlY3RSdWxlcyA9IHtcbiAgICBcInBob25lc1wiOiB7XG4gICAgICAgIFwiaVBob25lXCI6IFwiXFxcXGJpUGhvbmVcXFxcYnxcXFxcYmlQb2RcXFxcYlwiLFxuICAgICAgICBcIkJsYWNrQmVycnlcIjogXCJCbGFja0JlcnJ5fFxcXFxiQkIxMFxcXFxifHJpbVswLTldK3xcXFxcYihCQkExMDB8QkJCMTAwfEJCRDEwMHxCQkUxMDB8QkJGMTAwfFNUSDEwMClcXFxcYi1bMC05XStcIixcbiAgICAgICAgXCJIVENcIjogXCJIVEN8SFRDLiooU2Vuc2F0aW9ufEV2b3xWaXNpb258RXhwbG9yZXJ8NjgwMHw4MTAwfDg5MDB8QTcyNzJ8UzUxMGV8QzExMGV8TGVnZW5kfERlc2lyZXxUODI4Mil8QVBYNTE1Q0tUfFF0ZWs5MDkwfEFQQTkyOTJLVHxIRF9taW5pfFNlbnNhdGlvbi4qWjcxMGV8UEc4NjEwMHxaNzE1ZXxEZXNpcmUuKihBODE4MXxIRCl8QURSNjIwMHxBRFI2NDAwTHxBRFI2NDI1fDAwMUhUfEluc3BpcmUgNEd8QW5kcm9pZC4qXFxcXGJFVk9cXFxcYnxULU1vYmlsZSBHMXxaNTIwbXxBbmRyb2lkIFswLTkuXSs7IFBpeGVsXCIsXG4gICAgICAgIFwiTmV4dXNcIjogXCJOZXh1cyBPbmV8TmV4dXMgU3xHYWxheHkuKk5leHVzfEFuZHJvaWQuKk5leHVzLipNb2JpbGV8TmV4dXMgNHxOZXh1cyA1fE5leHVzIDZcIixcbiAgICAgICAgXCJEZWxsXCI6IFwiRGVsbFs7XT8gKFN0cmVha3xBZXJvfFZlbnVlfFZlbnVlIFByb3xGbGFzaHxTbW9rZXxNaW5pIDNpWCl8WENEMjh8WENEMzV8XFxcXGIwMDFETFxcXFxifFxcXFxiMTAxRExcXFxcYnxcXFxcYkdTMDFcXFxcYlwiLFxuICAgICAgICBcIk1vdG9yb2xhXCI6IFwiTW90b3JvbGF8RFJPSURYfERST0lEIEJJT05JQ3xcXFxcYkRyb2lkXFxcXGIuKkJ1aWxkfEFuZHJvaWQuKlhvb218SFJJMzl8TU9ULXxBMTI2MHxBMTY4MHxBNTU1fEE4NTN8QTg1NXxBOTUzfEE5NTV8QTk1NnxNb3Rvcm9sYS4qRUxFQ1RSSUZZfE1vdG9yb2xhLippMXxpODY3fGk5NDB8TUIyMDB8TUIzMDB8TUI1MDF8TUI1MDJ8TUI1MDh8TUI1MTF8TUI1MjB8TUI1MjV8TUI1MjZ8TUI2MTF8TUI2MTJ8TUI2MzJ8TUI4MTB8TUI4NTV8TUI4NjB8TUI4NjF8TUI4NjV8TUI4NzB8TUU1MDF8TUU1MDJ8TUU1MTF8TUU1MjV8TUU2MDB8TUU2MzJ8TUU3MjJ8TUU4MTF8TUU4NjB8TUU4NjN8TUU4NjV8TVQ2MjB8TVQ3MTB8TVQ3MTZ8TVQ3MjB8TVQ4MTB8TVQ4NzB8TVQ5MTd8TW90b3JvbGEuKlRJVEFOSVVNfFdYNDM1fFdYNDQ1fFhUMzAwfFhUMzAxfFhUMzExfFhUMzE2fFhUMzE3fFhUMzE5fFhUMzIwfFhUMzkwfFhUNTAyfFhUNTMwfFhUNTMxfFhUNTMyfFhUNTM1fFhUNjAzfFhUNjEwfFhUNjExfFhUNjE1fFhUNjgxfFhUNzAxfFhUNzAyfFhUNzExfFhUNzIwfFhUODAwfFhUODA2fFhUODYwfFhUODYyfFhUODc1fFhUODgyfFhUODgzfFhUODk0fFhUOTAxfFhUOTA3fFhUOTA5fFhUOTEwfFhUOTEyfFhUOTI4fFhUOTI2fFhUOTE1fFhUOTE5fFhUOTI1fFhUMTAyMXxcXFxcYk1vdG8gRVxcXFxifFhUMTA2OHxYVDEwOTJ8WFQxMDUyXCIsXG4gICAgICAgIFwiU2Ftc3VuZ1wiOiBcIlxcXFxiU2Ftc3VuZ1xcXFxifFNNLUc5NTBGfFNNLUc5NTVGfFNNLUc5MjUwfEdULTE5MzAwfFNHSC1JMzM3fEJHVC1TNTIzMHxHVC1CMjEwMHxHVC1CMjcwMHxHVC1CMjcxMHxHVC1CMzIxMHxHVC1CMzMxMHxHVC1CMzQxMHxHVC1CMzczMHxHVC1CMzc0MHxHVC1CNTUxMHxHVC1CNTUxMnxHVC1CNTcyMnxHVC1CNjUyMHxHVC1CNzMwMHxHVC1CNzMyMHxHVC1CNzMzMHxHVC1CNzM1MHxHVC1CNzUxMHxHVC1CNzcyMnxHVC1CNzgwMHxHVC1DMzAxMHxHVC1DMzAxMXxHVC1DMzA2MHxHVC1DMzIwMHxHVC1DMzIxMnxHVC1DMzIxMkl8R1QtQzMyNjJ8R1QtQzMyMjJ8R1QtQzMzMDB8R1QtQzMzMDBLfEdULUMzMzAzfEdULUMzMzAzS3xHVC1DMzMxMHxHVC1DMzMyMnxHVC1DMzMzMHxHVC1DMzM1MHxHVC1DMzUwMHxHVC1DMzUxMHxHVC1DMzUzMHxHVC1DMzYzMHxHVC1DMzc4MHxHVC1DNTAxMHxHVC1DNTIxMnxHVC1DNjYyMHxHVC1DNjYyNXxHVC1DNjcxMnxHVC1FMTA1MHxHVC1FMTA3MHxHVC1FMTA3NXxHVC1FMTA4MHxHVC1FMTA4MXxHVC1FMTA4NXxHVC1FMTA4N3xHVC1FMTEwMHxHVC1FMTEwN3xHVC1FMTExMHxHVC1FMTEyMHxHVC1FMTEyNXxHVC1FMTEzMHxHVC1FMTE2MHxHVC1FMTE3MHxHVC1FMTE3NXxHVC1FMTE4MHxHVC1FMTE4MnxHVC1FMTIwMHxHVC1FMTIxMHxHVC1FMTIyNXxHVC1FMTIzMHxHVC1FMTM5MHxHVC1FMjEwMHxHVC1FMjEyMHxHVC1FMjEyMXxHVC1FMjE1MnxHVC1FMjIyMHxHVC1FMjIyMnxHVC1FMjIzMHxHVC1FMjIzMnxHVC1FMjI1MHxHVC1FMjM3MHxHVC1FMjU1MHxHVC1FMjY1MnxHVC1FMzIxMHxHVC1FMzIxM3xHVC1JNTUwMHxHVC1JNTUwM3xHVC1JNTcwMHxHVC1JNTgwMHxHVC1JNTgwMXxHVC1JNjQxMHxHVC1JNjQyMHxHVC1JNzExMHxHVC1JNzQxMHxHVC1JNzUwMHxHVC1JODAwMHxHVC1JODE1MHxHVC1JODE2MHxHVC1JODE5MHxHVC1JODMyMHxHVC1JODMzMHxHVC1JODM1MHxHVC1JODUzMHxHVC1JODcwMHxHVC1JODcwM3xHVC1JODkxMHxHVC1JOTAwMHxHVC1JOTAwMXxHVC1JOTAwM3xHVC1JOTAxMHxHVC1JOTAyMHxHVC1JOTAyM3xHVC1JOTA3MHxHVC1JOTA4MnxHVC1JOTEwMHxHVC1JOTEwM3xHVC1JOTIyMHxHVC1JOTI1MHxHVC1JOTMwMHxHVC1JOTMwNXxHVC1JOTUwMHxHVC1JOTUwNXxHVC1NMzUxMHxHVC1NNTY1MHxHVC1NNzUwMHxHVC1NNzYwMHxHVC1NNzYwM3xHVC1NODgwMHxHVC1NODkxMHxHVC1ONzAwMHxHVC1TMzExMHxHVC1TMzMxMHxHVC1TMzM1MHxHVC1TMzM1M3xHVC1TMzM3MHxHVC1TMzY1MHxHVC1TMzY1M3xHVC1TMzc3MHxHVC1TMzg1MHxHVC1TNTIxMHxHVC1TNTIyMHxHVC1TNTIyOXxHVC1TNTIzMHxHVC1TNTIzM3xHVC1TNTI1MHxHVC1TNTI1M3xHVC1TNTI2MHxHVC1TNTI2M3xHVC1TNTI3MHxHVC1TNTMwMHxHVC1TNTMzMHxHVC1TNTM1MHxHVC1TNTM2MHxHVC1TNTM2M3xHVC1TNTM2OXxHVC1TNTM4MHxHVC1TNTM4MER8R1QtUzU1NjB8R1QtUzU1NzB8R1QtUzU2MDB8R1QtUzU2MDN8R1QtUzU2MTB8R1QtUzU2MjB8R1QtUzU2NjB8R1QtUzU2NzB8R1QtUzU2OTB8R1QtUzU3NTB8R1QtUzU3ODB8R1QtUzU4MzB8R1QtUzU4Mzl8R1QtUzYxMDJ8R1QtUzY1MDB8R1QtUzcwNzB8R1QtUzcyMDB8R1QtUzcyMjB8R1QtUzcyMzB8R1QtUzcyMzN8R1QtUzcyNTB8R1QtUzc1MDB8R1QtUzc1MzB8R1QtUzc1NTB8R1QtUzc1NjJ8R1QtUzc3MTB8R1QtUzgwMDB8R1QtUzgwMDN8R1QtUzg1MDB8R1QtUzg1MzB8R1QtUzg2MDB8U0NILUEzMTB8U0NILUE1MzB8U0NILUE1NzB8U0NILUE2MTB8U0NILUE2MzB8U0NILUE2NTB8U0NILUE3OTB8U0NILUE3OTV8U0NILUE4NTB8U0NILUE4NzB8U0NILUE4OTB8U0NILUE5MzB8U0NILUE5NTB8U0NILUE5NzB8U0NILUE5OTB8U0NILUkxMDB8U0NILUkxMTB8U0NILUk0MDB8U0NILUk0MDV8U0NILUk1MDB8U0NILUk1MTB8U0NILUk1MTV8U0NILUk2MDB8U0NILUk3MzB8U0NILUk3NjB8U0NILUk3NzB8U0NILUk4MzB8U0NILUk5MTB8U0NILUk5MjB8U0NILUk5NTl8U0NILUxDMTF8U0NILU4xNTB8U0NILU4zMDB8U0NILVIxMDB8U0NILVIzMDB8U0NILVIzNTF8U0NILVI0MDB8U0NILVI0MTB8U0NILVQzMDB8U0NILVUzMTB8U0NILVUzMjB8U0NILVUzNTB8U0NILVUzNjB8U0NILVUzNjV8U0NILVUzNzB8U0NILVUzODB8U0NILVU0MTB8U0NILVU0MzB8U0NILVU0NTB8U0NILVU0NjB8U0NILVU0NzB8U0NILVU0OTB8U0NILVU1NDB8U0NILVU1NTB8U0NILVU2MjB8U0NILVU2NDB8U0NILVU2NTB8U0NILVU2NjB8U0NILVU3MDB8U0NILVU3NDB8U0NILVU3NTB8U0NILVU4MTB8U0NILVU4MjB8U0NILVU5MDB8U0NILVU5NDB8U0NILVU5NjB8U0NTLTI2VUN8U0dILUExMDd8U0dILUExMTd8U0dILUExMjd8U0dILUExMzd8U0dILUExNTd8U0dILUExNjd8U0dILUExNzd8U0dILUExODd8U0dILUExOTd8U0dILUEyMjd8U0dILUEyMzd8U0dILUEyNTd8U0dILUE0Mzd8U0dILUE1MTd8U0dILUE1OTd8U0dILUE2Mzd8U0dILUE2NTd8U0dILUE2Njd8U0dILUE2ODd8U0dILUE2OTd8U0dILUE3MDd8U0dILUE3MTd8U0dILUE3Mjd8U0dILUE3Mzd8U0dILUE3NDd8U0dILUE3Njd8U0dILUE3Nzd8U0dILUE3OTd8U0dILUE4MTd8U0dILUE4Mjd8U0dILUE4Mzd8U0dILUE4NDd8U0dILUE4Njd8U0dILUE4Nzd8U0dILUE4ODd8U0dILUE4OTd8U0dILUE5Mjd8U0dILUIxMDB8U0dILUIxMzB8U0dILUIyMDB8U0dILUIyMjB8U0dILUMxMDB8U0dILUMxMTB8U0dILUMxMjB8U0dILUMxMzB8U0dILUMxNDB8U0dILUMxNjB8U0dILUMxNzB8U0dILUMxODB8U0dILUMyMDB8U0dILUMyMDd8U0dILUMyMTB8U0dILUMyMjV8U0dILUMyMzB8U0dILUM0MTd8U0dILUM0NTB8U0dILUQzMDd8U0dILUQzNDd8U0dILUQzNTd8U0dILUQ0MDd8U0dILUQ0MTV8U0dILUQ3ODB8U0dILUQ4MDd8U0dILUQ5ODB8U0dILUUxMDV8U0dILUUyMDB8U0dILUUzMTV8U0dILUUzMTZ8U0dILUUzMTd8U0dILUUzMzV8U0dILUU1OTB8U0dILUU2MzV8U0dILUU3MTV8U0dILUU4OTB8U0dILUYzMDB8U0dILUY0ODB8U0dILUkyMDB8U0dILUkzMDB8U0dILUkzMjB8U0dILUk1NTB8U0dILUk1Nzd8U0dILUk2MDB8U0dILUk2MDd8U0dILUk2MTd8U0dILUk2Mjd8U0dILUk2Mzd8U0dILUk2Nzd8U0dILUk3MDB8U0dILUk3MTd8U0dILUk3Mjd8U0dILWk3NDdNfFNHSC1JNzc3fFNHSC1JNzgwfFNHSC1JODI3fFNHSC1JODQ3fFNHSC1JODU3fFNHSC1JODk2fFNHSC1JODk3fFNHSC1JOTAwfFNHSC1JOTA3fFNHSC1JOTE3fFNHSC1JOTI3fFNHSC1JOTM3fFNHSC1JOTk3fFNHSC1KMTUwfFNHSC1KMjAwfFNHSC1MMTcwfFNHSC1MNzAwfFNHSC1NMTEwfFNHSC1NMTUwfFNHSC1NMjAwfFNHSC1OMTA1fFNHSC1ONTAwfFNHSC1ONjAwfFNHSC1ONjIwfFNHSC1ONjI1fFNHSC1ONzAwfFNHSC1ONzEwfFNHSC1QMTA3fFNHSC1QMjA3fFNHSC1QMzAwfFNHSC1QMzEwfFNHSC1QNTIwfFNHSC1QNzM1fFNHSC1QNzc3fFNHSC1RMTA1fFNHSC1SMjEwfFNHSC1SMjIwfFNHSC1SMjI1fFNHSC1TMTA1fFNHSC1TMzA3fFNHSC1UMTA5fFNHSC1UMTE5fFNHSC1UMTM5fFNHSC1UMjA5fFNHSC1UMjE5fFNHSC1UMjI5fFNHSC1UMjM5fFNHSC1UMjQ5fFNHSC1UMjU5fFNHSC1UMzA5fFNHSC1UMzE5fFNHSC1UMzI5fFNHSC1UMzM5fFNHSC1UMzQ5fFNHSC1UMzU5fFNHSC1UMzY5fFNHSC1UMzc5fFNHSC1UNDA5fFNHSC1UNDI5fFNHSC1UNDM5fFNHSC1UNDU5fFNHSC1UNDY5fFNHSC1UNDc5fFNHSC1UNDk5fFNHSC1UNTA5fFNHSC1UNTE5fFNHSC1UNTM5fFNHSC1UNTU5fFNHSC1UNTg5fFNHSC1UNjA5fFNHSC1UNjE5fFNHSC1UNjI5fFNHSC1UNjM5fFNHSC1UNjU5fFNHSC1UNjY5fFNHSC1UNjc5fFNHSC1UNzA5fFNHSC1UNzE5fFNHSC1UNzI5fFNHSC1UNzM5fFNHSC1UNzQ2fFNHSC1UNzQ5fFNHSC1UNzU5fFNHSC1UNzY5fFNHSC1UODA5fFNHSC1UODE5fFNHSC1UODM5fFNHSC1UOTE5fFNHSC1UOTI5fFNHSC1UOTM5fFNHSC1UOTU5fFNHSC1UOTg5fFNHSC1VMTAwfFNHSC1VMjAwfFNHSC1VODAwfFNHSC1WMjA1fFNHSC1WMjA2fFNHSC1YMTAwfFNHSC1YMTA1fFNHSC1YMTIwfFNHSC1YMTQwfFNHSC1YNDI2fFNHSC1YNDI3fFNHSC1YNDc1fFNHSC1YNDk1fFNHSC1YNDk3fFNHSC1YNTA3fFNHSC1YNjAwfFNHSC1YNjEwfFNHSC1YNjIwfFNHSC1YNjMwfFNHSC1YNzAwfFNHSC1YODIwfFNHSC1YODkwfFNHSC1aMTMwfFNHSC1aMTUwfFNHSC1aMTcwfFNHSC1aWDEwfFNHSC1aWDIwfFNIVy1NMTEwfFNQSC1BMTIwfFNQSC1BNDAwfFNQSC1BNDIwfFNQSC1BNDYwfFNQSC1BNTAwfFNQSC1BNTYwfFNQSC1BNjAwfFNQSC1BNjIwfFNQSC1BNjYwfFNQSC1BNzAwfFNQSC1BNzQwfFNQSC1BNzYwfFNQSC1BNzkwfFNQSC1BODAwfFNQSC1BODIwfFNQSC1BODQwfFNQSC1BODgwfFNQSC1BOTAwfFNQSC1BOTQwfFNQSC1BOTYwfFNQSC1ENjAwfFNQSC1ENzAwfFNQSC1ENzEwfFNQSC1ENzIwfFNQSC1JMzAwfFNQSC1JMzI1fFNQSC1JMzMwfFNQSC1JMzUwfFNQSC1JNTAwfFNQSC1JNjAwfFNQSC1JNzAwfFNQSC1MNzAwfFNQSC1NMTAwfFNQSC1NMjIwfFNQSC1NMjQwfFNQSC1NMzAwfFNQSC1NMzA1fFNQSC1NMzIwfFNQSC1NMzMwfFNQSC1NMzUwfFNQSC1NMzYwfFNQSC1NMzcwfFNQSC1NMzgwfFNQSC1NNTEwfFNQSC1NNTQwfFNQSC1NNTUwfFNQSC1NNTYwfFNQSC1NNTcwfFNQSC1NNTgwfFNQSC1NNjEwfFNQSC1NNjIwfFNQSC1NNjMwfFNQSC1NODAwfFNQSC1NODEwfFNQSC1NODUwfFNQSC1NOTAwfFNQSC1NOTEwfFNQSC1NOTIwfFNQSC1NOTMwfFNQSC1OMTAwfFNQSC1OMjAwfFNQSC1OMjQwfFNQSC1OMzAwfFNQSC1ONDAwfFNQSC1aNDAwfFNXQy1FMTAwfFNDSC1pOTA5fEdULU43MTAwfEdULU43MTA1fFNDSC1JNTM1fFNNLU45MDBBfFNHSC1JMzE3fFNHSC1UOTk5THxHVC1TNTM2MEJ8R1QtSTgyNjJ8R1QtUzY4MDJ8R1QtUzYzMTJ8R1QtUzYzMTB8R1QtUzUzMTJ8R1QtUzUzMTB8R1QtSTkxMDV8R1QtSTg1MTB8R1QtUzY3OTBOfFNNLUc3MTA1fFNNLU45MDA1fEdULVM1MzAxfEdULUk5Mjk1fEdULUk5MTk1fFNNLUMxMDF8R1QtUzczOTJ8R1QtUzc1NjB8R1QtQjc2MTB8R1QtSTU1MTB8R1QtUzc1ODJ8R1QtUzc1MzBFfEdULUk4NzUwfFNNLUc5MDA2VnxTTS1HOTAwOFZ8U00tRzkwMDlEfFNNLUc5MDBBfFNNLUc5MDBEfFNNLUc5MDBGfFNNLUc5MDBIfFNNLUc5MDBJfFNNLUc5MDBKfFNNLUc5MDBLfFNNLUc5MDBMfFNNLUc5MDBNfFNNLUc5MDBQfFNNLUc5MDBSNHxTTS1HOTAwU3xTTS1HOTAwVHxTTS1HOTAwVnxTTS1HOTAwVzh8U0hWLUUxNjBLfFNDSC1QNzA5fFNDSC1QNzI5fFNNLVQyNTU4fEdULUk5MjA1fFNNLUc5MzUwfFNNLUoxMjBGfFNNLUc5MjBGfFNNLUc5MjBWfFNNLUc5MzBGfFNNLU45MTBDfFNNLUEzMTBGfEdULUk5MTkwfFNNLUo1MDBGTnxTTS1HOTAzRnxTTS1KMzMwRlwiLFxuICAgICAgICBcIkxHXCI6IFwiXFxcXGJMR1xcXFxiO3xMR1stIF0/KEM4MDB8QzkwMHxFNDAwfEU2MTB8RTkwMHxFLTkwMHxGMTYwfEYxODBLfEYxODBMfEYxODBTfDczMHw4NTV8TDE2MHxMUzc0MHxMUzg0MHxMUzk3MHxMVTYyMDB8TVM2OTB8TVM2OTV8TVM3NzB8TVM4NDB8TVM4NzB8TVM5MTB8UDUwMHxQNzAwfFA3MDV8Vk02OTZ8QVM2ODB8QVM2OTV8QVg4NDB8QzcyOXxFOTcwfEdTNTA1fDI3MnxDMzk1fEU3MzlCS3xFOTYwfEw1NUN8TDc1Q3xMUzY5NnxMUzg2MHxQNzY5Qkt8UDM1MHxQNTAwfFA1MDl8UDg3MHxVTjI3MnxVUzczMHxWUzg0MHxWUzk1MHxMTjI3MnxMTjUxMHxMUzY3MHxMUzg1NXxMVzY5MHxNTjI3MHxNTjUxMHxQNTA5fFA3Njl8UDkzMHxVTjIwMHxVTjI3MHxVTjUxMHxVTjYxMHxVUzY3MHxVUzc0MHxVUzc2MHxVWDI2NXxVWDg0MHxWTjI3MXxWTjUzMHxWUzY2MHxWUzcwMHxWUzc0MHxWUzc1MHxWUzkxMHxWUzkyMHxWUzkzMHxWWDkyMDB8VlgxMTAwMHxBWDg0MEF8TFc3NzB8UDUwNnxQOTI1fFA5OTl8RTYxMnxEOTU1fEQ4MDJ8TVMzMjN8TTI1Nyl8TE0tRzcxMFwiLFxuICAgICAgICBcIlNvbnlcIjogXCJTb255U1R8U29ueUxUfFNvbnlFcmljc3NvbnxTb255RXJpY3Nzb25MVDE1aXZ8TFQxOGl8RTEwaXxMVDI4aHxMVDI2d3xTb255RXJpY3Nzb25NVDI3aXxDNTMwM3xDNjkwMnxDNjkwM3xDNjkwNnxDNjk0M3xEMjUzM1wiLFxuICAgICAgICBcIkFzdXNcIjogXCJBc3VzLipHYWxheHl8UGFkRm9uZS4qTW9iaWxlXCIsXG4gICAgICAgIFwiTm9raWFMdW1pYVwiOiBcIkx1bWlhIFswLTldezMsNH1cIixcbiAgICAgICAgXCJNaWNyb21heFwiOiBcIk1pY3JvbWF4LipcXFxcYihBMjEwfEE5MnxBODh8QTcyfEExMTF8QTExMFF8QTExNXxBMTE2fEExMTB8QTkwU3xBMjZ8QTUxfEEzNXxBNTR8QTI1fEEyN3xBODl8QTY4fEE2NXxBNTd8QTkwKVxcXFxiXCIsXG4gICAgICAgIFwiUGFsbVwiOiBcIlBhbG1Tb3VyY2V8UGFsbVwiLFxuICAgICAgICBcIlZlcnR1XCI6IFwiVmVydHV8VmVydHUuKkx0ZHxWZXJ0dS4qQXNjZW50fFZlcnR1LipBeXh0YXxWZXJ0dS4qQ29uc3RlbGxhdGlvbihGfFF1ZXN0KT98VmVydHUuKk1vbmlrYXxWZXJ0dS4qU2lnbmF0dXJlXCIsXG4gICAgICAgIFwiUGFudGVjaFwiOiBcIlBBTlRFQ0h8SU0tQTg1MFN8SU0tQTg0MFN8SU0tQTgzMEx8SU0tQTgzMEt8SU0tQTgzMFN8SU0tQTgyMEx8SU0tQTgxMEt8SU0tQTgxMFN8SU0tQTgwMFN8SU0tVDEwMEt8SU0tQTcyNUx8SU0tQTc4MEx8SU0tQTc3NUN8SU0tQTc3MEt8SU0tQTc2MFN8SU0tQTc1MEt8SU0tQTc0MFN8SU0tQTczMFN8SU0tQTcyMEx8SU0tQTcxMEt8SU0tQTY5MEx8SU0tQTY5MFN8SU0tQTY1MFN8SU0tQTYzMEt8SU0tQTYwMFN8VkVHQSBQVEwyMXxQVDAwM3xQODAxMHxBRFI5MTBMfFA2MDMwfFA2MDIwfFA5MDcwfFA0MTAwfFA5MDYwfFA1MDAwfENETTg5OTJ8VFhUODA0NXxBRFI4OTk1fElTMTFQVHxQMjAzMHxQNjAxMHxQODAwMHxQVDAwMnxJUzA2fENETTg5OTl8UDkwNTB8UFQwMDF8VFhUODA0MHxQMjAyMHxQOTAyMHxQMjAwMHxQNzA0MHxQNzAwMHxDNzkwXCIsXG4gICAgICAgIFwiRmx5XCI6IFwiSVEyMzB8SVE0NDR8SVE0NTB8SVE0NDB8SVE0NDJ8SVE0NDF8SVEyNDV8SVEyNTZ8SVEyMzZ8SVEyNTV8SVEyMzV8SVEyNDV8SVEyNzV8SVEyNDB8SVEyODV8SVEyODB8SVEyNzB8SVEyNjB8SVEyNTBcIixcbiAgICAgICAgXCJXaWtvXCI6IFwiS0lURSA0R3xISUdIV0FZfEdFVEFXQVl8U1RBSVJXQVl8REFSS1NJREV8REFSS0ZVTEx8REFSS05JR0hUfERBUktNT09OfFNMSURFfFdBWCA0R3xSQUlOQk9XfEJMT09NfFNVTlNFVHxHT0EoPyFubmEpfExFTk5ZfEJBUlJZfElHR1l8T1paWXxDSU5LIEZJVkV8Q0lOSyBQRUFYfENJTksgUEVBWCAyfENJTksgU0xJTXxDSU5LIFNMSU0gMnxDSU5LICt8Q0lOSyBLSU5HfENJTksgUEVBWHxDSU5LIFNMSU18U1VCTElNXCIsXG4gICAgICAgIFwiaU1vYmlsZVwiOiBcImktbW9iaWxlIChJUXxpLVNUWUxFfGlkZWF8WkFBfEhpdHopXCIsXG4gICAgICAgIFwiU2ltVmFsbGV5XCI6IFwiXFxcXGIoU1AtODB8WFQtOTMwfFNYLTM0MHxYVC05MzB8U1gtMzEwfFNQLTM2MHxTUDYwfFNQVC04MDB8U1AtMTIwfFNQVC04MDB8U1AtMTQwfFNQWC01fFNQWC04fFNQLTEwMHxTUFgtOHxTUFgtMTIpXFxcXGJcIixcbiAgICAgICAgXCJXb2xmZ2FuZ1wiOiBcIkFULUIyNER8QVQtQVM1MEhEfEFULUFTNDBXfEFULUFTNTVIRHxBVC1BUzQ1cTJ8QVQtQjI2RHxBVC1BUzUwUVwiLFxuICAgICAgICBcIkFsY2F0ZWxcIjogXCJBbGNhdGVsXCIsXG4gICAgICAgIFwiTmludGVuZG9cIjogXCJOaW50ZW5kbyAoM0RTfFN3aXRjaClcIixcbiAgICAgICAgXCJBbW9pXCI6IFwiQW1vaVwiLFxuICAgICAgICBcIklOUVwiOiBcIklOUVwiLFxuICAgICAgICBcIk9uZVBsdXNcIjogXCJPTkVQTFVTXCIsXG4gICAgICAgIFwiR2VuZXJpY1Bob25lXCI6IFwiVGFwYXRhbGt8UERBO3xTQUdFTXxcXFxcYm1tcFxcXFxifHBvY2tldHxcXFxcYnBzcFxcXFxifHN5bWJpYW58U21hcnRwaG9uZXxzbWFydGZvbnx0cmVvfHVwLmJyb3dzZXJ8dXAubGlua3x2b2RhZm9uZXxcXFxcYndhcFxcXFxifG5va2lhfFNlcmllczQwfFNlcmllczYwfFM2MHxTb255RXJpY3Nzb258TjkwMHxNQVVJLipXQVAuKkJyb3dzZXJcIlxuICAgIH0sXG4gICAgXCJ0YWJsZXRzXCI6IHtcbiAgICAgICAgXCJpUGFkXCI6IFwiaVBhZHxpUGFkLipNb2JpbGVcIixcbiAgICAgICAgXCJOZXh1c1RhYmxldFwiOiBcIkFuZHJvaWQuKk5leHVzW1xcXFxzXSsoN3w5fDEwKVwiLFxuICAgICAgICBcIkdvb2dsZVRhYmxldFwiOiBcIkFuZHJvaWQuKlBpeGVsIENcIixcbiAgICAgICAgXCJTYW1zdW5nVGFibGV0XCI6IFwiU0FNU1VORy4qVGFibGV0fEdhbGF4eS4qVGFifFNDLTAxQ3xHVC1QMTAwMHxHVC1QMTAwM3xHVC1QMTAxMHxHVC1QMzEwNXxHVC1QNjIxMHxHVC1QNjgwMHxHVC1QNjgxMHxHVC1QNzEwMHxHVC1QNzMwMHxHVC1QNzMxMHxHVC1QNzUwMHxHVC1QNzUxMHxTQ0gtSTgwMHxTQ0gtSTgxNXxTQ0gtSTkwNXxTR0gtSTk1N3xTR0gtSTk4N3xTR0gtVDg0OXxTR0gtVDg1OXxTR0gtVDg2OXxTUEgtUDEwMHxHVC1QMzEwMHxHVC1QMzEwOHxHVC1QMzExMHxHVC1QNTEwMHxHVC1QNTExMHxHVC1QNjIwMHxHVC1QNzMyMHxHVC1QNzUxMXxHVC1OODAwMHxHVC1QODUxMHxTR0gtSTQ5N3xTUEgtUDUwMHxTR0gtVDc3OXxTQ0gtSTcwNXxTQ0gtSTkxNXxHVC1OODAxM3xHVC1QMzExM3xHVC1QNTExM3xHVC1QODExMHxHVC1OODAxMHxHVC1OODAwNXxHVC1OODAyMHxHVC1QMTAxM3xHVC1QNjIwMXxHVC1QNzUwMXxHVC1ONTEwMHxHVC1ONTEwNXxHVC1ONTExMHxTSFYtRTE0MEt8U0hWLUUxNDBMfFNIVi1FMTQwU3xTSFYtRTE1MFN8U0hWLUUyMzBLfFNIVi1FMjMwTHxTSFYtRTIzMFN8U0hXLU0xODBLfFNIVy1NMTgwTHxTSFctTTE4MFN8U0hXLU0xODBXfFNIVy1NMzAwV3xTSFctTTMwNVd8U0hXLU0zODBLfFNIVy1NMzgwU3xTSFctTTM4MFd8U0hXLU00MzBXfFNIVy1NNDgwS3xTSFctTTQ4MFN8U0hXLU00ODBXfFNIVy1NNDg1V3xTSFctTTQ4Nld8U0hXLU01MDBXfEdULUk5MjI4fFNDSC1QNzM5fFNDSC1JOTI1fEdULUk5MjAwfEdULVA1MjAwfEdULVA1MjEwfEdULVA1MjEwWHxTTS1UMzExfFNNLVQzMTB8U00tVDMxMFh8U00tVDIxMHxTTS1UMjEwUnxTTS1UMjExfFNNLVA2MDB8U00tUDYwMXxTTS1QNjA1fFNNLVA5MDB8U00tUDkwMXxTTS1UMjE3fFNNLVQyMTdBfFNNLVQyMTdTfFNNLVA2MDAwfFNNLVQzMTAwfFNHSC1JNDY3fFhFNTAwfFNNLVQxMTB8R1QtUDUyMjB8R1QtSTkyMDBYfEdULU41MTEwWHxHVC1ONTEyMHxTTS1QOTA1fFNNLVQxMTF8U00tVDIxMDV8U00tVDMxNXxTTS1UMzIwfFNNLVQzMjBYfFNNLVQzMjF8U00tVDUyMHxTTS1UNTI1fFNNLVQ1MzBOVXxTTS1UMjMwTlV8U00tVDMzME5VfFNNLVQ5MDB8WEU1MDBUMUN8U00tUDYwNVZ8U00tUDkwNVZ8U00tVDMzN1Z8U00tVDUzN1Z8U00tVDcwN1Z8U00tVDgwN1Z8U00tUDYwMFh8U00tUDkwMFh8U00tVDIxMFh8U00tVDIzMHxTTS1UMjMwWHxTTS1UMzI1fEdULVA3NTAzfFNNLVQ1MzF8U00tVDMzMHxTTS1UNTMwfFNNLVQ3MDV8U00tVDcwNUN8U00tVDUzNXxTTS1UMzMxfFNNLVQ4MDB8U00tVDcwMHxTTS1UNTM3fFNNLVQ4MDd8U00tUDkwN0F8U00tVDMzN0F8U00tVDUzN0F8U00tVDcwN0F8U00tVDgwN0F8U00tVDIzN3xTTS1UODA3UHxTTS1QNjA3VHxTTS1UMjE3VHxTTS1UMzM3VHxTTS1UODA3VHxTTS1UMTE2TlF8U00tVDExNkJVfFNNLVA1NTB8U00tVDM1MHxTTS1UNTUwfFNNLVQ5MDAwfFNNLVA5MDAwfFNNLVQ3MDVZfFNNLVQ4MDV8R1QtUDMxMTN8U00tVDcxMHxTTS1UODEwfFNNLVQ4MTV8U00tVDM2MHxTTS1UNTMzfFNNLVQxMTN8U00tVDMzNXxTTS1UNzE1fFNNLVQ1NjB8U00tVDY3MHxTTS1UNjc3fFNNLVQzNzd8U00tVDU2N3xTTS1UMzU3VHxTTS1UNTU1fFNNLVQ1NjF8U00tVDcxM3xTTS1UNzE5fFNNLVQ4MTN8U00tVDgxOXxTTS1UNTgwfFNNLVQzNTVZP3xTTS1UMjgwfFNNLVQ4MTdBfFNNLVQ4MjB8U00tVzcwMHxTTS1QNTgwfFNNLVQ1ODd8U00tUDM1MHxTTS1QNTU1TXxTTS1QMzU1TXxTTS1UMTEzTlV8U00tVDgxNVl8U00tVDU4NXxTTS1UMjg1fFNNLVQ4MjV8U00tVzcwOHxTTS1UODM1fFNNLVQ4MzB8U00tVDgzN1Z8U00tVDcyMHxTTS1UNTEwfFNNLVQzODdWXCIsXG4gICAgICAgIFwiS2luZGxlXCI6IFwiS2luZGxlfFNpbGsuKkFjY2VsZXJhdGVkfEFuZHJvaWQuKlxcXFxiKEtGT1R8S0ZUVHxLRkpXSXxLRkpXQXxLRk9URXxLRlNPV0l8S0ZUSFdJfEtGVEhXQXxLRkFQV0l8S0ZBUFdBfFdGSldBRXxLRlNBV0F8S0ZTQVdJfEtGQVNXSXxLRkFSV0l8S0ZGT1dJfEtGR0lXSXxLRk1FV0kpXFxcXGJ8QW5kcm9pZC4qU2lsa1xcL1swLTkuXSsgbGlrZSBDaHJvbWVcXC9bMC05Ll0rICg/IU1vYmlsZSlcIixcbiAgICAgICAgXCJTdXJmYWNlVGFibGV0XCI6IFwiV2luZG93cyBOVCBbMC05Ll0rOyBBUk07LiooVGFibGV0fEFSTUJKUylcIixcbiAgICAgICAgXCJIUFRhYmxldFwiOiBcIkhQIFNsYXRlICg3fDh8MTApfEhQIEVsaXRlUGFkIDkwMHxocC10YWJsZXR8RWxpdGVCb29rLipUb3VjaHxIUCA4fFNsYXRlIDIxfEhQIFNsYXRlQm9vayAxMFwiLFxuICAgICAgICBcIkFzdXNUYWJsZXRcIjogXCJeLipQYWRGb25lKCg/IU1vYmlsZSkuKSokfFRyYW5zZm9ybWVyfFRGMTAxfFRGMTAxR3xURjMwMFR8VEYzMDBUR3xURjMwMFRMfFRGNzAwVHxURjcwMEtMfFRGNzAxVHxURjgxMEN8TUUxNzF8TUUzMDFUfE1FMzAyQ3xNRTM3MU1HfE1FMzcwVHxNRTM3Mk1HfE1FMTcyVnxNRTE3M1h8TUU0MDBDfFNsaWRlciBTTDEwMXxcXFxcYkswMEZcXFxcYnxcXFxcYkswMENcXFxcYnxcXFxcYkswMEVcXFxcYnxcXFxcYkswMExcXFxcYnxUWDIwMUxBfE1FMTc2Q3xNRTEwMkF8XFxcXGJNODBUQVxcXFxifE1FMzcyQ0x8TUU1NjBDR3xNRTM3MkNHfE1FMzAyS0x8IEswMTAgfCBLMDExIHwgSzAxNyB8IEswMUUgfE1FNTcyQ3xNRTEwM0t8TUUxNzBDfE1FMTcxQ3xcXFxcYk1FNzBDXFxcXGJ8TUU1ODFDfE1FNTgxQ0x8TUU4NTEwQ3xNRTE4MUN8UDAxWXxQTzFNQXxQMDFafFxcXFxiUDAyN1xcXFxifFxcXFxiUDAyNFxcXFxifFxcXFxiUDAwQ1xcXFxiXCIsXG4gICAgICAgIFwiQmxhY2tCZXJyeVRhYmxldFwiOiBcIlBsYXlCb29rfFJJTSBUYWJsZXRcIixcbiAgICAgICAgXCJIVEN0YWJsZXRcIjogXCJIVENfRmx5ZXJfUDUxMnxIVEMgRmx5ZXJ8SFRDIEpldHN0cmVhbXxIVEMtUDcxNWF8SFRDIEVWTyBWaWV3IDRHfFBHNDEyMDB8UEcwOTQxMFwiLFxuICAgICAgICBcIk1vdG9yb2xhVGFibGV0XCI6IFwieG9vbXxzaG9sZXN0fE1aNjE1fE1aNjA1fE1aNTA1fE1aNjAxfE1aNjAyfE1aNjAzfE1aNjA0fE1aNjA2fE1aNjA3fE1aNjA4fE1aNjA5fE1aNjE1fE1aNjE2fE1aNjE3XCIsXG4gICAgICAgIFwiTm9va1RhYmxldFwiOiBcIkFuZHJvaWQuKk5vb2t8Tm9va0NvbG9yfG5vb2sgYnJvd3NlcnxCTlJWMjAwfEJOUlYyMDBBfEJOVFYyNTB8Qk5UVjI1MEF8Qk5UVjQwMHxCTlRWNjAwfExvZ2ljUEQgWm9vbTJcIixcbiAgICAgICAgXCJBY2VyVGFibGV0XCI6IFwiQW5kcm9pZC4qOyBcXFxcYihBMTAwfEExMDF8QTExMHxBMjAwfEEyMTB8QTIxMXxBNTAwfEE1MDF8QTUxMHxBNTExfEE3MDB8QTcwMXxXNTAwfFc1MDBQfFc1MDF8VzUwMVB8VzUxMHxXNTExfFc3MDB8RzEwMHxHMTAwV3xCMS1BNzF8QjEtNzEwfEIxLTcxMXxBMS04MTB8QTEtODExfEExLTgzMClcXFxcYnxXMy04MTB8XFxcXGJBMy1BMTBcXFxcYnxcXFxcYkEzLUExMVxcXFxifFxcXFxiQTMtQTIwXFxcXGJ8XFxcXGJBMy1BMzBcIixcbiAgICAgICAgXCJUb3NoaWJhVGFibGV0XCI6IFwiQW5kcm9pZC4qKEFUMTAwfEFUMTA1fEFUMjAwfEFUMjA1fEFUMjcwfEFUMjc1fEFUMzAwfEFUMzA1fEFUMVM1fEFUNTAwfEFUNTcwfEFUNzAwfEFUODMwKXxUT1NISUJBLipGT0xJT1wiLFxuICAgICAgICBcIkxHVGFibGV0XCI6IFwiXFxcXGJMLTA2Q3xMRy1WOTA5fExHLVY5MDB8TEctVjcwMHxMRy1WNTEwfExHLVY1MDB8TEctVjQxMHxMRy1WNDAwfExHLVZLODEwXFxcXGJcIixcbiAgICAgICAgXCJGdWppdHN1VGFibGV0XCI6IFwiQW5kcm9pZC4qXFxcXGIoRi0wMUR8Ri0wMkZ8Ri0wNUV8Ri0xMER8TTUzMnxRNTcyKVxcXFxiXCIsXG4gICAgICAgIFwiUHJlc3RpZ2lvVGFibGV0XCI6IFwiUE1QMzE3MEJ8UE1QMzI3MEJ8UE1QMzQ3MEJ8UE1QNzE3MEJ8UE1QMzM3MEJ8UE1QMzU3MEN8UE1QNTg3MEN8UE1QMzY3MEJ8UE1QNTU3MEN8UE1QNTc3MER8UE1QMzk3MEJ8UE1QMzg3MEN8UE1QNTU4MEN8UE1QNTg4MER8UE1QNTc4MER8UE1QNTU4OEN8UE1QNzI4MEN8UE1QNzI4MEMzR3xQTVA3MjgwfFBNUDc4ODBEfFBNUDU1OTdEfFBNUDU1OTd8UE1QNzEwMER8UEVSMzQ2NHxQRVIzMjc0fFBFUjM1NzR8UEVSMzg4NHxQRVI1Mjc0fFBFUjU0NzR8UE1QNTA5N0NQUk98UE1QNTA5N3xQTVA3MzgwRHxQTVA1Mjk3Q3xQTVA1Mjk3Q19RVUFEfFBNUDgxMkV8UE1QODEyRTNHfFBNUDgxMkZ8UE1QODEwRXxQTVA4ODBURHxQTVQzMDE3fFBNVDMwMzd8UE1UMzA0N3xQTVQzMDU3fFBNVDcwMDh8UE1UNTg4N3xQTVQ1MDAxfFBNVDUwMDJcIixcbiAgICAgICAgXCJMZW5vdm9UYWJsZXRcIjogXCJMZW5vdm8gVEFCfElkZWEoVGFifFBhZCkoIEExfEExMHwgSzF8KXxUaGlua1BhZChbIF0rKT9UYWJsZXR8WVQzLTg1ME18WVQzLVg5MEx8WVQzLVg5MEZ8WVQzLVg5MFh8TGVub3ZvLiooUzIxMDl8UzIxMTB8UzUwMDB8UzYwMDB8SzMwMTF8QTMwMDB8QTM1MDB8QTEwMDB8QTIxMDd8QTIxMDl8QTExMDd8QTU1MDB8QTc2MDB8QjYwMDB8QjgwMDB8QjgwODApKC18KShGTHxGfEhWfEh8KXxUQi1YMTAzRnxUQi1YMzA0WHxUQi1YMzA0RnxUQi1YMzA0THxUQi1YNTA1RnxUQi1YNTA1THxUQi1YNTA1WHxUQi1YNjA1RnxUQi1YNjA1THxUQi04NzAzRnxUQi04NzAzWHxUQi04NzAzTnxUQi04NzA0TnxUQi04NzA0RnxUQi04NzA0WHxUQi04NzA0VnxUQi03MzA0RnxUQi03MzA0SXxUQi03MzA0WHxUYWIyQTctMTBGfFRhYjJBNy0yMEZ8VEIyLVgzMEx8WVQzLVg1MEx8WVQzLVg1MEZ8WVQzLVg1ME18WVQtWDcwNUZ8WVQtWDcwM0Z8WVQtWDcwM0x8WVQtWDcwNUx8WVQtWDcwNVh8VEIyLVgzMEZ8VEIyLVgzMEx8VEIyLVgzME18QTIxMDdBLUZ8QTIxMDdBLUh8VEIzLTczMEZ8VEIzLTczME18VEIzLTczMFh8VEItNzUwNEZ8VEItNzUwNFhcIixcbiAgICAgICAgXCJEZWxsVGFibGV0XCI6IFwiVmVudWUgMTF8VmVudWUgOHxWZW51ZSA3fERlbGwgU3RyZWFrIDEwfERlbGwgU3RyZWFrIDdcIixcbiAgICAgICAgXCJZYXJ2aWtUYWJsZXRcIjogXCJBbmRyb2lkLipcXFxcYihUQUIyMTB8VEFCMjExfFRBQjIyNHxUQUIyNTB8VEFCMjYwfFRBQjI2NHxUQUIzMTB8VEFCMzYwfFRBQjM2NHxUQUI0MTB8VEFCNDExfFRBQjQyMHxUQUI0MjR8VEFCNDUwfFRBQjQ2MHxUQUI0NjF8VEFCNDY0fFRBQjQ2NXxUQUI0Njd8VEFCNDY4fFRBQjA3LTEwMHxUQUIwNy0xMDF8VEFCMDctMTUwfFRBQjA3LTE1MXxUQUIwNy0xNTJ8VEFCMDctMjAwfFRBQjA3LTIwMS0zR3xUQUIwNy0yMTB8VEFCMDctMjExfFRBQjA3LTIxMnxUQUIwNy0yMTR8VEFCMDctMjIwfFRBQjA3LTQwMHxUQUIwNy00ODV8VEFCMDgtMTUwfFRBQjA4LTIwMHxUQUIwOC0yMDEtM0d8VEFCMDgtMjAxLTMwfFRBQjA5LTEwMHxUQUIwOS0yMTF8VEFCMDktNDEwfFRBQjEwLTE1MHxUQUIxMC0yMDF8VEFCMTAtMjExfFRBQjEwLTQwMHxUQUIxMC00MTB8VEFCMTMtMjAxfFRBQjI3NEVVS3xUQUIyNzVFVUt8VEFCMzc0RVVLfFRBQjQ2MkVVS3xUQUI0NzRFVUt8VEFCOS0yMDApXFxcXGJcIixcbiAgICAgICAgXCJNZWRpb25UYWJsZXRcIjogXCJBbmRyb2lkLipcXFxcYk9ZT1xcXFxifExJRkUuKihQOTIxMnxQOTUxNHxQOTUxNnxTOTUxMil8TElGRVRBQlwiLFxuICAgICAgICBcIkFybm92YVRhYmxldFwiOiBcIjk3RzR8QU4xMEcyfEFON2JHM3xBTjdmRzN8QU44RzN8QU44Y0czfEFON0czfEFOOUczfEFON2RHM3xBTjdkRzNTVHxBTjdkRzNDaGlsZFBhZHxBTjEwYkczfEFOMTBiRzNEVHxBTjlHMlwiLFxuICAgICAgICBcIkludGVuc29UYWJsZXRcIjogXCJJTk04MDAyS1B8SU5NMTAxMEZQfElOTTgwNU5EfEludGVuc28gVGFifFRBQjEwMDRcIixcbiAgICAgICAgXCJJUlVUYWJsZXRcIjogXCJNNzAycHJvXCIsXG4gICAgICAgIFwiTWVnYWZvblRhYmxldFwiOiBcIk1lZ2FGb24gVjl8XFxcXGJaVEUgVjlcXFxcYnxBbmRyb2lkLipcXFxcYk1UN0FcXFxcYlwiLFxuICAgICAgICBcIkVib2RhVGFibGV0XCI6IFwiRS1Cb2RhIChTdXByZW1lfEltcHJlc3NwZWVkfEl6enljb21tfEVzc2VudGlhbClcIixcbiAgICAgICAgXCJBbGxWaWV3VGFibGV0XCI6IFwiQWxsdmlldy4qKFZpdmF8QWxsZHJvfENpdHl8U3BlZWR8QWxsIFRWfEZyZW56eXxRdWFzYXJ8U2hpbmV8VFgxfEFYMXxBWDIpXCIsXG4gICAgICAgIFwiQXJjaG9zVGFibGV0XCI6IFwiXFxcXGIoMTAxRzl8ODBHOXxBMTAxSVQpXFxcXGJ8UWlsaXZlIDk3UnxBcmNob3M1fFxcXFxiQVJDSE9TICg3MHw3OXw4MHw5MHw5N3wxMDF8RkFNSUxZUEFEfCkoYnxjfCkoRzEwfCBDb2JhbHR8IFRJVEFOSVVNKEhEfCl8IFhlbm9ufCBOZW9ufFhTS3wgMnwgWFMgMnwgUExBVElOVU18IENBUkJPTnxHQU1FUEFEKVxcXFxiXCIsXG4gICAgICAgIFwiQWlub2xUYWJsZXRcIjogXCJOT1ZPN3xOT1ZPOHxOT1ZPMTB8Tm92bzdBdXJvcmF8Tm92bzdCYXNpY3xOT1ZPN1BBTEFESU58bm92bzktU3BhcmtcIixcbiAgICAgICAgXCJOb2tpYUx1bWlhVGFibGV0XCI6IFwiTHVtaWEgMjUyMFwiLFxuICAgICAgICBcIlNvbnlUYWJsZXRcIjogXCJTb255LipUYWJsZXR8WHBlcmlhIFRhYmxldHxTb255IFRhYmxldCBTfFNPLTAzRXxTR1BUMTJ8U0dQVDEzfFNHUFQxMTR8U0dQVDEyMXxTR1BUMTIyfFNHUFQxMjN8U0dQVDExMXxTR1BUMTEyfFNHUFQxMTN8U0dQVDEzMXxTR1BUMTMyfFNHUFQxMzN8U0dQVDIxMXxTR1BUMjEyfFNHUFQyMTN8U0dQMzExfFNHUDMxMnxTR1AzMjF8RUJSRDExMDF8RUJSRDExMDJ8RUJSRDEyMDF8U0dQMzUxfFNHUDM0MXxTR1A1MTF8U0dQNTEyfFNHUDUyMXxTR1A1NDF8U0dQNTUxfFNHUDYyMXxTR1A2NDF8U0dQNjEyfFNPVDMxfFNHUDc3MXxTR1A2MTF8U0dQNjEyfFNHUDcxMlwiLFxuICAgICAgICBcIlBoaWxpcHNUYWJsZXRcIjogXCJcXFxcYihQSTIwMTB8UEkzMDAwfFBJMzEwMHxQSTMxMDV8UEkzMTEwfFBJMzIwNXxQSTMyMTB8UEkzOTAwfFBJNDAxMHxQSTcwMDB8UEk3MTAwKVxcXFxiXCIsXG4gICAgICAgIFwiQ3ViZVRhYmxldFwiOiBcIkFuZHJvaWQuKihLOEdUfFU5R1R8VTEwR1R8VTE2R1R8VTE3R1R8VTE4R1R8VTE5R1R8VTIwR1R8VTIzR1R8VTMwR1QpfENVQkUgVThHVFwiLFxuICAgICAgICBcIkNvYnlUYWJsZXRcIjogXCJNSUQxMDQyfE1JRDEwNDV8TUlEMTEyNXxNSUQxMTI2fE1JRDcwMTJ8TUlENzAxNHxNSUQ3MDE1fE1JRDcwMzR8TUlENzAzNXxNSUQ3MDM2fE1JRDcwNDJ8TUlENzA0OHxNSUQ3MTI3fE1JRDgwNDJ8TUlEODA0OHxNSUQ4MTI3fE1JRDkwNDJ8TUlEOTc0MHxNSUQ5NzQyfE1JRDcwMjJ8TUlENzAxMFwiLFxuICAgICAgICBcIk1JRFRhYmxldFwiOiBcIk05NzAxfE05MDAwfE05MTAwfE04MDZ8TTEwNTJ8TTgwNnxUNzAzfE1JRDcwMXxNSUQ3MTN8TUlENzEwfE1JRDcyN3xNSUQ3NjB8TUlEODMwfE1JRDcyOHxNSUQ5MzN8TUlEMTI1fE1JRDgxMHxNSUQ3MzJ8TUlEMTIwfE1JRDkzMHxNSUQ4MDB8TUlENzMxfE1JRDkwMHxNSUQxMDB8TUlEODIwfE1JRDczNXxNSUQ5ODB8TUlEMTMwfE1JRDgzM3xNSUQ3Mzd8TUlEOTYwfE1JRDEzNXxNSUQ4NjB8TUlENzM2fE1JRDE0MHxNSUQ5MzB8TUlEODM1fE1JRDczM3xNSUQ0WDEwXCIsXG4gICAgICAgIFwiTVNJVGFibGV0XCI6IFwiTVNJIFxcXFxiKFByaW1vIDczS3xQcmltbyA3M0x8UHJpbW8gODFMfFByaW1vIDc3fFByaW1vIDkzfFByaW1vIDc1fFByaW1vIDc2fFByaW1vIDczfFByaW1vIDgxfFByaW1vIDkxfFByaW1vIDkwfEVuam95IDcxfEVuam95IDd8RW5qb3kgMTApXFxcXGJcIixcbiAgICAgICAgXCJTTWlUVGFibGV0XCI6IFwiQW5kcm9pZC4qKFxcXFxiTUlEXFxcXGJ8TUlELTU2MHxNVFYtVDEyMDB8TVRWLVBORDUzMXxNVFYtUDExMDF8TVRWLVBORDUzMClcIixcbiAgICAgICAgXCJSb2NrQ2hpcFRhYmxldFwiOiBcIkFuZHJvaWQuKihSSzI4MTh8UksyODA4QXxSSzI5MTh8UkszMDY2KXxSSzI3Mzh8UksyODA4QVwiLFxuICAgICAgICBcIkZseVRhYmxldFwiOiBcIklRMzEwfEZseSBWaXNpb25cIixcbiAgICAgICAgXCJicVRhYmxldFwiOiBcIkFuZHJvaWQuKihicSk/LipcXFxcYihFbGNhbm98Q3VyaWV8RWRpc29ufE1heHdlbGx8S2VwbGVyfFBhc2NhbHxUZXNsYXxIeXBhdGlhfFBsYXRvbnxOZXd0b258TGl2aW5nc3RvbmV8Q2VydmFudGVzfEF2YW50fEFxdWFyaXMgKFtFfE1dMTB8TTgpKVxcXFxifE1heHdlbGwuKkxpdGV8TWF4d2VsbC4qUGx1c1wiLFxuICAgICAgICBcIkh1YXdlaVRhYmxldFwiOiBcIk1lZGlhUGFkfE1lZGlhUGFkIDcgWW91dGh8SURFT1MgUzd8UzctMjAxY3xTNy0yMDJ1fFM3LTEwMXxTNy0xMDN8UzctMTA0fFM3LTEwNXxTNy0xMDZ8UzctMjAxfFM3LVNsaW18TTItQTAxTHxCQUgtTDA5fEJBSC1XMDl8QUdTLUwwOXxDTVItQUwxOVwiLFxuICAgICAgICBcIk5lY1RhYmxldFwiOiBcIlxcXFxiTi0wNkR8XFxcXGJOLTA4RFwiLFxuICAgICAgICBcIlBhbnRlY2hUYWJsZXRcIjogXCJQYW50ZWNoLipQNDEwMFwiLFxuICAgICAgICBcIkJyb25jaG9UYWJsZXRcIjogXCJCcm9uY2hvLiooTjcwMXxONzA4fE44MDJ8YTcxMClcIixcbiAgICAgICAgXCJWZXJzdXNUYWJsZXRcIjogXCJUT1VDSFBBRC4qWzc4OTEwXXxcXFxcYlRPVUNIVEFCXFxcXGJcIixcbiAgICAgICAgXCJaeW5jVGFibGV0XCI6IFwiejEwMDB8Wjk5IDJHfHo5MzB8ejk5MHx6OTA5fFo5MTl8ejkwMFwiLFxuICAgICAgICBcIlBvc2l0aXZvVGFibGV0XCI6IFwiVEIwN1NUQXxUQjEwU1RBfFRCMDdGVEF8VEIxMEZUQVwiLFxuICAgICAgICBcIk5hYmlUYWJsZXRcIjogXCJBbmRyb2lkLipcXFxcYk5hYmlcIixcbiAgICAgICAgXCJLb2JvVGFibGV0XCI6IFwiS29ibyBUb3VjaHxcXFxcYkswODBcXFxcYnxcXFxcYlZveFxcXFxiIEJ1aWxkfFxcXFxiQXJjXFxcXGIgQnVpbGRcIixcbiAgICAgICAgXCJEYW5ld1RhYmxldFwiOiBcIkRTbGlkZS4qXFxcXGIoNzAwfDcwMVJ8NzAyfDcwM1J8NzA0fDgwMnw5NzB8OTcxfDk3Mnw5NzN8OTc0fDEwMTB8MTAxMilcXFxcYlwiLFxuICAgICAgICBcIlRleGV0VGFibGV0XCI6IFwiTmF2aVBhZHxUQi03NzJBfFRNLTcwNDV8VE0tNzA1NXxUTS05NzUwfFRNLTcwMTZ8VE0tNzAyNHxUTS03MDI2fFRNLTcwNDF8VE0tNzA0M3xUTS03MDQ3fFRNLTgwNDF8VE0tOTc0MXxUTS05NzQ3fFRNLTk3NDh8VE0tOTc1MXxUTS03MDIyfFRNLTcwMjF8VE0tNzAyMHxUTS03MDExfFRNLTcwMTB8VE0tNzAyM3xUTS03MDI1fFRNLTcwMzdXfFRNLTcwMzhXfFRNLTcwMjdXfFRNLTk3MjB8VE0tOTcyNXxUTS05NzM3V3xUTS0xMDIwfFRNLTk3MzhXfFRNLTk3NDB8VE0tOTc0M1d8VEItODA3QXxUQi03NzFBfFRCLTcyN0F8VEItNzI1QXxUQi03MTlBfFRCLTgyM0F8VEItODA1QXxUQi03MjNBfFRCLTcxNUF8VEItNzA3QXxUQi03MDVBfFRCLTcwOUF8VEItNzExQXxUQi04OTBIRHxUQi04ODBIRHxUQi03OTBIRHxUQi03ODBIRHxUQi03NzBIRHxUQi03MjFIRHxUQi03MTBIRHxUQi00MzRIRHxUQi04NjBIRHxUQi04NDBIRHxUQi03NjBIRHxUQi03NTBIRHxUQi03NDBIRHxUQi03MzBIRHxUQi03MjJIRHxUQi03MjBIRHxUQi03MDBIRHxUQi01MDBIRHxUQi00NzBIRHxUQi00MzFIRHxUQi00MzBIRHxUQi01MDZ8VEItNTA0fFRCLTQ0NnxUQi00MzZ8VEItNDE2fFRCLTE0NlNFfFRCLTEyNlNFXCIsXG4gICAgICAgIFwiUGxheXN0YXRpb25UYWJsZXRcIjogXCJQbGF5c3RhdGlvbi4qKFBvcnRhYmxlfFZpdGEpXCIsXG4gICAgICAgIFwiVHJla3N0b3JUYWJsZXRcIjogXCJTVDEwNDE2LTF8VlQxMDQxNi0xfFNUNzA0MDgtMXxTVDcwMnh4LTF8U1Q3MDJ4eC0yfFNUODAyMDh8U1Q5NzIxNnxTVDcwMTA0LTJ8VlQxMDQxNi0yfFNUMTAyMTYtMkF8U3VyZlRhYlwiLFxuICAgICAgICBcIlB5bGVBdWRpb1RhYmxldFwiOiBcIlxcXFxiKFBUQkwxMENFVXxQVEJMMTBDfFBUQkw3MkJDfFBUQkw3MkJDRVV8UFRCTDdDRVV8UFRCTDdDfFBUQkw5MkJDfFBUQkw5MkJDRVV8UFRCTDlDRVV8UFRCTDlDVUt8UFRCTDlDKVxcXFxiXCIsXG4gICAgICAgIFwiQWR2YW5UYWJsZXRcIjogXCJBbmRyb2lkLiogXFxcXGIoRTNBfFQzWHxUNUN8VDVCfFQzRXxUM0N8VDNCfFQxSnxUMUZ8VDJBfFQxSHxUMWl8RTFDfFQxLUV8VDUtQXxUNHxFMS1CfFQyQ2l8VDEtQnxUMS1EfE8xLUF8RTEtQXxUMS1BfFQzQXxUNGkpXFxcXGIgXCIsXG4gICAgICAgIFwiRGFueVRlY2hUYWJsZXRcIjogXCJHZW5pdXMgVGFiIEczfEdlbml1cyBUYWIgUzJ8R2VuaXVzIFRhYiBRM3xHZW5pdXMgVGFiIEc0fEdlbml1cyBUYWIgUTR8R2VuaXVzIFRhYiBHLUlJfEdlbml1cyBUQUIgR0lJfEdlbml1cyBUQUIgR0lJSXxHZW5pdXMgVGFiIFMxXCIsXG4gICAgICAgIFwiR2FsYXBhZFRhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiRzFcXFxcYig/IVxcXFwpKVwiLFxuICAgICAgICBcIk1pY3JvbWF4VGFibGV0XCI6IFwiRnVuYm9va3xNaWNyb21heC4qXFxcXGIoUDI1MHxQNTYwfFAzNjB8UDM2MnxQNjAwfFAzMDB8UDM1MHxQNTAwfFAyNzUpXFxcXGJcIixcbiAgICAgICAgXCJLYXJib25uVGFibGV0XCI6IFwiQW5kcm9pZC4qXFxcXGIoQTM5fEEzN3xBMzR8U1Q4fFNUMTB8U1Q3fFNtYXJ0IFRhYjN8U21hcnQgVGFiMilcXFxcYlwiLFxuICAgICAgICBcIkFsbEZpbmVUYWJsZXRcIjogXCJGaW5lNyBHZW5pdXN8RmluZTcgU2hpbmV8RmluZTcgQWlyfEZpbmU4IFN0eWxlfEZpbmU5IE1vcmV8RmluZTEwIEpveXxGaW5lMTEgV2lkZVwiLFxuICAgICAgICBcIlBST1NDQU5UYWJsZXRcIjogXCJcXFxcYihQRU02M3xQTFQxMDIzR3xQTFQxMDQxfFBMVDEwNDR8UExUMTA0NEd8UExUMTA5MXxQTFQ0MzExfFBMVDQzMTFQTHxQTFQ0MzE1fFBMVDcwMzB8UExUNzAzM3xQTFQ3MDMzRHxQTFQ3MDM1fFBMVDcwMzVEfFBMVDcwNDRLfFBMVDcwNDVLfFBMVDcwNDVLQnxQTFQ3MDcxS0d8UExUNzA3MnxQTFQ3MjIzR3xQTFQ3MjI1R3xQTFQ3Nzc3R3xQTFQ3ODEwS3xQTFQ3ODQ5R3xQTFQ3ODUxR3xQTFQ3ODUyR3xQTFQ4MDE1fFBMVDgwMzF8UExUODAzNHxQTFQ4MDM2fFBMVDgwODBLfFBMVDgwODJ8UExUODA4OHxQTFQ4MjIzR3xQTFQ4MjM0R3xQTFQ4MjM1R3xQTFQ4ODE2S3xQTFQ5MDExfFBMVDkwNDVLfFBMVDkyMzNHfFBMVDk3MzV8UExUOTc2MEd8UExUOTc3MEcpXFxcXGJcIixcbiAgICAgICAgXCJZT05FU1RhYmxldFwiOiBcIkJRMTA3OHxCQzEwMDN8QkMxMDc3fFJLOTcwMnxCQzk3MzB8QkM5MDAxfElUOTAwMXxCQzcwMDh8QkM3MDEwfEJDNzA4fEJDNzI4fEJDNzAxMnxCQzcwMzB8QkM3MDI3fEJDNzAyNlwiLFxuICAgICAgICBcIkNoYW5nSmlhVGFibGV0XCI6IFwiVFBDNzEwMnxUUEM3MTAzfFRQQzcxMDV8VFBDNzEwNnxUUEM3MTA3fFRQQzcyMDF8VFBDNzIwM3xUUEM3MjA1fFRQQzcyMTB8VFBDNzcwOHxUUEM3NzA5fFRQQzc3MTJ8VFBDNzExMHxUUEM4MTAxfFRQQzgxMDN8VFBDODEwNXxUUEM4MTA2fFRQQzgyMDN8VFBDODIwNXxUUEM4NTAzfFRQQzkxMDZ8VFBDOTcwMXxUUEM5NzEwMXxUUEM5NzEwM3xUUEM5NzEwNXxUUEM5NzEwNnxUUEM5NzExMXxUUEM5NzExM3xUUEM5NzIwM3xUUEM5NzYwM3xUUEM5NzgwOXxUUEM5NzIwNXxUUEMxMDEwMXxUUEMxMDEwM3xUUEMxMDEwNnxUUEMxMDExMXxUUEMxMDIwM3xUUEMxMDIwNXxUUEMxMDUwM1wiLFxuICAgICAgICBcIkdVVGFibGV0XCI6IFwiVFgtQTEzMDF8VFgtTTkwMDJ8UTcwMnxrZjAyNlwiLFxuICAgICAgICBcIlBvaW50T2ZWaWV3VGFibGV0XCI6IFwiVEFCLVA1MDZ8VEFCLW5hdmktNy0zRy1NfFRBQi1QNTE3fFRBQi1QLTUyN3xUQUItUDcwMXxUQUItUDcwM3xUQUItUDcyMXxUQUItUDczMU58VEFCLVA3NDF8VEFCLVA4MjV8VEFCLVA5MDV8VEFCLVA5MjV8VEFCLVBSOTQ1fFRBQi1QTDEwMTV8VEFCLVAxMDI1fFRBQi1QSTEwNDV8VEFCLVAxMzI1fFRBQi1QUk9UQUJbMC05XSt8VEFCLVBST1RBQjI1fFRBQi1QUk9UQUIyNnxUQUItUFJPVEFCMjd8VEFCLVBST1RBQjI2WEx8VEFCLVBST1RBQjItSVBTOXxUQUItUFJPVEFCMzAtSVBTOXxUQUItUFJPVEFCMjVYWEx8VEFCLVBST1RBQjI2LUlQUzEwfFRBQi1QUk9UQUIzMC1JUFMxMFwiLFxuICAgICAgICBcIk92ZXJtYXhUYWJsZXRcIjogXCJPVi0oU3RlZWxDb3JlfE5ld0Jhc2V8QmFzZWNvcmV8QmFzZW9uZXxFeGVsbGVufFF1YXR0b3J8RWR1VGFifFNvbHV0aW9ufEFDVElPTnxCYXNpY1RhYnxUZWRkeVRhYnxNYWdpY1RhYnxTdHJlYW18VEItMDh8VEItMDkpfFF1YWxjb3JlIDEwMjdcIixcbiAgICAgICAgXCJIQ0xUYWJsZXRcIjogXCJIQ0wuKlRhYmxldHxDb25uZWN0LTNHLTIuMHxDb25uZWN0LTJHLTIuMHxNRSBUYWJsZXQgVTF8TUUgVGFibGV0IFUyfE1FIFRhYmxldCBHMXxNRSBUYWJsZXQgWDF8TUUgVGFibGV0IFkyfE1FIFRhYmxldCBTeW5jXCIsXG4gICAgICAgIFwiRFBTVGFibGV0XCI6IFwiRFBTIERyZWFtIDl8RFBTIER1YWwgN1wiLFxuICAgICAgICBcIlZpc3R1cmVUYWJsZXRcIjogXCJWOTcgSER8aTc1IDNHfFZpc3R1cmUgVjQoIEhEKT98VmlzdHVyZSBWNSggSEQpP3xWaXN0dXJlIFYxMFwiLFxuICAgICAgICBcIkNyZXN0YVRhYmxldFwiOiBcIkNUUCgtKT84MTB8Q1RQKC0pPzgxOHxDVFAoLSk/ODI4fENUUCgtKT84Mzh8Q1RQKC0pPzg4OHxDVFAoLSk/OTc4fENUUCgtKT85ODB8Q1RQKC0pPzk4N3xDVFAoLSk/OTg4fENUUCgtKT85ODlcIixcbiAgICAgICAgXCJNZWRpYXRla1RhYmxldFwiOiBcIlxcXFxiTVQ4MTI1fE1UODM4OXxNVDgxMzV8TVQ4Mzc3XFxcXGJcIixcbiAgICAgICAgXCJDb25jb3JkZVRhYmxldFwiOiBcIkNvbmNvcmRlKFsgXSspP1RhYnxDb25Db3JkZSBSZWFkTWFuXCIsXG4gICAgICAgIFwiR29DbGV2ZXJUYWJsZXRcIjogXCJHT0NMRVZFUiBUQUJ8QTdHT0NMRVZFUnxNMTA0MnxNNzg0MXxNNzQyfFIxMDQyQkt8UjEwNDF8VEFCIEE5NzV8VEFCIEE3ODQyfFRBQiBBNzQxfFRBQiBBNzQxTHxUQUIgTTcyM0d8VEFCIE03MjF8VEFCIEExMDIxfFRBQiBJOTIxfFRBQiBSNzIxfFRBQiBJNzIwfFRBQiBUNzZ8VEFCIFI3MHxUQUIgUjc2LjJ8VEFCIFIxMDZ8VEFCIFI4My4yfFRBQiBNODEzR3xUQUIgSTcyMXxHQ1RBNzIyfFRBQiBJNzB8VEFCIEk3MXxUQUIgUzczfFRBQiBSNzN8VEFCIFI3NHxUQUIgUjkzfFRBQiBSNzV8VEFCIFI3Ni4xfFRBQiBBNzN8VEFCIEE5M3xUQUIgQTkzLjJ8VEFCIFQ3MnxUQUIgUjgzfFRBQiBSOTc0fFRBQiBSOTczfFRBQiBBMTAxfFRBQiBBMTAzfFRBQiBBMTA0fFRBQiBBMTA0LjJ8UjEwNUJLfE03MTNHfEE5NzJCS3xUQUIgQTk3MXxUQUIgUjk3NC4yfFRBQiBSMTA0fFRBQiBSODMuM3xUQUIgQTEwNDJcIixcbiAgICAgICAgXCJNb2RlY29tVGFibGV0XCI6IFwiRnJlZVRBQiA5MDAwfEZyZWVUQUIgNy40fEZyZWVUQUIgNzAwNHxGcmVlVEFCIDc4MDB8RnJlZVRBQiAyMDk2fEZyZWVUQUIgNy41fEZyZWVUQUIgMTAxNHxGcmVlVEFCIDEwMDEgfEZyZWVUQUIgODAwMXxGcmVlVEFCIDk3MDZ8RnJlZVRBQiA5NzAyfEZyZWVUQUIgNzAwM3xGcmVlVEFCIDcwMDJ8RnJlZVRBQiAxMDAyfEZyZWVUQUIgNzgwMXxGcmVlVEFCIDEzMzF8RnJlZVRBQiAxMDA0fEZyZWVUQUIgODAwMnxGcmVlVEFCIDgwMTR8RnJlZVRBQiA5NzA0fEZyZWVUQUIgMTAwM1wiLFxuICAgICAgICBcIlZvbmlub1RhYmxldFwiOiBcIlxcXFxiKEFyZ3VzWyBfXT9TfERpYW1vbmRbIF9dPzc5SER8RW1lcmFsZFsgX10/NzhFfEx1bmFbIF9dPzcwQ3xPbnl4WyBfXT9TfE9ueXhbIF9dP1p8T3JpblsgX10/SER8T3JpblsgX10/U3xPdGlzWyBfXT9TfFNwZWVkU3RhclsgX10/U3xNYWduZXRbIF9dP005fFByaW11c1sgX10/OTRbIF9dPzNHfFByaW11c1sgX10/OTRIRHxQcmltdXNbIF9dP1FTfEFuZHJvaWQuKlxcXFxiUThcXFxcYnxTaXJpdXNbIF9dP0VWT1sgX10/UVN8U2lyaXVzWyBfXT9RU3xTcGlyaXRbIF9dP1MpXFxcXGJcIixcbiAgICAgICAgXCJFQ1NUYWJsZXRcIjogXCJWMDdPVDJ8VE0xMDVBfFMxME9UMXxUUjEwQ1MxXCIsXG4gICAgICAgIFwiU3RvcmV4VGFibGV0XCI6IFwiZVplZVtfJ10/KFRhYnxHbylbMC05XSt8VGFiTEM3fExvb25leSBUdW5lcyBUYWJcIixcbiAgICAgICAgXCJWb2RhZm9uZVRhYmxldFwiOiBcIlNtYXJ0VGFiKFsgXSspP1swLTldK3xTbWFydFRhYklJMTB8U21hcnRUYWJJSTd8VkYtMTQ5N3xWRkQgMTQwMFwiLFxuICAgICAgICBcIkVzc2VudGllbEJUYWJsZXRcIjogXCJTbWFydFsgJ10/VEFCWyBdKz9bMC05XSt8RmFtaWx5WyAnXT9UQUIyXCIsXG4gICAgICAgIFwiUm9zc01vb3JUYWJsZXRcIjogXCJSTS03OTB8Uk0tOTk3fFJNRC04NzhHfFJNRC05NzRSfFJNVC03MDVBfFJNVC03MDF8Uk1FLTYwMXxSTVQtNTAxfFJNVC03MTFcIixcbiAgICAgICAgXCJpTW9iaWxlVGFibGV0XCI6IFwiaS1tb2JpbGUgaS1ub3RlXCIsXG4gICAgICAgIFwiVG9saW5vVGFibGV0XCI6IFwidG9saW5vIHRhYiBbMC05Ll0rfHRvbGlubyBzaGluZVwiLFxuICAgICAgICBcIkF1ZGlvU29uaWNUYWJsZXRcIjogXCJcXFxcYkMtMjJRfFQ3LVFDfFQtMTdCfFQtMTdQXFxcXGJcIixcbiAgICAgICAgXCJBTVBFVGFibGV0XCI6IFwiQW5kcm9pZC4qIEE3OCBcIixcbiAgICAgICAgXCJTa2tUYWJsZXRcIjogXCJBbmRyb2lkLiogKFNLWVBBRHxQSE9FTklYfENZQ0xPUFMpXCIsXG4gICAgICAgIFwiVGVjbm9UYWJsZXRcIjogXCJURUNOTyBQOXxURUNOTyBEUDhEXCIsXG4gICAgICAgIFwiSlhEVGFibGV0XCI6IFwiQW5kcm9pZC4qIFxcXFxiKEYzMDAwfEEzMzAwfEpYRDUwMDB8SlhEMzAwMHxKWEQyMDAwfEpYRDMwMEJ8SlhEMzAwfFM1ODAwfFM3ODAwfFM2MDJifFM1MTEwYnxTNzMwMHxTNTMwMHxTNjAyfFM2MDN8UzUxMDB8UzUxMTB8UzYwMXxTNzEwMGF8UDMwMDBGfFAzMDAwc3xQMTAxfFAyMDBzfFAxMDAwbXxQMjAwbXxQOTEwMHxQMTAwMHN8UzY2MDBifFM5MDh8UDEwMDB8UDMwMHxTMTh8UzY2MDB8UzkxMDApXFxcXGJcIixcbiAgICAgICAgXCJpSm95VGFibGV0XCI6IFwiVGFibGV0IChTcGlyaXQgN3xFc3NlbnRpYXxHYWxhdGVhfEZ1c2lvbnxPbml4IDd8TGFuZGF8VGl0YW58U2Nvb2J5fERlb3h8U3RlbGxhfFRoZW1pc3xBcmdvbnxVbmlxdWUgN3xTeWdudXN8SGV4ZW58RmluaXR5IDd8Q3JlYW18Q3JlYW0gWDJ8SmFkZXxOZW9uIDd8TmVyb24gN3xLYW5keXxTY2FwZXxTYXBoeXIgN3xSZWJlbHxCaW94fFJlYmVsfFJlYmVsIDhHQnxNeXN0fERyYWNvIDd8TXlzdHxUYWI3LTAwNHxNeXN0fFRhZGVvIEpvbmVzfFRhYmxldCBCb2luZ3xBcnJvd3xEcmFjbyBEdWFsIENhbXxBdXJpeHxNaW50fEFtaXR5fFJldm9sdXRpb258RmluaXR5IDl8TmVvbiA5fFQ5d3xBbWl0eSA0R0IgRHVhbCBDYW18U3RvbmUgNEdCfFN0b25lIDhHQnxBbmRyb21lZGF8U2lsa2VufFgyfEFuZHJvbWVkYSBJSXxIYWxsZXl8RmxhbWV8U2FwaHlyIDksN3xUb3VjaCA4fFBsYW5ldHxUcml0b258VW5pcXVlIDEwfEhleGVuIDEwfE1lbXBoaXMgNEdCfE1lbXBoaXMgOEdCfE9uaXggMTApXCIsXG4gICAgICAgIFwiRlgyVGFibGV0XCI6IFwiRlgyIFBBRDd8RlgyIFBBRDEwXCIsXG4gICAgICAgIFwiWG9yb1RhYmxldFwiOiBcIktpZHNQQUQgNzAxfFBBRFsgXT83MTJ8UEFEWyBdPzcxNHxQQURbIF0/NzE2fFBBRFsgXT83MTd8UEFEWyBdPzcxOHxQQURbIF0/NzIwfFBBRFsgXT83MjF8UEFEWyBdPzcyMnxQQURbIF0/NzkwfFBBRFsgXT83OTJ8UEFEWyBdPzkwMHxQQURbIF0/OTcxNUR8UEFEWyBdPzk3MTZEUnxQQURbIF0/OTcxOERSfFBBRFsgXT85NzE5UVJ8UEFEWyBdPzk3MjBRUnxUZWxlUEFEMTAzMHxUZWxlcGFkMTAzMnxUZWxlUEFENzMwfFRlbGVQQUQ3MzF8VGVsZVBBRDczMnxUZWxlUEFENzM1UXxUZWxlUEFEODMwfFRlbGVQQUQ5NzMwfFRlbGVQQUQ3OTV8TWVnYVBBRCAxMzMxfE1lZ2FQQUQgMTg1MXxNZWdhUEFEIDIxNTFcIixcbiAgICAgICAgXCJWaWV3c29uaWNUYWJsZXRcIjogXCJWaWV3UGFkIDEwcGl8Vmlld1BhZCAxMGV8Vmlld1BhZCAxMHN8Vmlld1BhZCBFNzJ8Vmlld1BhZDd8Vmlld1BhZCBFMTAwfFZpZXdQYWQgN2V8Vmlld1NvbmljIFZCNzMzfFZCMTAwYVwiLFxuICAgICAgICBcIlZlcml6b25UYWJsZXRcIjogXCJRVEFRWjN8UVRBSVI3fFFUQVFUWjN8UVRBU1VOMXxRVEFTVU4yfFFUQVhJQTFcIixcbiAgICAgICAgXCJPZHlzVGFibGV0XCI6IFwiTE9PWHxYRU5PMTB8T0RZU1sgLV0oU3BhY2V8RVZPfFhwcmVzc3xOT09OKXxcXFxcYlhFTElPXFxcXGJ8WGVsaW8xMFByb3xYRUxJTzdQSE9ORVRBQnxYRUxJTzEwRVhUUkVNRXxYRUxJT1BUMnxORU9fUVVBRDEwXCIsXG4gICAgICAgIFwiQ2FwdGl2YVRhYmxldFwiOiBcIkNBUFRJVkEgUEFEXCIsXG4gICAgICAgIFwiSWNvbmJpdFRhYmxldFwiOiBcIk5ldFRBQnxOVC0zNzAyfE5ULTM3MDJTfE5ULTM3MDJTfE5ULTM2MDNQfE5ULTM2MDNQfE5ULTA3MDRTfE5ULTA3MDRTfE5ULTM4MDVDfE5ULTM4MDVDfE5ULTA4MDZDfE5ULTA4MDZDfE5ULTA5MDlUfE5ULTA5MDlUfE5ULTA5MDdTfE5ULTA5MDdTfE5ULTA5MDJTfE5ULTA5MDJTXCIsXG4gICAgICAgIFwiVGVjbGFzdFRhYmxldFwiOiBcIlQ5OCA0R3xcXFxcYlA4MFxcXFxifFxcXFxiWDkwSERcXFxcYnxYOTggQWlyfFg5OCBBaXIgM0d8XFxcXGJYODlcXFxcYnxQODAgM0d8XFxcXGJYODBoXFxcXGJ8UDk4IEFpcnxcXFxcYlg4OUhEXFxcXGJ8UDk4IDNHfFxcXFxiUDkwSERcXFxcYnxQODkgM0d8WDk4IDNHfFxcXFxiUDcwaFxcXFxifFA3OUhEIDNHfEcxOGQgM0d8XFxcXGJQNzlIRFxcXFxifFxcXFxiUDg5c1xcXFxifFxcXFxiQTg4XFxcXGJ8XFxcXGJQMTBIRFxcXFxifFxcXFxiUDE5SERcXFxcYnxHMTggM0d8XFxcXGJQNzhIRFxcXFxifFxcXFxiQTc4XFxcXGJ8XFxcXGJQNzVcXFxcYnxHMTdzIDNHfEcxN2ggM0d8XFxcXGJQODV0XFxcXGJ8XFxcXGJQOTBcXFxcYnxcXFxcYlAxMVxcXFxifFxcXFxiUDk4dFxcXFxifFxcXFxiUDk4SERcXFxcYnxcXFxcYkcxOGRcXFxcYnxcXFxcYlA4NXNcXFxcYnxcXFxcYlAxMUhEXFxcXGJ8XFxcXGJQODhzXFxcXGJ8XFxcXGJBODBIRFxcXFxifFxcXFxiQTgwc2VcXFxcYnxcXFxcYkExMGhcXFxcYnxcXFxcYlA4OVxcXFxifFxcXFxiUDc4c1xcXFxifFxcXFxiRzE4XFxcXGJ8XFxcXGJQODVcXFxcYnxcXFxcYkE3MGhcXFxcYnxcXFxcYkE3MFxcXFxifFxcXFxiRzE3XFxcXGJ8XFxcXGJQMThcXFxcYnxcXFxcYkE4MHNcXFxcYnxcXFxcYkExMXNcXFxcYnxcXFxcYlA4OEhEXFxcXGJ8XFxcXGJBODBoXFxcXGJ8XFxcXGJQNzZzXFxcXGJ8XFxcXGJQNzZoXFxcXGJ8XFxcXGJQOThcXFxcYnxcXFxcYkExMEhEXFxcXGJ8XFxcXGJQNzhcXFxcYnxcXFxcYlA4OFxcXFxifFxcXFxiQTExXFxcXGJ8XFxcXGJBMTB0XFxcXGJ8XFxcXGJQNzZhXFxcXGJ8XFxcXGJQNzZ0XFxcXGJ8XFxcXGJQNzZlXFxcXGJ8XFxcXGJQODVIRFxcXFxifFxcXFxiUDg1YVxcXFxifFxcXFxiUDg2XFxcXGJ8XFxcXGJQNzVIRFxcXFxifFxcXFxiUDc2dlxcXFxifFxcXFxiQTEyXFxcXGJ8XFxcXGJQNzVhXFxcXGJ8XFxcXGJBMTVcXFxcYnxcXFxcYlA3NlRpXFxcXGJ8XFxcXGJQODFIRFxcXFxifFxcXFxiQTEwXFxcXGJ8XFxcXGJUNzYwVkVcXFxcYnxcXFxcYlQ3MjBIRFxcXFxifFxcXFxiUDc2XFxcXGJ8XFxcXGJQNzNcXFxcYnxcXFxcYlA3MVxcXFxifFxcXFxiUDcyXFxcXGJ8XFxcXGJUNzIwU0VcXFxcYnxcXFxcYkM1MjBUaVxcXFxifFxcXFxiVDc2MFxcXFxifFxcXFxiVDcyMFZFXFxcXGJ8VDcyMC0zR0V8VDcyMC1XaUZpXCIsXG4gICAgICAgIFwiT25kYVRhYmxldFwiOiBcIlxcXFxiKFY5NzVpfFZpMzB8Vlg1MzB8VjcwMXxWaTYwfFY3MDFzfFZpNTB8VjgwMXN8VjcxOXxWeDYxMHd8Vlg2MTBXfFY4MTlpfFZpMTB8Vlg1ODBXfFZpMTB8VjcxMXN8VjgxM3xWODExfFY4MjB3fFY4MjB8VmkyMHxWNzExfFZJMzBXfFY3MTJ8Vjg5MXd8Vjk3MnxWODE5d3xWODIwd3xWaTYwfFY4MjB3fFY3MTF8VjgxM3N8VjgwMXxWODE5fFY5NzVzfFY4MDF8VjgxOXxWODE5fFY4MTh8VjgxMXxWNzEyfFY5NzVtfFYxMDF3fFY5NjF3fFY4MTJ8VjgxOHxWOTcxfFY5NzFzfFY5MTl8Vjk4OXxWMTE2d3xWMTAyd3xWOTczfFZpNDApXFxcXGJbXFxcXHNdK3xWMTAgXFxcXGI0R1xcXFxiXCIsXG4gICAgICAgIFwiSmF5dGVjaFRhYmxldFwiOiBcIlRQQy1QQTc2MlwiLFxuICAgICAgICBcIkJsYXVwdW5rdFRhYmxldFwiOiBcIkVuZGVhdm91ciA4MDBOR3xFbmRlYXZvdXIgMTAxMFwiLFxuICAgICAgICBcIkRpZ21hVGFibGV0XCI6IFwiXFxcXGIoaUR4MTB8aUR4OXxpRHg4fGlEeDd8aUR4RDd8aUR4RDh8aURzUTh8aURzUTd8aURzUTh8aURzRDEwfGlEbkQ3fDNUUzgwNEh8aURzUTExfGlEajd8aURzMTApXFxcXGJcIixcbiAgICAgICAgXCJFdm9saW9UYWJsZXRcIjogXCJBUklBX01pbmlfd2lmaXxBcmlhWyBfXU1pbml8RXZvbGlvIFgxMHxFdm9saW8gWDd8RXZvbGlvIFg4fFxcXFxiRXZvdGFiXFxcXGJ8XFxcXGJOZXVyYVxcXFxiXCIsXG4gICAgICAgIFwiTGF2YVRhYmxldFwiOiBcIlFQQUQgRTcwNHxcXFxcYkl2b3J5U1xcXFxifEUtVEFCIElWT1JZfFxcXFxiRS1UQUJcXFxcYlwiLFxuICAgICAgICBcIkFvY1RhYmxldFwiOiBcIk1XMDgxMXxNVzA4MTJ8TVcwOTIyfE1USzgzODJ8TVcxMDMxfE1XMDgzMXxNVzA4MjF8TVcwOTMxfE1XMDcxMlwiLFxuICAgICAgICBcIk1wbWFuVGFibGV0XCI6IFwiTVAxMSBPQ1RBfE1QMTAgT0NUQXxNUFFDMTExNHxNUFFDMTAwNHxNUFFDOTk0fE1QUUM5NzR8TVBRQzk3M3xNUFFDODA0fE1QUUM3ODR8TVBRQzc4MHxcXFxcYk1QRzdcXFxcYnxNUERDRzc1fE1QRENHNzF8TVBEQzEwMDZ8TVAxMDFEQ3xNUERDOTAwMHxNUERDOTA1fE1QREM3MDZIRHxNUERDNzA2fE1QREM3MDV8TVBEQzExMHxNUERDMTAwfE1QREM5OXxNUERDOTd8TVBEQzg4fE1QREM4fE1QREM3N3xNUDcwOXxNSUQ3MDF8TUlENzExfE1JRDE3MHxNUERDNzAzfE1QUUMxMDEwXCIsXG4gICAgICAgIFwiQ2Vsa29uVGFibGV0XCI6IFwiQ1Q2OTV8Q1Q4ODh8Q1RbXFxcXHNdPzkxMHxDVDcgVGFifENUOSBUYWJ8Q1QzIFRhYnxDVDIgVGFifENUMSBUYWJ8QzgyMHxDNzIwfFxcXFxiQ1QtMVxcXFxiXCIsXG4gICAgICAgIFwiV29sZGVyVGFibGV0XCI6IFwibWlUYWIgXFxcXGIoRElBTU9ORHxTUEFDRXxCUk9PS0xZTnxORU98RkxZfE1BTkhBVFRBTnxGVU5LfEVWT0xVVElPTnxTS1l8R09DQVJ8SVJPTnxHRU5JVVN8UE9QfE1JTlR8RVBTSUxPTnxCUk9BRFdBWXxKVU1QfEhPUHxMRUdFTkR8TkVXIEFHRXxMSU5FfEFEVkFOQ0V8RkVFTHxGT0xMT1d8TElLRXxMSU5LfExJVkV8VEhJTkt8RlJFRURPTXxDSElDQUdPfENMRVZFTEFORHxCQUxUSU1PUkUtR0h8SU9XQXxCT1NUT058U0VBVFRMRXxQSE9FTklYfERBTExBU3xJTiAxMDF8TWFzdGVyQ2hlZilcXFxcYlwiLFxuICAgICAgICBcIk1lZGlhY29tVGFibGV0XCI6IFwiTS1NUEkxMEMzR3xNLVNQMTBFR3xNLVNQMTBFR1B8TS1TUDEwSFhBSHxNLVNQN0hYQUh8TS1TUDEwSFhCSHxNLVNQOEhYQUh8TS1TUDhNWEFcIixcbiAgICAgICAgXCJNaVRhYmxldFwiOiBcIlxcXFxiTUkgUEFEXFxcXGJ8XFxcXGJITSBOT1RFIDFXXFxcXGJcIixcbiAgICAgICAgXCJOaWJpcnVUYWJsZXRcIjogXCJOaWJpcnUgTTF8TmliaXJ1IEp1cGl0ZXIgT25lXCIsXG4gICAgICAgIFwiTmV4b1RhYmxldFwiOiBcIk5FWE8gTk9WQXxORVhPIDEwfE5FWE8gQVZJT3xORVhPIEZSRUV8TkVYTyBHT3xORVhPIEVWT3xORVhPIDNHfE5FWE8gU01BUlR8TkVYTyBLSURET3xORVhPIE1PQklcIixcbiAgICAgICAgXCJMZWFkZXJUYWJsZXRcIjogXCJUQkxUMTBRfFRCTFQxMEl8VEJMLTEwV0RLQnxUQkwtMTBXREtCTzIwMTN8VEJMLVcyMzBWMnxUQkwtVzQ1MHxUQkwtVzUwMHxTVjU3MnxUQkxUN0l8VEJBLUFDNy04R3xUQkxUNzl8VEJMLThXMTZ8VEJMLTEwVzMyfFRCTC0xMFdLQnxUQkwtVzEwMFwiLFxuICAgICAgICBcIlViaXNsYXRlVGFibGV0XCI6IFwiVWJpU2xhdGVbXFxcXHNdPzdDXCIsXG4gICAgICAgIFwiUG9ja2V0Qm9va1RhYmxldFwiOiBcIlBvY2tldGJvb2tcIixcbiAgICAgICAgXCJLb2Nhc29UYWJsZXRcIjogXCJcXFxcYihUQi0xMjA3KVxcXFxiXCIsXG4gICAgICAgIFwiSGlzZW5zZVRhYmxldFwiOiBcIlxcXFxiKEY1MjgxfEUyMzcxKVxcXFxiXCIsXG4gICAgICAgIFwiSHVkbFwiOiBcIkh1ZGwgSFQ3UzN8SHVkbCAyXCIsXG4gICAgICAgIFwiVGVsc3RyYVRhYmxldFwiOiBcIlQtSHViMlwiLFxuICAgICAgICBcIkdlbmVyaWNUYWJsZXRcIjogXCJBbmRyb2lkLipcXFxcYjk3RFxcXFxifFRhYmxldCg/IS4qUEMpfEJOVFYyNTBBfE1JRC1XQ0RNQXxMb2dpY1BEIFpvb20yfFxcXFxiQTdFQlxcXFxifENhdE5vdmE4fEExXzA3fENUNzA0fENUMTAwMnxcXFxcYk03MjFcXFxcYnxyazMwc2RrfFxcXFxiRVZPVEFCXFxcXGJ8TTc1OEF8RVQ5MDR8QUxVTUlVTTEwfFNtYXJ0ZnJlbiBUYWJ8RW5kZWF2b3VyIDEwMTB8VGFibGV0LVBDLTR8VGFnaSBUYWJ8XFxcXGJNNnByb1xcXFxifENUMTAyMFd8YXJjIDEwSER8XFxcXGJUUDc1MFxcXFxifFxcXFxiUVRBUVozXFxcXGJ8V1ZUMTAxfFRNMTA4OHxLVDEwN1wiXG4gICAgfSxcbiAgICBcIm9zc1wiOiB7XG4gICAgICAgIFwiQW5kcm9pZE9TXCI6IFwiQW5kcm9pZFwiLFxuICAgICAgICBcIkJsYWNrQmVycnlPU1wiOiBcImJsYWNrYmVycnl8XFxcXGJCQjEwXFxcXGJ8cmltIHRhYmxldCBvc1wiLFxuICAgICAgICBcIlBhbG1PU1wiOiBcIlBhbG1PU3xhdmFudGdvfGJsYXplcnxlbGFpbmV8aGlwdG9wfHBhbG18cGx1Y2tlcnx4aWlub1wiLFxuICAgICAgICBcIlN5bWJpYW5PU1wiOiBcIlN5bWJpYW58U3ltYk9TfFNlcmllczYwfFNlcmllczQwfFNZQi1bMC05XSt8XFxcXGJTNjBcXFxcYlwiLFxuICAgICAgICBcIldpbmRvd3NNb2JpbGVPU1wiOiBcIldpbmRvd3MgQ0UuKihQUEN8U21hcnRwaG9uZXxNb2JpbGV8WzAtOV17M314WzAtOV17M30pfFdpbmRvd3MgTW9iaWxlfFdpbmRvd3MgUGhvbmUgWzAtOS5dK3xXQ0U7XCIsXG4gICAgICAgIFwiV2luZG93c1Bob25lT1NcIjogXCJXaW5kb3dzIFBob25lIDEwLjB8V2luZG93cyBQaG9uZSA4LjF8V2luZG93cyBQaG9uZSA4LjB8V2luZG93cyBQaG9uZSBPU3xYQkxXUDd8WnVuZVdQN3xXaW5kb3dzIE5UIDYuWzIzXTsgQVJNO1wiLFxuICAgICAgICBcImlPU1wiOiBcIlxcXFxiaVBob25lLipNb2JpbGV8XFxcXGJpUG9kfFxcXFxiaVBhZHxBcHBsZUNvcmVNZWRpYVwiLFxuICAgICAgICBcImlQYWRPU1wiOiBcIkNQVSBPUyAxM1wiLFxuICAgICAgICBcIk1lZUdvT1NcIjogXCJNZWVHb1wiLFxuICAgICAgICBcIk1hZW1vT1NcIjogXCJNYWVtb1wiLFxuICAgICAgICBcIkphdmFPU1wiOiBcIkoyTUVcXC98XFxcXGJNSURQXFxcXGJ8XFxcXGJDTERDXFxcXGJcIixcbiAgICAgICAgXCJ3ZWJPU1wiOiBcIndlYk9TfGhwd09TXCIsXG4gICAgICAgIFwiYmFkYU9TXCI6IFwiXFxcXGJCYWRhXFxcXGJcIixcbiAgICAgICAgXCJCUkVXT1NcIjogXCJCUkVXXCJcbiAgICB9LFxuICAgIFwidWFzXCI6IHtcbiAgICAgICAgXCJDaHJvbWVcIjogXCJcXFxcYkNyTW9cXFxcYnxDcmlPU3xBbmRyb2lkLipDaHJvbWVcXC9bLjAtOV0qIChNb2JpbGUpP1wiLFxuICAgICAgICBcIkRvbGZpblwiOiBcIlxcXFxiRG9sZmluXFxcXGJcIixcbiAgICAgICAgXCJPcGVyYVwiOiBcIk9wZXJhLipNaW5pfE9wZXJhLipNb2JpfEFuZHJvaWQuKk9wZXJhfE1vYmlsZS4qT1BSXFwvWzAtOS5dKyR8Q29hc3RcXC9bMC05Ll0rXCIsXG4gICAgICAgIFwiU2t5ZmlyZVwiOiBcIlNreWZpcmVcIixcbiAgICAgICAgXCJFZGdlXCI6IFwiTW9iaWxlIFNhZmFyaVxcL1suMC05XSogRWRnZVwiLFxuICAgICAgICBcIklFXCI6IFwiSUVNb2JpbGV8TVNJRU1vYmlsZVwiLFxuICAgICAgICBcIkZpcmVmb3hcIjogXCJmZW5uZWN8ZmlyZWZveC4qbWFlbW98KE1vYmlsZXxUYWJsZXQpLipGaXJlZm94fEZpcmVmb3guKk1vYmlsZXxGeGlPU1wiLFxuICAgICAgICBcIkJvbHRcIjogXCJib2x0XCIsXG4gICAgICAgIFwiVGVhU2hhcmtcIjogXCJ0ZWFzaGFya1wiLFxuICAgICAgICBcIkJsYXplclwiOiBcIkJsYXplclwiLFxuICAgICAgICBcIlNhZmFyaVwiOiBcIlZlcnNpb24uKk1vYmlsZS4qU2FmYXJpfFNhZmFyaS4qTW9iaWxlfE1vYmlsZVNhZmFyaVwiLFxuICAgICAgICBcIldlQ2hhdFwiOiBcIlxcXFxiTWljcm9NZXNzZW5nZXJcXFxcYlwiLFxuICAgICAgICBcIlVDQnJvd3NlclwiOiBcIlVDLipCcm93c2VyfFVDV0VCXCIsXG4gICAgICAgIFwiYmFpZHVib3hhcHBcIjogXCJiYWlkdWJveGFwcFwiLFxuICAgICAgICBcImJhaWR1YnJvd3NlclwiOiBcImJhaWR1YnJvd3NlclwiLFxuICAgICAgICBcIkRpaWdvQnJvd3NlclwiOiBcIkRpaWdvQnJvd3NlclwiLFxuICAgICAgICBcIk1lcmN1cnlcIjogXCJcXFxcYk1lcmN1cnlcXFxcYlwiLFxuICAgICAgICBcIk9iaWdvQnJvd3NlclwiOiBcIk9iaWdvXCIsXG4gICAgICAgIFwiTmV0RnJvbnRcIjogXCJORi1Ccm93c2VyXCIsXG4gICAgICAgIFwiR2VuZXJpY0Jyb3dzZXJcIjogXCJOb2tpYUJyb3dzZXJ8T3ZpQnJvd3NlcnxPbmVCcm93c2VyfFR3b25reUJlYW1Ccm93c2VyfFNFTUMuKkJyb3dzZXJ8Rmx5Rmxvd3xNaW5pbW98TmV0RnJvbnR8Tm92YXJyYS1WaXNpb258TVFRQnJvd3NlcnxNaWNyb01lc3NlbmdlclwiLFxuICAgICAgICBcIlBhbGVNb29uXCI6IFwiQW5kcm9pZC4qUGFsZU1vb258TW9iaWxlLipQYWxlTW9vblwiXG4gICAgfSxcbiAgICBcInByb3BzXCI6IHtcbiAgICAgICAgXCJNb2JpbGVcIjogXCJNb2JpbGVcXC9bVkVSXVwiLFxuICAgICAgICBcIkJ1aWxkXCI6IFwiQnVpbGRcXC9bVkVSXVwiLFxuICAgICAgICBcIlZlcnNpb25cIjogXCJWZXJzaW9uXFwvW1ZFUl1cIixcbiAgICAgICAgXCJWZW5kb3JJRFwiOiBcIlZlbmRvcklEXFwvW1ZFUl1cIixcbiAgICAgICAgXCJpUGFkXCI6IFwiaVBhZC4qQ1BVW2EteiBdK1tWRVJdXCIsXG4gICAgICAgIFwiaVBob25lXCI6IFwiaVBob25lLipDUFVbYS16IF0rW1ZFUl1cIixcbiAgICAgICAgXCJpUG9kXCI6IFwiaVBvZC4qQ1BVW2EteiBdK1tWRVJdXCIsXG4gICAgICAgIFwiS2luZGxlXCI6IFwiS2luZGxlXFwvW1ZFUl1cIixcbiAgICAgICAgXCJDaHJvbWVcIjogW1xuICAgICAgICAgICAgXCJDaHJvbWVcXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJDcmlPU1xcL1tWRVJdXCIsXG4gICAgICAgICAgICBcIkNyTW9cXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiQ29hc3RcIjogW1xuICAgICAgICAgICAgXCJDb2FzdFxcL1tWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJEb2xmaW5cIjogXCJEb2xmaW5cXC9bVkVSXVwiLFxuICAgICAgICBcIkZpcmVmb3hcIjogW1xuICAgICAgICAgICAgXCJGaXJlZm94XFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiRnhpT1NcXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiRmVubmVjXCI6IFwiRmVubmVjXFwvW1ZFUl1cIixcbiAgICAgICAgXCJFZGdlXCI6IFwiRWRnZVxcL1tWRVJdXCIsXG4gICAgICAgIFwiSUVcIjogW1xuICAgICAgICAgICAgXCJJRU1vYmlsZVxcL1tWRVJdO1wiLFxuICAgICAgICAgICAgXCJJRU1vYmlsZSBbVkVSXVwiLFxuICAgICAgICAgICAgXCJNU0lFIFtWRVJdO1wiLFxuICAgICAgICAgICAgXCJUcmlkZW50XFwvWzAtOS5dKzsuKnJ2OltWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJOZXRGcm9udFwiOiBcIk5ldEZyb250XFwvW1ZFUl1cIixcbiAgICAgICAgXCJOb2tpYUJyb3dzZXJcIjogXCJOb2tpYUJyb3dzZXJcXC9bVkVSXVwiLFxuICAgICAgICBcIk9wZXJhXCI6IFtcbiAgICAgICAgICAgIFwiIE9QUlxcL1tWRVJdXCIsXG4gICAgICAgICAgICBcIk9wZXJhIE1pbmlcXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJWZXJzaW9uXFwvW1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIk9wZXJhIE1pbmlcIjogXCJPcGVyYSBNaW5pXFwvW1ZFUl1cIixcbiAgICAgICAgXCJPcGVyYSBNb2JpXCI6IFwiVmVyc2lvblxcL1tWRVJdXCIsXG4gICAgICAgIFwiVUNCcm93c2VyXCI6IFtcbiAgICAgICAgICAgIFwiVUNXRUJbVkVSXVwiLFxuICAgICAgICAgICAgXCJVQy4qQnJvd3NlclxcL1tWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJNUVFCcm93c2VyXCI6IFwiTVFRQnJvd3NlclxcL1tWRVJdXCIsXG4gICAgICAgIFwiTWljcm9NZXNzZW5nZXJcIjogXCJNaWNyb01lc3NlbmdlclxcL1tWRVJdXCIsXG4gICAgICAgIFwiYmFpZHVib3hhcHBcIjogXCJiYWlkdWJveGFwcFxcL1tWRVJdXCIsXG4gICAgICAgIFwiYmFpZHVicm93c2VyXCI6IFwiYmFpZHVicm93c2VyXFwvW1ZFUl1cIixcbiAgICAgICAgXCJTYW1zdW5nQnJvd3NlclwiOiBcIlNhbXN1bmdCcm93c2VyXFwvW1ZFUl1cIixcbiAgICAgICAgXCJJcm9uXCI6IFwiSXJvblxcL1tWRVJdXCIsXG4gICAgICAgIFwiU2FmYXJpXCI6IFtcbiAgICAgICAgICAgIFwiVmVyc2lvblxcL1tWRVJdXCIsXG4gICAgICAgICAgICBcIlNhZmFyaVxcL1tWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJTa3lmaXJlXCI6IFwiU2t5ZmlyZVxcL1tWRVJdXCIsXG4gICAgICAgIFwiVGl6ZW5cIjogXCJUaXplblxcL1tWRVJdXCIsXG4gICAgICAgIFwiV2Via2l0XCI6IFwid2Via2l0WyBcXC9dW1ZFUl1cIixcbiAgICAgICAgXCJQYWxlTW9vblwiOiBcIlBhbGVNb29uXFwvW1ZFUl1cIixcbiAgICAgICAgXCJHZWNrb1wiOiBcIkdlY2tvXFwvW1ZFUl1cIixcbiAgICAgICAgXCJUcmlkZW50XCI6IFwiVHJpZGVudFxcL1tWRVJdXCIsXG4gICAgICAgIFwiUHJlc3RvXCI6IFwiUHJlc3RvXFwvW1ZFUl1cIixcbiAgICAgICAgXCJHb2FubmFcIjogXCJHb2FubmFcXC9bVkVSXVwiLFxuICAgICAgICBcImlPU1wiOiBcIiBcXFxcYmk/T1NcXFxcYiBbVkVSXVsgO117MX1cIixcbiAgICAgICAgXCJBbmRyb2lkXCI6IFwiQW5kcm9pZCBbVkVSXVwiLFxuICAgICAgICBcIkJsYWNrQmVycnlcIjogW1xuICAgICAgICAgICAgXCJCbGFja0JlcnJ5W1xcXFx3XStcXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJCbGFja0JlcnJ5LipWZXJzaW9uXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiVmVyc2lvblxcL1tWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJCUkVXXCI6IFwiQlJFVyBbVkVSXVwiLFxuICAgICAgICBcIkphdmFcIjogXCJKYXZhXFwvW1ZFUl1cIixcbiAgICAgICAgXCJXaW5kb3dzIFBob25lIE9TXCI6IFtcbiAgICAgICAgICAgIFwiV2luZG93cyBQaG9uZSBPUyBbVkVSXVwiLFxuICAgICAgICAgICAgXCJXaW5kb3dzIFBob25lIFtWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJXaW5kb3dzIFBob25lXCI6IFwiV2luZG93cyBQaG9uZSBbVkVSXVwiLFxuICAgICAgICBcIldpbmRvd3MgQ0VcIjogXCJXaW5kb3dzIENFXFwvW1ZFUl1cIixcbiAgICAgICAgXCJXaW5kb3dzIE5UXCI6IFwiV2luZG93cyBOVCBbVkVSXVwiLFxuICAgICAgICBcIlN5bWJpYW5cIjogW1xuICAgICAgICAgICAgXCJTeW1iaWFuT1NcXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJTeW1iaWFuXFwvW1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIndlYk9TXCI6IFtcbiAgICAgICAgICAgIFwid2ViT1NcXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJocHdPU1xcL1tWRVJdO1wiXG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwidXRpbHNcIjoge1xuICAgICAgICBcIkJvdFwiOiBcIkdvb2dsZWJvdHxmYWNlYm9va2V4dGVybmFsaGl0fEdvb2dsZS1BTVBIVE1MfHN+YW1wLXZhbGlkYXRvcnxBZHNCb3QtR29vZ2xlfEdvb2dsZSBLZXl3b3JkIFN1Z2dlc3Rpb258RmFjZWJvdHxZYW5kZXhCb3R8WWFuZGV4TW9iaWxlQm90fGJpbmdib3R8aWFfYXJjaGl2ZXJ8QWhyZWZzQm90fEV6b29tc3xHU0xGYm90fFdCU2VhcmNoQm90fFR3aXR0ZXJib3R8VHdlZXRtZW1lQm90fFR3aWtsZXxQYXBlckxpQm90fFdvdGJveHxVbndpbmRGZXRjaG9yfEV4YWJvdHxNSjEyYm90fFlhbmRleEltYWdlc3xUdXJuaXRpbkJvdHxQaW5nZG9tfGNvbnRlbnRraW5nYXBwXCIsXG4gICAgICAgIFwiTW9iaWxlQm90XCI6IFwiR29vZ2xlYm90LU1vYmlsZXxBZHNCb3QtR29vZ2xlLU1vYmlsZXxZYWhvb1NlZWtlclxcL00xQTEtUjJEMlwiLFxuICAgICAgICBcIkRlc2t0b3BNb2RlXCI6IFwiV1BEZXNrdG9wXCIsXG4gICAgICAgIFwiVFZcIjogXCJTb255RFRWfEhiYlRWXCIsXG4gICAgICAgIFwiV2ViS2l0XCI6IFwiKHdlYmtpdClbIFxcL10oW1xcXFx3Ll0rKVwiLFxuICAgICAgICBcIkNvbnNvbGVcIjogXCJcXFxcYihOaW50ZW5kb3xOaW50ZW5kbyBXaWlVfE5pbnRlbmRvIDNEU3xOaW50ZW5kbyBTd2l0Y2h8UExBWVNUQVRJT058WGJveClcXFxcYlwiLFxuICAgICAgICBcIldhdGNoXCI6IFwiU00tVjcwMFwiXG4gICAgfVxufTtcblxuICAgIC8vIGZvbGxvd2luZyBwYXR0ZXJucyBjb21lIGZyb20gaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXJzLmNvbS9cbiAgICBpbXBsLmRldGVjdE1vYmlsZUJyb3dzZXJzID0ge1xuICAgICAgICBmdWxsUGF0dGVybjogLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLFxuICAgICAgICBzaG9ydFBhdHRlcm46IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLFxuICAgICAgICB0YWJsZXRQYXR0ZXJuOiAvYW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaVxuICAgIH07XG5cbiAgICB2YXIgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgIGlzQXJyYXk7XG5cbiAgICBpbXBsLkZBTExCQUNLX1BIT05FID0gJ1Vua25vd25QaG9uZSc7XG4gICAgaW1wbC5GQUxMQkFDS19UQUJMRVQgPSAnVW5rbm93blRhYmxldCc7XG4gICAgaW1wbC5GQUxMQkFDS19NT0JJTEUgPSAnVW5rbm93bk1vYmlsZSc7XG5cbiAgICBpc0FycmF5ID0gKCdpc0FycmF5JyBpbiBBcnJheSkgP1xuICAgICAgICBBcnJheS5pc0FycmF5IDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nOyB9O1xuXG4gICAgZnVuY3Rpb24gZXF1YWxJQyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBhICE9IG51bGwgJiYgYiAhPSBudWxsICYmIGEudG9Mb3dlckNhc2UoKSA9PT0gYi50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnRhaW5zSUMoYXJyYXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZUxDLCBpLCBsZW4gPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIGlmICghbGVuIHx8ICF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlTEMgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZUxDID09PSBhcnJheVtpXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRQcm9wc1RvUmVnRXhwKG9iamVjdCkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gbmV3IFJlZ0V4cChvYmplY3Rba2V5XSwgJ2knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXBhcmVVc2VyQWdlbnQodXNlckFnZW50KSB7XG4gICAgICAgIHJldHVybiAodXNlckFnZW50IHx8ICcnKS5zdWJzdHIoMCwgNTAwKTsgLy8gbWl0aWdhdGUgdnVsbmVyYWJsZSB0byBSZURvU1xuICAgIH1cblxuICAgIChmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIga2V5LCB2YWx1ZXMsIHZhbHVlLCBpLCBsZW4sIHZlclBvcywgbW9iaWxlRGV0ZWN0UnVsZXMgPSBpbXBsLm1vYmlsZURldGVjdFJ1bGVzO1xuICAgICAgICBmb3IgKGtleSBpbiBtb2JpbGVEZXRlY3RSdWxlcy5wcm9wcykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChtb2JpbGVEZXRlY3RSdWxlcy5wcm9wcywga2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IG1vYmlsZURldGVjdFJ1bGVzLnByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCFpc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2ZXJQb3MgPSB2YWx1ZS5pbmRleE9mKCdbVkVSXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmVyUG9zID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHZlclBvcykgKyAnKFtcXFxcdy5fXFxcXCtdKyknICsgdmFsdWUuc3Vic3RyaW5nKHZlclBvcyArIDUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vYmlsZURldGVjdFJ1bGVzLnByb3BzW2tleV0gPSB2YWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udmVydFByb3BzVG9SZWdFeHAobW9iaWxlRGV0ZWN0UnVsZXMub3NzKTtcbiAgICAgICAgY29udmVydFByb3BzVG9SZWdFeHAobW9iaWxlRGV0ZWN0UnVsZXMucGhvbmVzKTtcbiAgICAgICAgY29udmVydFByb3BzVG9SZWdFeHAobW9iaWxlRGV0ZWN0UnVsZXMudGFibGV0cyk7XG4gICAgICAgIGNvbnZlcnRQcm9wc1RvUmVnRXhwKG1vYmlsZURldGVjdFJ1bGVzLnVhcyk7XG4gICAgICAgIGNvbnZlcnRQcm9wc1RvUmVnRXhwKG1vYmlsZURldGVjdFJ1bGVzLnV0aWxzKTtcblxuICAgICAgICAvLyBjb3B5IHNvbWUgcGF0dGVybnMgdG8gb3NzMCB3aGljaCBhcmUgdGVzdGVkIGZpcnN0IChzZWUgaXNzdWUjMTUpXG4gICAgICAgIG1vYmlsZURldGVjdFJ1bGVzLm9zczAgPSB7XG4gICAgICAgICAgICBXaW5kb3dzUGhvbmVPUzogbW9iaWxlRGV0ZWN0UnVsZXMub3NzLldpbmRvd3NQaG9uZU9TLFxuICAgICAgICAgICAgV2luZG93c01vYmlsZU9TOiBtb2JpbGVEZXRlY3RSdWxlcy5vc3MuV2luZG93c01vYmlsZU9TXG4gICAgICAgIH07XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIFRlc3QgdXNlckFnZW50IHN0cmluZyBhZ2FpbnN0IGEgc2V0IG9mIHJ1bGVzIGFuZCBmaW5kIHRoZSBmaXJzdCBtYXRjaGVkIGtleS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcnVsZXMgKGtleSBpcyBTdHJpbmcsIHZhbHVlIGlzIFJlZ0V4cClcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50IHRoZSBuYXZpZ2F0b3IudXNlckFnZW50IChvciBIVFRQLUhlYWRlciAnVXNlci1BZ2VudCcpLlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdGhlIG1hdGNoZWQga2V5IGlmIGZvdW5kLCBvdGhlcndpc2UgPHR0Pm51bGw8L3R0PlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaW1wbC5maW5kTWF0Y2ggPSBmdW5jdGlvbihydWxlcywgdXNlckFnZW50KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBydWxlcykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChydWxlcywga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChydWxlc1trZXldLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGVzdCB1c2VyQWdlbnQgc3RyaW5nIGFnYWluc3QgYSBzZXQgb2YgcnVsZXMgYW5kIHJldHVybiBhbiBhcnJheSBvZiBtYXRjaGVkIGtleXMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJ1bGVzIChrZXkgaXMgU3RyaW5nLCB2YWx1ZSBpcyBSZWdFeHApXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudCB0aGUgbmF2aWdhdG9yLnVzZXJBZ2VudCAob3IgSFRUUC1IZWFkZXIgJ1VzZXItQWdlbnQnKS5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFuIGFycmF5IG9mIG1hdGNoZWQga2V5cywgbWF5IGJlIGVtcHR5IHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2gsIGJ1dCBub3QgPHR0Pm51bGw8L3R0PlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaW1wbC5maW5kTWF0Y2hlcyA9IGZ1bmN0aW9uKHJ1bGVzLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcnVsZXMpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwocnVsZXMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocnVsZXNba2V5XS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdGhlIHZlcnNpb24gb2YgdGhlIGdpdmVuIHByb3BlcnR5IGluIHRoZSBVc2VyLUFnZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHZlcnNpb24gb3IgPHR0Pm51bGw8L3R0PiBpZiB2ZXJzaW9uIG5vdCBmb3VuZFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaW1wbC5nZXRWZXJzaW9uU3RyID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSwgdXNlckFnZW50KSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGltcGwubW9iaWxlRGV0ZWN0UnVsZXMucHJvcHMsIHBhdHRlcm5zLCBpLCBsZW4sIG1hdGNoO1xuICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKHByb3BzLCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBwYXR0ZXJucyA9IHByb3BzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICBsZW4gPSBwYXR0ZXJucy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm5zW2ldLmV4ZWModXNlckFnZW50KTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdGhlIHZlcnNpb24gb2YgdGhlIGdpdmVuIHByb3BlcnR5IGluIHRoZSBVc2VyLUFnZW50LlxuICAgICAqIFdpbGwgcmV0dXJuIGEgZmxvYXQgbnVtYmVyLiAoZWcuIDJfMCB3aWxsIHJldHVybiAyLjAsIDQuMy4xIHdpbGwgcmV0dXJuIDQuMzEpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gdmVyc2lvbiBvciA8dHQ+TmFOPC90dD4gaWYgdmVyc2lvbiBub3QgZm91bmRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGltcGwuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUsIHVzZXJBZ2VudCkge1xuICAgICAgICB2YXIgdmVyc2lvbiA9IGltcGwuZ2V0VmVyc2lvblN0cihwcm9wZXJ0eU5hbWUsIHVzZXJBZ2VudCk7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uID8gaW1wbC5wcmVwYXJlVmVyc2lvbk5vKHZlcnNpb24pIDogTmFOO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRoZSB2ZXJzaW9uIG51bWJlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7TnVtYmVyfSB0aGUgdmVyc2lvbiBudW1iZXIgYXMgYSBmbG9hdGluZyBudW1iZXJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGltcGwucHJlcGFyZVZlcnNpb25ObyA9IGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgIHZhciBudW1iZXJzO1xuXG4gICAgICAgIG51bWJlcnMgPSB2ZXJzaW9uLnNwbGl0KC9bYS16Ll8gXFwvXFwtXS9pKTtcbiAgICAgICAgaWYgKG51bWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gbnVtYmVyc1swXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gbnVtYmVyc1swXSArICcuJztcbiAgICAgICAgICAgIG51bWJlcnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZlcnNpb24gKz0gbnVtYmVycy5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyKHZlcnNpb24pO1xuICAgIH07XG5cbiAgICBpbXBsLmlzTW9iaWxlRmFsbGJhY2sgPSBmdW5jdGlvbiAodXNlckFnZW50KSB7XG4gICAgICAgIHJldHVybiBpbXBsLmRldGVjdE1vYmlsZUJyb3dzZXJzLmZ1bGxQYXR0ZXJuLnRlc3QodXNlckFnZW50KSB8fFxuICAgICAgICAgICAgaW1wbC5kZXRlY3RNb2JpbGVCcm93c2Vycy5zaG9ydFBhdHRlcm4udGVzdCh1c2VyQWdlbnQuc3Vic3RyKDAsNCkpO1xuICAgIH07XG5cbiAgICBpbXBsLmlzVGFibGV0RmFsbGJhY2sgPSBmdW5jdGlvbiAodXNlckFnZW50KSB7XG4gICAgICAgIHJldHVybiBpbXBsLmRldGVjdE1vYmlsZUJyb3dzZXJzLnRhYmxldFBhdHRlcm4udGVzdCh1c2VyQWdlbnQpO1xuICAgIH07XG5cbiAgICBpbXBsLnByZXBhcmVEZXRlY3Rpb25DYWNoZSA9IGZ1bmN0aW9uIChjYWNoZSwgdXNlckFnZW50LCBtYXhQaG9uZVdpZHRoKSB7XG4gICAgICAgIGlmIChjYWNoZS5tb2JpbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwaG9uZSwgdGFibGV0LCBwaG9uZVNpemVkO1xuXG4gICAgICAgIC8vIGZpcnN0IGNoZWNrIGZvciBzdHJvbmdlciB0YWJsZXQgcnVsZXMsIHRoZW4gcGhvbmUgKHNlZSBpc3N1ZSM1KVxuICAgICAgICB0YWJsZXQgPSBpbXBsLmZpbmRNYXRjaChpbXBsLm1vYmlsZURldGVjdFJ1bGVzLnRhYmxldHMsIHVzZXJBZ2VudCk7XG4gICAgICAgIGlmICh0YWJsZXQpIHtcbiAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGNhY2hlLnRhYmxldCA9IHRhYmxldDtcbiAgICAgICAgICAgIGNhY2hlLnBob25lID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjsgLy8gdW5hbWJpZ3VvdXNseSBpZGVudGlmaWVkIGFzIHRhYmxldFxuICAgICAgICB9XG5cbiAgICAgICAgcGhvbmUgPSBpbXBsLmZpbmRNYXRjaChpbXBsLm1vYmlsZURldGVjdFJ1bGVzLnBob25lcywgdXNlckFnZW50KTtcbiAgICAgICAgaWYgKHBob25lKSB7XG4gICAgICAgICAgICBjYWNoZS5tb2JpbGUgPSBjYWNoZS5waG9uZSA9IHBob25lO1xuICAgICAgICAgICAgY2FjaGUudGFibGV0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjsgLy8gdW5hbWJpZ3VvdXNseSBpZGVudGlmaWVkIGFzIHBob25lXG4gICAgICAgIH1cblxuICAgICAgICAvLyBvdXIgcnVsZXMgaGF2ZW4ndCBmb3VuZCBhIG1hdGNoIC0+IHRyeSBtb3JlIGdlbmVyYWwgZmFsbGJhY2sgcnVsZXNcbiAgICAgICAgaWYgKGltcGwuaXNNb2JpbGVGYWxsYmFjayh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBwaG9uZVNpemVkID0gTW9iaWxlRGV0ZWN0LmlzUGhvbmVTaXplZChtYXhQaG9uZVdpZHRoKTtcbiAgICAgICAgICAgIGlmIChwaG9uZVNpemVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5tb2JpbGUgPSBpbXBsLkZBTExCQUNLX01PQklMRTtcbiAgICAgICAgICAgICAgICBjYWNoZS50YWJsZXQgPSBjYWNoZS5waG9uZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBob25lU2l6ZWQpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5tb2JpbGUgPSBjYWNoZS5waG9uZSA9IGltcGwuRkFMTEJBQ0tfUEhPTkU7XG4gICAgICAgICAgICAgICAgY2FjaGUudGFibGV0ID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FjaGUubW9iaWxlID0gY2FjaGUudGFibGV0ID0gaW1wbC5GQUxMQkFDS19UQUJMRVQ7XG4gICAgICAgICAgICAgICAgY2FjaGUucGhvbmUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGltcGwuaXNUYWJsZXRGYWxsYmFjayh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBjYWNoZS5tb2JpbGUgPSBjYWNoZS50YWJsZXQgPSBpbXBsLkZBTExCQUNLX1RBQkxFVDtcbiAgICAgICAgICAgIGNhY2hlLnBob25lID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vdCBtb2JpbGUgYXQgYWxsIVxuICAgICAgICAgICAgY2FjaGUubW9iaWxlID0gY2FjaGUudGFibGV0ID0gY2FjaGUucGhvbmUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHQgaXMgYSByZWZlcmVuY2UgdG8gYSBNb2JpbGVEZXRlY3QgaW5zdGFuY2VcbiAgICBpbXBsLm1vYmlsZUdyYWRlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgLy8gaW1wbCBub3RlOlxuICAgICAgICAvLyBUbyBrZWVwIGluIHN5bmMgdy8gTW9iaWxlX0RldGVjdC5waHAgZWFzaWx5LCB0aGUgZm9sbG93aW5nIGNvZGUgaXMgdGlnaHRseSBhbGlnbmVkIHRvIHRoZSBQSFAgdmVyc2lvbi5cbiAgICAgICAgLy8gV2hlbiBjaGFuZ2VzIGFyZSBtYWRlIGluIE1vYmlsZV9EZXRlY3QucGhwLCBjb3B5IHRoaXMgbWV0aG9kIGFuZCByZXBsYWNlOlxuICAgICAgICAvLyAgICAgJHRoaXMtPiAvIHQuXG4gICAgICAgIC8vICAgICBzZWxmOjpNT0JJTEVfR1JBREVfKC4pIC8gJyQxJ1xuICAgICAgICAvLyAgICAgLCBzZWxmOjpWRVJTSU9OX1RZUEVfRkxPQVQgLyAobm90aGluZylcbiAgICAgICAgLy8gICAgIGlzSU9TKCkgLyBvcygnaU9TJylcbiAgICAgICAgLy8gICAgIFtyZWddIC8gKG5vdGhpbmcpICAgPC0tIGpzZGVsaXZyIGNvbXBsYWluaW5nIGFib3V0IHVuZXNjYXBlZCB1bmljb2RlIGNoYXJhY3RlciBVKzAwQUVcbiAgICAgICAgdmFyICRpc01vYmlsZSA9IHQubW9iaWxlKCkgIT09IG51bGw7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgLy8gQXBwbGUgaU9TIDMuMi01LjEgLSBUZXN0ZWQgb24gdGhlIG9yaWdpbmFsIGlQYWQgKDQuMyAvIDUuMCksIGlQYWQgMiAoNC4zKSwgaVBhZCAzICg1LjEpLCBvcmlnaW5hbCBpUGhvbmUgKDMuMSksIGlQaG9uZSAzICgzLjIpLCAzR1MgKDQuMyksIDQgKDQuMyAvIDUuMCksIGFuZCA0UyAoNS4xKVxuICAgICAgICAgICAgdC5vcygnaU9TJykgJiYgdC52ZXJzaW9uKCdpUGFkJyk+PTQuMyB8fFxuICAgICAgICAgICAgdC5vcygnaU9TJykgJiYgdC52ZXJzaW9uKCdpUGhvbmUnKT49My4xIHx8XG4gICAgICAgICAgICB0Lm9zKCdpT1MnKSAmJiB0LnZlcnNpb24oJ2lQb2QnKT49My4xIHx8XG5cbiAgICAgICAgICAgIC8vIEFuZHJvaWQgMi4xLTIuMyAtIFRlc3RlZCBvbiB0aGUgSFRDIEluY3JlZGlibGUgKDIuMiksIG9yaWdpbmFsIERyb2lkICgyLjIpLCBIVEMgQXJpYSAoMi4xKSwgR29vZ2xlIE5leHVzIFMgKDIuMykuIEZ1bmN0aW9uYWwgb24gMS41ICYgMS42IGJ1dCBwZXJmb3JtYW5jZSBtYXkgYmUgc2x1Z2dpc2gsIHRlc3RlZCBvbiBHb29nbGUgRzEgKDEuNSlcbiAgICAgICAgICAgIC8vIEFuZHJvaWQgMy4xIChIb25leWNvbWIpICAtIFRlc3RlZCBvbiB0aGUgU2Ftc3VuZyBHYWxheHkgVGFiIDEwLjEgYW5kIE1vdG9yb2xhIFhPT01cbiAgICAgICAgICAgIC8vIEFuZHJvaWQgNC4wIChJQ1MpICAtIFRlc3RlZCBvbiBhIEdhbGF4eSBOZXh1cy4gTm90ZTogdHJhbnNpdGlvbiBwZXJmb3JtYW5jZSBjYW4gYmUgcG9vciBvbiB1cGdyYWRlZCBkZXZpY2VzXG4gICAgICAgICAgICAvLyBBbmRyb2lkIDQuMSAoSmVsbHkgQmVhbikgIC0gVGVzdGVkIG9uIGEgR2FsYXh5IE5leHVzIGFuZCBHYWxheHkgN1xuICAgICAgICAgICAgKCB0LnZlcnNpb24oJ0FuZHJvaWQnKT4yLjEgJiYgdC5pcygnV2Via2l0JykgKSB8fFxuXG4gICAgICAgICAgICAvLyBXaW5kb3dzIFBob25lIDctNy41IC0gVGVzdGVkIG9uIHRoZSBIVEMgU3Vycm91bmQgKDcuMCkgSFRDIFRyb3BoeSAoNy41KSwgTEctRTkwMCAoNy41KSwgTm9raWEgTHVtaWEgODAwXG4gICAgICAgICAgICB0LnZlcnNpb24oJ1dpbmRvd3MgUGhvbmUgT1MnKT49Ny4wIHx8XG5cbiAgICAgICAgICAgIC8vIEJsYWNrYmVycnkgNyAtIFRlc3RlZCBvbiBCbGFja0JlcnJ5IFRvcmNoIDk4MTBcbiAgICAgICAgICAgIC8vIEJsYWNrYmVycnkgNi4wIC0gVGVzdGVkIG9uIHRoZSBUb3JjaCA5ODAwIGFuZCBTdHlsZSA5NjcwXG4gICAgICAgICAgICB0LmlzKCdCbGFja0JlcnJ5JykgJiYgdC52ZXJzaW9uKCdCbGFja0JlcnJ5Jyk+PTYuMCB8fFxuICAgICAgICAgICAgLy8gQmxhY2tiZXJyeSBQbGF5Ym9vayAoMS4wLTIuMCkgLSBUZXN0ZWQgb24gUGxheUJvb2tcbiAgICAgICAgICAgIHQubWF0Y2goJ1BsYXlib29rLipUYWJsZXQnKSB8fFxuXG4gICAgICAgICAgICAvLyBQYWxtIFdlYk9TICgxLjQtMi4wKSAtIFRlc3RlZCBvbiB0aGUgUGFsbSBQaXhpICgxLjQpLCBQcmUgKDEuNCksIFByZSAyICgyLjApXG4gICAgICAgICAgICAoIHQudmVyc2lvbignd2ViT1MnKT49MS40ICYmIHQubWF0Y2goJ1BhbG18UHJlfFBpeGknKSApIHx8XG4gICAgICAgICAgICAvLyBQYWxtIFdlYk9TIDMuMCAgLSBUZXN0ZWQgb24gSFAgVG91Y2hQYWRcbiAgICAgICAgICAgIHQubWF0Y2goJ2hwLipUb3VjaFBhZCcpIHx8XG5cbiAgICAgICAgICAgIC8vIEZpcmVmb3ggTW9iaWxlICgxMiBCZXRhKSAtIFRlc3RlZCBvbiBBbmRyb2lkIDIuMyBkZXZpY2VcbiAgICAgICAgICAgICggdC5pcygnRmlyZWZveCcpICYmIHQudmVyc2lvbignRmlyZWZveCcpPj0xMiApIHx8XG5cbiAgICAgICAgICAgIC8vIENocm9tZSBmb3IgQW5kcm9pZCAtIFRlc3RlZCBvbiBBbmRyb2lkIDQuMCwgNC4xIGRldmljZVxuICAgICAgICAgICAgKCB0LmlzKCdDaHJvbWUnKSAmJiB0LmlzKCdBbmRyb2lkT1MnKSAmJiB0LnZlcnNpb24oJ0FuZHJvaWQnKT49NC4wICkgfHxcblxuICAgICAgICAgICAgLy8gU2t5ZmlyZSA0LjEgLSBUZXN0ZWQgb24gQW5kcm9pZCAyLjMgZGV2aWNlXG4gICAgICAgICAgICAoIHQuaXMoJ1NreWZpcmUnKSAmJiB0LnZlcnNpb24oJ1NreWZpcmUnKT49NC4xICYmIHQuaXMoJ0FuZHJvaWRPUycpICYmIHQudmVyc2lvbignQW5kcm9pZCcpPj0yLjMgKSB8fFxuXG4gICAgICAgICAgICAvLyBPcGVyYSBNb2JpbGUgMTEuNS0xMjogVGVzdGVkIG9uIEFuZHJvaWQgMi4zXG4gICAgICAgICAgICAoIHQuaXMoJ09wZXJhJykgJiYgdC52ZXJzaW9uKCdPcGVyYSBNb2JpJyk+MTEgJiYgdC5pcygnQW5kcm9pZE9TJykgKSB8fFxuXG4gICAgICAgICAgICAvLyBNZWVnbyAxLjIgLSBUZXN0ZWQgb24gTm9raWEgOTUwIGFuZCBOOVxuICAgICAgICAgICAgdC5pcygnTWVlR29PUycpIHx8XG5cbiAgICAgICAgICAgIC8vIFRpemVuIChwcmUtcmVsZWFzZSkgLSBUZXN0ZWQgb24gZWFybHkgaGFyZHdhcmVcbiAgICAgICAgICAgIHQuaXMoJ1RpemVuJykgfHxcblxuICAgICAgICAgICAgLy8gU2Ftc3VuZyBCYWRhIDIuMCAtIFRlc3RlZCBvbiBhIFNhbXN1bmcgV2F2ZSAzLCBEb2xwaGluIGJyb3dzZXJcbiAgICAgICAgICAgIC8vIEB0b2RvOiBtb3JlIHRlc3RzIGhlcmUhXG4gICAgICAgICAgICB0LmlzKCdEb2xmaW4nKSAmJiB0LnZlcnNpb24oJ0JhZGEnKT49Mi4wIHx8XG5cbiAgICAgICAgICAgIC8vIFVDIEJyb3dzZXIgLSBUZXN0ZWQgb24gQW5kcm9pZCAyLjMgZGV2aWNlXG4gICAgICAgICAgICAoICh0LmlzKCdVQyBCcm93c2VyJykgfHwgdC5pcygnRG9sZmluJykpICYmIHQudmVyc2lvbignQW5kcm9pZCcpPj0yLjMgKSB8fFxuXG4gICAgICAgICAgICAvLyBLaW5kbGUgMyBhbmQgRmlyZSAgLSBUZXN0ZWQgb24gdGhlIGJ1aWx0LWluIFdlYktpdCBicm93c2VyIGZvciBlYWNoXG4gICAgICAgICAgICAoIHQubWF0Y2goJ0tpbmRsZSBGaXJlJykgfHxcbiAgICAgICAgICAgICAgICB0LmlzKCdLaW5kbGUnKSAmJiB0LnZlcnNpb24oJ0tpbmRsZScpPj0zLjAgKSB8fFxuXG4gICAgICAgICAgICAvLyBOb29rIENvbG9yIDEuNC4xIC0gVGVzdGVkIG9uIG9yaWdpbmFsIE5vb2sgQ29sb3IsIG5vdCBOb29rIFRhYmxldFxuICAgICAgICAgICAgdC5pcygnQW5kcm9pZE9TJykgJiYgdC5pcygnTm9va1RhYmxldCcpIHx8XG5cbiAgICAgICAgICAgIC8vIENocm9tZSBEZXNrdG9wIDExLTIxIC0gVGVzdGVkIG9uIE9TIFggMTAuNyBhbmQgV2luZG93cyA3XG4gICAgICAgICAgICB0LnZlcnNpb24oJ0Nocm9tZScpPj0xMSAmJiAhJGlzTW9iaWxlIHx8XG5cbiAgICAgICAgICAgIC8vIFNhZmFyaSBEZXNrdG9wIDQtNSAtIFRlc3RlZCBvbiBPUyBYIDEwLjcgYW5kIFdpbmRvd3MgN1xuICAgICAgICAgICAgdC52ZXJzaW9uKCdTYWZhcmknKT49NS4wICYmICEkaXNNb2JpbGUgfHxcblxuICAgICAgICAgICAgLy8gRmlyZWZveCBEZXNrdG9wIDQtMTMgLSBUZXN0ZWQgb24gT1MgWCAxMC43IGFuZCBXaW5kb3dzIDdcbiAgICAgICAgICAgIHQudmVyc2lvbignRmlyZWZveCcpPj00LjAgJiYgISRpc01vYmlsZSB8fFxuXG4gICAgICAgICAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA3LTkgLSBUZXN0ZWQgb24gV2luZG93cyBYUCwgVmlzdGEgYW5kIDdcbiAgICAgICAgICAgIHQudmVyc2lvbignTVNJRScpPj03LjAgJiYgISRpc01vYmlsZSB8fFxuXG4gICAgICAgICAgICAvLyBPcGVyYSBEZXNrdG9wIDEwLTEyIC0gVGVzdGVkIG9uIE9TIFggMTAuNyBhbmQgV2luZG93cyA3XG4gICAgICAgICAgICAvLyBAcmVmZXJlbmNlOiBodHRwOi8vbXkub3BlcmEuY29tL2NvbW11bml0eS9vcGVud2ViL2lkb3BlcmEvXG4gICAgICAgICAgICB0LnZlcnNpb24oJ09wZXJhJyk+PTEwICYmICEkaXNNb2JpbGVcblxuICAgICAgICAgICAgKXtcbiAgICAgICAgICAgIHJldHVybiAnQSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0Lm9zKCdpT1MnKSAmJiB0LnZlcnNpb24oJ2lQYWQnKTw0LjMgfHxcbiAgICAgICAgICAgIHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBob25lJyk8My4xIHx8XG4gICAgICAgICAgICB0Lm9zKCdpT1MnKSAmJiB0LnZlcnNpb24oJ2lQb2QnKTwzLjEgfHxcblxuICAgICAgICAgICAgLy8gQmxhY2tiZXJyeSA1LjA6IFRlc3RlZCBvbiB0aGUgU3Rvcm0gMiA5NTUwLCBCb2xkIDk3NzBcbiAgICAgICAgICAgIHQuaXMoJ0JsYWNrYmVycnknKSAmJiB0LnZlcnNpb24oJ0JsYWNrQmVycnknKT49NSAmJiB0LnZlcnNpb24oJ0JsYWNrQmVycnknKTw2IHx8XG5cbiAgICAgICAgICAgIC8vT3BlcmEgTWluaSAoNS4wLTYuNSkgLSBUZXN0ZWQgb24gaU9TIDMuMi80LjMgYW5kIEFuZHJvaWQgMi4zXG4gICAgICAgICAgICAoIHQudmVyc2lvbignT3BlcmEgTWluaScpPj01LjAgJiYgdC52ZXJzaW9uKCdPcGVyYSBNaW5pJyk8PTYuNSAmJlxuICAgICAgICAgICAgICAgICh0LnZlcnNpb24oJ0FuZHJvaWQnKT49Mi4zIHx8IHQuaXMoJ2lPUycpKSApIHx8XG5cbiAgICAgICAgICAgIC8vIE5va2lhIFN5bWJpYW5eMyAtIFRlc3RlZCBvbiBOb2tpYSBOOCAoU3ltYmlhbl4zKSwgQzcgKFN5bWJpYW5eMyksIGFsc28gd29ya3Mgb24gTjk3IChTeW1iaWFuXjEpXG4gICAgICAgICAgICB0Lm1hdGNoKCdOb2tpYU44fE5va2lhQzd8Tjk3LipTZXJpZXM2MHxTeW1iaWFuLzMnKSB8fFxuXG4gICAgICAgICAgICAvLyBAdG9kbzogcmVwb3J0IHRoaXMgKHRlc3RlZCBvbiBOb2tpYSBONzEpXG4gICAgICAgICAgICB0LnZlcnNpb24oJ09wZXJhIE1vYmknKT49MTEgJiYgdC5pcygnU3ltYmlhbk9TJylcbiAgICAgICAgICAgICl7XG4gICAgICAgICAgICByZXR1cm4gJ0InO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAvLyBCbGFja2JlcnJ5IDQueCAtIFRlc3RlZCBvbiB0aGUgQ3VydmUgODMzMFxuICAgICAgICAgICAgdC52ZXJzaW9uKCdCbGFja0JlcnJ5Jyk8NS4wIHx8XG4gICAgICAgICAgICAvLyBXaW5kb3dzIE1vYmlsZSAtIFRlc3RlZCBvbiB0aGUgSFRDIExlbyAoV2luTW8gNS4yKVxuICAgICAgICAgICAgdC5tYXRjaCgnTVNJRU1vYmlsZXxXaW5kb3dzIENFLipNb2JpbGUnKSB8fCB0LnZlcnNpb24oJ1dpbmRvd3MgTW9iaWxlJyk8PTUuMlxuXG4gICAgICAgICAgICApe1xuICAgICAgICAgICAgcmV0dXJuICdDJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQWxsIG9sZGVyIHNtYXJ0cGhvbmUgcGxhdGZvcm1zIGFuZCBmZWF0dXJlcGhvbmVzIC0gQW55IGRldmljZSB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzXG4gICAgICAgIC8vd2lsbCByZWNlaXZlIHRoZSBiYXNpYywgQyBncmFkZSBleHBlcmllbmNlLlxuICAgICAgICByZXR1cm4gJ0MnO1xuICAgIH07XG5cbiAgICBpbXBsLmRldGVjdE9TID0gZnVuY3Rpb24gKHVhKSB7XG4gICAgICAgIHJldHVybiBpbXBsLmZpbmRNYXRjaChpbXBsLm1vYmlsZURldGVjdFJ1bGVzLm9zczAsIHVhKSB8fFxuICAgICAgICAgICAgaW1wbC5maW5kTWF0Y2goaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy5vc3MsIHVhKTtcbiAgICB9O1xuXG4gICAgaW1wbC5nZXREZXZpY2VTbWFsbGVyU2lkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JlZW4ud2lkdGggPCB3aW5kb3cuc2NyZWVuLmhlaWdodCA/XG4gICAgICAgICAgICB3aW5kb3cuc2NyZWVuLndpZHRoIDpcbiAgICAgICAgICAgIHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgTW9iaWxlRGV0ZWN0IG9iamVjdC5cbiAgICAgKiA8YnI+XG4gICAgICogU3VjaCBhbiBvYmplY3Qgd2lsbCBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBnaXZlbiB1c2VyLWFnZW50IHN0cmluZyBhbmQgY2FjaGUgbW9zdCBvZiB0aGUgZGV0ZWN0IHF1ZXJpZXMuPGJyPlxuICAgICAqIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3OyBib3JkZXI6IDFweCBzb2xpZCAjYmNlOGYxOyBjb2xvcjogIzNhODdhZDsgcGFkZGluZzogMTRweDsgYm9yZGVyLXJhZGl1czogMnB4OyBtYXJnaW4tdG9wOiAyMHB4XCI+XG4gICAgICogICAgIDxzdHJvbmc+RmluZCBpbmZvcm1hdGlvbiBob3cgdG8gZG93bmxvYWQgYW5kIGluc3RhbGw6PC9zdHJvbmc+XG4gICAgICogICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaGdvZWJsL21vYmlsZS1kZXRlY3QuanMvXCI+Z2l0aHViLmNvbS9oZ29lYmwvbW9iaWxlLWRldGVjdC5qcy88L2E+XG4gICAgICogPC9kaXY+XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8cHJlPlxuICAgICAqICAgICB2YXIgbWQgPSBuZXcgTW9iaWxlRGV0ZWN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgKiAgICAgaWYgKG1kLm1vYmlsZSgpKSB7XG4gICAgICogICAgICAgICBsb2NhdGlvbi5ocmVmID0gKG1kLm1vYmlsZUdyYWRlKCkgPT09ICdBJykgPyAnL21vYmlsZS8nIDogJy9seW54Lyc7XG4gICAgICogICAgIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWdlbnQgdHlwaWNhbGx5IHRha2VuIGZyb20gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgb3IgaHR0cF9oZWFkZXJbJ1VzZXItQWdlbnQnXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4UGhvbmVXaWR0aD02MDBdIDxzdHJvbmc+b25seSBmb3IgYnJvd3NlcnM8L3N0cm9uZz4gc3BlY2lmeSBhIHZhbHVlIGZvciB0aGUgbWF4aW11bVxuICAgICAqICAgICAgICB3aWR0aCBvZiBzbWFsbGVzdCBkZXZpY2Ugc2lkZSAoaW4gbG9naWNhbCBcIkNTU1wiIHBpeGVscykgdW50aWwgYSBkZXZpY2UgZGV0ZWN0ZWQgYXMgbW9iaWxlIHdpbGwgYmUgaGFuZGxlZFxuICAgICAqICAgICAgICBhcyBwaG9uZS5cbiAgICAgKiAgICAgICAgVGhpcyBpcyBvbmx5IHVzZWQgaW4gY2FzZXMgd2hlcmUgdGhlIGRldmljZSBjYW5ub3QgYmUgY2xhc3NpZmllZCBhcyBwaG9uZSBvciB0YWJsZXQuPGJyPlxuICAgICAqICAgICAgICBTZWUgPGEgaHJlZj1cImh0dHA6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vZ3VpZGUvcHJhY3RpY2VzL3NjcmVlbnNfc3VwcG9ydC5odG1sXCI+RGVjbGFyaW5nIFRhYmxldCBMYXlvdXRzXG4gICAgICogICAgICAgIGZvciBBbmRyb2lkPC9hPi48YnI+XG4gICAgICogICAgICAgIElmIHlvdSBwcm92aWRlIGEgdmFsdWUgPCAwLCB0aGVuIHRoaXMgXCJmdXp6eVwiIGNoZWNrIGlzIGRpc2FibGVkLlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBnbG9iYWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBNb2JpbGVEZXRlY3QodXNlckFnZW50LCBtYXhQaG9uZVdpZHRoKSB7XG4gICAgICAgIHRoaXMudWEgPSBwcmVwYXJlVXNlckFnZW50KHVzZXJBZ2VudCk7XG4gICAgICAgIHRoaXMuX2NhY2hlID0ge307XG4gICAgICAgIC8vNjAwZHAgaXMgdHlwaWNhbCA3XCIgdGFibGV0IG1pbmltdW0gd2lkdGhcbiAgICAgICAgdGhpcy5tYXhQaG9uZVdpZHRoID0gbWF4UGhvbmVXaWR0aCB8fCA2MDA7XG4gICAgfVxuXG4gICAgTW9iaWxlRGV0ZWN0LnByb3RvdHlwZSA9IHtcbiAgICAgICAgY29uc3RydWN0b3I6IE1vYmlsZURldGVjdCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGV0ZWN0ZWQgcGhvbmUgb3IgdGFibGV0IHR5cGUgb3IgPHR0Pm51bGw8L3R0PiBpZiBpdCBpcyBub3QgYSBtb2JpbGUgZGV2aWNlLlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIEZvciBhIGxpc3Qgb2YgcG9zc2libGUgcmV0dXJuIHZhbHVlcyBzZWUge0BsaW5rIE1vYmlsZURldGVjdCNwaG9uZX0gYW5kIHtAbGluayBNb2JpbGVEZXRlY3QjdGFibGV0fS48YnI+XG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogSWYgdGhlIGRldmljZSBpcyBub3QgZGV0ZWN0ZWQgYnkgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZnJvbSBNb2JpbGUtRGV0ZWN0LCBhIHRlc3QgaXMgbWFkZSBhZ2FpbnN0XG4gICAgICAgICAqIHRoZSBwYXR0ZXJucyBvZiA8YSBocmVmPVwiaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXJzLmNvbS9cIj5kZXRlY3Rtb2JpbGVicm93c2Vycy5jb208L2E+LiBJZiB0aGlzIHRlc3RcbiAgICAgICAgICogaXMgcG9zaXRpdmUsIGEgdmFsdWUgb2YgPGNvZGU+VW5rbm93blBob25lPC9jb2RlPiwgPGNvZGU+VW5rbm93blRhYmxldDwvY29kZT4gb3JcbiAgICAgICAgICogPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gaXMgcmV0dXJuZWQuPGJyPlxuICAgICAgICAgKiBXaGVuIHVzZWQgaW4gYnJvd3NlciwgdGhlIGRlY2lzaW9uIHdoZXRoZXIgcGhvbmUgb3IgdGFibGV0IGlzIG1hZGUgYmFzZWQgb24gPGNvZGU+c2NyZWVuLndpZHRoL2hlaWdodDwvY29kZT4uPGJyPlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIFdoZW4gdXNlZCBzZXJ2ZXItc2lkZSAobm9kZS5qcyksIHRoZXJlIGlzIG5vIHdheSB0byB0ZWxsIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gPGNvZGU+VW5rbm93blRhYmxldDwvY29kZT5cbiAgICAgICAgICogYW5kIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+LCBzbyB5b3Ugd2lsbCBnZXQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gaGVyZS48YnI+XG4gICAgICAgICAqIEJlIGF3YXJlIHRoYXQgc2luY2UgdjEuMC4wIGluIHRoaXMgc3BlY2lhbCBjYXNlIHlvdSB3aWxsIGdldCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiBvbmx5IGZvcjpcbiAgICAgICAgICoge0BsaW5rIE1vYmlsZURldGVjdCNtb2JpbGV9LCBub3QgZm9yIHtAbGluayBNb2JpbGVEZXRlY3QjcGhvbmV9IGFuZCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3RhYmxldH0uXG4gICAgICAgICAqIEluIHZlcnNpb25zIGJlZm9yZSB2MS4wLjAgYWxsIDMgbWV0aG9kcyByZXR1cm5lZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiB3aGljaCB3YXMgdGVkaW91cyB0byB1c2UuXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogSW4gbW9zdCBjYXNlcyB5b3Ugd2lsbCB1c2UgdGhlIHJldHVybiB2YWx1ZSBqdXN0IGFzIGEgYm9vbGVhbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIGtleSBmb3IgdGhlIHBob25lIGZhbWlseSBvciB0YWJsZXQgZmFtaWx5LCBlLmcuIFwiTmV4dXNcIi5cbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCNtb2JpbGVcbiAgICAgICAgICovXG4gICAgICAgIG1vYmlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW1wbC5wcmVwYXJlRGV0ZWN0aW9uQ2FjaGUodGhpcy5fY2FjaGUsIHRoaXMudWEsIHRoaXMubWF4UGhvbmVXaWR0aCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUubW9iaWxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkZXRlY3RlZCBwaG9uZSB0eXBlL2ZhbWlseSBzdHJpbmcgb3IgPHR0Pm51bGw8L3R0Pi5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBUaGUgcmV0dXJuZWQgdGFibGV0IChmYW1pbHkgb3IgcHJvZHVjZXIpIGlzIG9uZSBvZiBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAqIDxicj48dHQ+aVBob25lLCBCbGFja0JlcnJ5LCBIVEMsIE5leHVzLCBEZWxsLCBNb3Rvcm9sYSwgU2Ftc3VuZywgTEcsIFNvbnksIEFzdXMsXG4gICAgICAgICAqIE5va2lhTHVtaWEsIE1pY3JvbWF4LCBQYWxtLCBWZXJ0dSwgUGFudGVjaCwgRmx5LCBXaWtvLCBpTW9iaWxlLCBTaW1WYWxsZXksXG4gICAgICAgICAqIFdvbGZnYW5nLCBBbGNhdGVsLCBOaW50ZW5kbywgQW1vaSwgSU5RLCBPbmVQbHVzLCBHZW5lcmljUGhvbmU8L3R0Pjxicj5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBJZiB0aGUgZGV2aWNlIGlzIG5vdCBkZXRlY3RlZCBieSB0aGUgcmVndWxhciBleHByZXNzaW9ucyBmcm9tIE1vYmlsZS1EZXRlY3QsIGEgdGVzdCBpcyBtYWRlIGFnYWluc3RcbiAgICAgICAgICogdGhlIHBhdHRlcm5zIG9mIDxhIGhyZWY9XCJodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tL1wiPmRldGVjdG1vYmlsZWJyb3dzZXJzLmNvbTwvYT4uIElmIHRoaXMgdGVzdFxuICAgICAgICAgKiBpcyBwb3NpdGl2ZSwgYSB2YWx1ZSBvZiA8Y29kZT5Vbmtub3duUGhvbmU8L2NvZGU+IG9yIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IGlzIHJldHVybmVkLjxicj5cbiAgICAgICAgICogV2hlbiB1c2VkIGluIGJyb3dzZXIsIHRoZSBkZWNpc2lvbiB3aGV0aGVyIHBob25lIG9yIHRhYmxldCBpcyBtYWRlIGJhc2VkIG9uIDxjb2RlPnNjcmVlbi53aWR0aC9oZWlnaHQ8L2NvZGU+Ljxicj5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBXaGVuIHVzZWQgc2VydmVyLXNpZGUgKG5vZGUuanMpLCB0aGVyZSBpcyBubyB3YXkgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDxjb2RlPlVua25vd25UYWJsZXQ8L2NvZGU+XG4gICAgICAgICAqIGFuZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiwgc28geW91IHdpbGwgZ2V0IDxjb2RlPm51bGw8L2NvZGU+IGhlcmUsIHdoaWxlIHtAbGluayBNb2JpbGVEZXRlY3QjbW9iaWxlfVxuICAgICAgICAgKiB3aWxsIHJldHVybiA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPi48YnI+XG4gICAgICAgICAqIEJlIGF3YXJlIHRoYXQgc2luY2UgdjEuMC4wIGluIHRoaXMgc3BlY2lhbCBjYXNlIHlvdSB3aWxsIGdldCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiBvbmx5IGZvcjpcbiAgICAgICAgICoge0BsaW5rIE1vYmlsZURldGVjdCNtb2JpbGV9LCBub3QgZm9yIHtAbGluayBNb2JpbGVEZXRlY3QjcGhvbmV9IGFuZCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3RhYmxldH0uXG4gICAgICAgICAqIEluIHZlcnNpb25zIGJlZm9yZSB2MS4wLjAgYWxsIDMgbWV0aG9kcyByZXR1cm5lZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiB3aGljaCB3YXMgdGVkaW91cyB0byB1c2UuXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogSW4gbW9zdCBjYXNlcyB5b3Ugd2lsbCB1c2UgdGhlIHJldHVybiB2YWx1ZSBqdXN0IGFzIGEgYm9vbGVhbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIGtleSBvZiB0aGUgcGhvbmUgZmFtaWx5IG9yIHByb2R1Y2VyLCBlLmcuIFwiaVBob25lXCJcbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCNwaG9uZVxuICAgICAgICAgKi9cbiAgICAgICAgcGhvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGltcGwucHJlcGFyZURldGVjdGlvbkNhY2hlKHRoaXMuX2NhY2hlLCB0aGlzLnVhLCB0aGlzLm1heFBob25lV2lkdGgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLnBob25lO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkZXRlY3RlZCB0YWJsZXQgdHlwZS9mYW1pbHkgc3RyaW5nIG9yIDx0dD5udWxsPC90dD4uXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogVGhlIHJldHVybmVkIHRhYmxldCAoZmFtaWx5IG9yIHByb2R1Y2VyKSBpcyBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0PmlQYWQsIE5leHVzVGFibGV0LCBHb29nbGVUYWJsZXQsIFNhbXN1bmdUYWJsZXQsIEtpbmRsZSwgU3VyZmFjZVRhYmxldCxcbiAgICAgICAgICogSFBUYWJsZXQsIEFzdXNUYWJsZXQsIEJsYWNrQmVycnlUYWJsZXQsIEhUQ3RhYmxldCwgTW90b3JvbGFUYWJsZXQsIE5vb2tUYWJsZXQsXG4gICAgICAgICAqIEFjZXJUYWJsZXQsIFRvc2hpYmFUYWJsZXQsIExHVGFibGV0LCBGdWppdHN1VGFibGV0LCBQcmVzdGlnaW9UYWJsZXQsXG4gICAgICAgICAqIExlbm92b1RhYmxldCwgRGVsbFRhYmxldCwgWWFydmlrVGFibGV0LCBNZWRpb25UYWJsZXQsIEFybm92YVRhYmxldCxcbiAgICAgICAgICogSW50ZW5zb1RhYmxldCwgSVJVVGFibGV0LCBNZWdhZm9uVGFibGV0LCBFYm9kYVRhYmxldCwgQWxsVmlld1RhYmxldCxcbiAgICAgICAgICogQXJjaG9zVGFibGV0LCBBaW5vbFRhYmxldCwgTm9raWFMdW1pYVRhYmxldCwgU29ueVRhYmxldCwgUGhpbGlwc1RhYmxldCxcbiAgICAgICAgICogQ3ViZVRhYmxldCwgQ29ieVRhYmxldCwgTUlEVGFibGV0LCBNU0lUYWJsZXQsIFNNaVRUYWJsZXQsIFJvY2tDaGlwVGFibGV0LFxuICAgICAgICAgKiBGbHlUYWJsZXQsIGJxVGFibGV0LCBIdWF3ZWlUYWJsZXQsIE5lY1RhYmxldCwgUGFudGVjaFRhYmxldCwgQnJvbmNob1RhYmxldCxcbiAgICAgICAgICogVmVyc3VzVGFibGV0LCBaeW5jVGFibGV0LCBQb3NpdGl2b1RhYmxldCwgTmFiaVRhYmxldCwgS29ib1RhYmxldCwgRGFuZXdUYWJsZXQsXG4gICAgICAgICAqIFRleGV0VGFibGV0LCBQbGF5c3RhdGlvblRhYmxldCwgVHJla3N0b3JUYWJsZXQsIFB5bGVBdWRpb1RhYmxldCwgQWR2YW5UYWJsZXQsXG4gICAgICAgICAqIERhbnlUZWNoVGFibGV0LCBHYWxhcGFkVGFibGV0LCBNaWNyb21heFRhYmxldCwgS2FyYm9ublRhYmxldCwgQWxsRmluZVRhYmxldCxcbiAgICAgICAgICogUFJPU0NBTlRhYmxldCwgWU9ORVNUYWJsZXQsIENoYW5nSmlhVGFibGV0LCBHVVRhYmxldCwgUG9pbnRPZlZpZXdUYWJsZXQsXG4gICAgICAgICAqIE92ZXJtYXhUYWJsZXQsIEhDTFRhYmxldCwgRFBTVGFibGV0LCBWaXN0dXJlVGFibGV0LCBDcmVzdGFUYWJsZXQsXG4gICAgICAgICAqIE1lZGlhdGVrVGFibGV0LCBDb25jb3JkZVRhYmxldCwgR29DbGV2ZXJUYWJsZXQsIE1vZGVjb21UYWJsZXQsIFZvbmlub1RhYmxldCxcbiAgICAgICAgICogRUNTVGFibGV0LCBTdG9yZXhUYWJsZXQsIFZvZGFmb25lVGFibGV0LCBFc3NlbnRpZWxCVGFibGV0LCBSb3NzTW9vclRhYmxldCxcbiAgICAgICAgICogaU1vYmlsZVRhYmxldCwgVG9saW5vVGFibGV0LCBBdWRpb1NvbmljVGFibGV0LCBBTVBFVGFibGV0LCBTa2tUYWJsZXQsXG4gICAgICAgICAqIFRlY25vVGFibGV0LCBKWERUYWJsZXQsIGlKb3lUYWJsZXQsIEZYMlRhYmxldCwgWG9yb1RhYmxldCwgVmlld3NvbmljVGFibGV0LFxuICAgICAgICAgKiBWZXJpem9uVGFibGV0LCBPZHlzVGFibGV0LCBDYXB0aXZhVGFibGV0LCBJY29uYml0VGFibGV0LCBUZWNsYXN0VGFibGV0LFxuICAgICAgICAgKiBPbmRhVGFibGV0LCBKYXl0ZWNoVGFibGV0LCBCbGF1cHVua3RUYWJsZXQsIERpZ21hVGFibGV0LCBFdm9saW9UYWJsZXQsXG4gICAgICAgICAqIExhdmFUYWJsZXQsIEFvY1RhYmxldCwgTXBtYW5UYWJsZXQsIENlbGtvblRhYmxldCwgV29sZGVyVGFibGV0LCBNZWRpYWNvbVRhYmxldCxcbiAgICAgICAgICogTWlUYWJsZXQsIE5pYmlydVRhYmxldCwgTmV4b1RhYmxldCwgTGVhZGVyVGFibGV0LCBVYmlzbGF0ZVRhYmxldCxcbiAgICAgICAgICogUG9ja2V0Qm9va1RhYmxldCwgS29jYXNvVGFibGV0LCBIaXNlbnNlVGFibGV0LCBIdWRsLCBUZWxzdHJhVGFibGV0LFxuICAgICAgICAgKiBHZW5lcmljVGFibGV0PC90dD48YnI+XG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogSWYgdGhlIGRldmljZSBpcyBub3QgZGV0ZWN0ZWQgYnkgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZnJvbSBNb2JpbGUtRGV0ZWN0LCBhIHRlc3QgaXMgbWFkZSBhZ2FpbnN0XG4gICAgICAgICAqIHRoZSBwYXR0ZXJucyBvZiA8YSBocmVmPVwiaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXJzLmNvbS9cIj5kZXRlY3Rtb2JpbGVicm93c2Vycy5jb208L2E+LiBJZiB0aGlzIHRlc3RcbiAgICAgICAgICogaXMgcG9zaXRpdmUsIGEgdmFsdWUgb2YgPGNvZGU+VW5rbm93blRhYmxldDwvY29kZT4gb3IgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gaXMgcmV0dXJuZWQuPGJyPlxuICAgICAgICAgKiBXaGVuIHVzZWQgaW4gYnJvd3NlciwgdGhlIGRlY2lzaW9uIHdoZXRoZXIgcGhvbmUgb3IgdGFibGV0IGlzIG1hZGUgYmFzZWQgb24gPGNvZGU+c2NyZWVuLndpZHRoL2hlaWdodDwvY29kZT4uPGJyPlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIFdoZW4gdXNlZCBzZXJ2ZXItc2lkZSAobm9kZS5qcyksIHRoZXJlIGlzIG5vIHdheSB0byB0ZWxsIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gPGNvZGU+VW5rbm93blRhYmxldDwvY29kZT5cbiAgICAgICAgICogYW5kIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+LCBzbyB5b3Ugd2lsbCBnZXQgPGNvZGU+bnVsbDwvY29kZT4gaGVyZSwgd2hpbGUge0BsaW5rIE1vYmlsZURldGVjdCNtb2JpbGV9XG4gICAgICAgICAqIHdpbGwgcmV0dXJuIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+Ljxicj5cbiAgICAgICAgICogQmUgYXdhcmUgdGhhdCBzaW5jZSB2MS4wLjAgaW4gdGhpcyBzcGVjaWFsIGNhc2UgeW91IHdpbGwgZ2V0IDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IG9ubHkgZm9yOlxuICAgICAgICAgKiB7QGxpbmsgTW9iaWxlRGV0ZWN0I21vYmlsZX0sIG5vdCBmb3Ige0BsaW5rIE1vYmlsZURldGVjdCNwaG9uZX0gYW5kIHtAbGluayBNb2JpbGVEZXRlY3QjdGFibGV0fS5cbiAgICAgICAgICogSW4gdmVyc2lvbnMgYmVmb3JlIHYxLjAuMCBhbGwgMyBtZXRob2RzIHJldHVybmVkIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IHdoaWNoIHdhcyB0ZWRpb3VzIHRvIHVzZS5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBJbiBtb3N0IGNhc2VzIHlvdSB3aWxsIHVzZSB0aGUgcmV0dXJuIHZhbHVlIGp1c3QgYXMgYSBib29sZWFuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUga2V5IG9mIHRoZSB0YWJsZXQgZmFtaWx5IG9yIHByb2R1Y2VyLCBlLmcuIFwiU2Ftc3VuZ1RhYmxldFwiXG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjdGFibGV0XG4gICAgICAgICAqL1xuICAgICAgICB0YWJsZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGltcGwucHJlcGFyZURldGVjdGlvbkNhY2hlKHRoaXMuX2NhY2hlLCB0aGlzLnVhLCB0aGlzLm1heFBob25lV2lkdGgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLnRhYmxldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgKGZpcnN0KSBkZXRlY3RlZCB1c2VyLWFnZW50IHN0cmluZyBvciA8dHQ+bnVsbDwvdHQ+LlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIFRoZSByZXR1cm5lZCB1c2VyLWFnZW50IGlzIG9uZSBvZiBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAqIDxicj48dHQ+Q2hyb21lLCBEb2xmaW4sIE9wZXJhLCBTa3lmaXJlLCBFZGdlLCBJRSwgRmlyZWZveCwgQm9sdCwgVGVhU2hhcmssIEJsYXplcixcbiAgICAgICAgICogU2FmYXJpLCBXZUNoYXQsIFVDQnJvd3NlciwgYmFpZHVib3hhcHAsIGJhaWR1YnJvd3NlciwgRGlpZ29Ccm93c2VyLCBNZXJjdXJ5LFxuICAgICAgICAgKiBPYmlnb0Jyb3dzZXIsIE5ldEZyb250LCBHZW5lcmljQnJvd3NlciwgUGFsZU1vb248L3R0Pjxicj5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBJbiBtb3N0IGNhc2VzIGNhbGxpbmcge0BsaW5rIE1vYmlsZURldGVjdCN1c2VyQWdlbnR9IHdpbGwgYmUgc3VmZmljaWVudC4gQnV0IHRoZXJlIGFyZSByYXJlXG4gICAgICAgICAqIGNhc2VzIHdoZXJlIGEgbW9iaWxlIGRldmljZSBwcmV0ZW5kcyB0byBiZSBtb3JlIHRoYW4gb25lIHBhcnRpY3VsYXIgYnJvd3Nlci4gWW91IGNhbiBnZXQgdGhlXG4gICAgICAgICAqIGxpc3Qgb2YgYWxsIG1hdGNoZXMgd2l0aCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudHN9IG9yIGNoZWNrIGZvciBhIHBhcnRpY3VsYXIgdmFsdWUgYnlcbiAgICAgICAgICogcHJvdmlkaW5nIG9uZSBvZiB0aGUgZGVmaW5lZCBrZXlzIGFzIGZpcnN0IGFyZ3VtZW50IHRvIHtAbGluayBNb2JpbGVEZXRlY3QjaXN9LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUga2V5IGZvciB0aGUgZGV0ZWN0ZWQgdXNlci1hZ2VudCBvciA8dHQ+bnVsbDwvdHQ+XG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjdXNlckFnZW50XG4gICAgICAgICAqL1xuICAgICAgICB1c2VyQWdlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZS51c2VyQWdlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlLnVzZXJBZ2VudCA9IGltcGwuZmluZE1hdGNoKGltcGwubW9iaWxlRGV0ZWN0UnVsZXMudWFzLCB0aGlzLnVhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS51c2VyQWdlbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYWxsIGRldGVjdGVkIHVzZXItYWdlbnQgc3RyaW5ncy5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBUaGUgYXJyYXkgaXMgZW1wdHkgb3IgY29udGFpbnMgb25lIG9yIG1vcmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0PkNocm9tZSwgRG9sZmluLCBPcGVyYSwgU2t5ZmlyZSwgRWRnZSwgSUUsIEZpcmVmb3gsIEJvbHQsIFRlYVNoYXJrLCBCbGF6ZXIsXG4gICAgICAgICAqIFNhZmFyaSwgV2VDaGF0LCBVQ0Jyb3dzZXIsIGJhaWR1Ym94YXBwLCBiYWlkdWJyb3dzZXIsIERpaWdvQnJvd3NlciwgTWVyY3VyeSxcbiAgICAgICAgICogT2JpZ29Ccm93c2VyLCBOZXRGcm9udCwgR2VuZXJpY0Jyb3dzZXIsIFBhbGVNb29uPC90dD48YnI+XG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogSW4gbW9zdCBjYXNlcyBjYWxsaW5nIHtAbGluayBNb2JpbGVEZXRlY3QjdXNlckFnZW50fSB3aWxsIGJlIHN1ZmZpY2llbnQuIEJ1dCB0aGVyZSBhcmUgcmFyZVxuICAgICAgICAgKiBjYXNlcyB3aGVyZSBhIG1vYmlsZSBkZXZpY2UgcHJldGVuZHMgdG8gYmUgbW9yZSB0aGFuIG9uZSBwYXJ0aWN1bGFyIGJyb3dzZXIuIFlvdSBjYW4gZ2V0IHRoZVxuICAgICAgICAgKiBsaXN0IG9mIGFsbCBtYXRjaGVzIHdpdGgge0BsaW5rIE1vYmlsZURldGVjdCN1c2VyQWdlbnRzfSBvciBjaGVjayBmb3IgYSBwYXJ0aWN1bGFyIHZhbHVlIGJ5XG4gICAgICAgICAqIHByb3ZpZGluZyBvbmUgb2YgdGhlIGRlZmluZWQga2V5cyBhcyBmaXJzdCBhcmd1bWVudCB0byB7QGxpbmsgTW9iaWxlRGV0ZWN0I2lzfS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge0FycmF5fSB0aGUgYXJyYXkgb2YgZGV0ZWN0ZWQgdXNlci1hZ2VudCBrZXlzIG9yIDx0dD5bXTwvdHQ+XG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjdXNlckFnZW50c1xuICAgICAgICAgKi9cbiAgICAgICAgdXNlckFnZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlLnVzZXJBZ2VudHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlLnVzZXJBZ2VudHMgPSBpbXBsLmZpbmRNYXRjaGVzKGltcGwubW9iaWxlRGV0ZWN0UnVsZXMudWFzLCB0aGlzLnVhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS51c2VyQWdlbnRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkZXRlY3RlZCBvcGVyYXRpbmcgc3lzdGVtIHN0cmluZyBvciA8dHQ+bnVsbDwvdHQ+LlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIFRoZSBvcGVyYXRpbmcgc3lzdGVtIGlzIG9uZSBvZiBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAqIDxicj48dHQ+QW5kcm9pZE9TLCBCbGFja0JlcnJ5T1MsIFBhbG1PUywgU3ltYmlhbk9TLCBXaW5kb3dzTW9iaWxlT1MsIFdpbmRvd3NQaG9uZU9TLFxuICAgICAgICAgKiBpT1MsIGlQYWRPUywgTWVlR29PUywgTWFlbW9PUywgSmF2YU9TLCB3ZWJPUywgYmFkYU9TLCBCUkVXT1M8L3R0Pjxicj5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIGtleSBmb3IgdGhlIGRldGVjdGVkIG9wZXJhdGluZyBzeXN0ZW0uXG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3Qjb3NcbiAgICAgICAgICovXG4gICAgICAgIG9zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FjaGUub3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlLm9zID0gaW1wbC5kZXRlY3RPUyh0aGlzLnVhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS5vcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSB2ZXJzaW9uIChhcyBOdW1iZXIpIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgVXNlci1BZ2VudC5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBXaWxsIHJldHVybiBhIGZsb2F0IG51bWJlci4gKGVnLiAyXzAgd2lsbCByZXR1cm4gMi4wLCA0LjMuMSB3aWxsIHJldHVybiA0LjMxKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IGEga2V5IGRlZmluaW5nIGEgdGhpbmcgd2hpY2ggaGFzIGEgdmVyc2lvbi48YnI+XG4gICAgICAgICAqICAgICAgICBZb3UgY2FuIHVzZSBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0Pk1vYmlsZSwgQnVpbGQsIFZlcnNpb24sIFZlbmRvcklELCBpUGFkLCBpUGhvbmUsIGlQb2QsIEtpbmRsZSwgQ2hyb21lLCBDb2FzdCxcbiAgICAgICAgICogRG9sZmluLCBGaXJlZm94LCBGZW5uZWMsIEVkZ2UsIElFLCBOZXRGcm9udCwgTm9raWFCcm93c2VyLCBPcGVyYSwgT3BlcmEgTWluaSxcbiAgICAgICAgICogT3BlcmEgTW9iaSwgVUNCcm93c2VyLCBNUVFCcm93c2VyLCBNaWNyb01lc3NlbmdlciwgYmFpZHVib3hhcHAsIGJhaWR1YnJvd3NlcixcbiAgICAgICAgICogU2Ftc3VuZ0Jyb3dzZXIsIElyb24sIFNhZmFyaSwgU2t5ZmlyZSwgVGl6ZW4sIFdlYmtpdCwgUGFsZU1vb24sIEdlY2tvLCBUcmlkZW50LFxuICAgICAgICAgKiBQcmVzdG8sIEdvYW5uYSwgaU9TLCBBbmRyb2lkLCBCbGFja0JlcnJ5LCBCUkVXLCBKYXZhLCBXaW5kb3dzIFBob25lIE9TLCBXaW5kb3dzXG4gICAgICAgICAqIFBob25lLCBXaW5kb3dzIENFLCBXaW5kb3dzIE5ULCBTeW1iaWFuLCB3ZWJPUzwvdHQ+PGJyPlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgdmVyc2lvbiBhcyBmbG9hdCBvciA8dHQ+TmFOPC90dD4gaWYgVXNlci1BZ2VudCBkb2Vzbid0IGNvbnRhaW4gdGhpcyB2ZXJzaW9uLlxuICAgICAgICAgKiAgICAgICAgICBCZSBjYXJlZnVsIHdoZW4gY29tcGFyaW5nIHRoaXMgdmFsdWUgd2l0aCAnPT0nIG9wZXJhdG9yIVxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3ZlcnNpb25cbiAgICAgICAgICovXG4gICAgICAgIHZlcnNpb246IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbXBsLmdldFZlcnNpb24oa2V5LCB0aGlzLnVhKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSB2ZXJzaW9uIChhcyBTdHJpbmcpIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgVXNlci1BZ2VudC5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IGEga2V5IGRlZmluaW5nIGEgdGhpbmcgd2hpY2ggaGFzIGEgdmVyc2lvbi48YnI+XG4gICAgICAgICAqICAgICAgICBZb3UgY2FuIHVzZSBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0Pk1vYmlsZSwgQnVpbGQsIFZlcnNpb24sIFZlbmRvcklELCBpUGFkLCBpUGhvbmUsIGlQb2QsIEtpbmRsZSwgQ2hyb21lLCBDb2FzdCxcbiAgICAgICAgICogRG9sZmluLCBGaXJlZm94LCBGZW5uZWMsIEVkZ2UsIElFLCBOZXRGcm9udCwgTm9raWFCcm93c2VyLCBPcGVyYSwgT3BlcmEgTWluaSxcbiAgICAgICAgICogT3BlcmEgTW9iaSwgVUNCcm93c2VyLCBNUVFCcm93c2VyLCBNaWNyb01lc3NlbmdlciwgYmFpZHVib3hhcHAsIGJhaWR1YnJvd3NlcixcbiAgICAgICAgICogU2Ftc3VuZ0Jyb3dzZXIsIElyb24sIFNhZmFyaSwgU2t5ZmlyZSwgVGl6ZW4sIFdlYmtpdCwgUGFsZU1vb24sIEdlY2tvLCBUcmlkZW50LFxuICAgICAgICAgKiBQcmVzdG8sIEdvYW5uYSwgaU9TLCBBbmRyb2lkLCBCbGFja0JlcnJ5LCBCUkVXLCBKYXZhLCBXaW5kb3dzIFBob25lIE9TLCBXaW5kb3dzXG4gICAgICAgICAqIFBob25lLCBXaW5kb3dzIENFLCBXaW5kb3dzIE5ULCBTeW1iaWFuLCB3ZWJPUzwvdHQ+PGJyPlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgXCJyYXdcIiB2ZXJzaW9uIGFzIFN0cmluZyBvciA8dHQ+bnVsbDwvdHQ+IGlmIFVzZXItQWdlbnQgZG9lc24ndCBjb250YWluIHRoaXMgdmVyc2lvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCN2ZXJzaW9uU3RyXG4gICAgICAgICAqL1xuICAgICAgICB2ZXJzaW9uU3RyOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gaW1wbC5nZXRWZXJzaW9uU3RyKGtleSwgdGhpcy51YSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdsb2JhbCB0ZXN0IGtleSBhZ2FpbnN0IHVzZXJBZ2VudCwgb3MsIHBob25lLCB0YWJsZXQgYW5kIHNvbWUgb3RoZXIgcHJvcGVydGllcyBvZiB1c2VyQWdlbnQgc3RyaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBrZXkgKGNhc2UtaW5zZW5zaXRpdmUpIG9mIGEgdXNlckFnZW50LCBhbiBvcGVyYXRpbmcgc3lzdGVtLCBwaG9uZSBvclxuICAgICAgICAgKiAgICAgICAgdGFibGV0IGZhbWlseS48YnI+XG4gICAgICAgICAqICAgICAgICBGb3IgYSBjb21wbGV0ZSBsaXN0IG9mIHBvc3NpYmxlIHZhbHVlcywgc2VlIHtAbGluayBNb2JpbGVEZXRlY3QjdXNlckFnZW50fSxcbiAgICAgICAgICogICAgICAgIHtAbGluayBNb2JpbGVEZXRlY3Qjb3N9LCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3Bob25lfSwge0BsaW5rIE1vYmlsZURldGVjdCN0YWJsZXR9Ljxicj5cbiAgICAgICAgICogICAgICAgIEFkZGl0aW9uYWxseSB5b3UgaGF2ZSBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAqIDxicj48dHQ+Qm90LCBNb2JpbGVCb3QsIERlc2t0b3BNb2RlLCBUViwgV2ViS2l0LCBDb25zb2xlLCBXYXRjaDwvdHQ+PGJyPlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gPHR0PnRydWU8L3R0PiB3aGVuIHRoZSBnaXZlbiBrZXkgaXMgb25lIG9mIHRoZSBkZWZpbmVkIGtleXMgb2YgdXNlckFnZW50LCBvcywgcGhvbmUsXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICB0YWJsZXQgb3Igb25lIG9mIHRoZSBsaXN0ZWQgYWRkaXRpb25hbCBrZXlzLCBvdGhlcndpc2UgPHR0PmZhbHNlPC90dD5cbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCNpc1xuICAgICAgICAgKi9cbiAgICAgICAgaXM6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluc0lDKHRoaXMudXNlckFnZW50cygpLCBrZXkpIHx8XG4gICAgICAgICAgICAgICAgICAgZXF1YWxJQyhrZXksIHRoaXMub3MoKSkgfHxcbiAgICAgICAgICAgICAgICAgICBlcXVhbElDKGtleSwgdGhpcy5waG9uZSgpKSB8fFxuICAgICAgICAgICAgICAgICAgIGVxdWFsSUMoa2V5LCB0aGlzLnRhYmxldCgpKSB8fFxuICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zSUMoaW1wbC5maW5kTWF0Y2hlcyhpbXBsLm1vYmlsZURldGVjdFJ1bGVzLnV0aWxzLCB0aGlzLnVhKSwga2V5KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRG8gYSBxdWljayB0ZXN0IGFnYWluc3QgbmF2aWdhdG9yOjp1c2VyQWdlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gcGF0dGVybiB0aGUgcGF0dGVybiwgZWl0aGVyIGFzIFN0cmluZyBvciBSZWdFeHBcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAoYSBzdHJpbmcgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSBjYXNlLWluc2Vuc2l0aXZlIFJlZ0V4cCkuXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSA8dHQ+dHJ1ZTwvdHQ+IHdoZW4gdGhlIHBhdHRlcm4gbWF0Y2hlcywgb3RoZXJ3aXNlIDx0dD5mYWxzZTwvdHQ+XG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjbWF0Y2hcbiAgICAgICAgICovXG4gICAgICAgIG1hdGNoOiBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICAgICAgaWYgKCEocGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIG1vYmlsZSBkZXZpY2UgY2FuIGJlIGNvbnNpZGVyZWQgYXMgcGhvbmUgcmVnYXJkaW5nIDxjb2RlPnNjcmVlbi53aWR0aDwvY29kZT4uXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogT2J2aW91c2x5IHRoaXMgbWV0aG9kIG1ha2VzIHNlbnNlIGluIGJyb3dzZXIgZW52aXJvbm1lbnRzIG9ubHkgKG5vdCBmb3IgTm9kZS5qcykhXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4UGhvbmVXaWR0aF0gdGhlIG1heGltdW0gbG9naWNhbCBwaXhlbHMgKGFrYS4gQ1NTLXBpeGVscykgdG8gYmUgY29uc2lkZXJlZCBhcyBwaG9uZS48YnI+XG4gICAgICAgICAqICAgICAgICBUaGUgYXJndW1lbnQgaXMgb3B0aW9uYWwgYW5kIGlmIG5vdCBwcmVzZW50IG9yIGZhbHN5LCB0aGUgdmFsdWUgb2YgdGhlIGNvbnN0cnVjdG9yIGlzIHRha2VuLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnx1bmRlZmluZWR9IDxjb2RlPnVuZGVmaW5lZDwvY29kZT4gaWYgc2NyZWVuIHNpemUgd2Fzbid0IGRldGVjdGFibGUsIGVsc2UgPGNvZGU+dHJ1ZTwvY29kZT5cbiAgICAgICAgICogICAgICAgICAgd2hlbiBzY3JlZW4ud2lkdGggaXMgbGVzcyBvciBlcXVhbCB0byBtYXhQaG9uZVdpZHRoLCBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+Ljxicj5cbiAgICAgICAgICogICAgICAgICAgV2lsbCBhbHdheXMgcmV0dXJuIDxjb2RlPnVuZGVmaW5lZDwvY29kZT4gc2VydmVyLXNpZGUuXG4gICAgICAgICAqL1xuICAgICAgICBpc1Bob25lU2l6ZWQ6IGZ1bmN0aW9uIChtYXhQaG9uZVdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gTW9iaWxlRGV0ZWN0LmlzUGhvbmVTaXplZChtYXhQaG9uZVdpZHRoIHx8IHRoaXMubWF4UGhvbmVXaWR0aCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1vYmlsZSBncmFkZSAoJ0EnLCAnQicsICdDJykuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IG9uZSBvZiB0aGUgbW9iaWxlIGdyYWRlcyAoJ0EnLCAnQicsICdDJykuXG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjbW9iaWxlR3JhZGVcbiAgICAgICAgICovXG4gICAgICAgIG1vYmlsZUdyYWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FjaGUuZ3JhZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlLmdyYWRlID0gaW1wbC5tb2JpbGVHcmFkZSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS5ncmFkZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBlbnZpcm9ubWVudC1kZXBlbmRlbnRcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnNjcmVlbikge1xuICAgICAgICBNb2JpbGVEZXRlY3QuaXNQaG9uZVNpemVkID0gZnVuY3Rpb24gKG1heFBob25lV2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXhQaG9uZVdpZHRoIDwgMCA/IHVuZGVmaW5lZCA6IGltcGwuZ2V0RGV2aWNlU21hbGxlclNpZGUoKSA8PSBtYXhQaG9uZVdpZHRoO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIE1vYmlsZURldGVjdC5pc1Bob25lU2l6ZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBzaG91bGQgbm90IGJlIHJlcGxhY2VkIGJ5IGEgY29tcGxldGVseSBuZXcgb2JqZWN0IC0ganVzdCBvdmVyd3JpdGUgZXhpc3RpbmcgbWV0aG9kc1xuICAgIE1vYmlsZURldGVjdC5faW1wbCA9IGltcGw7XG4gICAgXG4gICAgTW9iaWxlRGV0ZWN0LnZlcnNpb24gPSAnMS40LjQgMjAxOS0wOS0yMSc7XG5cbiAgICByZXR1cm4gTW9iaWxlRGV0ZWN0O1xufSk7IC8vIGVuZCBvZiBjYWxsIG9mIGRlZmluZSgpXG59KSgoZnVuY3Rpb24gKHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmFjdG9yeSkgeyB3aW5kb3cuTW9iaWxlRGV0ZWN0ID0gZmFjdG9yeSgpOyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHBsZWFzZSBmaWxlIGEgYnVnIGlmIHlvdSBnZXQgdGhpcyBlcnJvciFcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGVudmlyb25tZW50Jyk7XG4gICAgfVxufSkoKSk7IiwiY29uc3QgcmVzcG9uc2l2ZUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL21vZHVsZXMvcmVzcG9uc2l2ZV9jb250cm9sbGVyJyk7XHJcbmNvbnN0IGdhbWVzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbW9kdWxlcy9nYW1lc19jb250cm9sbGVyJyk7XHJcbmNvbnN0IHNlYXJjaENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL21vZHVsZXMvc2VhcmNoX2NvbnRyb2xsZXInKTtcclxuY29uc3QgZ2FtZXNSZXF1ZXN0ID0gcmVxdWlyZSgnLi9tb2R1bGVzL2dhbWVzX3JlcXVlc3QnKTtcclxuXHJcbmNvbnN0IHJlc3VsdHNNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHNNZXNzYWdlJyk7XHJcbmlmKHJlc3VsdHNNZXNzYWdlICE9PSBudWxsKXtcclxuXHRyZXN1bHRzTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG5yZXNwb25zaXZlQ29udHJvbGxlcih7XHJcblx0bmF2aWdhdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb24nKSxcclxuXHR0b2dnbGVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGVOYXZCdXR0b24nKVxyXG59KVxyXG5cclxuLy8gU29saWNpdHVkIGRlIGp1ZWdvcyBhbCBzZXJ2aWRvclxyXG5nYW1lc1JlcXVlc3QoKS50aGVuKHJlcyA9PiB7XHJcblx0aWYodHlwZW9mIHJlcyAhPT0gJ3N0cmluZycpe1xyXG5cdFx0Z2FtZXNDb250cm9sbGVyKHJlcywge1xyXG5cdFx0XHRyb290OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpLFxyXG5cdFx0XHRidXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93TW9yZUJ1dHRvbicpLFxyXG5cdFx0XHRzaG93TW9yZURhdGE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93TW9yZUJ1dHRvbicpLmRhdGFzZXQsXHJcblx0XHRcdHJlc3VsdHNNZXNzYWdlXHJcblx0XHR9KTtcclxuXHJcblx0XHRzZWFyY2hDb250cm9sbGVyKHJlcywge1xyXG5cdFx0XHRpbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaElucHV0JyksXHJcblx0XHRcdHN1Z2dlc3Rpb25Cb3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWdnZXN0aW9uQm94JyksXHJcblx0XHRcdHJvb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hSZXN1bHRzUm9vdCcpLFxyXG5cdFx0XHRtb3JlUmVzdWx0c0J1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3dNb3JlUmVzdWx0c0J1dHRvbicpXHJcblx0XHR9KTtcclxuXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlbG9hZEdhbWVzJykucmVtb3ZlKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0fVxyXG59KVxyXG5cclxuLy9Db250cm9sYWRvciBxdWUgbXVlc3RyYSBlbCBzcGlubmVyIGRlIHByb2dyZXNvIGN1YW5kbyBjYW1iaWFtb3MgZGUgcMOhZ2luYVxyXG5yZXF1aXJlKCcuL21vZHVsZXMvY2hhbmdlcGFnZV9jb250cm9sbGVyJykoKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2FwcGluZm8nKTtcclxuIiwiY29uc3QgYW5pbWF0aW9ucyA9IHt9O1xyXG5cclxuY29uc3QgY3JlYXRlQW5pbSA9IChlbGVtZW50LCBwYXJhbXMpID0+IHtcclxuXHRyZXR1cm4gZWxlbWVudC5hbmltYXRlKHBhcmFtcy5rZXlmcmFtZXMsIHBhcmFtcy5wcm9wcyk7XHJcbn1cclxuXHJcbmNvbnN0IGtleWZyYW1lcyA9IHtcclxuXHRmYWRlSW46IFtcclxuXHRcdHt0cmFuc2Zvcm06ICdzY2FsZSgwLjYpJywgb3BhY2l0eTogMH0sXHJcblx0XHR7dHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvcGFjaXR5OiAxfVxyXG5cdF0sXHJcblx0ZmFkZU91dERvd246IFtcclxuXHRcdHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJywgb3BhY2l0eTogMX0sXHJcblx0XHR7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgyMDBweCknLCBvcGFjaXR5OiAwfVxyXG5cdF0sXHJcblx0c3BpbjogW1xyXG5cdFx0e3RyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKSd9LFxyXG5cdFx0e3RyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJ31cclxuXHRdXHJcbn07XHJcblxyXG5hbmltYXRpb25zLmZhZGVPdXREb3duID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gY3JlYXRlQW5pbShlbGVtZW50LCB7XHJcblx0XHRrZXlmcmFtZXM6IGtleWZyYW1lcy5mYWRlT3V0RG93bixcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGZpbGw6ICdib3RoJyxcclxuXHRcdFx0ZWFzaW5nOiAnZWFzZScsXHJcblx0XHRcdGR1cmF0aW9uOiAxMDAwLFxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5hbmltYXRpb25zLmZhZGVJbiA9IChlbGVtZW50KSA9PiB7XHJcblx0cmV0dXJuIGNyZWF0ZUFuaW0oZWxlbWVudCwge1xyXG5cdFx0a2V5ZnJhbWVzOiBrZXlmcmFtZXMuZmFkZUluLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0ZmlsbDogJ2JvdGgnLFxyXG5cdFx0XHRlYXNpbmc6ICdlYXNlJyxcclxuXHRcdFx0ZHVyYXRpb246IDEwMDAsXHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmFuaW1hdGlvbnMuc3BpbiA9IChlbGVtZW50KSA9PiB7XHJcblx0cmV0dXJuIGNyZWF0ZUFuaW0oZWxlbWVudCwge1xyXG5cdFx0a2V5ZnJhbWVzOiBrZXlmcmFtZXMuc3BpbixcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGl0ZXJhdGlvbnM6ICdJbmZpbml0eScsXHJcblx0XHRcdGVhc2luZzogJ2xpbmVhcicsXHJcblx0XHRcdGR1cmF0aW9uOiAxMDAwXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhbmltYXRpb25zOyIsImNvbnNvbGUubG9nKFwiQnVlbm9zIEp1ZWdvcyBbUE9SVEFMXSB2MS4wLjBcIik7IiwiY29uc3QgaHRtbFBhcnRpYWxzID0gcmVxdWlyZSgnLi9odG1sX3BhcnRpYWxzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKGUpID0+IHtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaHRtbFBhcnRpYWxzLmNoYW5nZVBhZ2VTcGlubmVyKCkpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0VWRU5UIFtiZWZvcmV1bmxvYWRdJyk7XHJcblx0fSlcclxufSIsImNvbnN0IGFuaW1hdGlvbnMgPSByZXF1aXJlKCcuL2FuaW1hdGlvbnMnKTtcclxuY29uc3QgZ2FtZXNGaWx0ZXIgPSByZXF1aXJlKCcuL2dhbWVzX2ZpbHRlcicpO1xyXG5jb25zdCBnYW1lc0luc2VydCA9IHJlcXVpcmUoJy4vZ2FtZXNfaW5zZXJ0Jyk7XHJcbmNvbnN0IGh0bWxQYXJ0aWFscyA9IHJlcXVpcmUoJy4vaHRtbF9wYXJ0aWFscycpO1xyXG5sZXQgZ2FtZXM7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZ21zLCBkb20pID0+IHtcclxuXHQvKiBcclxuXHRPYmpldG8gJ2RvbScgZXNwZXJhZG86XHJcblx0ZG9tID0ge1xyXG5cdFx0cm9vdCxcclxuXHRcdGJ1dHRvbixcclxuXHRcdHNob3dNb3JlRGF0YToge1xyXG5cdFx0XHRjYXRlZ29yeSxcclxuXHRcdFx0ZmlsdGVyXHJcblx0XHR9LFxyXG5cdFx0cmVzdWx0c01lc3NhZ2UgKG9wY2lvbmFsKVxyXG5cdH1cclxuXHQqL1xyXG5cclxuXHRjb25zdCBnYW1lcyA9IGdtcztcclxuXHRjb25zdCByb290ID0gZG9tLnJvb3Q7XHJcblx0Y29uc3QgYnV0dG9uID0gZG9tLmJ1dHRvbjtcclxuXHRjb25zdCBkYXRhID0gZG9tLnNob3dNb3JlRGF0YTtcclxuXHRjb25zdCByZXN1bHRzTWVzc2FnZSA9IGRvbS5yZXN1bHRzTWVzc2FnZTtcclxuXHJcblx0Y29uc3Qgc2hvd0dhbWVzTnVtID0gMjQ7IFxyXG5cdGxldCBwYWdpbmF0aW9uID0gMDtcclxuXHRsZXQgbWF4UGFnaW5hdGlvbjtcclxuXHRsZXQgZ2FtZXNGaWx0ZXJlZDtcclxuXHQvKiBcclxuXHRcdExlIGRhIHVuYSBhbmltYWNpb24gYWwgYm90b24gZSBpbnNlcnRhIGp1ZWdvcyBlbiBlbCBET00uIEN1YW5kbyB0ZXJtaW5lIGRlIGluc2VydGFyIFxyXG5cdFx0anVlZ29zIGxlIHNhY2Ftb3MgbGEgYW5pbWFjaW9uIGFsIGJvdG9uLiBTaSBoYXkgbWFzIGp1ZWdvcyBxdWUgbW9zdHJhciwgbXVlc3RyYSBlbCBib3Rvbi5cclxuXHRcdFNpIGxhIHBhZ2luYWNpb24gbGxlZ2EgYSBzdSBsaW1pdGUsIGVsaW1pbmEgZWwgYm90b24uXHJcblx0Ki9cclxuXHRjb25zdCBzaG93TW9yZSA9ICgpID0+IHtcclxuXHRcdGxldCBmYWRlT3V0ID0gYW5pbWF0aW9ucy5mYWRlT3V0RG93bihidXR0b24pO1xyXG5cclxuXHRcdGdhbWVzRmlsdGVyZWQgPSBnYW1lc0ZpbHRlcih7XHJcblx0XHRcdGdhbWVzLFxyXG5cdFx0XHRjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuXHRcdFx0dG9GaWx0ZXI6IGRhdGEuZmlsdGVyXHJcblx0XHR9KVxyXG5cclxuXHRcdG1heFBhZ2luYXRpb24gPSBNYXRoLmNlaWwoZ2FtZXNGaWx0ZXJlZC5sZW5ndGgvc2hvd0dhbWVzTnVtKTtcclxuXHJcblx0XHRnYW1lc0luc2VydCh7XHJcblx0XHRcdHJvb3QsXHJcblx0XHRcdGdhbWVzVG9JbnNlcnQ6IGdhbWVzRmlsdGVyZWQuc2xpY2Uoc2hvd0dhbWVzTnVtKnBhZ2luYXRpb24sIChzaG93R2FtZXNOdW0qcGFnaW5hdGlvbikgKyBzaG93R2FtZXNOdW0pLFxyXG5cdFx0XHRodG1sOiBodG1sUGFydGlhbHMuZ2FtZVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0aWYocGFnaW5hdGlvbiA8IG1heFBhZ2luYXRpb24pe1xyXG5cdFx0XHRcdGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdFx0XHRhbmltYXRpb25zLmZhZGVJbihidXR0b24pO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdHBhZ2luYXRpb24rKztcclxuXHJcblx0XHRmYWRlT3V0Lm9uZmluaXNoID0gKCkgPT4ge1xyXG5cdFx0XHRpZihwYWdpbmF0aW9uID09PSBtYXhQYWdpbmF0aW9uKXtcclxuXHRcdFx0XHRidXR0b24ucmVtb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihnYW1lc0ZpbHRlcmVkLmxlbmd0aCA9PT0gMCAmJiByZXN1bHRzTWVzc2FnZSAhPT0gbnVsbCl7XHJcblx0XHRcdHJlc3VsdHNNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gTGxhbWFtb3MgYSBzaG93TW9yZSgpIHBvciBwcmltZXJhIHZlelxyXG5cdC8vIExlIGRhbW9zIHVuIGV2ZW50TGlzdGVuZXIgY2xpY2sgYWwgYm90b25cclxuXHRzaG93TW9yZSgpO1xyXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb3JlLCBmYWxzZSk7XHJcbn1cclxuIiwiY29uc3Qgbm9ybWFsaXplU3RyID0gKHN0cikgPT4ge1xyXG5cdGxldCBzdHJpbmcgPSBzdHIudG9Mb3dlckNhc2UoKTtcclxuICBcdHJldHVybiBzdHJpbmcubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpO1xyXG59IFxyXG5cclxuY29uc3QgZmlsdGVyR2FtZXMgPSAoZ2FtZXMsIHRvRmlsdGVyKSA9PiB7XHJcblx0cmV0dXJuIGdhbWVzLmZpbHRlcigoZWwpID0+IHtcclxuXHRcdGxldCBhbGxXb3JkcyA9IGVsLnRpdGxlICsgJyAnICsgZWwuZGVzY3JpcHRpb247XHJcblx0XHRhbGxXb3JkcyA9IG5vcm1hbGl6ZVN0cihhbGxXb3Jkcyk7XHJcblx0XHRsZXQgcmVnZXggPSBuZXcgUmVnRXhwKG5vcm1hbGl6ZVN0cih0b0ZpbHRlcikpO1xyXG5cdFx0LyppZihyZWdleC50ZXN0KGFsbFdvcmRzKSl7XHJcblx0XHRcdGNvbnNvbGUubG9nKGFsbFdvcmRzLCByZWdleCk7XHJcblx0XHR9Ki9cclxuXHRcdHJldHVybiByZWdleC50ZXN0KGFsbFdvcmRzKTtcclxuXHR9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwYXJhbXMgPT4ge1xyXG5cdC8qXHJcblx0XHRvYmpldG8gJ3BhcmFtcycgZXNwZXJhZG86IFxyXG5cdFx0cGFyYW1zID0ge1xyXG5cdFx0XHRnYW1lcyxcclxuXHRcdFx0Y2F0ZWdvcnksXHJcblx0XHRcdHRvRmlsdGVyXHJcblx0XHR9XHJcblx0Ki9cclxuXHJcblx0bGV0IGdhbWVzID0gcGFyYW1zLmdhbWVzO1xyXG5cdGNvbnN0IGNhdGVnb3J5ID0gcGFyYW1zLmNhdGVnb3J5LCBcclxuXHRcdHRvRmlsdGVyID0gcGFyYW1zLnRvRmlsdGVyLFxyXG5cdFx0ZnJvbSA9IHBhcmFtcy5mcm9tLFxyXG5cdFx0dG8gPSBwYXJhbXMudG87XHJcblxyXG5cdGlmKGNhdGVnb3J5ICE9PSAnJykge1xyXG5cdFx0Z2FtZXMgPSBnYW1lcy5maWx0ZXIoKGVsKSA9PiBlbC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpO1xyXG5cdFx0Z2FtZXMgPSBnYW1lcy5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRcdHJldHVybiBiLnZvdGUuYXZlcmFnZSAtIGEudm90ZS5hdmVyYWdlO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGlmKHRvRmlsdGVyICE9PSAnJykge1xyXG5cdFx0Z2FtZXMgPSBmaWx0ZXJHYW1lcyhnYW1lcywgdG9GaWx0ZXIpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdhbWVzO1xyXG59IiwiY29uc3QgaHRtbFBhcnRpYWxzID0gcmVxdWlyZSgnLi9odG1sX3BhcnRpYWxzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmFtcyA9PiB7XHJcblx0LypcclxuXHRcdG9iamV0byAncGFyYW1zJyBlc3BlcmFkbzpcclxuXHRcdHBhcmFtcyA9IHtcclxuXHRcdFx0cm9vdCxcclxuXHRcdFx0Z2FtZXNUb0luc2VydCxcclxuXHRcdFx0aHRtbFxyXG5cdFx0fVxyXG5cdCovXHJcblx0Y29uc3Qgcm9vdCA9IHBhcmFtcy5yb290O1xyXG5cdGNvbnN0IGdhbWVzVG9JbnNlcnQgPSBwYXJhbXMuZ2FtZXNUb0luc2VydDtcclxuXHRjb25zdCBodG1sID0gcGFyYW1zLmh0bWw7XHJcblx0bGV0IGkgPSAwO1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRpZihpIDwgZ2FtZXNUb0luc2VydC5sZW5ndGgpe1xyXG5cdFx0XHRcdHJvb3QuYXBwZW5kQ2hpbGQoaHRtbChnYW1lc1RvSW5zZXJ0W2ldKSk7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMTAwKTtcclxuXHR9KVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2pzb24vanVlZ29zJywge1xyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcblx0XHR9XHJcblx0fSlcclxuXHRpZihyZXNwb25zZS5vayA9PT0gdHJ1ZSl7XHJcblx0XHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gJ2dhbWVzIHJlcXVlc3QgaHR0cCBlcnJvcic7XHJcblx0fVxyXG59IiwiY29uc3QgTW9iaWxlRGV0ZWN0ID0gcmVxdWlyZSgnbW9iaWxlLWRldGVjdCcpO1xyXG5jb25zdCBtb2JpbGVEZXZpY2UgPSBuZXcgTW9iaWxlRGV0ZWN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuY29uc3QgaHRtbFBhcnRpYWxzID0ge307XHJcblxyXG5jb25zdCBvbmx5RGVza3RvcEF2YWlsYWJsZSA9IChtb2JpbGVSZWFkeSkgPT4ge1xyXG5cdHJldHVybiAobW9iaWxlRGV2aWNlLm1vYmlsZSgpICE9PSBudWxsICYmIG1vYmlsZVJlYWR5ID09PSBmYWxzZSk7XHJcbn1cclxuXHJcbmNvbnN0IGdldFByZXR0eUNhdGVnb3J5TmFtZSA9IChjYXRlZ29yeSkgPT4ge1xyXG5cdHN3aXRjaChjYXRlZ29yeSl7XHJcblx0XHRjYXNlICdhY2Npb24nOiByZXR1cm4gJ0FjY2nDs24nOyBicmVhaztcclxuXHRcdGNhc2UgJ2F2ZW50dXJhJzogcmV0dXJuICdBdmVudHVyYSc7IGJyZWFrO1xyXG5cdFx0Y2FzZSAnY2hpY2FzJzogcmV0dXJuICdDaGljYXMnOyBicmVhaztcclxuXHRcdGNhc2UgJ2FyY2FkZSc6IHJldHVybiAnQXJjYWRlJzsgYnJlYWs7XHJcblx0XHRjYXNlICdkZXBvcnRlcyc6IHJldHVybiAnRGVwb3J0ZXMnOyBicmVhaztcclxuXHRcdGNhc2UgJ3B1enpsZSc6IHJldHVybiAnUHV6emxlJzsgYnJlYWs7XHJcblx0XHRjYXNlICdjYXJyZXJhcyc6IHJldHVybiAnQ2FycmVyYXMnOyBicmVhaztcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXJzID0gKHZhbG9yYXRpb24pID0+IHtcclxuXHRsZXQgaHRtbFN0YXJzID0gJyc7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XHJcblx0XHRodG1sU3RhcnMgKz0gKGkgPCB2YWxvcmF0aW9uKSA/ICc8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPicgOiAnPGkgY2xhc3M9XCJmYXIgZmEtc3RhclwiPjwvaT4nO1xyXG5cdH1cclxuXHRyZXR1cm4gaHRtbFN0YXJzO1xyXG59IFxyXG5cclxuaHRtbFBhcnRpYWxzLnNlYXJjaEdhbWUgPSAoZ2FtZVBhcmFtcykgPT4ge1xyXG5cdGNvbnN0IHRpdGxlID0gZ2FtZVBhcmFtcy50aXRsZTtcclxuXHRjb25zdCB1cmwgPSBnYW1lUGFyYW1zLnVybDtcclxuXHRjb25zdCBtb2JpbGVSZWFkeSA9IGdhbWVQYXJhbXMubW9iaWxlcmVhZHk7XHJcblxyXG5cdGNvbnN0IGh0bWwgPSAoKSA9PiB7XHJcblx0XHRsZXQgc3RyID0gJyc7XHJcblx0XHRpZihvbmx5RGVza3RvcEF2YWlsYWJsZShtb2JpbGVSZWFkeSkpe1xyXG5cdFx0XHRzdHIgKz0gYDxhIGNsYXNzPVwic3VnZ2VzdGlvbi1saW5rIG5vc2VsZWN0YWJsZVwiIGhyZWY9XCIvanVnYXIvJHt1cmx9XCI+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cInN1Z2dlc3Rpb24tbGlua19fb25seS1kZXNrdG9wXCIgc3JjPVwiL3N0YXRpYy9pbWcvb25seWRlc2t0b3Auc3ZnXCIgYWx0PVwiRGlzcG9uaWJsZSBzb2xvIGVuIGVzY3JpdG9yaW9cIj5gO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RyICs9IGA8YSBjbGFzcz1cInN1Z2dlc3Rpb24tbGlua1wiIGhyZWY9XCIvanVnYXIvJHt1cmx9XCI+YDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3RyICs9IGA8aW1nIGNsYXNzPVwic3VnZ2VzdGlvbi1saW5rX19pbWdcIiBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9idWVub3NqdWVnb3MvaW1hZ2UvdXBsb2FkL2NfZmlsbCxnX2NlbnRlcixoXzE1MCx3XzE1MC8ke3VybH0uanBnXCIgYWx0PVwiJHt0aXRsZX1cIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdWdnZXN0aW9uLWxpbmtfX3RpdGxlXCI+JHt0aXRsZX08L3NwYW4+XHJcblx0XHRcdFx0PC9hPmA7XHJcblxyXG5cdFx0cmV0dXJuIHN0cjtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gaHRtbCgpO1xyXG59XHJcblxyXG5odG1sUGFydGlhbHMuZ2FtZSA9IChnYW1lUGFyYW1zKSA9PiB7XHJcblx0Y29uc3QgdGl0bGUgPSBnYW1lUGFyYW1zLnRpdGxlO1xyXG5cdGNvbnN0IHVybCA9IGdhbWVQYXJhbXMudXJsO1xyXG5cdGNvbnN0IGNhdGVnb3J5ID0gZ2V0UHJldHR5Q2F0ZWdvcnlOYW1lKGdhbWVQYXJhbXMuY2F0ZWdvcnkpO1xyXG5cdGNvbnN0IHZhbG9yYXRpb24gPSBNYXRoLnJvdW5kKGdhbWVQYXJhbXMudm90ZS5hdmVyYWdlKTtcclxuXHRjb25zdCBtb2JpbGVSZWFkeSA9IGdhbWVQYXJhbXMubW9iaWxlcmVhZHk7XHJcblxyXG5cdGNvbnN0IGh0bWwgPSAoKSA9PiB7XHJcblx0XHRsZXQgc3RyID0gJyc7XHJcblxyXG5cdFx0aWYob25seURlc2t0b3BBdmFpbGFibGUobW9iaWxlUmVhZHkpKXtcclxuXHRcdFx0c3RyICs9IGA8aW1nIGNsYXNzPVwiZ2FtZS1pdGVtX19vbmx5LWRlc2t0b3BcIiBzcmM9XCIvc3RhdGljL2ltZy9vbmx5ZGVza3RvcC5zdmdcIiBhbHQ9XCJEaXNwb25pYmxlIHNvbG8gZW4gZXNjcml0b3Jpb1wiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3M9XCJnYW1lLWl0ZW1fX2xpbmsgbm9zZWxlY3RhYmxlXCIgaHJlZj1cIi9qdWdhci8ke3VybH1cIj5gO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RyICs9IGA8YSBjbGFzcz1cImdhbWUtaXRlbV9fbGlua1wiIGhyZWY9XCIvanVnYXIvJHt1cmx9XCI+YFxyXG5cdFx0fVxyXG5cclxuXHRcdHN0ciArPSAgYDxpbWcgY2xhc3M9XCJnYW1lLWl0ZW1fX2ltZ1wiIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2J1ZW5vc2p1ZWdvcy9pbWFnZS91cGxvYWQvY19maWxsLGdfY2VudGVyLGhfMjUwLHdfMjUwLyR7dXJsfS5qcGdcIiBhbHQ9XCIke3RpdGxlfVwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnYW1lLWl0ZW1fX3RpdGxlXCI+JHt0aXRsZX08L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbWUtaXRlbV9fcm93XCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImdhbWUtaXRlbV9fY2F0ZWdvcnlcIj4ke2NhdGVnb3J5fTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ2FtZS1pdGVtX192YWxvcmF0aW9uXCI+XHJcblx0XHRcdFx0XHRcdCR7c3RhcnModmFsb3JhdGlvbil9XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvYT5gO1xyXG5cclxuXHRcdHJldHVybiBzdHI7XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZWxlbWVudC5jbGFzc05hbWUgPSAnZ2FtZS1pdGVtJztcclxuXHRlbGVtZW50LmlubmVySFRNTCA9IGh0bWwoKTtcclxuXHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcblxyXG5odG1sUGFydGlhbHMuZGVsZXRhYmxlR2FtZSA9IChnYW1lUGFyYW1zKSA9PiB7XHJcblx0Y29uc3QgaWQgPSBnYW1lUGFyYW1zLmlkO1xyXG5cdGNvbnN0IHRpdGxlID0gZ2FtZVBhcmFtcy50aXRsZTtcclxuXHRjb25zdCB1cmwgPSBnYW1lUGFyYW1zLnVybDtcclxuXHRjb25zdCBjYXRlZ29yeSA9IGdldFByZXR0eUNhdGVnb3J5TmFtZShnYW1lUGFyYW1zLmNhdGVnb3J5KTtcclxuXHRjb25zdCB2YWxvcmF0aW9uID0gTWF0aC5yb3VuZChnYW1lUGFyYW1zLnZvdGUuYXZlcmFnZSk7XHJcblxyXG5cdGNvbnN0IGh0bWwgPSBgXHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJnYW1lLWl0ZW1fX2RlbGV0ZSBkZWxldGUtYnV0dG9uXCIgZGF0YS1pZD1cIiR7aWR9XCI+IFxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGEgY2xhc3M9XCJnYW1lLWl0ZW1fX2xpbmtcIiBocmVmPVwiL2p1Z2FyLyR7dXJsfVwiPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJnYW1lLWl0ZW1fX2ltZ1wiIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2J1ZW5vc2p1ZWdvcy9pbWFnZS91cGxvYWQvY19maWxsLGdfY2VudGVyLGhfMjUwLHdfMjUwLyR7dXJsfS5qcGdcIiBhbHQ9XCIke3RpdGxlfVwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnYW1lLWl0ZW1fX3RpdGxlXCI+JHt0aXRsZX08L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbWUtaXRlbV9fcm93XCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImdhbWUtaXRlbV9fY2F0ZWdvcnlcIj4ke2NhdGVnb3J5fTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ2FtZS1pdGVtX192YWxvcmF0aW9uXCI+XHJcblx0XHRcdFx0XHRcdCR7c3RhcnModmFsb3JhdGlvbil9XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvYT5gO1xyXG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlbGVtZW50LmNsYXNzTmFtZSA9ICdnYW1lLWl0ZW0nO1xyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmh0bWxQYXJ0aWFscy5lbXB0eUdyaWRNc2cgPSAobXNnKSA9PiB7XHJcblx0cmV0dXJuIGA8cCBjbGFzcz1cImdyaWQtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZSBmYS1wdWxsLWxlZnRcIj48L2k+XHJcblx0XHRcdFx0JHttc2d9XHJcblx0XHRcdDwvcD5gO1xyXG59XHJcblxyXG5odG1sUGFydGlhbHMuY2hhbmdlUGFnZVNwaW5uZXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVsZW1lbnQuY2xhc3NOYW1lID0gJ2NoYW5nZXBhZ2Utc3Bpbm5lcic7XHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2Rpdj4nO1xyXG5cdHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5odG1sUGFydGlhbHMuZ2FtZURvbnRBdmFpbGFibGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVsZW1lbnQuY2xhc3NOYW1lID0gJ2RvbnQtYXZhaWxhYmxlJztcclxuXHRlbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZG9udC1hdmFpbGFibGVfX2JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiZG9udC1hdmFpbGFibGVfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIGZhLXB1bGwtbGVmdFwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdEVzdGUganVlZ28gPGI+c29sbyBlc3TDoSBkaXNwb25pYmxlIGVuIFBDPC9iPiwgcmVncmVzYSBkZXNkZSB0dSBjb21wdXRhZG9yYVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzcz1cImJsYWNrLWJvcmRlci1idXR0b25cIiBocmVmPVwiL1wiPlZlciBvdHJvcyBqdWVnb3M8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PmA7XHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaHRtbFBhcnRpYWxzOyIsIm1vZHVsZS5leHBvcnRzID0gZG9tID0+IHtcclxuXHQvKlxyXG5cdFx0b2JqZXRvICdkb20nIGVzcGVyYWRvOlxyXG5cdFx0ZG9tID0ge1xyXG5cdFx0XHRuYXZpZ2F0aW9uLFxyXG5cdFx0XHR0b2dnbGVCdXR0b25cclxuXHRcdH1cclxuXHQqL1xyXG5cclxuXHRjb25zdCBuYXZpZ2F0aW9uID0gZG9tLm5hdmlnYXRpb247XHJcblx0Y29uc3QgdG9nZ2xlQnV0dG9uID0gZG9tLnRvZ2dsZUJ1dHRvbjtcclxuXHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cclxuXHQvLyBFdmVudG8gZGUgY2xpY2sgcXVlIGFicmUgeSBjaWVycmEgbGEgbmF2ZWdhY2nDs24uIFF1aXRhIGVsIHNjcm9sbCBkZWwgYm9keS5cclxuXHR0b2dnbGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuXHRcdG5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG5cdFx0Ym9keS5jbGFzc0xpc3QudG9nZ2xlKCdub3Njcm9sbCcpO1xyXG5cdH1cclxufSIsImNvbnN0IGFuaW1hdGlvbnMgPSByZXF1aXJlKCcuL2FuaW1hdGlvbnMnKTtcclxuY29uc3QgZ2FtZXNGaWx0ZXIgPSByZXF1aXJlKCcuL2dhbWVzX2ZpbHRlcicpO1xyXG5jb25zdCBodG1sUGFydGlhbHMgPSByZXF1aXJlKCcuL2h0bWxfcGFydGlhbHMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKGdtcywgZG9tKSA9PiB7XHJcblx0LypcclxuXHRcdG9iamV0byAnZG9tJyBlc3BlcmFkbzpcclxuXHRcdGRvbSA9IHtcclxuXHRcdFx0aW5wdXQsXHJcblx0XHRcdHN1Z2dlc3Rpb25Cb3gsXHJcblx0XHRcdHJvb3QsXHJcblx0XHRcdG1vcmVSZXN1bHRzQnV0dG9uXHJcblx0XHR9XHJcblx0Ki9cclxuXHRjb25zdCBnYW1lcyA9IGdtcztcclxuXHRjb25zdCBpbnB1dCA9IGRvbS5pbnB1dDtcclxuXHRjb25zdCBzdWdnZXN0aW9uQm94ID0gZG9tLnN1Z2dlc3Rpb25Cb3g7XHJcblx0Y29uc3Qgcm9vdCA9IGRvbS5yb290O1xyXG5cdGNvbnN0IG1vcmVSZXN1bHRzQnV0dG9uID0gZG9tLm1vcmVSZXN1bHRzQnV0dG9uO1xyXG5cclxuXHRsZXQgc3VnZ2VzdGlvbk9wZW4gPSBmYWxzZTtcclxuXHRsZXQgYW5pbSA9IGFuaW1hdGlvbnMuZmFkZUluKHN1Z2dlc3Rpb25Cb3gpO1xyXG5cdGFuaW0uZmluaXNoKCk7XHJcblxyXG5cdC8vIEV2ZW50byBjdWFuZG8gc2UgZXNjcmliZSBlbiBlbCBpbnB1dFxyXG5cdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG5cdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMyl7XHJcblxyXG5cdFx0XHRsZXQgZmlsdGVyZWRHYW1lcyA9IGdhbWVzRmlsdGVyKHtcclxuXHRcdFx0XHRnYW1lcyxcclxuXHRcdFx0XHRjYXRlZ29yeTogJycsXHJcblx0XHRcdFx0dG9GaWx0ZXI6IGlucHV0LnZhbHVlXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYoZmlsdGVyZWRHYW1lcy5sZW5ndGggPiAxMCkge1xyXG5cdFx0XHRcdG1vcmVSZXN1bHRzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdG1vcmVSZXN1bHRzQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRpbnB1dC5wYXJlbnROb2RlLnN1Ym1pdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtb3JlUmVzdWx0c0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmaWx0ZXJlZEdhbWVzID0gZmlsdGVyZWRHYW1lcy5zbGljZSgwLCAxMCk7XHJcblxyXG5cdFx0XHRpZihmaWx0ZXJlZEdhbWVzLmxlbmd0aCA+IDAgJiYgIXN1Z2dlc3Rpb25PcGVuKXtcclxuXHRcdFx0XHRyb290LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdGZvcihnYW1lIG9mIGZpbHRlcmVkR2FtZXMpIHtcclxuXHRcdFx0XHRcdHJvb3QuaW5uZXJIVE1MICs9IGh0bWxQYXJ0aWFscy5zZWFyY2hHYW1lKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGdhbWUudGl0bGUsXHJcblx0XHRcdFx0XHRcdHVybDogZ2FtZS51cmwsXHJcblx0XHRcdFx0XHRcdG1vYmlsZXJlYWR5OiBnYW1lLm1vYmlsZXJlYWR5XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdWdnZXN0aW9uQm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdGFuaW0ucGxheWJhY2tSYXRlID0gMTtcclxuXHRcdFx0XHRhbmltLnBsYXkoKTtcclxuXHRcdFx0XHRzdWdnZXN0aW9uT3BlbiA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9IGVsc2UgaWYoc3VnZ2VzdGlvbk9wZW4pe1xyXG5cdFx0XHRhbmltLnBsYXliYWNrUmF0ZSA9IC0xO1xyXG5cdFx0XHRhbmltLm9uZmluaXNoID0gZnVuY3Rpb24oZXZ0KXtcclxuXHRcdFx0XHRzdWdnZXN0aW9uQm94LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG5cdFx0XHRcdHN1Z2dlc3Rpb25PcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0YW5pbS5vbmZpbmlzaCA9ICgpID0+IHt9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufSJdfQ==
