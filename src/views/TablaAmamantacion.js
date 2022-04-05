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
