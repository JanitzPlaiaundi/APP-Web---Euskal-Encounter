const Select=document.getElementById("Prefijo");
let callCodes=[
    { numero: "+1", bandera: "🇺🇸🇨🇦" }, // Estados Unidos y Canadá
    { numero: "+1-340", bandera: "🇻🇮" }, // Islas Vírgenes de los EE.UU.
    { numero: "+1-670", bandera: "🇲🇵" }, // Islas Marianas del Norte
    { numero: "+1-671", bandera: "🇬🇺" }, // Guam
    { numero: "+1-684", bandera: "🇦🇸" }, // Samoa Americana
    { numero: "+1-787", bandera: "🇵🇷" }, // Puerto Rico
    { numero: "+1-939", bandera: "🇵🇷" }, // Puerto Rico
    { numero: "+1-441", bandera: "🇧🇲" }, // Bermudas
    { numero: "+299", bandera: "🇬🇱" }, // Groenlandia
    { numero: "+508", bandera: "🇵🇲" }, // San Pedro y Miquelón
    { numero: "+52", bandera: "🇲🇽" }, // México
    { numero: "+1-242", bandera: "🇧🇸" }, // Bahamas
    { numero: "+1-246", bandera: "🇧🇧" }, // Barbados
    { numero: "+1-264", bandera: "🇦🇮" }, // Anguila
    { numero: "+1-268", bandera: "🇦🇬" }, // Antigua y Barbuda
    { numero: "+1-284", bandera: "🇻🇬" }, // Islas Vírgenes Británicas
    { numero: "+1-345", bandera: "🇰🇾" }, // Islas Caimán
    { numero: "+1-473", bandera: "🇬🇩" }, // Granada
    { numero: "+1-649", bandera: "🇹🇨" }, // Islas Turcas y Caicos
    { numero: "+1-664", bandera: "🇬🇩" }, // Montserrat
    { numero: "+1-721", bandera: "🇸🇽" }, // San Martín
    { numero: "+1-758", bandera: "🇱🇨" }, // Santa Lucía
    { numero: "+1-767", bandera: "🇩🇲" }, // Dominica
    { numero: "+1-784", bandera: "🇻🇨" }, // San Vicente y las Granadinas
    { numero: "+1-809", bandera: "🇩🇴" }, // República Dominicana
    { numero: "+1-829", bandera: "🇩🇴" }, // República Dominicana
    { numero: "+1-849", bandera: "🇩🇴" }, // República Dominicana
    { numero: "+1-868", bandera: "🇹🇹" }, // Trinidad y Tobago
    { numero: "+1-869", bandera: "🇰🇳" }, // San Cristóbal y Nieves
    { numero: "+1-876", bandera: "🇯🇲" }, // Jamaica
    { numero: "+1-658", bandera: "🇯🇲" }, // Jamaica
    { numero: "+297", bandera: "🇦🇼" }, // Aruba
    { numero: "+509", bandera: "🇭🇹" }, // Haití
    { numero: "+53", bandera: "🇨🇺" }, // Cuba
    { numero: "+590", bandera: "🇬🇵" }, // Guadalupe
    { numero: "+596", bandera: "🇲🇶" }, // Martinica
    { numero: "+599", bandera: "🇨🇼" }, // Curazao
    { numero: "+501", bandera: "🇧🇿" }, // Belice
    { numero: "+502", bandera: "🇬🇹" }, // Guatemala
    { numero: "+503", bandera: "🇸🇻" }, // El Salvador
    { numero: "+504", bandera: "🇭🇳" }, // Honduras
    { numero: "+505", bandera: "🇳🇮" }, // Nicaragua
    { numero: "+506", bandera: "🇨🇷" }, // Costa Rica
    { numero: "+507", bandera: "🇵🇦" }, // Panamá
    { numero: "+500", bandera: "🇫🇰" }, // Islas Malvinas
    { numero: "+51", bandera: "🇵🇪" }, // Perú
    { numero: "+54", bandera: "🇦🇷" }, // Argentina
    { numero: "+55", bandera: "🇧🇷" }, // Brasil
    { numero: "+56", bandera: "🇨🇱" }, // Chile
    { numero: "+57", bandera: "🇨🇴" }, // Colombia
    { numero: "+58", bandera: "🇻🇪" }, // Venezuela
    { numero: "+591", bandera: "🇧🇴" }, // Bolivia
    { numero: "+592", bandera: "🇬🇾" }, // Guyana
    { numero: "+593", bandera: "🇪🇨" }, // Ecuador
    { numero: "+594", bandera: "🇬🇫" }, // Guayana Francesa
    { numero: "+595", bandera: "🇵🇾" }, // Paraguay
    { numero: "+597", bandera: "🇸🇷" }, // Surinam
    { numero: "+598", bandera: "🇺🇾" }, // Uruguay
    { numero: "+20", bandera: "🇪🇬" }, // Egipto
    { numero: "+211", bandera: "🇸🇸" }, // Sudán del Sur
    { numero: "+212", bandera: "🇲🇦" }, // Marruecos
    { numero: "+213", bandera: "🇩🇿" }, // Argelia
    { numero: "+214", bandera: "🇪🇭" }, // República Árabe Saharaui Democrática
    { numero: "+216", bandera: "🇹🇳" }, // Túnez
    { numero: "+218", bandera: "🇱🇾" }, // Libia
    { numero: "+220", bandera: "🇬🇲" }, // Gambia
    { numero: "+221", bandera: "🇸🇳" }, // Senegal
    { numero: "+222", bandera: "🇲🇷" }, // Mauritania
    { numero: "+223", bandera: "🇲🇱" }, // Malí
    { numero: "+224", bandera: "🇬🇳" }, // Guinea
    { numero: "+225", bandera: "🇨🇮" }, // Costa de Marfil
    { numero: "+226", bandera: "🇧🇫" }, // Burkina Faso
    { numero: "+227", bandera: "🇳🇪" }, // Níger
    { numero: "+228", bandera: "🇹🇬" }, // Togo
    { numero: "+229", bandera: "🇧🇯" }, // Benín
    { numero: "+230", bandera: "🇲🇺" }, // Mauricio
    { numero: "+231", bandera: "🇱🇷" }, // Liberia
    { numero: "+232", bandera: "🇸🇱" }, // Sierra Leona
    { numero: "+233", bandera: "🇬🇭" }, // Ghana
    { numero: "+234", bandera: "🇳🇬" }, // Nigeria
    { numero: "+235", bandera: "🇹🇩" }, // Chad
    { numero: "+236", bandera: "🇨🇫" }, // República Centroafricana
    { numero: "+237", bandera: "🇨🇲" }, // Camerún
    { numero: "+238", bandera: "🇨🇻" }, // Cabo Verde
    { numero: "+239", bandera: "🇸🇹" }, // Santo Tomé y Príncipe
    { numero: "+240", bandera: "🇬🇶" }, // Guinea Ecuatorial
    { numero: "+241", bandera: "🇬🇦" }, // Gabón
    { numero: "+242", bandera: "🇨🇬" }, // República del Congo
    { numero: "+243", bandera: "🇨🇩" }, // República Democrática del Congo
    { numero: "+244", bandera: "🇦🇴" }, // Angola
    { numero: "+245", bandera: "🇬🇼" }, // Guinea-Bisáu
    { numero: "+246", bandera: "🇮🇴" }, // Territorio Británico del Océano Índico
    { numero: "+247", bandera: "🇦🇸" }, // Isla Ascensión
    { numero: "+248", bandera: "🇸🇨" }, // Seychelles
    { numero: "+249", bandera: "🇸🇩" }, // Sudán
    { numero: "+250", bandera: "🇷🇼" }, // Ruanda
    { numero: "+251", bandera: "🇪🇹" }, // Etiopía
    { numero: "+252", bandera: "🇸🇴" }, // Somalia
    { numero: "+253", bandera: "🇩🇯" }, // Yibuti
    { numero: "+254", bandera: "🇰🇪" }, // Kenia
    { numero: "+255", bandera: "🇹🇿" }, // Tanzania
    { numero: "+256", bandera: "🇺🇬" }, // Uganda
    { numero: "+257", bandera: "🇧🇮" }, // Burundi
    { numero: "+258", bandera: "🇲🇿" }, // Mozambique
    { numero: "+260", bandera: "🇿🇲" }, // Zambia
    { numero: "+261", bandera: "🇲🇬" }, // Madagascar
    { numero: "+262", bandera: "🇷🇪🇾🇹" }, // Reunión y Mayotte
    { numero: "+263", bandera: "🇿🇼" }, // Zimbabue
    { numero: "+264", bandera: "🇳🇦" }, // Namibia
    { numero: "+265", bandera: "🇲🇼" }, // Malaui
    { numero: "+266", bandera: "🇱🇸" }, // Lesoto
    { numero: "+267", bandera: "🇧🇼" }, // Botsuana
    { numero: "+268", bandera: "🇸🇿" }, // Suazilandia
    { numero: "+269", bandera: "🇰🇲" }, // Comoras
    { numero: "+27", bandera: "🇿🇦" }, // Sudáfrica
    { numero: "+290", bandera: "🇸🇭" }, // Santa Elena, Ascensión y Tristán de Acuña
    { numero: "+291", bandera: "🇪🇷" }, // Eritrea
    { numero: "+298", bandera: "🇫🇴" }, // Islas Feroe
    { numero: "+30", bandera: "🇬🇷" }, // Grecia
    { numero: "+31", bandera: "🇳🇱" }, // Países Bajos
    { numero: "+32", bandera: "🇧🇪" }, // Bélgica
    { numero: "+33", bandera: "🇫🇷" }, // Francia
    { numero: "+34", bandera: "🇪🇸" }, // España
    { numero: "+350", bandera: "🇬🇮" }, // Gibraltar
    { numero: "+351", bandera: "🇵🇹" }, // Portugal
    { numero: "+352", bandera: "🇱🇺" }, // Luxemburgo
    { numero: "+353", bandera: "🇮🇪" }, // Irlanda
    { numero: "+354", bandera: "🇮🇸" }, // Islandia
    { numero: "+355", bandera: "🇦🇱" }, // Albania
    { numero: "+356", bandera: "🇲🇹" }, // Malta
    { numero: "+357", bandera: "🇨🇾" }, // Chipre
    { numero: "+358", bandera: "🇫🇮" }, // Finlandia
    { numero: "+359", bandera: "🇧🇬" }, // Bulgaria
    { numero: "+36", bandera: "🇭🇺" }, // Hungría
    { numero: "+370", bandera: "🇱🇹" }, // Lituania
    { numero: "+371", bandera: "🇱🇻" }, // Letonia
    { numero: "+372", bandera: "🇪🇪" }, // Estonia
    { numero: "+373", bandera: "🇲🇩" }, // Moldavia
    { numero: "+374", bandera: "🇦🇲" }, // Armenia
    { numero: "+375", bandera: "🇧🇾" }, // Bielorrusia
    { numero: "+376", bandera: "🇦🇩" }, // Andorra
    { numero: "+377", bandera: "🇲🇨" }, // Mónaco
    { numero: "+378", bandera: "🇸🇲" }, // San Marino
    { numero: "+379", bandera: "🇻🇦" }, // Ciudad del Vaticano
    { numero: "+380", bandera: "🇺🇦" }, // Ucrania
    { numero: "+381", bandera: "🇷🇸" }, // Serbia
    { numero: "+382", bandera: "🇲🇪" }, // Montenegro
    { numero: "+383", bandera: "🇽🇰" }, // Kosovo
    { numero: "+384", bandera: "" }, // no asignado
    { numero: "+385", bandera: "🇭🇷" }, // Croacia
    { numero: "+386", bandera: "🇸🇮" }, // Eslovenia
    { numero: "+387", bandera: "🇧🇦" }, // Bosnia y Herzegovina
    { numero: "+388", bandera: "" }, // EWSP
    { numero: "+389", bandera: "🇲🇰" }, // Macedonia del Norte
    { numero: "+39", bandera: "🇮🇹" }, // Italia
    { numero: "+40", bandera: "🇷🇴" }, // Rumania
    { numero: "+41", bandera: "🇨🇭" }, // Suiza
    { numero: "+420", bandera: "🇨🇿" }, // República Checa
    { numero: "+421", bandera: "🇸🇰" }, // Eslovaquia
    { numero: "+423", bandera: "🇱🇮" }, // Liechtenstein
    { numero: "+43", bandera: "🇦🇹" }, // Austria
    { numero: "+44", bandera: "🇬🇧" }, // Reino Unido
    { numero: "+45", bandera: "🇩🇰" }, // Dinamarca
    { numero: "+46", bandera: "🇸🇪" }, // Suecia
    { numero: "+47", bandera: "🇳🇴" }, // Noruega
    { numero: "+48", bandera: "🇵🇱" }, // Polonia
    { numero: "+49", bandera: "🇩🇪" }, // Alemania
    { numero: "+7", bandera: "🇷🇺🇰🇿" }, // Rusia y Kazajistán
    { numero: "+7-840", bandera: "🇦🇧" }, // Abjasia
    { numero: "+7-940", bandera: "🇦🇧" }, // Abjasia
    { numero: "+7-995", bandera: "🇸🇲" }, // Osetia del Sur
    { numero: "+7-997", bandera: "🇸🇲" }, // Osetia del Sur
    { numero: "+81", bandera: "🇯🇵" }, // Japón
    { numero: "+82", bandera: "🇰🇷" }, // Corea del Sur
    { numero: "+84", bandera: "🇻🇳" }, // Vietnam
    { numero: "+850", bandera: "🇰🇵" }, // Corea del Norte
    { numero: "+852", bandera: "🇭🇰" }, // Hong Kong
    { numero: "+853", bandera: "🇲🇴" }, // Macao
    { numero: "+855", bandera: "🇰🇭" }, // Camboya
    { numero: "+856", bandera: "🇱🇦" }, // Laos
    { numero: "+86", bandera: "🇨🇳" }, // China
    { numero: "+880", bandera: "🇧🇩" }, // Bangladés
    { numero: "+886", bandera: "🇹🇼" }, // Taiwán
    { numero: "+90", bandera: "🇹🇷" }, // Turquía y Norte de Chipre
    { numero: "+91", bandera: "🇮🇳" }, // India
    { numero: "+92", bandera: "🇵🇰" }, // Pakistán
    { numero: "+93", bandera: "🇦🇫" }, // Afganistán
    { numero: "+94", bandera: "🇱🇰" }, // Sri Lanka
    { numero: "+95", bandera: "🇲🇲" }, // Birmania
    { numero: "+960", bandera: "🇲🇻" }, // Maldivas
    { numero: "+961", bandera: "🇱🇧" }, // Líbano
    { numero: "+962", bandera: "🇯🇴" }, // Jordania
    { numero: "+963", bandera: "🇸🇾" }, // Siria
    { numero: "+964", bandera: "🇮🇶" }, // Irak
    { numero: "+965", bandera: "🇰🇼" }, // Kuwait
    { numero: "+966", bandera: "🇸🇦" }, // Arabia Saudita
    { numero: "+967", bandera: "🇾🇪" }, // Yemen
    { numero: "+968", bandera: "🇴🇲" }, // Omán
    { numero: "+970", bandera: "🇵🇸" }, // Palestina
    { numero: "+971", bandera: "🇦🇪" }, // EAU
    { numero: "+972", bandera: "🇮🇱" }, // Israel
    { numero: "+973", bandera: "🇧🇭" }, // Baréin
    { numero: "+974", bandera: "🇶🇦" }, // Catar
    { numero: "+975", bandera: "🇧🇹" }, // Bután
    { numero: "+976", bandera: "🇲🇳" }, // Mongolia
    { numero: "+977", bandera: "🇳🇵" }, // Nepal
    { numero: "+98", bandera: "🇮🇷" }, // Irán
    { numero: "+992", bandera: "🇹🇯" }, // Tayikistán
    { numero: "+993", bandera: "🇹🇲" }, // Turkmenistán
    { numero: "+994", bandera: "🇦🇿" }, // Azerbaiyán
    { numero: "+995", bandera: "🇬🇪" }, // Georgia
    { numero: "+996", bandera: "🇰🇬" }, // Kirguistán
    { numero: "+998", bandera: "🇺🇿" }, // Uzbekistán
    { numero: "+60", bandera: "🇲🇾" }, // Malasia
    { numero: "+61", bandera: "🇦🇺" }, // Australia
    { numero: "+62", bandera: "🇮🇩" }, // Indonesia
    { numero: "+63", bandera: "🇵🇭" }, // Filipinas
    { numero: "+64", bandera: "🇳🇿" }, // Nueva Zelanda
    { numero: "+65", bandera: "🇸🇬" }, // Singapur
    { numero: "+66", bandera: "🇹🇭" }, // Tailandia
    { numero: "+670", bandera: "🇹🇱" }, // Timor Oriental
    { numero: "+672", bandera: "🇳🇫" }, // Isla Norfolk
    { numero: "+673", bandera: "🇧🇳" }, // Brunéi
    { numero: "+674", bandera: "🇳🇷" }, // Nauru
    { numero: "+675", bandera: "🇵🇬" }, // Papúa Nueva Guinea
    { numero: "+676", bandera: "🇹🇴" }, // Tonga
    { numero: "+677", bandera: "🇸🇧" }, // Islas Salomón
    { numero: "+678", bandera: "🇻🇺" }, // Vanuatu
    { numero: "+679", bandera: "🇫🇯" }, // Fiyi
    { numero: "+680", bandera: "🇵🇼" }, // Palaos
    { numero: "+681", bandera: "🇼🇫" }, // Wallis y Futuna
    { numero: "+682", bandera: "🇨🇰" }, // Islas Cook
    { numero: "+683", bandera: "🇳🇺" }, // Niue
    { numero: "+685", bandera: "🇼🇸" }, // Samoa
    { numero: "+686", bandera: "🇰🇮" }, // Kiribati
    { numero: "+687", bandera: "🇳🇨" }, // Nueva Caledonia
    { numero: "+688", bandera: "🇹🇻" }, // Tuvalu
    { numero: "+689", bandera: "🇵🇫" }, // Polinesia Francesa
    { numero: "+690", bandera: "🇹🇰" }, // Tokelau
    { numero: "+691", bandera: "🇫🇲" }, // Estados Federados de Micronesia
    { numero: "+692", bandera: "🇲🇭" }  // Islas Marshall
];

callCodes.map(pref => {
    let Option= document.createElement("option")
    Option.innerText = `${pref.numero} ${pref.bandera}`
    Select.appendChild(Option)
})