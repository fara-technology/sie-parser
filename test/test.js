const sieParser = require('../build/main.js');
 const fs = require('fs');
 const string =`#FLAGGA 1
        #FORMAT PC8
        #SIETYP 4
        #PROGRAM "Visma Administration 2000 med Visma Integration" 2022.2
        #GEN 20230822 
        #FNAMN "�vningsbolaget AB"
        #FNR "C:\ProgramData\SPCS\SPCS Administration\F�retag\Ovnbol2000"
        #ORGNR 555555-5555
        #ADRESS "Siw Eriksson" "Box 1" "123 45 STORSTAD" "012-34 56 78"
        #RAR 0 20210101 20211231
        #RAR -1 20200101 20201231
        #TAXAR 2022 
        #VALUTA SEK
        #KPTYP EUBAS97
        #KONTO 1060 Hyresr�tt
        #KTYP 1060 T
        #SRU 1060 7201
        #KONTO 1068 "Ack nedskrivn hyresr�tt"
        #KTYP 1068 T
        #SRU 1068 7201
        #KONTO 1069 "Ack avskrivn hyresr�tt"
        #KTYP 1069 T
        #SRU 1069 7201
        #KONTO 1070 Goodwill
        #KTYP 1070 T
        #SRU 1070 7201
        #KONTO 1078 "Ack nedskrivn goodwill"
        #KTYP 1078 T
        #SRU 1078 7201
        #KONTO 1079 "Ack avskrivn goodwill"
        #KTYP 1079 T
        #SRU 1079 7201
        #KONTO 1090 "�vriga imm anl tillg"
        #KTYP 1090 T
        #SRU 1090 7201
        #KONTO 1098 "Ack nedskrivn �vriga imm anl tillg"
        #KTYP 1098 T
        #SRU 1098 7201
        #KONTO 1099 "Ack avskrivn �vriga imm anl tillg"
        #KTYP 1099 T
        #SRU 1099 7201
        #KONTO 1110 Byggnader
        #KTYP 1110 T
        #SRU 1110 7214
        #KONTO 1118 "Ack nedskrivn byggnader"
        #KTYP 1118 T
        #SRU 1118 7214
        #KONTO 1119 "Ack avskrivn byggnader"
        #KTYP 1119 T
        #SRU 1119 7214
        #KONTO 1130 Mark
        #KTYP 1130 T
        #SRU 1130 7214
        #KONTO 1140 "Tomter, markomr obebyggda"
        #KTYP 1140 T
        #SRU 1140 7214
        #KONTO 1150 Markanl�ggningar
        #KTYP 1150 T
        #SRU 1150 7214
        #KONTO 1158 "Ack nedskrivn markanl�ggn"
        #KTYP 1158 T
        #SRU 1158 7214
        #KONTO 1159 "Ack avskrivn markanl�ggn"
        #KTYP 1159 T
        #SRU 1159 7214
        #KONTO 1190 "�vriga byggnader och mark"
        #KTYP 1190 T
        #SRU 1190 7214
        #KONTO 1200 "Maskiner och inventarier"
        #KTYP 1200 T
        #SRU 1200 7215
        #KONTO 1208 "Ack nedskrivn maskiner och inv"
        #KTYP 1208 T
        #SRU 1208 7215
        #KONTO 1209 "Ack avskrivn maskiner och inv"
        #KTYP 1209 T
        #SRU 1209 7215
        #KONTO 1210 "Maskiner och andra tekniska anl�ggningar"
        #KTYP 1210 T
        #SRU 1210 7215
        #KONTO 1211 Arbetsmaskiner
        #KTYP 1211 T
        #SRU 1211 7215
        #KONTO 1218 "Ack nedskrivn maskiner/tekn anl"
        #KTYP 1218 T
        #SRU 1218 7215
        #KONTO 1219 "Ack avskrivn arb.maskiner"
        #KTYP 1219 T
        #SRU 1219 7215
        #KONTO 1220 "Inventarier och verktyg"
        #KTYP 1220 T
        #SRU 1220 7215
        #KONTO 1221 Inventarier
        #KTYP 1221 T
        #SRU 1221 7215
        #KONTO 1222 Byggnadsinventarier
        #KTYP 1222 T
        #SRU 1222 7215
        #KONTO 1223 Markinventarier
        #KTYP 1223 T
        #SRU 1223 7215
        #KONTO 1225 Verktyg
        #KTYP 1225 T
        #SRU 1225 7215
        #KONTO 1228 "Ack nedskrivn inv/verktyg"
        #KTYP 1228 T
        #SRU 1228 7215
        #KONTO 1229 "Ack avskrivn inv/verktyg"
        #KTYP 1229 T
        #SRU 1229 7215
        #KONTO 1230 Installationer
        #KTYP 1230 T
        #SRU 1230 7215
        #KONTO 1238 "Ack nedskrivn installationer"
        #KTYP 1238 T
        #SRU 1238 7215
        #KONTO 1239 "Ack avskrivn maskiner och inv"
        #KTYP 1239 T
        #SRU 1239 7215
        #KONTO 1240 "Bilar och andra transportmedel"
        #KTYP 1240 T
        #SRU 1240 7215
        #KONTO 1241 Personbilar
        #KTYP 1241 T
        #SRU 1241 7215
        #KONTO 1242 Lastbilar
        #KTYP 1242 T
        #SRU 1242 7215
        #KONTO 1243 Truckar
        #KTYP 1243 T
        #SRU 1243 7215
        #KONTO 1244 Arbetsmaskiner
        #KTYP 1244 T
        #SRU 1244 7215
        #KONTO 1245 Traktorer
        #KTYP 1245 T
        #SRU 1245 7215
        #KONTO 1246 "Motorcyklar, mopeder och skotrar"
        #KTYP 1246 T
        #SRU 1246 7215
        #KONTO 1247 "B�tar, flygplan och helikoptrar"
        #KTYP 1247 T
        #SRU 1247 7215
        #KONTO 1248 "Ack nedskr bilar/transportmedel"
        #KTYP 1248 T
        #SRU 1248 7215
        #KONTO 1249 "Ack avskr bilar/transportmedel"
        #KTYP 1249 T
        #SRU 1249 7215
        #KONTO 1250 Datorer
        #KTYP 1250 T
        #SRU 1250 7215
        #KONTO 1251 "Datorer, f�retaget"
        #KTYP 1251 T
        #SRU 1251 7215
        #KONTO 1257 "Datorer, personal"
        #KTYP 1257 T
        #SRU 1257 7215
        #KONTO 1258 "Ack nedskrivn datorer"
        #KTYP 1258 T
        #SRU 1258 7215
        #KONTO 1259 "Ack avskrivn datorer"
        #KTYP 1259 T
        #SRU 1259 7215
        #KONTO 1260 "Leasade tillg�ngar"
        #KTYP 1260 T
        #SRU 1260 7215
        #KONTO 1270 Anl�ggningsdjur
        #KTYP 1270 T
        #SRU 1270 7215
        #KONTO 1279 "Ack avskrivn anl�ggningsdjur"
        #KTYP 1279 T
        #SRU 1279 7215
        #KONTO 1290 "�vriga maskiner och inventarier"
        #KTYP 1290 T
        #SRU 1290 7215
        #KONTO 1291 "Konst o ej avskrivn invent"
        #KTYP 1291 T
        #SRU 1291 7215
        #KONTO 1298 "Ack nedskrivn �vr maskiner/inv"
        #KTYP 1298 T
        #SRU 1298 7215
        #KONTO 1299 "Ack avskrivn �vr maskiner/inv"
        #KTYP 1299 T
        #SRU 1299 7215
        #KONTO 1311 "Aktier sv dotterf�retag"
        #KTYP 1311 T
        #SRU 1311 7230
        #KONTO 1312 "Aktier utl dotterf�retag"
        #KTYP 1312 T
        #SRU 1312 7230
        #KONTO 1314 "Aktier/and �vr utl konc.ftg"
        #KTYP 1314 T
        #SRU 1314 7230
        #KONTO 1318 "Ack nedskrivn andelar koncern"
        #KTYP 1318 T
        #SRU 1318 7230
        #KONTO 1330 "Aktier, andra sv f�retag"
        #KTYP 1330 T
        #SRU 1330 7231
        #KONTO 1338 "Ack nedskrivn andelar int.ftg"
        #KTYP 1338 T
        #SRU 1338 7231
        #KONTO 1350 "Andelar/v�rdepapper andra ftg"
        #KTYP 1350 T
        #SRU 1350 7233
        #KONTO 1354 "Obligationer, v�rdepapper"
        #KTYP 1354 T
        #SRU 1354 7233
        #KONTO 1358 "Ack nedskrivn andel/v�rdepapper"
        #KTYP 1358 T
        #SRU 1358 7233
        #KONTO 1360 "Derivat,l�ngfristiga v�rdepappersinnehav"
        #KTYP 1360 T
        #SRU 1360 7234
        #KONTO 1368 "Ack nedskrivn derivat"
        #KTYP 1368 T
        #SRU 1368 7234
        #KONTO 1370 "Uppskjuten skattefordran"
        #KTYP 1370 T
        #SRU 1370 7235
        #KONTO 1380 "L�ngfristiga fordringar"
        #KTYP 1380 T
        #SRU 1380 7235
        #KONTO 1382 "Fordringar hos anst�llda"
        #KTYP 1382 T
        #SRU 1382 7235
        #KONTO 1383 Depositioner
        #KTYP 1383 T
        #SRU 1383 7235
        #KONTO 1388 "Derivat l�ngfr fordr"
        #KTYP 1388 T
        #SRU 1388 7235
        #KONTO 1390 "Ack nedskr l�ngfr fordr"
        #KTYP 1390 T
        #KONTO 1400 Lager
        #KTYP 1400 T
        #SRU 1400 7241
        #KONTO 1402 "Varor p� v�g"
        #KTYP 1402 T
        #SRU 1402 7241
        #KONTO 1405 "Lager varor VMB"
        #KTYP 1405 T
        #SRU 1405 7241
        #KONTO 1406 "Nedskrivn lager varor VMB"
        #KTYP 1406 T
        #SRU 1406 7241
        #KONTO 1407 "Lager varor VMB f�renklad"
        #KTYP 1407 T
        #SRU 1407 7241
        #KONTO 1440 "Produkter i arbete"
        #KTYP 1440 T
        #SRU 1440 7242
        #KONTO 1470 "P�g�ende arbete"
        #KTYP 1470 T
        #SRU 1470 7245
        #KONTO 1480 "F�rskott till leverant�r"
        #KTYP 1480 T
        #SRU 1480 7246
        #KONTO 1510 Kundfordringar
        #KTYP 1510 T
        #SRU 1510 7251
        #KONTO 1512 "Bel�nade fordringar"
        #KTYP 1512 T
        #SRU 1512 7251
        #KONTO 1515 "Os�kra kundfordringar"
        #KTYP 1515 T
        #SRU 1515 7251
        #KONTO 1517 "Kvittning kundfaktura"
        #KTYP 1517 T
        #SRU 1517 7251
        #KONTO 1580 "Kontokort och kuponger"
        #KTYP 1580 T
        #SRU 1580 7251
        #KONTO 1610 F�rskott
        #KTYP 1610 T
        #SRU 1610 7261
        #KONTO 1611 Resef�rskott
        #KTYP 1611 T
        #SRU 1611 7261
        #KONTO 1613 "�vriga f�rskott"
        #KTYP 1613 T
        #SRU 1613 7261
        #KONTO 1619 "�vr fordringar hos anst�llda"
        #KTYP 1619 T
        #SRU 1619 7261
        #KONTO 1620 "Derivat kortfristiga fodringar"
        #KTYP 1620 T
        #SRU 1620 7262
        #KONTO 1630 "Avr�kn skatter och avgifter"
        #KTYP 1630 T
        #SRU 1630 7261
        #KONTO 1640 Skattefordringar
        #KTYP 1640 T
        #SRU 1640 7261
        #KONTO 1650 "Fordran moms"
        #KTYP 1650 T
        #SRU 1650 7261
        #KONTO 1680 "�vr kortfristiga fordr"
        #KTYP 1680 T
        #SRU 1680 7261
        #KONTO 1684 "Fordring hos leverant�r"
        #KTYP 1684 T
        #SRU 1684 7261
        #KONTO 1685 "Fordring hos n�rst�ende"
        #KTYP 1685 T
        #SRU 1685 7261
        #KONTO 1686 "Fordran p� best�llare"
        #KTYP 1686 T
        #SRU 1686 7261
        #KONTO 1710 "F�rutbetalda hyror"
        #KTYP 1710 T
        #SRU 1710 7263
        #KONTO 1740 "F�rutbet r�nteutgifter"
        #KTYP 1740 T
        #SRU 1740 7263
        #KONTO 1750 "Upplupna hyresinkomster"
        #KTYP 1750 T
        #SRU 1750 7263
        #KONTO 1760 "Upplupna inkomstr�ntor"
        #KTYP 1760 T
        #SRU 1760 7263
        #KONTO 1790 "�vr interimsfordringar"
        #KTYP 1790 T
        #SRU 1790 7263
        #KONTO 1820 "Obligationer, v�rdepapper"
        #KTYP 1820 T
        #SRU 1820 7271
        #KONTO 1860 "Derivat kortfristga placeringar"
        #KTYP 1860 T
        #SRU 1860 7270
        #KONTO 1869 "Nedskrivn finansiella instr"
        #KTYP 1869 T
        #SRU 1869 7270
        #KONTO 1910 Kassa
        #KTYP 1910 T
        #SRU 1910 7281
        #KONTO 1920 "Bank, PlusGiro"
        #KTYP 1920 T
        #SRU 1920 7281
        #KONTO 1930 "Bank, checkr�kningskonto"
        #KTYP 1930 T
        #SRU 1930 7281
        #KONTO 1940 "Bank, �vriga bankkonto"
        #KTYP 1940 T
        #SRU 1940 7281
        #KONTO 1980 Valutakonton
        #KTYP 1980 T
        #SRU 1980 7281
        #KONTO 2081 Aktiekapital
        #KTYP 2081 S
        #SRU 2081 7301
        #KONTO 2084 "�verkursfond/utg�r 20060101"
        #KTYP 2084 T
        #SRU 2084 7301
        #KONTO 2085 Uppskrivningsfond
        #KTYP 2085 T
        #SRU 2085 7301
        #KONTO 2086 Reservfond
        #KTYP 2086 S
        #SRU 2086 7301
        #KONTO 2091 "Balanserad vinst/f�rlust"
        #KTYP 2091 S
        #SRU 2091 7302
        #KONTO 2094 "Egna aktier"
        #KTYP 2094 S
        #SRU 2094 7302
        #KONTO 2097 �verkursfond
        #KTYP 2097 S
        #SRU 2097 7302
        #KONTO 2098 "Vinst/f�rlust f�reg �r"
        #KTYP 2098 S
        #SRU 2098 7302
        #KONTO 2099 "Redovisat resultat"
        #KTYP 2099 S
        #SRU 2099 7302
        #KONTO 2110 Periodiseringsfonder
        #KTYP 2110 S
        #SRU 2110 7321
        #KONTO 2120 "Periodiseringsfond 2020"
        #KTYP 2120 S
        #SRU 2120 7321
        #KONTO 2121 "Periodiseringsfond 2021"
        #KTYP 2121 S
        #SRU 2121 7321
        #KONTO 2122 "Periodiseringsfond 2022"
        #KTYP 2122 S
        #SRU 2122 7321
        #KONTO 2123 "Periodiseringsfond 2023"
        #KTYP 2123 S
        #SRU 2123 7321
        #KONTO 2124 "Periodiseringsfond 2024"
        #KTYP 2124 S
        #SRU 2124 7321
        #KONTO 2125 "Periodiseringsfond 2015"
        #KTYP 2125 S
        #SRU 2125 7321
        #KONTO 2126 "Periodiseringsfond 2016"
        #KTYP 2126 S
        #SRU 2126 7321
        #KONTO 2127 "Periodiseringsfond 2017"
        #KTYP 2127 S
        #SRU 2127 7321
        #KONTO 2128 "Periodiseringsfond 2018"
        #KTYP 2128 S
        #SRU 2128 7321
        #KONTO 2129 "Periodiseringsfond 2019"
        #KTYP 2129 S
        #SRU 2129 7321
        #KONTO 2130 "Periodiseringsfond 2020 - nr 2"
        #KTYP 2130 S
        #SRU 2130 7321
        #KONTO 2131 "Periodiseringsfond 2021 - nr 2"
        #KTYP 2131 S
        #SRU 2131 7321
        #KONTO 2132 "Periodiseringsfond 2022 - nr 2"
        #KTYP 2132 S
        #SRU 2132 7321
        #KONTO 2133 "Periodiseringsfond 2023 - nr 2"
        #KTYP 2133 S
        #SRU 2133 7321
        #KONTO 2134 "Periodiseringsfond 2024 - nr 2"
        #KTYP 2134 S
        #SRU 2134 7321
        #KONTO 2150 "Ack �veravskrivningar"
        #KTYP 2150 S
        #SRU 2150 7322
        #KONTO 2151 "Ack �veravskr imm anl.tillg"
        #KTYP 2151 S
        #SRU 2151 7322
        #KONTO 2152 "Ack �veravskr p� byggn/markanl"
        #KTYP 2152 S
        #SRU 2152 7322
        #KONTO 2153 "Ack �veravskr maskiner/inv"
        #KTYP 2153 S
        #SRU 2153 7322
        #KONTO 2157 "Ack �veravskr anl�ggningsdjur"
        #KTYP 2157 T
        #SRU 2157 7322
        #KONTO 2190 "�vr obeskattade reserver"
        #KTYP 2190 S
        #SRU 2190 7323
        #KONTO 2196 Lagerreserv
        #KTYP 2196 S
        #SRU 2196 7323
        #KONTO 2210 "Avsatt till pensioner"
        #KTYP 2210 S
        #SRU 2210 7331
        #KONTO 2211 "Avs�ttningar f�r PRI-pensioner"
        #KTYP 2211 S
        #SRU 2211 7331
        #KONTO 2219 "Avs�ttningar f�r �vr pensioner"
        #KTYP 2219 S
        #SRU 2219 7331
        #KONTO 2220 Garantiskulder
        #KTYP 2220 S
        #SRU 2220 7333
        #KONTO 2323 Vinstandelsl�n
        #KTYP 2323 S
        #SRU 2323 7350
        #KONTO 2324 Kapitalandelsl�n
        #KTYP 2324 S
        #SRU 2324 7350
        #KONTO 2330 Checkr�kningskredit
        #KTYP 2330 S
        #SRU 2330 7351
        #KONTO 2350 Reversl�n
        #KTYP 2350 S
        #SRU 2350 7352
        #KONTO 2355 "L�n i utl�ndsk valuta"
        #KTYP 2355 S
        #SRU 2355 7352
        #KONTO 2380 "Derivat l�ngfristiga skulder"
        #KTYP 2380 S
        #SRU 2380 7354
        #KONTO 2393 "L�n fr�n aktie�gare"
        #KTYP 2393 S
        #SRU 2393 7354
        #KONTO 2395 "Andra l�n i utl valuta"
        #KTYP 2395 S
        #SRU 2395 7354
        #KONTO 2399 "�vr l�ngfristiga skulder"
        #KTYP 2399 S
        #SRU 2399 7354
        #KONTO 2420 "F�rskott fr�n kunder"
        #KTYP 2420 S
        #SRU 2420 7362
        #KONTO 2440 Leverant�rsskulder
        #KTYP 2440 S
        #SRU 2440 7365
        #KONTO 2449 "Kvittning av leverant�rsfakturor"
        #KTYP 2449 S
        #SRU 2449 7365
        #KONTO 2499 "Andra �vr kortfrist skulder"
        #KTYP 2499 S
        #SRU 2499 7369
        #KONTO 2510 Skatteskulder
        #KTYP 2510 S
        #SRU 2510 7368
        #KONTO 2517 "Ber�knad utl�ndsk skatt"
        #KTYP 2517 S
        #SRU 2517 7368
        #KONTO 2611 "Utg moms f�rs�ljning/uttag 25%"
        #KTYP 2611 S
        #SRU 2611 7369
        #KONTO 2613 "Utg moms, uthyrning"
        #KTYP 2613 S
        #SRU 2613 7369
        #KONTO 2614 "Ber utg moms ink�p 25%"
        #KTYP 2614 S
        #SRU 2614 7369
        #KONTO 2615 "Ber moms varuf�rv 25% EU"
        #KTYP 2615 S
        #SRU 2615 7369
        #KONTO 2617 "Ber utg moms 25% Sv, omv skatteplikt"
        #KTYP 2617 S
        #SRU 2617 7369
        #KONTO 2621 "Utg moms f�rs�ljning/uttag 12% Sv"
        #KTYP 2621 S
        #SRU 2621 7369
        #KONTO 2624 "Ber utg moms ink�p 12%"
        #KTYP 2624 S
        #SRU 2624 7369
        #KONTO 2631 "Utg moms f�rs�ljning/uttag 6% Sv"
        #KTYP 2631 S
        #SRU 2631 7369
        #KONTO 2634 "Ber utg moms ink�p 6%"
        #KTYP 2634 S
        #SRU 2634 7369
        #KONTO 2641 "Ing�ende moms"
        #KTYP 2641 S
        #SRU 2641 7369
        #KONTO 2645 "Ber ing�ende moms ink�p"
        #KTYP 2645 S
        #SRU 2645 7369
        #KONTO 2647 "Ber ing�ende moms Sv, omv skatteplikt"
        #KTYP 2647 S
        #SRU 2647 7369
        #KONTO 2650 "Moms redovisningskonto"
        #KTYP 2650 S
        #SRU 2650 7369
        #KONTO 2660 "S�rskilda punktskatter"
        #KTYP 2660 S
        #SRU 2660 7369
        #KONTO 2710 "Personalens k�llskatt"
        #KTYP 2710 S
        #SRU 2710 7369
        #KONTO 2730 "Lagstadgade sociala avg"
        #KTYP 2730 S
        #SRU 2730 7369
        #KONTO 2731 "Avr�kn sociala avgifter"
        #KTYP 2731 S
        #SRU 2731 7369
        #KONTO 2732 "Avr�kn s�rsk l�nesk pens"
        #KTYP 2732 S
        #SRU 2732 7369
        #KONTO 2733 "Avr�kn s�rsk sjukf�rs�kringsavg"
        #KTYP 2733 S
        #SRU 2733 7369
        #KONTO 2750 "Utm�tning i l�n mm"
        #KTYP 2750 S
        #SRU 2750 7369
        #KONTO 2790 "�vriga l�neavdrag"
        #KTYP 2790 S
        #SRU 2790 7369
        #KONTO 2792 L�nsparande
        #KTYP 2792 S
        #SRU 2792 7369
        #KONTO 2793 "Kollektivf�rs�kring mm"
        #KTYP 2793 S
        #SRU 2793 7369
        #KONTO 2794 Fackf�reningsavgifter
        #KTYP 2794 S
        #SRU 2794 7369
        #KONTO 2795 Granskningsavgifter
        #KTYP 2795 S
        #SRU 2795 7369
        #KONTO 2840 L�neskulder
        #KTYP 2840 S
        #SRU 2840 7369
        #KONTO 2850 "Avr�kn skatter/avgifter"
        #KTYP 2850 S
        #SRU 2850 7369
        #KONTO 2880 "Skuld erh�llna bidrag"
        #KTYP 2880 S
        #SRU 2880 7369
        #KONTO 2890 "�vr kortfr skulder"
        #KTYP 2890 S
        #SRU 2890 7369
        #KONTO 2893 "Skulder n�rst�ende personer"
        #KTYP 2893 S
        #SRU 2893 7369
        #KONTO 2895 "Derivat kortfr skulder"
        #KTYP 2895 S
        #SRU 2895 7369
        #KONTO 2910 "Upplupna l�ner"
        #KTYP 2910 S
        #SRU 2910 7370
        #KONTO 2920 "Upplupna seml�ner"
        #KTYP 2920 S
        #SRU 2920 7370
        #KONTO 2921 "Upplupna soc.avg sem.l�n"
        #KTYP 2921 S
        #SRU 2921 7370
        #KONTO 2940 "Upplupna sociala avgifter"
        #KTYP 2940 S
        #SRU 2940 7370
        #KONTO 2941 "Ber�kn upplupna sociala avgifter"
        #KTYP 2941 S
        #SRU 2941 7370
        #KONTO 2945 "Ber�kn upplupna s�rskild sjuk f�rs�k. avg"
        #KTYP 2945 S
        #SRU 2945 7370
        #KONTO 2950 "Upplupna avtalade soc avg"
        #KTYP 2950 S
        #SRU 2950 7370
        #KONTO 2960 "Upplupna utgiftsr�ntor"
        #KTYP 2960 S
        #SRU 2960 7370
        #KONTO 2970 "F�rutbetalda hyresinkomster"
        #KTYP 2970 S
        #SRU 2970 7370
        #KONTO 2971 "F�rutbetalda hyresint�kter"
        #KTYP 2971 S
        #SRU 2971 7370
        #KONTO 2979 "�vriga f�rutbetalda int�kter"
        #KTYP 2979 S
        #SRU 2979 7370
        #KONTO 2990 "�vr interimsskulder"
        #KTYP 2990 S
        #SRU 2990 7370
        #KONTO 2995 "Skuld inkomna f�ljesedlar"
        #KTYP 2995 S
        #SRU 2995 7370
        #KONTO 2999 "�vr uppl kostn/f�rutbet int�kter"
        #KTYP 2999 S
        #SRU 2999 7370
        #KONTO 3020 "F�rs�ljning VMB varor"
        #KTYP 3020 I
        #SRU 3020 7410
        #KONTO 3028 "Positiv VM omf�ringskonto"
        #KTYP 3028 I
        #SRU 3028 7410
        #KONTO 3030 "Positiv VM 25%"
        #KTYP 3030 I
        #SRU 3030 7410
        #KONTO 3041 "F�rs�ljn tj�nst 25% sv"
        #KTYP 3041 I
        #SRU 3041 7410
        #KONTO 3042 "F�rs�ljn tj�nst 12% sv"
        #KTYP 3042 I
        #SRU 3042 7410
        #KONTO 3043 "F�rs�ljn tj�nst 6% sv"
        #KTYP 3043 I
        #SRU 3043 7410
        #KONTO 3044 "F�rs�ljn tj�nst sv momsfri"
        #KTYP 3044 I
        #SRU 3044 7410
        #KONTO 3045 "F�rs�ljn tj�nst utanf�r EU momsfri"
        #KTYP 3045 I
        #SRU 3045 7410
        #KONTO 3046 "F�rs�ljn tj�nst till EU 25%"
        #KTYP 3046 I
        #SRU 3046 7410
        #KONTO 3048 "F�rs�ljn tj�nst EU momsfri"
        #KTYP 3048 I
        #SRU 3048 7410
        #KONTO 3051 "F�rs�ljn varor 25% sv"
        #KTYP 3051 I
        #SRU 3051 7410
        #KONTO 3052 "F�rs�ljn varor 12% sv"
        #KTYP 3052 I
        #SRU 3052 7410
        #KONTO 3053 "F�rs�ljn varor 6% sv"
        #KTYP 3053 I
        #SRU 3053 7410
        #KONTO 3054 "F�rs�ljn varor sv momsfri"
        #KTYP 3054 I
        #SRU 3054 7410
        #KONTO 3055 "F�rs�ljn varor utanf�r EU momsfri"
        #KTYP 3055 I
        #SRU 3055 7410
        #KONTO 3056 "F�rs�ljn varor till EU 25% momspliktig"
        #KTYP 3056 I
        #SRU 3056 7410
        #KONTO 3057 "Treparts f�rs�ljn varor till EU 25%"
        #KTYP 3057 I
        #SRU 3057 7410
        #KONTO 3058 "F�rs�ljn varor EU momsfri"
        #KTYP 3058 I
        #SRU 3058 7410
        #KONTO 3059 "Momspl uttag av fast.tj 25%"
        #KTYP 3059 I
        #SRU 3059 7410
        #KONTO 3062 "F�rs varor n�rst f�retag"
        #KTYP 3062 I
        #SRU 3062 7410
        #KONTO 3100 "F�rs�ljning k�pta produkter"
        #KTYP 3100 I
        #SRU 3100 7410
        #KONTO 3231 "F�rs�ljn byggtj�nst 25% sv, omv skatteplikt"
        #KTYP 3231 I
        #SRU 3231 7410
        #KONTO 3510 Emballage
        #KTYP 3510 I
        #SRU 3510 7410
        #KONTO 3520 Frakter
        #KTYP 3520 I
        #SRU 3520 7410
        #KONTO 3521 "Frakter export momsfri"
        #KTYP 3521 I
        #SRU 3521 7410
        #KONTO 3522 "Frakter EU momsfri"
        #KTYP 3522 I
        #SRU 3522 7410
        #KONTO 3530 "Frakt tull och spedition"
        #KTYP 3530 I
        #SRU 3530 7410
        #KONTO 3540 Faktureringsavgifter
        #KTYP 3540 I
        #SRU 3540 7410
        #KONTO 3541 "Faktureringsavgifter export"
        #KTYP 3541 I
        #SRU 3541 7410
        #KONTO 3542 "Faktureringsavgifter EU momsfri"
        #KTYP 3542 I
        #SRU 3542 7410
        #KONTO 3550 "Fakt resekostnader"
        #KTYP 3550 I
        #SRU 3550 7410
        #KONTO 3561 "Fakt kostn moderftg"
        #KTYP 3561 I
        #SRU 3561 7410
        #KONTO 3562 "Fakt kostn dotterftg"
        #KTYP 3562 I
        #SRU 3562 7410
        #KONTO 3563 "Fakt kostn andra koncernftg"
        #KTYP 3563 I
        #SRU 3563 7410
        #KONTO 3590 "�vr fakt kostnader"
        #KTYP 3590 I
        #SRU 3590 7410
        #KONTO 3591 "�vr fakt kostnader export"
        #KTYP 3591 I
        #SRU 3591 7410
        #KONTO 3592 "�vr fakt kostnader EU momsfri"
        #KTYP 3592 I
        #SRU 3592 7410
        #KONTO 3610 "F�rs�ljning material"
        #KTYP 3610 I
        #SRU 3610 7410
        #KONTO 3670 "Int�kt v�rdepapper"
        #KTYP 3670 I
        #SRU 3670 7410
        #KONTO 3671 "F�rs�ljning v�rdepapper"
        #KTYP 3671 I
        #SRU 3671 7410
        #KONTO 3672 "Utdeln v�rdepapper"
        #KTYP 3672 I
        #SRU 3672 7410
        #KONTO 3679 "�vr int�kter v�rdepapper"
        #KTYP 3679 I
        #SRU 3679 7410
        #KONTO 3690 "�vriga sidoint�kter"
        #KTYP 3690 I
        #SRU 3690 7410
        #KONTO 3731 Kassarabatter
        #KTYP 3731 I
        #SRU 3731 7410
        #KONTO 3736 "Kassarabatter export"
        #KTYP 3736 I
        #SRU 3736 7410
        #KONTO 3737 "Kassarabatter EU momsfri"
        #KTYP 3737 I
        #SRU 3737 7410
        #KONTO 3740 "�res- och kronutj�mning"
        #KTYP 3740 I
        #SRU 3740 7410
        #KONTO 3840 "Aktiverat arbete (material)"
        #KTYP 3840 I
        #SRU 3840 7412
        #KONTO 3850 "Aktiverat arbete (omkostnader)"
        #KTYP 3850 I
        #SRU 3850 7412
        #KONTO 3870 "Aktiverat arbete (personal)"
        #KTYP 3870 I
        #SRU 3870 7412
        #KONTO 3911 Hyresint�kter
        #KTYP 3911 I
        #SRU 3911 7413
        #KONTO 3912 "Hyresint�kter frivilligskattskyldighet"
        #KTYP 3912 I
        #SRU 3912 7413
        #KONTO 3921 Provisionsint�kter
        #KTYP 3921 I
        #SRU 3921 7413
        #KONTO 3940 "Orealiserad negativ f�r�ndr s�k. instrum"
        #KTYP 3940 I
        #SRU 3940 7413
        #KONTO 3950 "�tervunna kundf�rluster"
        #KTYP 3950 I
        #SRU 3950 7413
        #KONTO 3960 "Kursvinst r�relsen"
        #KTYP 3960 I
        #SRU 3960 7413
        #KONTO 3971 "Vinst avyttr imm anl tillg"
        #KTYP 3971 I
        #SRU 3971 7413
        #KONTO 3972 "Vinst avyttr fastigheter"
        #KTYP 3972 I
        #SRU 3972 7413
        #KONTO 3973 "Vinst avyttr maskiner/inv"
        #KTYP 3973 I
        #SRU 3973 7413
        #KONTO 3974 "Vinst avyttr bilar och transportmedel"
        #KTYP 3974 I
        #SRU 3974 7413
        #KONTO 3977 "Vinst avyttr anl�ggningsdjur"
        #KTYP 3977 I
        #SRU 3977 7413
        #KONTO 3985 "Erh�llna statliga bidrag"
        #KTYP 3985 I
        #SRU 3985 7413
        #KONTO 3987 "Erh�llna kommunala bidrag"
        #KTYP 3987 I
        #SRU 3987 7413
        #KONTO 3988 "Erh�llna bidrag personal"
        #KTYP 3988 I
        #SRU 3988 7413
        #KONTO 3989 "�vriga erh�llna bidrag"
        #KTYP 3989 I
        #SRU 3989 7413
        #KONTO 3990 "�vr ers�ttn och int�kter"
        #KTYP 3990 I
        #SRU 3990 7413
        #KONTO 3994 F�rs�kringsers�ttningar
        #KTYP 3994 I
        #SRU 3994 7413
        #KONTO 3996 "Erh�llna reklambidrag"
        #KTYP 3996 I
        #SRU 3996 7413
        #KONTO 3997 Sjukl�neers�ttning
        #KTYP 3997 I
        #SRU 3997 7413
        #KONTO 3999 P�minnelseavgift
        #KTYP 3999 I
        #SRU 3999 7413
        #KONTO 4010 "Ink�p material och varor"
        #KTYP 4010 K
        #SRU 4010 7512
        #KONTO 4020 "Ink�p VMB varor"
        #KTYP 4020 K
        #SRU 4020 7512
        #KONTO 4028 "Negativ VM omf�ringskonto"
        #KTYP 4028 K
        #SRU 4028 7512
        #KONTO 4030 "Negativ VM"
        #KTYP 4030 K
        #SRU 4030 7512
        #KONTO 4031 "Ink�p vissa varor i Sverige 25%"
        #KTYP 4031 K
        #SRU 4031 7512
        #KONTO 4032 "Ink�p vissa varor i Sverige 12%"
        #KTYP 4032 K
        #SRU 4032 7512
        #KONTO 4033 "Ink�p vissa varor i Sverige 6%"
        #KTYP 4033 K
        #SRU 4033 7512
        #KONTO 4041 "Ink�p vissa tj�nster i Sverige 25%"
        #KTYP 4041 K
        #SRU 4041 7512
        #KONTO 4042 "Ink�p vissa tj�nster i Sverige 12%"
        #KTYP 4042 K
        #SRU 4042 7512
        #KONTO 4043 "Ink�p vissa tj�nster i Sverige 6%"
        #KTYP 4043 K
        #SRU 4043 7512
        #KONTO 4054 "Ink�p varor 6% EU"
        #KTYP 4054 K
        #SRU 4054 7512
        #KONTO 4055 "Trepartsf�rv varor fr EU"
        #KTYP 4055 K
        #SRU 4055 7512
        #KONTO 4056 "Ink�p varor 25% EU"
        #KTYP 4056 K
        #SRU 4056 7512
        #KONTO 4057 "Ink�p varor 12% EU"
        #KTYP 4057 K
        #SRU 4057 7512
        #KONTO 4058 "Ink�p varor EU momsfri"
        #KTYP 4058 K
        #SRU 4058 7512
        #KONTO 4100 "Kostn uthyrn lokal sk.pl"
        #KTYP 4100 K
        #SRU 4100 7512
        #KONTO 4415 "Ink�pta varor Sv, omv skattskyld 25%"
        #KTYP 4415 K
        #SRU 4415 7512
        #KONTO 4425 "Ink�p tj�nster Sv, omv skattskyld"
        #KTYP 4425 K
        #SRU 4425 7512
        #KONTO 4600 "Legoarbeten, underentrepr"
        #KTYP 4600 K
        #SRU 4600 7512
        #KONTO 4731 "Erh�llna kassarabatter"
        #KTYP 4731 K
        #SRU 4731 7512
        #KONTO 4733 "Erh�llet aktivitetsst�d"
        #KTYP 4733 K
        #SRU 4733 7512
        #KONTO 4940 "F�r�ndr produkter i arbete"
        #KTYP 4940 K
        #SRU 4940 7411
        #KONTO 4950 "F�r�ndr lager f�rdigvaror"
        #KTYP 4950 K
        #SRU 4950 7411
        #KONTO 4970 "F�r�ndr p�g arbete"
        #KTYP 4970 K
        #SRU 4970 7411
        #KONTO 4980 "F�r�ndr v�rdepapper"
        #KTYP 4980 K
        #SRU 4980 7512
        #KONTO 4981 "S�lda v�rdepappers ansk.kostn"
        #KTYP 4981 K
        #SRU 4981 7512
        #KONTO 4987 "Nedskrivn v�rdepapper"
        #KTYP 4987 K
        #SRU 4987 7512
        #KONTO 4990 Lagerf�r�ndring
        #KTYP 4990 K
        #SRU 4990 7411
        #KONTO 5010 Lokalhyra
        #KTYP 5010 K
        #SRU 5010 7513
        #KONTO 5020 "El hyrd lokal"
        #KTYP 5020 K
        #SRU 5020 7513
        #KONTO 5030 "V�rme hyrd lokal"
        #KTYP 5030 K
        #SRU 5030 7513
        #KONTO 5050 "Lokaltillbeh�r hyrd lokal"
        #KTYP 5050 K
        #SRU 5050 7513
        #KONTO 5060 "St�dning, renh�llning hyrd lokal"
        #KTYP 5060 K
        #SRU 5060 7513
        #KONTO 5070 "Reparationer hyrd lokal"
        #KTYP 5070 K
        #SRU 5070 7513
        #KONTO 5090 "�vr kostnader hyrd lokal"
        #KTYP 5090 K
        #SRU 5090 7513
        #KONTO 5120 Belysning
        #KTYP 5120 K
        #SRU 5120 7513
        #KONTO 5130 V�rme
        #KTYP 5130 K
        #SRU 5130 7513
        #KONTO 5132 Sotning
        #KTYP 5132 K
        #SRU 5132 7513
        #KONTO 5140 "Vatten och avlopp"
        #KTYP 5140 K
        #SRU 5140 7513
        #KONTO 5160 "Renh�lln och st�dning"
        #KTYP 5160 K
        #SRU 5160 7513
        #KONTO 5170 "Rep och underh�ll fastighet"
        #KTYP 5170 K
        #SRU 5170 7513
        #KONTO 5191 Fastighetsskatt
        #KTYP 5191 K
        #SRU 5191 7513
        #KONTO 5192 "F�rs�kringsprem fastighet"
        #KTYP 5192 K
        #SRU 5192 7513
        #KONTO 5193 "Fastighetssk�tsel och f�rvaltn"
        #KTYP 5193 K
        #SRU 5193 7513
        #KONTO 5198 "�vr fastighetskostn avdragsgill"
        #KTYP 5198 K
        #SRU 5198 7513
        #KONTO 5199 "�vr fastighetskostnr ej avdragsgill"
        #KTYP 5199 K
        #SRU 5199 7513
        #KONTO 5210 "Hyra arbetsmaskiner"
        #KTYP 5210 K
        #SRU 5210 7513
        #KONTO 5220 "Hyra inventarier"
        #KTYP 5220 K
        #SRU 5220 7513
        #KONTO 5290 "�vr hyreskostn anl tillg"
        #KTYP 5290 K
        #SRU 5290 7513
        #KONTO 5310 "El f�r drift"
        #KTYP 5310 K
        #SRU 5310 7513
        #KONTO 5380 Vatten
        #KTYP 5380 K
        #SRU 5380 7513
        #KONTO 5390 "�vriga br�nslen"
        #KTYP 5390 K
        #SRU 5390 7513
        #KONTO 5410 F�rbrukningsinventarier
        #KTYP 5410 K
        #SRU 5410 7513
        #KONTO 5420 Programvaror
        #KTYP 5420 K
        #SRU 5420 7513
        #KONTO 5460 F�rbrukningsmaterial
        #KTYP 5460 K
        #SRU 5460 7513
        #KONTO 5480 "Arbetskl�der o skyddsmtrl"
        #KTYP 5480 K
        #SRU 5480 7513
        #KONTO 5500 "Reparation och underh�ll"
        #KTYP 5500 K
        #SRU 5500 7513
        #KONTO 5611 "Drivmedel personbilar"
        #KTYP 5611 K
        #SRU 5611 7513
        #KONTO 5612 "Skatt f�rs�kr personbilar"
        #KTYP 5612 K
        #SRU 5612 7513
        #KONTO 5613 "Reparation personbilar"
        #KTYP 5613 K
        #SRU 5613 7513
        #KONTO 5615 "Leasingavg personbilar"
        #KTYP 5615 K
        #SRU 5615 7513
        #KONTO 5616 "Tr�ngselskatter avdragsg"
        #KTYP 5616 K
        #SRU 5616 7513
        #KONTO 5618 "Tr�ngselskatter, ej avdragsg"
        #KTYP 5618 K
        #SRU 5618 7513
        #KONTO 5690 "�vr transportmedel"
        #KTYP 5690 K
        #SRU 5690 7513
        #KONTO 5710 "Frakt och transport"
        #KTYP 5710 K
        #SRU 5710 7513
        #KONTO 5720 "Tull- och speditionskost"
        #KTYP 5720 K
        #SRU 5720 7513
        #KONTO 5800 Resekostnader
        #KTYP 5800 K
        #SRU 5800 7513
        #KONTO 5910 Annonsering
        #KTYP 5910 K
        #SRU 5910 7513
        #KONTO 5930 Reklamtrycksaker
        #KTYP 5930 K
        #SRU 5930 7513
        #KONTO 5940 "Utst�llning och m�ssor"
        #KTYP 5940 K
        #SRU 5940 7513
        #KONTO 5990 "�vrig reklam"
        #KTYP 5990 K
        #SRU 5990 7513
        #KONTO 6010 "Kataloger och prislistor"
        #KTYP 6010 K
        #SRU 6010 7513
        #KONTO 6040 Kontokortsavgifter
        #KTYP 6040 K
        #SRU 6040 7513
        #KONTO 6050 F�rs�ljningsprovision
        #KTYP 6050 K
        #SRU 6050 7513
        #KONTO 6060 Kreditf�rs�ljningskostnad
        #KTYP 6060 K
        #SRU 6060 7513
        #KONTO 6063 Kreditf�rs�kringspremier
        #KTYP 6063 K
        #SRU 6063 7513
        #KONTO 6064 Factoringavgifter
        #KTYP 6064 K
        #SRU 6064 7513
        #KONTO 6069 "�vr kreditf�rs�ljnkostnader"
        #KTYP 6069 K
        #SRU 6069 7513
        #KONTO 6071 "Repr avdr.gill"
        #KTYP 6071 K
        #SRU 6071 7513
        #KONTO 6072 "Repr ej avdr.gill"
        #KTYP 6072 K
        #SRU 6072 7513
        #KONTO 6080 Bankgarantier
        #KTYP 6080 K
        #SRU 6080 7513
        #KONTO 6090 "�vr f�rs�ljningskostnader"
        #KTYP 6090 K
        #SRU 6090 7513
        #KONTO 6110 Kontorsmaterial
        #KTYP 6110 K
        #SRU 6110 7513
        #KONTO 6150 Trycksaker
        #KTYP 6150 K
        #SRU 6150 7513
        #KONTO 6211 "Fast telefoni"
        #KTYP 6211 K
        #SRU 6211 7513
        #KONTO 6212 Mobiltelefon
        #KTYP 6212 K
        #SRU 6212 7513
        #KONTO 6213 Mobils�kning
        #KTYP 6213 K
        #SRU 6213 7513
        #KONTO 6214 Fax
        #KTYP 6214 K
        #SRU 6214 7513
        #KONTO 6230 Datakommunikation
        #KTYP 6230 K
        #SRU 6230 7513
        #KONTO 6250 Porto
        #KTYP 6250 K
        #SRU 6250 7513
        #KONTO 6310 F�retagsf�rs�kringar
        #KTYP 6310 K
        #SRU 6310 7513
        #KONTO 6320 Sj�lvrisker
        #KTYP 6320 K
        #SRU 6320 7513
        #KONTO 6340 "L�mnade skadest�nd"
        #KTYP 6340 K
        #SRU 6340 7513
        #KONTO 6350 Kundf�rluster
        #KTYP 6350 K
        #SRU 6350 7513
        #KONTO 6390 "�vriga riskkostnader"
        #KTYP 6390 K
        #SRU 6390 7513
        #KONTO 6410 Styrelsearvode
        #KTYP 6410 K
        #SRU 6410 7513
        #KONTO 6420 "Ers�ttning till revisor"
        #KTYP 6420 K
        #SRU 6420 7513
        #KONTO 6430 "Management fees"
        #KTYP 6430 K
        #SRU 6430 7513
        #KONTO 6440 "�rsredovisn, del�rsrapporter"
        #KTYP 6440 K
        #SRU 6440 7513
        #KONTO 6450 Bolagsst�mma
        #KTYP 6450 K
        #SRU 6450 7513
        #KONTO 6490 "�vr f�rvaltningskostnader"
        #KTYP 6490 K
        #SRU 6490 7513
        #KONTO 6530 Redovisningstj�nster
        #KTYP 6530 K
        #SRU 6530 7513
        #KONTO 6540 IT-tj�nster
        #KTYP 6540 K
        #SRU 6540 7513
        #KONTO 6550 Konsultarvoden
        #KTYP 6550 K
        #SRU 6550 7513
        #KONTO 6570 Bankkostnader
        #KTYP 6570 K
        #SRU 6570 7513
        #KONTO 6580 Advokatkostnader
        #KTYP 6580 K
        #SRU 6580 7513
        #KONTO 6590 "�vr fr�mmande tj�nster"
        #KTYP 6590 K
        #SRU 6590 7513
        #KONTO 6800 "Inhyrd personal"
        #KTYP 6800 K
        #SRU 6800 7513
        #KONTO 6970 "Tidningar, facklitteratur"
        #KTYP 6970 K
        #SRU 6970 7513
        #KONTO 6981 "F�reningsavg avdr gill"
        #KTYP 6981 K
        #SRU 6981 7513
        #KONTO 6982 "F�reningsavg ej avdr gill"
        #KTYP 6982 K
        #SRU 6982 7513
        #KONTO 6991 "�vr avdr gill kostn"
        #KTYP 6991 K
        #SRU 6991 7513
        #KONTO 6992 "�vr ej avdr gill kostn"
        #KTYP 6992 K
        #SRU 6992 7513
        #KONTO 6993 "L�mnade bidrag och g�vor"
        #KTYP 6993 K
        #SRU 6993 7513
        #KONTO 6996 "Betald utl�ndsk inkomstskatt"
        #KTYP 6996 K
        #SRU 6996 7513
        #KONTO 6997 "Obetald utl�ndsk inkomstskatt"
        #KTYP 6997 K
        #SRU 6997 7513
        #KONTO 7010 "L�n kollektivanst�llda"
        #KTYP 7010 K
        #SRU 7010 7514
        #KONTO 7013 "L�n kollektivanst utland"
        #KTYP 7013 K
        #SRU 7013 7514
        #KONTO 7014 "L�n kollektivanst�llda nya pens"
        #KTYP 7014 K
        #SRU 7014 7514
        #KONTO 7030 "L�n kollektivanst�llda, utland"
        #KTYP 7030 K
        #SRU 7030 7514
        #KONTO 7081 "Sjukl�n kollektivanst�llda"
        #KTYP 7081 K
        #SRU 7081 7514
        #KONTO 7082 Semesterl�n
        #KTYP 7082 K
        #SRU 7082 7514
        #KONTO 7083 "F�r�ldraers kollektivanst�llda"
        #KTYP 7083 K
        #SRU 7083 7514
        #KONTO 7089 "�vr l�ner kollektivanst ej arb tid"
        #KTYP 7089 K
        #SRU 7089 7514
        #KONTO 7090 "F�r�ndr sem l�neskuld"
        #KTYP 7090 K
        #SRU 7090 7514
        #KONTO 7210 "L�n tj�nstem�n"
        #KTYP 7210 K
        #SRU 7210 7514
        #KONTO 7211 "L�n Extra s�ljare"
        #KTYP 7211 K
        #SRU 7211 7514
        #KONTO 7213 "L�n tj�nstem�n, utland"
        #KTYP 7213 K
        #SRU 7213 7514
        #KONTO 7214 "L�n tj�nstem�n nya pens"
        #KTYP 7214 K
        #SRU 7214 7514
        #KONTO 7220 "L�n f�retagsledare"
        #KTYP 7220 K
        #SRU 7220 7514
        #KONTO 7223 "L�n f�retagsledare, utland"
        #KTYP 7223 K
        #SRU 7223 7514
        #KONTO 7224 "L�n f�retagsledare nya pens"
        #KTYP 7224 K
        #SRU 7224 7514
        #KONTO 7225 "L�n f�retagsledare, l�neskatt"
        #KTYP 7225 K
        #SRU 7225 7514
        #KONTO 7230 "L�n tj�nstem�n, f�retagsledare, utland"
        #KTYP 7230 K
        #SRU 7230 7514
        #KONTO 7281 "Sjukl�n tj�nstem�n"
        #KTYP 7281 K
        #SRU 7281 7514
        #KONTO 7282 "Sjukl�ner till ftgledare"
        #KTYP 7282 K
        #SRU 7282 7514
        #KONTO 7283 "F�r�ldraers tj�nstem�n"
        #KTYP 7283 K
        #SRU 7283 7514
        #KONTO 7284 "F�r�ldraers ftgledare"
        #KTYP 7284 K
        #SRU 7284 7514
        #KONTO 7285 "Semesterl�n tj�nstem�n"
        #KTYP 7285 K
        #SRU 7285 7514
        #KONTO 7286 "Semesterl�n ftgledare"
        #KTYP 7286 K
        #SRU 7286 7514
        #KONTO 7288 "�vr l�ner tj�nstem�n ej arb tid"
        #KTYP 7288 K
        #SRU 7288 7514
        #KONTO 7289 "�vr l�ner ftgledare ej arb tid"
        #KTYP 7289 K
        #SRU 7289 7514
        #KONTO 7290 "F�r�ndr sem l�neskuld"
        #KTYP 7290 K
        #SRU 7290 7514
        #KONTO 7310 "Kontanta extra ers�ttn"
        #KTYP 7310 K
        #SRU 7310 7514
        #KONTO 7321 "Skattefria trakt Sverige"
        #KTYP 7321 K
        #SRU 7321 7514
        #KONTO 7322 "Skattepl trakt Sverige"
        #KTYP 7322 K
        #SRU 7322 7514
        #KONTO 7323 "Skattefria trakt utland"
        #KTYP 7323 K
        #SRU 7323 7514
        #KONTO 7324 "Skattepl trakt utland"
        #KTYP 7324 K
        #SRU 7324 7514
        #KONTO 7331 "Skattefri bilers�ttning"
        #KTYP 7331 K
        #SRU 7331 7514
        #KONTO 7332 "Skattepl bilers�ttning"
        #KTYP 7332 K
        #SRU 7332 7514
        #KONTO 7333 "Skattefri ers tr�ngselskatt"
        #KTYP 7333 K
        #SRU 7333 7514
        #KONTO 7338 "Skattepliktig ers tr�ngselskatt"
        #KTYP 7338 K
        #SRU 7338 7514
        #KONTO 7381 "Kostn f�r fri bostad"
        #KTYP 7381 K
        #SRU 7381 7514
        #KONTO 7382 "Kostn fria/subv m�ltider"
        #KTYP 7382 K
        #SRU 7382 7514
        #KONTO 7385 "Kostn f�r fri bil"
        #KTYP 7385 K
        #SRU 7385 7514
        #KONTO 7387 "Kostn f�r l�nedator"
        #KTYP 7387 K
        #SRU 7387 7514
        #KONTO 7389 "�vriga kostn naturaf�rm"
        #KTYP 7389 K
        #SRU 7389 7514
        #KONTO 7390 "�vr kostnadsers�ttningar"
        #KTYP 7390 K
        #SRU 7390 7514
        #KONTO 7391 "Resekostnadsers�ttning mot utl�gg"
        #KTYP 7391 K
        #SRU 7391 7514
        #KONTO 7392 "Kostn f�rm�n, hush�llsn�ra tj�nster"
        #KTYP 7392 K
        #SRU 7392 7514
        #KONTO 7398 F�rm�nsv�rden
        #KTYP 7398 K
        #SRU 7398 7514
        #KONTO 7399 "Motkontering av f�rm�n"
        #KTYP 7399 K
        #SRU 7399 7514
        #KONTO 7411 "Kollektiv pensionsf�rs�kring"
        #KTYP 7411 K
        #SRU 7411 7514
        #KONTO 7412 "Indiv pensionsf�rs�kring"
        #KTYP 7412 K
        #SRU 7412 7514
        #KONTO 7461 "Pensionsutbetalningar till kollektivanst"
        #KTYP 7461 K
        #SRU 7461 7514
        #KONTO 7462 "Pensionsutbetalningar till tj�nstem�n"
        #KTYP 7462 K
        #SRU 7462 7514
        #KONTO 7490 "�vriga pensionskostnader"
        #KTYP 7490 K
        #SRU 7490 7514
        #KONTO 7510 Arbetsgivaravgifter
        #KTYP 7510 K
        #SRU 7510 7514
        #KONTO 7519 "Soc.avgifter semesterl�n"
        #KTYP 7519 K
        #SRU 7519 7514
        #KONTO 7520 "Arbetsgivaravg (nya pensionssystemet)"
        #KTYP 7520 K
        #SRU 7520 7514
        #KONTO 7521 "Arbgivaravg l�ner ers (nya pensionssyst)"
        #KTYP 7521 K
        #SRU 7521 7514
        #KONTO 7531 L�neskatt
        #KTYP 7531 K
        #SRU 7531 7514
        #KONTO 7533 "S�rsk l�neskatt pensionsk"
        #KTYP 7533 K
        #SRU 7533 7514
        #KONTO 7540 "S�rsk sjukf�rs�k avg"
        #KTYP 7540 K
        #SRU 7540 7514
        #KONTO 7560 "Arbetsgivaravgifter 18-25 �r"
        #KTYP 7560 K
        #SRU 7560 7514
        #KONTO 7570 "AMF enl avtal"
        #KTYP 7570 K
        #SRU 7570 7514
        #KONTO 7583 Gruppolycksfallsf�rs�kringspremier
        #KTYP 7583 K
        #SRU 7583 7514
        #KONTO 7589 "�vr gruppf�rs�kringspremier"
        #KTYP 7589 K
        #SRU 7589 7514
        #KONTO 7610 Utbildning
        #KTYP 7610 K
        #SRU 7610 7514
        #KONTO 7620 "Sjuk- och h�lsov�rd"
        #KTYP 7620 K
        #SRU 7620 7514
        #KONTO 7650 Sjukl�nef�rs�kring
        #KTYP 7650 K
        #SRU 7650 7514
        #KONTO 7690 "�vr personalkostnader"
        #KTYP 7690 K
        #SRU 7690 7514
        #KONTO 7710 "Nedskrivn av imm anl tillg"
        #KTYP 7710 K
        #SRU 7710 7515
        #KONTO 7720 "Nedskrivn av byggnader och mark"
        #KTYP 7720 K
        #SRU 7720 7515
        #KONTO 7730 "Nedskrivn av maskiner och inv"
        #KTYP 7730 K
        #SRU 7730 7515
        #KONTO 7760 "�terf�ring av nedskrivn imm anl tillg"
        #KTYP 7760 I
        #SRU 7760 7515
        #KONTO 7770 "�terf�ring av nedskrivn byggn/mark"
        #KTYP 7770 I
        #SRU 7770 7515
        #KONTO 7780 "�terf�ring av nedskrivn maskiner/inv"
        #KTYP 7780 I
        #SRU 7780 7515
        #KONTO 7810 "Avskrivningar imm anl tillg"
        #KTYP 7810 K
        #SRU 7810 7515
        #KONTO 7811 "Avskrivningar balanserade utgifter"
        #KTYP 7811 K
        #SRU 7811 7515
        #KONTO 7813 "Avskrivningar patent"
        #KTYP 7813 K
        #SRU 7813 7515
        #KONTO 7814 "Avskrivningar licenser"
        #KTYP 7814 K
        #SRU 7814 7515
        #KONTO 7815 "Avskrivningar varum�rken"
        #KTYP 7815 K
        #SRU 7815 7515
        #KONTO 7816 "Avskrivningar hyresr�tt"
        #KTYP 7816 K
        #SRU 7816 7515
        #KONTO 7817 "Avskrivningar goodwill"
        #KTYP 7817 K
        #SRU 7817 7515
        #KONTO 7820 "Avskrivningar byggnader/mark"
        #KTYP 7820 K
        #SRU 7820 7515
        #KONTO 7821 "Avskrivn byggnader"
        #KTYP 7821 K
        #SRU 7821 7515
        #KONTO 7822 "Avskrivn byggnadsinv"
        #KTYP 7822 K
        #SRU 7822 7515
        #KONTO 7824 "Avskrivn markanl�ggn"
        #KTYP 7824 K
        #SRU 7824 7515
        #KONTO 7829 "Avskrivningar �vr byggnader"
        #KTYP 7829 K
        #SRU 7829 7515
        #KONTO 7830 "Avskrivningar maskiner/inv"
        #KTYP 7830 K
        #SRU 7830 7515
        #KONTO 7831 "Avskrivn arbetsmaskiner"
        #KTYP 7831 K
        #SRU 7831 7515
        #KONTO 7832 "Avskrivn inventarier"
        #KTYP 7832 K
        #SRU 7832 7515
        #KONTO 7833 "Avskrivningar installationer"
        #KTYP 7833 K
        #SRU 7833 7515
        #KONTO 7834 "Avskrivn bilar"
        #KTYP 7834 K
        #SRU 7834 7515
        #KONTO 7835 "Avskrivningar datorer"
        #KTYP 7835 K
        #SRU 7835 7515
        #KONTO 7836 "Avskrivningar leasade tillg"
        #KTYP 7836 K
        #SRU 7836 7515
        #KONTO 7837 "Avskrivningar anl�ggningsdjur"
        #KTYP 7837 K
        #SRU 7837 7515
        #KONTO 7940 "Orealiserad positiv v�rdef�r s�kr instr"
        #KTYP 7940 K
        #SRU 7940 7517
        #KONTO 7960 Kursf�rluster
        #KTYP 7960 K
        #SRU 7960 7517
        #KONTO 7970 "F�rlust avyttr imm/mat anl tillg"
        #KTYP 7970 K
        #SRU 7970 7517
        #KONTO 7971 "F�rlust avyttr imm anl tillg"
        #KTYP 7971 K
        #SRU 7971 7517
        #KONTO 7972 "F�rlust avyttr fastigheter"
        #KTYP 7972 K
        #SRU 7972 7517
        #KONTO 7973 "F�rlust avyttr maskiner/inv"
        #KTYP 7973 K
        #SRU 7973 7517
        #KONTO 7977 "F�rlust avyttr anl�ggningsdjur"
        #KTYP 7977 K
        #SRU 7977 7517
        #KONTO 8012 "Utdeln andelar dotterbolag"
        #KTYP 8012 I
        #SRU 8012 7414
        #KONTO 8014 Koncernbidrag
        #KTYP 8014 I
        #SRU 8014 7414
        #KONTO 8019 "�vr utdeln andelar koncernftg"
        #KTYP 8019 I
        #SRU 8019 7414
        #KONTO 8210 "Utdeln andelar andra f�retag"
        #KTYP 8210 I
        #SRU 8210 7416
        #KONTO 8221 "Res f�rs andelar �vr f�retag"
        #KTYP 8221 I
        #SRU 8221 7416
        #KONTO 8222 "Res lf fordr �vr f�retag"
        #KTYP 8222 I
        #SRU 8222 7416
        #KONTO 8223 "Res f�rs derivat"
        #KTYP 8223 I
        #SRU 8223 7416
        #KONTO 8230 "Valutakursdiff l�ngfr fordr"
        #KTYP 8230 I
        #SRU 8230 7416
        #KONTO 8240 "Resultatandelar handelsbolag (andra ftg)"
        #KTYP 8240 K
        #SRU 8240 7416
        #KONTO 8270 "Nedskr andel/lf fordr �vr ftg"
        #KTYP 8270 I
        #SRU 8270 7521
        #KONTO 8280 "�terf nedskr and/lf ford � ftg"
        #KTYP 8280 I
        #SRU 8280 7521
        #KONTO 8291 "Orealiserade f�r�ndr anl�ggningstillg"
        #KTYP 8291 I
        #SRU 8291 7416
        #KONTO 8295 "Orealiserade f�r�ndr derivat"
        #KTYP 8295 I
        #SRU 8295 7416
        #KONTO 8300 R�nteint�kter
        #KTYP 8300 I
        #SRU 8300 7417
        #KONTO 8313 "R�nteint�kter kundfordringar"
        #KTYP 8313 I
        #SRU 8313 7417
        #KONTO 8321 "Orealiserade f�r�ndr oms�ttn tillg"
        #KTYP 8321 I
        #SRU 8321 7417
        #KONTO 8325 "Orealiserade f�r�ndr derivat oms�ttn tillg"
        #KTYP 8325 I
        #SRU 8325 7417
        #KONTO 8331 Valutakursvinster
        #KTYP 8331 I
        #SRU 8331 7417
        #KONTO 8336 Valutakursf�rluster
        #KTYP 8336 K
        #SRU 8336 7417
        #KONTO 8390 "�vr finansiella int�kter"
        #KTYP 8390 I
        #SRU 8390 7417
        #KONTO 8400 R�ntekostnader
        #KTYP 8400 K
        #SRU 8400 7522
        #KONTO 8422 "R�ntekostnader levskulder"
        #KTYP 8422 K
        #SRU 8422 7522
        #KONTO 8431 "Valutakursvinst skulder"
        #KTYP 8431 I
        #SRU 8431 7522
        #KONTO 8436 "Valutakursf�rlust skulder"
        #KTYP 8436 K
        #SRU 8436 7522
        #KONTO 8451 "Orealiserade f�r�ndr skulder"
        #KTYP 8451 K
        #SRU 8451 7522
        #KONTO 8452 "Orealiserade f�r�ndr s�kr instr"
        #KTYP 8452 K
        #SRU 8452 7522
        #KONTO 8490 "�vr finansiella kostnader"
        #KTYP 8490 K
        #SRU 8490 7522
        #KONTO 8811 "Avs�ttning per fond"
        #KTYP 8811 K
        #SRU 8811 7525
        #KONTO 8819 "�terf�ring av per fond"
        #KTYP 8819 K
        #SRU 8819 7420
        #KONTO 8850 "Avskrivn �ver/under plan"
        #KTYP 8850 K
        #SRU 8850 7526
        #KONTO 8851 "�veravskrivningar imm anl tillg"
        #KTYP 8851 K
        #SRU 8851 7526
        #KONTO 8852 "�veravskrivningar byggnader/mark"
        #KTYP 8852 K
        #SRU 8852 7526
        #KONTO 8853 "�veravskrivningar maskiner/inv"
        #KTYP 8853 K
        #SRU 8853 7526
        #KONTO 8857 "�veravskrivningar anl�ggningsdjur"
        #KTYP 8857 K
        #SRU 8857 7526
        #KONTO 8896 "F�r�ndring lagerreserv"
        #KTYP 8896 K
        #SRU 8896 7422
        #KONTO 8910 "�rets skattekostnad"
        #KTYP 8910 K
        #SRU 8910 7528
        #KONTO 8999 "Redovisat resultat"
        #KTYP 8999 K
        #SRU 8999 7450
        #DIM 1 Resultatenhet
        #DIM 6 Projekt
        #OBJEKT 1 Nord "Kontor Nord"
        #OBJEKT 1 Syd "Kontor Syd"
        #OBJEKT 6 0001 "Utbildning av anv�ndare"
        #OBJEKT 6 0002 "Drifts�ttning n�tverk"
        #OBJEKT 6 0003 "Utbildning ledarskap"
        #OBJEKT 6 0004 "Manuell Personaladministration"
        #OBJEKT 6 0005 "Utbildning projektledning"
        #OBJEKT 6 0006 "Drifts�ttning n�tverk"
        #OBJEKT 6 0007 "Drifts�ttning n�tverk"
        #OBJEKT 6 0008 "Drifts�ttning n�tverk"
        #OBJEKT 6 0009 "Utbildning Projektledning"
        #OBJEKT 6 0010 "Utbildning Projektledning"
        #OBJEKT 6 0011 "Byte av server"
        #OBJEKT 6 0012 "Byte av server"
        #OBJEKT 6 0013 "Byte av server"
        #OBJEKT 6 0014 "Byte av server"
        #OBJEKT 6 0015 Support
        #OBJEKT 6 0016 Support
        #OBJEKT 6 0017 Support
        #OBJEKT 6 0018 Support
        #OBJEKT 6 0019 "Byte av server"
        #OBJEKT 6 0020 "Utbildning av anv�ndare"
        #OBJEKT 6 0021 "Utbildning av anv�ndare"
        #OBJEKT 6 0022 "Utbildning av anv�ndare"
        #OBJEKT 6 0023 Support
        #OBJEKT 6 0024 "Installation av nya datorer och n�tverk"
        #OBJEKT 6 0025 "Installation av nya datorer och n�tverk"
        #OBJEKT 6 0026 "Installation av nya datorer och n�tverk"
        #OBJEKT 6 0027 "Utbildning ledarskap"
        #OBJEKT 6 0028 "Utbildning ledarskap"
        #OBJEKT 6 0029 "Utbildning ledarskap"
        #OBJEKT 6 0030 "Utbildning ledarskap"
        #OBJEKT 6 0031 "Utbildning av anv�ndare"
        #OBJEKT 6 0032 "Utbildning av anv�ndare"
        #OBJEKT 6 0033 Support-/konsulttid
        #OBJEKT 6 0034 Support-/konsulttid
        #OBJEKT 6 0035 Support-/konsulttid
        #IB 0 1221 421457.53
        #UB 0 1221 518057.53
        #IB 0 1229 -366754.50
        #UB 0 1229 -366754.50
        #IB 0 1400 580940.82
        #UB 0 1400 656728.33
        #IB 0 1510 1000255.40
        #UB 0 1510 1050982.35
        #IB 0 1710 16500.00
        #UB 0 1710 17000.00
        #IB 0 1910 1339.00
        #UB 0 1910 3038.00
        #IB 0 1920 444123.13
        #UB 0 1920 131834.23
        #IB 0 1930 938311.64
        #UB 0 1930 746686.19
        #IB 0 1940 1000000.00
        #UB 0 1940 1500000.00
        #IB 0 2081 -200000.00
        #UB 0 2081 -200000.00
        #IB 0 2086 -20000.00
        #UB 0 2086 -20000.00
        #IB 0 2091 -1645096.80
        #UB 0 2091 -1145096.80
        #IB 0 2098 -485166.48
        #UB 0 2098 -485166.48
        #IB 0 2099 -585964.73
        #UB 0 2099 -585964.73
        #IB 0 2150 -87500.00
        #UB 0 2150 -87500.00
        #IB 0 2350 -223800.00
        #UB 0 2350 -223800.00
        #IB 0 2440 -398062.30
        #UB 0 2440 -234973.13
        #UB 0 2510 210000.00
        #IB 0 2650 -72508.00
        #UB 0 2650 -119375.00
        #IB 0 2710 -29254.00
        #UB 0 2710 -24790.00
        #IB 0 2732 -10500.00
        #UB 0 2732 -10500.00
        #IB 0 2790 -250.00
        #UB 0 2790 -250.00
        #IB 0 2794 -6822.29
        #UB 0 2794 -7089.31
        #IB 0 2920 -177754.09
        #UB 0 2920 -163438.89
        #IB 0 2921 -44983.21
        #UB 0 2921 -44983.21
        #IB 0 2940 -36021.97
        #UB 0 2940 -32812.86
        #IB 0 2941 -12489.15
        #UB 0 2941 -7487.61
        #RES 0 3041 -1690380.20
        #RES 0 3045 -512299.95
        #RES 0 3048 -446450.00
        #RES 0 3051 -2985859.20
        #RES 0 3055 -92500.95
        #RES 0 3058 -42350.00
        #RES 0 3540 -20.00
        #RES 0 3541 -20.00
        #RES 0 3542 -20.00
        #RES 0 3590 -7224.00
        #RES 0 3592 -5689.00
        #RES 0 3740 -5.06
        #RES 0 3960 3944.95
        #RES 0 4010 2391104.75
        #RES 0 4056 151216.50
        #RES 0 4990 -75787.51
        #RES 0 5010 203500.00
        #RES 0 5020 8822.40
        #RES 0 5090 6373.60
        #RES 0 5410 16636.00
        #RES 0 5420 1200.00
        #RES 0 5460 14420.08
        #RES 0 5611 25380.87
        #RES 0 5612 4850.00
        #RES 0 5613 14713.53
        #RES 0 5615 51345.00
        #RES 0 5800 16088.82
        #RES 0 5910 680.00
        #RES 0 5930 10876.80
        #RES 0 6071 2546.00
        #RES 0 6110 12386.40
        #RES 0 6211 9115.20
        #RES 0 6212 13159.20
        #RES 0 6250 4240.00
        #RES 0 6310 10300.00
        #RES 0 6420 20320.00
        #RES 0 6530 14480.00
        #RES 0 6570 2000.00
        #RES 0 6970 2684.00
        #RES 0 7010 617171.14 4885.5
        #RES 0 7081 11668.72 116
        #RES 0 7082 95723.36 636
        #RES 0 7090 -19828.33
        #RES 0 7210 539592.19 3202
        #RES 0 7281 7172.48 64
        #RES 0 7285 65037.17 704
        #RES 0 7290 5513.13
        #RES 0 7321 546.00
        #RES 0 7331 92.50
        #RES 0 7385 40480.80
        #RES 0 7399 -40480.80
        #RES 0 7510 412783.09
        #RES 0 7519 -5001.54
        #RES 0 7560 9416.38
        #RES 0 7570 30100.00
        #RES 0 7620 1750.00
        #RES 0 7690 1629.26
        #RES 0 8300 -1487.89
        #IB -1 1221 789418.53
        #UB -1 1221 421457.53
        #IB -1 1229 -761984.00
        #UB -1 1229 -366754.50
        #IB -1 1400 490079.13
        #UB -1 1400 580940.82
        #IB -1 1510 559463.86
        #UB -1 1510 1000255.40
        #IB -1 1710 16500.00
        #UB -1 1710 16500.00
        #IB -1 1910 1065.00
        #UB -1 1910 1339.00
        #IB -1 1920 214501.54
        #UB -1 1920 444123.13
        #IB -1 1930 1695445.77
        #UB -1 1930 938311.64
        #IB -1 1940 500000.00
        #UB -1 1940 1000000.00
        #IB -1 2081 -200000.00
        #UB -1 2081 -200000.00
        #IB -1 2086 -20000.00
        #UB -1 2086 -20000.00
        #IB -1 2091 -1241052.22
        #UB -1 2091 -1645096.80
        #IB -1 2098 -404044.58
        #UB -1 2098 -485166.48
        #IB -1 2099 -485166.48
        #UB -1 2099 -585964.73
        #IB -1 2150 -87500.00
        #UB -1 2150 -87500.00
        #IB -1 2350 -223800.00
        #UB -1 2350 -223800.00
        #IB -1 2440 -358698.59
        #UB -1 2440 -398062.30
        #IB -1 2510 -62428.00
        #IB -1 2650 -126782.00
        #UB -1 2650 -72508.00
        #IB -1 2710 -33930.00
        #UB -1 2710 -29254.00
        #IB -1 2732 -10500.00
        #UB -1 2732 -10500.00
        #UB -1 2790 -250.00
        #UB -1 2794 -6822.29
        #IB -1 2920 -160531.76
        #UB -1 2920 -177754.09
        #IB -1 2921 -51854.01
        #UB -1 2921 -44983.21
        #IB -1 2940 -37798.19
        #UB -1 2940 -36021.97
        #UB -1 2941 -12489.15
        #IB -1 2990 -404.00
        #RES -1 3041 -1616182.70
        #RES -1 3045 -469333.37
        #RES -1 3048 -307000.00
        #RES -1 3051 -2873266.60
        #RES -1 3055 -64422.67
        #RES -1 3540 -120.00
        #RES -1 3590 -4664.00
        #RES -1 3591 -6826.36
        #RES -1 3740 -10.68
        #RES -1 3960 504.95
        #RES -1 4010 2300437.22
        #RES -1 4056 98337.53
        #RES -1 4990 -90861.69
        #RES -1 5010 198000.00
        #RES -1 5020 5102.75
        #RES -1 5090 3487.20
        #RES -1 5410 9919.20
        #RES -1 5460 5764.85
        #RES -1 5611 26724.06
        #RES -1 5612 5644.00
        #RES -1 5613 12726.40
        #RES -1 5615 38385.00
        #RES -1 5710 180.75
        #RES -1 5800 9635.50
        #RES -1 5930 8988.00
        #RES -1 6071 1228.00
        #RES -1 6072 940.00
        #RES -1 6090 1884.80
        #RES -1 6110 5084.73
        #RES -1 6211 5474.35
        #RES -1 6212 11720.19
        #RES -1 6250 4440.00
        #RES -1 6310 12000.00
        #RES -1 6420 20400.00
        #RES -1 6530 11240.00
        #RES -1 6550 2500.00
        #RES -1 6570 2670.00
        #RES -1 6970 1840.00
        #RES -1 7010 591537.19 4842.5
        #RES -1 7081 15013.60 152
        #RES -1 7082 76485.90 488
        #RES -1 7090 33108.30
        #RES -1 7210 519291.54 3159.5
        #RES -1 7281 1707.68 16
        #RES -1 7285 85398.46 928
        #RES -1 7290 -15885.97
        #RES -1 7321 882.00
        #RES -1 7331 962.00
        #RES -1 7385 50760.00
        #RES -1 7399 -50760.00
        #RES -1 7510 423555.87
        #RES -1 7519 5618.35
        #RES -1 7560 2327.90
        #RES -1 7570 25000.00
        #RES -1 7620 716.00
        #RES -1 7690 2342.98
        #RES -1 7832 84291.50
        #RES -1 8300 -1829.44
        #RES -1 8490 940.00
        #RES -1 8910 190000.00
        #RES -1 8999 585964.73
        #VER A 1 20210105 Kaffebr�d 20210310
        {
           #TRANS 1910 {} -195.00
           #TRANS 2641 {} 20.88
           #TRANS 7690 {} 174.12
        }
        #VER A 2 20210107 �verf�ring 20210310
        {
           #TRANS 1930 {} 350000.00
           #TRANS 1920 {} -350000.00
        }
        #VER A 3 20210109 "Str�mqvist J�rnhandel" 20210310
        {
           #TRANS 1910 {} -445.00
           #TRANS 2641 {} 89.00
           #TRANS 5090 {} 356.00
        }
        #VER A 4 20210112 "Ink�p frim�rken" 20210310
        {
           #TRANS 1910 {} -550.00
           #TRANS 2641 {} 110.00
           #TRANS 6250 {} 440.00
        }
        #VER A 5 20210112 "Uttag till kassa" 20210310
        {
           #TRANS 1910 {} 2000.00
           #TRANS 1930 {} -2000.00
        }
        #VER A 6 20210212 Fikabr�d 20210206
        {
           #TRANS 1910 {} -188.00
           #TRANS 2641 {} 20.04
           #TRANS 7690 {} 167.96
        }
        #VER A 7 20210212 �verf�ring 20210206
        {
           #TRANS 1920 {} -500000.00
           #TRANS 1940 {} 500000.00
        }
        #VER A 8 20210216 Visa 20210216
        {
           #TRANS 1930 {} -3570.00
           #TRANS 2641 {} 392.25
           #TRANS 5800 {} 3177.75
        }
        #VER A 9 20210220 Wettergrens 20210216
        {
           #TRANS 1910 {} -265.00
           #TRANS 2641 {} 53.00
           #TRANS 6110 {} 212.00
        }
        #VER A 10 20210226 Massage 20210216
        {
           #TRANS 1910 {} -800.00
           #TRANS 7620 {} 800.00
        }
        #VER A 11 20210305 "Uttag till kassa" 20210314
        {
           #TRANS 1910 {} 2000.00
           #TRANS 1930 {} -2000.00
        }
        #VER A 12 20210306 Porto 20210331
        {
           #TRANS 1910 {} -1100.00
           #TRANS 2641 {} 220.00
           #TRANS 6250 {} 880.00
        }
        #VER A 13 20210306 Visa 20210331
        {
           #TRANS 6071 {} 270.00
           #TRANS 2641 {} 67.50
           #TRANS 1930 {} -337.50
        }
        #VER A 14 20210313 Liber 20210331
        {
           #TRANS 1910 {} -500.00
           #TRANS 2641 {} 100.00
           #TRANS 6110 {} 400.00
        }
        #VER A 15 20210319 "Avgifter bank" 20210331
        {
           #TRANS 1930 {} -1500.00
           #TRANS 2641 {} 700.00
           #TRANS 6570 {} 800.00
        }
        #VER A 16 20210325 "�verf�ring PG till BG" 20210331
        {
           #TRANS 1920 {} -200000.00
           #TRANS 1930 {} 200000.00
        }
        #VER A 17 20210403 Fackavgifter 20210728
        {
           #TRANS 2794 {} 12182.63
           #TRANS 1930 {} -12182.63
        }
        #VER A 18 20210414 Utdelning 20210728
        {
           #TRANS 2091 {} 500000.00
           #TRANS 1930 {} -500000.00
        }
        #VER A 19 20210424 "�verf�ring PG-BG" 20210430
        {
           #TRANS 1920 {} -200000.00
           #TRANS 1930 {} 200000.00
        }
        #VER A 20 20210424 Fikabr�d 20210430
        {
           #TRANS 1910 {} -125.00
           #TRANS 7690 {} 25.00
           #TRANS 7690 {} 100.00
        }
        #VER A 21 20210427 Massage 20210430
        {
           #TRANS 1910 {} -500.00
           #TRANS 7620 {} 500.00
        }
        #VER A 22 20210430 "Uttag till kassa" 20210430
        {
           #TRANS 1910 {} 2000.00
           #TRANS 1930 {} -2000.00
        }
        #VER A 23 20210504 Visa 20210516
        {
           #TRANS 5800 {} 1034.45
           #TRANS 2641 {} 180.55
           #TRANS 1930 {} -1215.00
        }
        #VER A 24 20210505 Fackavgifter 20210516
        {
           #TRANS 2794 {} 1809.85
           #TRANS 1930 {} -1809.85
        }
        #VER A 25 20210518 Fikabr�d 20210529
        {
           #TRANS 1910 {} -156.00
           #TRANS 2641 {} 31.20
           #TRANS 7690 {} 124.80
        }
        #VER A 26 20210522 "�verf�ring PG-BG" 20210529
        {
           #TRANS 1920 {} -200000.00
           #TRANS 1930 {} 200000.00
        }
        #VER A 27 20210605 Fackavgifter 20210615
        {
           #TRANS 2794 {} 1797.53
           #TRANS 1930 {} -1797.53
        }
        #VER A 28 20210612 Visa 20210615
        {
           #TRANS 6071 {} 276.00
           #TRANS 2641 {} 69.00
           #TRANS 1930 {} -345.00
           #TRANS 5800 {} 846.61
           #TRANS 2641 {} 127.39
           #TRANS 1930 {} -974.00
        }
        #VER A 29 20210612 "�verf�ring PG-BG" 20210615
        {
           #TRANS 1920 {} -50000.00
           #TRANS 1930 {} 50000.00
        }
        #VER A 30 20210724 Fikabr�d 20210630
        {
           #TRANS 1910 {} -146.00
           #TRANS 2641 {} 29.20
           #TRANS 7690 {} 116.80
        }
        #VER A 31 20210730 Massage 20210630
        {
           #TRANS 7620 {} 450.00
           #TRANS 1910 {} -450.00
        }
        #VER A 32 20210730 Fackavgifter 20210715
        {
           #TRANS 2794 {} 1799.49
           #TRANS 1930 {} -1799.49
        }
        #VER A 33 20210730 "�verf�ring PG-PG" 20210715
        {
           #TRANS 1920 {} -400000.00
           #TRANS 1930 {} 400000.00
        }
        #VER A 34 20210803 Fackavgifter 20210814
        {
           #TRANS 2794 {} 1873.95
           #TRANS 1930 {} -1873.95
        }
        #VER A 35 20210807 "Ink�p av frim�rken" 20210814
        {
           #TRANS 1910 {} -1000.00
           #TRANS 2641 {} 200.00
           #TRANS 6250 {} 800.00
        }
        #VER A 36 20210807 "Avdragsgill extern representation 25 %" 20210814
        {
           #TRANS 1910 {} -800.00
           #TRANS 6071 {} 640.00
           #TRANS 2641 {} 160.00
        }
        #VER A 37 20210814 "Uttag till kassa" 20210814
        {
           #TRANS 1910 {} 3000.00
           #TRANS 1930 {} -3000.00
        }
        #VER A 38 20210821 Visa 20210814
        {
           #TRANS 1930 {} -584.00
           #TRANS 2641 {} 33.06
           #TRANS 5800 {} 550.94
           #TRANS 1930 {} -1050.00
           #TRANS 2641 {} 112.45
           #TRANS 5800 {} 937.55
        }
        #VER A 39 20210904 Fackavgifter 20210730
        {
           #TRANS 2794 {} 1851.38
           #TRANS 1930 {} -1851.38
        }
        #VER A 40 20210909 "Ink�p av frim�rken" 20210917
        {
           #TRANS 1910 {} -1500.00
           #TRANS 2641 {} 300.00
           #TRANS 6250 {} 1200.00
        }
        #VER A 41 20210914 "Avdragsgill extern representation 25 %" 20210917
        {
           #TRANS 1910 {} -500.00
           #TRANS 6071 {} 400.00
           #TRANS 2641 {} 100.00
        }
        #VER A 42 20210921 "�verf�ring PG-BG" 20210917
        {
           #TRANS 1920 {} -400000.00
           #TRANS 1930 {} 400000.00
        }
        #VER A 43 20210925 Bankkostnader 20210917
        {
           #TRANS 6570 {} 1200.00
           #TRANS 1930 {} -1200.00
        }
        #VER A 44 20211008 "Uttag till kassa" 20211014
        {
           #TRANS 1930 {} -1000.00
           #TRANS 1910 {} 1000.00
        }
        #VER A 45 20211012 "Ink�p av fika" 20211030
        {
           #TRANS 1910 {} -135.00
           #TRANS 2641 {} 14.46
           #TRANS 7690 {} 120.54
        }
        #VER A 46 20211015 "Ink�p av frim�rken" 20211030
        {
           #TRANS 1910 {} -550.00
           #TRANS 2641 {} 110.00
           #TRANS 6250 {} 440.00
        }
        #VER A 47 20211021 "Avdragsgill extern representation 25 %" 20211030
        {
           #TRANS 1910 {} -1200.00
           #TRANS 6071 {} 960.00
           #TRANS 2641 {} 240.00
        }
        #VER A 48 20211030 "Uttag till kassa" 20211030
        {
           #TRANS 1910 {} 2500.00
           #TRANS 1930 {} -2500.00
        }
        #VER A 49 20211106 �verf�ring 20211113
        {
           #TRANS 1920 {} -400000.00
           #TRANS 1930 {} 400000.00
        }
        #VER A 50 20211106 "Ink�p av fika" 20211113
        {
           #TRANS 1910 {} -135.00
           #TRANS 2641 {} 14.46
           #TRANS 7690 {} 120.54
        }
        #VER A 51 20211118 "Ink�p av frim�rken" 20211113
        {
           #TRANS 1910 {} -600.00
           #TRANS 2641 {} 120.00
           #TRANS 6250 {} 480.00
        }
        #VER A 52 20211118 Visa 20211113
        {
           #TRANS 1930 {} -5200.00
           #TRANS 2641 {} 294.32
           #TRANS 5800 {} 4905.68
        }
        #VER A 53 20211126 Reklam 20211113
        {
           #TRANS 1910 {} -1200.00
           #TRANS 2641 {} 240.00
           #TRANS 5930 {} 960.00
        }
        #VER A 54 20211204 "Ink�p av fika" 20211130
        {
           #TRANS 1910 {} -526.00
           #TRANS 2641 {} 56.33
           #TRANS 7690 {} 469.67
        }
        #VER A 55 20211209 "Uttag till kassa" 20211130
        {
           #TRANS 1910 {} 3000.00
           #TRANS 1930 {} -3000.00
        }
        #VER A 56 20211211 �verf�ring 20211130
        {
           #TRANS 1920 {} -300000.00
           #TRANS 1930 {} 300000.00
        }
        #VER A 57 20211228 "�verf�ring PG-BG" 20211230
        {
           #TRANS 1920 {} -150000.00
           #TRANS 1930 {} 150000.00
        }
        #VER A 58 20211228 Visa 20211230
        {
           #TRANS 1930 {} -5268.00
           #TRANS 2641 {} 632.16
           #TRANS 5800 {} 4635.84
        }
        #VER A 59 20211228 "Ink�p av fika" 20211230
        {
           #TRANS 1910 {} -235.00
           #TRANS 2641 {} 25.17
           #TRANS 7690 {} 209.83
        }
        #VER B 1 20210102 "Inbetalningsjournal nr 154" 20210102
        {
           #TRANS 1510 {} -139688.00
           #TRANS 1930 {} 139688.00
        }
        #VER B 2 20210105 "Inbetalningsjournal nr 155" 20210105
        {
           #TRANS 1510 {} -32613.00
           #TRANS 1920 {} 32613.00
        }
        #VER B 3 20210108 "Inbetalningsjournal nr 156" 20210108
        {
           #TRANS 1510 {} -23050.00
           #TRANS 1930 {} 23050.00
        }
        #VER B 4 20210112 "Inbetalningsjournal nr 157" 20210112
        {
           #TRANS 1510 {} -139209.00
           #TRANS 1920 {} 139209.00
        }
        #VER B 5 20210116 "Inbetalningsjournal nr 158" 20210116
        {
           #TRANS 1510 {} -213270.50
           #TRANS 1930 {} 213016.15
           #TRANS 3960 {} 254.35
        }
        #VER B 6 20210116 "Fakturajournal nr 68" 20210116
        {
           #TRANS 1510 {} 233667.00
           #TRANS 3740 {} 0.50
           #TRANS 2611 {} -46733.40
           #TRANS 3041 {1 Nord} -3550.00
           #TRANS 3041 {1 Nord 6 0001} -52625.00
           #TRANS 3041 {1 Syd} -1100.00
           #TRANS 3051 {} -120458.60
           #TRANS 3051 {1 Nord} -3700.00
           #TRANS 3590 {1 Nord 6 0001} -5500.00
           #TRANS 3740 {} -0.50
        }
        #VER B 7 20210119 "Inbetalningsjournal nr 159" 20210119
        {
           #TRANS 1510 {} -200275.00
           #TRANS 1920 {} 200275.00
        }
        #VER B 8 20210121 "Inbetalningsjournal nr 160" 20210121
        {
           #TRANS 1510 {} -244624.90
           #TRANS 1930 {} 244911.78
           #TRANS 3960 {} -286.88
        }
        #VER B 9 20210130 "Fakturajournal nr 69" 20210130
        {
           #TRANS 1510 {} 248522.90
           #TRANS 3740 {} 0.09
           #TRANS 2611 {} -40362.50
           #TRANS 3041 {1 Nord} -13500.00
           #TRANS 3045 {} -46099.88
           #TRANS 3051 {} -147950.00
           #TRANS 3542 {} -20.00
           #TRANS 3740 {} -0.96
           #TRANS 8300 {} -589.65
        }
        #VER B 10 20210202 "Inbetalningsjournal nr 161" 20210202
        {
           #TRANS 1510 {} -90619.00
           #TRANS 1930 {} 90619.00
        }
        #VER B 11 20210209 "Inbetalningsjournal nr 162" 20210209
        {
           #TRANS 1510 {} -66750.00
           #TRANS 1920 {} 66750.00
        }
        #VER B 12 20210213 "Fakturajournal nr 70" 20210213
        {
           #TRANS 1510 {} 438903.00
           #TRANS 3740 {} 0.25
           #TRANS 2611 {} -78002.50
           #TRANS 3041 {1 Nord} -5885.00
           #TRANS 3041 {1 Syd} -3300.00
           #TRANS 3041 {1 Syd 6 0001} -56250.00
           #TRANS 3048 {1 Nord 6 0020} -43200.00
           #TRANS 3051 {} -100750.00
           #TRANS 3051 {1 Nord} -69100.00
           #TRANS 3051 {1 Syd} -76725.00
           #TRANS 3592 {1 Nord 6 0020} -5689.00
           #TRANS 3740 {} -1.75
        }
        #VER B 13 20210216 "Inbetalningsjournal nr 163" 20210216
        {
           #TRANS 1510 {} -69398.00
           #TRANS 1930 {} 69398.00
        }
        #VER B 14 20210218 "Inbetalningsjournal nr 164" 20210218
        {
           #TRANS 1510 {} -199973.00
           #TRANS 1920 {} 199973.00
        }
        #VER B 15 20210224 "Inbetalningsjournal nr 165" 20210224
        {
           #TRANS 1510 {} -62974.90
           #TRANS 1930 {} 59235.15
           #TRANS 3960 {} 3739.75
        }
        #VER B 16 20210227 "Fakturajournal nr 71" 20210227
        {
           #TRANS 1510 {} 305024.79
           #TRANS 3740 {} 0.11
           #TRANS 2611 {} -47325.00
           #TRANS 3041 {} -21600.00
           #TRANS 3041 {6 0001} -52200.00
           #TRANS 3045 {1 Nord 6 0031} -68399.90
           #TRANS 3051 {} -26200.00
           #TRANS 3051 {1 Nord} -89300.00
        }
        #VER B 17 20210304 "Inbetalningsjournal nr 166" 20210304
        {
           #TRANS 1510 {} -11482.00
           #TRANS 1920 {} 11482.00
        }
        #VER B 18 20210309 "Inbetalningsjournal nr 167" 20210309
        {
           #TRANS 1510 {} -70313.00
           #TRANS 1930 {} 70310.00
           #TRANS 3740 {} 3.00
        }
        #VER B 19 20210316 "Inbetalningsjournal nr 168" 20210316
        {
           #TRANS 1510 {} -270733.00
           #TRANS 1930 {} 270733.00
        }
        #VER B 20 20210316 "Fakturajournal nr 72" 20210316
        {
           #TRANS 1510 {} 362619.00
           #TRANS 2611 {} -59093.75
           #TRANS 3041 {} -123175.00
           #TRANS 3041 {1 Nord} -9900.00
           #TRANS 3041 {1 Nord 6 0002} -33000.00
           #TRANS 3048 {} -67150.00
           #TRANS 3051 {} -70300.00
           #TRANS 3740 {} -0.25
        }
        #VER B 21 20210330 "Inbetalningsjournal nr 169" 20210330
        {
           #TRANS 1510 {} -203875.00
           #TRANS 1920 {} 203875.00
        }
        #VER B 22 20210330 "Fakturajournal nr 73" 20210330
        {
           #TRANS 1510 {} 314067.73
           #TRANS 2611 {} -57913.50
           #TRANS 3041 {} -40350.00
           #TRANS 3041 {1 Nord} -7200.00
           #TRANS 3041 {1 Syd} -7200.00
           #TRANS 3051 {} -176200.00
           #TRANS 3055 {1 Nord} -24499.73
           #TRANS 3590 {} -224.00
           #TRANS 3590 {1 Nord} -480.00
           #TRANS 3740 {} -0.50
        }
        #VER B 23 20210331 "Fakturajournal nr 74" 20210331
        {
           #TRANS 1510 {} 69625.00
           #TRANS 2611 {} -13925.00
           #TRANS 3051 {} -55700.00
        }
        #VER B 24 20210403 "Inbetalningsjournal nr 170" 20210403
        {
           #TRANS 1510 {} -199899.79
           #TRANS 1930 {} 200038.68
           #TRANS 3960 {} -138.89
        }
        #VER B 25 20210406 "Inbetalningsjournal nr 171" 20210406
        {
           #TRANS 1510 {} -57125.00
           #TRANS 1920 {} 57125.00
        }
        #VER B 26 20210414 "Inbetalningsjournal nr 172" 20210414
        {
           #TRANS 1510 {} -173219.00
           #TRANS 1930 {} 173219.00
        }
        #VER B 27 20210415 "Inbetalningsjournal nr 173" 20210415
        {
           #TRANS 1510 {} -119900.00
           #TRANS 1930 {} 119900.00
        }
        #VER B 28 20210415 "Fakturajournal nr 75" 20210415
        {
           #TRANS 1510 {} 284369.00
           #TRANS 2611 {} -56860.00
           #TRANS 3041 {} -22640.00
           #TRANS 3041 {1 Nord 6 0001} -36000.00
           #TRANS 3041 {1 Syd} -2200.00
           #TRANS 3051 {} -166600.00
           #TRANS 3740 {} -1.07
           #TRANS 8300 {} -67.93
        }
        #VER B 29 20210420 "Inbetalningsjournal nr 174" 20210420
        {
           #TRANS 1510 {} -258099.73
           #TRANS 1930 {} 258618.84
           #TRANS 3960 {} -519.11
        }
        #VER B 30 20210424 "Inbetalningsjournal nr 175" 20210424
        {
           #TRANS 1510 {} -46968.00
           #TRANS 1920 {} 46968.00
        }
        #VER B 31 20210430 "Inbetalningsjournal nr 176" 20210430
        {
           #TRANS 1510 {} -78625.00
           #TRANS 1930 {} 78625.00
        }
        #VER B 32 20210430 "Fakturajournal nr 76" 20210430
        {
           #TRANS 1510 {} 250375.25
           #TRANS 2611 {} -40125.00
           #TRANS 3041 {} -60300.00
           #TRANS 3045 {} -49749.96
           #TRANS 3051 {} -100200.00
           #TRANS 3740 {} -0.29
        }
        #VER B 33 20210504 "Inbetalningsjournal nr 177" 20210504
        {
           #TRANS 1510 {} -218744.00
           #TRANS 1930 {} 218744.00
        }
        #VER B 34 20210515 "Inbetalningsjournal nr 178" 20210515
        {
           #TRANS 1510 {} -65625.00
           #TRANS 1920 {} 65625.00
        }
        #VER B 35 20210515 "Fakturajournal nr 77" 20210515
        {
           #TRANS 1510 {} 239611.86
           #TRANS 3740 {} 0.25
           #TRANS 2611 {} -41063.75
           #TRANS 3041 {} -72000.00
           #TRANS 3041 {1 Nord} -5605.00
           #TRANS 3048 {} -29750.00
           #TRANS 3051 {} -86650.00
           #TRANS 3058 {} -3800.00
           #TRANS 3541 {} -20.00
           #TRANS 3740 {} -0.86
           #TRANS 8300 {} -722.50
        }
        #VER B 36 20210518 "Inbetalningsjournal nr 179" 20210518
        {
           #TRANS 1510 {} -142250.25
           #TRANS 1930 {} 142250.25
        }
        #VER B 37 20210529 "Fakturajournal nr 78" 20210529
        {
           #TRANS 1510 {} 274938.00
           #TRANS 2611 {} -54987.50
           #TRANS 3041 {} -58100.00
           #TRANS 3041 {1 Syd} -7200.00
           #TRANS 3051 {} -153700.00
           #TRANS 3051 {1 Syd} -950.00
           #TRANS 3740 {} -0.50
        }
        #VER B 38 20210601 "Inbetalningsjournal nr 180" 20210601
        {
           #TRANS 1510 {} -91250.00
           #TRANS 1920 {} 91250.00
        }
        #VER B 39 20210603 "Inbetalningsjournal nr 181" 20210603
        {
           #TRANS 1510 {} -24623.86
           #TRANS 1930 {} 24627.90
           #TRANS 3960 {} -4.04
        }
        #VER B 40 20210608 "Inbetalningsjournal nr 182" 20210608
        {
           #TRANS 1510 {} -145800.00
           #TRANS 1930 {} 145800.00
        }
        #VER B 41 20210615 "Inbetalningsjournal nr 183" 20210615
        {
           #TRANS 1510 {} -86063.00
           #TRANS 1930 {} 86063.00
        }
        #VER B 42 20210615 "Fakturajournal nr 79" 20210615
        {
           #TRANS 1510 {} 291750.15
           #TRANS 2611 {} -53100.00
           #TRANS 3041 {} -5500.00
           #TRANS 3041 {1 Nord} -10700.00
           #TRANS 3041 {1 Nord 6 0009} -68000.00
           #TRANS 3045 {} -26250.15
           #TRANS 3051 {} -128200.00
        }
        #VER B 43 20210622 "Inbetalningsjournal nr 184" 20210622
        {
           #TRANS 1510 {} -75063.00
           #TRANS 1930 {} 75063.00
        }
        #VER B 44 20210629 "Inbetalningsjournal nr 185" 20210629
        {
           #TRANS 1510 {} -199875.00
           #TRANS 1920 {} 199875.00
        }
        #VER B 45 20210630 "Fakturajournal nr 80" 20210630
        {
           #TRANS 1510 {} 265438.00
           #TRANS 2611 {} -53087.50
           #TRANS 3051 {} -101650.00
           #TRANS 3051 {1 Nord} -110700.00
           #TRANS 3740 {} -0.50
        }
        #VER B 46 20210701 "Inbetalningsjournal nr 186" 20210701
        {
           #TRANS 1510 {} -20250.00
           #TRANS 1930 {} 20250.00
        }
        #VER B 47 20210706 "Inbetalningsjournal nr 187" 20210706
        {
           #TRANS 1510 {} -186500.15
           #TRANS 1920 {} 186348.10
           #TRANS 3960 {} 152.05
        }
        #VER B 48 20210715 "Inbetalningsjournal nr 188" 20210715
        {
           #TRANS 1510 {} -85000.00
           #TRANS 1930 {} 85000.00
        }
        #VER B 49 20210715 "Fakturajournal nr 81" 20210715
        {
           #TRANS 1510 {} 254591.29
           #TRANS 2611 {} -31538.00
           #TRANS 3041 {} -2200.00
           #TRANS 3041 {1 Nord} -5200.00
           #TRANS 3041 {1 Nord 6 0009} -72000.00
           #TRANS 3045 {} -50400.29
           #TRANS 3048 {} -21250.00
           #TRANS 3051 {} -45802.00
           #TRANS 3051 {1 Nord} -950.00
           #TRANS 3055 {} -9499.98
           #TRANS 3058 {} -15750.00
           #TRANS 3740 {} -1.02
        }
        #VER B 50 20210720 "Inbetalningsjournal nr 189" 20210720
        {
           #TRANS 1510 {} -209063.00
           #TRANS 1930 {} 209063.00
        }
        #VER B 51 20210731 "Inbetalningsjournal nr 190" 20210731
        {
           #TRANS 1510 {} -66813.00
           #TRANS 1920 {} 66813.00
        }
        #VER B 52 20210731 "Fakturajournal nr 82" 20210731
        {
           #TRANS 1510 {} 150038.05
           #TRANS 2611 {} -23462.50
           #TRANS 3041 {} -23400.00
           #TRANS 3045 {1 Nord} -19975.03
           #TRANS 3048 {} -12750.00
           #TRANS 3051 {} -70450.00
           #TRANS 3740 {} -0.52
        }
        #VER B 53 20210805 "Inbetalningsjournal nr 191" 20210805
        {
           #TRANS 1510 {} -96900.29
           #TRANS 1930 {} 96900.29
        }
        #VER B 54 20210810 "Inbetalningsjournal nr 192" 20210810
        {
           #TRANS 1510 {} -90000.00
           #TRANS 1920 {} 90000.00
        }
        #VER B 55 20210814 "Fakturajournal nr 83" 20210814
        {
           #TRANS 1510 {} 386500.00
           #TRANS 2611 {} -70550.00
           #TRANS 3041 {} -76500.00
           #TRANS 3041 {1 Nord} -1100.00
           #TRANS 3041 {1 Syd} -1900.00
           #TRANS 3048 {} -33750.00
           #TRANS 3051 {} -202700.00
        }
        #VER B 56 20210817 "Inbetalningsjournal nr 193" 20210817
        {
           #TRANS 1510 {} -86503.00
           #TRANS 1920 {} 86503.00
        }
        #VER B 57 20210824 "Inbetalningsjournal nr 194" 20210824
        {
           #TRANS 1510 {} -32725.05
           #TRANS 1930 {} 32353.77
           #TRANS 3960 {} 371.28
        }
        #VER B 58 20210831 "Inbetalningsjournal nr 195" 20210831
        {
           #TRANS 1510 {} -55313.00
           #TRANS 1930 {} 55313.00
        }
        #VER B 59 20210831 "Fakturajournal nr 84" 20210831
        {
           #TRANS 1510 {} 274032.32
           #TRANS 2611 {} -48856.25
           #TRANS 3041 {1 Nord 6 0001} -77400.00
           #TRANS 3045 {} -29750.03
           #TRANS 3051 {} -118025.00
           #TRANS 3740 {} -1.04
        }
        #VER B 60 20210902 "Inbetalningsjournal nr 196" 20210902
        {
           #TRANS 1510 {} -36500.00
           #TRANS 1930 {} 36500.00
        }
        #VER B 61 20210907 "Inbetalningsjournal nr 197" 20210907
        {
           #TRANS 1510 {} -234250.00
           #TRANS 1920 {} 234250.00
        }
        #VER B 62 20210914 "Inbetalningsjournal nr 198" 20210914
        {
           #TRANS 1510 {} -131625.00
           #TRANS 1930 {} 131625.00
        }
        #VER B 63 20210915 "Fakturajournal nr 85" 20210915
        {
           #TRANS 1510 {} 391719.06
           #TRANS 2611 {} -60893.80
           #TRANS 3041 {1 Nord 6 0001} -49500.00
           #TRANS 3041 {1 Nord 6 0007} -18400.00
           #TRANS 3041 {1 Syd} -3075.20
           #TRANS 3045 {} -18750.11
           #TRANS 3048 {1 Nord 6 0020} -49500.00
           #TRANS 3051 {} -172600.00
           #TRANS 3055 {} -18999.95
        }
        #VER B 64 20210921 "Inbetalningsjournal nr 199" 20210921
        {
           #TRANS 1510 {} -211938.00
           #TRANS 1930 {} 211938.00
        }
        #VER B 65 20210928 "Inbetalningsjournal nr 200" 20210928
        {
           #TRANS 1510 {} -32344.00
           #TRANS 1920 {} 32344.00
        }
        #VER B 66 20210930 "Fakturajournal nr 86" 20210930
        {
           #TRANS 1510 {} 152627.00
           #TRANS 2611 {} 600.00
           #TRANS 3041 {1 Nord 6 0007} 2400.00
           #TRANS 1510 {} -3000.00
           #TRANS 2611 {} -30525.00
           #TRANS 3041 {} -38700.00
           #TRANS 3051 {} -83400.00
           #TRANS 3740 {} -2.00
        }
        #VER B 67 20211002 "Inbetalningsjournal nr 201" 20211002
        {
           #TRANS 1510 {} -1094.00 20211002 "Faktnr: 670, Namn: Karl Svensson"
           #TRANS 1510 {} -16875.00 20211002 "Faktnr: 663, Namn: Billeverant�ren AB"
           #TRANS 1510 {} -29750.32 20211002 "Faktnr: 669, Namn: IWU Trading"
           #TRANS 1510 {} -2750.00 20211002 "Faktnr: 671, Namn: Sparlivs"
           #TRANS 1920 {} 2750.00 20211002 "Faktnr: 671, Namn: Sparlivs"
           #TRANS 1920 {} 16875.00 20211002 "Faktnr: 663, Namn: Billeverant�ren AB"
           #TRANS 1920 {} 30125.00 20211002 "Faktnr: 669, Namn: IWU Trading"
           #TRANS 1920 {} 1094.00 20211002 "Faktnr: 670, Namn: Karl Svensson"
           #TRANS 3960 {} -374.68 20211002 "Faktnr: 669, Namn: IWU Trading"
        }
        #VER B 68 20211005 "Inbetalningsjournal nr 202" 20211005
        {
           #TRANS 1510 {} -72500.00
           #TRANS 1930 {} 72500.00
        }
        #VER B 69 20211012 "Inbetalningsjournal nr 203" 20211012
        {
           #TRANS 1510 {} -277625.00
           #TRANS 1920 {} 277625.00
        }
        #VER B 70 20211015 "Inbetalningsjournal nr 204" 20211015
        {
           #TRANS 1510 {} -37750.06
           #TRANS 1930 {} 38125.00
           #TRANS 3960 {} -374.94
        }
        #VER B 71 20211016 "Fakturajournal nr 87" 20211016
        {
           #TRANS 1510 {} 247751.17
           #TRANS 2611 {} -35700.00
           #TRANS 3041 {} -44075.00
           #TRANS 3041 {1 Nord} -14425.00
           #TRANS 3041 {1 Syd} -1900.00
           #TRANS 3045 {} -22499.87
           #TRANS 3048 {} -46750.00
           #TRANS 3051 {} -82400.00
           #TRANS 3740 {} -1.30
        }
        #VER B 72 20211019 "Inbetalningsjournal nr 205" 20211019
        {
           #TRANS 1510 {} -115626.00
           #TRANS 1920 {} 115626.00
        }
        #VER B 73 20211026 "Inbetalningsjournal nr 206" 20211026
        {
           #TRANS 1510 {} -20188.00
           #TRANS 1930 {} 20188.00
        }
        #VER B 74 20211028 "Inbetalningsjournal nr 207" 20211028
        {
           #TRANS 1510 {} -16813.00
           #TRANS 1920 {} 16813.00
        }
        #VER B 75 20211030 "Fakturajournal nr 88" 20211030
        {
           #TRANS 1510 {} 101621.00
           #TRANS 3045 {} 0.01
           #TRANS 3740 {} 0.09
           #TRANS 2611 {} -1822.50
           #TRANS 3041 {} -3150.00
           #TRANS 3045 {} -42000.10
           #TRANS 3048 {} -50400.00
           #TRANS 3051 {} -3640.00
           #TRANS 3540 {} -20.00
           #TRANS 3590 {} -480.00
           #TRANS 3740 {} -0.69
           #TRANS 8300 {} -107.81
        }
        #VER B 76 20211102 "Inbetalningsjournal nr 208" 20211102
        {
           #TRANS 1510 {} -87751.17
           #TRANS 1930 {} 87751.17
        }
        #VER B 77 20211104 "Inbetalningsjournal nr 209" 20211104
        {
           #TRANS 1510 {} -100625.00
           #TRANS 1920 {} 100625.00
        }
        #VER B 78 20211113 "Inbetalningsjournal nr 210" 20211113
        {
           #TRANS 1510 {} -2508.00
           #TRANS 1930 {} 2508.00
        }
        #VER B 79 20211113 "Fakturajournal nr 89" 20211113
        {
           #TRANS 1510 {} 310124.76
           #TRANS 2611 {} -47575.00
           #TRANS 3041 {} -16200.00
           #TRANS 3041 {1 Nord} -52300.00
           #TRANS 3045 {} -72249.76
           #TRANS 3051 {} -121800.00
        }
        #VER B 80 20211116 "Inbetalningsjournal nr 211" 20211116
        {
           #TRANS 1510 {} -54000.00
           #TRANS 1930 {} 54000.00
        }
        #VER B 81 20211123 "Inbetalningsjournal nr 212" 20211123
        {
           #TRANS 1510 {} -92400.00
           #TRANS 1920 {} 92400.00
        }
        #VER B 82 20211130 "Inbetalningsjournal nr 213" 20211130
        {
           #TRANS 1510 {} -9088.00
           #TRANS 1930 {} 9088.00
        }
        #VER B 83 20211130 "Fakturajournal nr 90" 20211130
        {
           #TRANS 1510 {} 254914.00
           #TRANS 2611 {} -40472.50
           #TRANS 3041 {} -40700.00
           #TRANS 3048 {} -48750.00
           #TRANS 3051 {} -120650.00
           #TRANS 3058 {} -3800.00
           #TRANS 3590 {} -540.00
           #TRANS 3740 {} -1.50
        }
        #VER B 84 20211207 "Inbetalningsjournal nr 214" 20211207
        {
           #TRANS 1510 {} -135249.76
           #TRANS 1930 {} 135249.76
        }
        #VER B 85 20211214 "Inbetalningsjournal nr 215" 20211214
        {
           #TRANS 1510 {} -172500.00
           #TRANS 1920 {} 172500.00
        }
        #VER B 86 20211215 "Fakturajournal nr 91" 20211215
        {
           #TRANS 1510 {} 200073.00
           #TRANS 3740 {} 0.25
           #TRANS 2611 {} -40014.65
           #TRANS 3041 {} -87300.00
           #TRANS 3041 {1 Nord} -2500.00
           #TRANS 3051 {} -70258.60
        }
        #VER B 87 20211221 "Inbetalningsjournal nr 216" 20211221
        {
           #TRANS 1510 {} -61663.00
           #TRANS 1930 {} 61663.00
        }
        #VER B 88 20211230 "Fakturajournal nr 92" 20211230
        {
           #TRANS 1510 {} 655283.35
           #TRANS 3740 {} 0.25
           #TRANS 2611 {} -97481.25
           #TRANS 3041 {} -281775.00
           #TRANS 3045 {} -66174.88
           #TRANS 3048 {} -43200.00
           #TRANS 3051 {} -108150.00
           #TRANS 3055 {} -39501.29
           #TRANS 3058 {} -19000.00
           #TRANS 3740 {} -1.18
        }
        #VER C 1 20210102 "Utbetalningsjournal nr 155" 20210102
        {
           #TRANS 1930 {} -113245.00
           #TRANS 2440 {} 113245.00
        }
        #VER C 2 20210107 "Utbetalningsjournal nr 156" 20210107
        {
           #TRANS 1930 {} -14503.00
           #TRANS 2440 {} 14503.00
        }
        #VER C 3 20210112 "Utbetalningsjournal nr 157" 20210112
        {
           #TRANS 1930 {} -9503.00
           #TRANS 2440 {} 9503.00
        }
        #VER C 4 20210114 "Utbetalningsjournal nr 158" 20210114
        {
           #TRANS 1930 {} -203289.70
           #TRANS 2440 {} 203289.70
        }
        #VER C 5 20210114 "Leverant�rsfakturajournal nr 67" 20210114
        {
           #TRANS 1710 {} 51000.00
           #TRANS 2641 {} 37755.20
           #TRANS 4010 {} 90500.00
           #TRANS 5611 {} 2496.00
           #TRANS 5615 {} 3825.00
           #TRANS 6212 {} 1724.80
           #TRANS 6530 {} 3600.00
           #TRANS 2440 {} -190901.00
        }
        #VER C 6 20210119 "Utbetalningsjournal nr 159" 20210119
        {
           #TRANS 1930 {} -58647.66
           #TRANS 2440 {} 57521.60
           #TRANS 3960 {} 1126.06
        }
        #VER C 7 20210129 "Leverant�rsfakturajournal nr 68" 20210129
        {
           #TRANS 2641 {} 10362.00
           #TRANS 4010 {} 39000.00
           #TRANS 5020 {} 2000.00
           #TRANS 5090 {} 448.00
           #TRANS 2440 {} -51810.00
        }
        #VER C 8 20210205 "Utbetalningsjournal nr 160" 20210205
        {
           #TRANS 1930 {} -10906.00
           #TRANS 2440 {} 10906.00
        }
        #VER C 9 20210209 "Utbetalningsjournal nr 161" 20210209
        {
           #TRANS 1930 {} -66870.00
           #TRANS 2440 {} 66870.00
        }
        #VER C 10 20210213 "Utbetalningsjournal nr 162" 20210213
        {
           #TRANS 1930 {} -113125.00
           #TRANS 2440 {} 113125.00
        }
        #VER C 11 20210213 "Leverant�rsfakturajournal nr 69" 20210213
        {
           #TRANS 1221 {} 96600.00
           #TRANS 2641 {} 27796.20
           #TRANS 5611 {} 3655.20
           #TRANS 5613 {} 4480.00
           #TRANS 5615 {} 4320.00
           #TRANS 5930 {} 3120.00
           #TRANS 6212 {} 1409.60
           #TRANS 2440 {} -141381.00
        }
        #VER C 12 20210220 "Utbetalningsjournal nr 163" 20210220
        {
           #TRANS 1930 {} -51250.00
           #TRANS 2440 {} 51250.00
        }
        #VER C 13 20210227 "Utbetalningsjournal nr 164" 20210227
        {
           #TRANS 1930 {} -560.00
           #TRANS 2440 {} 560.00
        }
        #VER C 14 20210227 "Leverant�rsfakturajournal nr 70" 20210227
        {
           #TRANS 2641 {} 60695.00
           #TRANS 4010 {} 240780.00
           #TRANS 6310 {} 4800.00
           #TRANS 6530 {} 2000.00
           #TRANS 2440 {} -308275.00
        }
        #VER C 15 20210305 "Utbetalningsjournal nr 165" 20210305
        {
           #TRANS 1930 {} -4800.00
           #TRANS 2440 {} 4800.00
        }
        #VER C 16 20210307 "Utbetalningsjournal nr 166" 20210307
        {
           #TRANS 1930 {} -4569.00
           #TRANS 2440 {} 4569.00
        }
        #VER C 17 20210309 "Utbetalningsjournal nr 167" 20210309
        {
           #TRANS 1930 {} -122512.00
           #TRANS 2440 {} 122512.00
        }
        #VER C 18 20210312 "Utbetalningsjournal nr 168" 20210312
        {
           #TRANS 1930 {} -3900.00
           #TRANS 2440 {} 3900.00
        }
        #VER C 19 20210316 "Utbetalningsjournal nr 169" 20210316
        {
           #TRANS 1930 {} -5600.00
           #TRANS 2440 {} 5600.00
        }
        #VER C 20 20210316 "Leverant�rsfakturajournal nr 71" 20210316
        {
           #TRANS 2641 {} 1321.40
           #TRANS 2645 {} 3731.43
           #TRANS 4010 {} 6452.60
           #TRANS 4056 {} 14925.71
           #TRANS 5020 {} 1022.40
           #TRANS 5090 {} 288.00
           #TRANS 5615 {} 4320.00
           #TRANS 6211 {} 2055.20
           #TRANS 7570 {} 5600.00
           #TRANS 2440 {} -35985.31
           #TRANS 2615 {} -3731.43
        }
        #VER C 21 20210318 "Utbetalningsjournal nr 170" 20210318
        {
           #TRANS 1930 {} -300975.00
           #TRANS 2440 {} 300975.00
        }
        #VER C 22 20210322 "Utbetalningsjournal nr 171" 20210322
        {
           #TRANS 1930 {} -4800.00
           #TRANS 2440 {} 4800.00
        }
        #VER C 23 20210330 "Utbetalningsjournal nr 172" 20210330
        {
           #TRANS 1930 {} -2500.00
           #TRANS 2440 {} 2500.00
        }
        #VER C 24 20210331 "Leverant�rsfakturajournal nr 72" 20210331
        {
           #TRANS 2641 {} 68728.60
           #TRANS 2645 {} 4807.13
           #TRANS 4010 {} 270216.00
           #TRANS 4056 {} 19228.52
           #TRANS 5460 {} 7351.20
           #TRANS 5611 {} 2855.20
           #TRANS 5612 {} 1200.00
           #TRANS 6970 {} 360.00
           #TRANS 2440 {} -369939.52
           #TRANS 2615 {} -4807.13
        }
        #VER C 25 20210402 "Utbetalningsjournal nr 173" 20210402
        {
           #TRANS 1930 {} -7369.00
           #TRANS 2440 {} 7369.00
        }
        #VER C 26 20210415 "Utbetalningsjournal nr 174" 20210415
        {
           #TRANS 1930 {} -28616.31
           #TRANS 2440 {} 28616.31
        }
        #VER C 27 20210415 "Leverant�rsfakturajournal nr 73" 20210415
        {
           #TRANS 1710 {} 51000.00
           #TRANS 2641 {} 14192.00
           #TRANS 3740 {} 0.50
           #TRANS 4010 {} 149862.50
           #TRANS 5611 {} 2848.00
           #TRANS 5615 {} 4320.00
           #TRANS 6110 {} 1000.00
           #TRANS 2440 {} -223223.00
        }
        #VER C 28 20210407 "Utbetalningsjournal nr 175" 20210407
        {
           #TRANS 1930 {} -1200.00
           #TRANS 2440 {} 1200.00
        }
        #VER C 29 20210417 "Utbetalningsjournal nr 176" 20210417
        {
           #TRANS 1930 {} -198106.00
           #TRANS 2440 {} 198106.00
        }
        #VER C 30 20210420 "Utbetalningsjournal nr 177" 20210420
        {
           #TRANS 1930 {} -7158.00
           #TRANS 2440 {} 7158.00
        }
        #VER C 31 20210426 "Utbetalningsjournal nr 178" 20210426
        {
           #TRANS 1930 {} -25094.52
           #TRANS 2440 {} 25094.52
        }
        #VER C 32 20210429 "Utbetalningsjournal nr 179" 20210429
        {
           #TRANS 1930 {} -138381.00
           #TRANS 2440 {} 138381.00
        }
        #VER C 33 20210430 "Leverant�rsfakturajournal nr 74" 20210430
        {
           #TRANS 2641 {} 72140.90
           #TRANS 2645 {} 15774.61
           #TRANS 3740 {} 0.50
           #TRANS 4010 {} 285150.00
           #TRANS 4056 {} 63098.45
           #TRANS 6211 {} 1255.20
           #TRANS 6212 {} 2158.40
           #TRANS 2440 {} -423803.45
           #TRANS 2615 {} -15774.61
        }
        #VER C 34 20210504 "Utbetalningsjournal nr 180" 20210504
        {
           #TRANS 1930 {} -67310.00
           #TRANS 2440 {} 67310.00
        }
        #VER C 35 20210511 "Utbetalningsjournal nr 181" 20210511
        {
           #TRANS 1930 {} -154663.00
           #TRANS 2440 {} 154663.00
        }
        #VER C 36 20210514 "Utbetalningsjournal nr 182" 20210514
        {
           #TRANS 1930 {} -1250.00
           #TRANS 2440 {} 1250.00
        }
        #VER C 37 20210515 "Leverant�rsfakturajournal nr 75" 20210515
        {
           #TRANS 2641 {} 1342.80
           #TRANS 5611 {} 1516.87
           #TRANS 5613 {} 1427.13
           #TRANS 5615 {} 4320.00
           #TRANS 6212 {} 687.20
           #TRANS 6310 {} 3500.00
           #TRANS 2440 {} -12794.00
        }
        #VER C 38 20210520 "Utbetalningsjournal nr 183" 20210520
        {
           #TRANS 1930 {} -419536.45
           #TRANS 2440 {} 419536.45
        }
        #VER C 39 20210525 "Utbetalningsjournal nr 184" 20210525
        {
           #TRANS 1930 {} -2698.00
           #TRANS 2440 {} 2698.00
        }
        #VER C 40 20210529 "Leverant�rsfakturajournal nr 76" 20210529
        {
           #TRANS 2641 {} 67982.50
           #TRANS 3740 {} 0.50
           #TRANS 4010 {} 269530.00
           #TRANS 5612 {} 1200.00
           #TRANS 6530 {} 2400.00
           #TRANS 2440 {} -341113.00
        }
        #VER C 41 20210603 "Utbetalningsjournal nr 185" 20210603
        {
           #TRANS 1930 {} -5204.00
           #TRANS 2440 {} 5204.00
        }
        #VER C 42 20210608 "Utbetalningsjournal nr 186" 20210608
        {
           #TRANS 1930 {} -5559.00
           #TRANS 2440 {} 5559.00
        }
        #VER C 43 20210615 "Utbetalningsjournal nr 187" 20210615
        {
           #TRANS 1930 {} -4800.00
           #TRANS 2440 {} 4800.00
        }
        #VER C 44 20210615 "Leverant�rsfakturajournal nr 77" 20210615
        {
           #TRANS 2641 {} 3691.20
           #TRANS 5410 {} 2000.00
           #TRANS 5611 {} 1840.00
           #TRANS 5615 {} 4320.00
           #TRANS 6211 {} 1004.80
           #TRANS 6420 {} 8000.00
           #TRANS 7570 {} 5000.00
           #TRANS 2440 {} -25856.00
        }
        #VER C 45 20210617 "Utbetalningsjournal nr 188" 20210617
        {
           #TRANS 1930 {} -3000.00
           #TRANS 2440 {} 3000.00
        }
        #VER C 46 20210624 "Utbetalningsjournal nr 189" 20210624
        {
           #TRANS 1930 {} -336913.00
           #TRANS 2440 {} 336913.00
        }
        #VER C 47 20210630 "Leverant�rsfakturajournal nr 78" 20210630
        {
           #TRANS 2641 {} 3271.00
           #TRANS 5020 {} 1248.00
           #TRANS 5090 {} 520.00
           #TRANS 5410 {} 4160.00
           #TRANS 5930 {} 2116.00
           #TRANS 6110 {} 5040.00
           #TRANS 2440 {} -16355.00
        }
        #VER C 48 20210706 "Utbetalningsjournal nr 190" 20210706
        {
           #TRANS 1930 {} -8356.00
           #TRANS 2440 {} 8356.00
        }
        #VER C 49 20210715 "Utbetalningsjournal nr 191" 20210715
        {
           #TRANS 1930 {} -17500.00
           #TRANS 2440 {} 17500.00
        }
        #VER C 50 20210715 "Leverant�rsfakturajournal nr 79" 20210715
        {
           #TRANS 1710 {} 51000.00
           #TRANS 2641 {} 14363.80
           #TRANS 5460 {} 7068.88
           #TRANS 5611 {} 2855.20
           #TRANS 5615 {} 4320.00
           #TRANS 5910 {} 680.00
           #TRANS 6212 {} 1000.00
           #TRANS 2440 {} -81287.88
        }
        #VER C 51 20210720 "Utbetalningsjournal nr 192" 20210720
        {
           #TRANS 1930 {} -11500.00
           #TRANS 2440 {} 11500.00
        }
        #VER C 52 20210727 "Utbetalningsjournal nr 193" 20210727
        {
           #TRANS 1930 {} -3295.00
           #TRANS 2440 {} 3295.00
        }
        #VER C 53 20210731 "Utbetalningsjournal nr 194" 20210731
        {
           #TRANS 1930 {} -65310.00
           #TRANS 2440 {} 65310.00
        }
        #VER C 54 20210731 "Leverant�rsfakturajournal nr 80" 20210731
        {
           #TRANS 2641 {} 103643.25
           #TRANS 4010 {} 410125.00
           #TRANS 6420 {} 4000.00
           #TRANS 6970 {} 448.00
           #TRANS 2440 {} -518216.00
           #TRANS 3740 {} -0.25
        }
        #VER C 55 20210803 "Utbetalningsjournal nr 195" 20210803
        {
           #TRANS 1930 {} -10637.88
           #TRANS 2440 {} 10637.88
        }
        #VER C 56 20210810 "Utbetalningsjournal nr 196" 20210810
        {
           #TRANS 1930 {} -2100.00
           #TRANS 2440 {} 2100.00
        }
        #VER C 57 20210814 "Utbetalningsjournal nr 197" 20210814
        {
           #TRANS 1930 {} -4800.00
           #TRANS 2440 {} 4800.00
        }
        #VER C 58 20210814 "Leverant�rsfakturajournal nr 81" 20210814
        {
           #TRANS 2641 {} 1780.00
           #TRANS 5611 {} 1840.00
           #TRANS 5612 {} 2450.00
           #TRANS 6212 {} 960.00
           #TRANS 6420 {} 4320.00
           #TRANS 2440 {} -11350.00
        }
        #VER C 59 20210821 "Utbetalningsjournal nr 198" 20210821
        {
           #TRANS 1930 {} -513216.00
           #TRANS 2440 {} 513216.00
        }
        #VER C 60 20210831 "Utbetalningsjournal nr 199" 20210831
        {
           #TRANS 1930 {} -5000.00
           #TRANS 2440 {} 5000.00
        }
        #VER C 61 20210828 "Leverant�rsfakturajournal nr 82" 20210828
        {
           #TRANS 2641 {} 2354.00
           #TRANS 5090 {} 416.00
           #TRANS 5613 {} 4200.00
           #TRANS 5615 {} 4320.00
           #TRANS 6530 {} 2880.00
           #TRANS 2440 {} -14170.00
        }
        #VER C 62 20210902 "Utbetalningsjournal nr 200" 20210902
        {
           #TRANS 1930 {} -5950.00
           #TRANS 2440 {} 5950.00
        }
        #VER C 63 20210911 "Utbetalningsjournal nr 201" 20210911
        {
           #TRANS 1930 {} -5400.00
           #TRANS 2440 {} 5400.00
        }
        #VER C 64 20210915 "Leverant�rsfakturajournal nr 83" 20210915
        {
           #TRANS 2641 {} 2495.40
           #TRANS 4010 {} 6942.65
           #TRANS 5090 {1 Nord} 4345.60
           #TRANS 5420 {1 Nord 6 0001} 1840.00
           #TRANS 5611 {} 1431.20
           #TRANS 5930 {} 2364.80
           #TRANS 7570 {} 4500.00
           #TRANS 2440 {} -23919.65
        }
        #VER C 65 20210916 "Utbetalningsjournal nr 202" 20210916
        {
           #TRANS 1930 {} -8400.00
           #TRANS 2440 {} 8400.00
        }
        #VER C 66 20210921 "Utbetalningsjournal nr 203" 20210921
        {
           #TRANS 1930 {} -5250.00
           #TRANS 2440 {} 5250.00
        }
        #VER C 67 20210928 "Utbetalningsjournal nr 204" 20210928
        {
           #TRANS 1930 {} -520.00
           #TRANS 2440 {} 520.00
        }
        #VER C 68 20210930 "Leverant�rsfakturajournal nr 84" 20210930
        {
           #TRANS 2440 {} 800.00
           #TRANS 2641 {} 42115.25
           #TRANS 2645 {} 3154.92
           #TRANS 4010 {} 161945.00
           #TRANS 4056 {} 12619.69
           #TRANS 5613 {} 2720.00
           #TRANS 5615 {} 4320.00
           #TRANS 6970 {} 1876.00
           #TRANS 2440 {} -225595.69
           #TRANS 2615 {} -3154.92
           #TRANS 2641 {} -160.00
           #TRANS 3740 {} -0.25
           #TRANS 5420 {1 Nord 6 0001} -640.00
        }
        #VER C 69 20211005 "Utbetalningsjournal nr 205" 20211005
        {
           #TRANS 1930 {} -7789.00
           #TRANS 2440 {} 7789.00
        }
        #VER C 70 20211009 "Utbetalningsjournal nr 206" 20211009
        {
           #TRANS 1930 {} -8388.00
           #TRANS 2440 {} 8388.00
        }
        #VER C 71 20211015 "Utbetalningsjournal nr 207" 20211015
        {
           #TRANS 1930 {} -6942.65
           #TRANS 2440 {} 6942.65
        }
        #VER C 72 20211016 "Leverant�rsfakturajournal nr 85" 20211016
        {
           #TRANS 1710 {} 51000.00
           #TRANS 2641 {} 14514.80
           #TRANS 5611 {} 1884.80
           #TRANS 5615 {} 4320.00
           #TRANS 6212 {} 1254.40
           #TRANS 6530 {} 2000.00
           #TRANS 2440 {} -74974.00
        }
        #VER C 73 20211020 "Utbetalningsjournal nr 208" 20211020
        {
           #TRANS 1930 {} -207231.00
           #TRANS 2440 {} 207231.00
        }
        #VER C 74 20211026 "Utbetalningsjournal nr 209" 20211026
        {
           #TRANS 1930 {} -18364.69
           #TRANS 2440 {} 18364.69
        }
        #VER C 75 20211029 "Leverant�rsfakturajournal nr 86" 20211029
        {
           #TRANS 2641 {} 19308.00
           #TRANS 4010 {} 70750.00
           #TRANS 6110 {} 4480.00
           #TRANS 6211 {} 2000.00
           #TRANS 2440 {} -96538.00
        }
        #VER C 76 20211104 "Utbetalningsjournal nr 210" 20211104
        {
           #TRANS 1930 {} -67674.00
           #TRANS 2440 {} 67674.00
        }
        #VER C 77 20211109 "Utbetalningsjournal nr 211" 20211109
        {
           #TRANS 1930 {} -2500.00
           #TRANS 2440 {} 2500.00
        }
        #VER C 78 20211113 "Leverant�rsfakturajournal nr 87" 20211113
        {
           #TRANS 2641 {} 2731.60
           #TRANS 5020 {} 2848.00
           #TRANS 5611 {} 2158.40
           #TRANS 5615 {} 4320.00
           #TRANS 6420 {} 4000.00
           #TRANS 2440 {} -16058.00
        }
        #VER C 79 20211118 "Utbetalningsjournal nr 212" 20211118
        {
           #TRANS 1930 {} -93238.00
           #TRANS 2440 {} 93238.00
        }
        #VER C 80 20211130 "Utbetalningsjournal nr 213" 20211130
        {
           #TRANS 1930 {} -8100.00
           #TRANS 2440 {} 8100.00
        }
        #VER C 81 20211130 "Leverant�rsfakturajournal nr 88" 20211130
        {
           #TRANS 2641 {} 68164.20
           #TRANS 4010 {} 265073.00
           #TRANS 5410 {} 10476.00
           #TRANS 6212 {} 1884.80
           #TRANS 2440 {} -345598.00
        }
        #VER C 82 20211204 "Utbetalningsjournal nr 214" 20211204
        {
           #TRANS 1930 {} -6258.00
           #TRANS 2440 {} 6258.00
        }
        #VER C 83 20211214 "Utbetalningsjournal nr 215" 20211214
        {
           #TRANS 1930 {} -9800.00
           #TRANS 2440 {} 9800.00
        }
        #VER C 84 20211215 "Leverant�rsfakturajournal nr 89" 20211215
        {
           #TRANS 2641 {} 32192.60
           #TRANS 2645 {} 4593.79
           #TRANS 4010 {} 120000.00
           #TRANS 4056 {} 18375.17
           #TRANS 5930 {} 2316.00
           #TRANS 6110 {} 1254.40
           #TRANS 6211 {} 2800.00
           #TRANS 6310 {} 2000.00
           #TRANS 6530 {} 2400.00
           #TRANS 7570 {} 15000.00
           #TRANS 2440 {} -196338.17
           #TRANS 2615 {} -4593.79
        }
        #VER C 85 20211221 "Utbetalningsjournal nr 216" 20211221
        {
           #TRANS 1930 {} -9251.00
           #TRANS 2440 {} 9251.00
        }
        #VER C 86 20211228 "Utbetalningsjournal nr 217" 20211228
        {
           #TRANS 1930 {} -152791.00
           #TRANS 2440 {} 152791.00
        }
        #VER C 87 20211230 "Utbetalningsjournal nr 218" 20211230
        {
           #TRANS 1930 {} -183556.00
           #TRANS 2440 {} 183556.00
        }
        #VER C 88 20211230 "Leverant�rsfakturajournal nr 90" 20211230
        {
           #TRANS 2440 {} 1000.00
           #TRANS 2641 {} 1897.60
           #TRANS 2645 {} 5742.24
           #TRANS 4010 {} 4778.00
           #TRANS 4056 {} 22968.96
           #TRANS 5020 {} 1704.00
           #TRANS 5613 {} 1886.40
           #TRANS 5615 {} 4320.00
           #TRANS 6212 {} 2080.00
           #TRANS 2440 {} -39634.96
           #TRANS 2615 {} -5742.24
           #TRANS 2641 {} -200.00
           #TRANS 6530 {} -800.00
        }
        #VER D 1 20210131 "Lagerf�r�ndringsjournal nr 44" 20210131
        {
           #TRANS 1400 {} 36050.00
           #TRANS 4990 {} 209175.00
           #TRANS 4990 {1 Nord} 2590.00
           #TRANS 1400 {} -114755.00
           #TRANS 4990 {} -133060.00
        }
        #VER D 2 20210227 "Lagerf�r�ndringsjournal nr 45" 20210227
        {
           #TRANS 1400 {} 46680.00
           #TRANS 4990 {} 103293.10
           #TRANS 4990 {1 Nord} 130050.00
           #TRANS 4990 {1 Syd} 62625.00
           #TRANS 1400 {} -97243.10
           #TRANS 4990 {} -245405.00
        }
        #VER D 3 20210331 "Lagerf�r�ndringsjournal nr 46" 20210331
        {
           #TRANS 1400 {} 166165.25
           #TRANS 4990 {} 240702.25
           #TRANS 4990 {1 Nord} 13226.00
           #TRANS 1400 {} -104700.00
           #TRANS 4990 {} -315393.50
        }
        #VER D 4 20210430 "Lagerf�r�ndringsjournal nr 47" 20210430
        {
           #TRANS 1400 {} 278351.00
           #TRANS 4990 {} 218333.00
           #TRANS 1400 {} -25083.98
           #TRANS 4990 {} -471600.02
        }
        #VER D 5 20210529 "Lagerf�r�ndringsjournal nr 48" 20210529
        {
           #TRANS 1400 {} 104230.00
           #TRANS 4990 {} 196112.00
           #TRANS 4990 {1 Syd} 465.90
           #TRANS 1400 {} -27627.90
           #TRANS 4990 {} -273180.00
        }
        #VER D 6 20210630 "Lagerf�r�ndringsjournal nr 49" 20210630
        {
           #TRANS 4990 {} 187106.60
           #TRANS 4990 {1 Nord} 90117.00
           #TRANS 1400 {} -273000.75
           #TRANS 4990 {} -4222.85
        }
        #VER D 7 20210731 "Lagerf�r�ndringsjournal nr 50" 20210731
        {
           #TRANS 1400 {} 320280.00
           #TRANS 4990 {} 109993.30
           #TRANS 4990 {1 Nord} 655.00
           #TRANS 1400 {} -17918.30
           #TRANS 4990 {} -413010.00
        }
        #VER D 8 20210831 "Lagerf�r�ndringsjournal nr 51" 20210831
        {
           #TRANS 4990 {} 257476.80
           #TRANS 1400 {} -253635.40
           #TRANS 4990 {} -3841.40
        }
        #VER D 9 20210930 "Lagerf�r�ndringsjournal nr 52" 20210930
        {
           #TRANS 1400 {} 118688.20
           #TRANS 4990 {} 219455.51
           #TRANS 1400 {} -153636.00
           #TRANS 4990 {} -184507.71
        }
        #VER D 10 20211031 "Lagerf�r�ndringsjournal nr 53" 20211031
        {
           #TRANS 1400 {} 70750.00
           #TRANS 4990 {} 69406.90
           #TRANS 1400 {} -68245.56
           #TRANS 4990 {} -71911.34
        }
        #VER D 11 20211130 "Lagerf�r�ndringsjournal nr 54" 20211130
        {
           #TRANS 1400 {} 147023.30
           #TRANS 4990 {} 196492.00
           #TRANS 1400 {} -75922.00
           #TRANS 4990 {} -267593.30
        }
        #VER D 12 20211231 "Lagerf�r�ndringsjournal nr 55" 20211231
        {
           #TRANS 1400 {} 88790.50
           #TRANS 4990 {} 169934.68
           #TRANS 1400 {} -89452.75
           #TRANS 4990 {} -169272.43
        }
        #VER E 1 20210112 "Skattedeklaration januari" 20210310
        {
           #TRANS 2940 {} 36021.97
           #TRANS 2710 {} 29254.00
           #TRANS 3740 {} -0.97
           #TRANS 2510 {} 17500.00
           #TRANS 2650 {} 10067.00
           #TRANS 1930 {} -92842.00
        }
        #VER E 2 20210131 "Momsrapport 2021-01-01 - 2021-01-31" 20210131
        {
           #TRANS 2611 {} 87095.90
           #TRANS 2641 {} -48337.08
           #TRANS 2650 {} -38758.00
           #TRANS 3740 {} -0.82
        }
        #VER E 3 20210212 "Skattedeklaration februari" 20210206
        {
           #TRANS 2940 {} 34932.42
           #TRANS 2710 {} 34382.00
           #TRANS 3740 {} -1.42
           #TRANS 2510 {} 17500.00
           #TRANS 2650 {} 62441.00
           #TRANS 1930 {} -149254.00
        }
        #VER E 4 20210228 "Momsrapport 2021-02-01 - 2021-02-28" 20210228
        {
           #TRANS 2611 {} 125327.50
           #TRANS 2641 {} -88956.49
           #TRANS 2650 {} -36371.00
           #TRANS 3740 {} -0.01
        }
        #VER E 5 20210312 "Skattedeklaration mars" 20210314
        {
           #TRANS 2940 {} 33824.73
           #TRANS 2710 {} 32796.00
           #TRANS 3740 {} -0.73
           #TRANS 2510 {} 17500.00
           #TRANS 2650 {} 38758.00
           #TRANS 1930 {} -122878.00
        }
        #VER E 6 20210331 "Momsrapport 2021-03-01 - 2021-03-31" 20210331
        {
           #TRANS 2611 {} 130932.25
           #TRANS 2615 {} 8538.56
           #TRANS 2641 {} -71137.50
           #TRANS 2645 {} -8538.56
           #TRANS 2650 {} -59794.00
           #TRANS 3740 {} -0.75
        }
        #VER E 7 20210414 "Skattedeklaration april" 20210728
        {
           #TRANS 2940 {} 34259.53
           #TRANS 2710 {} 33201.00
           #TRANS 3740 {} -1.53
           #TRANS 2650 {} 36371.00
           #TRANS 2510 {} 17500.00
           #TRANS 1930 {} -121330.00
        }
        #VER E 8 20210430 "Momsrapport 2021-04-01 - 2021-04-30" 20210430
        {
           #TRANS 2611 {} 96985.00
           #TRANS 2615 {} 15774.61
           #TRANS 2641 {} -86332.90
           #TRANS 2645 {} -15774.61
           #TRANS 2650 {} -10652.00
           #TRANS 3740 {} -0.10
        }
        #VER E 9 20210512 "Skattedeklaration maj" 20210516
        {
           #TRANS 2940 {} 35276.71
           #TRANS 2710 {} 27812.00
           #TRANS 3740 {} -1.71
           #TRANS 2650 {} 59794.00
           #TRANS 2510 {} 17500.00
           #TRANS 1930 {} -140381.00
        }
        #VER E 10 20210531 "Momsrapport 2021-05-01 - 2021-05-31" 20210531
        {
           #TRANS 2611 {} 96051.25
           #TRANS 2641 {} -69537.05
           #TRANS 2650 {} -26514.00
           #TRANS 3740 {} -0.20
        }
        #VER E 11 20210612 "Skattedeklaration juni" 20210615
        {
           #TRANS 2940 {} 34445.59
           #TRANS 2710 {} 26685.00
           #TRANS 3740 {} -0.59
           #TRANS 2650 {} 10652.00
           #TRANS 2510 {} 17500.00
           #TRANS 1930 {} -89282.00
        }
        #VER E 12 20210630 "Momsrapport 2021-06-01 - 2021-06-30" 20210630
        {
           #TRANS 2611 {} 106187.50
           #TRANS 3740 {} 0.09
           #TRANS 2641 {} -7158.59
           #TRANS 2650 {} -99029.00
        }
        #VER E 13 20210713 "Skattedeklaration juli" 20210715
        {
           #TRANS 2940 {} 34277.09
           #TRANS 2710 {} 27317.00
           #TRANS 3740 {} -1.09
           #TRANS 2650 {} 26514.00
           #TRANS 2510 {} 17500.00
           #TRANS 1930 {} -105607.00
        }
        #VER E 14 20210731 "Momsrapport 2021-07-01 - 2021-07-31" 20210731
        {
           #TRANS 1650 {} 63036.00
           #TRANS 2611 {} 55000.50
           #TRANS 2641 {} -118036.25
           #TRANS 3740 {} -0.25
        }
        #VER E 15 20210817 "Skattedeklaration augusti" 20210814
        {
           #TRANS 2940 {} 38273.97
           #TRANS 2710 {} 31287.00
           #TRANS 3740 {} -0.97
           #TRANS 2650 {} 99029.00
           #TRANS 2510 {} 17500.00
           #TRANS 1930 {} -186089.00
        }
        #VER E 16 20210831 "Momsrapport 2021-08-01 - 2021-08-31" 20210831
        {
           #TRANS 2611 {} 119406.25
           #TRANS 3740 {} 0.26
           #TRANS 2641 {} -4639.51
           #TRANS 2650 {} -114767.00
        }
        #VER E 17 20210914 "Skattedeklaration september" 20210730
        {
           #TRANS 2940 {} 38346.52
           #TRANS 2710 {} 31829.00
           #TRANS 3740 {} -1.52
           #TRANS 1650 {} -63036.00
           #TRANS 2510 {} 17500.00
           #TRANS 1930 {} -24638.00
        }
        #VER E 18 20210930 "Momsrapport 2021-09-01 - 2021-09-30" 20210930
        {
           #TRANS 2611 {} 90818.80
           #TRANS 2615 {} 3154.92
           #TRANS 2641 {} -44850.65
           #TRANS 2645 {} -3154.92
           #TRANS 2650 {} -45967.00
           #TRANS 3740 {} -1.15
        }
        #VER E 19 20211012 "Skattedeklaration oktober" 20211014
        {
           #TRANS 2650 {} 114767.00
           #TRANS 2510 {} 17500.00
           #TRANS 2940 {} 36155.34
           #TRANS 2710 {} 29273.00
           #TRANS 3740 {} -1.34
           #TRANS 1930 {} -197694.00
        }
        #VER E 20 20211031 "Momsrapport 2021-10-01 - 2021-10-31" 20211031
        {
           #TRANS 2611 {} 37522.50
           #TRANS 2641 {} -34187.26
           #TRANS 2650 {} -3335.00
           #TRANS 3740 {} -0.24
        }
        #VER E 21 20211112 "Skattedeklaration november" 20211113
        {
           #TRANS 2940 {} 34672.97
           #TRANS 2710 {} 27210.00
           #TRANS 3740 {} -0.97
           #TRANS 2650 {} 45967.00
           #TRANS 2510 {} 17500.00
           #TRANS 1930 {} -125349.00
        }
        #VER E 22 20211130 "Momsrapport 2021-11-01 - 2021-11-30" 20211130
        {
           #TRANS 2611 {} 88047.50
           #TRANS 3740 {} 0.08
           #TRANS 2641 {} -71564.58
           #TRANS 2650 {} -16483.00
        }
        #VER E 23 20211214 "Skattedeklaration december" 20211130
        {
           #TRANS 2940 {} 34921.74
           #TRANS 2710 {} 26770.00
           #TRANS 3740 {} -0.74
           #TRANS 2650 {} 3335.00
           #TRANS 2510 {} 17500.00
           #TRANS 1930 {} -82526.00
        }
        #VER E 24 20211231 "Momsrapport 2021-12-01 - 2021-12-31" 20211231
        {
           #TRANS 2611 {} 137495.90
           #TRANS 2615 {} 10336.03
           #TRANS 2641 {} -34603.86
           #TRANS 2645 {} -10336.03
           #TRANS 2650 {} -102892.00
           #TRANS 3740 {} -0.04
        }
        #VER F 1 20210123 "L�nek�rning: 2021-01-23 - Ordinarie l�n" 20210310
        {
           #TRANS 1930 {} -73519.00
           #TRANS 2710 {} -34382.00
           #TRANS 2794 {} -1825.72
           #TRANS 2920 {} -3289.80
           #TRANS 2940 {} -34932.42
           #TRANS 2941 {} -957.19
           #TRANS 3740 {} 2.76
           #TRANS 7010 {1 Nord} 30962.80 20210123 "" 216
           #TRANS 7010 {1 Syd} 24328.00 20210123 "" 208
           #TRANS 7082 {1 Nord} 3477.96 20210123 "" 24
           #TRANS 7082 {1 Syd} 2300.88 20210123 "" 16
           #TRANS 7090 {1 Nord} 237.57
           #TRANS 7090 {1 Syd} 618.48
           #TRANS 7210 {1 Nord} 28125.30 20210123 "" 144
           #TRANS 7210 {1 Syd} 17183.72 20210123 "" 104
           #TRANS 7285 {1 Nord} 3345.30 20210123 "" 32
           #TRANS 7290 {1 Nord} 371.70
           #TRANS 7290 {1 Syd} 2062.05
           #TRANS 7385 {1 Nord} 3734.60
           #TRANS 7399 {1 Nord} -3734.60
           #TRANS 7510 {1 Nord} 21803.71
           #TRANS 7510 {1 Syd} 12509.11
           #TRANS 7519 {1 Nord} 191.43
           #TRANS 7519 {1 Syd} 765.76
           #TRANS 7560 {1 Syd} 619.60
        }
        #VER F 2 20210225 "L�nek�rning: 2021-02-25 - Ordinarie l�n" 20210310
        {
           #TRANS 1930 {} -71969.00
           #TRANS 2710 {} -32796.00
           #TRANS 2794 {} -1741.83
           #TRANS 2920 {} -12224.32
           #TRANS 2940 {} -33824.73
           #TRANS 2941 {} -3773.98
           #TRANS 3740 {} 1.80
           #TRANS 7010 {1 Nord} 31971.27 20210225 "" 227.5
           #TRANS 7010 {1 Syd} 22860.00 20210225 "" 195
           #TRANS 7081 {1 Nord} 1801.92 20210225 "" 16
           #TRANS 7090 {1 Nord} 3836.55
           #TRANS 7090 {1 Syd} 2743.20
           #TRANS 7210 {1 Nord} 30975.00 20210225 "" 160
           #TRANS 7210 {1 Syd} 17103.72 20210225 "" 110
           #TRANS 7281 {1 Syd} 1793.12 20210225 "" 16
           #TRANS 7290 {1 Nord} 3717.00
           #TRANS 7290 {1 Syd} 1927.57
           #TRANS 7385 {1 Nord} 3062.60
           #TRANS 7399 {1 Nord} -3062.60
           #TRANS 7510 {1 Nord} 21262.28
           #TRANS 7510 {1 Syd} 12020.30
           #TRANS 7519 {1 Nord} 2373.33
           #TRANS 7519 {1 Syd} 1400.65
           #TRANS 7560 {1 Syd} 542.15
        }
        #VER F 3 20210325 "L�nek�rning: 2021-03-25 - Ordinarie l�n" 20210314
        {
           #TRANS 1930 {} -71843.00
           #TRANS 2710 {} -33201.00
           #TRANS 2794 {} -1792.79
           #TRANS 2920 {} -2373.32
           #TRANS 2940 {} -34259.53
           #TRANS 2941 {} -721.81
           #TRANS 3740 {} 2.24
           #TRANS 7010 {1 Nord} 27564.20 20210325 "" 216
           #TRANS 7010 {1 Syd} 21699.00 20210325 "" 184.5
           #TRANS 7082 {1 Nord} 6195.95 20210325 "" 40
           #TRANS 7090 {1 Nord} -2590.84
           #TRANS 7090 {1 Syd} 2603.88
           #TRANS 7210 {1 Nord} 30975.00 20210325 "" 176
           #TRANS 7210 {1 Syd} 16074.18 20210325 "" 120
           #TRANS 7285 {1 Syd} 3687.72 20210325 "" 48
           #TRANS 7290 {1 Nord} 3717.00
           #TRANS 7290 {1 Syd} -1356.72
           #TRANS 7321 {1 Nord} 546.00
           #TRANS 7331 {1 Syd} 92.50
           #TRANS 7385 {1 Nord} 3725.00
           #TRANS 7399 {1 Nord} -3725.00
           #TRANS 7510 {1 Nord} 21431.63
           #TRANS 7510 {1 Syd} 12634.27
           #TRANS 7519 {1 Nord} 353.84
           #TRANS 7519 {1 Syd} 367.97
           #TRANS 7560 {1 Syd} 193.63
        }
        #VER F 4 20210424 "L�nek�rning: 2021-04-24 - Ordinarie l�n" 20210721
        {
           #TRANS 1930 {} -80447.00
           #TRANS 2710 {} -27812.00
           #TRANS 2794 {} -1809.85
           #TRANS 2920 {} -6654.17
           #TRANS 2940 {} -35276.71
           #TRANS 2941 {} -2044.86
           #TRANS 3740 {} 2.34
           #TRANS 7010 {1 Nord} 25340.32 20210424 "" 176
           #TRANS 7010 {1 Syd} 25148.00 20210424 "" 216
           #TRANS 7081 {1 Nord} 900.96 20210424 "" 8
           #TRANS 7082 {1 Nord} 6195.95 20210424 "" 40
           #TRANS 7090 {1 Nord} -2411.59
           #TRANS 7090 {1 Syd} 3017.76
           #TRANS 7210 {1 Nord} 30975.00 20210424 "" 160
           #TRANS 7210 {1 Syd} 21506.28 20210424 "" 148
           #TRANS 7290 {1 Nord} 3717.00
           #TRANS 7290 {1 Syd} 2331.00
           #TRANS 7385 {1 Nord} 3665.00
           #TRANS 7399 {1 Nord} -3665.00
           #TRANS 7510 {1 Nord} 21000.26
           #TRANS 7510 {1 Syd} 13904.69
           #TRANS 7519 {1 Nord} 410.16
           #TRANS 7519 {1 Syd} 1634.70
           #TRANS 7560 {1 Syd} 371.76
        }
        #VER F 5 20210525 "L�nek�rning: 2021-05-25 - Ordinarie l�n" 20210727
        {
           #TRANS 1930 {} -78814.00
           #TRANS 2710 {} -26685.00
           #TRANS 2794 {} -1797.53
           #TRANS 2920 {} -12875.52
           #TRANS 2940 {} -34445.59
           #TRANS 2941 {} -4016.81
           #TRANS 3740 {} 0.53
           #TRANS 7010 {1 Nord} 34100.00 20210525 "" 228
           #TRANS 7010 {1 Syd} 22796.00 20210525 "" 191
           #TRANS 7090 {1 Nord} 4092.00
           #TRANS 7090 {1 Syd} 2735.52
           #TRANS 7210 {1 Nord} 30975.00 20210525 "" 152
           #TRANS 7210 {1 Syd} 19425.00 20210525 "" 120
           #TRANS 7290 {1 Nord} 3717.00
           #TRANS 7290 {1 Syd} 2331.00
           #TRANS 7385 {1 Nord} 3267.80
           #TRANS 7399 {1 Nord} -3267.80
           #TRANS 7510 {1 Nord} 21418.70
           #TRANS 7510 {1 Syd} 12794.54
           #TRANS 7519 {1 Nord} 2453.59
           #TRANS 7519 {1 Syd} 1563.22
           #TRANS 7560 {1 Syd} 232.35
        }
        #VER F 6 20210625 "L�nek�rning: 2021-06-25 - Ordinarie l�n" 20210731
        {
           #TRANS 1930 {} -77612.00
           #TRANS 2710 {} -27317.00
           #TRANS 2794 {} -1799.49
           #TRANS 2920 {} 10244.87
           #TRANS 2940 {} -34277.09
           #TRANS 2941 {} 3264.83
           #TRANS 3740 {} 1.45
           #TRANS 7010 {1 Nord} 27144.96 20210625 "" 200
           #TRANS 7010 {1 Syd} 23091.00 20210625 "" 196
           #TRANS 7082 {1 Nord} 6326.00 20210625 "" 40
           #TRANS 7090 {1 Nord} -3068.60
           #TRANS 7090 {1 Syd} 2770.92
           #TRANS 7210 {1 Nord} 18151.35 20210625 "" 96
           #TRANS 7210 {1 Syd} 11580.52 20210625 "" 88
           #TRANS 7281 {1 Syd} 5379.36 20210625 "" 48
           #TRANS 7285 {1 Nord} 15053.85 20210625 "" 144
           #TRANS 7290 {1 Nord} -11336.85
           #TRANS 7290 {1 Syd} 1389.66
           #TRANS 7385 {1 Nord} 3854.60
           #TRANS 7399 {1 Nord} -3854.60
           #TRANS 7510 {1 Nord} 22075.43
           #TRANS 7510 {1 Syd} 11829.90
           #TRANS 7519 {1 Nord} -4526.20
           #TRANS 7519 {1 Syd} 1261.37
           #TRANS 7560 {1 Syd} 371.76
        }
        #VER F 7 20210724 "L�nek�rning: 2021-07-24 - Ordinarie l�n" 20210715
        {
           #TRANS 1930 {} -91788.00
           #TRANS 2710 {} -31287.00
           #TRANS 2794 {} -1873.95
           #TRANS 2920 {} 51320.46
           #TRANS 2940 {} -38273.97
           #TRANS 2941 {} 15690.00
           #TRANS 3740 {} 2.07
           #TRANS 7010 {1 Nord} 22876.00 20210724 "" 196
           #TRANS 7010 {1 Syd} 8968.00 20210724 "" 88
           #TRANS 7082 {1 Nord} 12652.00 20210724 "" 80
           #TRANS 7082 {1 Syd} 26835.78 20210724 "" 168
           #TRANS 7090 {1 Nord} -9906.88
           #TRANS 7090 {1 Syd} -25759.62
           #TRANS 7210 {1 Nord} 28125.30 20210724 "" 168
           #TRANS 7210 {1 Syd} 3787.84 20210724 "" 32
           #TRANS 7285 {1 Nord} 3345.30 20210724 "" 32
           #TRANS 7285 {1 Syd} 18356.66 20210724 "" 224
           #TRANS 7290 {1 Nord} 371.70
           #TRANS 7290 {1 Syd} -16025.66
           #TRANS 7385 {1 Nord} 2907.80
           #TRANS 7399 {1 Nord} -2907.80
           #TRANS 7510 {1 Nord} 21928.84
           #TRANS 7510 {1 Syd} 14534.35
           #TRANS 7519 {1 Nord} -2995.95
           #TRANS 7519 {1 Syd} -12694.05
           #TRANS 7560 {1 Syd} 1810.78
        }
        #VER F 8 20210825 "L�nek�rning: 2021-08-25 - Ordinarie l�n" 20210801
        {
           #TRANS 1930 {} -90870.00
           #TRANS 2710 {} -31829.00
           #TRANS 2794 {} -1851.38
           #TRANS 2920 {} 16596.89
           #TRANS 2940 {} -38346.52
           #TRANS 2941 {} 5444.13
           #TRANS 3740 {} 2.43
           #TRANS 7010 {1 Nord} 26796.91 20210825 "" 187
           #TRANS 7010 {1 Syd} 31360.00 20210825 "" 280
           #TRANS 7082 {1 Nord} 10313.60 20210825 "" 80
           #TRANS 7082 {1 Syd} 3306.54 20210825 "" 24
           #TRANS 7090 {1 Nord} -7097.97
           #TRANS 7090 {1 Syd} 456.66
           #TRANS 7210 {1 Nord} 19576.20 20210825 "" 104
           #TRANS 7210 {1 Syd} 17191.12 20210825 "" 120
           #TRANS 7285 {1 Nord} 13381.20 20210825 "" 128
           #TRANS 7285 {1 Syd} 2622.38 20210825 "" 32
           #TRANS 7290 {1 Nord} -9664.20
           #TRANS 7290 {1 Syd} -291.38
           #TRANS 7385 {1 Nord} 3852.20
           #TRANS 7399 {1 Nord} -3852.20
           #TRANS 7510 {1 Nord} 23140.49
           #TRANS 7510 {1 Syd} 13347.23
           #TRANS 7519 {1 Nord} -5266.67
           #TRANS 7519 {1 Syd} -177.46
           #TRANS 7560 {1 Syd} 1858.80
        }
        #VER F 9 20210925 "L�nek�rning: 2021-09-25 - Ordinarie l�n" 20210730
        {
           #TRANS 1930 {} -86503.00
           #TRANS 2710 {} -29273.00
           #TRANS 2794 {} -1797.78
           #TRANS 2920 {} -1931.96
           #TRANS 2940 {} -36155.34
           #TRANS 2941 {} -377.63
           #TRANS 3740 {} 1.64
           #TRANS 7010 {1 Nord} 27144.96 20210925 "" 212
           #TRANS 7010 {1 Syd} 30392.00 20210925 "" 272
           #TRANS 7081 {1 Nord} 716.32 20210925 "" 8
           #TRANS 7082 {1 Nord} 6326.00 20210925 "" 40
           #TRANS 7082 {1 Syd} 2204.36 20210925 "" 16
           #TRANS 7090 {1 Nord} -3068.60
           #TRANS 7090 {1 Syd} 1574.94
           #TRANS 7210 {1 Nord} 30975.00 20210925 "" 176
           #TRANS 7210 {1 Syd} 17191.12 20210925 "" 128
           #TRANS 7285 {1 Syd} 2622.38 20210925 "" 32
           #TRANS 7290 {1 Nord} 3717.00
           #TRANS 7290 {1 Syd} -291.38
           #TRANS 7385 {1 Nord} 3854.60
           #TRANS 7399 {1 Nord} -3854.60
           #TRANS 7510 {1 Nord} 21599.76
           #TRANS 7510 {1 Syd} 12696.78
           #TRANS 7519 {1 Nord} 203.72
           #TRANS 7519 {1 Syd} 173.91
           #TRANS 7560 {1 Syd} 1858.80
        }
        #VER F 10 20211023 "L�nek�rning: 2021-10-23 - Ordinarie l�n" 20211014
        {
           #TRANS 1930 {} -78339.00
           #TRANS 2710 {} -27210.00
           #TRANS 2794 {} -1797.53
           #TRANS 2920 {} -12881.52
           #TRANS 2940 {} -34672.97
           #TRANS 2941 {} -4017.74
           #TRANS 3740 {} 0.53
           #TRANS 7010 {1 Nord} 34100.00 20211023 "" 264
           #TRANS 7010 {1 Syd} 22846.00 20211023 "" 191.5
           #TRANS 7090 {1 Nord} 4092.00
           #TRANS 7090 {1 Syd} 2741.52
           #TRANS 7210 {1 Nord} 30975.00 20211023 "" 176
           #TRANS 7210 {1 Syd} 19425.00 20211023 "" 136
           #TRANS 7290 {1 Nord} 3717.00
           #TRANS 7290 {1 Syd} 2331.00
           #TRANS 7385 {1 Nord} 4106.60
           #TRANS 7399 {1 Nord} -4106.60
           #TRANS 7510 {1 Nord} 21638.33
           #TRANS 7510 {1 Syd} 12794.54
           #TRANS 7519 {1 Nord} 2453.59
           #TRANS 7519 {1 Syd} 1564.15
           #TRANS 7560 {1 Syd} 240.10
        }
        #VER F 11 20211125 "L�nek�rning: 2021-11-25 - Ordinarie l�n" 20211030
        {
           #TRANS 1930 {} -82651.00
           #TRANS 2710 {} -26770.00
           #TRANS 2794 {} -1782.31
           #TRANS 2920 {} -106.69
           #TRANS 2940 {} -34921.74
           #TRANS 2941 {} 52.49
           #TRANS 3740 {} 1.87
           #TRANS 7010 {1 Nord} 26898.84 20211125 "" 200
           #TRANS 7010 {1 Syd} 20956.00 20211125 "" 181
           #TRANS 7081 {1 Nord} 2702.88 20211125 "" 24
           #TRANS 7082 {1 Nord} 4077.44 20211125 "" 28
           #TRANS 7082 {1 Syd} 5510.90 20211125 "" 40
           #TRANS 7090 {1 Nord} -849.58
           #TRANS 7090 {1 Syd} -2334.87
           #TRANS 7210 {1 Nord} 30975.00 20211125 "" 168
           #TRANS 7210 {1 Syd} 17458.00 20211125 "" 120
           #TRANS 7285 {1 Syd} 2622.38 20211125 "" 32
           #TRANS 7290 {1 Nord} 3717.00
           #TRANS 7290 {1 Syd} -425.86
           #TRANS 7385 {1 Nord} 2225.00
           #TRANS 7399 {1 Nord} -2225.00
           #TRANS 7510 {1 Nord} 21013.43
           #TRANS 7510 {1 Syd} 13211.26
           #TRANS 7519 {1 Nord} 900.95
           #TRANS 7519 {1 Syd} -953.44
           #TRANS 7560 {1 Syd} 697.05
        }
        #VER F 12 20211223 "L�nek�rning: 2021-12-23 - Ordinarie l�n" 20211130
        {
           #TRANS 1930 {} -77737.00
           #TRANS 2710 {} -24790.00
           #TRANS 2794 {} -1711.69
           #TRANS 2920 {} -11509.72
           #TRANS 2940 {} -32812.86
           #TRANS 2941 {} -3539.89
           #TRANS 3740 {} 2.63
           #TRANS 7010 {1 Nord} 27370.88 20211223 "" 184
           #TRANS 7010 {1 Syd} 20456.00 20211223 "" 176
           #TRANS 7081 {1 Nord} 3223.44 20211223 "" 36
           #TRANS 7081 {1 Syd} 2323.20 20211223 "" 24
           #TRANS 7090 {1 Nord} 3284.50
           #TRANS 7090 {1 Syd} 2454.72
           #TRANS 7210 {1 Nord} 30975.00 20211223 "" 160
           #TRANS 7210 {1 Syd} 19887.54 20211223 "" 136
           #TRANS 7290 {1 Nord} 3717.00
           #TRANS 7290 {1 Syd} 2053.50
           #TRANS 7385 {1 Nord} 2225.00
           #TRANS 7399 {1 Nord} -2225.00
           #TRANS 7510 {1 Nord} 20044.17
           #TRANS 7510 {1 Syd} 12149.09
           #TRANS 7519 {1 Nord} 2199.87
           #TRANS 7519 {1 Syd} 1340.02
           #TRANS 7560 {1 Syd} 619.60
        }
        #VER G 1 20210131 Hyra 20210131
        {
           #TRANS 5010 {1 Nord} 8250.00
           #TRANS 5010 {1 Syd} 8250.00
           #TRANS 1710 {} -16500.00
        }
        #VER G 2 20210228 Hyra 20210228
        {
           #TRANS 5010 {1 Nord} 8500.00
           #TRANS 5010 {1 Syd} 8500.00
           #TRANS 1710 {} -17000.00
        }
        #VER G 3 20210331 Hyra 20210331
        {
           #TRANS 5010 {1 Nord} 8500.00
           #TRANS 5010 {1 Syd} 8500.00
           #TRANS 1710 {} -17000.00
        }
        #VER G 4 20210430 Hyra 20210430
        {
           #TRANS 5010 {1 Nord} 8500.00
           #TRANS 5010 {1 Syd} 8500.00
           #TRANS 1710 {} -17000.00
        }
        #VER G 5 20210531 Hyra 20210531
        {
           #TRANS 5010 {1 Nord} 8500.00
           #TRANS 5010 {1 Syd} 8500.00
           #TRANS 1710 {} -17000.00
        }
        #VER G 6 20210630 Hyra 20210630
        {
           #TRANS 5010 {1 Nord} 8500.00
           #TRANS 5010 {1 Syd} 8500.00
           #TRANS 1710 {} -17000.00
        }
        #VER G 7 20210731 Hyra 20210731
        {
           #TRANS 5010 {1 Nord} 8500.00
           #TRANS 5010 {1 Syd} 8500.00
           #TRANS 1710 {} -17000.00
        }
        #VER G 8 20210831 Hyra 20210831
        {
           #TRANS 5010 {1 Nord} 8500.00
           #TRANS 5010 {1 Syd} 8500.00
           #TRANS 1710 {} -17000.00
        }
        #VER G 9 20210930 Hyra 20210930
        {
           #TRANS 5010 {1 Nord} 8500.00
           #TRANS 5010 {1 Syd} 8500.00
           #TRANS 1710 {} -17000.00
        }
        #VER G 10 20211031 Hyra 20211031
        {
           #TRANS 5010 {1 Nord} 8500.00
           #TRANS 5010 {1 Syd} 8500.00
           #TRANS 1710 {} -17000.00
        }
        #VER G 11 20211130 Hyra 20211130
        {
           #TRANS 5010 {1 Nord} 8500.00
           #TRANS 5010 {1 Syd} 8500.00
           #TRANS 1710 {} -17000.00
        }
        #VER G 12 20211231 Hyra 20211231
        {
           #TRANS 5010 {1 Nord} 8500.00
           #TRANS 5010 {1 Syd} 8500.00
           #TRANS 1710 {} -17000.00
        }`
const sie = new sieParser(string);
        console.log("hi")
fs.writeFileSync("test.json", JSON.stringify(sie.sieObject))
console.log(sie.sieObject);
