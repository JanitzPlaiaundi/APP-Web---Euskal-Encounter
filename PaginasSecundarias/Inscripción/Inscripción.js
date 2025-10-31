const Select=document.getElementById("Prefijo");
const paises = [
  { numero: "+93", clase: "../../Recursos/Imagenes/Flags/afganistan.png" },   // Afganistán
  { numero: "+355", clase: "../../Recursos/Imagenes/Flags/al.png" },  // Albania
  { numero: "+213", clase: "../../Recursos/Imagenes/Flags/argelia.png" },  // Argelia
  { numero: "+1‑684", clase: "../../Recursos/Imagenes/Flags/ar.webp" },// Samoa Americana
  { numero: "+376", clase: "../../Recursos/Imagenes/Flags/ar.webp" },  // Andorra
  { numero: "+244", clase: "../../Recursos/Imagenes/Flags/ar.webp" },  // Angola
  { numero: "+1‑264", clase: "../../Recursos/Imagenes/Flags/ar.webp" },// Anguila
  { numero: "+672", clase: "../../Recursos/Imagenes/Flags/ar.webp" },  // Antártica
  { numero: "+1‑268", clase: "../../Recursos/Imagenes/Flags/ar.webp" },// Antigua y Barbuda
  { numero: "+54", clase: "../../Recursos/Imagenes/Flags/ar.webp" },   // Argentina
  { numero: "+374", clase: "flag-icon flag-icon-am" },  // Armenia
  { numero: "+297", clase: "flag-icon flag-icon-aw" },  // Aruba
  { numero: "+61", clase: "flag-icon flag-icon-au" },   // Australia
  { numero: "+43", clase: "flag-icon flag-icon-at" },   // Austria
  { numero: "+994", clase: "flag-icon flag-icon-az" },  // Azerbaiyán
  { numero: "+1‑242", clase: "flag-icon flag-icon-bs" },// Bahamas
  { numero: "+973", clase: "flag-icon flag-icon-bh" },  // Baréin
  { numero: "+880", clase: "flag-icon flag-icon-bd" },  // Bangladés
  { numero: "+1‑246", clase: "flag-icon flag-icon-bb" },// Barbados
  { numero: "+375", clase: "flag-icon flag-icon-by" },  // Bielorrusia
  { numero: "+32", clase: "flag-icon flag-icon-be" },   // Bélgica
  { numero: "+501", clase: "flag-icon flag-icon-bz" },  // Belice
  { numero: "+229", clase: "flag-icon flag-icon-bj" },  // Benín
  { numero: "+1‑441", clase: "flag-icon flag-icon-bm" },// Bermudas
  { numero: "+975", clase: "flag-icon flag-icon-bt" },  // Bután
  { numero: "+591", clase: "flag-icon flag-icon-bo" },  // Bolivia
  { numero: "+387", clase: "flag-icon flag-icon-ba" },  // Bosnia y Herzegovina
  { numero: "+267", clase: "flag-icon flag-icon-bw" },  // Botsuana
  { numero: "+47", clase: "flag-icon flag-icon-bv" },   // Isla Bouvet
  { numero: "+55", clase: "flag-icon flag-icon-br" },   // Brasil
  { numero: "+246", clase: "flag-icon flag-icon-io" },  // Territorio Británico del Océano Índico
  { numero: "+673", clase: "flag-icon flag-icon-bn" },  // Brunéi
  { numero: "+359", clase: "flag-icon flag-icon-bg" },  // Bulgaria
  { numero: "+226", clase: "flag-icon flag-icon-bf" },  // Burkina Faso
  { numero: "+257", clase: "flag-icon flag-icon-bi" },  // Burundi
  { numero: "+855", clase: "flag-icon flag-icon-kh" },  // Camboya
  { numero: "+237", clase: "flag-icon flag-icon-cm" },  // Camerún
  { numero: "+1", clase: "flag-icon flag-icon-ca" },    // Canadá
  { numero: "+238", clase: "flag-icon flag-icon-cv" },  // Cabo Verde
  { numero: "+345", clase: "flag-icon flag-icon-ky" }, // Islas Caimán
  { numero: "+236", clase: "flag-icon flag-icon-cf" },  // República Centroafricana
  { numero: "+235", clase: "flag-icon flag-icon-td" },  // Chad
  { numero: "+56", clase: "flag-icon flag-icon-cl" },   // Chile
  { numero: "+86", clase: "flag-icon flag-icon-cn" },   // China
  { numero: "+61", clase: "flag-icon flag-icon-cx" },   // Isla Christmas
  { numero: "+61", clase: "flag-icon flag-icon-cc" },   // Islas Cocos (Keeling)
  { numero: "+57", clase: "flag-icon flag-icon-co" },   // Colombia
  { numero: "+269", clase: "flag-icon flag-icon-km" },  // Comoras
  { numero: "+242", clase: "flag-icon flag-icon-cg" },  // Congo
  { numero: "+243", clase: "flag-icon flag-icon-cd" },  // República Democrática del Congo
  { numero: "+672", clase: "flag-icon flag-icon-ck" },  // Islas Cook
  { numero: "+506", clase: "flag-icon flag-icon-cr" },  // Costa Rica
  { numero: "+225", clase: "flag-icon flag-icon-ci" },  // Costa de Marfil
  { numero: "+385", clase: "flag-icon flag-icon-hr" },  // Croacia
  { numero: "+53", clase: "flag-icon flag-icon-cu" },  // Cuba
  { numero: "+537", clase: "flag-icon flag-icon-cw" },  // Curazao
  { numero: "+357", clase: "flag-icon flag-icon-cy" },  // Chipre
  { numero: "+420", clase: "flag-icon flag-icon-cz" },  // República Checa
  { numero: "+45", clase: "flag-icon flag-icon-dk" },   // Dinamarca
  { numero: "+253", clase: "flag-icon flag-icon-dj" },  // Yibuti
  { numero: "+1‑767", clase: "flag-icon flag-icon-dm" },// Dominica
  { numero: "+1‑849", clase: "flag-icon flag-icon-do" },// República Dominicana
  { numero: "+593", clase: "flag-icon flag-icon-ec" },  // Ecuador
  { numero: "+20", clase: "flag-icon flag-icon-eg" },   // Egipto
  { numero: "+503", clase: "flag-icon flag-icon-sv" },  // El Salvador
  { numero: "+240", clase: "flag-icon flag-icon-gq" },  // Guinea Ecuatorial
  { numero: "+291", clase: "flag-icon flag-icon-er" },  // Eritrea
  { numero: "+372", clase: "flag-icon flag-icon-ee" },  // Estonia
  { numero: "+251", clase: "flag-icon flag-icon-et" },  // Etiopía
  { numero: "+500", clase: "flag-icon flag-icon-fk" },  // Islas Malvinas
  { numero: "+298", clase: "flag-icon flag-icon-fo" },  // Islas Feroe
  { numero: "+679", clase: "flag-icon flag-icon-fj" },  // Fiyi
  { numero: "+358", clase: "flag-icon flag-icon-fi" },  // Finlandia
  { numero: "+33", clase: "flag-icon flag-icon-fr" },   // Francia
  { numero: "+594", clase: "flag-icon flag-icon-gf" },  // Guayana Francesa
  { numero: "+689", clase: "flag-icon flag-icon-pf" },  // Polinesia Francesa
  { numero: "+241", clase: "flag-icon flag-icon-ga" },  // Gabón
  { numero: "+220", clase: "flag-icon flag-icon-gm" },  // Gambia
  { numero: "+995", clase: "flag-icon flag-icon-ge" },  // Georgia
  { numero: "+49", clase: "flag-icon flag-icon-de" },   // Alemania
  { numero: "+233", clase: "flag-icon flag-icon-gh" },  // Ghana
  { numero: "+350", clase: "flag-icon flag-icon-gi" },  // Gibraltar
  { numero: "+30", clase: "flag-icon flag-icon-gr" },   // Grecia
  { numero: "+299", clase: "flag-icon flag-icon-gl" },  // Groenlandia
  { numero: "+1‑473", clase: "flag-icon flag-icon-gd" },// Granada
  { numero: "+590", clase: "flag-icon flag-icon-gp" },  // Guadalupe
  { numero: "+1‑671", clase: "flag-icon flag-icon-gu" },// Guam
  { numero: "+502", clase: "flag-icon flag-icon-gt" },  // Guatemala
  { numero: "+44‑1481", clase: "flag-icon flag-icon-gg" },// Guernesey
  { numero: "+224", clase: "flag-icon flag-icon-gn" },  // Guinea
  { numero: "+245", clase: "flag-icon flag-icon-gw" },  // Guinea-Bisáu
  { numero: "+595", clase: "flag-icon flag-icon-gy" },  // Guyana
  { numero: "+509", clase: "flag-icon flag-icon-ht" },  // Haití
  { numero: "+504", clase: "flag-icon flag-icon-hn" },  // Honduras
  { numero: "+852", clase: "flag-icon flag-icon-hk" },  // Hong Kong
  { numero: "+36", clase: "flag-icon flag-icon-hu" },   // Hungría
  { numero: "+354", clase: "flag-icon flag-icon-is" },  // Islandia
  { numero: "+91", clase: "flag-icon flag-icon-in" },   // India
  { numero: "+62", clase: "flag-icon flag-icon-id" },   // Indonesia
  { numero: "+98", clase: "flag-icon flag-icon-ir" },   // Irán
  { numero: "+964", clase: "flag-icon flag-icon-iq" },  // Irak
  { numero: "+353", clase: "flag-icon flag-icon-ie" },  // Irlanda
  { numero: "+44", clase: "flag-icon flag-icon-im" },  // Isla de Man
  { numero: "+972", clase: "flag-icon flag-icon-il" }, // Israel
  { numero: "+39", clase: "flag-icon flag-icon-it" },  // Italia
  { numero: "+1‑876", clase: "flag-icon flag-icon-jm" },// Jamaica
  { numero: "+81", clase: "flag-icon flag-icon-jp" },  // Japón
  { numero: "+44‑1534", clase: "flag-icon flag-icon-je" },// Jersey
  { numero: "+962", clase: "flag-icon flag-icon-jo" }, // Jordania
  { numero: "+7", clase: "flag-icon flag-icon-kz" },   // Kazajistán
  { numero: "+254", clase: "flag-icon flag-icon-ke" }, // Kenia
  { numero: "+686", clase: "flag-icon flag-icon-ki" }, // Kiribati
  { numero: "+383", clase: "flag-icon flag-icon-xk" }, // Kosovo (uso no oficial, “xk” en algunos sistemas)
  { numero: "+965", clase: "flag-icon flag-icon-kw" }, // Kuwait
  { numero: "+996", clase: "flag-icon flag-icon-kg" }, // Kirguistán
  { numero: "+856", clase: "flag-icon flag-icon-la" }, // Laos
  { numero: "+371", clase: "flag-icon flag-icon-lv" }, // Letonia
  { numero: "+961", clase: "flag-icon flag-icon-lb" }, // Líbano
  { numero: "+266", clase: "flag-icon flag-icon-ls" }, // Lesoto
  { numero: "+231", clase: "flag-icon flag-icon-lr" }, // Liberia
  { numero: "+218", clase: "flag-icon flag-icon-ly" }, // Libia
  { numero: "+423", clase: "flag-icon flag-icon-li" }, // Liechtenstein
  { numero: "+370", clase: "flag-icon flag-icon-lt" }, // Lituania
  { numero: "+352", clase: "flag-icon flag-icon-lu" }, // Luxemburgo
  { numero: "+853", clase: "flag-icon flag-icon-mo" }, // Macao
  { numero: "+389", clase: "flag-icon flag-icon-mk" }, // Macedonia del Norte
  { numero: "+261", clase: "flag-icon flag-icon-mg" }, // Madagascar
  { numero: "+265", clase: "flag-icon flag-icon-mw" }, // Malaui
  { numero: "+60", clase: "flag-icon flag-icon-my" },  // Malasia
  { numero: "+960", clase: "flag-icon flag-icon-mv" }, // Maldivas
  { numero: "+223", clase: "flag-icon flag-icon-ml" }, // Malí
  { numero: "+356", clase: "flag-icon flag-icon-mt" }, // Malta
  { numero: "+692", clase: "flag-icon flag-icon-mh" }, // Islas Marshall
  { numero: "+596", clase: "flag-icon flag-icon-mq" }, // Martinica
  { numero: "+222", clase: "flag-icon flag-icon-mr" }, // Mauritania
  { numero: "+230", clase: "flag-icon flag-icon-mu" }, // Mauricio
  { numero: "+262", clase: "flag-icon flag-icon-yt" }, // Mayotte
  { numero: "+52", clase: "flag-icon flag-icon-mx" },  // México
  { numero: "+691", clase: "flag-icon flag-icon-fm" }, // Micronesia
  { numero: "+373", clase: "flag-icon flag-icon-md" }, // Moldavia
  { numero: "+377", clase: "flag-icon flag-icon-mc" }, // Mónaco
  { numero: "+976", clase: "flag-icon flag-icon-mn" }, // Mongolia
  { numero: "+382", clase: "flag-icon flag-icon-me" }, // Montenegro
  { numero: "+1664", clase: "flag-icon flag-icon-ms" },// Montserrat
  { numero: "+212", clase: "flag-icon flag-icon-ma" }, // Marruecos
  { numero: "+258", clase: "flag-icon flag-icon-mz" }, // Mozambique
  { numero: "+95", clase: "flag-icon flag-icon-mm" },  // Birmania (Myanmar)
  { numero: "+264", clase: "flag-icon flag-icon-na" }, // Namibia
  { numero: "+674", clase: "flag-icon flag-icon-nr" }, // Nauru
  { numero: "+977", clase: "flag-icon flag-icon-np" }, // Nepal
  { numero: "+31", clase: "flag-icon flag-icon-nl" },  // Países Bajos
  { numero: "+687", clase: "flag-icon flag-icon-nc" }, // Nueva Caledonia
  { numero: "+64", clase: "flag-icon flag-icon-nz" },  // Nueva Zelanda
  { numero: "+505", clase: "flag-icon flag-icon-ni" }, // Nicaragua
  { numero: "+227", clase: "flag-icon flag-icon-ne" }, // Níger
  { numero: "+234", clase: "flag-icon flag-icon-ng" }, // Nigeria
  { numero: "+683", clase: "flag-icon flag-icon-nu" }, // Niue
  { numero: "+672", clase: "flag-icon flag-icon-nf" }, // Isla Norfolk
  { numero: "+850", clase: "flag-icon flag-icon-kp" }, // Corea del Norte
  { numero: "+1‑670", clase: "flag-icon flag-icon-mp" },// Islas Marianas del Norte
  { numero: "+47", clase: "flag-icon flag-icon-no" },  // Noruega
  { numero: "+968", clase: "flag-icon flag-icon-om" }, // Omán
  { numero: "+92", clase: "flag-icon flag-icon-pk" },  // Pakistán
  { numero: "+680", clase: "flag-icon flag-icon-pw" }, // Palaos
  { numero: "+970", clase: "flag-icon flag-icon-ps" }, // Palestina
  { numero: "+507", clase: "flag-icon flag-icon-pa" }, // Panamá
  { numero: "+675", clase: "flag-icon flag-icon-pg" }, // Papúa Nueva Guinea
  { numero: "+595", clase: "flag-icon flag-icon-py" }, // Paraguay
  { numero: "+51", clase: "flag-icon flag-icon-pe" },  // Perú
  { numero: "+63", clase: "flag-icon flag-icon-ph" },  // Filipinas
  { numero: "+48", clase: "flag-icon flag-icon-pl" },  // Polonia
  { numero: "+351", clase: "flag-icon flag-icon-pt" }, // Portugal
  { numero: "+1‑787", clase: "flag-icon flag-icon-pr" },// Puerto Rico
  { numero: "+974", clase: "flag-icon flag-icon-qa" }, // Catar
  { numero: "+262", clase: "flag-icon flag-icon-re" }, // Reunión
  { numero: "+40", clase: "flag-icon flag-icon-ro" },  // Rumanía
  { numero: "+7", clase: "flag-icon flag-icon-ru" },   // Rusia
  { numero: "+250", clase: "flag-icon flag-icon-rw" }, // Ruanda
  { numero: "+590", clase: "flag-icon flag-icon-bl" }, // San Bartolomé
  { numero: "+290", clase: "flag-icon flag-icon-sh" }, // Santa Elena
  { numero: "+1‑869", clase: "flag-icon flag-icon-kn" },// San Cristóbal y Nieves
  { numero: "+1‑758", clase: "flag-icon flag-icon-lc" },// Santa Lucía
  { numero: "+1‑784", clase: "flag-icon flag-icon-vc" },// San Vicente y Granadinas
  { numero: "+685", clase: "flag-icon flag-icon-ws" }, // Samoa
  { numero: "+378", clase: "flag-icon flag-icon-sm" }, // San Marino
  { numero: "+239", clase: "flag-icon flag-icon-st" }, // Santo Tomé y Príncipe
  { numero: "+966", clase: "flag-icon flag-icon-sa" }, // Arabia Saudí
  { numero: "+221", clase: "flag-icon flag-icon-sn" }, // Senegal
  { numero: "+381", clase: "flag-icon flag-icon-rs" }, // Serbia
  { numero: "+248", clase: "flag-icon flag-icon-sc" }, // Seychelles
  { numero: "+232", clase: "flag-icon flag-icon-sl" }, // Sierra Leona
  { numero: "+65", clase: "flag-icon flag-icon-sg" },  // Singapur
  { numero: "+1‑721", clase: "flag-icon flag-icon-sx" },// Sint Maarten
  { numero: "+421", clase: "flag-icon flag-icon-sk" }, // Eslovaquia
  { numero: "+386", clase: "flag-icon flag-icon-si" }, // Eslovenia
  { numero: "+677", clase: "flag-icon flag-icon-sb" }, // Islas Salomón
  { numero: "+252", clase: "flag-icon flag-icon-so" }, // Somalia
  { numero: "+27", clase: "flag-icon flag-icon-za" },  // Sudáfrica
  { numero: "+500", clase: "flag-icon flag-icon-gs" }, // Georgia del Sur e Islas Sandwich del Sur
  { numero: "+211", clase: "flag-icon flag-icon-ss" }, // Sudán del Sur
  { numero: "+34", clase: "flag-icon flag-icon-es" },  // España
  { numero: "+94", clase: "flag-icon flag-icon-lk" },  // Sri Lanka
  { numero: "+249", clase: "flag-icon flag-icon-sd" }, // Sudán
  { numero: "+597", clase: "flag-icon flag-icon-sr" }, // Surinam
  { numero: "+47", clase: "flag-icon flag-icon-sj" },  // Svalbard y Jan Mayen
  { numero: "+46", clase: "flag-icon flag-icon-se" },  // Suecia
  { numero: "+41", clase: "flag-icon flag-icon-ch" },  // Suiza
  { numero: "+963", clase: "flag-icon flag-icon-sy" }, // Siria
  { numero: "+886", clase: "flag-icon flag-icon-tw" }, // Taiwán
  { numero: "+992", clase: "flag-icon flag-icon-tj" }, // Tayikistán
  { numero: "+255", clase: "flag-icon flag-icon-tz" }, // Tanzania
  { numero: "+66", clase: "flag-icon flag-icon-th" },  // Tailandia
  { numero: "+670", clase: "flag-icon flag-icon-tl" }, // Timor Oriental
  { numero: "+228", clase: "flag-icon flag-icon-tg" }, // Togo
  { numero: "+690", clase: "flag-icon flag-icon-tk" }, // Tokelau
  { numero: "+676", clase: "flag-icon flag-icon-to" }, // Tonga
  { numero: "+1‑868", clase: "flag-icon flag-icon-tt" },// Trinidad y Tobago
  { numero: "+216", clase: "flag-icon flag-icon-tn" }, // Túnez
  { numero: "+90", clase: "flag-icon flag-icon-tr" },  // Turquía
  { numero: "+993", clase: "flag-icon flag-icon-tm" }, // Turkmenistán
  { numero: "+1‑649", clase: "flag-icon flag-icon-tc" },// Islas Turcas y Caicos
  { numero: "+688", clase: "flag-icon flag-icon-tv" }, // Tuvalu
  { numero: "+1‑340", clase: "flag-icon flag-icon-vi" },// Islas Vírgenes (EE. UU.)
  { numero: "+256", clase: "flag-icon flag-icon-ug" }, // Uganda
  { numero: "+380", clase: "flag-icon flag-icon-ua" }, // Ucrania
  { numero: "+971", clase: "flag-icon flag-icon-ae" }, // Emiratos Árabes Unidos
  { numero: "+44‑20", clase: "flag-icon flag-icon-gb" },// Reino Unido (Gran Bretaña)
  { numero: "+1‑284", clase: "flag-icon flag-icon-vg" },// Islas Vírgenes Británicas
  { numero: "+1‑758", clase: "flag-icon flag-icon-vi" },// Islas Vírgenes de EE.UU.
  { numero: "+598", clase: "flag-icon flag-icon-uy" }, // Uruguay
  { numero: "+998", clase: "flag-icon flag-icon-uz" }, // Uzbekistán
  { numero: "+678", clase: "flag-icon flag-icon-vu" }, // Vanuatu
  { numero: "+379", clase: "flag-icon flag-icon-va" }, // Ciudad del Vaticano
  { numero: "+58", clase: "flag-icon flag-icon-ve" },  // Venezuela
  { numero: "+84", clase: "flag-icon flag-icon-vn" },  // Vietnam
  { numero: "+681", clase: "flag-icon flag-icon-wf" }, // Wallis y Futuna
  { numero: "+212", clase: "flag-icon flag-icon-eh" }, // Sáhara Occidental
  { numero: "+967", clase: "flag-icon flag-icon-ye" }, // Yemen
  { numero: "+260", clase: "flag-icon flag-icon-zm" }, // Zambia
  { numero: "+263", clase: "flag-icon flag-icon-zw" }  // Zimbabue
];



let pais = paises.map(pref => {
    
    let Option= document.createElement("option")
    let span = document.createElement("span")

    Option.innerText = `${pref.numero}`
    span.className = `${pref.clase}`
    Option.appendChild(span)
    Select.appendChild(Option)
})
let imagenPais = document.getElementById("ImagenPais");
function actualizarBandera() {
    imagenPais.src = paises.find(p =>
        p.numero === Select.value
    ).clase;
}

actualizarBandera();
