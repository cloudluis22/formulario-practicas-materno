import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TablaSecciones } from '../forms/TablaSecciones';
import { TablaEditarPaciente } from '../forms/TablaEditarPaciente';
import { TablaAlimentacion } from '../forms/TablaAlimentacion';
import { TablaHabitos } from '../forms/TablaHabitosH';
import { TablaAntecedentesFamiliares } from '../forms/TablaAntecedentesFamiliares';
import { TablaAntecedentes } from '../forms/TablaAntecedentesP';
import { TablaOclusion } from '../forms/TablaOclusion';
import { TablaTejidos } from '../forms/TablaTejidos';
import { TablaPerniciosos } from '../forms/TablaPerniciosos';
import { TablaErupcion } from '../forms/TablaErupcion';
import { TablaMedioBucalG } from '../forms/TablaMedioBucalG';
import { TablaAmamantacion } from '../forms/TablaAmamantacion';

export const Formulario = () => {
  const { id } = useParams();
  const [formIndex, setFormIndex] = useState(0);
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`http://localhost:3001/api/v1/obtener-paciente/${id}`)
        .then((response) => {
          console.log(response.data.paciente[0]);
          setData({
            loading: false,
            data: response.data.paciente[0],
            ok: true,
          });
        })
        .catch((error) => {
          console.log(error);
          setData({
            loading: false,
            data: [],
            ok: false,
          });
        });
    }, 3500);
  }, [id]);

  return (
    <div className='bcg-color'>
      {Data.loading && (
        <div
          className='d-flex justify-content-center align-items-center flex-column mt-5'
          style={{
            width: '100%',
          }}>
          <div
            className='spinner-border text-primary text-light'
            role='status'
            style={{ width: '6rem', height: '6rem' }}
          />
          <p className='text-white mt-3'> Cargando Información... </p>
        </div>
      )}

      {!Data.loading && Data.ok && (
        <div style={{ width: '100%', height: '100%' }}>
          <h1 className='text-white text-center mt-3'>
            Información del Paciente
          </h1>
          <h2 className='text-white text-center mt-2'>
            {Data.data.NombrePaciente}
          </h2>
          <h3 className='text-white text-center mt-2'>
            ID: {Data.data.IdPaciente}
          </h3>
          {formIndex !== 0 && (
            <button
              className='btn btn-primary ms-5'
              onClick={() => {
                setFormIndex(0);
              }}>
              Volver
            </button>
          )}

          <div className='d-flex align-items-center justify-content-center mt-3 pb-3'>
            {formIndex === 0 && <TablaSecciones setFormIndex={setFormIndex} />}
            {formIndex === 1 && <TablaEditarPaciente />}
            {formIndex === 2 && <TablaAlimentacion />}
            {formIndex === 3 && <TablaHabitos />}
            {formIndex === 4 && <TablaAntecedentes />}
            {formIndex === 5 && <TablaAntecedentesFamiliares />}
            {formIndex === 6 && <TablaOclusion />}
            {formIndex === 7 && <TablaTejidos />}
            {formIndex === 8 && <TablaPerniciosos />}
            {formIndex === 9 && <TablaErupcion />}
            {formIndex === 10 && <TablaMedioBucalG />}
            {formIndex === 11 && <TablaAmamantacion />}
          </div>
        </div>
      )}
    </div>
  );
};
