
import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetInfo } from '../hooks/useGetInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import {
  faFaceSadTear
} from '@fortawesome/free-solid-svg-icons';

export const ImprimirPaciente = () => {
  const { id } = useParams();
  const { dataState } = useGetInfo(id);

  const {ok, loading, data} = dataState
  
  const print = () => {
    html2canvas(document.body, {
      scale: 0.5,
      scrollX: 0,
      scrollY: 0
    }).then(function(canvas) {
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 210; 
      var pageHeight = 295;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF('p', 'mm', undefined, 'FAST');
      var position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save('prueba.pdf');
    })
  };

  return (
    <div className='bcg-imprimir-color'>

     {loading && (
        
          <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <h2> Cargando expediente completo, por favor espere. </h2>
          
            <div className="spinner-grow text-dark" role="status" style={{height: '4rem', width: '4rem'}}>
              <span className="visually-hidden">Loading...</span>
            </div>
    
          </div>
        
      )}

      {!loading && !ok && (
        
        <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <h2 className='mb-3'> Hubo un fallo al tratar de obtener la información, intente más tarde o contacte un administrador. </h2>
            <FontAwesomeIcon icon={faFaceSadTear} size='4x' />
        </div>
      
      )}

      {!loading && ok && (
        
        <div className='mt-3 px-3'>

          <button className='btn btn-primary' onClick={()  => {  print() }}> Guardar en PDF </button>      

          <h1 className='text-center'> Expediente del Paciente </h1>

          <h3> Datos Generales </h3>
          <hr />

          <div className='mb-3'>
            <h5> Nombre del paciente </h5>
            <p> {data[0].NombrePaciente} </p>
          </div>

          <div className='mb-3'>
            <h5> ¿Cómo le gusta que le llamen? </h5>
            <p> {data[0].NombrePreferido} </p>
          </div>

          <div className='mb-3'>
            <h5> Edad </h5>
            <p> {data[0].Edad} años </p>
          </div>

          <div className='mb-3'>
            <h5> Género </h5>
            <p> {data[0].Genero} </p>
          </div>

          <div className='mb-3'>
            <h5> Fecha de Nacimiento </h5>
            <p> {data[0].FechaDeNacimiento} </p>
          </div>

          <div className='mb-3'>
            <h5> Gustos Personales </h5>
            <p> {data[0].GustosPersonales} </p>
          </div>

          <div className='mb-3'>
            <h5> Padre/Madre/Tutor </h5>
            <p> {data[0].PadreMadreTutor} </p>
          </div>

          <div className='mb-3'>
            <h5> ¿Quién cuida a su hijo? </h5>
            <p> {data[0].TutorEncargado} </p>
          </div>

          <div className='mb-3'>
            <h5> Domicilio </h5>
            <p> {data[0].Domicilio} </p>
          </div>

          <div className='mb-3'>
            <h5> Telefono/Celular/Otro </h5>
            <p> {data[0].Telefono} | {data[0].Celular} | {data[0].OtroContacto} </p>
          </div>

          <h3> Alimentación (Dieta Habitual) </h3>
          <hr />

          {data[1] !== undefined && (
            <div>

              <div className='mb-3'>
                <h5> ¿Cuántas comidas hace al dia? </h5>
                <p> {data[1].ComidasDiarias} comidas </p>
              </div>

          <h4> Consumo semanal de alimentos: </h4>

              <div className='mb-3'>
                <h5> Carne </h5>
                <p> {data[1].Carne} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Frutas </h5>
                <p> {data[1].Frutas} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Vegetales </h5>
                <p> {data[1].Vegetales} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Huevo </h5>
                <p> {data[1].Huevo} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Pescado </h5>
                <p> {data[1].Pescado} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Agua </h5>
                <p> {data[1].Agua} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Té </h5>
                <p> {data[1].Te} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Leche </h5>
                <p> {data[1].Leche} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Yogurth </h5>
                <p> {data[1].Yoghurt} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Dulces </h5>
                <p> {data[1].Dulces} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Galletas </h5>
                <p> {data[1].Galletas} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Mermelada </h5>
                <p> {data[1].Mermelada} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Yakult </h5>
                <p> {data[1].Yakult} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Pan </h5>
                <p> {data[1].Pan} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Jugos </h5>
                <p> {data[1].Jugos} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Gomitas </h5>
                <p> {data[1].Gomitas} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Chocolate </h5>
                <p> {data[1].Chocolate} veces </p>
              </div>

              <div className='mb-3'>
                <h5> Chicle </h5>
                <p> {data[1].Chicle} veces </p>
              </div>

            </div>
          )}

          {data[1] === undefined && (
            <p> Esta sección no ha sido llenada. </p>
          )}

          <h3> Hábitos de higiene </h3>
          <hr />

          {data[6] !== undefined && (
            <div>

              <div className='mb-3'>
                <h5> ¿Quién realiza el cepillado dental de su hijo? </h5>
                <p> {data[6].EncargadoCepillado} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Cuántas veces al dia se cepilla los dientes? </h5>
                <p> {data[6].CepilladosDiarios} veces al dia </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Cómo se llama la pasta que utilizan? </h5>
                <p> {data[6].MarcaPastaDental} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Se cepilla los dientes antes de dormir sin falta? </h5>
                <p> {data[6].CepilladoDiarioDormir} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Utiliza enjuage bucal? </h5>
                <p> {data[6].EnjuagueBucal} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Utiliza hilo dental?, ¿con qué frecuencia? </h5>
                <p> {data[6].HiloDental} </p>
              </div>

            </div>
          )}

          {data[6] === undefined && (
            <p> Esta sección no ha sido llenada. </p>
          )}

          <h3> Antecedentes personales (del niño) </h3>
          <hr />

          {data[4] !== undefined && (
            <div>

              <div className='mb-3'>
                <h5> ¿Goza su hijo de buena salud? </h5>
                <p> {data[4].BuenaSalud} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Ha sido hospitalizado? </h5>
                <p> {data[4].Hospitalizado} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Su hijo realiza algún deporte? </h5>
                <p> {data[4].RealizaDeporte} </p>
              </div>

              <div className='mb-3'>
                <h5> Deporte que realiza </h5>
                <p> {data[4].LblRealizaDeporte || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Es alérgico a algún medicamento o alimento? </h5>
                <p> {data[4].AlergiasMedAlim || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿A cuál/cuáles? </h5>
                <p> {data[4].LblAlergiasMedAlim || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Tiene o ha tenido su hijo algún trastorno emocional o mental? </h5>
                <p> {data[4].TranstornoMentalEmocional || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Cuáles? </h5>
                <p> {data[4].LblTranstornoMentalEmocional || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Tiene dificultades en la escuela? </h5>
                <p> {data[4].DificultadesEscolares || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Respira por la boca? </h5>
                <p> {data[4].RespiraPorBoca || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Padece su hijo apena del sueño (ronca)? </h5>
                <p> {data[4].ApneaRoncar || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Ha observado a su hijo succionar su labio o alguno de sus dedos? </h5>
                <p> {data[4].ChupaLabioDedos || 'N/A'} </p>
              </div>
              
              <div className='mb-3'>
                <h5> ¿Con qué frecuencia? </h5>
                <p> {data[4].LblChupaLabioDedos || 'N/A'} </p>
              </div>

              <h4> ¿Su hijo padece o ha padecido alguna de las siguientes enfermedades?  </h4>

              <div className='mb-3'>
                <h5> Asma </h5>
                <p> {data[4].Asma || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Sarampión </h5>
                <p> {data[4].Sarampion || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Asma </h5>
                <p> {data[4].Asma || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Fiebre reumática </h5>
                <p> {data[4].FiebreReumatica || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Paladar Hendido </h5>
                <p> {data[4].PaladarHendido || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Tos ferina </h5>
                <p> {data[4].TosFerina || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Poliomielitis </h5>
                <p> {data[4].Poliomelitis || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Epilepsia </h5>
                <p> {data[4].Epilepsia || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Escarlatina </h5>
                <p> {data[4].Escarlatina || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Tuberculosis </h5>
                <p> {data[4].Tuberculosis || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Enfermedad Cardiaca </h5>
                <p> {data[4].EnfermedadCardiaca || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Varicela </h5>
                <p> {data[4].Varicela || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Paperas </h5>
                <p> {data[4].Paperas || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Hepatitis </h5>
                <p> {data[4].Hepatitis || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Difteria </h5>
                <p> {data[4].Difteria || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Tifoidea </h5>
                <p> {data[4].Tifoidea || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Enfermedad Renal </h5>
                <p> {data[4].EnfermedadRenal || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Hemofilia </h5>
                <p> {data[4].Hemofilia || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Trastorno Hepático </h5>
                <p> {data[4].TrastornoHepatico || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Diabetes </h5>
                <p> {data[4].Diabetes || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Reflujo </h5>
                <p> {data[4].Reflujo || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Trastorno de lenguaje </h5>
                <p> {data[4].TrastornoDeLenguaje || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> Otros </h5>
                <p> {data[4].Otros || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Se encuentra bajo algún tratamiento médico? </h5>
                <p> {data[4].TratamientosActivos || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Toma su hijo algún medicamento actualmente? </h5>
                <p> {data[4].TomaMedicamentos || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Cuáles? </h5>
                <p> {data[4].LblTomaMedicamenntos || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿La madre tomó medicamentos durante el embarazo? </h5>
                <p> {data[4].MadreMedicamentoEmbarazo || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Cuáles? </h5>
                <p> {data[4].LblMadreMedicamentoEmbarazo || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿La madre sufrió algún accidente durante el embarazo? </h5>
                <p> {data[4].AccidentesEmbarazo || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Cómo fue el parto? </h5>
                <p> {data[4].TipoParto || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿En el nacimiento se presentó alguna dificultad? </h5>
                <p> {data[4].DificultadNacimiento || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Presentó alguna anomalía congénita (de nacimiento)? </h5>
                <p> {data[4].AnomaliaCongenitaNacimiento || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Cuál/cuáles? </h5>
                <p> {data[4].LblAnomaliaCongenitaNacimiento || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Su hijo ha sido anestesiado anteriormente? </h5>
                <p> {data[4].HaSidoAnestesiado || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Tuvo alguna reacción adversa? </h5>
                <p> {data[4].ReaccionAnestesia || 'N/A'} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Cuál/cuáles? </h5>
                <p> {data[4].LblReaccionAnestesia || 'N/A'} </p>
              </div>

            </div>
          )}

          {data[4] === undefined && (
            <p> Esta sección no ha sido llenada. </p>
          )}

          <h3> Amamantación </h3>
          <hr />

          {data[2] !== undefined && (
            <div>

              <div className='mb-3'>
                <h5> ¿Su bebé toma/tomó pecho? </h5>
                <p> {data[2].TomaPechoEdad || "N/A"}  </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Hasta que edad? </h5>
                <p> {data[2].LblTomaPechoEdad || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Frecuencia </h5>
                <p> {data[2].LblFrecuenciaAlimentacionPecho	 || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> La alimentación de su bebé es o fue: </h5>
                <p> {data[2].TipoDeAlimentacion || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Su hijo utiliza / utilizó biberón? </h5>
                <p> {data[2].UsabaBiberon || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5>  Frecuencia </h5>
                <p> {data[2].LblUsabaBiberon || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Cuál es/era el contenido de su biberón? </h5>
                <p> {data[2].ContenidoBiberon || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Hasta qué edad tomó biberón? </h5>
                <p> {data[2].EdadYaNoTomaBiberon || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Su hijo utiliza o utilizó chupón? </h5>
                <p> {data[2].UsabaChupon || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Frecuencia </h5>
                <p> {data[2].LblUsabaChupon || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Cuál es/era el contenido de su chupón? </h5>
                <p> {data[2].ContenidoChupon || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Hasta qué edad utilizó chupón?  </h5>
                <p> {data[2].EdadYaNoUsaChupon || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Su bebé sigue teniendo alimentación nocturna? </h5>
                <p> {data[2].AlimentacionNocturna || "N/A"} </p>
              </div>
              
              <div className='mb-3'>
                <h5> ¿Cuál era su contenido? </h5>
                <p> {data[2].LblAlimentacionNocturna || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Limpia si boquita después de la alimentación nocturna? </h5>
                <p> {data[2].LimpiaSuBoquita || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Su bebé come alimentos sólidos? </h5>
                <p> {data[2].BebeConsumeSolidos || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> ¿Mastica o tienen que ser molidos? </h5>
                <p> {data[2].LblBebeConsumeSolidos || "N/A"} </p>
              </div>


            </div>
          )}

          {data[2] === undefined && (
            <p> Esta sección no ha sido llenada. </p>
          )}
          
          <h3> Antecedentes Familiares</h3>
          <hr />


          {data[3] !== undefined && (
            <div>

              <div className='mb-3'> <h5> Algún familiar de su hijo padece: </h5> </div>

              <div className='mb-3'>
                <h5> Diabetes  </h5>
                <p> {data[3].Diabetes || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Cáncer  </h5>
                <p> {data[3].Cancer || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Hipertensión </h5>
                <p> {data[3].Hipertension || "N/A"} </p>
              </div>
              
              <div className='mb-3'>
                <h5> VIH </h5>
                <p> {data[3].VIH || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Enfermedades Degenerativas </h5>
                <p> {data[3].EnfermedadDegenerativa || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Enfermedades Mentales </h5>
                <p> {data[3].EnfermedadMental || "N/A"} </p>
              </div>

            </div>
          )}

          {data[3] === undefined && (
            <p> Esta sección no ha sido llenada. </p>
          )}

          <h3> Oclusión y alineamiento </h3>
          <hr/>
            
          {data[9] !== undefined && (
            <div>

              <div className='mb-3'>
                <h5> Linea Media </h5>
                <p> {data[9].LineaMedia || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> PlanoTerminal </h5>
                <p> {data[9].PlanoTerminal || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Clase Molar </h5>
                <p> {data[9].ClaseMolar || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Espacios Primates </h5>
                <p> {data[9].EspaciosPrimates || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Espacios Fisiológicos </h5>
                <p> {data[9].EspaciosFisiologicos || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Traslape </h5>
                <p> {data[9].Traslape || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Sobremordida </h5>
                <p> {data[9].Sobremordida || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> MordidaAbierta </h5>
                <p> {data[9].MordidaAbierta || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Mordida Profunda </h5>
                <p> {data[9].MordidaProfunda || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Malposición Dentaria </h5>
                <p> {data[9].MalposicionDentaria || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Diastema </h5>
                <p> {data[9].Diastema || "N/A"} </p>
              </div>

            </div>
          )}

          {data[9] === undefined && (
            <p> Esta sección no ha sido llenada. </p>
          )}

            <h3> Hábitos Perniciosos </h3>
          <hr />

          {data[7] !== undefined && (
            <div>

              <div className='mb-3'>
                <h5> Respirador Bucal </h5>
                <p> {data[7].RespiradoBucal || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Succión Digital </h5>
                <p> {data[7].SuccionDigital || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Succión Chupete </h5>
                <p> {data[7].SuccionChupete || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Succión Labial </h5>
                <p> {data[7].SuccionLabial || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> 	Morderse el Labio </h5>
                <p> {data[7].MorderseLabio || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Morderse las uñas </h5>
                <p> {data[7].MorderseLasUnas || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Deglución Atípica/Protusión lingual </h5>
                <p> {data[7].DeglucionAtipica || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Otros </h5>
                <p> {data[7].Otros || "N/A"} </p>
              </div>

            </div>
          )}

          {data[7] === undefined && (
            <p> Esta sección no ha sido llenada. </p>
          )}

          <h3> Erupción y dentición </h3>
          <hr />

          {data[5] !== undefined && (
            <div>

              <div className='mb-3'>
                <h5> Edad Dental </h5>
                <p> {data[5].EdadDental || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Secuencia Anormal </h5>
                <p> {data[5].SecuenciaAnormal || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Pérdida Prematura </h5>
                <p> {data[5].PerdidaPrematura || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Retención Prolongada </h5>
                <p> {data[5].RetencionProlongada || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Erupción Retardada </h5>
                <p> {data[5].ErupcionRetardada || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Falta de Contacto Proximal </h5>
                <p> {data[5].FaltaContactoProximal || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Hipoplasia Incisivo Molar</h5>
                <p> {data[5].HipoplasiaIncisivo || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Hipoplasia En Deciduos </h5>
                <p> {data[5].HipoplasiaEnDeciduos || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Amelo/Dentinogénesis Imperfecta </h5>
                <p> {data[5].AmeloDentinogenesisImperfecta || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Fluorosis </h5>
                <p> {data[5].Fluorosis || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Otros </h5>
                <p> {data[5].Otros || "N/A"} </p>
              </div>

            </div>
          )}

          {data[5] === undefined && (
            <p> Esta sección no ha sido llenada. </p>
          )}

        <h3> Medio Bucal General </h3>
          <hr />

          {data[8] !== undefined && (
            <div>

              <div className='mb-3'>
                <h5> Higiene </h5>
                <p> {data[8].Higiene || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Placa Dentobacteriana	 </h5>
                <p> {data[8].PlacaDentobacteriana	 || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> PHSaliva </h5>
                <p> {data[8].PHSaliva || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Localización </h5>
                <p> {data[8].Localizacion || "N/A"} </p>
              </div>

              <div className='mb-3'>
                <h5> Cálculo Dental </h5>
                <p> {data[8].CalculoDental || "N/A"} </p>
              </div>

              
            </div>
          )}

          {data[8] === undefined && (
            <p> Esta sección no ha sido llenada. </p>
          )}

        </div>
      )}

    </div>
  )
}
