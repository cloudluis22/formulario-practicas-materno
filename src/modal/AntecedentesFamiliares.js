import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AntecedentesFamiliares = ({ idPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/antecedentes-familiares/${idPaciente}`)
      .then((response) => {
        setData({
          loading: false,
          data: response.data.antecedentesfamiliares,
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
            <strong> Diabetes: </strong>
          </p>
          {/* Contenido */}
          <p className='ms-2'> {info.Diabetes} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Cancer: </strong>
          </p>
          <p className='ms-2'> {info.Cancer} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Hipertension: </strong>
          </p>
          <p className='ms-2'> {info.Hipertension} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> VIH: </strong>
          </p>
          <p className='ms-2'> {info.VIH} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Enfermedad Degenerativa: </strong>
          </p>
          <p className='ms-2'> {info.EnfermedadDegenerativa} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Enfermedad Mental: </strong>
          </p>
          <p className='ms-2'> {info.EnfermedadMental} </p>
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
