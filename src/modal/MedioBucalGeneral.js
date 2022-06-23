import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config.json';

export const MedioBucalGeneral = ({ idPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get(`${config.server_adress}/api/v1/medio-bucal-general/${idPaciente}`)
      .then((response) => {

        setData({
          loading: false,
          data: response.data.mediobucalgeneral,
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
          <p>
            <strong> Higiene: </strong>
          </p>
          <p className='ms-2'> {info.Higiene} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Placa Dentobacteriana: </strong>
          </p>
          <p className='ms-2'> {info.PlacaDentobacteriana} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> PH en la Saliva: </strong>
          </p>
          <p className='ms-2'> {info.PHSaliva} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Localización: </strong>
          </p>
          <p className='ms-2'> {info.Localizacion} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Calculo Dental: </strong>
          </p>
          <p className='ms-2'> {info.CalculoDental} </p>
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
