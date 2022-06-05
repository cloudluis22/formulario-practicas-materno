import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';

export const TablaHabitos = ({ IdPaciente }) => {
  let formValues = {
    EncargadoCepillado: '',
    CepilladosDiarios: '',
    MarcaPastaDental: '',
    CepilladoDiarioDormir: '',
    EnjuagueBucal: '',
    HiloDental: '',
  };

  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/habitos-higiene/${IdPaciente}`)
      .then((response) => {
        setData({
          loading: false,
          data: response.data.habitoshigiene,
          ok: true,
        });

        if (Data.data.length === 0) {
          setEdit(false);
        } else {
          setEdit(true);
        }
      })
      .catch((error) => {
        
        setData({
          loading: false,
          data: [],
          ok: false,
        });
      });
  }, [IdPaciente, Data.data]);

  if (Data.data.length > 0) {
    formValues = Data.data[0];
  }

  if (!Data.loading && Data.ok) {
    return (
      <Formik
        initialValues={formValues}
        validate={(values) => {
          let errors = {};


          if (!values.EncargadoCepillado) {
            errors.EncargadoCepillado =
              'Por favor ingrese la persona la cual se encarga del cepillado de dientes del paciente.';
          }

          if (!values.CepilladosDiarios) {
            errors.CepilladosDiarios =
              'Por favor ingrese el no. de veces que se cepilla los dientes al día.';
          }

          if (!values.MarcaPastaDental) {
            errors.MarcaPastaDental =
              'Por favor ingrese la marca de la pasta dental.';
          }

          if (!values.CepilladoDiarioDormir) {
            errors.CepilladoDiarioDormir = 'Debe seleccionar este campo';
          }

          if (!values.EnjuagueBucal) {
            errors.EnjuagueBucal = 'Debe seleccionar este campo';
          }

          if (!values.HiloDental) {
            errors.HiloDental = 'Debe seleccionar este campo';
          }


          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          let submitValues = {
            id: IdPaciente,
            EncargadoCepillado: values.EncargadoCepillado,
            CepilladosDiarios: values.CepilladosDiarios,
            MarcaPastaDental: values.MarcaPastaDental,
            CepilladoDiarioDormir: values.CepilladoDiarioDormir,
            EnjuagueBucal: values.EnjuagueBucal,
            HiloDental: values.HiloDental,
          };

          if (!edit) {
            await axios
              .post(
                `http://localhost:3001/api/v1/habitos-higiene/${IdPaciente}`,
                submitValues
              )
              .then((response) => {
                Swal.fire(
                  'Cool!',
                  'Informacion Subida correctamente.',
                  'success'
                );
              })
              .catch((error) => {
                
                Swal.fire(
                  'Oops!',
                  'La informacion de la alimentación no ha podido ser enviada correctamente, prueba de nuevo.',
                  'error'
                );
              });
          } else {
            await axios
              .put(
                `http://localhost:3001/api/v1/habitos-higiene/${IdPaciente}`,
                submitValues
              )
              .then((response) => {
                Swal.fire(
                  'Cool!',
                  'Informacion Actualizada Correctamente.',
                  'success'
                );
              })
              .catch((error) => {
                
                Swal.fire(
                  'Oops!',
                  'La informacion del registro no ha podido ser enviada correctamente, prueba de nuevo.',
                  'error'
                );
              });
          }
        }}>
        {({ errors, touched }) => (
          <Form
            className='card px-5'
            style={{ width: '550px', height: '550px', overflow: 'auto' }}>
            <div className='mb-4 mt-2'>
              <label htmlFor='EncargadoCepillado' className='form-label'>
                Quien se encarga de lavar los dientes del paciente?
              </label>
              <Field
                type='Text'
                autocomplete='off'
                id='EncargadoCepillado'
                name='EncargadoCepillado'
                className={
                  !touched.EncargadoCepillado
                    ? 'form-control'
                    : errors.EncargadoCepillado
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Nombre del encargado.'
              />
              <ErrorMessage
                name='EncargadoCepillado'
                component={() => (
                  <div className='invalid-feedback'>
                    {errors.EncargadoCepillado}
                  </div>
                )}
              />
              <div id='EncargadoCepilladoHelp' className='form-text'></div>
            </div>

            <br></br>

            {/*Cepillados Diarios */}
            <label htmlFor='CepilladosDiaros' className='form-label'>
              ¿Cuántas veces al día se cepilla los dientes?
            </label>
            <Field
              autocomplete='off'
              type='text'
              id='CepilladosDiarios'
              name='CepilladosDiarios'
              className={
                !touched.CepilladosDiaros
                  ? 'form-control'
                  : errors.CepilladosDiaros
                  ? 'form-control is-invalid'
                  : 'form-control is-valid'
              }
              placeholder='No. de veces al día que se cepilla los dientes.'
            />
            <ErrorMessage
              name='CepilladosDiarios'
              component={() => (
                <div className='invalid-feedback'>
                  {errors.CepilladosDiarios}
                </div>
              )}
            />
            <div id='CepilladosDiarosHelp' className='form-text'>
              se debe ingresar el no. de veces al dia que se cepilla los dientes
            </div>

            <br></br>

            {/*MarcaPastaDental*/}
            <label htmlFor='MarcaPastaDental' className='form-label'>
              ¿Cómo se llama la marca de pasta que utilizan?
            </label>
            <Field
              autocomplete='off'
              type='text'
              id='MarcaPastaDental'
              name='MarcaPastaDental'
              className={
                !touched.MarcaPastaDental
                  ? 'form-control'
                  : errors.MarcaPastaDental
                  ? 'form-control is-invalid'
                  : 'form-control is-valid'
              }
              placeholder='Marca de pasta deltal.'
            />
            <ErrorMessage
              name='MarcaPastaDental'
              component={() => (
                <div className='invalid-feedback'>
                  {errors.MarcaPastaDental}
                </div>
              )}
            />
            <div id='MarcaPastaDentalHelp' className='form-text'>
              se debe ingresar la marca de la pasta dental
            </div>

            <br></br>


            <div className='mb-4 mt-2'>
                <div id='my-radio-group'>¿Se cepilla los dientes antes de dormir? Frecuencia:</div>
                <div role='group' aria-labelledby='my-radio-group'>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='CepilladoDiarioDormir'
                      id='CepilladoDiarioDormir'
                      value='Siempre'
                    />
                    Siempre
                  </label>
                  <br></br>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='CepilladoDiarioDormir'
                      id='CepilladoDiarioDormir'
                      value='Casi Siempre'
                    />
                    Casi Siempre
                  </label>
                  <br></br>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='CepilladoDiarioDormir'
                      id='CepilladoDiarioDormir'
                      value='A veces'
                    />
                    A veces
                  </label>
                  <br></br>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='CepilladoDiarioDormir'
                      id='CepilladoDiarioDormir'
                      value='Nunca'
                    />
                    Nunca
                  </label>
                </div>
              </div>
            <br></br>


            <div className='mb-4 mt-2'>
                <div id='my-radio-group'>¿Utiliza enjuague bucal?<br></br> Frecuencia:</div>
                <div role='group' aria-labelledby='my-radio-group'>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='EnjuagueBucal'
                      id='EnjuagueBucal'
                      value='Siempre'
                    />
                    Siempre
                  </label>
                  <br></br>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='EnjuagueBucal'
                      id='EnjuagueBucal'
                      value='Casi Siempre'
                    />
                    Casi Siempre
                  </label>
                  <br></br>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='EnjuagueBucal'
                      id='EnjuagueBucal'
                      value='A veces'
                    />
                    A veces
                  </label>
                  <br></br>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='EnjuagueBucal'
                      id='EnjuagueBucal'
                      value='Nunca'
                    />
                    Nunca
                  </label>
                </div>
              </div>
            <br></br>


            <div className='mb-4 mt-2'>
                <div id='my-radio-group'> ¿Utiliza hilo dental?<br></br>Frecuencia</div>
                <div role='group' aria-labelledby='my-radio-group'>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='HiloDental'
                      id='HiloDental'
                      value='Siempre'
                    />
                    Siempre
                  </label>
                  <br></br>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='HiloDental'
                      id='HiloDental'
                      value='Casi Siempre'
                    />
                    Casi Siempre
                  </label>
                  <br></br>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='HiloDental'
                      id='HiloDental'
                      value='A veces'
                    />
                    A veces
                  </label>
                  <br></br>
                  <label>
                    <Field
                      type='radio'
                      className='form-check-input mx-2'
                      name='HiloDental'
                      id='HiloDental'
                      value='Nunca'
                    />
                    Nunca
                  </label>
                </div>
              </div>
            <br></br>




             
             



            <br></br>

            <button className='btn btn-primary' type='submit'>
              Subir informacion del paciente
            </button>

            <br></br>
          </Form>
        )}
      </Formik>
    );
  }
};
