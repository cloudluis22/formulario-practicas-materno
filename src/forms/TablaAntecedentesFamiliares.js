import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';

export const TablaAntecedentesFamiliares = () => {
  return (
    <Formik
      initialValues={{
        Diabetes: '',
        Cancer: '',
        Hipertension: '',
        VIH: '',
        EnfermedadDegenerativa: '',
        EnfermedadMental: '',
      }}
      validate={(values) => {
        let errors = {};

        return errors;
      }}
      onSubmit={async (values, { resetForm }) => {
        const IdPaciente = uniqid();
        await axios
          .post('http://localhost:3001/api/v1/insert', {
            id: IdPaciente,
            Diabetes: values.Diabetes,
            Cancer: values.Cancer,
            Hipertension: values.Hipertension,
            VIH: values.VIH,
            EnfermedadDegenerativa: values.EnfermedadDegenerativa,
            EnfermedadMental: values.EnfermedadMental,
          })
          .then((response) => {
            Swal.fire(
              'Cool!',
              'Movie information uploaded successfully',
              'success'
            );
          })
          .catch((error) => {
            console.log(error);
            Swal.fire(
              'Oops!',
              'Movie information could not be uploaded successfully, try again later.',
              'error'
            );
          });
      }}>
      {({ errors, touched }) => (
        <Form
          className='card px-5'
          style={{ width: '550px', height: '550px', overflow: 'auto' }}>
          <div className='mb-4 mt-2'>
            <br></br>
            <label> Algún familiar de su hijo padece: </label>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Diabetes</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Diabetes'
                    id='Diabetes'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Diabetes'
                    id='Diabetes'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Cáncer</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Cancer'
                    id='Cancer'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Cancer'
                    id='Cancer'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Hipertensión</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Hipertension'
                    id='Hipertension'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Hipertension'
                    id='Hipertension'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>VIH</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='VIH'
                    id='VIH'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='VIH'
                    id='VIH'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Enfermedades Degenerativas</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='EnfermedadDegenerativa'
                    id='EnfermedadDegenerativa'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='EnfermedadDegenerativa'
                    id='EnfermedadDegenerativa'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Enfermedades Mentales</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='EnfermedadMental'
                    id='EnfermedadMental'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='EnfermedadMental'
                    id='EnfermedadMental'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <button className='btn btn-primary' type='submit'>
              Subir informacion del paciente
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
