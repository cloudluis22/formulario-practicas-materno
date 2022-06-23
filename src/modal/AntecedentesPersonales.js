import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config.json';

export const AntecedentesPersonales = ({ idPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get(`${config.server_adress}/api/v1/antecedentes-personales/${idPaciente}`)
      .then((response) => {
        setData({
          loading: false,
          data: response.data.antecedentespersonales,
          ok: true,
        });
      })
      .catch((error) => {
        setData({
          loading: false,
          data: [],
          ok: false,
        });
      });
  }, [idPaciente]);

  let info;

  if (Data.data.length > 0) {
    info = Data.data[0];
  }

  if (info && !Data.loading && Data.ok) {
    return (
      <div className='text-dark fs-4 ms-2'>
        <div className='d-flex flex-row'>
          {/* Titulo */}
          <p>
            <strong> ¿Goza de buena salud? </strong>
          </p>
          {/* Contenido */}
          <p className='ms-2'> {info.BuenaSalud} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Ha sido hospitalizado? </strong>
          </p>
          <p className='ms-2'> {info.Hospitalizado} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Realiza Deporte? </strong>
          </p>
          <p className='ms-2'> {info.RealizaDeporte} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Cuál deporte y frecuencia? </strong>
          </p>
          <p className='ms-2'> {info.LblRealizaDeporte} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Es alérgico? </strong>
          </p>
          <p className='ms-2'> {info.AlergiasMedAlim} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿A qué es alérgico? </strong>
          </p>
          <p className='ms-2'> {info.LblAlergiasMedAlim} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Trastornos emocionales/mentales? </strong>
          </p>
          <p className='ms-2'> {info.TrastornoMentalEmocional} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Cuáles trastornos? </strong>
          </p>
          <p className='ms-2'> {info.LblTrastornoMentalEmocional} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tiene dificultades escolares? </strong>
          </p>
          <p className='ms-2'> {info.DificultadesEscolares} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Respira por la boca? </strong>
          </p>
          <p className='ms-2'> {info.RespiraPorBoca} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Padece apnea del sueño? </strong>
          </p>
          <p className='ms-2'> {info.ApneaRoncar} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Succiona su labio o dedos? </strong>
          </p>
          <p className='ms-2'> {info.ChupaLabioDedos} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Con que frecuencia? </strong>
          </p>
          <p className='ms-2'> {info.LblChupaLabioDedos} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene asma? </strong>
          </p>
          <p className='ms-2'> {info.Asma} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene Sarampion? </strong>
          </p>
          <p className='ms-2'> {info.Sarampion} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene Fiebre Reumatica? </strong>
          </p>
          <p className='ms-2'> {info.FiebreReumatica} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene el paladar hendido? </strong>
          </p>
          <p className='ms-2'> {info.PaladarHendido} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene tos ferina? </strong>
          </p>
          <p className='ms-2'> {info.TosFerina} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene poliomelitis? </strong>
          </p>
          <p className='ms-2'> {info.Poliomelitis} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene Epilepsia? </strong>
          </p>
          <p className='ms-2'> {info.Epilepsia} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene escarlatina? </strong>
          </p>
          <p className='ms-2'> {info.Escarlatina} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene tuberculosis? </strong>
          </p>
          <p className='ms-2'> {info.Tuberculosis} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene enfermedades cardiacas? </strong>
          </p>
          <p className='ms-2'> {info.EnfermedadCardiaca} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene varicela? </strong>
          </p>
          <p className='ms-2'> {info.Varicela} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene paperas? </strong>
          </p>
          <p className='ms-2'> {info.Paperas} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene hepatitis? </strong>
          </p>
          <p className='ms-2'> {info.Hepatitis} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene difteria? </strong>
          </p>
          <p className='ms-2'> {info.Difteria} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene tifoidea? </strong>
          </p>
          <p className='ms-2'> {info.tifoidea} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene Enfermedades Renales? </strong>
          </p>
          <p className='ms-2'> {info.EnfermedadRenal} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene Hemofilia? </strong>
          </p>
          <p className='ms-2'> {info.Hemofilia} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene trast. Hepático? </strong>
          </p>
          <p className='ms-2'> {info.TrastornoHepatico} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene diabetes? </strong>
          </p>
          <p className='ms-2'> {info.Diabetes} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene reflujo? </strong>
          </p>
          <p className='ms-2'> {info.Reflujo} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo o tiene Trastorno de lenguaje? </strong>
          </p>
          <p className='ms-2'> {info.TrastornoDeLenguaje} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Otras affeciones que afecten su salud: </strong>
          </p>
          <p className='ms-2'> {info.Otros} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Se encuentra en tratamiento? </strong>
          </p>
          <p className='ms-2'> {info.TratamientosActivos} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Toma Medicamentos? </strong>
          </p>
          <p className='ms-2'> {info.TomaMedicamentos} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Especifique los medicamentos: </strong>
          </p>
          <p className='ms-2'> {info.LblTomaMedicamentos} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿La madre tomó medicamentos durante el embarazo? </strong>
          </p>
          <p className='ms-2'> {info.MadreMedicamentoEmbarazo} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Cuáles medicamentos? </strong>
          </p>
          <p className='ms-2'> {info.LblMadreMedicamentoEmbarazo} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Hubo un accidente durante el embarazo? </strong>
          </p>
          <p className='ms-2'> {info.AccidentesEmbarazo} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> El parto fue: </strong>
          </p>
          <p className='ms-2'> {info.TipoParto} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo dificultades al nacer? </strong>
          </p>
          <p className='ms-2'> {info.DificultadNacimiento} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Especifique: </strong>
          </p>
          <p className='ms-2'> {info.LblDificultadNacimiento} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong>
              {' '}
              ¿Se presentó alguna anomalía congenita de nacimiento?{' '}
            </strong>
          </p>
          <p className='ms-2'> {info.AnomaliaCongenitaNacimiento} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Especifique: </strong>
          </p>
          <p className='ms-2'> {info.LblAnomaliaCongenitaNacimiento} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Ha sido anestesiado? </strong>
          </p>
          <p className='ms-2'> {info.HaSidoAnestesiado} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Tuvo alguna reacción adversa? </strong>
          </p>
          <p className='ms-2'> {info.ReaccionAnestesia} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Especifique: </strong>
          </p>
          <p className='ms-2'> {info.LblReaccionAnestesia} </p>
        </div>
      </div>
    );
  } else if (!Data.loading && !Data.ok) {
    return (
      <h3 className='text-dark text-center'>
        La información no pudo ser recabada del servidor
      </h3>
    );
  } else if (!Data.loading && Data.ok && !info) {
    return (
      <h3 className='text-dark text-center'>
        Este formulario no ha sido llenado
      </h3>
    );
  }
};
