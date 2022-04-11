import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';

export const TablaMedioBucalG = () => {
  return (
    <Formik
      initialValues={{
        Higiene: '',
        PlacaDentobacteriana: '',
        PHSaliva: '',
        Localizacion: '',
        CalculoDental: '',
      }}
      validate={(values) => {
        let errors = {};

        if (!values.Higiene) {
          errors.Higiene = 'Debe seleccionar este campo';
        }

        if (!values.PlacaDentobacteriana) {
          errors.PlacaDentobacteriana = 'Debe seleccionar este campo';
        }

        if (!values.PHSaliva) {
          errors.PHSaliva = 'Por favor ingrese el PH de Saliva (1-14)';
        }

        if (!values.Localizacion) {
          errors.Localizacion = 'Debe seleccionar este campo';
        }

        if (!values.CalculoDental) {
          errors.CalculoDental = 'Debe seleccionar este campo';
        }

        console.log('errores');
        return errors;
      }}
      onSubmit={async (values, { resetForm }) => {
        const IdPaciente = uniqid();
        await axios
          .post('http://localhost:3001/api/v1/insert', {
            id: IdPaciente,
            Higiene: values.Higiene,
            PlacaDentobacteriana: values.PlacaDentobacteriana,
            PHSaliva: values.PHSaliva,
            Localizacion: values.Localizacion,
            CalculoDental: values.CalculoDental,
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
            <div id='my-radio-group'>Higiene</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='Higiene'
                  id='Higiene'
                  value='Buena'
                />
                Buena
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='Higiene'
                  id='Higiene'
                  value='Regular'
                />
                Regular
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='Higiene'
                  id='Higiene'
                  value='Mala'
                />
                Deficiente
              </label>
            </div>
          </div>

          <div className='mb-4 mt-2'>
            <div id='my-radio-group'>Placa Dentobacteriana</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='PlacaDentobacteriana'
                  id='PlacaDentobacteriana'
                  value='Normal/Poca'
                />
                Normal/Poca
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='PlacaDentobacteriana'
                  id='PlacaDentobacteriana'
                  value='Mediana'
                />
                Mediana
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='PlacaDentobacteriana'
                  id='PlacaDentobacteriana'
                  value='Abundante'
                />
                Abundante
              </label>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='PlacaDentobacteriana'
                  id='PlacaDentobacteriana'
                  value='24hrs'
                />
                24hrs
              </label>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='PlacaDentobacteriana'
                  id='PlacaDentobacteriana'
                  value='48hrsOmas'
                />
                48hrs o mas
              </label>
            </div>
          </div>

          <label htmlFor='CepilladosDiaros' className='form-label'>
            PH Saliva
          </label>
          <Field
            type='text'
            id='PHSaliva'
            name='PHSaliva'
            className={
              !touched.PHSaliva
                ? 'form-control'
                : errors.PHSaliva
                ? 'form-control is-invalid'
                : 'form-control is-valid'
            }
            placeholder='No. de PH de Saliva (1-14)'
          />
          <ErrorMessage
            name='PHSaliva'
            component={() => (
              <div className='invalid-feedback'>{errors.PHSaliva}</div>
            )}
          />
          <div id='PHSalivaHelp' className='form-text'>
            se debe ingresar el no. del 1-14 en que esta su ph de saliva
          </div>

          <br></br>

          <div className='mb-4 mt-2'>
            <div id='my-radio-group'>Localizacion</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='Localizacion'
                  id='Localizacion'
                  value='Oclusal'
                />
                Oclusal
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='Localizacion'
                  id='Localizacion'
                  value='Interproximal'
                />
                Interproximal
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='Localizacion'
                  id='Localizacion'
                  value='Cervical'
                />
                Cervical
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='Localizacion'
                  id='Localizacion'
                  value='Subgingival'
                />
                Subgingival
              </label>
            </div>
          </div>

          <div className='mb-4 mt-2'>
            <div id='my-radio-group'>Calculo Dental</div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='CalculoDental'
                  id='CalculoDental'
                  value='Si'
                />
                Si
              </label>
              <br></br>
              <label>
                <Field
                  type='radio'
                  className='form-check-input mx-2'
                  name='CalculoDental'
                  id='CalculoDental'
                  value='No'
                />
                No
              </label>
              <br></br>
            </div>
          </div>

          <button className='btn btn-primary' type='submit'>
            Subir informacion del paciente
          </button>

          <br></br>
        </Form>
      )}
    </Formik>
  );
};
