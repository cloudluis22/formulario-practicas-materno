import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';

export const TablaAntecedentesFamiliares = ({ IdPaciente }) => {
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  let formValues = {
    Diabetes: '',
    Cancer: '',
    Hipertension: '',
    VIH: '',
    EnfermedadDegenerativa: '',
    EnfermedadMental: '',
  };

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `http://localhost:3001/api/v1/antecedentes-familiares/${IdPaciente}`
        )
        .then((response) => {
          setData({
            loading: false,
            data: response.data.antecedentesfamiliares,
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
    }, 1000);
  }, [IdPaciente, Data.data]);

  if (Data.data.length > 0) {
    formValues = Data.data[0];
    console.log(formValues);
  }

  if (!Data.loading && Data.ok) {
    return (
      <Formik
        initialValues={formValues}
        validate={(values) => {
          let errors = {};

          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          let submitValues = {
            id: IdPaciente,
            Diabetes: values.Diabetes,
            Cancer: values.Cancer,
            Hipertension: values.Hipertension,
            VIH: values.VIH,
            EnfermedadDegenerativa: values.EnfermedadDegenerativa,
            EnfermedadMental: values.EnfermedadMental,
          };

          if (!edit) {
            await axios
              .post(
                `http://localhost:3001/api/v1/antecedentes-familiares/${IdPaciente}`,
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
                `http://localhost:3001/api/v1/antecedentes-familiares/${IdPaciente}`,
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
  }
};
