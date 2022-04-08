import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Pacientes = () => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/v1/obtener-pacientes')
      .then((response) => {
        console.log(response.data.pacientes);
        setData({
          loading: false,
          data: response.data.pacientes,
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
  }, []);

  return (
    <div className='bcg-main-color'>
      <h1 className='text-white text-center mt-3'>
        Información de los Pacientes
      </h1>
      {Data.loading && (
        <div
          className='d-flex justify-content-center align-items-center flex-column mt-5'
          style={{
            width: '100%',
          }}>
          <div
            className='spinner-border text-primary text-light'
            role='status'
            style={{ width: '6rem', height: '6rem' }}
          />
          <p className='text-white mt-3'> Cargando Información... </p>
        </div>
      )}
      {!Data.loading && !Data.ok && (
        <div>
          <p> Hubo un error al traer la información </p>
        </div>
      )}

      {!Data.loading && Data.ok && (
        <table className='table table-primary table-striped'>
          <thead>
            <tr>
              <th className='col'> ID del Paciente </th>
              <th className='col'> Nombre del Paciente </th>
              <th className='col'> Género </th>
              <th className='col'> Número Telefónico </th>
              <th className='col'> Acciones </th>
            </tr>
          </thead>
          <tbody>
            {Data.data.map((paciente) => {
              return (
                <tr>
                  <td> {paciente.IdPaciente} </td>
                  <td> {paciente.NombrePaciente} </td>
                  <td> {paciente.Genero} </td>
                  <td> {paciente.Celular} </td>
                  <td>
                    <button className='btn btn-success'> Ver Paciente </button>
                    <button className='btn btn-danger'>
                      Eliminar Paciente
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
