import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';

export const TablaAmamantacion = () => {
  return (
    <div className='bcg-color d-flex justify-content-center flex-column align-items-center'>
      <h1 className='display-2 text-light'> Amamantación del Paciente </h1>
      <Formik
        initialValues={{
          TomaPechoEdad: '',
          FrecuenciaAlimentacionPecho: '',
          TipoAlimentacion: '',
          UsabaBiberon: '',
          ContenidoBiberon: '',
          EdadYaNoTomaBiberon: '',
          UsabaChupon: '',
          ContenidoChupon: '',
          EdadYaNoUsaChupon: '',
          AlimentacionNocturna: '',
          LimpiaSuBoquita: '',
          BebeConsuemSolidos: '',
          MasticaOMolidos: '',
        }}
        validate={(values) => {
          let errors = {};

          if (!values.TomaPechoEdad) {
          }

          console.log('errores');
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const IdPaciente = uniqid();
          await axios
            .post('http://localhost:3001/api/v1/insert', {
              id: IdPaciente,
              TomaPechoEdad: values.TomaPechoEdad,
              FrecuenciaAlimentacionPecho: values.FrecuenciaAlimentacionPecho,
              TipoAlimentacion: values.TipoAlimentacion,
              UsabaBiberon: values.UsabaBiberon,
              ContenidoBiberon: values.ContenidoBiberon, 
              EdadYaNoTomaBiberon: values.EdadYaNoTomaBiberon,
              UsabaChupon: values.UsabaChupon,
              ContenidoChupon: values.ContenidoChupon,
              EdadYaNoUsaChupon: values. EdadYaNoTomaBiberon,
              AlimentacionNocturna: values.AlimentacionNocturna,
              LimpiaSuBoquita: values.LimpiaSuBoquita,
              BebeConsuemSolidos: values.BebeConsuemSolidos,
              MasticaOMolidos: values.MasticaOMolidos,
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
            <div id="my-radio-group">¿Su bebé toma / tomó pecho? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TomaPechoEdado" id="TomaPechoEdad" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TomaPechoEdad" id="TomaPechoEdad" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">La alimentación de su bebé es o fue: </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="FrecuenciaAlimentacionPecho" id="FrecuenciaAlimentacionPecho" value="LactanciaExclusiva" />
                Lactancia Exclusiva
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TipoAlimentacion" id="TipoAlimentacion" value="Mixta" />
                Mixta
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TipoAlimentacion" id="TipoAlimentacion" value="Biberón" />
                Biberón
            </label>
          </div>
            </div>


            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Su hijo utiliza / utilizó biberón? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="UsabaBiberon" id="UsabaBiberon" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="UsabaBiberon" id="UsabaBiberon" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Cuál es / era el contenido de su biberón? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ContenidoBiberon" id="ContenidoBiberon" value="LecheMaterna" />
                Leche Materna
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ContenidoBiberon" id="ContenidoBiberon" value="LecheFormula" />
                Leche de Fórmula
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ContenidoBiberon" id="ContenidoBiberon" value="ChocolatePolvo" />
                Chocolate en polvo
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ContenidoBiberon" id="ContenidoBiberon" value="AzucarMiel" />
                Azúcar / Miel
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ContenidoBiberon" id="ContenidoBiberon" value="Te" />
                Té
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ContenidoBiberon" id="ContenidoBiberon" value="Otro" />
                Otro
            </label>
          </div>
            </div>

            <label htmlFor='EdadYaNoTomaBiberon' className='form-label'>
              ¿Hasta que edad tomó biberón? (años)
            </label>
            <Field
              type='text'
              id='EdadYaNoTomaBiberon'
              name='EdadYaNoTomaBiberon'
              className={
                !touched.EdadYaNoTomaBiberon
                  ? 'form-control'
                  : errors.EdadYaNoTomaBiberon
                  ? 'form-control is-invalid'
                  : 'form-control is-valid'
              }
              placeholder='Años que tomo biberón'
            />
            <ErrorMessage
              name='EdadYaNoTomaBiberon'
              component={() => (
                <div className='invalid-feedback'>
                  {errors.EdadYaNoTomaBiberon}
                </div>
              )}
            />
            <div id='EdadYaNoTomaBiberonHelp' className='form-text'>
              se debe ingresar hasta que edad tomó biberón (años)
            </div>


            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Su hijo utiliza o utilizó chupón? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="UsabaChupon" id="UsabaChupon" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="UsabaChupon" id="UsabaChupon" value="No" />
                No
            </label>
          </div>
            </div>

            

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Cuál es / era el contenido de su chupón? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ContenidoChupon" id="ContenidoChupon" value="Nada" />
                Nada
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ContenidoChupon" id="ContenidoChupon" value="Miel" />
                Miel
            </label>
          </div>
            </div>

            <label htmlFor='EdadYaNoTomaBiberon' className='form-label'>
              ¿Hasta que edad utilizó chupón? (años)
            </label>
            <Field
              type='text'
              id='EdadYaNoUsaChupon'
              name='EdadYaNoUsaChupon'
              className={
                !touched.EdadYaNoUsaChupon
                  ? 'form-control'
                  : errors.EdadYaNoUsaChupon
                  ? 'form-control is-invalid'
                  : 'form-control is-valid'
              }
              placeholder='Años que dejo el chupon'
            />
            <ErrorMessage
              name='EdadYaNoUsaChupon'
              component={() => (
                <div className='invalid-feedback'>
                  {errors.EdadYaNoUsaChupon}
                </div>
              )}
            />
            <div id='EdadYaNoUsaChuponHelp' className='form-text'>
              se debe ingresar hasta que edad uso chupón (años)
            </div>

            <button className='btn btn-primary' type='submit'>
              Subir informacion del paciente
            </button>
            <br></br>


            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Su bebé sigue teniendo alimentación noctura ? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="AlimentacionNocturna" id="AlimentacionNocturna" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="AlimentacionNocturna" id="AlimentacionNocturna" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Limpia su boquita después de la alimentacion nocturna? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="BebeConsuemSolidos" id="BebeConsuemSolidos" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="BebeConsuemSolidos" id="BebeConsuemSolidos" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Su bebé come alimentos sólidos ? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="LimpiaSuBoquita" id="LimpiaSuBoquita" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="LimpiaSuBoquita" id="LimpiaSuBoquita" value="No" />
                No
            </label>
          </div>
            </div>


            

          </Form>
        )}
      </Formik>
    </div>
  );
};
