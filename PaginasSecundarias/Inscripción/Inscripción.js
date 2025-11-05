const Select=document.getElementById("Prefijo");
const paises = [
  { numero: "+93", clase: "../../Recursos/Imagenes/Flags/afganistan.png" },   // Afganistán
  { numero: "+355", clase: "../../Recursos/Imagenes/Flags/albania.png" },  // Albania
  { numero: "+213", clase: "../../Recursos/Imagenes/Flags/argelia.png" },  // Argelia
  { numero: "+1‑684", clase: "../../Recursos/Imagenes/Flags/samoa-americana.png" },// Samoa Americana
  { numero: "+376", clase: "../../Recursos/Imagenes/Flags/Andorra.png" },  // Andorra
  { numero: "+244", clase: "../../Recursos/Imagenes/Flags/Angola.png" },  // Angola
  { numero: "+1‑264", clase: "../../Recursos/Imagenes/Flags/Anguilla.png" },// Anguilla
  { numero: "+672", clase: "../../Recursos/Imagenes/Flags/Antártica.png" },  // Antártica
  { numero: "+1‑268", clase: "../../Recursos/Imagenes/Flags/Antigua_y_Barbuda.png" },// Antigua y Barbuda
  { numero: "+54", clase: "../../Recursos/Imagenes/Flags/Argentina.png" },   // Argentina
  { numero: "+374", clase: "../../Recursos/Imagenes/Flags/Armenia.png" },  // Armenia
  { numero: "+297", clase: "../../Recursos/Imagenes/Flags/Aruba.png" },  // Aruba
  { numero: "+61", clase: "../../Recursos/Imagenes/Flags/Australia.png" },   // Australia
  { numero: "+43", clase: "../../Recursos/Imagenes/Flags/Austria.png" },   // Austria
  { numero: "+994", clase: "../../Recursos/Imagenes/Flags/Azerbaiyan.png" },  // Azerbaiyán
  { numero: "+1‑242", clase: "../../Recursos/Imagenes/Flags/Bahamas.png" },// Bahamas
  { numero: "+973", clase: "../../Recursos/Imagenes/Flags/Barein.png" },  // Baréin
  { numero: "+880", clase: "../../Recursos/Imagenes/Flags/Banglades.png" },  // Bangladés
  { numero: "+1‑246", clase: "../../Recursos/Imagenes/Flags/Barbados.png" },// Barbados
  { numero: "+375", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Bielorrusia
  { numero: "+32", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Bélgica
  { numero: "+501", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Belice
  { numero: "+229", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Benín
  { numero: "+1‑441", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Bermudas
  { numero: "+975", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Bután
  { numero: "+591", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Bolivia
  { numero: "+387", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Bosnia y Herzegovina
  { numero: "+267", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Botsuana
  { numero: "+55", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Brasil
  { numero: "+246", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Territorio Británico del Océano Índico
  { numero: "+673", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Brunéi
  { numero: "+359", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Bulgaria
  { numero: "+226", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Burkina Faso
  { numero: "+257", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Burundi
  { numero: "+855", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Camboya
  { numero: "+237", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Camerún
  { numero: "+1", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },    // Canadá
  { numero: "+238", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Cabo Verde
  { numero: "+345", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Islas Caimán
  { numero: "+236", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // República Centroafricana
  { numero: "+235", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Chad
  { numero: "+56", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Chile
  { numero: "+86", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // China
  { numero: "+61", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Isla Christmas
  { numero: "+61", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Islas Cocos (Keeling)
  { numero: "+57", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Colombia
  { numero: "+269", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Comoras
  { numero: "+242", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Congo
  { numero: "+243", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // República Democrática del Congo
  { numero: "+672", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Islas Cook
  { numero: "+506", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Costa Rica
  { numero: "+225", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Costa de Marfil
  { numero: "+385", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Croacia
  { numero: "+53", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Cuba
  { numero: "+537", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Curazao
  { numero: "+357", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Chipre
  { numero: "+420", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // República Checa
  { numero: "+45", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Dinamarca
  { numero: "+253", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Yibuti
  { numero: "+1‑767", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Dominica
  { numero: "+1‑849", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// República Dominicana
  { numero: "+593", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Ecuador
  { numero: "+20", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Egipto
  { numero: "+503", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // El Salvador
  { numero: "+240", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Guinea Ecuatorial
  { numero: "+291", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Eritrea
  { numero: "+372", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Estonia
  { numero: "+251", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Etiopía
  { numero: "+500", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Islas Malvinas
  { numero: "+298", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Islas Feroe
  { numero: "+679", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Fiyi
  { numero: "+358", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Finlandia
  { numero: "Francia +33, Guadalupe +590, Mayotte +262, Wallis y Futuna +681", clase: "../../Recursos/Imagenes/Flags/Francia.webp" },   // Francia
  { numero: "+594", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Guayana Francesa
  { numero: "+689", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Polinesia Francesa
  { numero: "+241", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Gabón
  { numero: "+220", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Gambia
  { numero: "+995", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Georgia
  { numero: "+49", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Alemania
  { numero: "+233", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Ghana
  { numero: "+350", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Gibraltar
  { numero: "+30", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Grecia
  { numero: "+299", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Groenlandia
  { numero: "+1‑473", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Granada
  { numero: "+1‑671", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Guam
  { numero: "+502", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Guatemala
  { numero: "+44‑1481", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Guernesey
  { numero: "+224", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Guinea
  { numero: "+245", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Guinea-Bisáu
  { numero: "+595", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Guyana
  { numero: "+509", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Haití
  { numero: "+504", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Honduras
  { numero: "+852", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Hong Kong
  { numero: "+36", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Hungría
  { numero: "+354", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Islandia
  { numero: "+91", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // India
  { numero: "+62", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Indonesia
  { numero: "+98", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Irán
  { numero: "+964", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Irak
  { numero: "+353", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Irlanda
  { numero: "+44", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Isla de Man
  { numero: "+972", clase: "../../Recursos/Imagenes/Flags/Israel.webp" }, // Israel
  { numero: "+39", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Italia
  { numero: "+1‑876", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Jamaica
  { numero: "+81", clase: "../../Recursos/Imagenes/Flags/Japón.webp" },  // Japón
  { numero: "+44‑1534", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Jersey
  { numero: "+962", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Jordania
  { numero: "+7", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },   // Kazajistán
  { numero: "+254", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Kenia
  { numero: "+686", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Kiribati
  { numero: "+383", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Kosovo (uso no oficial, “xk” en algunos sistemas)
  { numero: "+965", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Kuwait
  { numero: "+996", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Kirguistán
  { numero: "+856", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Laos
  { numero: "+371", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Letonia
  { numero: "+961", clase: "../../Recursos/Imagenes/Flags/Líbano.webp" }, // Líbano
  { numero: "+266", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Lesoto
  { numero: "+231", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Liberia
  { numero: "+218", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Libia
  { numero: "+423", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Liechtenstein
  { numero: "+370", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Lituania
  { numero: "+352", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Luxemburgo
  { numero: "+853", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Macao
  { numero: "+389", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Macedonia del Norte
  { numero: "+261", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Madagascar
  { numero: "+265", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Malaui
  { numero: "+60", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Malasia
  { numero: "+960", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Maldivas
  { numero: "+223", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Malí
  { numero: "+356", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Malta
  { numero: "+692", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Islas Marshall
  { numero: "+596", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Martinica
  { numero: "+222", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Mauritania
  { numero: "+230", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Mauricio
  { numero: "+52", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // México
  { numero: "+691", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Estados Federados de Micronesia
  { numero: "+373", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Moldavia
  { numero: "+377", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Mónaco
  { numero: "+976", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Mongolia
  { numero: "+382", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Montenegro
  { numero: "+1664", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Montserrat
  { numero: "+212", clase: "../../Recursos/Imagenes/Flags/Marruecos.webp" }, // Marruecos
  { numero: "+258", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Mozambique
  { numero: "+95", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Birmania (Myanmar)
  { numero: "+264", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Namibia
  { numero: "+674", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Nauru
  { numero: "+977", clase: "../../Recursos/Imagenes/Flags/Nepal.webp" }, // Nepal
  { numero: "+31", clase: "../../Recursos/Imagenes/Flags/Países_Bajos.webp" },  // Países Bajos
  { numero: "+687", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Nueva Caledonia
  { numero: "+64", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Nueva Zelanda
  { numero: "+505", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Nicaragua
  { numero: "+227", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Níger
  { numero: "+234", clase: "../../Recursos/Imagenes/Flags/Nigeria.webp" }, // Nigeria
  { numero: "+683", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Niue
  { numero: "+672", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Isla Norfolk
  { numero: "+850", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Corea del Norte
  { numero: "+82", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Corea del sur
  { numero: "+1‑670", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Islas Marianas del Norte
  { numero: "+47", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Noruega
  { numero: "+968", clase: "../../Recursos/Imagenes/Flags/Omán.webp" }, // Omán
  { numero: "+92", clase: "../../Recursos/Imagenes/Flags/Pakistán.webp" },  // Pakistán
  { numero: "+680", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Palaos
  { numero: "+970", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Palestina
  { numero: "+507", clase: "../../Recursos/Imagenes/Flags/Panamá.webp" }, // Panamá
  { numero: "+675", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Papúa Nueva Guinea
  { numero: "+595", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Paraguay
  { numero: "+51", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Perú
  { numero: "+63", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Filipinas
  { numero: "+48", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Polonia
  { numero: "+351", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Portugal
  { numero: "+1‑787", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Puerto Rico
  { numero: "+974", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Catar
  { numero: "+40", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Rumanía
  { numero: "+7", clase: "../../Recursos/Imagenes/Flags/Rusia.webp" },   // Rusia
  { numero: "+250", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Ruanda
  { numero: "+290", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Santa Elena
  { numero: "+1‑869", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// San Cristóbal y Nieves
  { numero: "+1‑758", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Santa Lucía
  { numero: "+1‑784", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// San Vicente y Granadinas
  { numero: "+685", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Samoa
  { numero: "+378", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // San Marino
  { numero: "+239", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Santo Tomé y Príncipe
  { numero: "+966", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Arabia Saudí
  { numero: "+221", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Senegal
  { numero: "+381", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Serbia
  { numero: "+248", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Seychelles
  { numero: "+232", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Sierra Leona
  { numero: "+65", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Singapur
  { numero: "+1‑721", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// San Martín
  { numero: "+421", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Eslovaquia
  { numero: "+386", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Eslovenia
  { numero: "+677", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Islas Salomón
  { numero: "+252", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Somalia
  { numero: "+27", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Sudáfrica
  { numero: "+500", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Georgia del Sur e Islas Sandwich del Sur
  { numero: "+211", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Sudán del Sur
  { numero: "+34", clase: "../../Recursos/Imagenes/Flags/España.webp" },  // España
  { numero: "+94", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Sri Lanka
  { numero: "+249", clase: "../../Recursos/Imagenes/Flags/Sudán.webp" }, // Sudán
  { numero: "+597", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Surinam
  { numero: "+47", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Noruega (Svalbard y Jan Mayen)
  { numero: "+46", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Suecia
  { numero: "+41", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Suiza
  { numero: "+963", clase: "../../Recursos/Imagenes/Flags/Siria.webp" }, // Siria
  { numero: "+886", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Taiwán
  { numero: "+992", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Tayikistán
  { numero: "+255", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Tanzania
  { numero: "+66", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Tailandia
  { numero: "+670", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Timor Oriental
  { numero: "+228", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Togo
  { numero: "+690", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Tokelau
  { numero: "+676", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Tonga
  { numero: "+1‑868", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Trinidad y Tobago
  { numero: "+216", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Túnez
  { numero: "+90", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Turquía
  { numero: "+993", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Turkmenistán
  { numero: "+1‑649", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Islas Turcas y Caicos
  { numero: "+688", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Tuvalu
  { numero: "+1‑340, +1‑758", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Islas Vírgenes (EE. UU.)
  { numero: "+256", clase: "../../Recursos/Imagenes/Flags/Uganda.webp" }, // Uganda
  { numero: "+380", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Ucrania
  { numero: "+971", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Emiratos Árabes Unidos
  { numero: "+44‑20", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Reino Unido
  { numero: "+1‑284", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },// Islas Vírgenes Británicas
  { numero: "+598", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Uruguay
  { numero: "+998", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Uzbekistán
  { numero: "+678", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Vanuatu
  { numero: "+379", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Ciudad del Vaticano
  { numero: "+58", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Venezuela
  { numero: "+84", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Vietnam
  { numero: "+212", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Sáhara Occidental
  { numero: "+967", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Yemen
  { numero: "+260", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }, // Zambia
  { numero: "+263", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" }  // Zimbabue
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
