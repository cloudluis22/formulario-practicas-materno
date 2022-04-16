import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';

export const TablaAmamantacion = ({ IdPaciente }) => {
  const [LblTomaPechoEdad, setLblTomaPechoEdad] = useState(true);
  const [LblFrecuenciaAlimentacionPecho, setLblFrecuenciaAlimentacionPecho] =
    useState(true);
  const [LblUsabaBiberon, setLblUsabaBiberon] = useState(true);
  const [LblUsabaChupon, setLblUsabaChupon] = useState(true);
  const [LblAlimentacionNocturna, setLblAlimentacionNocturna] = useState(true);
  const [LblBebeConsumeSolidos, setLblBebeConsumeSolidos] = useState(true);

  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  const [edit, setEdit] = useState(false);

  let formValues = {
    TomaPechoEdad: '',
    LblTomaPechoEdad: '',
    LblFrecuenciaAlimentacionPecho: '',
    TipoDeAlimentacion: '',
    UsabaBiberon: '',
    LblUsabaBiberon: '',
    ContenidoBiberon: '',
    EdadYaNoTomaBiberon: '',
    UsabaChupon: '',
    LblUsabaChupon: '',
    ContenidoChupon: '',
    EdadYaNoUsaChupon: '',
    AlimentacionNocturna: '',
    LblAlimentacionNocturna: '',
    LimpiaSuBoquita: '',
    BebeConsumeSolidos: '',
    LblBebeConsumeSolidos: '',
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/alimentacion-bebe/${IdPaciente}`)
      .then((response) => {
        setData({
          loading: false,
          data: response.data.alimentacionbebe,
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

          if (values.TomaPechoEdad === 'Si') {
            setLblTomaPechoEdad(true);
            setLblFrecuenciaAlimentacionPecho(true);
            if (
              !values.LblTomaPechoEdad ||
              !values.LblFrecuenciaAlimentacionPecho
            ) {
              errors.LblTomaPechoEdad = 'Usted tiene que llenar este campo';
              errors.LblFrecuenciaAlimentacionPecho =
                'Usted tiene que llenar este campo';
            }
          } else {
            setLblTomaPechoEdad(false);
            setLblFrecuenciaAlimentacionPecho(false);
          }

          if (!values.TipoDeAlimentacion) {
            errors.TipoDeAlimentacion = 'Debe de seleccionar este campo';
          }

          if (values.UsabaBiberon === 'Si') {
            setLblUsabaBiberon(true);
            if (!values.LblUsabaBiberon) {
              errors.LblUsabaBiberon = 'Usted tiene que llenar este campo';
            }
          } else {
            setLblUsabaBiberon(false);
          }

          if (values.AlimentacionNocturna === 'Si') {
            setLblAlimentacionNocturna(true);
            if (!values.LblAlimentacionNocturna) {
              errors.LblAlimentacionNocturna =
                'Usted tiene que llenar este campo';
            }
          } else {
            setLblAlimentacionNocturna(false);
          }

          if (values.UsabaChupon === 'Si') {
            setLblUsabaChupon(true);
            if (!values.LblUsabaChupon) {
              errors.LblUsabaChupon = 'Usted tiene que llenar este campo';
            }
          } else {
            setLblUsabaChupon(false);
          }

          if (!values.EdadYaNoTomaBiberon) {
            errors.EdadYaNoTomaBiberon =
              'Por favor ingrese hasta que edad tomó biberón (años).';
          }

          if (!values.ContenidoBiberon) {
            errors.ContenidoBiberon = 'Debe de llenar este campo';
          }

          if (values.BebeConsumeSolidos === 'Si') {
            setLblBebeConsumeSolidos(true);
            if (!values.LblBebeConsumeSolidos) {
              errors.LblBebeConsumeSolidos =
                'Usted tiene que llenar este campo';
            }
          } else {
            setLblBebeConsumeSolidos(false);
          }
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          let submitValues = {
            id: IdPaciente,
            TomaPechoEdad: values.TomaPechoEdad,
            LblTomaPechoEdad: values.LblTomaPechoEdad,
            LblFrecuenciaAlimentacionPecho:
              values.LblFrecuenciaAlimentacionPecho,
            TipoDeAlimentacion: values.TipoDeAlimentacion,
            UsabaBiberon: values.UsabaBiberon,
            LblUsabaBiberon: values.LblUsabaBiberon,
            ContenidoBiberon: values.ContenidoBiberon,
            EdadYaNoTomaBiberon: values.EdadYaNoTomaBiberon,
            UsabaChupon: values.UsabaChupon,
            LblUsabaChupon: values.LblUsabaChupon,
            ContenidoChupon: values.ContenidoChupon,
            EdadYaNoUsaChupon: values.EdadYaNoTomaBiberon,
            AlimentacionNocturna: values.AlimentacionNocturna,
            LblAlimentacionNocturna: values.LblAlimentacionNocturna,
            LimpiaSuBoquita: values.LimpiaSuBoquita,
            BebeConsumeSolidos: values.BebeConsumeSolidos,
            LblBebeConsumeSolidos: values.LblBebeConsumeSolidos,
          };

          if (!edit) {
            await axios
              .post(
                `http://localhost:3001/api/v1/alimentacion-bebe/${IdPaciente}`,
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
                `http://localhost:3001/api/v1/alimentacion-bebe/${IdPaciente}`,
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
            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>¿Su bebé toma / tomó pecho? </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TomaPechoEdad'
                    id='TomaPechoEdad'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TomaPechoEdad'
                    id='TomaPechoEdad'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {LblTomaPechoEdad && (
              <div className='mb-3'>
                <label htmlFor='LblTomaPechoEdad' className='form-label'>
                  ¿Hasta qué edad?
                </label>
                <Field
                  type='text'
                  id='LblTomaPechoEdad'
                  name='LblTomaPechoEdad'
                  className={
                    !touched.LblTomaPechoEdad
                      ? 'form-control'
                      : errors.LblTomaPechoEdad
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Ingrese hasta que edad tomó pecho'
                />
                <ErrorMessage
                  name='LblTomaPechoEdad'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblTomaPechoEdad}
                    </div>
                  )}
                />
              </div>
            )}

            {LblFrecuenciaAlimentacionPecho && (
              <div className='mb-3'>
                <label
                  htmlFor='LblFrecuenciaAlimentacionPecho'
                  className='form-label'>
                  Frecuencia:
                </label>
                <Field
                  type='text'
                  id='LblFrecuenciaAlimentacionPecho'
                  name='LblFrecuenciaAlimentacionPecho'
                  className={
                    !touched.LblFrecuenciaAlimentacionPecho
                      ? 'form-control'
                      : errors.LblFrecuenciaAlimentacionPecho
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Ingrese que tan frecuente toma pecho'
                />
                <ErrorMessage
                  name='LblFrecuenciaAlimentacionPecho'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblFrecuenciaAlimentacionPecho}
                    </div>
                  )}
                />
              </div>
            )}

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                La alimentación de su bebé es o fue:{' '}
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TipoDeAlimentacion'
                    id='TipoDeAlimentacion'
                    value='LactanciaExclusiva'
                  />
                  Lactancia Exclusiva
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TipoDeAlimentacion'
                    id='TipoDeAlimentacion'
                    value='Mixta'
                  />
                  Mixta
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TipoDeAlimentacion'
                    id='TipoDeAlimentacion'
                    value='Biberón'
                  />
                  Biberón
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿Su hijo utiliza / utilizó biberón?{' '}
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='UsabaBiberon'
                    id='UsabaBiberon'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='UsabaBiberon'
                    id='UsabaBiberon'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {LblUsabaBiberon && (
              <div className='mb-3'>
                <label htmlFor='LblUsabaBiberon' className='form-label'>
                  Frecuencia:
                </label>
                <Field
                  type='text'
                  id='LblUsabaBiberon'
                  name='LblUsabaBiberon'
                  className={
                    !touched.LblUsabaBiberon
                      ? 'form-control'
                      : errors.LblUsabaBiberon
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Ingrese que tan frecuente toma biberón'
                />
                <ErrorMessage
                  name='LblUsabaBiberon'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblUsabaBiberon}
                    </div>
                  )}
                />
              </div>
            )}

            <label htmlFor='ContenidoBiberon' className='form-label'>
              ¿Cuál es / era el contenido de su biberón? (Leche Materna, Leche
              de Formula, Chocolate en polvo, Auzcar/Miel, Té)
            </label>
            <Field
              type='text'
              id='ContenidoBiberon'
              name='ContenidoBiberon'
              className={
                !touched.ContenidoBiberon
                  ? 'form-control'
                  : errors.ContenidoBiberon
                  ? 'form-control is-invalid'
                  : 'form-control is-valid'
              }
              placeholder='Leche Materna, Leche Materna, Leche de Formula, Chocolate en polvo, Auzcar/Miel, Té '
            />
            <ErrorMessage
              name='ContenidoBiberon'
              component={() => (
                <div className='invalid-feedback'>
                  {errors.ContenidoBiberon}
                </div>
              )}
            />
            <div id='EdadYaNoTomaBiberonHelp' className='form-text'>
              se debe ingresar cual es / era el contenido del biberón
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
              <div id='my-radio-group'>¿Su hijo utiliza o utilizó chupón? </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='UsabaChupon'
                    id='UsabaChupon'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='UsabaChupon'
                    id='UsabaChupon'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>
            {/*LblUsabaChupon */}
            {LblUsabaChupon && (
              <div className='mb-3'>
                <label htmlFor='LblUsabaChupon' className='form-label'>
                  Frecuencia con la que usaba chupón
                </label>
                <Field
                  type='text'
                  id='LblUsabaChupon'
                  name='LblUsabaChupon'
                  className={
                    !touched.LblUsabaChupon
                      ? 'form-control'
                      : errors.LblUsabaChupon
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Frecuencia'
                />
                <ErrorMessage
                  name='LblUsabaChupon'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblUsabaChupon}
                    </div>
                  )}
                />
                <div id='LblUsabaChuponnHelp' className='form-text'>
                  se debe ingresar la frecuencia en que lo hacía
                </div>
              </div>
            )}

            <div className='mb-3'>
              <label htmlFor='ContenidoChupon' className='form-label'>
                ¿Cuál es / era el contenido de su chupón?
              </label>
              <Field
                type='text'
                id='ContenidoChupon'
                name='ContenidoChupon'
                className={
                  !touched.ContenidoChupon
                    ? 'form-control'
                    : errors.ContenidoChupon
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Contenido '
              />
              <ErrorMessage
                name='ContenidoChupon'
                component={() => (
                  <div className='invalid-feedback'>
                    {errors.ContenidoChupon}
                  </div>
                )}
              />
              <div id='ContenidoChuponHelp' className='form-text'>
                se debe ingresar el contenido del chupón
              </div>
            </div>

            <label htmlFor='EdadYaNoUsaChupon' className='form-label'>
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
              se debe ingresar hasta que edad dejó el chupón (años)
            </div>

            <br></br>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿Su bebé sigue teniendo alimentación noctura ?{' '}
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='AlimentacionNocturna'
                    id='AlimentacionNocturna'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='AlimentacionNocturna'
                    id='AlimentacionNocturna'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {/*LblAlimentacionNocturna */}
            {LblAlimentacionNocturna && (
              <div className='mb-3'>
                <label htmlFor='LblAlimentacionNocturna' className='form-label'>
                  Especifique con qué alimentaba al bebé
                </label>
                <Field
                  type='text'
                  id='LblAlimentacionNocturna'
                  name='LblAlimentacionNocturna'
                  className={
                    !touched.LblAlimentacionNocturna
                      ? 'form-control'
                      : errors.LblAlimentacionNocturna
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Pecho, biberón, vaso entrenador, otro'
                />
                <ErrorMessage
                  name='LblAlimentacionNocturna'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblAlimentacionNocturna}
                    </div>
                  )}
                />
                <div
                  id='LblAlimentacionNocturnaHelp'
                  className='form-text'></div>
              </div>
            )}

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                {' '}
                ¿Limpia su boquita después de la alimentacion nocturna?
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='LimpiaSuBoquita'
                    id='LimpiaSuBoquita'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='LimpiaSuBoquita'
                    id='LimpiaSuBoquita'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>¿Su bebé come alimentos sólidos ? </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='BebeConsumeSolidos'
                    id='BebeConsumeSolidos'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='BebeConsumeSolidos'
                    id='BebeConsumeSolidos'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {/*BebeConsumeSolidos */}
            {LblBebeConsumeSolidos && (
              <div className='mb-3'>
                <label htmlFor='LblBebeConsumeSolidos' className='form-label'>
                  Especifique cómo consume el bebé su alimento
                </label>
                <Field
                  type='text'
                  id='LblBebeConsumeSolidos'
                  name='LblBebeConsumeSolidos'
                  className={
                    !touched.LblBebeConsumeSolidos
                      ? 'form-control'
                      : errors.LblBebeConsumeSolidos
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Mastica o tiene que moler la comida?'
                />
                <ErrorMessage
                  name='LblBebeConsumeSolidos'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblBebeConsumeSolidos}
                    </div>
                  )}
                />
                <div id='LblBebeConsumeSolidosHelp' className='form-text'></div>
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
  }
};
