import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const OclusionAlineamiento = ({ idPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/oclusion-y-alineamiento/${idPaciente}`)
      .then((response) => {
      
        setData({
          loading: false,
          data: response.data.oclusionyalineamiento,
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
            <strong> Linea Media: </strong>
          </p>
          <p className='ms-2'> {info.LineaMedia} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Plano Terminal: </strong>
          </p>
          <p className='ms-2'> {info.PlanoTerminal} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Clase Molar: </strong>
          </p>
          <p className='ms-2'> {info.ClaseMolar} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Espacios Primates: </strong>
          </p>
          <p className='ms-2'> {info.EspaciosPrimates} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Espacios Fisiológicos: </strong>
          </p>
          <p className='ms-2'> {info.EspaciosFisiologicos} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Traslape: </strong>
          </p>
          <p className='ms-2'> {info.Traslape} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Sobremordida: </strong>
          </p>
          <p className='ms-2'> {info.Sobremordida} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Mordida Abierta: </strong>
          </p>
          <p className='ms-2'> {info.MordidaProfunda} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Mordida Profunda: </strong>
          </p>
          <p className='ms-2'> {info.MordidaProfunda} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Malposición Dentaria: </strong>
          </p>
          <p className='ms-2'> {info.MalposicionDentaria} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Diastema: </strong>
          </p>
          <p className='ms-2'> {info.Diastema} </p>
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
