import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';

export const TablaOclusion = () => {
  return (
    <div className='bcg-color d-flex justify-content-center flex-column align-items-center'>
      <h1 className='display-2 text-light'> OCLUSIÓN Y ALINEAMIENTO
 </h1>
      <Formik
        initialValues={{
          LineaMedia: '',
          PlanoTerminal: '',
          ClaseMolar: '',
          EspaciosPrimates: '',
          EspaciosFisiologicos: '',
          Traslape: '',
          Sobremordida:'',
          MordidaAbierta:'',
          MordidaProfunda:'',
          MalposicionDentaria:'',
          Diastema:'',
        }}
        validate={(values) => {
          let errors = {};

          if (!values.LineaMedia){
            errors.LineaMedia = "Debe seleccionar uno de esos campos"
          }

          if (!values.PlanoTerminal){
            errors.PlanoTerminal = "Debe seleccionar uno de esos campos"
          }

          if (!values.ClaseMolar){
            errors.ClaseMolar = "Debe seleccionar uno de esos campos"
          }

          if (!values.EspaciosPrimates){
            errors.EspaciosPrimates = "Debe seleccionar uno de esos campos"
          }

          if (!values.Traslape){
            errors.Traslape = "Debe seleccionar uno de esos campos"
          }

          if (!values.Sobremordida){
            errors.Sobremordida = "Debe seleccionar uno de esos campos"
          }

          if (!values.MordidaAbierta){
            errors.MordidaAbierta = "Debe seleccionar uno de esos campos"
          }

          if (!values.MordidaProfunda){
            errors.MordidaProfunda = "Debe seleccionar uno de esos campos"
          }

          if (!values.MalposicionDentaria){
            errors.MalposicionDentaria = "Debe seleccionar uno de esos campos"
          }

          if (!values.Diastema){
            errors.Diastema = "Debe seleccionar uno de esos campos"
          }

          console.log('errores');
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const IdPaciente = uniqid();
          await axios
            .post('http://localhost:3001/api/v1/insert', {
              id: IdPaciente,
              LineaMedia: values.LineaMedia,
              PlanoTerminal: values.PlanoTerminal ,
              ClaseMolar: values.ClaseMolar ,
              EspaciosPrimates: values.EspaciosPrimates ,
              EspaciosFisiologicos: values.EspaciosFisiologicos ,
              Traslape: values.Traslape,
              Sobremordida: values.Sobremordida,
              MordidaAbierta: values.MordidaAbierta,
              MordidaProfunda: values.MordidaProfunda,
              MalposicionDentaria: values.MalposicionDentaria,
              Diastema: values.Diastema,
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
            <div id="my-radio-group">Linea Media</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="LineaMedia" id="LineaMedia" value="Normal" />
                Normal
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="LineaMedia" id="LineaMedia" value="DesviadaDerecha" />
                Desviada a la derecha
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="LineaMedia" id="LineaMedia" value="DesviadaIzquierda" />
                Desviada a la izquierda
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Plano Terminal</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="PlanoTerminal" id="PlanoTerminal" value="Recto" />
                Recto
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="PlanoTerminal" id="PlanoTerminal" value="Mesia" />
                Mesia
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="PlanoTerminal" id="PlanoTerminal" value="Distal" />
              Distal
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Clase Molar</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ClaseMolar" id="ClaseMolar" value="ClaseI" />
                Clase I
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ClaseMolar" id="ClaseMolar" value="ClaseII" />
              Clase II
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ClaseMolar" id="ClaseMolar" value="ClaseIII" />
              Clase III
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Espacios primates</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="EspaciosPrimates" id="EspaciosPrimates" value="Sup" />
                Sup
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="EspaciosPrimates" id="EspaciosPrimates" value="Inf" />
              Inf
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="EspaciosPrimates" id="EspaciosPrimates" value="Ninguno" />
              Ninguno
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group"> Espacios fisiológicos</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="EspaciosFisiologicos" id="EspaciosFisiologicos" value="Sup" />
                Sup
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="EspaciosFisiologicos" id="EspaciosFisiologicos" value="Inf" />
              Inf
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="EspaciosFisiologicos" id="EspaciosFisiologicos" value="Ninguno" />
              Ninguno
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group"> Traslape</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Traslape" id="Traslape" value="Normal" />
                Normal
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Traslape" id="Traslape" value="Exagerado" />
              Exagerado
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Traslape" id="Traslape" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group"> Sobremordida</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Sobremordida" id="Sobremordida" value="Normal" />
                Normal
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Sobremordida" id="Sobremordida" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Mordida abierta</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="MordidaAbierta" id="MordidaAbierta" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="MordidaAbierta" id="MordidaAbierta" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Mordida profunda</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="MordidaProfunda" id="MordidaProfunda" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="MordidaProfunda" id="MordidaProfunda" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group"> Malposición dentaria</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="MalposicionDentaria" id="MalposicionDentaria" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="MalposicionDentaria" id="MalposicionDentaria" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">  Diastema</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Diastema" id="Diastema" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Diastema" id="Diastema" value="No" />
              No
            </label>
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
