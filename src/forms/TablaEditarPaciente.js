import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const TablaEditarPaciente = ({ IdPaciente }) => {
  let navigate = useNavigate();
  let formValues = {
    NombrePaciente: '',
    NombrePreferido: '',
    Edad: '',
    Genero: '',
    GustosPersonales: '',
    FechaDeNacimiento: '',
    LugarDeNacimiento: '',
    PadreMadreTutor: '',
    TutorEncargado: '',
    Domicilio: '',
    Telefono: '',
    Celular: '',
    OtroContacto: '',
  };
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `http://localhost:3001/api/v1/obtener-paciente-completo/${IdPaciente}`
        )
        .then((response) => {
          setData({
            loading: false,
            data: response.data.paciente[0],
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
    }, 1000);
  }, [IdPaciente]);

  if (Data.ok) {
    formValues = Data.data;
  }

  if (!Data.loading && Data.ok) {
    return (
      <Formik
        initialValues={formValues}
        validate={(values) => {
          let errors = {};

          if (!values.NombrePaciente) {
            errors.NombrePaciente = 'Por favor ingresa el nombre.';
          }

          if (!values.NombrePreferido) {
            errors.NombrePreferido = 'Por favor ingrese el nombre preferido.';
          }

          if (!values.Edad) {
            errors.Edad = 'Por favor ingrese la edad.';
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
          await axios
            .put('http://localhost:3001/api/v1/actualizar-paciente', {
              id: IdPaciente,
              NombrePaciente: values.NombrePaciente,
              NombrePreferido: values.NombrePreferido,
              Edad: values.Edad,
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
            })
            .then((response) => {
              Swal.fire(
                '¡Hecho!',
                'Informacion actualizada correctamente.\nTe redirigiremos a la pantalla principal para llenar el antecedente clínico del paciente.',
                'success'
              ).then(() => {
                navigate('/pacientes');
              });
            })
            .catch((error) => {
              console.log(error);
              Swal.fire(
                'Oops!',
                'La informacion del registro no ha podido ser enviada correctamente, prueba de nuevo.',
                'error'
              );
            });
        }}>
        {({ errors, touched }) => (
          <Form
            className='card px-5'
            style={{ width: '550px', overflow: 'auto', height: '550px' }}>
            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='NombrePaciente' className='form-label'>
                Nombre completo del paciente
              </label>
              <Field
                type='text'
                id='NombrePaciente'
                name='NombrePaciente'
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

              <div className='mb-3'>
                <label htmlFor='Edad' className='form-label'>
                  Edad del paciente
                </label>
                <Field
                  type='text'
                  id='Edad'
                  name='Edad'
                  className={
                    !touched.Edad
                      ? 'form-control'
                      : errors.Edad
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Edad'
                />
                <ErrorMessage
                  name='Edad'
                  component={() => (
                    <div className='invalid-feedback'>{errors.Edad}</div>
                  )}
                />
                <div id='EdadHelp' className='form-text'>
                  Ingrese la edad actual del paciente, especifique si es en años
                  o semanas.
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
                      value='Otro'
                    />
                    Otro
                  </label>
                </div>
              </div>

              <br></br>

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
                type='number'
                id='Telefono'
                name='Telefono'
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
                type='number'
                id='Celular'
                name='Celular'
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
                type='number'
                id='OtroContacto'
                name='OtroContacto'
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

              <button className='btn btn-primary' type='submit'>
                Subir informacion del paciente
              </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
};
