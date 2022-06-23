import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config.json';

export const TejidosBlandos = ({ idPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get(`${config.server_adress}/api/v1/tejidos-blandos/${idPaciente}`)
      .then((response) => {

        setData({
          loading: false,
          data: response.data.tejidosblandos,
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
            <strong> Lengua </strong>
          </p>
          <p className='ms-2'> {info.Lengua} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Frenillo lingual </strong>
          </p>
          <p className='ms-2'> {info.FrenilloLingual} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Labios </strong>
          </p>
          <p className='ms-2'> {info.Labios} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Frenillo labial </strong>
          </p>
          <p className='ms-2'> {info.FrenilloLingual} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Paladar duro </strong>
          </p>
          <p className='ms-2'> {info.PaladarDuro} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Paladar blando </strong>
          </p>
          <p className='ms-2'> {info.PaladarBlando} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Piso de boca </strong>
          </p>
          <p className='ms-2'> {info.PisoBoca} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Mucosa Yugal </strong>
          </p>
          <p className='ms-2'> {info.MucosaYugal} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Mucosa masticatoria </strong>
          </p>
          <p className='ms-2'> {info.MucosaMasticatoria} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Otros </strong>
          </p>
          <p className='ms-2'> {info.Otros} </p>
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
