const Select=document.getElementById("Prefijo");
const paises = [
  { numero: "Afganistán +93", clase: "../../Recursos/Imagenes/Flags/afganistan.png" },   // Afganistán
  { numero: "Albania +355", clase: "../../Recursos/Imagenes/Flags/albania.png" },  // Albania
  { numero: "Argelia +213", clase: "../../Recursos/Imagenes/Flags/argelia.png" },  // Argelia
  { numero: "Andorra +1‑684", clase: "../../Recursos/Imagenes/Flags/samoa-americana.png" },// Samoa Americana
  { numero: "Andorra +376", clase: "../../Recursos/Imagenes/Flags/Andorra.png" },  // Andorra
  { numero: "Angola +244", clase: "../../Recursos/Imagenes/Flags/Angola.png" },  // Angola
  { numero: "Anguilla +1‑264", clase: "../../Recursos/Imagenes/Flags/Anguilla.png" },// Anguilla
  { numero: "Antártica +672", clase: "../../Recursos/Imagenes/Flags/Antártica.png" },  // Antártica
  { numero: "Antigua y Barbuda +1‑268", clase: "../../Recursos/Imagenes/Flags/Antigua_y_Barbuda.png" },// Antigua y Barbuda
  { numero: "Argentina +54", clase: "../../Recursos/Imagenes/Flags/Argentina.png" },   // Argentina
  { numero: "Armenia +374", clase: "../../Recursos/Imagenes/Flags/Armenia.png" },  // Armenia
  { numero: "Aruba +297", clase: "../../Recursos/Imagenes/Flags/Aruba.png" },  // Aruba
  { numero: "Australia +61", clase: "../../Recursos/Imagenes/Flags/Australia.png" },   // Australia
  { numero: "Austria +43", clase: "../../Recursos/Imagenes/Flags/Austria.png" },   // Austria
  { numero: "Azerbaiyán +994", clase: "../../Recursos/Imagenes/Flags/Azerbaiyan.png" },  // Azerbaiyán
  { numero: "Bahamas +1‑242", clase: "../../Recursos/Imagenes/Flags/Bahamas.png" },// Bahamas
  { numero: "Baréin +973", clase: "../../Recursos/Imagenes/Flags/Barein.png" },  // Baréin
  { numero: "Bangladés +880", clase: "../../Recursos/Imagenes/Flags/Banglades.png" },  // Bangladés
  { numero: "Barbados +1‑246", clase: "../../Recursos/Imagenes/Flags/Barbados.png" },// Barbados
  { numero: "Bielorrusia +375", clase: "../../Recursos/Imagenes/Flags/Bielorrusia.png" },  // Bielorrusia
  { numero: "Bélgica +32", clase: "../../Recursos/Imagenes/Flags/Bélgica.png" },   // Bélgica
  { numero: "Belice +501", clase: "../../Recursos/Imagenes/Flags/Belice.png" },  // Belice
  { numero: "Benín +229", clase: "../../Recursos/Imagenes/Flags/Benín.png" },  // Benín
  { numero: "Bermudas +1‑441", clase: "../../Recursos/Imagenes/Flags/Bermudas.png" },// Bermudas
  { numero: "Bután +975", clase: "../../Recursos/Imagenes/Flags/Bután.png" },  // Bután
  { numero: "Bolivia +591", clase: "../../Recursos/Imagenes/Flags/Bolivia.png" },  // Bolivia
  { numero: "Bosnia y Herzegovina +387", clase: "../../Recursos/Imagenes/Flags/Bosnia_y_Herzegovina.png" },  // Bosnia y Herzegovina
  { numero: "Botsuana +267", clase: "../../Recursos/Imagenes/Flags/Botsuana.png" },  // Botsuana
  { numero: "Brasil +55", clase: "../../Recursos/Imagenes/Flags/Brasil.png" },   // Brasil
  { numero: "Océano Índico Británico +246", clase: "../../Recursos/Imagenes/Flags/Territorio_Británico_del_Océano_Índico.png" },  // Territorio Británico del Océano Índico
  { numero: "Brunéi +673", clase: "../../Recursos/Imagenes/Flags/Brunéi.png" },  // Brunéi
  { numero: "Bulgaria +359", clase: "../../Recursos/Imagenes/Flags/Bulgaria.png" },  // Bulgaria
  { numero: "Burkina Faso +226", clase: "../../Recursos/Imagenes/Flags/Burkina_Faso.png" },  // Burkina Faso
  { numero: "Burundi +257", clase: "../../Recursos/Imagenes/Flags/Burundi.png" },  // Burundi
  { numero: "Camboya +855", clase: "../../Recursos/Imagenes/Flags/Camboya.png" },  // Camboya
  { numero: "Camerún +237", clase: "../../Recursos/Imagenes/Flags/Camerún.png" },  // Camerún
  { numero: "Canadá+1", clase: "../../Recursos/Imagenes/Flags/Canadá.png" },    // Canadá
  { numero: "Cabo Verde +238", clase: "../../Recursos/Imagenes/Flags/Cabo_Verde.png" },  // Cabo Verde
  { numero: "Islas Caimán +345", clase: "../../Recursos/Imagenes/Flags/Islas_Caimán.png" }, // Islas Caimán
  { numero: "República Centroafricana+236", clase: "../../Recursos/Imagenes/Flags/República_Centroafricana.png" },  // República Centroafricana
  { numero: "Chad +235", clase: "../../Recursos/Imagenes/Flags/Chad.png" },  // Chad
  { numero: "Chile +56", clase: "../../Recursos/Imagenes/Flags/Chile.png" },   // Chile
  { numero: "China +86", clase: "../../Recursos/Imagenes/Flags/China.png" },   // China
  { numero: "Isla Christmas +61", clase: "../../Recursos/Imagenes/Flags/Isla_Christmas.png" },   // Isla Christmas
  { numero: "Islas Cocos (Keeling) +61", clase: "../../Recursos/Imagenes/Flags/Islas_Cocos_(Keeling).png" },   // Islas Cocos (Keeling)
  { numero: "Colombia +57", clase: "../../Recursos/Imagenes/Flags/Colombia.png" },   // Colombia
  { numero: "Comoras +269", clase: "../../Recursos/Imagenes/Flags/Comoras.png" },  // Comoras
  { numero: "Congo +242", clase: "../../Recursos/Imagenes/Flags/Congo.png" },  // Congo
  { numero: "República Democrática del Congo +243", clase: "../../Recursos/Imagenes/Flags/República_Democrática_del_Congo.png" },  // República Democrática del Congo
  { numero: "Islas Cook +672", clase: "../../Recursos/Imagenes/Flags/Islas_Cook.png" },  // Islas Cook
  { numero: "Costa Rica +506", clase: "../../Recursos/Imagenes/Flags/Costa_Rica.png" },  // Costa Rica
  { numero: "Costa de Marfil +225", clase: "../../Recursos/Imagenes/Flags/Costa _de_Marfil.png" },  // Costa de Marfil
  { numero: "Croacia +385", clase: "../../Recursos/Imagenes/Flags/Croacia.png" },  // Croacia
  { numero: "Cuba +53", clase: "../../Recursos/Imagenes/Flags/Cuba.png" },  // Cuba
  { numero: "Curazao +537", clase: "../../Recursos/Imagenes/Flags/Curazao.png" },  // Curazao
  { numero: "Chipre +357", clase: "../../Recursos/Imagenes/Flags/Chipre.png" },  // Chipre
  { numero: "República Checa +420", clase: "../../Recursos/Imagenes/Flags/República_Checa.png" },  // República Checa
  { numero: "Dinamarca +45", clase: "../../Recursos/Imagenes/Flags/Dinamarca.png" },   // Dinamarca
  { numero: "Yibuti +253", clase: "../../Recursos/Imagenes/Flags/Yibuti.png" },  // Yibuti
  { numero: "Dominica +1‑767", clase: "../../Recursos/Imagenes/Flags/Dominica.png" },// Dominica
  { numero: "República Dominicana +1‑849", clase: "../../Recursos/Imagenes/Flags/República_Dominicana.png" },// República Dominicana
  { numero: "Ecuador +593", clase: "../../Recursos/Imagenes/Flags/Ecuador.png" },  // Ecuador
  { numero: "Egipto +20", clase: "../../Recursos/Imagenes/Flags/Egipto.png" },   // Egipto
  { numero: "El Salvador +503", clase: "../../Recursos/Imagenes/Flags/El_Salvador.png" },  // El Salvador
  { numero: "Guinea Ecuatorial +240", clase: "../../Recursos/Imagenes/Flags/Guinea_Ecuatorial.png" },  // Guinea Ecuatorial
  { numero: "Eritrea +291", clase: "../../Recursos/Imagenes/Flags/Eritrea.png" },  // Eritrea
  { numero: "Estonia +372", clase: "../../Recursos/Imagenes/Flags/Estonia.png" },  // Estonia
  { numero: "Etiopía +251", clase: "../../Recursos/Imagenes/Flags/Etiopía.png" },  // Etiopía
  { numero: "Islas Malvinas +500", clase: "../../Recursos/Imagenes/Flags/Islas_Malvinas.png" },  // Islas Malvinas
  { numero: "Islas Feroe +298", clase: "../../Recursos/Imagenes/Flags/Islas_Feroe.png" },  // Islas Feroe
  { numero: "Fiyi +679", clase: "../../Recursos/Imagenes/Flags/Fiyi.png" },  // Fiyi
  { numero: "Finlandia +358", clase: "../../Recursos/Imagenes/Flags/Finlandia.png" },  // Finlandia
  { numero: "Francia +33", clase: "../../Recursos/Imagenes/Flags/Francia.webp" },   // Francia
  { numero: "Guadalupe +590", clase: "../../Recursos/Imagenes/Flags/Francia.webp" },   // Guadalupe
  { numero: "Mayotte +262", clase: "../../Recursos/Imagenes/Flags/Francia.webp" },   // Mayotte
  { numero: "Wallis y Futuna +681", clase: "../../Recursos/Imagenes/Flags/Francia.webp" },   // Wallis y Futuna
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
