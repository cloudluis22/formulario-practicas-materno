import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faPersonCircleQuestion,
  faTrashCan,
  faSearch,
  faUserDoctor,
  faFaceSadTear
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import Select from 'react-select';
import config from '../config.json';
import { PDFConsentimiento } from '../functions/PDFConsentimiento';

export const Pacientes = React.memo(() => {
  let navigate = useNavigate();
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  const optionsGenero = [
    { value: null, label: 'Ninguno' },
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' },
  ];

  const optionsOrdenar = [
    { value: null, label: 'No Ordenar' },
    { value: 'a-z', label: 'A-Z' },
    { value: 'z-a', label: 'Z-A' },
  ];

  const [opcionGenero, setOpcionGenero] = useState(null);
  const [opcionOrdenar, setOpcionOrdenar] = useState(null);

  const traerPacientes = async (filtro, orden) => {
    await axios
      .get(config.server_adress + '/api/v1/obtener-pacientes')
      .then((response) => {
        if(!!filtro) {
          if(filtro !== 'Ninguno') {
            setData({
              loading: false,
              data: response.data.pacientes.filter((paciente) => paciente.Genero.includes(filtro)),
              ok: true,
            });
          }
          else {
            setData({
              loading: false,
              data: response.data.pacientes,
              ok: true,
            });
          }
        }
        else {
          setData({
            loading: false,
            data: response.data.pacientes,
            ok: true,
          });
        }

        if(!!orden) {

          if(orden !== 'Ninguno') {

            if(orden === 'a-z') {
              setData({
                ...Data,
                data: Data.data.sort((a, b) => {
                  return a.NombrePaciente.localeCompare(b.NombrePaciente)
                })
              });

              if(filtro !== 'Ninguno' && filtro !== null) {
                setData({
                  loading: false,
                  data: Data.data.filter((paciente) => paciente.Genero.includes(filtro)),
                  ok: true,
                });
              }

            }
            else {
              setData({
                ...Data,
                data: Data.data.sort((a, b) => {
                  return b.NombrePaciente.localeCompare(a.NombrePaciente)
                })
              });


              if(filtro !== 'Ninguno' && filtro !== null) {
                setData({
                  loading: false,
                  data: Data.data.filter((paciente) => paciente.Genero.includes(filtro)),
                  ok: true,
                });
              }
            }
          }

        }

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
    
    traerPacientes(opcionGenero && opcionGenero.value, opcionOrdenar && opcionOrdenar.value);
    
  }, [opcionGenero, opcionOrdenar]);

  const EliminarPaciente = (IdPaciente) => {
    Swal.fire({
      title:
        '??Desea eliminar a este paciente?\nSe borrar?? toda la informaci??n incluyendo el historial medico.',
      showDenyButton: true,
      confirmButtonText: 'S??, deseo eliminar a este paciente',
      denyButtonText: `No, conserva este paciente`,
      icon: 'warning',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(
            `${config.server_adress}/api/v1/eliminar-paciente/${IdPaciente}`,
            {
              id: IdPaciente,
            }
          )
          .then(() => {
            traerPacientes();
            Swal.fire({
              title: '??Hecho!',
              text: 'Paciente eliminado con ??xito',
              icon: 'success',
            });
          })
          .catch((error) => {
            Swal.fire({
              title: '??Oops!',
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
        Informaci??n de los Pacientes
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
          <p className='text-white mt-3'> Cargando Informaci??n... </p>
        </div>
      )}
      {!Data.loading && !Data.ok && (
        <div className='d-flex flex-column align-items-center'>
          <h3> Hubo un error al traer la informaci??n, intenta conectarte de nuevo m??s tarde o contacta a un administrador. </h3>
          <FontAwesomeIcon icon={faFaceSadTear} size='5x' />
        </div>
      )}

      {!Data.loading && Data.ok && (
        <div className='overflow-auto'>
            <button
              className='btn btn-primary ms-5 mb-3 animate__animated animate__fadeIn'
              onClick={() => navigate('/registro')}>
              <FontAwesomeIcon icon={faPlus} /> Nuevo Paciente
            </button>
          <div className='container-md'>


            <div className='d-flex flex-row'>
              <form onSubmit={handleSubmit}>
                <input className='form-control busqueda' placeholder='Busca un paciente...' value={busqueda} name='busqueda' onChange={handleInputChange} />
                <FontAwesomeIcon icon={faSearch} className='busqueda-icono' />
              </form>

              <div className='text-black ms-auto d-flex flex-row'>
                <Select
                  defaultValue={opcionOrdenar}
                  onChange={setOpcionOrdenar}
                  options={optionsOrdenar}
                  isSearchable={false}
                  className='me-3'
                  placeholder='Ordenar'
                /> 

                <Select
                  defaultValue={opcionGenero}
                  onChange={setOpcionGenero}
                  options={optionsGenero}
                  isSearchable={false}
                  placeholder='G??nero'
                /> 
              </div>


            </div>

            
            <table className='table table-striped table-responsive animate__animated animate__fadeInUp table-sm'>
              <thead>
                <tr>
                  <th className='col'> ID del Paciente </th>
                  <th className='col'> Nombre del Paciente </th>
                  <th className='col'> G??nero </th>
                  <th className='col'> N??mero Telef??nico </th>
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
                          className='btn btn-sm btn-danger me-2'
                          onClick={() => {
                            EliminarPaciente(paciente.IdPaciente);
                          }}>
                          Eliminar
                          <FontAwesomeIcon icon={faTrashCan} className='ms-1' />
                        </button>

                        <button
                          className='btn btn-sm btn-primary me-2'
                          onClick={() => {
                            navigate(`/evolucion-paciente/${paciente.IdPaciente}`);
                          }}>
                          Evoluci??n
                          <FontAwesomeIcon icon={faUserDoctor} className='ms-1' />
                        </button>

                        <button
                          className='btn btn-sm btn-secondary'
                          onClick={() => {
                            Swal.fire({
                              icon: 'info',
                              title: 'Declaraci??n de Consentimiento',
                              text: `Yo ${paciente.TutorEncargado} declaro que la informaci??n que aqu?? se expresa es ver??dica, estoy enterad@ de que es informaci??n confidencial y solamente la Dra. Alicia D??az Magdaleno tendr?? acceso a este documento; en caso de requerirlo yo puedo solicitar un resumen de mi historial cl??nico y evoluci??n.`,
                              confirmButtonText: 'Imprimir Declaraci??n de Consentimiento completa',
                              showCancelButton: true,
                              cancelButtonText: 'Cerrar Ventana'
                            })
                            .then((result) => {
                              if(result.isConfirmed) {
                                PDFConsentimiento(paciente.TutorEncargado, paciente.NombrePaciente);
                              }
                            })

                          }}>
                          Consentimiento
                          <FontAwesomeIcon icon={faUserDoctor} className='ms-1' />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
        </div> 
      )}
    </div>
  );
});
