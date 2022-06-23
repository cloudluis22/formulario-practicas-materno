import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config.json';

export const HabitosPerniciosos = ({ idPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get(`${config.server_adress}/api/v1/habitos-perniciosos/${idPaciente}`)
      .then((response) => {
        setData({
          loading: false,
          data: response.data.habitosperniciosos,
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
            <strong> Respirador bucal </strong>
          </p>
          <p className='ms-2'> {info.RespiradoBucal} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Succión digital </strong>
          </p>
          <p className='ms-2'> {info.SuccionDigital} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Succión chupete </strong>
          </p>
          <p className='ms-2'> {info.SuccionChupete} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Succión labial </strong>
          </p>
          <p className='ms-2'> {info.SuccionLabial} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Morderse el labio </strong>
          </p>
          <p className='ms-2'> {info.MorderseLabio} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Morderse las uñas </strong>
          </p>
          <p className='ms-2'> {info.MorderseLasUnas} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Deglución atípica/Prostrusión lingual </strong>
          </p>
          <p className='ms-2'> {info.DeglucionAtipica} </p>
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
