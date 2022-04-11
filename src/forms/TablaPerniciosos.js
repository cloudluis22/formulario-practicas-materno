import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';

export const TablaPerniciosos = () => {
  const [LblOtros, setLblOtros] = useState(false);
  return (
    <Formik
      initialValues={{
        RespiradoBucal: '',
        SuccionDigital: '',
        SuccionChupete: '',
        SuccionLabial: '',
        MorderseLabio: '',
        MorderseLasUnas: '',
        DeglucionAtipica: '',
        Otros: '',
        LblOtros: '',
      }}
      validate={(values) => {
        let errors = {};

        if (!values.RespiradoBucal) {
          errors.RespiradoBucal = 'Debe seleccionar este campo';
        }

        if (!values.SuccionDigital) {
          errors.SuccionDigital = 'Debe seleccionar este campo';
        }

        if (!values.SuccionChupete) {
          errors.SuccionChupete = 'Debe seleccionar este campo';
        }

        if (!values.SuccionLabial) {
          errors.SuccionLabial = 'Debe seleccionar este campo';
        }

        if (!values.MorderseLabio) {
          errors.MorderseLabio = 'Debe seleccionar este campo';
        }

        if (!values.MorderseLasUnas) {
          errors.MorderseLasUnas = 'Debe seleccionar este campo';
        }

        if (!values.DeglucionAtipica) {
          errors.DeglucionAtipica = 'Debe seleccionar este campo';
        }

        if (values.Otros == 'Si') {
          setLblOtros(true);
          if (!values.LblOtros) {
            errors.LblOtros = 'Usted tiene que llenar este campo';
          }
        } else {
          setLblOtros(false);
        }

        console.log('errores');
        return errors;
      }}
      onSubmit={async (values, { resetForm }) => {
        const IdPaciente = uniqid();
        await axios
          .post('http://localhost:3001/api/v1/insert', {
            id: IdPaciente,
            RespiradoBucal: values.RespiradoBucal,
            SuccionDigital: values.SuccionDigital,
            SuccionChupete: values.SuccionChupete,
            SuccionLabial: values.SuccionLabial,
            MorderseLabio: values.MorderseLabio,
            MorderseLasUnas: values.MorderseLasUnas,
            DeglucionAtipica: values.DeglucionAtipica,
            Otros: values.Otros,
            LblOtros: values.LblOtros,
          })
          .then((response) => {
            Swal.fire('Cool!', 'Informacion Subida correctamente.', 'success');
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
          style={{ width: '550px', height: '550px', overflow: 'auto' }}>
          <div className='mb-4 mt-2'>
            <div id='my-radio-group'>Respirado Bucal</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='RespiradoBucal'
                  id='RespiradoBucal'
                  value='Si'
                />
                Si
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='RespiradoBucal'
                  id='RespiradoBucal'
                  value='No'
                />
                No
              </label>
            </div>
          </div>

          <div className='mb-4 mt-2'>
            <div id='my-radio-group'>Succion Digital</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='SuccionDigital'
                  id='SuccionDigital'
                  value='Si'
                />
                Si
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='SuccionDigital'
                  id='SuccionDigital'
                  value='No'
                />
                No
              </label>
            </div>
          </div>

          <div className='mb-4 mt-2'>
            <div id='my-radio-group'>SuccionChupete</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='SuccionChupete'
                  id='SuccionChupete'
                  value='Si'
                />
                Si
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='SuccionChupete'
                  id='SuccionChupete'
                  value='No'
                />
                No
              </label>
            </div>
          </div>

          <div className='mb-4 mt-2'>
            <div id='my-radio-group'>Succion Labial</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='SuccionLabial'
                  id='SuccionLabial'
                  value='Si'
                />
                Si
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='SuccionLabial'
                  id='SuccionLabial'
                  value='No'
                />
                No
              </label>
            </div>
          </div>

          <div className='mb-4 mt-2'>
            <div id='my-radio-group'>Morderse el Labio</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='MorderseLabio'
                  id='MorderseLabio'
                  value='Si'
                />
                Si
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='MorderseLabio'
                  id='MorderseLabio'
                  value='No'
                />
                No
              </label>
            </div>
          </div>

          <div className='mb-4 mt-2'>
            <div id='my-radio-group'>Morderse las Uñas</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='MorderseLasUnas'
                  id='MorderseLasUnas'
                  value='Si'
                />
                Si
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='MorderseLasUnas'
                  id='MorderseLasUnas'
                  value='No'
                />
                No
              </label>
            </div>
          </div>

          <div className='mb-4 mt-2'>
            <div id='my-radio-group'>Deglucion Atipica</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='DeglucionAtipica'
                  id='DeglucionAtipica'
                  value='Si'
                />
                Si
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='DeglucionAtipica'
                  id='DeglucionAtipica'
                  value='No'
                />
                No
              </label>
            </div>
          </div>

          <div className='mb-4 mt-2'>
            <div id='my-radio-group'>Otros</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='Otros'
                  id='Otros'
                  value='Si'
                />
                Si
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='Otros'
                  id='Otros'
                  value='No'
                />
                No
              </label>
            </div>
          </div>

          {LblOtros && (
            <div className='mb-3'>
              <label htmlFor='LblOtros' className='form-label'>
                Otros:
              </label>
              <Field
                type='text'
                id='LblOtros'
                name='LblOtros'
                className={
                  !touched.LblOtros
                    ? 'form-control'
                    : errors.LblOtros
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='otros habitos perniciosos'
              />
              <ErrorMessage
                name='LblOtros'
                component={() => (
                  <div className='invalid-feedback'>{errors.LblOtros}</div>
                )}
              />
            </div>
          )}

          <button className='btn btn-primary' type='submit'>
            Subir informacion del paciente
          </button>

          <br></br>
        </Form>
      )}
    </Formik>
  );
};
