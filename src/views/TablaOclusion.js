import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';

export const TablaHabitos = () => {
  return (
    <div className='bcg-color d-flex justify-content-center flex-column align-items-center'>
      <h1 className='display-2 text-light'> Tabla Alimentacion </h1>
      <Formik
        initialValues={{
          EncargadoCepillado: '',
          CepilladosDiaros: '',
          MarcaPastaDental: '',
          CepilladoDiarioDormir: '',
          EnjuagueBucal: '',
          HiloDental: '',
        }}
        validate={(values) => {
          let errors = {};

          if (!values.EncargadoCepillado) {
            errors.EncargadoCepillado =
              'Por favor ingrese la persona la cual se encarga del cepillado de dientes del paciente.';
          }

          if (!values.CepilladosDiaros) {
            errors.CepilladosDiaros =
              'Por favor ingrese el no. de veces que se cepilla los dientes al día.';
          }

          if (!values.MarcaPastaDental) {
            errors.MarcaPastaDental =
              'Por favor ingrese la marca de la pasta dental.';
          }

          console.log('errores');
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const IdPaciente = uniqid();
          await axios
            .post('http://localhost:3001/api/v1/insert', {
              id: IdPaciente,
              EncargadoCepillado: values.EncargadoCepillado,
              CepilladosDiaros: values.CepilladosDiaros,
              MarcaPastaDental: values.MarcaPastaDental,
              CepilladoDiarioDormir: values.CepilladoDiarioDormir,
              EnjuagueBucal: values.EnjuagueBucal,
              HiloDental: values.HiloDental,
            })
            .then((response) => {
              Swal.fire(
                'Cool!',
                'Informacion Subida correctamente.',
                'success'
              );
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
          <Form className='card px-5' style={{ width: '550px' }}>
            <div className='mb-4 mt-2'>
              <label htmlFor='EncargadoCepillado' className='form-label'>
                Quien se encarga de lavar los dientes del paciente?
              </label>
              <Field
                type='Text'
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
              type='text'
              id='CepilladosDiaros'
              name='CepilladosDiaros'
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
              name='CepilladosDiaros'
              component={() => (
                <div className='invalid-feedback'>
                  {errors.CepilladosDiaros}
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

            {/*CepilladoDiarioDormir */}
            <label htmlFor='MarcaPastaDental' className='form-label'>
              ¿Se cepilla los dientes antes de dormir sin falta?
            </label>
            <Field
              type='text'
              id='CepilladoDiarioDormir'
              name='CepilladoDiarioDormir'
              className={
                !touched.CepilladoDiarioDormir
                  ? 'form-control'
                  : errors.CepilladoDiarioDormir
                  ? 'form-control is-invalid'
                  : 'form-control is-valid'
              }
              placeholder='si/no , siempre / casi siempre / a veces'
            />
            <ErrorMessage
              name='CepilladoDiarioDormir'
              component={() => (
                <div className='invalid-feedback'>
                  {errors.CepilladoDiarioDormir}
                </div>
              )}
            />
            <div id='CepilladoDiarioDormirHelp' className='form-text'>
              se debe contestar si o no si cepilla los dientes antes de dormir
              sin falta y con que fecuencia siempre / casi siempre / a veces
            </div>

            <br></br>

            {/*EnjuagueBucal */}
            <label htmlFor='MarcaPastaDental' className='form-label'>
              ¿Utiliza enjuague bucal?
            </label>
            <Field
              type='text'
              id='EnjuagueBucal'
              name='EnjuagueBucal'
              className={
                !touched.EnjuagueBucal
                  ? 'form-control'
                  : errors.EnjuagueBucal
                  ? 'form-control is-invalid'
                  : 'form-control is-valid'
              }
              placeholder='si/no , siempre / casi siempre / a veces'
            />
            <ErrorMessage
              name='EnjuagueBucal'
              component={() => (
                <div className='invalid-feedback'>{errors.EnjuagueBucal}</div>
              )}
            />
            <div id='EnjuagueBucalHelp' className='form-text'>
              se debe contestar si o no utiliza enguaje bucal y con que
              fecuencia siempre / casi siempre / a veces
            </div>

            <br></br>

            {/*HiloDental */}
            <label htmlFor='MarcaPastaDental' className='form-label'>
              ¿Utiliza hilo dental?
            </label>
            <Field
              type='text'
              id='HiloDental'
              name='HiloDental'
              className={
                !touched.HiloDental
                  ? 'form-control'
                  : errors.HiloDental
                  ? 'form-control is-invalid'
                  : 'form-control is-valid'
              }
              placeholder='si/no , siempre / casi siempre / a veces'
            />
            <ErrorMessage
              name='HiloDental'
              component={() => (
                <div className='invalid-feedback'>{errors.HiloDental}</div>
              )}
            />
            <div id='HiloDentalHelp' className='form-text'>
              se debe contestar si o no utiliza hilo dental y con que fecuencia
              siempre / casi siempre / a veces
            </div>

            <br></br>

            <button className='btn btn-primary' type='submit'>
              Subir informacion del paciente
            </button>

            <br></br>
          </Form>
        )}
      </Formik>
    </div>
  );
};
