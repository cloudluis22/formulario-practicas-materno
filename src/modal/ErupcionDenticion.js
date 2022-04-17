import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ErupcionDenticion = ({ idPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/erupcion-y-denticion/${idPaciente}`)
      .then((response) => {
        console.log(response.data.erupcionydenticion);
        setData({
          loading: false,
          data: response.data.erupcionydenticion,
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
            <strong> Edad Dental </strong>
          </p>
          <p className='ms-2'> {info.EdadDental} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Secuencia anormal </strong>
          </p>
          <p className='ms-2'> {info.SecuenciaAnormal} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Pérdida prematura </strong>
          </p>
          <p className='ms-2'> {info.PerdidaPrematura} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Retención prolongada </strong>
          </p>
          <p className='ms-2'> {info.RetencionProlongada} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Erupción Retardada </strong>
          </p>
          <p className='ms-2'> {info.ErupcionRetardada} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Falta de contacto proximal </strong>
          </p>
          <p className='ms-2'> {info.FaltaContactoProximal} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Hipoplasia incisivo molar </strong>
          </p>
          <p className='ms-2'> {info.HipoplasiaIncisivo} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Hipoplasia en deciduos </strong>
          </p>
          <p className='ms-2'> {info.HiplolasiaEnDeciduos} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Amelo/Dentinogénesis imperfecta </strong>
          </p>
          <p className='ms-2'> {info.AmeloDentinogenesisImperfecta} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Fluorosis </strong>
          </p>
          <p className='ms-2'> {info.Fluorosis} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Otros: </strong>
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
