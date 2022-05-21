import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const HabitosDeHigiene = ({ idPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/habitos-higiene/${idPaciente}`)
      .then((response) => {
        setData({
          loading: false,
          data: response.data.habitoshigiene,
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
            <strong> Encargad@ del Cepillado: </strong>
          </p>
          <p className='ms-2'> {info.EncargadoCepillado} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Cepillados Diarios: </strong>
          </p>
          <p className='ms-2'> {info.CepilladosDiarios} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Marca de Pasta Dental: </strong>
          </p>
          <p className='ms-2'> {info.MarcaPastaDental} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Cepillado Diario Antes de Dormir: </strong>
          </p>
          <p className='ms-2'> {info.CepilladoDiarioDormir} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Uso de Enjuague Bucal: </strong>
          </p>
          <p className='ms-2'> {info.EnjuagueBucal} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Uso de Hilo Dental: </strong>
          </p>
          <p className='ms-2'> {info.HiloDental} </p>
        </div>
      </div>
    );
  } else if (!Data.loading && !Data.ok) {
    return (
      <h3 className='text-dark text-center'>
        La informaciÃ³n no pudo ser recabada del servidor
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
