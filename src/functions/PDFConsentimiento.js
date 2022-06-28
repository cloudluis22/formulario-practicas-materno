import jsPDF from "jspdf";

export const PDFConsentimiento = (NombreTutor, NombrePaciete) => {

    // Creando el PDF
    const doc = new jsPDF();


    doc.save(`Expediente ${NombrePaciete} ${NombreTutor}`);
}