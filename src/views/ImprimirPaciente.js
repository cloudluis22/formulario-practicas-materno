
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetInfo } from '../hooks/useGetInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSadTear
} from '@fortawesome/free-solid-svg-icons';

export const ImprimirPaciente = () => {
  const { id } = useParams();
  const { dataState } = useGetInfo(id);

  const {ok, loading, data} = dataState


  console.log(data);

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

          <div className='mb-3'>
            <h5> ¿Cuántas comidas hace al dia? </h5>
            <p> {data[1].ComidasDiarias} comidas </p>
          </div>


          <h4> Consumo semanal de alimentos: </h4>

          {data[1] !== undefined && (
            <div>
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

        </div>
      )}      

    </div>
  )
}