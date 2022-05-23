import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faPersonCircleQuestion,
  faTrashCan,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';

export const Pacientes = React.memo(() => {
  let navigate = useNavigate();
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  const traerPacientes = async () => {
    await axios
      .get('http://localhost:3001/api/v1/obtener-pacientes')
      .then((response) => {
        setData({
          loading: false,
          data: response.data.pacientes,
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
  }
  
  const [values, handleInputChange, reset] = useForm({
    busqueda: ''
  });

  const { busqueda } = values;


  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(busqueda !== ''){
      setData({
        ...Data,
        data: Data.data.filter(paciente => paciente.NombrePaciente.includes(busqueda))
      });
      reset();
    }
    else {
      traerPacientes()
    }
  }

  useEffect(() => {
   
    traerPacientes();

  }, []);

  const EliminarPaciente = (IdPaciente) => {
    Swal.fire({
      title:
        '¿Desea eliminar a este paciente?\nSe borrará toda la información incluyendo el historial medico.',
      showDenyButton: true,
      confirmButtonText: 'Sí, deseo eliminar a este paciente',
      denyButtonText: `No, conserva este paciente`,
      icon: 'warning',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(
            `http://localhost:3001/api/v1/eliminar-paciente/${IdPaciente}`,
            {
              id: IdPaciente,
            }
          )
          .then(() => {
            Swal.fire({
              title: '¡Hecho!',
              text: 'Paciente eliminado con éxito',
              icon: 'success',
            });
          })
          .catch((error) => {
            Swal.fire({
              title: '¡Oops!',
              text: 'El paciente no pudo ser eliminado',
              icon: 'error',
            });
          });
      }
    });
  };

  return (
    <div className='bcg-main-color'>
      <h1 className='text-white text-center mt-3 animate__animated animate__fadeIn'>
        Información de los Pacientes
      </h1>
      <button
        className='btn btn-primary ms-5 mb-3 animate__animated animate__fadeIn'
        onClick={() => navigate('/registro')}>
        <FontAwesomeIcon icon={faPlus} /> Nuevo Paciente
      </button>
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
        <div className='container-md'>

          <form onSubmit={handleSubmit}>
            <input className='form-control busqueda' placeholder='Busca un paciente...' value={busqueda} name='busqueda' onChange={handleInputChange} />
            <FontAwesomeIcon icon={faSearch} className='busqueda-icono' />
          </form>
          
          <table className='table table-striped table-responsive animate__animated animate__fadeInUp'>
            <thead>
              <tr>
                <th className='col'> ID del Paciente </th>
                <th className='col'> Nombre del Paciente </th>
                <th className='col'> Género </th>
                <th className='col'> Número Telefónico </th>
                <th className='col'> Administrar Paciente </th>
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
                      <button
                        className='btn btn-sm me-2 btn-info-paciente'
                        onClick={() => {
                          navigate(`/edicion/${paciente.IdPaciente}`);
                        }}>
                        Ver Info
                        <FontAwesomeIcon
                          icon={faPersonCircleQuestion}
                          className='ms-1'
                        />
                      </button>
                      <button
                        className='btn btn-sm btn-danger'
                        onClick={() => {
                          EliminarPaciente(paciente.IdPaciente);
                        }}>
                        Eliminar
                        <FontAwesomeIcon icon={faTrashCan} className='ms-1' />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
});
