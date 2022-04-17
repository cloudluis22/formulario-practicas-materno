import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Amamantacion = ({ idPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/alimentacion-bebe/${idPaciente}`)
      .then((response) => {
        console.log(response.data.alimentacionbebe);
        setData({
          loading: false,
          data: response.data.alimentacionbebe,
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
        <h3 className='text-center'>y alimenacion del bebé </h3>
        <br></br>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Su bebe toma o tomó pecho? </strong>
          </p>
          <p className='ms-2'> {info.TomaPechoEdad} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Hasta que edad? </strong>
          </p>
          <p className='ms-2'> {info.LblTomaPechoEdad} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Frecuencia </strong>
          </p>
          <p className='ms-2'> {info.LblFrecuenciaAlimentacionPecho} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> La alimentacion de su hijo es o fue: </strong>
          </p>
          <p className='ms-2'> {info.TipoDeAlimentacion} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Su hijo utiliza / utilizó biberón ? </strong>
          </p>
          <p className='ms-2'> {info.UsabaBiberon} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Frecuencia </strong>
          </p>
          <p className='ms-2'> {info.LblUsabaBiberon} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Cual era el contenido de su biberón? </strong>
          </p>
          <p className='ms-2'> {info.ContenidoBiberon} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿A qué edad dejó el biberón? </strong>
          </p>
          <p className='ms-2'> {info.EdadYaNoTomaBiberon} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Su hijo usaba o usó chupón? </strong>
          </p>
          <p className='ms-2'> {info.UsabaChupon} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Frecuencia </strong>
          </p>
          <p className='ms-2'> {info.LblUsabaChupon} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Cuál era el contenido de su chupón? </strong>
          </p>
          <p className='ms-2'> {info.ContenidoChupon} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Hasta que edad dejó el chupón? </strong>
          </p>
          <p className='ms-2'> {info.EdadYaNoUsaChupon} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Su bebé sigue teniendo alimentación noctura? </strong>
          </p>
          <p className='ms-2'> {info.AlimentacionNocturna} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> Especifique su alimento: </strong>
          </p>
          <p className='ms-2'> {info.LblAlimentacionNocturna} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong>
              {' '}
              ¿Limpia su boquita después de la alimentación noctura?{' '}
            </strong>
          </p>
          <p className='ms-2'> {info.LimpiaSuBoquita} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Su bebé consume sólidos? </strong>
          </p>
          <p className='ms-2'> {info.BebeConsumeSolidos} </p>
        </div>

        <div className='d-flex flex-row'>
          <p>
            <strong> ¿Mastica o tienen que ser molidos? </strong>
          </p>
          <p className='ms-2'> {info.LblBebeConsumeSolidos} </p>
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
