import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
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
import { Modal } from '../components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPrint, faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import config from '../config.json';

export const Formulario = () => {

  let navigate = useNavigate();
  const { id } = useParams();
  const [formIndex, setFormIndex] = useState(0);
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  const [openModal, setOpenModal] = useState(false);
  const [currentModal, setCurrentModal] = useState('');

  const [editable, setEditable] = useState(true);

  useEffect( () => {


    const obtenerPaciente = async () => {
      await axios
        .get(`${config.server_adress}/api/v1/obtener-paciente/${id}`)
        .then((response) => {
          setData({
            loading: false,
            data: response.data.paciente[0],
            ok: true,
          });

          const now = moment();
          const creacion = moment(response.data.paciente[0].Mydate);

          if(now.diff(creacion, 'hours') > 24) {
            setEditable(false);
          }
          
        })
        .catch((error) => {
          
          setData({
            loading: false,
            data: [],
            ok: false,
          });
        });
    }

    obtenerPaciente();
     
  }, [id]);

  return (
    <div className='bcg-color overflow-hidden'>
      {openModal && (
        <Modal
          setOpen={setOpenModal}
          idPaciente={Data.data.IdPaciente}
          formulario={currentModal}
        />
      )}

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
          <h1 className='text-white text-center mt-3 animate__animated animate__fadeIn'>
            Información del Paciente
          </h1>
          <h2 className='text-white text-center mt-2 animate__animated animate__fadeIn'>
            {Data.data.NombrePaciente}
          </h2>
          <h3 className='text-white text-center mt-2 animate__animated animate__fadeIn'>
            ID: {Data.data.IdPaciente}
          </h3>
          <h4 className='text-white text-center mt-2 animate__animated animate__fadeIn'>  
            Fecha de Creación: { moment(Data.data.Mydate).format('LLLL') }
          </h4>

          <button
              className='btn btn-primary btn-regresar-pacientes-menu animate__animated animate__fadeIn'
              onClick={() => {
                navigate('/pacientes')
              }}>
              <FontAwesomeIcon icon={faArrowLeft} /> Regresar a Menu Pacientes
            </button>


          <div className='d-flex align-items-center flex-column justify-content-center pb-3 animate__animated animate__backInUp'>

            {formIndex === 0 && (
              <TablaSecciones
                setFormIndex={setFormIndex}
                setOpenModal={setOpenModal}
                setCurrentModal={setCurrentModal}
                editable={editable}
              />
            )}
            {formIndex === 1 && (
              <TablaEditarPaciente IdPaciente={Data.data.IdPaciente} />
            )}
            {formIndex === 2 && (
              <TablaAlimentacion IdPaciente={Data.data.IdPaciente} />
            )}
            {formIndex === 3 && (
              <TablaHabitos IdPaciente={Data.data.IdPaciente} />
            )}
            {formIndex === 4 && (
              <TablaAntecedentes IdPaciente={Data.data.IdPaciente} />
            )}
            {formIndex === 5 && (
              <TablaAntecedentesFamiliares IdPaciente={Data.data.IdPaciente} />
            )}
            {formIndex === 6 && (
              <TablaOclusion IdPaciente={Data.data.IdPaciente} />
            )}
            {formIndex === 7 && (
              <TablaTejidos IdPaciente={Data.data.IdPaciente} />
            )}
            {formIndex === 8 && (
              <TablaPerniciosos IdPaciente={Data.data.IdPaciente} />
            )}
            {formIndex === 9 && (
              <TablaErupcion IdPaciente={Data.data.IdPaciente} />
            )}
            {formIndex === 10 && (
              <TablaMedioBucalG IdPaciente={Data.data.IdPaciente} />
            )}
            {formIndex === 11 && (
              <TablaAmamantacion IdPaciente={Data.data.IdPaciente} />
            )}
            <button onClick={() => {
              navigate(`/imprimir/${Data.data.IdPaciente}`)
            }} className='btn btn-primary mt-3'>
              Imprimir Expediente <FontAwesomeIcon icon={faPrint} />
            </button>
            {formIndex !== 0 && (
            <button
              className='btn btn-primary btn-regresar-pacientes animate__animated animate__fadeIn'
              onClick={() => {
                setFormIndex(0);
              }}>
              <FontAwesomeIcon icon={faArrowLeft} /> Regresar
            </button>
          )}
          </div>
        </div>
      )}
    </div>
  );
};
