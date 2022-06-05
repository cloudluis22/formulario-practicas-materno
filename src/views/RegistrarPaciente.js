import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

export const RegistrarPaciente = () => {
  
  let navigate = useNavigate();

  const volverMenuPacientes = () => {
    navigate('/pacientes')
  }

  return (
    <div className='bcg-color d-flex justify-content-center flex-column align-items-center overflow-hidden'>
      <h1 className='display-2 text-light animate__animated animate__fadeIn'>
        Registro de Pacientes
      </h1>
      <button className='btn btn-primary btn-regresar-registrar animate__animated animate__fadeIn' onClick={volverMenuPacientes}> <FontAwesomeIcon icon={faArrowLeft} /> Regresar a Menu Pacientes </button>
      <Formik
        initialValues={{
          NombrePaciente: '',
          NombrePreferido: '',
          Genero: 'Masculino',
          GustosPersonales: '',
          FechaDeNacimiento: '',
          LugarDeNacimiento: '',
          PadreMadreTutor: '',
          TutorEncargado: '',
          Domicilio: '',
          Telefono: '',
          Celular: '',
          OtroContacto: '',
          NombrePediatra: '',
        }}
        validate={(values) => {
          let errors = {};

          if (!values.NombrePaciente) {
            errors.NombrePaciente = 'Por favor ingresa el nombre.';
          }

          if (!values.NombrePreferido) {
            errors.NombrePreferido = 'Por favor ingrese el nombre preferido.';
          }

          if (!values.Genero) {
            errors.Genero = 'Por favor ingrese el Genero del paciente.';
          }

          if (!values.GustosPersonales) {
            errors.GustosPersonales =
              'Por favor debe de ingresar los gustos del paciente.';
          } else if (values.GustosPersonales.replace(/\s/g, '').length < 15) {
            errors.GustosPersonales =
              'Debe de agregar una descripcion de más de 15 carácteres.';
          }

          if (!values.FechaDeNacimiento) {
            errors.FechaDeNacimiento = 'No ha agregado una fecha valida';
          }

          if (!values.LugarDeNacimiento) {
            errors.LugarDeNacimiento =
              'Por favor ingrese el lugar de nacimiento del paciente.';
          }

          if (!values.NombrePediatra) {
            errors.NombrePediatra =
              'Por favor ingrese el nombre del pediatra.';
          }

          if (!values.PadreMadreTutor) {
            errors.PadreMadreTutor =
              'Por favor ingrese el Nombre del Padre / Madre / Tutor.';
          }

          if (!values.TutorEncargado) {
            errors.TutorEncargado =
              'Por favor ingrese el Nombre del Tutor encargado.';
          }

          if (!values.Domicilio) {
            errors.Domicilio = 'Por favor ingrese el Domicilio.';
          }

          if (!values.Telefono) {
            errors.Telefono = 'Por favor ingrese el Telefono.';
          } else if (values.Telefono.toString().length > 13) {
            errors.Telefono = 'El Telefono no debe pasar de 13 digitos';
          }

          if (!values.Celular) {
            errors.Celular = 'Por favor ingrese el Celular.';
          } else if (values.Celular.toString().length > 13) {
            errors.Celular = 'El Celular no debe pasar de 13 digitos';
          }

          if (!values.OtroContacto) {
            errors.OtroContacto = 'Por favor ingrese el Otro Contacto.';
          } else if (values.OtroContacto.toString().length > 13) {
            errors.OtroContacto =
              'El Otro Contacto no debe pasar de 13 digitos';
          }

          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const IdPaciente = uniqid();
          const now = moment();
          const nacimiento = moment(values.FechaDeNacimiento);

          const edad = now.diff(nacimiento, 'years');

          await axios
            .post('http://localhost:3001/api/v1/registrar-paciente', {
              id: IdPaciente,
              Mydate: now,
              NombrePaciente: values.NombrePaciente,
              NombrePreferido: values.NombrePreferido,
              Edad: edad,
              Genero: values.Genero,
              GustosPersonales: values.GustosPersonales,
              FechaDeNacimiento: values.FechaDeNacimiento,
              LugarDeNacimiento: values.LugarDeNacimiento,
              PadreMadreTutor: values.PadreMadreTutor,
              TutorEncargado: values.TutorEncargado,
              Domicilio: values.Domicilio,
              Telefono: values.Telefono,
              Celular: values.Celular,
              OtroContacto: values.OtroContacto,
              NombrePediatra: values.NombrePediatra,
            })
            .then((response) => {
              Swal.fire(
                '¡Hecho!',
                'Informacion Subida correctamente.\nTe redirigiremos a la pantalla principal para llenar el antecedente clínico del paciente.',
                'success'
              ).then(() => {
                navigate('/pacientes');
              });
            })
            .catch((error) => {
              
              Swal.fire(
                'Oops!',
                'La informacion del registro no ha podido ser enviada correctamente, prueba de nuevo.',
                'error'
              );
            });
        }}>
        {({ errors, touched }) => (
          <Form
            className='card px-5 mb-3 animate__animated animate__backInUp'
            style={{ width: '550px', overflow: 'auto' }}>
            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='NombrePaciente' className='form-label'>
                Nombre completo del paciente
              </label>
              <Field
                type='text'
                id='NombrePaciente'
                name='NombrePaciente'
                autocomplete='off'
                className={
                  !touched.NombrePaciente
                    ? 'form-control'
                    : errors.NombrePaciente
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Ingrese el Nombre'
              />
              <ErrorMessage
                name='NombrePaciente'
                component={() => (
                  <div className='invalid-feedback'>
                    {errors.NombrePaciente}
                  </div>
                )}
              />
              <div id='NombrePacienteHelp' className='form-text'>
                Aqui debes de ingresar el nombre.
              </div>

              <br></br>

              <div className='mb-3'>
                <label htmlFor='NombrePreferido' className='form-label'>
                  Nombre Preferido del paciente
                </label>
                <Field
                  type='text'
                  id='NombrePreferido'
                  name='NombrePreferido'
                  autocomplete='off'
                  className={
                    !touched.NombrePreferido
                      ? 'form-control'
                      : errors.NombrePreferido
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Nombre preferido'
                />
                <ErrorMessage
                  name='NombrePreferido'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.NombrePreferido}
                    </div>
                  )}
                />
                <div id='NombrePreferidoHelp' className='form-text'>
                  Ingrese el nombre con el que se le dirigirá al paciente.
                </div>
              </div>

              <br></br>

              {/*Radio Button Genero */}
              <div className='mb-4 mt-2'>
                <div id='my-radio-group'> Genero</div>
                <div role='group' aria-labelledby='my-radio-group'>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='Genero'
                      id='Genero'
                      value='Masculino'
                    />
                    Masculino
                  </label>
                  <br></br>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='Genero'
                      id='Genero'
                      value='Femenino'
                    />
                    Femenino
                  </label>
                  <br></br>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='Genero'
                      id='Genero'
                      value='Sin especificar'
                    />
                    Sin especificar
                  </label>
                </div>
              </div>

              <div className='mb-3'>
                <label htmlFor='GustosPersonales' className='form-label'>
                  Gustos personales del paciente
                </label>
                <Field
                  as='textarea'
                  rows='3'
                  type='text'
                  id='GustosPersonales'
                  name='GustosPersonales'
                  className={
                    !touched.GustosPersonales
                      ? 'form-control'
                      : errors.GustosPersonales
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Gustos del paciente'
                />
                <ErrorMessage
                  name='GustosPersonales'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.GustosPersonales}
                    </div>
                  )}
                />
                <div id='GustosPersonales' className='form-text'>
                  Ingrese una descripción detallada de los gustos del paciente
                </div>
              </div>

              <br></br>

              <div className='mb-3'>
                <label htmlFor='FechaDeNacimiento' className='form-label'>
                  Fecha de nacimiento del paciente
                </label>
                <Field
                  type='date'
                  id='FechaDeNacimiento'
                  name='FechaDeNacimiento'
                  autocomplete='off'
                  className={
                    !touched.FechaDeNacimiento
                      ? 'form-control'
                      : errors.FechaDeNacimiento
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Fecha de Nacimiento'
                />
                <ErrorMessage
                  name='FechaDeNacimiento'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.FechaDeNacimiento}
                    </div>
                  )}
                />
                <div id='FechaDeNacimientoHelp' className='form-text'>
                  Introduzca la Fecha de Nacimiento del paciente.
                </div>
              </div>

              <br></br>

              <div className='mb-3'>
                <label htmlFor='LugarDeNacimiento' className='form-label'>
                  Lugar de nacimiento del paciente
                </label>
                <Field
                  type='text'
                  id='LugarDeNacimiento'
                  name='LugarDeNacimiento'
                  autocomplete='off'
                  className={
                    !touched.LugarDeNacimiento
                      ? 'form-control'
                      : errors.LugarDeNacimiento
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Lugar de nacimiento'
                />
                <ErrorMessage
                  name='LugarDeNacimiento'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LugarDeNacimiento}
                    </div>
                  )}
                />
                <div id='LugarDeNacimientoHelp' className='form-text'>
                  Por favor ingrese la dirección en la que el paciente nació
                </div>
              </div>

              <br></br>

              {/* Mi parte */}

              <label htmlFor='PadreMadreTutor' className='form-label'>
                Nombre del Padre o Madre
              </label>
              <Field
                type='text'
                id='PadreMadreTutor'
                name='PadreMadreTutor'
                autocomplete='off'
                className={
                  !touched.PadreMadreTutor
                    ? 'form-control'
                    : errors.PadreMadreTutor
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Ingrese el Nombre'
              />
              <ErrorMessage
                name='PadreMadreTutor'
                component={() => (
                  <div className='invalid-feedback'>
                    {errors.PadreMadreTutor}
                  </div>
                )}
              />
              <div id='PadreMadreTutorHelp' className='form-text'>
                Aqui debes de ingresar el nombre del padre o de la madre.
              </div>

              <br></br>

              {/*tutor encargado */}
              <label htmlFor='TutorEncargado' className='form-label'>
                Nombre del Tutor Encargado
              </label>
              <Field
                type='text'
                id='TutorEncargado'
                name='TutorEncargado'
                autocomplete='off'
                className={
                  !touched.TutorEncargado
                    ? 'form-control'
                    : errors.TutorEncargado
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Ingrese el Nombre'
              />
              <ErrorMessage
                name='TutorEncargado'
                component={() => (
                  <div className='invalid-feedback'>
                    {errors.TutorEncargado}
                  </div>
                )}
              />
              <div id='TutorEncargadoHelp' className='form-text'>
                Aqui debes de ingresar el nombre del tutor a cargo del paciente.
              </div>

              <br></br>

              {/*domicilio*/}
              <label htmlFor='Domicilio' className='form-label'>
                Domicilio
              </label>
              <Field
                type='text'
                id='Domicilio'
                name='Domicilio'
                autocomplete='off'
                className={
                  !touched.Domicilio
                    ? 'form-control'
                    : errors.Domicilio
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Ingrese el Domicilio'
              />
              <ErrorMessage
                name='Domicilio'
                component={() => (
                  <div className='invalid-feedback'>{errors.Domicilio}</div>
                )}
              />
              <div id='DomicilioHelp' className='form-text'>
                Aqui debes de ingresar el domicilio.
              </div>

              <br></br>

              {/*Telefono*/}
              <label htmlFor='Telefono' className='form-label'>
                Telefono
              </label>
              <Field
                type='text'
                id='Telefono'
                name='Telefono'
                autocomplete='off'
                className={
                  !touched.Telefono
                    ? 'form-control'
                    : errors.Telefono
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Ingrese el Telefono'
              />
              <ErrorMessage
                name='Telefono'
                component={() => (
                  <div className='invalid-feedback'>{errors.Telefono}</div>
                )}
              />
              <div id='TelefonoHelp' className='form-text'>
                Aqui debes de ingresar el telefono.
              </div>

              <br></br>

              {/*Celular*/}
              <label htmlFor='Celular' className='form-label'>
                Celular
              </label>
              <Field
                type='text'
                id='Celular'
                name='Celular'
                autocomplete='off'
                className={
                  !touched.Celular
                    ? 'form-control'
                    : errors.Celular
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Ingrese el Celular'
              />
              <ErrorMessage
                name='Celular'
                component={() => (
                  <div className='invalid-feedback'>{errors.Celular}</div>
                )}
              />
              <div id='CelularHelp' className='form-text'>
                Aqui debes de ingresar el celular.
              </div>

              <br></br>

              {/*OtroContacto*/}
              <label htmlFor='OtroContacto' className='form-label'>
                Otro Contacto
              </label>
              <Field
                type='text'
                id='OtroContacto'
                name='OtroContacto'
                autocomplete='off'
                className={
                  !touched.OtroContacto
                    ? 'form-control'
                    : errors.OtroContacto
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Ingrese el Otro Contacto'
              />
              <ErrorMessage
                name='OtroContacto'
                component={() => (
                  <div className='invalid-feedback'>{errors.OtroContacto}</div>
                )}
              />
              <div id='OtroContactoHelp' className='form-text'>
                Aqui debes de ingresar el Otro Contacto.
              </div>

                  <br></br>

                  {/*Nombre del pediatra*/}
              <label htmlFor='OtroContacto' className='form-label'>
                Nombre del pediatra
              </label>
              <Field
                type='text'
                autocomplete='off'
                id='NombrePediatra'
                name='NombrePediatra'
                className={
                  !touched.NombrePediatra
                    ? 'form-control'
                    : errors.NombrePediatra
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Ingrese el Nombre del pediatra'
              />
              <ErrorMessage
                name='NombrePediatra'
                component={() => (
                  <div className='invalid-feedback'>{errors.NombrePediatra}</div>
                )}
              />
              <div id='NombrePediatraHelp' className='form-text'>
                Aqui debes de ingresar el nombre del pediatra
              </div>

              <br></br>

              <button className='btn btn-primary' type='submit'>
                Subir informacion del paciente
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
