import jsPDF from "jspdf";

export const PDFPaciente = (info) => {

    if( !info[0] || !info[1] || !info[2] || !info[3] || !info[4] || !info[5] || !info[6] || !info[7] || !info[8] || !info[9] || !info[10] ) {
        alert('El formulario tiene que estar completo para poder generar PDF.');
        return;
    }

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
    doc.text(20, 122, 'Antecedentes personales (del niño)'); 
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

    /*
    doc.setFontSize(14);
    doc.text(20,197, 'Su bebé toma / tomó pecho?')
    doc.setFontSize(12);
    doc.line(20, 202,`${info[2].ANPecho}`|| 'N/A' )

    doc.setFontSize(14);
    doc.text(20,212, '¿Hasta qué edad?')
    doc.setFontSize(12);
    doc.line(20, 217,`${info[2].LblTomaPechoEdad}`|| 'N/A' )

    doc.setFontSize(14);
    doc.text(20,227, 'Frecuencia:')
    doc.setFontSize(12);
    doc.line(20, 232,`${info[2].LblFrecuenciaAlimentacionPecho}`|| 'N/A' )

    doc.setFontSize(14);
    doc.text(20,227, 'Frecuencia:')
    doc.setFontSize(12);
    doc.line(20, 232,`${info[2].LblFrecuenciaAlimentacionPecho}`|| 'N/A' )
   
    doc.setFontSize(14);
    doc.text(20,242, '¿Cuál es/era el contenido de su biberón?')
    doc.setFontSize(12);
    doc.line(20, 247,`${info[2].CBLecheMaterna}`|| 'N/A' )
    doc.line(20, 252,`${info[2].CBLecheFormula}`|| 'N/A' )
    doc.line(20, 257,`${info[2].CBChocolate}`|| 'N/A' )
    doc.line(20, 262,`${info[2].CCMiel}`|| 'N/A' )
    doc.line(20, 262,`${info[2].CBTe}`|| 'N/A' )


*/    

    doc.save('xd.pdf');
}