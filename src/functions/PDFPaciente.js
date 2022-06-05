import jsPDF from "jspdf";

export const PDFPaciente = (info) => {
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

    doc.save('xd.pdf');
}

