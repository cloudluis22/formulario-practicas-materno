import jsPDF from "jspdf";
import moment from "moment";

export const PDFConsentimiento = (NombreTutor, NombrePaciente) => {

  const now = moment();

    // Creando el PDF
    const doc = new jsPDF();

    doc.setFontSize(10);
    //doc.text(20,15`${mom}`)
  doc.setFontSize(16);
  doc.text(20,20,'CONSENTIMIENTO INFORMADO ');
  doc.setFontSize(11);
  
  doc.text(20,25,'TRATAMIENTOS DE ODONTOPEDIATRÍA');
  
  doc.text(20,30,'Y ODONTOLOGÍA PARA BEBÉS,');
  
  doc.text(20,35,'Y USO DE TÉCNICAS DE MANEJO DE CONDUCTA EN NIÑOS');
  
  
  
  
  
  doc.text(20,40,'Se me ha explicado que es necesario que se realice un tratamiento dental en uno o más');
  
  doc.text(20,45,'dientes a mi hijo/a. Además, se me ha informado sobre la importancia que para el desarrollo');
  
  doc.text(20,50,'general y bucofacial tiene la conservación de los dientes temporales. Que antes de proceder');
  
  doc.text(20,55,'a dicho tratamiento he sido informado/a de:');
  
  
  
  
  doc.text(20,60,'*El diagnóstico, la naturaleza de la enfermedad que padece mi representado y su');
  
  doc.text(20,65,'evolución natural, objetivos del tratamiento propuesto, así como las alternativas del');
  
  doc.text(20,70,'tratamiento que pueden ser practicadas, descripción de las consecuencias');
  
  doc.text(20,75,'derivadas del tratamiento o intervención, beneficios y complicaciones comunes que');
  
  doc.text(20,80,'se pueden desencadenar durante o después del mismo, riesgos personales y');
  
  doc.text(20,85,'entendiendo que ante alguna manifestación de complicaciones deberé acudir');
  
  doc.text(20,90,'nuevamente al profesional tratante de mi representado.');
  
  
  doc.text(20,95,'*Los objetivos de estos tratamientos son eliminar el tejido enfermo del diente');
  
  doc.text(20,100,'temporal/permanente, eliminar posibles infecciones y mantener el diente en la boca');
  
  doc.text(20,105,'del niño/a. Además, se le devolverá la función al ser restaurado de forma directa');
  
  doc.text(20,110,'(empaste) o indirecta (corona), evitando posibles afectaciones del diente');
  
  doc.text(20,115,'permanente, ya que está en íntimo contacto con el temporal.');
   
  
  doc.text(20,120,'*El procedimiento requiere la aplicación de anestesia local, lo que provocará una');
  
  doc.text(20,125,'sensación de adormecimiento del labio o de la cara de mi hijo/a, la cual');
  
  doc.text(20,130,'desaparecerá al cabo de unas horas. También, que la administración de la anestesia');
  
  doc.text(20,135,'podría producir ulceración y/o hematoma del tejido, dolor y, en raras ocasiones,');
  
  doc.text(20,140,'pérdida de la sensibilidad en la boca o en la cara. Más raramente, puede provocar');
  
  doc.text(20,145,'bajada de tensión y mareo.');
  
  doc.text(20,150,'Los riesgos y complicaciones esperados: dolor posoperatorio, inflamación,');
  
  doc.text(20,155,'infección, fractura del elemento dentario por deterioro, pulpitis (inflamación del');
  
  doc.text(20,160,'nervio), hematomas y hemorragias (sangrado y moretones).');
  
  
  doc.text(20,165,'*En ocasiones, un diagnóstico inicial de pulpotomía puede verse alterado por');
  
  doc.text(20,170,'distintos motivos que compliquen su realización, por lo que será necesario proceder');
  
  doc.text(20,175,'a una pulpectomía.');
  
  
  doc.text(20,180,'*Después de una pulpectomía puede ocurrir que no se consiga eliminar todas las');
  
  doc.text(20,185,'bacterias y que por ello persista la infección. Si esto ocurriera, el tratamiento');
  
  doc.text(20,190,'indicado sería la extracción del diente temporal.');
  
  
  doc.text(20,195,'*Para que estos procedimientos tengan el éxito que se espera o, en caso de que');
  
  doc.text(20,200,'surja cualquier inconveniente éste pueda ser solucionado cuanto antes, es');
  
  doc.text(20,205,'fundamental acudir a las revisiones que el odontopediatra fije con el fin de analizar');
  
  doc.text(20,210,'la evolución del tratamiento y examinar el estado bucal de mi hijo/a. Además, es');
  
  doc.text(20,215,'muy importante recordar la importancia que la higiene tiene en el mantenimiento de');
  
  doc.text(20,220,'una correcta salud bucodental.');
  
  
  doc.text(20,230,'*Para poder realizar cualquier tratamiento en un paciente pediátrico es indispensable');
  
  doc.text(20,235,'contar con la colaboración del niño/a. El odontopediatra es un profesional');
  
  doc.text(20,240,'especializado en el trato y manejo de niños, pero en determinadas ocasiones, es');
  
  doc.text(20,245,'posible que precise del uso de ciertos procedimientos que buscan controlar el');
  
  doc.text(20,250,'comportamiento del niño/a para que el tratamiento pueda ser realizado con eficacia');
  
  doc.text(20,255,'y seguridad. En caso de ser necesarias estas maniobras, se explican a continuación:');
  
  doc.text(20,260,'Decir-Mostrar-Hacer: El odondopediatra le explica al niño el procedimiento que va a hacer');
  
  doc.text(20,265,'usando terminología sencilla y luego muestra al niño lo que debe hacerse mediante la');
  
  doc.text(20,270,'demostración de los instrumentos en un modelo o el dedo del dentista del niño. A');
  
  doc.text(20,275,'continuación, el procedimiento se realiza en la boca del niño como se le ha descrito.');
  
  doc.text(20,280,'Lenguaje pediátrico: Se presentan los instrumentos o el tratamiento al niño sustituyendo las');
  
  doc.text(20,285,'palabras que puedan generarles miedo o ansiedad por palabras que el niño entienda. No');
  
  doc.addPage();

  doc.text(20,20,'permitir preguntas que retrasen el tratamiento.');
  
  doc.text(20,25,'Distracción: Distraerlos con temas ajenos al tratamiento dental durante la realización de');
  
  doc.text(20,30,'este.');
  
  doc.text(20,35,'Control de voz: Con esta técnica se busca reestablecer una comunicación perdida por una');
  
  doc.text(20,40,'conducta no colaboradora. Levantar o disminuir el volumen y el tono con el que nos');
  
  doc.text(20,45,'dirigimos al niño para recuperar su atención.');
  
  doc.text(20,50,'Refuerzo positivo ó negativo: Siempre que el niño muestre un avance o buena conducta se');
  
  doc.text(20,55,'elogiará y premiará su actitud cooperadora; o bien si el niño se comporta con actitud grosera');
  
  doc.text(20,60,'hacia el odontopediatra o el personal se le llamará la atención.');
  
  doc.text(20,65,'Presencia-Ausencia de los padres: La autoridad en el consultorio siempre será del');
  
  doc.text(20,70,'odontopediatra, las preguntas o dudas sobre el tratamiento deberán hacerse antes o');
  
  doc.text(20,75,'después del tratamiento y no durante el mismo para no interrumpir su atención en el');
  
  doc.text(20,80,'paciente. En niños de 3 años en adelante los papás pueden estar en consulta si así lo');
  
  doc.text(20,85,'desean únicamente para observar, el manejo de la conducta del niño le corresponde');
  
  doc.text(20,90,'únicamente al odontopediatra a menos que éste solicite su ayuda. En caso de que se');
  
  doc.text(20,95,'requiera negociar la cooperación del niño se le solicitará gentilmente que salga y deberá');
  
  doc.text(20,100,'salir del consultorio con el objetivo de tranquilizar al niño, y una vez que el niño coopere y');
  
  doc.text(20,105,'se tranquilice se le solicitará que regrese dentro del consultorio condicionando su estancia');
  
  doc.text(20,110,'de acuerdo al comportamiento del niño.');
  
  doc.text(20,115,'Desensibilización: Son citas de acondicionamiento en las cuales se realizan procedimientos');
  
  doc.text(20,120,'mínimamente invasivos para reducir la ansiedad o miedo hacia el tratamiento');
  
  doc.text(20,125,'Mano sobre Boca: Recurso que se utiliza en rabiertas violentas para atender al niño, no');
  
  doc.text(20,130,'para educarlo, consiste en colocar la mano únicamente sobre la boca sin lastimarlo (el niño');
  
  doc.text(20,135,'puede respirar por la naríz), y con una voz suave al oído hacerle reconocer al niño que su');
  
  doc.text(20,140,'actitud es inadecuada, con el objetivo de recuperar la comunicación perdida con niños que');
  
  doc.text(20,145,'tienen la capacidad de comunicarse.');
  
  doc.text(20,150,'Estabilización por protección: Camita especial con red o velcros indicada cuando los');
  
  doc.text(20,155,'movimientos del paciente no pueden ser controlados y pueda verse en riesgo la integridad');
  
  doc.text(20,160,'física del paciente o del odontopediatra, con el objetivo de evitar movimientos exagerados');
  
  doc.text(20,165,'o bruscos que puedan ocasionar accidentes.');
  
  doc.text(20,170,'Abrebocas: Almohadilla que se coloca para controlar la apertura de la boca y evitar la fatiga');
  
  doc.text(20,175,'de mantener la boca abierta durante el tratamiento.');
  
  doc.text(20,180,'Comprendo que no atender a mi hijo cuando presente alguna rabieta o mal');
  
  doc.text(20,185,'comportamiento solamente va a reforzar su técnica de evasión del tratamiento y');
  
  doc.text(20,190,'aprenderá que al comportarse de esa manera logra su objetivo y cada vez su');
  
  doc.text(20,195,'comportamiento será peor, por lo que será necesario hacer algún procedimiento de');
  
  doc.text(20,200,'desensibilización.');
  
  
  doc.text(20,205,'*Comprendo que son técnicas reconocidas como aceptables y eficaces por la');
  
  doc.text(20,210,'Academia Americana de Odontología Pediátrica y que su objetivo es inculcar una');
  
  doc.text(20,215,'actitud positiva hacia el tratamiento y proporcionar un tratamiento de la manera más');
  
  doc.text(20,220,'eficiente. Entiendo que en algunos casos algunas o todas las técnicas pueden no');
  
  doc.text(20,225,'funcionar, por lo que el odontopediatra tendrá que trabajar a pesar de la falta de');
  
  doc.text(20,230,'cooperación de mi hijo.');
  
  
  doc.text(20,235,'*Comprendo que en menores de tres años (bebés), o pacientes con capacidades');
  
  doc.text(20,240,'especiales y/o extraordinarias, no pueden llevarse a cabo técnicas de manejo de');
  
  doc.text(20,245,'conducta, y que el llanto en un bebé/niño es normal, y que es una manera de');
  
  doc.text(20,250,'desahogo de sus miedos y no es porque sienta dolor, ya que está anestesiado si');
  
  doc.text(20,255,'así lo requiere el procedimiento dental.');
  
  
  doc.text(20,260,'*Me han informado que, aunque se esperan buenos resultados, la posibilidad de');
  
  doc.text(20,265,'complicaciones por la falta de cooperación de mi hijo y la naturaleza de la');
  
  doc.text(20,270,'enfermedad no pueden ser anticipadas con precisión y por lo tanto no puede haber');
  
  doc.text(20,275,'ninguna garantía expresa o implícita en cuanto al resultado del tratamiento.');
  
  
  doc.text(20,280,'*También me han informado que si no asisto a 3 citas consecutivas se considerará');
  
  doc.text(20,285,'abandono al tratamiento, por lo que el pronóstico puede ser menos favorable, y las');

  doc.addPage();
  
  doc.text(20,20,'consecuencias de abandonar el tratamiento o de romper o perder el aparato');
  
  doc.text(20,25,'correrán a mi cargo.');
  
  
  doc.text(20,30,'*Comprendo que la odontología no es una ciencia exacta, por lo que los resultados');
  
  doc.text(20,35,'están sujetos a múltiples factores. He tenido información clara y suficiente, la');
  
  doc.text(20,40,'oportunidad de preguntar y he obtenido respuestas satisfactorias, me siento libre');
  
  doc.text(20,45,'para decidir de acuerdo a mis valores e intereses y me declaro competente para');
  
  doc.text(20,50,'tomar la decisión que corresponda. Asimismo doy fe que mi representado fue oído');
  
  doc.text(20,55,'y dió su asentimiento a realizar el tratamiento.');
  
  /*
  #************************************************SE AGREGA NUEVA PAGINA***********************************************
  $fpdf ->AddPage('portrait','letter');
  $fpdf->SetFont('Arial', '', 16);
  #Establecemos los márgenes izquierda, arriba y derecha:
  #$fpdf->SetMargins(30, 25 , 30);
  doc.text(20,20,, 'CONSENTIMIENTO INFORMADO');
  */  
  
  
  
  doc.text(20,60,'TRATAMIENTOS DE ORTOPEDIA MAXILAR');
  
  doc.text(20,65,'Y ORTODONCIA INTERCEPTIVA');
  
  
  
  
  
  
  doc.text(20,70,'*Los tratamientos de ortopedia y ortodoncia interceptiva tienen la finalidad de');
  
  doc.text(20,75,'prevenir o solucionar problemas de falta de espacio o desarrollo en el maxilar y la');
  
  doc.text(20,80,'mandíbula, disarmonías oclusales, alineación dental, hábitos perniciosos y');
  
  doc.text(20,85,'respiración bucal; son tratamientos largos que varían de un caso a otro.');
  
  
  doc.text(20,90,'*En lo referente a los tratamientos de ortopedia maxilar, se tomarán constantemente');
  
  doc.text(20,95,'fotografías de diagnóstico y avance, y pueden solicitarse estudios de imagenología');
  
  doc.text(20,100,'que permanecerán en el expediente clínico de mi hijo.');
  
  
  doc.text(20,105,'*Se me ha explicado que son tratamientos que requieren la colaboración de mi hijo');
  
  doc.text(20,110,'y que es imprescindible que el odontopediatra realice revisiones mensuales del');
  
  doc.text(20,115,'aparato y el progreso de mi hijo.');
  
  
  doc.text(20,120,'*Puesto que el tratamiento trascurre durante un tiempo largo y en ese periodo puede');
  
  doc.text(20,125,'ocurrir una variación imprevisible del crecimiento óseo facial o alguna modificación');
  
  doc.text(20,130,'en la erupción dentaria en ocasiones puede ser necesario cambiar el plan de');
  
  doc.text(20,135,'tratamiento. Esto puede suponer su mayor duración e incluso requerir en ocasiones');
  
  doc.text(20,140,'la extracción de dientes permanentes para conseguir más espacio o de dientes');
  
  doc.text(20,145,'temporales para controlar la erupción dentaria.');
  
  
  doc.text(20,150,'*También se me ha explicado que la respuesta al tratamiento de ortopedia depende');
  
  doc.text(20,155,'de factores biológicos o de respuesta del organismo, así como del uso que se le dé');
  
  doc.text(20,160,'al aparato, y que durante todo el tratamiento se deben extremar las medidas de');
  
  doc.text(20,165,'higiene bucal y del aparato para minimizar la probabilidad de generar caries o');
  
  doc.text(20,170,'enfermedades gingivales.');
  
  
  doc.text(20,175,'*La aparatología empleada puede implicar pequeñas rozaduras y molestias en la');
  
  doc.text(20,180,'boca, dificultades en la fonación, irritación de encías, labios, mejillas y lengua, sobre');
  
  doc.text(20,185,'todo al activarla. Se requerirá un tiempo para habituarse a llevar la aparatología y');
  
  doc.text(20,190,'comer, hablar y limpiarse los dientes con ella. Por las propias fuerzas masticatorias');
  
  doc.text(20,195,'algún elemento se podría despegar y tendría que acudir a consulta para reparar el');
  
  doc.text(20,200,'aparato.');
  
  
  doc.text(20,205,'*También me han informado que si no asisto a 3 citas consecutivas se considerará');
  
  doc.text(20,210,'abandono al tratamiento, por lo que el pronóstico puede ser menos favorable, y las');
  
  doc.text(20,215,'consecuencias de abandonar el tratamiento o de romper o perder el aparato');
  
  doc.text(20,220,'correrán a mi cargo.');
  
  
  doc.text(20,225,'*Entiendo que después de terminar el tratamiento de ortopedia u ortodoncia');
  
  doc.text(20,230,'interceptiva y dependiendo del caso concreto, es necesario utilizar algún sistema de');
  
  doc.text(20,235,'ortodoncia correctiva para evitar modificaciones posteriores de la alineación');
  
  doc.text(20,240,'dentaria.');
  
  
  doc.text(20,245,'*La consecuencia de no realizar el tratamiento puede provocar la agravación de las');
  
  doc.text(20,250,'patologías actualmente existentes.');
  
  //********************************************************FIRMA DE MEDICO Y USUSARIO ********************************************************
  
  
  doc.setFontSize(12);
  doc.text(20,255, 'DECLARACIONES Y FIRMAS DEL REPRESENTANTE LEGAL');
  doc.text(20,260, 'Y ODONTOPEDIATRA');
  
  doc.text(20,265,`Yo:${NombreTutor}`);
  
  doc.text(20,270,'(parentesco)_______________________________________________, declaro');
  
  doc.text(20,275,'el/la Dr./Dra.____________________________________________________,');
  
  doc.text(20,280,'me ha explicado de forma satisfactoria qué es, cómo se realiza y para qué sirve esta');
  
  doc.text(20,285,'exploración/intervención. También me ha explicado los riesgos existentes, las posibles');
  
  doc.addPage();
  
  doc.text(20,20,'molestias o complicaciones, que éste es el procedimiento más adecuado para la situación');
  
  doc.text(20,25,'clínica actual del paciente y las consecuencias previsibles de su no realización. He');
  
  doc.text(20,30,'comprendido perfectamente todo lo anterior, he podido aclarar las dudas planteadas, y doy');
  
  doc.text(20,35,'mi consentimiento para que realicen al paciente');
  
  doc.text(20,40,`${NombrePaciente}`);
  
  doc.text(20,45,'dicha exploración y los tratamientos que sean necesarios.');
  
  
  
  doc.text(20,50,'__________________________');
  
  doc.text(20,55,'Nombre y firma del padre/tutor');
  
  doc.text(20,65,`Irapuato, Guanajuato, a ${moment(now).format('LLLL')} hrs`);
  
  doc.text(20,65,'');
  
  doc.text(20,70,'');
  
  doc.text(20,75,'');
  
  doc.text(20,80,'');
  
  doc.text(20,85,'');
  
  doc.text(20,90,'');

    doc.save(`Declaración de consentimiento ${NombrePaciente} - ${NombreTutor}`);


  
}