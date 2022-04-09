import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';

export const TablaErupcion = () => {
  return (
    <div className='bcg-color d-flex justify-content-center flex-column align-items-center'>
      <h1 className='display-2 text-light'> Tejidos Blandos </h1>
      <Formik
        initialValues={{
          EdadDental: '',
          SecuenciaAnormal: '',
          PerdidaPrematura: '',
          RetencionProlongada: '',
          ErupcionRetardada: '',
          FaltaContactoProximal: '',
          HipoplasiaIncisivo: '',
          HipoplasiaEnDeciduos: '',
          AmeloDentinogenesisImperfecta: '',
          Fluorosis: '',
          Otros: '',
        }}
        validate={(values) => {
          let errors = {};

          if(!values.EdadDental){
              errors.EdadDental = "Tiene que llenar este campo."
          }
          if(!values.SecuenciaAnormal){
            errors.EdadDental = "Tiene que llenar este campo."
        }
        if(!values.PerdidaPrematura){
            errors.EdadDental = "Tiene que llenar este campo."
        }
        if(!values.RetencionProlongada){
            errors.EdadDental = "Tiene que llenar este campo."
        }
        if(!values.ErupcionRetardada){
            errors.EdadDental = "Tiene que llenar este campo."
        }
        if(!values.FaltaContactoProximal){
            errors.EdadDental = "Tiene que llenar este campo."
        }
        if(!values.HipoplasiaIncisivo){
            errors.EdadDental = "Tiene que llenar este campo."
        }
        if(!values.AmeloDentinogenesisImperfecta){
            errors.EdadDental = "Tiene que llenar este campo."
        }
        if(!values.Fluorosis){
            errors.EdadDental = "Tiene que llenar este campo."
        }
        if(!values.Otros){
            errors.EdadDental = "Tiene que llenar este campo."
        }
          

          console.log('errores');
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const IdPaciente = uniqid();
          await axios
            .post('http://localhost:3001/api/v1/insert', {
              id: IdPaciente,
              EdadDental: values.EdadDental,
              SecuenciaAnormal: values.SecuenciaAnormal,
              PerdidaPrematura: values.PerdidaPrematura,
              RetencionProlongada: values.RetencionProlongada,
              ErupcionRetardada: values.ErupcionRetardada,
              FaltaContactoProximal: values.FaltaContactoProximal,
              HipoplasiaIncisivo: values.HipoplasiaIncisivo,
              HipoplasiaEnDeciduos: values.HipoplasiaEnDeciduos,
              AmeloDentinogenesisImperfecta: values.AmeloDentinogenesisImperfecta,
              Fluorosis: values.Fluorosis,
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
            <label htmlFor='EdadDental' className='form-label'>
                Edad Dental
                </label>
                <Field
                  type='text'
                  id='EdadDental'
                  name='EdadDental'
                  className={
                    !touched.EdadDental
                      ? 'form-control'
                      : errors.EdadDental
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique: '
                />
                <ErrorMessage
                  name='EdadDental'
                  component={() => (
                    <div className='invalid-feedback'>{errors.EdadDental}</div>
                  )}
                />
                <div id='EdadDentalHelp' className='form-text'>
                    No / Si: Especifique
                </div>
                </div>

                
                <div className='mb-4 mt-2'>
            <label htmlFor='PerdidaPrematura' className='form-label'>
            Pérdida Prematura
                </label>
                <Field
                  type='text'
                  id='PerdidaPrematura'
                  name='PerdidaPrematura'
                  className={
                    !touched.PerdidaPrematura
                      ? 'form-control'
                      : errors.PerdidaPrematura
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique: '
                />
                <ErrorMessage
                  name='PerdidaPrematura'
                  component={() => (
                    <div className='invalid-feedback'>{errors.PerdidaPrematura}</div>
                  )}
                />
                <div id='PerdidaPrematuraHelp' className='form-text'>
                No / Si: Especifique
                </div>
                </div>


                <div className='mb-4 mt-2'>
            <label htmlFor='RetencionProlongada' className='form-label'>
            Retención Prolongada
                </label>
                <Field
                  type='text'
                  id='PerdidaPrematura'
                  name='PerdidaPrematura'
                  className={
                    !touched.RetencionProlongada
                      ? 'form-control'
                      : errors.RetencionProlongada
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique: '
                />
                <ErrorMessage
                  name='RetencionProlongada'
                  component={() => (
                    <div className='invalid-feedback'>{errors.RetencionProlongada}</div>
                  )}
                />
                <div id='RetencionProlongadaHelp' className='form-text'>
                No / Si: Especifique
                </div>
                </div>



                <div className='mb-4 mt-2'>
            <label htmlFor='ErupcionRetardada' className='form-label'>
            Erupción Retardada
                </label>
                <Field
                  type='text'
                  id='ErupcionRetardada'
                  name='ErupcionRetardada'
                  className={
                    !touched.ErupcionRetardada
                      ? 'form-control'
                      : errors.ErupcionRetardada
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique: '
                />
                <ErrorMessage
                  name='ErupcionRetardada'
                  component={() => (
                    <div className='invalid-feedback'>{errors.ErupcionRetardada}</div>
                  )}
                />
                <div id='ErupcionRetardadaHelp' className='form-text'>
                No / Si: Especifique
                </div>
                </div>


                <div className='mb-4 mt-2'>
            <label htmlFor='FaltaContactoProximal' className='form-label'>
            Falta de contacto proximal
                </label>
                <Field
                  type='text'
                  id='FaltaContactoProximal'
                  name='FaltaContactoProximal'
                  className={
                    !touched.FaltaContactoProximal
                      ? 'form-control'
                      : errors.FaltaContactoProximal
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique: '
                />
                <ErrorMessage
                  name='FaltaContactoProximal'
                  component={() => (
                    <div className='invalid-feedback'>{errors.FaltaContactoProximal}</div>
                  )}
                />
                <div id='FaltaContactoProximalHelp' className='form-text'>
                No / Si: Especifique
                </div>
                </div>



                <div className='mb-4 mt-2'>
            <label htmlFor='HipoplasiaIncisivo' className='form-label'>
            Hipoplasia incisivo Molar
                </label>
                <Field
                  type='text'
                  id='HipoplasiaIncisivo'
                  name='HipoplasiaIncisivo'
                  className={
                    !touched.HipoplasiaIncisivo
                      ? 'form-control'
                      : errors.HipoplasiaIncisivo
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique: '
                />
                <ErrorMessage
                  name='HipoplasiaIncisivo'
                  component={() => (
                    <div className='invalid-feedback'>{errors.HipoplasiaIncisivo}</div>
                  )}
                />
                <div id='HipoplasiaIncisivoHelp' className='form-text'>
                No / Si: Especifique
                </div>
                </div>


                <div className='mb-4 mt-2'>
            <label htmlFor='HipoplasiaEnDeciduos' className='form-label'>
            Hipoplasia en deciduos
                </label>
                <Field
                  type='text'
                  id='HipoplasiaEnDeciduos'
                  name='HipoplasiaEnDeciduos'
                  className={
                    !touched.HipoplasiaEnDeciduos
                      ? 'form-control'
                      : errors.HipoplasiaEnDeciduos
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique: '
                />
                <ErrorMessage
                  name='HipoplasiaEnDeciduos'
                  component={() => (
                    <div className='invalid-feedback'>{errors.HipoplasiaEnDeciduos}</div>
                  )}
                />
                <div id='HipoplasiaEnDeciduosHelp' className='form-text'>
                No / Si: Especifique
                </div>
                </div>


                <div className='mb-4 mt-2'>
            <label htmlFor='AmeloDentinogenesisImperfecta' className='form-label'>
            Amelo/Dentinogénesis imperfecta
                </label>
                <Field
                  type='text'
                  id='AmeloDentinogenesisImperfecta'
                  name='AmeloDentinogenesisImperfecta'
                  className={
                    !touched.AmeloDentinogenesisImperfecta
                      ? 'form-control'
                      : errors.AmeloDentinogenesisImperfecta
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique: '
                />
                <ErrorMessage
                  name='AmeloDentinogenesisImperfecta'
                  component={() => (
                    <div className='invalid-feedback'>{errors.AmeloDentinogenesisImperfecta}</div>
                  )}
                />
                <div id='AmeloDentinogenesisImperfectaHelp' className='form-text'>
                No / Si: Especifique
                </div>
                </div>


                <div className='mb-4 mt-2'>
            <label htmlFor='Fluorosis' className='form-label'>
            Fluorosis
                </label>
                <Field
                  type='text'
                  id='Fluorosis'
                  name='Fluorosis'
                  className={
                    !touched.Fluorosis
                      ? 'form-control'
                      : errors.Fluorosis
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique: '
                />
                <ErrorMessage
                  name='Fluorosis'
                  component={() => (
                    <div className='invalid-feedback'>{errors.Fluorosis}</div>
                  )}
                />
                <div id='FluorosisHelp' className='form-text'>
                No / Si: Especifique
                </div>
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
                  placeholder='Especifique: '
                />
                <ErrorMessage
                  name='Otros'
                  component={() => (
                    <div className='invalid-feedback'>{errors.Otros}</div>
                  )}
                />
                <div id='OtrosHelp' className='form-text'>
                No / Si: Especifique
                </div>
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
