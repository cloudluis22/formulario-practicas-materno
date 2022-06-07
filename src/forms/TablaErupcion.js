import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';

export const TablaErupcion = ({ IdPaciente }) => {
  let formValues = {
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
  };

  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/erupcion-y-denticion/${IdPaciente}`)
      .then((response) => {
        setData({
          loading: false,
          data: response.data.erupcionydenticion,
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
          if (!values.EdadDental) {
            errors.EdadDental = 'Tiene que llenar este campo.';
          }
          if (!values.SecuenciaAnormal) {
            errors.SecuenciaAnormal = 'Tiene que llenar este campo.';
          }
          if (!values.PerdidaPrematura) {
            errors.PerdidaPrematura = 'Tiene que llenar este campo.';
          }
          if (!values.RetencionProlongada) {
            errors.RetencionProlongada = 'Tiene que llenar este campo.';
          }
          if (!values.ErupcionRetardada) {
            errors.ErupcionRetardada = 'Tiene que llenar este campo.';
          }
          if (!values.FaltaContactoProximal) {
            errors.FaltaContactoProximal = 'Tiene que llenar este campo.';
          }
          if (!values.HipoplasiaIncisivo) {
            errors.HipoplasiaIncisivo = 'Tiene que llenar este campo.';
          }
          if (!values.AmeloDentinogenesisImperfecta) {
            errors.AmeloDentinogenesisImperfecta = 'Tiene que llenar este campo.';
          }
          if (!values.Fluorosis) {
            errors.Fluorosis = 'Tiene que llenar este campo.';
          }
          if (!values.Otros) {
            errors.Otros = 'Tiene que llenar este campo.';
          }
        
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          let submitValues = {
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
          };

          

          if (!edit) {
            await axios
              .post(
                `http://localhost:3001/api/v1/erupcion-y-denticion/${IdPaciente}`,
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
                `http://localhost:3001/api/v1/erupcion-y-denticion/${IdPaciente}`,
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
              <label htmlFor='EdadDental' className='form-label'>
                Edad Dental
              </label>
              <Field
                type='text'
                autocomplete='off'
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
                Especifique la edad dental
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <label htmlFor='SecuenciaAnormal' className='form-label'>
               Secuencia Anormal
              </label>
              <Field
                type='text'
                autocomplete='off'
                id='SecuenciaAnormal'
                name='SecuenciaAnormal'
                className={
                  !touched.SecuenciaAnormal
                    ? 'form-control'
                    : errors.SecuenciaAnormal
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Especifique: '
              />
              <ErrorMessage
                name='SecuenciaAnormal'
                component={() => (
                  <div className='invalid-feedback'>{errors.SecuenciaAnormal}</div>
                )}
              />
              <div id='SecuenciaAnormalHelp' className='form-text'>
                Especifique
              </div>
            </div>


            <div className='mb-4 mt-2'>
              <label htmlFor='PerdidaPrematura' className='form-label'>
                Pérdida Prematura
              </label>
              <Field
                type='text'
                autocomplete='off'
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
                  <div className='invalid-feedback'>
                    {errors.PerdidaPrematura}
                  </div>
                )}
              />
              <div id='PerdidaPrematuraHelp' className='form-text'>
                Especifique
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <label htmlFor='RetencionProlongada' className='form-label'>
                Retención Prolongada
              </label>
              <Field
                type='text'
                autocomplete='off'
                id='RetencionProlongada'
                name='RetencionProlongada'
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
                  <div className='invalid-feedback'>
                    {errors.RetencionProlongada}
                  </div>
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
                autocomplete='off'
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
                  <div className='invalid-feedback'>
                    {errors.ErupcionRetardada}
                  </div>
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
                autocomplete='off'
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
                  <div className='invalid-feedback'>
                    {errors.FaltaContactoProximal}
                  </div>
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
                autocomplete='off'
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
                  <div className='invalid-feedback'>
                    {errors.HipoplasiaIncisivo}
                  </div>
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
                autocomplete='off'
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
                  <div className='invalid-feedback'>
                    {errors.HipoplasiaEnDeciduos}
                  </div>
                )}
              />
              <div id='HipoplasiaEnDeciduosHelp' className='form-text'>
                No / Si: Especifique
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <label
                htmlFor='AmeloDentinogenesisImperfecta'
                className='form-label'>
                Amelo/Dentinogénesis imperfecta
              </label>
              <Field
                type='text'
                autocomplete='off'
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
                  <div className='invalid-feedback'>
                    {errors.AmeloDentinogenesisImperfecta}
                  </div>
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
                autocomplete='off'
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
                autocomplete='off'
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
    );
  }
};
