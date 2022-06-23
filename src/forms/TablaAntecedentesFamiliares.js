import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';
import config from '../config.json';

export const TablaAntecedentesFamiliares = ({ IdPaciente }) => {
  
  const [Data, setData] = useState({
    loading: true,
    data: [],
    info: [],
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
  const [NombreTutor, setNombreTutor] = useState("");

  useEffect(() => {
    
      axios
        .get(
          `${config.server_adress}/api/v1/antecedentes-familiares/${IdPaciente}`
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
          
          setData({
            loading: false,
            data: [],
            ok: false,
          });
        });
        axios.get(`${config.server_adress}/api/v1/obtener-paciente/${IdPaciente}`)
        .then((response) => {
          setNombreTutor(
            response.data.paciente[0].TutorEncargado
          )
          
        
        }) 
  },  
  [IdPaciente, Data.data]);

  if (Data.data.length > 0) {
    formValues = Data.data[0];
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
                `${config.server_adress}/api/v1/antecedentes-familiares/${IdPaciente}`,
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
                `${config.server_adress}/api/v1/antecedentes-familiares/${IdPaciente}`,
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
              <br></br>
              <div className='mb-4 mt-2'>
                <label>
                Yo <u><strong>{NombreTutor}</strong></u>, declaro que
la información que aquí se expresa es verídica, estoy enterado de que es información
confidencial y solamente la Dra. Alicia Díaz Magdaleno tendrá acceso a este documento;
en caso de requerirlo yo puedo solicitar un resumen de mi historial clínico y evolución.
                </label>
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
