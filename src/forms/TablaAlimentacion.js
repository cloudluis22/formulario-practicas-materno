import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';

export const TablaAlimentacion = ({ IdPaciente }) => {
  let formValues = {
    ComidasDiarias: '',
    Carne: '',
    Leche: '',
    Pan: '',
    Frutas: '',
    Yoghurt: '',
    Jugos: '',
    Vegetales: '',
    Dulces: '',
    Gomitas: '',
    Huevo: '',
    Galletas: '',
    Chocolate: '',
    Pescado: '',
    Mermelada: '',
    Chicle: '',
    Agua: '',
    Yakult: '',
    Te: '',
  };

  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/alimentacion/${IdPaciente}`)
      .then((response) => {
        setData({
          loading: false,
          data: response.data.alimentacion,
          ok: true,
        });

        if (Data.data.length === 0) {
          setEdit(false);
        } else {
          setEdit(true);
        }
      })
      .catch((error) => {
        console.log(error);
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

          if (!values.ComidasDiarias) {
            errors.ComidasDiarias = 'Por favor ingrese las comidas diarias.';
          }
          if (!values.Carne) {
            errors.Carne =
              'Por favor ingrese la cantidad de veces que come carne a la semana.';
          }

          if (!values.Leche) {
            errors.Leche =
              'Por favor ingrese las veces que consume leche a la semana.';
          }

          if (!values.Pan) {
            errors.Pan =
              'Por favor ingrese las veces que consume pan a la semana.';
          }

          if (!values.Frutas) {
            errors.Frutas =
              'Por favor ingresa las veces que consume frutas a la semana.';
          }

          if (!values.Yoghurt) {
            errors.Yoghurt =
              'Por favor ingresa las veces que consume Yoghurt a la semana.';
          }

          if (!values.Jugos) {
            errors.Jugos =
              'Por favor ingresa las veces que consume Jugos a la semana.';
          }

          if (!values.Vegetales) {
            errors.Vegetales =
              'Por favor ingresa las veces que consume vegetales.';
          }

          if (!values.Dulces) {
            errors.Dulces = 'Por favor ingresa las veces que consume dulces.';
          }

          if (!values.Gomitas) {
            errors.Gomitas = 'Por favor ingresa las veces que consume gomitas.';
          }

          if (!values.Huevo) {
            errors.Huevo = 'Por favor ingresa las veces que consume huevo';
          }

          if (!values.Galletas) {
            errors.Galletas =
              'Por favor ingrese las veces que consume galletas';
          }

          if (!values.Chocolate) {
            errors.Chocolate =
              'Por favor ingrese las veces que consume chocolate.';
          }

          if (!values.Pescado) {
            errors.Pescado = 'Por favor ingrese las veces que consume pescado.';
          }

          if (!values.Mermelada) {
            errors.Mermelada =
              'Por favor ingrese las veces que consume pescado.';
          }

          if (!values.Chicle) {
            errors.Chicle = 'Por favor ingrese las veces que consume chicle.';
          }

          if (!values.Agua) {
            errors.Agua =
              'Por favor ingrese las veces que consume agua al dia.';
          }

          if (!values.Yakult) {
            errors.Yakult =
              'Por favor ingrese las veces que toma un yakult a la semana.';
          }

          if (!values.Te) {
            errors.Te =
              'Por favor ingrese las veces que consume té a la semana.';
          }

          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          let submitValues = {
            id: IdPaciente,
            ComidasDiarias: values.ComidasDiarias,
            Carne: values.Carne,
            Leche: values.Leche,
            Pan: values.Pan,
            Frutas: values.Frutas,
            Yoghurt: values.Yoghurt,
            Jugos: values.Jugos,
            Vegetales: values.Vegetales,
            Dulces: values.Dulces,
            Gomitas: values.Gomitas,
            Huevo: values.Huevo,
            Galletas: values.Galletas,
            Chocolate: values.Chocolate,
            Pescado: values.Pescado,
            Mermelada: values.Mermelada,
            Chicle: values.Chicle,
            Agua: values.Agua,
            Yakult: values.Yakult,
            Te: values.Te,
          };

          if (!edit) {
            await axios
              .post(
                `http://localhost:3001/api/v1/alimentacion/${IdPaciente}`,
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
                console.log(error);
                Swal.fire(
                  'Oops!',
                  'La informacion de la alimentación no ha podido ser enviada correctamente, prueba de nuevo.',
                  'error'
                );
              });
          } else {
            await axios
              .put(
                `http://localhost:3001/api/v1/alimentacion/${IdPaciente}`,
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
                console.log(error);
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
            <br></br>
            <div className='mb-4 mt-2'>
              <label htmlFor='ComidasDiarias' className='form-label'>
                Comidas Diarias del paciente
              </label>
              <Field
                type='tel'
                id='ComidasDiarias'
                name='ComidasDiarias'
                className={
                  !touched.ComidasDiarias
                    ? 'form-control'
                    : errors.ComidasDiarias
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Comidas Diarias'
              />
              <ErrorMessage
                name='ComidasDiarias'
                component={() => (
                  <div className='invalid-feedback'>
                    {errors.ComidasDiarias}
                  </div>
                )}
              />
              <div id='ComidasDiariasHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Carne' className='form-label'>
                Veces que come carne a la semana.
              </label>
              <Field
                type='number'
                id='Carne'
                name='Carne'
                className={
                  !touched.Carne
                    ? 'form-control'
                    : errors.Carne
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Carne consumida'
              />
              <ErrorMessage
                name='Carne'
                component={() => (
                  <div className='invalid-feedback'>{errors.Carne}</div>
                )}
              />
              <div id='CarneHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Leche' className='form-label'>
                Veces que toma leche a la semana.
              </label>
              <Field
                type='number'
                id='Leche'
                name='Leche'
                className={
                  !touched.Leche
                    ? 'form-control'
                    : errors.Leche
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Leche consumida'
              />
              <ErrorMessage
                name='Leche'
                component={() => (
                  <div className='invalid-feedback'>{errors.Leche}</div>
                )}
              />
              <div id='CarneHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Pan' className='form-label'>
                Veces que come pan a la semana.
              </label>
              <Field
                type='number'
                id='Pan'
                name='Pan'
                className={
                  !touched.Pan
                    ? 'form-control'
                    : errors.Pan
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Pan consumido'
              />
              <ErrorMessage
                name='Pan'
                component={() => (
                  <div className='invalid-feedback'>{errors.Pan}</div>
                )}
              />
              <div id='PanHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Frutas' className='form-label'>
                Veces que come frutas a la semana.
              </label>
              <Field
                type='number'
                id='Frutas'
                name='Frutas'
                className={
                  !touched.Frutas
                    ? 'form-control'
                    : errors.Frutas
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Frutas consumidas'
              />
              <ErrorMessage
                name='Frutas'
                component={() => (
                  <div className='invalid-feedback'>{errors.Frutas}</div>
                )}
              />
              <div id='FrutasHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Yogurth' className='form-label'>
                Veces que consume yogurth a la semana.
              </label>
              <Field
                type='number'
                id='Yoghurt'
                name='Yoghurt'
                className={
                  !touched.Yoghurt
                    ? 'form-control'
                    : errors.Yoghurt
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Yogurth consumido'
              />
              <ErrorMessage
                name='Yoghurt'
                component={() => (
                  <div className='invalid-feedback'>{errors.Yoghurt}</div>
                )}
              />
              <div id='YogurthHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Jugos' className='form-label'>
                Veces que consume Jugos a la semana.
              </label>
              <Field
                type='number'
                id='Jugos'
                name='Jugos'
                className={
                  !touched.Jugos
                    ? 'form-control'
                    : errors.Jugos
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Jugos consumidos'
              />
              <ErrorMessage
                name='Jugos'
                component={() => (
                  <div className='invalid-feedback'>{errors.Jugos}</div>
                )}
              />
              <div id='JugosHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Vegetales' className='form-label'>
                Veces que consume Vegetales a la semana.
              </label>
              <Field
                type='number'
                id='Vegetales'
                name='Vegetales'
                className={
                  !touched.Vegetales
                    ? 'form-control'
                    : errors.Vegetales
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Vegetales consumidos'
              />
              <ErrorMessage
                name='Vegetales'
                component={() => (
                  <div className='invalid-feedback'>{errors.Vegetales}</div>
                )}
              />
              <div id='VegetalesHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Dulces' className='form-label'>
                Veces que consume dulces a la semana.
              </label>
              <Field
                type='number'
                id='Dulces'
                name='Dulces'
                className={
                  !touched.Dulces
                    ? 'form-control'
                    : errors.Dulces
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Dulces consumidos'
              />
              <ErrorMessage
                name='Dulces'
                component={() => (
                  <div className='invalid-feedback'>{errors.Dulces}</div>
                )}
              />
              <div id='DulcesHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Gomitas' className='form-label'>
                Veces que consume gomitas a la semana.
              </label>
              <Field
                type='number'
                id='Gomitas'
                name='Gomitas'
                className={
                  !touched.Gomitas
                    ? 'form-control'
                    : errors.Gomitas
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Gomitas consumidas'
              />
              <ErrorMessage
                name='Gomitas'
                component={() => (
                  <div className='invalid-feedback'>{errors.Gomitas}</div>
                )}
              />
              <div id='GomitasHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Huevo' className='form-label'>
                Veces que consume Huevo a la semana.
              </label>
              <Field
                type='number'
                id='Huevo'
                name='Huevo'
                className={
                  !touched.Huevo
                    ? 'form-control'
                    : errors.Huevo
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Huevos consumidos'
              />
              <ErrorMessage
                name='Huevo'
                component={() => (
                  <div className='invalid-feedback'>{errors.Huevo}</div>
                )}
              />
              <div id='HuevoHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Galletas' className='form-label'>
                Veces que consume Galletas a la semana.
              </label>
              <Field
                type='number'
                id='Galletas'
                name='Galletas'
                className={
                  !touched.Galletas
                    ? 'form-control'
                    : errors.Galletas
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Galletas consumidas'
              />
              <ErrorMessage
                name='Galletas'
                component={() => (
                  <div className='invalid-feedback'>{errors.Galletas}</div>
                )}
              />
              <div id='GalletasHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Chocolate' className='form-label'>
                Veces que consume Chocolate a la semana.
              </label>
              <Field
                type='number'
                id='Chocolate'
                name='Chocolate'
                className={
                  !touched.Chocolate
                    ? 'form-control'
                    : errors.Chocolate
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Chocolate consumido'
              />
              <ErrorMessage
                name='Chocolate'
                component={() => (
                  <div className='invalid-feedback'>{errors.Chocolate}</div>
                )}
              />
              <div id='ChocolateHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Pescado' className='form-label'>
                Veces que consume Pescado a la semana.
              </label>
              <Field
                type='number'
                id='Pescado'
                name='Pescado'
                className={
                  !touched.Pescado
                    ? 'form-control'
                    : errors.Pescado
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Pescado consumido'
              />
              <ErrorMessage
                name='Pescado'
                component={() => (
                  <div className='invalid-feedback'>{errors.Pescado}</div>
                )}
              />
              <div id='PescadoHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Mermelada' className='form-label'>
                Veces que consume mermelada a la semana.
              </label>
              <Field
                type='number'
                id='Mermelada'
                name='Mermelada'
                className={
                  !touched.Mermelada
                    ? 'form-control'
                    : errors.Mermelada
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Mermelada consumida'
              />
              <ErrorMessage
                name='Mermelada'
                component={() => (
                  <div className='invalid-feedback'>{errors.Mermelada}</div>
                )}
              />
              <div id='MermeladaHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Chicle' className='form-label'>
                Veces que mastica chicle a la semana.
              </label>
              <Field
                type='number'
                id='Chicle'
                name='Chicle'
                className={
                  !touched.Chicle
                    ? 'form-control'
                    : errors.Chicle
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Chicle consumido'
              />
              <ErrorMessage
                name='Chicle'
                component={() => (
                  <div className='invalid-feedback'>{errors.Chicle}</div>
                )}
              />
              <div id='ChicleHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Agua' className='form-label'>
                Veces que toma agua durante el dia.
              </label>
              <Field
                type='number'
                id='Agua'
                name='Agua'
                className={
                  !touched.Agua
                    ? 'form-control'
                    : errors.Agua
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Agua consumida'
              />
              <ErrorMessage
                name='Agua'
                component={() => (
                  <div className='invalid-feedback'>{errors.Agua}</div>
                )}
              />
              <div id='AguaHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Yakult' className='form-label'>
                Veces que toma Yakult durante la semana.
              </label>
              <Field
                type='number'
                id='Yakult'
                name='Yakult'
                className={
                  !touched.Yakult
                    ? 'form-control'
                    : errors.Yakult
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Yakult consumido'
              />
              <ErrorMessage
                name='Yakult'
                component={() => (
                  <div className='invalid-feedback'>{errors.Yakult}</div>
                )}
              />
              <div id='YakultHelp' className='form-text'></div>
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <label htmlFor='Te' className='form-label'>
                Veces que toma Te durante la semana.
              </label>
              <Field
                type='number'
                id='Te'
                name='Te'
                className={
                  !touched.Te
                    ? 'form-control'
                    : errors.Te
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Te consumido'
              />
              <ErrorMessage
                name='Te'
                component={() => (
                  <div className='invalid-feedback'>{errors.Te}</div>
                )}
              />
              <div id='TeHelp' className='form-text'></div>
            </div>

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
