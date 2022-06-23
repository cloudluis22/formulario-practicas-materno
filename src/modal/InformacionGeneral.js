import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config.json';

export const InformacionGeneral = ({ idPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get(
        `${config.server_adress}/api/v1/obtener-paciente-completo/${idPaciente}`
      )
      .then((response) => {
       
        setData({
          loading: false,
          data: response.data.paciente[0],
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

  return (
    <div className='text-dark fs-4 ms-2'>
      <div className='d-flex flex-row'>
        <p>
          <strong> Nombre del Paciente: </strong>
        </p>
        <p className='ms-2'> {Data.data.NombrePaciente} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> Nombre Preferido: </strong>
        </p>
        <p className='ms-2'> {Data.data.NombrePreferido} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> Edad: </strong>
        </p>
        <p className='ms-2'> {Data.data.Edad} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> Genero: </strong>
        </p>
        <p className='ms-2'> {Data.data.Genero} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> Gustos Personales: </strong>
        </p>
        <p className='ms-2'> {Data.data.GustosPersonales} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> Fecha de Nacimiento: </strong>
        </p>
        <p className='ms-2'> {Data.data.FechaDeNacimientos} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> Lugar de Nacimiento: </strong>
        </p>
        <p className='ms-2'> {Data.data.LugarDeNacimiento} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> Padre/Madre/Tutor: </strong>
        </p>
        <p className='ms-2'> {Data.data.PadreMadreTutor} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> TutorEncargado: </strong>
        </p>
        <p className='ms-2'> {Data.data.TutorEncargado} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> Domicilio: </strong>
        </p>
        <p className='ms-2'> {Data.data.Domicilio} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> Teléfono Fijo: </strong>
        </p>
        <p className='ms-2'> {Data.data.Telefono} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> Celular: </strong>
        </p>
        <p className='ms-2'> {Data.data.Celular} </p>
      </div>

      <div className='d-flex flex-row'>
        <p>
          <strong> Otro Contacto: </strong>
        </p>
        <p className='ms-2'> {Data.data.OtroContacto} </p>
      </div>
    </div>
  );
};
