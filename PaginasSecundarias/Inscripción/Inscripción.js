const Select=document.getElementById("Prefijo");
const paises = [
  { numero: "España +34", clase: "../../Recursos/Imagenes/Flags/España.webp" },  // España
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
  { numero: "Costa de Marfil +225", clase: "../../Recursos/Imagenes/Flags/Costa_de_Marfil.png" },  // Costa de Marfil
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
  { numero: "Guayana Francesa +594", clase: "../../Recursos/Imagenes/Flags/Guayana_Francesa.png" },  // Guayana Francesa
  { numero: "Polinesia Francesa +689", clase: "../../Recursos/Imagenes/Flags/Polinesia_Francesa.png" },  // Polinesia Francesa
  { numero: "Gabón +241", clase: "../../Recursos/Imagenes/Flags/Gabón.png" },  // Gabón
  { numero: "Gambia +220", clase: "../../Recursos/Imagenes/Flags/Gambia.png" },  // Gambia
  { numero: "Georgia +995", clase: "../../Recursos/Imagenes/Flags/Georgia.png" },  // Georgia
  { numero: "Alemania +49", clase: "../../Recursos/Imagenes/Flags/Alemania.png" },   // Alemania
  { numero: "Ghana +233", clase: "../../Recursos/Imagenes/Flags/Ghana.png" },  // Ghana
  { numero: "Gibraltar +350", clase: "../../Recursos/Imagenes/Flags/Gibraltar.png" },  // Gibraltar
  { numero: "Grecia +30", clase: "../../Recursos/Imagenes/Flags/Grecia.png" },   // Grecia
  { numero: "Groenlandia +299", clase: "../../Recursos/Imagenes/Flags/Groenlandia.png" },  // Groenlandia
  { numero: "Granada +1‑473", clase: "../../Recursos/Imagenes/Flags/Granada.png" },// Granada
  { numero: "Guam +1‑671", clase: "../../Recursos/Imagenes/Flags/Guam.png" },// Guam
  { numero: "Guatemala +502", clase: "../../Recursos/Imagenes/Flags/Guatemala.png" },  // Guatemala
  { numero: "Guernesey +44‑1481", clase: "../../Recursos/Imagenes/Flags/Guernesey.png" },// Guernesey
  { numero: "Guinea +224", clase: "../../Recursos/Imagenes/Flags/Guinea.png" },  // Guinea
  { numero: "Guinea-Bisáu +245", clase: "../../Recursos/Imagenes/Flags/Guinea-Bisáu.png" },  // Guinea-Bisáu
  { numero: "Guyana +595", clase: "../../Recursos/Imagenes/Flags/Guyana.png" },  // Guyana
  { numero: "Haití +509", clase: "../../Recursos/Imagenes/Flags/Haití.png" },  // Haití
  { numero: "Honduras +504", clase: "../../Recursos/Imagenes/Flags/Honduras.png" },  // Honduras
  { numero: "Hong Kong +852", clase: "../../Recursos/Imagenes/Flags/Hong_Kong.png" },  // Hong Kong
  { numero: "Hungría +36", clase: "../../Recursos/Imagenes/Flags/Hungría.png" },   // Hungría
  { numero: "Islandia +354", clase: "../../Recursos/Imagenes/Flags/Islandia.png" },  // Islandia
  { numero: "India +91", clase: "../../Recursos/Imagenes/Flags/India.png" },   // India
  { numero: "Indonesia +62", clase: "../../Recursos/Imagenes/Flags/Indonesia.png" },   // Indonesia
  { numero: "Irán +98", clase: "../../Recursos/Imagenes/Flags/Irán.png" },   // Irán
  { numero: "Irak +964", clase: "../../Recursos/Imagenes/Flags/Irak.png" },  // Irak
  { numero: "Irlanda +353", clase: "../../Recursos/Imagenes/Flags/Irlanda.png" },  // Irlanda
  { numero: "Isla de Man +44", clase: "../../Recursos/Imagenes/Flags/Isla_de_Man.png" },  // Isla de Man
  { numero: "Israel +972", clase: "../../Recursos/Imagenes/Flags/Israel.webp" }, // Israel
  { numero: "Italia +39", clase: "../../Recursos/Imagenes/Flags/Italia.png" },  // Italia
  { numero: "Jamaica +1‑876", clase: "../../Recursos/Imagenes/Flags/Jamaica.png" },// Jamaica
  { numero: "Japón +81", clase: "../../Recursos/Imagenes/Flags/Japón.webp" },  // Japón
  { numero: "Jersey +44‑1534", clase: "../../Recursos/Imagenes/Flags/Jersey.png" },// Jersey
  { numero: "Jordania +962", clase: "../../Recursos/Imagenes/Flags/Jordania.png" }, // Jordania
  { numero: "Kazajistán +7", clase: "../../Recursos/Imagenes/Flags/Kazajistán.png" },   // Kazajistán
  { numero: "Kenia +254", clase: "../../Recursos/Imagenes/Flags/Kenia.png" }, // Kenia
  { numero: "Kiribati +686", clase: "../../Recursos/Imagenes/Flags/Kiribati.png" }, // Kiribati
  { numero: "Kosovo +383", clase: "../../Recursos/Imagenes/Flags/Kosovo.png" }, // Kosovo (uso no oficial, “xk” en algunos sistemas)
  { numero: "Kuwait +965", clase: "../../Recursos/Imagenes/Flags/Kuwait.png" }, // Kuwait
  { numero: "Kirguistán +996", clase: "../../Recursos/Imagenes/Flags/Kirguistán.png" }, // Kirguistán
  { numero: "Laos +856", clase: "../../Recursos/Imagenes/Flags/Laos.png" }, // Laos
  { numero: "Letonia +371", clase: "../../Recursos/Imagenes/Flags/Letonia.png" }, // Letonia
  { numero: "Líbano +961", clase: "../../Recursos/Imagenes/Flags/Líbano.webp" }, // Líbano
  { numero: "Lesoto +266", clase: "../../Recursos/Imagenes/Flags/Lesoto.png" }, // Lesoto
  { numero: "Liberia +231", clase: "../../Recursos/Imagenes/Flags/Liberia.png" }, // Liberia
  { numero: "Libia +218", clase: "../../Recursos/Imagenes/Flags/Libia.png" }, // Libia
  { numero: "Liechtenstein +423", clase: "../../Recursos/Imagenes/Flags/Liechtenstein.png" }, // Liechtenstein
  { numero: "Lituania +370", clase: "../../Recursos/Imagenes/Flags/Lituania.png" }, // Lituania
  { numero: "Luxemburgo +352", clase: "../../Recursos/Imagenes/Flags/Luxemburgo.png" }, // Luxemburgo
  { numero: "Macao +853", clase: "../../Recursos/Imagenes/Flags/Macao.png" }, // Macao
  { numero: "Macedonia del Norte +389", clase: "../../Recursos/Imagenes/Flags/Macedonia_del_Norte.png" }, // Macedonia del Norte
  { numero: "Madagascar +261", clase: "../../Recursos/Imagenes/Flags/Madagascar.png" }, // Madagascar
  { numero: "Malaui +265", clase: "../../Recursos/Imagenes/Flags/Malaui.png" }, // Malaui
  { numero: "Malasia +60", clase: "../../Recursos/Imagenes/Flags/Malasia.png" },  // Malasia
  { numero: "Maldivas +960", clase: "../../Recursos/Imagenes/Flags/Maldivas.png" }, // Maldivas
  { numero: "Malí +223", clase: "../../Recursos/Imagenes/Flags/Malí.png" }, // Malí
  { numero: "Malta +356", clase: "../../Recursos/Imagenes/Flags/Malta.png" }, // Malta
  { numero: "Islas Marshall +692", clase: "../../Recursos/Imagenes/Flags/Islas_Marshall.png" }, // Islas Marshall
  { numero: "Martinica +596", clase: "../../Recursos/Imagenes/Flags/Martinica.png" }, // Martinica
  { numero: "Mauritania +222", clase: "../../Recursos/Imagenes/Flags/Mauritania.png" }, // Mauritania
  { numero: "Mauricio +230", clase: "../../Recursos/Imagenes/Flags/Mauricio.png" }, // Mauricio
  { numero: "México +52", clase: "../../Recursos/Imagenes/Flags/México.png" },  // México
  { numero: "Estados Federados de Micronesia +691", clase: "../../Recursos/Imagenes/Flags/Estados_Federados_de_Micronesia.png" }, // Estados Federados de Micronesia
  { numero: "Moldavia +373", clase: "../../Recursos/Imagenes/Flags/Moldavia.png" }, // Moldavia
  { numero: "Mónaco +377", clase: "../../Recursos/Imagenes/Flags/Mónaco.png" }, // Mónaco
  { numero: "Mongolia +976", clase: "../../Recursos/Imagenes/Flags/Mongolia.png" }, // Mongolia
  { numero: "Montenegro +382", clase: "../../Recursos/Imagenes/Flags/Montenegro.png" }, // Montenegro
  { numero: "Montserrat +1664", clase: "../../Recursos/Imagenes/Flags/Montserrat.png" },// Montserrat
  { numero: "Marruecos +212", clase: "../../Recursos/Imagenes/Flags/Marruecos.webp" }, // Marruecos
  { numero: "Mozambique +258", clase: "../../Recursos/Imagenes/Flags/Mozambique.png" }, // Mozambique
  { numero: "Birmania (Myanmar) +95", clase: "../../Recursos/Imagenes/Flags/Birmania.png" },  // Birmania (Myanmar)
  { numero: "Namibia +264", clase: "../../Recursos/Imagenes/Flags/Namibia.png" }, // Namibia
  { numero: "Nauru +674", clase: "../../Recursos/Imagenes/Flags/Nauru.png" }, // Nauru
  { numero: "Nepal +977", clase: "../../Recursos/Imagenes/Flags/Nepal.webp" }, // Nepal
  { numero: "Países Bajos +31", clase: "../../Recursos/Imagenes/Flags/Países_Bajos.webp" },  // Países Bajos
  { numero: "Nueva Caledonia +687", clase: "../../Recursos/Imagenes/Flags/Nueva_Caledonia.png" }, // Nueva Caledonia
  { numero: "Nueva Zelanda +64", clase: "../../Recursos/Imagenes/Flags/Nueva_Zelanda.png" },  // Nueva Zelanda
  { numero: "Nicaragua +505", clase: "../../Recursos/Imagenes/Flags/Nicaragua.png" }, // Nicaragua
  { numero: "Níger +227", clase: "../../Recursos/Imagenes/Flags/Níger.png" }, // Níger
  { numero: "Nigeria +234", clase: "../../Recursos/Imagenes/Flags/Nigeria.webp" }, // Nigeria
  { numero: "Niue +683", clase: "../../Recursos/Imagenes/Flags/Niue.png" }, // Niue
  { numero: "Isla Norfolk +672", clase: "../../Recursos/Imagenes/Flags/Isla_Norfolk.png" }, // Isla Norfolk
  { numero: "Corea del Norte +850", clase: "../../Recursos/Imagenes/Flags/Corea_del_Norte.png" }, // Corea del Norte
  { numero: "Corea del sur +82", clase: "../../Recursos/Imagenes/Flags/Corea_del_sur.png" }, // Corea del sur
  { numero: "Islas Marianas del Norte +1‑670", clase: "../../Recursos/Imagenes/Flags/Islas_Marianas_del_Norte.png" },// Islas Marianas del Norte
  { numero: "Noruega +47", clase: "../../Recursos/Imagenes/Flags/Noruega.png" },  // Noruega
  { numero: "Omán +968", clase: "../../Recursos/Imagenes/Flags/Omán.webp" }, // Omán
  { numero: "Pakistán +92", clase: "../../Recursos/Imagenes/Flags/Pakistán.webp" },  // Pakistán
  { numero: "Palaos +680", clase: "../../Recursos/Imagenes/Flags/Palaos.png" }, // Palaos
  { numero: "Palestina +970", clase: "../../Recursos/Imagenes/Flags/Palestina.png" }, // Palestina
  { numero: "Panamá +507", clase: "../../Recursos/Imagenes/Flags/Panamá.webp" }, // Panamá
  { numero: "Papúa Nueva Guinea +675", clase: "../../Recursos/Imagenes/Flags/Papúa_Nueva_Guinea.png" }, // Papúa Nueva Guinea
  { numero: "Paraguay +595", clase: "../../Recursos/Imagenes/Flags/Paraguay.png" }, // Paraguay
  { numero: "Perú +51", clase: "../../Recursos/Imagenes/Flags/Perú.png" },  // Perú
  { numero: "Filipinas +63", clase: "../../Recursos/Imagenes/Flags/Filipinas.png" },  // Filipinas
  { numero: "Polonia +48", clase: "../../Recursos/Imagenes/Flags/Polonia.png" },  // Polonia
  { numero: "Portugal +351", clase: "../../Recursos/Imagenes/Flags/Portugal.png" }, // Portugal
  { numero: "Puerto Rico +1‑787", clase: "../../Recursos/Imagenes/Flags/Puerto_Rico.png" },// Puerto Rico
  { numero: "Catar +974", clase: "../../Recursos/Imagenes/Flags/Catar.png" }, // Catar
  { numero: "Rumanía +40", clase: "../../Recursos/Imagenes/Flags/Rumanía.png" },  // Rumanía
  { numero: "Rusia +7", clase: "../../Recursos/Imagenes/Flags/Rusia.webp" },   // Rusia
  { numero: "Ruanda +250", clase: "../../Recursos/Imagenes/Flags/Ruanda.png" }, // Ruanda
  { numero: "Santa Elena +290", clase: "../../Recursos/Imagenes/Flags/Santa_Elena.png" }, // Santa Elena
  { numero: "San Cristóbal y Nieves +1‑869", clase: "../../Recursos/Imagenes/Flags/San_Cristóbal_y_Nieves.png" },// San Cristóbal y Nieves
  { numero: "Santa Lucía +1‑758", clase: "../../Recursos/Imagenes/Flags/Santa_Lucía.png" },// Santa Lucía
  { numero: "San Vicente y Granadinas +1‑784", clase: "../../Recursos/Imagenes/Flags/San_Vicente_y_Granadinas.png" },// San Vicente y Granadinas
  { numero: "Samoa +685", clase: "../../Recursos/Imagenes/Flags/Samoa.png" }, // Samoa
  { numero: "San Marino +378", clase: "../../Recursos/Imagenes/Flags/San_Marino.png" }, // San Marino
  { numero: "Santo Tomé y Príncipe +239", clase: "../../Recursos/Imagenes/Flags/Santo_Tomé_y_Príncipe.png" }, // Santo Tomé y Príncipe
  { numero: "Arabia Saudí +966", clase: "../../Recursos/Imagenes/Flags/Arabia_Saudí.png" }, // Arabia Saudí
  { numero: "Senegal +221", clase: "../../Recursos/Imagenes/Flags/Senegal.png" }, // Senegal
  { numero: "Serbia +381", clase: "../../Recursos/Imagenes/Flags/Serbia.png" }, // Serbia
  { numero: "Seychelles +248", clase: "../../Recursos/Imagenes/Flags/Seychelles.png" }, // Seychelles
  { numero: "Sierra Leona+232", clase: "../../Recursos/Imagenes/Flags/Sierra_Leona.png" }, // Sierra Leona
  { numero: "Singapur +65", clase: "../../Recursos/Imagenes/Flags/Singapur.png" },  // Singapur
  { numero: "San Martín +1‑721", clase: "../../Recursos/Imagenes/Flags/San_Martín.png" },// San Martín
  { numero: "Eslovaquia +421", clase: "../../Recursos/Imagenes/Flags/Eslovaquia.png" }, // Eslovaquia
  { numero: "Eslovenia +386", clase: "../../Recursos/Imagenes/Flags/Eslovenia.png" }, // Eslovenia
  { numero: "Islas Salomón +677", clase: "../../Recursos/Imagenes/Flags/Islas_Salomón.png" }, // Islas Salomón
  { numero: "Somalia +252", clase: "../../Recursos/Imagenes/Flags/Somalia.png" }, // Somalia
  { numero: "Sudáfrica+27", clase: "../../Recursos/Imagenes/Flags/Sudáfrica.png" },  // Sudáfrica
  { numero: "Georgia e Islas Sandwich del Sur +500", clase: "../../Recursos/Imagenes/Flags/Georgia_del_Sur_e_Islas_Sandwich_del_Sur.png" }, // Georgia del Sur e Islas Sandwich del Sur
  { numero: "Sudán del Sur +211", clase: "../../Recursos/Imagenes/Flags/Sudán_del_Sur.png" }, // Sudán del Sur
  { numero: "Sri Lanka +94", clase: "../../Recursos/Imagenes/Flags/Sri_Lanka.png" },  // Sri Lanka
  { numero: "Sudán +249", clase: "../../Recursos/Imagenes/Flags/Sudán.webp" }, // Sudán
  { numero: "Surinam +597", clase: "../../Recursos/Imagenes/Flags/Surinam.png" }, // Surinam
  { numero: "Noruega +47", clase: "../../Recursos/Imagenes/Flags/Noruega.png" },  // Noruega (Svalbard y Jan Mayen)
  { numero: "Suecia +46", clase: "../../Recursos/Imagenes/Flags/Suecia.png" },  // Suecia
  { numero: "Suiza +41", clase: "../../Recursos/Imagenes/Flags/Suiza.png" },  // Suiza
  { numero: "Siria +963", clase: "../../Recursos/Imagenes/Flags/Siria.webp" }, // Siria
  { numero: "Taiwán +886", clase: "../../Recursos/Imagenes/Flags/Taiwán.png" }, // Taiwán
  { numero: "Tayikistán +992", clase: "../../Recursos/Imagenes/Flags/Tayikistán.png" }, // Tayikistán
  { numero: "Tanzania +255", clase: "../../Recursos/Imagenes/Flags/Tanzania.png" }, // Tanzania
  { numero: "Tailandia +66", clase: "../../Recursos/Imagenes/Flags/Tailandia.png" },  // Tailandia
  { numero: "Timor Oriental +670", clase: "../../Recursos/Imagenes/Flags/Timor_Oriental.png" }, // Timor Oriental
  { numero: "Togo +228", clase: "../../Recursos/Imagenes/Flags/Togo.png" }, // Togo
  { numero: "Tokelau +690", clase: "../../Recursos/Imagenes/Flags/Tokelau.png" }, // Tokelau
  { numero: "Tonga +676", clase: "../../Recursos/Imagenes/Flags/Tonga.png" }, // Tonga
  { numero: "Trinidad y Tobago +1‑868", clase: "../../Recursos/Imagenes/Flags/Trinidad_y_Tobago.png" },// Trinidad y Tobago
  { numero: "Túnez +216", clase: "../../Recursos/Imagenes/Flags/Túnez.png" }, // Túnez
  { numero: "Turquía +90", clase: "../../Recursos/Imagenes/Flags/Turquía.png" },  // Turquía
  { numero: "Turkmenistán +993", clase: "../../Recursos/Imagenes/Flags/Turkmenistán.png" }, // Turkmenistán
  { numero: "Islas Turcas y Caicos +1‑649", clase: "../../Recursos/Imagenes/Flags/Islas_Turcas_y_Caicos.png" },// Islas Turcas y Caicos
  { numero: "Tuvalu +688", clase: "../../Recursos/Imagenes/Flags/Tuvalu.png" }, // Tuvalu
  { numero: "Islas Vírgenes (EE. UU.) +1‑340, +1‑758", clase: "../../Recursos/Imagenes/Flags/Islas_Vírgenes_(EE._UU.).png" },// Islas Vírgenes (EE. UU.)
  { numero: "Uganda +256", clase: "../../Recursos/Imagenes/Flags/Uganda.webp" }, // Uganda
  { numero: "Ucrania +380", clase: "../../Recursos/Imagenes/Flags/Ucrania.png" }, // Ucrania
  { numero: "Emiratos Árabes Unidos +971", clase: "../../Recursos/Imagenes/Flags/Emiratos_Árabes_Unidos.png" }, // Emiratos Árabes Unidos
  { numero: "Reino Unido +44‑20", clase: "../../Recursos/Imagenes/Flags/Reino_Unido.webp" },// Reino Unido
  { numero: "Islas Vírgenes Británicas +1‑284", clase: "../../Recursos/Imagenes/Flags/Islas_Vírgenes_Británicas.png" },// Islas Vírgenes Británicas
  { numero: "Uruguay +598", clase: "../../Recursos/Imagenes/Flags/Uruguay.png" }, // Uruguay
  { numero: "Uzbekistán +998", clase: "../../Recursos/Imagenes/Flags/Uzbekistán.png" }, // Uzbekistán
  { numero: "Vanuatu +678", clase: "../../Recursos/Imagenes/Flags/Vanuatu.png" }, // Vanuatu
  { numero: "Ciudad del Vaticano +379", clase: "../../Recursos/Imagenes/Flags/Ciudad_del_Vaticano.png" }, // Ciudad del Vaticano
  { numero: "Venezuela +58", clase: "../../Recursos/Imagenes/Flags/Venezuela.png" },  // Venezuela
  { numero: "Vietnam +84", clase: "../../Recursos/Imagenes/Flags/Vietnam.png" },  // Vietnam
  { numero: "Sáhara Occidental +212", clase: "../../Recursos/Imagenes/Flags/Sáhara_Occidental.png" }, // Sáhara Occidental
  { numero: "Yemen +967", clase: "../../Recursos/Imagenes/Flags/Yemen.png" }, // Yemen
  { numero: "Zambia +260", clase: "../../Recursos/Imagenes/Flags/Zambia.png" }, // Zambia
  { numero: "Zimbabue +263", clase: "../../Recursos/Imagenes/Flags/Zimbabue.png" }  // Zimbabue
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
