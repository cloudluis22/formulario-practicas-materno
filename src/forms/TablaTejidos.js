import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';

export const TablaTejidos = () => {
  return (
    <div className='bcg-color d-flex justify-content-center flex-column align-items-center'>
      <h1 className='display-2 text-light'> Tejidos Blandos </h1>
      <Formik
        initialValues={{
          Lengua: '',
          FrenilloLingual: '',
          Labios: '',
          FrenilloLabial: '',
          PaladarDuro: '',
          PaladarBlando: '',
          PisoBoca: '',
          MucosaYugal: '',
          MucosaMasticatoria: '',
          Otros: '',
        }}
        validate={(values) => {
          let errors = {};

          if (!values.Lengua) {
            errors.Lengua =
              'Por favor ingrese ingrese el valor de este campo.';
          }
          if (!values.FrenilloLingual) {
            errors.FrenilloLingual =
              'Por favor ingrese ingrese el valor de este campo.';
          }
          if (!values.Labios) {
            errors.Labios =
              'Por favor ingrese ingrese el valor de este campo.';
          }
          if (!values.FrenilloLabial) {
            errors.FrenilloLabial =
              'Por favor ingrese ingrese el valor de este campo.';
          }
          if (!values.PaladarBlando) {
            errors.PaladarBlando =
              'Por favor ingrese ingrese el valor de este campo.';
          }
          if (!values.PaladarDuro) {
            errors.PaladarDuro =
              'Por favor ingrese ingrese el valor de este campo.';
          }
          if (!values.PisoBoca) {
            errors.PisoBoca =
              'Por favor ingrese ingrese el valor de este campo.';
          }
          if (!values.MucosaYugal) {
            errors.MucosaYugal =
              'Por favor ingrese ingrese el valor de este campo.';
          }
          if (!values.MucosaMasticatoria) {
            errors.MucosaMasticatoria =
              'Por favor ingrese ingrese el valor de este campo.';
          }
          if (!values.Otros) {
            errors.Otros =
              'Por favor ingrese ingrese el valor de este campo, o en su defecto agregue:  No aplica.';
          }


          console.log('errores');
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const IdPaciente = uniqid();
          await axios
            .post('http://localhost:3001/api/v1/insert', {
              id: IdPaciente,
              Lengua: values.Lengua,
              FrenilloLingual: values.FrenilloLingual,
              Labios: values.Labios,
              FrenilloLabial: values.FrenilloLabial,
              PaladarDuro: values.PaladarDuro,
              PaladarBlando: values.PaladarBlando,
              PisoBoca: values.PisoBoca,
              MucosaYugal: values.MucosaYugal,
              MucosaMasticatoria: values.MucosaMasticatoria,
              Otros: values.Otros,
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
            <label htmlFor='Lengua' className='form-label'>
                Lengua
                </label>
                <Field
                  type='text'
                  id='Lengua'
                  name='Lengua'
                  className={
                    !touched.Lengua
                      ? 'form-control'
                      : errors.Lengua
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Normal / Patología: '
                />
                <ErrorMessage
                  name='Lengua'
                  component={() => (
                    <div className='invalid-feedback'>{errors.Lengua}</div>
                  )}
                />
                <div id='HiloDentalHelp' className='form-text'>
                    Especifique el caso si es una patología
                </div>
                </div>

                {/*FrenilloLingual */}


                <div className='mb-4 mt-2'>
            <label htmlFor='FrenilloLingual' className='form-label'>
            Frenillo Lingual
                </label>
                <Field
                  type='text'
                  id='FrenilloLingual'
                  name='FrenilloLingual'
                  className={
                    !touched.FrenilloLingual
                      ? 'form-control'
                      : errors.FrenilloLingual
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Normal / Patología: '
                />
                <ErrorMessage
                  name='FrenilloLingual'
                  Especifique si es una patología
                  component={() => (
                    <div className='invalid-feedback'>{errors.FrenilloLingual}</div>
                  )}
                />
                <div id='FrenilloLingualHelp' className='form-text'>
                    Especifique el caso si es una patología
                </div>
                </div>

                <div className='mb-4 mt-2'>
            <label htmlFor='Labios' className='form-label'>
            Labios
                </label>
                <Field
                  type='text'
                  id='Labios'
                  name='Labios'
                  className={
                    !touched.Labios
                      ? 'form-control'
                      : errors.Labios
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Normal / Patología: '
                />
                <ErrorMessage
                  name='Labios'
                  Especifique si es una patología
                  component={() => (
                    <div className='invalid-feedback'>{errors.Labios}</div>
                  )}
                />
                <div id='LabiosHelp' className='form-text'>
                    Especifique el caso si es una patología
                </div>
                </div>

                <div className='mb-4 mt-2'>
            <label htmlFor='FrenilloLabial' className='form-label'>
            Frenillo Labial
                </label>
                <Field
                  type='text'
                  id='FrenilloLabial'
                  name='FrenilloLabial'
                  className={
                    !touched.FrenilloLabial
                      ? 'form-control'
                      : errors.FrenilloLabial
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Normal / Patología: '
                />
                <ErrorMessage
                  name='FrenilloLabial'
                  Especifique si es una patología
                  component={() => (
                    <div className='invalid-feedback'>{errors.FrenilloLabial}</div>
                  )}
                />
                <div id='FrenilloLabialHelp' className='form-text'>
                    Especifique el caso si es una patología
                </div>
                </div>


                <div className='mb-4 mt-2'>
            <label htmlFor='PaladarDuro' className='form-label'>
            Paladar Duro
                </label>
                <Field
                  type='text'
                  id='PaladarDuro'
                  name='PaladarDuro'
                  className={
                    !touched.PaladarDuro
                      ? 'form-control'
                      : errors.PaladarDuro
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Normal / Patología: '
                />
                <ErrorMessage
                  name='PaladarDuro'
                  Especifique si es una patología
                  component={() => (
                    <div className='invalid-feedback'>{errors.PaladarDuro}</div>
                  )}
                />
                <div id='PaladarDuroHelp' className='form-text'>
                    Especifique el caso si es una patología
                </div>
                </div>

                <div className='mb-4 mt-2'>
            <label htmlFor='PaladarBlando' className='form-label'>
            Paladar Blando
                </label>
                <Field
                  type='text'
                  id='PaladarBlando'
                  name='PaladarBlando'
                  className={
                    !touched.PaladarBlando
                      ? 'form-control'
                      : errors.PaladarBlando
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Normal / Patología: '
                />
                <ErrorMessage
                  name='PaladarBlando'
                  Especifique si es una patología
                  component={() => (
                    <div className='invalid-feedback'>{errors.PaladarBlando}</div>
                  )}
                />
                <div id='PaladarBlandoHelp' className='form-text'>
                    Especifique el caso si es una patología
                </div>
                </div>


                <div className='mb-4 mt-2'>
            <label htmlFor='PisoBoca' className='form-label'>
            Piso Boca
                </label>
                <Field
                  type='text'
                  id='PisoBoca'
                  name='PisoBoca'
                  className={
                    !touched.PisoBoca
                      ? 'form-control'
                      : errors.PisoBoca
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Normal / Patología: '
                />
                <ErrorMessage
                  name='PisoBoca'
                  Especifique si es una patología
                  component={() => (
                    <div className='invalid-feedback'>{errors.PisoBoca}</div>
                  )}
                />
                <div id='PaladarBlandoHelp' className='form-text'>
                    Especifique el caso si es una patología
                </div>
                </div>


                <div className='mb-4 mt-2'>
            <label htmlFor='MucosaYugal' className='form-label'>
            Mucosa Yugal
                </label>
                <Field
                  type='text'
                  id='MucosaYugal'
                  name='MucosaYugal'
                  className={
                    !touched.MucosaYugal
                      ? 'form-control'
                      : errors.MucosaYugal
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Normal / Patología: '
                />
                <ErrorMessage
                  name='MucosaYugal'
                  Especifique si es una patología
                  component={() => (
                    <div className='invalid-feedback'>{errors.MucosaYugal}</div>
                  )}
                />
                <div id='PaladarBlandoHelp' className='form-text'>
                    Especifique el caso si es una patología
                </div>
                </div>
                

                <div className='mb-4 mt-2'>
            <label htmlFor='MucosaMasticatoria' className='form-label'>
            Mucosa Masticatoria
                </label>
                <Field
                  type='text'
                  id='MucosaMasticatoria'
                  name='MucosaMasticatoria'
                  className={
                    !touched.MucosaMasticatoria
                      ? 'form-control'
                      : errors.MucosaMasticatoria
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Normal / Patología: '
                />
                <ErrorMessage
                  name='MucosaMasticatoria'
                  Especifique si es una patología
                  component={() => (
                    <div className='invalid-feedback'>{errors.MucosaMasticatoria}</div>
                  )}
                />
                </div>


                <div className='mb-4 mt-2'>
            <label htmlFor='Otros' className='form-label'>
            Otros
                </label>
                <Field
                  type='text'
                  id='Otros'
                  name='Otros'
                  className={
                    !touched.Otros
                      ? 'form-control'
                      : errors.Otros
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Normal / Patología: '
                />
                <ErrorMessage
                  name='Otros'
                  Especifique
                  component={() => (
                    <div className='invalid-feedback'>{errors.Otros}</div>
                  )}
                />
                </div>


                


                <div id='PaladarBlandoHelp' className='form-text'>
                    Especifique el caso si es una patología
                </div>
                




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