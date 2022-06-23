import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config.json';

export const Alimentacion = ({ idPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get(`${config.server_adress}/api/v1/alimentacion/${idPaciente}`)
      .then((response) => {
        setData({
          loading: false,
          data: response.data.alimentacion,
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
        <h3 className='text-center'> Veces Ingeridas x Semana </h3>

        <div className='d-flex flex-row'>
          <p>
            <strong> Comidas Diarias: </strong>
          </p>
          <p className='ms-2'> {info.ComidasDiarias} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Carne: </strong>
          </p>
          <p className='ms-2'> {info.Carne} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Leche: </strong>
          </p>
          <p className='ms-2'> {info.Leche} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Pan: </strong>
          </p>
          <p className='ms-2'> {info.Pan} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Frutas: </strong>
          </p>
          <p className='ms-2'> {info.Frutas} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Yoghurt: </strong>
          </p>
          <p className='ms-2'> {info.Yoghurt} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Jugos: </strong>
          </p>
          <p className='ms-2'> {info.Jugos} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Vegetales: </strong>
          </p>
          <p className='ms-2'> {info.Vegetales} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Dulces: </strong>
          </p>
          <p className='ms-2'> {info.Dulces} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Gomitas: </strong>
          </p>
          <p className='ms-2'> {info.Gomitas} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Huevo: </strong>
          </p>
          <p className='ms-2'> {info.Huevo} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Galletas: </strong>
          </p>
          <p className='ms-2'> {info.Galletas} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Chocolate: </strong>
          </p>
          <p className='ms-2'> {info.Chocolate} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Pescado: </strong>
          </p>
          <p className='ms-2'> {info.Pescado} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Mermelada: </strong>
          </p>
          <p className='ms-2'> {info.Mermelada} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Chicle: </strong>
          </p>
          <p className='ms-2'> {info.Chicle} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Agua: </strong>
          </p>
          <p className='ms-2'> {info.Agua} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Chocolate: </strong>
          </p>
          <p className='ms-2'> {info.Yakult} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Té: </strong>
          </p>
          <p className='ms-2'> {info.Te} </p>
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
