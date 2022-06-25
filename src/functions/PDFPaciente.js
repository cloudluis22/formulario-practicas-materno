/* eslint-disable no-useless-concat */
import jsPDF from "jspdf";

export const PDFPaciente = (info, id, nombre) => {

    if( !info[0] || !info[1] || !info[2] || !info[3] || !info[4] || !info[5] || !info[6] || !info[7] || !info[8] || !info[9] || !info[10] ) {
        alert('El formulario tiene que estar completo para poder generar PDF.');
        return;
    }

    console.log(info);

    // Creando el PDF
    const doc = new jsPDF();

    // Establecemos el ancho de las lineas.
    doc.setLineWidth(0.6);

    // TITULO DE LA TABLA:
    doc.setFontSize(18); // Fuente tamaño 16
    doc.text(20, 20, 'Datos Generales del Paciente'); // Nombre de la tabla
    doc.line(20, 22, 200, 22); // Linea.

    // CONTENIDO DE LA TABLA

    doc.setFontSize(14);
    doc.text(20, 32, 'Nombre del Paciente'); // Titulo de la información.
    doc.setFontSize(12);
    doc.text(20, 37, `${info[0].NombrePaciente || 'N/A'}`); // Información.

    doc.setFontSize(14);
    doc.text(20, 47, '¿Cómo le gusta que le llamen?'); 
    doc.setFontSize(12);
    doc.text(20, 52, `${info[0].NombrePreferido || 'N/A'}`); 

    doc.setFontSize(14);
    doc.text(20, 62, 'Edad'); 
    doc.setFontSize(12);
    doc.text(20, 67, `${info[0].Edad} años` || 'N/A');

    doc.setFontSize(14);
    doc.text(20, 77, 'Género'); 
    doc.setFontSize(12);
    doc.text(20, 82, `${info[0].Genero}` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 92, 'Gustos Personales'); 
    doc.setFontSize(12);
    doc.text(20, 97, `${info[0].GustosPersonales}` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 107, 'Padre/Madre/Tutor'); 
    doc.setFontSize(12);
    doc.text(20, 112, `${info[0].PadreMadreTutor}` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 122, '¿Quién cuida a su hijo?'); 
    doc.setFontSize(12);
    doc.text(20, 128, `${info[0].TutorEncargado}` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 138, 'Domicilio'); 
    doc.setFontSize(12);
    doc.text(20, 143, `${info[0].Domicilio}` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 153, 'Telefono de Casa'); 
    doc.setFontSize(12);
    doc.text(20, 158, `${info[0].Telefono}` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 168, 'Numero Celular'); 
    doc.setFontSize(12);
    doc.text(20, 173, `${info[0].Celular}` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 183, 'Otro Contacto'); 
    doc.setFontSize(12);
    doc.text(20, 188, `${info[0].OtroContacto}` || 'N/A'); 

    // TABLA ALIMENTACIÓN
    doc.setFontSize(18); 
    doc.text(20, 208, 'Alimentación (Dieta Habitual)'); 
    doc.line(20, 210, 200, 210); 

    doc.setFontSize(14);
    doc.text(20, 220, '¿Cuántas comidas hace al dia?'); 
    doc.setFontSize(12);
    doc.text(20, 225, `${info[1].ComidasDiarias}` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 235, 'Carne'); 
    doc.setFontSize(12);
    doc.text(20, 240, `${info[1].Carne} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 250, 'Frutas'); 
    doc.setFontSize(12);
    doc.text(20, 255, `${info[1].Frutas} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 265, 'Vegetales'); 
    doc.setFontSize(12);
    doc.text(20, 270, `${info[1].Vegetales} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 280, 'Huevo'); 
    doc.setFontSize(12);
    doc.text(20, 285, `${info[1].Huevo} veces x semana.` || 'N/A'); 

    // PÁGINA #2
    doc.addPage();

    doc.setFontSize(14);
    doc.text(20, 20, 'Pescado'); 
    doc.setFontSize(12);
    doc.text(20, 25, `${info[1].Pescado} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 35, 'Agua'); 
    doc.setFontSize(12);
    doc.text(20, 40, `${info[1].Agua} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 50, 'Té'); 
    doc.setFontSize(12);
    doc.text(20, 55, `${info[1].Te} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 65, 'Leche'); 
    doc.setFontSize(12);
    doc.text(20, 70, `${info[1].Leche} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 80, 'Yogurt'); 
    doc.setFontSize(12);
    doc.text(20, 85, `${info[1].Yoghurt} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 95, 'Dulces'); 
    doc.setFontSize(12);
    doc.text(20, 100, `${info[1].Yoghurt} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 110, 'Yogurt'); 
    doc.setFontSize(12);
    doc.text(20, 115, `${info[1].Yoghurt} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 125, 'Dulces'); 
    doc.setFontSize(12);
    doc.text(20, 130, `${info[1].Dulces} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 140, 'Galletas'); 
    doc.setFontSize(12);
    doc.text(20, 145, `${info[1].Galletas} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 155, 'Mermelada'); 
    doc.setFontSize(12);
    doc.text(20, 160, `${info[1].Mermelada} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 170, 'Yakult'); 
    doc.setFontSize(12);
    doc.text(20, 175, `${info[1].Yakult} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 185, 'Pan'); 
    doc.setFontSize(12);
    doc.text(20, 190, `${info[1].Pan} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 200, 'Jugos'); 
    doc.setFontSize(12);
    doc.text(20, 205, `${info[1].Jugos} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 215, 'Jugos'); 
    doc.setFontSize(12);
    doc.text(20, 225, `${info[1].Gomitas} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 235, 'Jugos'); 
    doc.setFontSize(12);
    doc.text(20, 240, `${info[1].Gomitas} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 250, 'Chocolate'); 
    doc.setFontSize(12);
    doc.text(20, 255, `${info[1].Chocolate} veces x semana.` || 'N/A'); 

    doc.setFontSize(14);
    doc.text(20, 265, 'Chicle'); 
    doc.setFontSize(12);
    doc.text(20, 270, `${info[1].Chicle} veces x semana.` || 'N/A'); 

    // PÁGINA #3      
    doc.addPage();

    doc.setFontSize(18); 
    doc.text(20, 20, 'Hábitos de higiene'); 
    doc.line(20, 22, 200, 22); // Linea.

    doc.setFontSize(14);
    doc.text(20, 32, '¿Quién realiza el cepillado dental de su hijo?')
    doc.setFontSize(12);
    doc.text(20, 37, `${info[6].EncargadoCepillado}` || 'N/A')

//UuUr
    doc.setFontSize(14);
    doc.text(20,47,'¿Cuántas veces al día se cepilla los dientes?')
    doc.setFontSize(12);
    doc.text(20,52,`${info[6].CepilladosDiarios}` || 'N/A')

    doc.setFontSize(14);
    doc.text(20,62,'¿Cómo se llama la pasta que utilizan?')
    doc.setFontSize(12);
    doc.text(20,67,`${info[6].MarcaPastaDental}` || 'N/A')

    doc.setFontSize(14);
    doc.text(20,77,'¿Se cepilla los dientes antes de dormir sin falta? ')
    doc.setFontSize(12);
    doc.text(20,82,`${info[6].CepilladoDiarioDormir}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,92,'¿Utiliza enjuague bucal?')
    doc.setFontSize(12);
    doc.text(20,97,`${info[6].EnjuagueBucal}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,107,'¿Utiliza hilo dental? ')
    doc.setFontSize(12);
    doc.text(20,112,`${info[6].HiloDental}` || 'N/A' )
    
    // ------------- Antecedentes personales -------------------------

    doc.setFontSize(18); 
    doc.text(20, 122, 'Antecedentes Personales (del Niño)'); 
    doc.line(20, 124, 200, 124); // Linea. 

    doc.setFontSize(14);
    doc.text(20,134,'¿Goza su hijo de buena salud?')
    doc.setFontSize(12);
    doc.text(20,139,`${info[4].BuenaSalud}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,149,'¿Ha estado hospitalizado?')
    doc.setFontSize(12);
    doc.text(20,154,`${info[4].hospitalizado}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,164,'¿Su hijo realiza algún deporte?')
    doc.setFontSize(12);
    doc.text(20,169,`${info[4].RealizaDeporte}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,179,'Veces a la semana')
    doc.setFontSize(12);
    doc.text(20,184,`${info[4].LblRealizaDeporte}` || 'N/A' )

    doc.setFontSize(14);                                                                                                                                                                                                                                                                   
    doc.text(20,194,'¿Es alérgico a algún medicamento ó alimento?')
    doc.setFontSize(12);
    doc.text(20,199,`${info[4].AlergiasMedAlim}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,209,'¿A cuál (es)')
    doc.setFontSize(12);
    doc.text(20,214,`${info[4].LblAlergiasMedAlim}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,224,'¿Tiene o ha tenido su hijo algún trastorno emocional o mental?')
    doc.setFontSize(12);
    doc.text(20,229,`${info[4].TrastornoMentalEmocional}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,239,'Especificar: ')
    doc.setFontSize(12);
    doc.text(20,244,`${info[4].LblTrastornoMentalEmocional}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,254,'¿Tiene dificultades en la escuela?')
    doc.setFontSize(12);
    doc.text(20,259,`${info[4].DificultadesEscolares}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,269,'¿Respira por la boca? ')
    doc.setFontSize(12);
    doc.text(20,274,`${info[4].RespiraPorBoca}` || 'N/A' )

    doc.addPage();

    doc.setFontSize(14);
    doc.text(20,20,'¿Padece su hijo apnea del sueño (ronca)? ')
    doc.setFontSize(12);
    doc.text(20,24,`${info[4].ApneaRoncar}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,34,'¿Ha observado a su hijo succionar su labio o alguno de sus dedos?')
    doc.setFontSize(12);
    doc.text(20,39,`${info[4].ChupaLabioDedos}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,49,'¿Con qué frecuencia?')
    doc.setFontSize(12);
    doc.text(20,54,`${info[4].LblChupaLabioDedos}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,64,'¿Su hijo padece o ha padecido alguna de las siguientes enfermedades?')
    doc.setFontSize(12);
    doc.text(20,69,`${info[4].Asma}` || 'N/A' )

    doc.setFontSize(14);
    doc.text(20,79,'Asma: '+`${info[4].Asma}` || 'N/A')
    
    doc.text(20,89,'Sarampión'+`${info[4].Sarampion}` || 'N/A')

    doc.text(20,99,'Fiebre Reumática: '+ `${info[4].FiebreReumatica}` || 'N/A')

    doc.text(20,109,'Paladar hendido: '+ `${info[4].PaladarHendido}` || 'N/A')

    doc.text(20,119,'Tos Ferina: '+ `${info[4].TosFerina}` || 'N/A')

    doc.text(20,129,'Poliomelitis: '+ `${info[4].Poliomelitis}` || 'N/A')

    doc.text(20,139,'Epilepsia: '+ `${info[4].Epilepsia}` || 'N/A')

    doc.text(20,149,'Escarlatina: '+ `${info[4].Escarlatina}` || 'N/A')

    doc.text(20,159,'Tuberculosis '+ `${info[4].Tuberculosis}` || 'N/A')

    doc.text(20,169,'Enf. Cardiaca: '+ `${info[4].EnfermedadCardiaca}` || 'N/A')

    doc.text(20,179,'Paperas: '+ `${info[4].Paperas}` || 'N/A')

    doc.text(20,189,'Hepatitis: '+ `${info[4].Hepatitis}` || 'N/A')

    doc.text(20,199,'Difteria: '+ `${info[4].Difteria}` || 'N/A')

    doc.text(20,209,'Tifoidea: '+ `${info[4].Tifoidea}` || 'N/A')

    doc.text(20,219,'Enf. Renal: '+ `${info[4].EnfermedadRenal}` || 'N/A')

    doc.text(20,229,'Hemofilia: '+ `${info[4].Hemofilia}` || 'N/A')

    doc.text(20,239,'Trast. hepático: '+ `${info[4].TrastornoHepatico}` || 'N/A')

    doc.text(20,249,'Diabetes: '+ `${info[4].Diabetes}` || 'N/A')
    
    doc.text(20,259,'Reflujo: '+ `${info[4].Reflujo}` || 'N/A')

    doc.text(20,269,'Trast. de lenguaje: '+ `${info[4].TrastornoDeLenguaje}` || 'N/A')

    doc.text(20,279,'Otros: '+ `${info[4].Otros}` || 'N/A')

    doc.addPage();

    doc.text(20,20,'¿Se encuentra bajo algún tratamiento médico?: '+ `${info[4].TratamientosActivos}` || 'N/A')

    doc.text(20,30,'¿Toma su hijo algún medicamento actualmente?: '+ `${info[4].TomaMedicamentos}` || 'N/A')

    doc.setFontSize(14);
    doc.text(20,40,'¿Cuáles? ')
    doc.setFontSize(12);
    doc.text(20,45,`${info[4].LblTomaMedicamentos}` || 'N/A' )

    doc.text(20,55,'¿La madre tomó medicamentos durante el embarazo?: '+ `${info[4].MadreMedicamentoEmbarazo}` || 'N/A')

    doc.setFontSize(14);
    doc.text(20,65,'¿Cuáles? ')
    doc.setFontSize(12);
    doc.text(20,70,`${info[4].LblMadreMedicamentoEmbarazo}` || 'N/A' )

    doc.text(20,80,'¿La madre sufrió algún accidente durante el embarazo?: '+ `${info[4].AccidentesEmbarazo}` || 'N/A')

    doc.text(20,90,'El parto fue: '+ `${info[4].TipoParto}` || 'N/A')

    doc.text(20,100,'¿En el nacimiento presentó alguna dificultad?: '+ `${info[4].DificultadNacimiento}` || 'N/A')
    
    doc.setFontSize(14);
    doc.text(20,110,'Especificar: ')
    doc.setFontSize(12);
    doc.text(20,115,`${info[4].LblDificultadNacimiento}` || 'N/A' )

    doc.text(20,125,'¿Presentó alguna anomalía congénita (de nacimiento)?: '+ `${info[4].AnomaliaCongenitaNacimiento}` || 'N/A')

    doc.setFontSize(14);
    doc.text(20,135,'Especificar: ')
    doc.setFontSize(12);
    doc.text(20,140,`${info[4].LblAnomaliaCongenitaNacimiento}` || 'N/A' )

    doc.text(20,150,'¿Su hijo ha sido anestesiado anteriormente?: '+ `${info[4].HaSidoAnestesiado}` || 'N/A')

    doc.text(20,160,'¿Tuvo alguna reacción adversa?: '+ `${info[4].ReaccionAnestesia}` || 'N/A')

    doc.setFontSize(14);
    doc.text(20,170,'Especifique: ')
    doc.setFontSize(12);
    doc.text(20,175,`${info[4].LblReaccionAnestesia}` || 'N/A' )

     //------------------------------------------------------

    doc.setFontSize(18); 
    doc.text(20, 185, 'Amamantación / Alimentación en bebés'); 
    doc.line(20, 187, 200, 187); // Linea. 

    
    doc.setFontSize(14);
    doc.text(20,197, 'Su bebé toma / tomó pecho?')
    doc.setFontSize(12);
    doc.text(20, 202,`${info[2].ANPecho}`|| 'N/A' )

    doc.setFontSize(14);
    doc.text(20,212, '¿Hasta qué edad tomó pecho?')
    doc.setFontSize(12);
    doc.text(20, 217,`${info[2].LblTomaPechoEdad}`|| 'N/A' )

    doc.setFontSize(14);
    doc.text(20,227, 'Frecuencia:')
    doc.setFontSize(12);
    doc.text(20, 232,`${info[2].LblFrecuenciaAlimentacionPecho}`|| 'N/A' )

    doc.setFontSize(14);
    doc.text(20,242, '¿Cuál es/era el contenido de su biberón?')
    doc.setFontSize(12);
    doc.text(20, 247, info[2].CBLecheMaterna ? '• USO leche materna' : '• NO USO leche materna' );
    doc.text(20, 252, info[2].CBLecheFormula ? '• USO formula' : '• NO USO formula' );
    doc.text(20, 257, info[2].CBChocolate ? '• USO chocolate' : '• NO USO chocolate' );
    doc.text(20, 262, info[2].CBAzucar ? '• USO azucar' : '• NO USO azucar'  );
    doc.text(20, 267, info[3].CBTe ? '• USO Té' : '• NO USO té');

    doc.setFontSize(14);
    doc.text(20,277, '¿Hasta qué edad uso el chupón?')
    doc.setFontSize(12);
    doc.text(20, 282,`${info[2].LblUsabaBiberon}`|| 'N/A' )

    doc.addPage();

    doc.setFontSize(14);
    doc.text(20, 20, '¿Su bebé sigue teniendo alimentación nocturna?'); 
    doc.setFontSize(12);
    doc.text(20, 25, `${info[2].AlimentacionNocturna || 'N/A'}`); 

    doc.setFontSize(12);
    doc.text(20, 35, info[2].ANBiberon ? '• USO biberón' : '• NO USO biberón' );
    doc.text(20, 40, info[2].ANPecho ? '• USO formula' : '• NO USO formula' );
    doc.text(20, 45, info[2].ANVasoEntrenador ? '• USO chocolate' : '• NO USO chocolate' );
    doc.text(20, 50, `OTRO: ${info[2].LblAlimentacionNocturna}` );
    
    doc.setFontSize(14);
    doc.text(20, 60, '¿Limpia su boquita antes de la alimentación nocturna?'); 
    doc.setFontSize(12);
    doc.text(20, 65, `${info[2].LimpiaSuBoquita || 'N/A'}`); 

    doc.setFontSize(14);
    doc.text(20, 75, '¿Su bebé come alimentos solidos?'); 
    doc.setFontSize(12);
    doc.text(20, 80, `${info[2].BebeConsumeSolidos || 'N/A'}`); 

    doc.setFontSize(14);
    doc.text(20, 90, '¿Mastica o tienen que ser molidos?'); 
    doc.setFontSize(12);
    doc.text(20, 95, `${info[2].LblBebeConsumeSolidos || 'N/A'}`); 

    doc.setFontSize(18); 
    doc.text(20, 105, 'Antecedentes Familiares'); 
    doc.line(20, 107, 200, 107);

    doc.setFontSize(14);
    doc.text(20, 117, '¿Algún familiar de su hijo padece de las siguientes condiciones?'); 
    doc.setFontSize(12);
    doc.text(20, 122, info[3].Cancer === 'Si' ? '• Cancer POSITIVO' : '• Cancer NEGATIVO' );
    doc.text(20, 127, info[3].Diabetes === 'Si' ? '• Diabetes POSITIVO' : '• Diabetes NEGATIVO' );
    doc.text(20, 132, info[3].EnfermedadDegenerativa === 'Si' ? '• Enfermedad Degenerativa POSITIVO' : '• Enfermedad Degenerativa ✘' );
    doc.text(20, 137, info[3].EnfermedadMental === 'Si' ? '• Enfermedad Mental POSITIVO' : '• Enfermedad Mental NEGATIVO' );
    doc.text(20, 142, info[3].Hipertension === 'Si' ? '• Hipertension POSITIVO' : '• Hipertension NEGATIVO' );
    doc.text(20, 147, info[3].VIH === 'Si' ? '• VIH POSITIVO' : '• VIH NEGATIVO' );

    doc.setFontSize(18); 
    doc.text(20, 157, 'Oclusión y Alineamiento'); 
    doc.line(20, 162, 200, 162);

    doc.setFontSize(12); 
    doc.text(20, 172, `Línea media: ${info[9].LineaMedia}`); 

    doc.setFontSize(12); 
    doc.text(20, 177, `Plano Terminal: ${info[9].PlanoTerminal}`); 

    doc.setFontSize(12); 
    doc.text(20, 182, `Clase Molar: ${info[9].ClaseMolar}`); 

    doc.setFontSize(12); 
    doc.text(20, 187, `Espacios Primates: ${info[9].EspaciosPrimates}`); 

    doc.setFontSize(12); 
    doc.text(20, 192, `Espacios Fisiológicos: ${info[9].EspaciosFisiologicos}`); 

    doc.setFontSize(12); 
    doc.text(20, 197, `Espacios Fisiológicos: ${info[9].EspaciosFisiologicos}`); 
    
    doc.setFontSize(12); 
    doc.text(20, 202, `Traslape: ${info[9].Traslape}`); 

    doc.setFontSize(12); 
    doc.text(20, 207, `Sobremordida: ${info[9].Sobremordida}`); 

    doc.setFontSize(12); 
    doc.text(20, 212, `Mordida Abierta: ${info[9].MordidaAbierta}`); 

    doc.setFontSize(12); 
    doc.text(20, 217, `Mordida Profunda: ${info[9].MordidaProfunda}`); 

    doc.setFontSize(12); 
    doc.text(20, 222, `Malposición Dentaria: ${info[9].MalposicionDentaria}`); 

    doc.setFontSize(12); 
    doc.text(20, 227, `Diastema: ${info[9].Diastema}`); 

    doc.setFontSize(18); 
    doc.text(20, 237, 'TEJIDOS BLANDOS'); 
    doc.line(20, 239, 200, 239);

    doc.setFontSize(12); 
    doc.text(20, 249, `Lengua: ${info[10].Lengua}`); 
    doc.text(20, 254, `Frenillo Lingual: ${info[10].FrenilloLingual}`); 
    doc.text(20, 259, `Labios: ${info[10].Labios}`); 
    doc.text(20, 264, `Frenillo Labial: ${info[10].FrenilloLabial}`); 
    doc.text(20, 269, `Paladar Duro: ${info[10].PaladarDuro}`); 
    doc.text(20, 274, `Paladar Blando: ${info[10].PaladarBlando}`); 

    doc.addPage();

    doc.text(20, 20, `Piso de Boca: ${info[10].PisoBoca}`); 
    doc.text(20, 25, `Mucosa Yugal: ${info[10].MucosaYugal}`); 
    doc.text(20, 30, `Mucosa: Masticatoria ${info[10].MucosaMasticatoria}`); 
    doc.text(20, 35, `Otros: ${info[10].Otros}`); 

    doc.setFontSize(18); 
    doc.text(20, 45, 'Habitos Perniciosos'); 
    doc.line(20, 47, 200, 47);

    doc.setFontSize(12); 
    doc.text(20, 57, `Edad Dental: ${info[5].EdadDental}`);
    doc.text(20, 62, `Secuencia Anormal: ${info[5].SecuenciaAnormal}`); 
    doc.text(20, 67, `Perdida Prematura: ${info[5].PerdidaPrematura}`); 
    doc.text(20, 72, `Retención Prolongada: ${info[5].RetencionProlongada}`); 
    doc.text(20, 77, `Erupción Retardada: ${info[5].ErupcionRetardada}`); 
    doc.text(20, 82, `Falta de Contacto Proximal: ${info[5].FaltaContactoProximal}`); 
    doc.text(20, 87, `Hipoplasia Incisivo Molar: ${info[5].HipoplasiaIncisivo}`); 
    doc.text(20, 92, `Hipoplasia en Deciduos: ${info[5].HipoplasiaEnDeciduos}`); 
    doc.text(20, 97, `Amelo/Dentinoogénesis Imperfecta: ${info[5].AmeloDentinogenesisImperfecta}`); 
    doc.text(20, 102, `Fluorosis: ${info[5].Fluorosis}`); 
    doc.text(20, 107, `Otros: ${info[5].Otros}`); 

    doc.setFontSize(18); 
    doc.text(20, 117, 'Medio Bucal General'); 
    doc.line(20, 119, 200, 119);

    doc.setFontSize(14);
    doc.text(20, 129, `Higiene: ${info[8].Higiene}`); 
    doc.text(20, 134, `Placa Dentobacteriana: ${info[8].PlacaDentobacteriana}`); 
    doc.text(20, 139, `Localización: ${info[8].Localizacion}`); 
    doc.text(20, 144, `Cálculo Dental: ${info[8].CalculoDental}`); 

    doc.save(`Expediente ${nombre} ${id}`);
}