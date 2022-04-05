import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';

export const TablaAntecedentes = () => {
  return (
    <div className='bcg-color d-flex justify-content-center flex-column align-items-center'>
      <h1 className='display-2 text-light'> Tabla Antecedentes </h1>
      <h1 className='display-2 text-light'> Personales (del paciente) </h1>
      <Formik
        initialValues={{
          BuenaSalud: '',
          Hospitalizado: '',
          RealizaDeporte: '',
          AlergiasMedAlim: '',
          TranstornoMentalEmocional: '',
          DificultadesEscolares: '',
          RespiraPorBoca: '',
          ApneaRoncar: '',
          ChupaLabioDedos: '',
          Asma: '',
          Sarampion: '',
          FiebreReumatica: '',
          PaladarHendido: '',
          TosFerina: '',
          Poliomelitis: '',
          Epilepsia: '',
          Escarlatina: '',
          Tuberculosis: '',
          EnfermedadCardiaca: '',
          Varicela: '',
          Paperas: '',
          Hepatitis: '',
          Difteria: '',
          Tifoidea: '',
          EnfermedadRenal: '',
          Hemofilia: '',
          TrastornoHepatico: '',
          Diabetes: '',
          Reflujo: '',
          TrastornoDeLenguaje: '',
          Otros: '',
          TratamientosActivos: '',
          TomaMedicamentos: '',
          MadreMedicamentoEmbarazo: '',
          AccidentesEmbarazo: '',
          TipoParto: '',
          DificultadNacimiento: '',
          AnomaliaCongenitaNacimiento: '',
          HaSidoAnesteciado: '',
          ReaccionAnestecia: '',
        }}
        validate={(values) => {
          let errors = {};

            if(!values.BuenaSalud){
                errors.BuenaSalud = 'Debe de seleccionar este campo'
            }

            if(!values.Otros){
              errors.Otros = 'En caso de no añadir otra condición, escriba "No aplica"'
            }

            console.log(values.BuenaSalud)
            console.log(values.Hospitalizado)

          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const IdPaciente = uniqid();
          await axios
            .post('http://localhost:3001/api/v1/insert', {
              id: IdPaciente,
              BuenaSalud: values.BuenaSalud,
              Hospitalizado: values.Hospitalizado,
              RealizaDeporte: values.RealizaDeporte,
              AlergiasMedAlim: values.AlergiasMedAlim,
              TranstornoMentalEmocional: values.TranstornoMentalEmocional ,
              DificultadesEscolares: values.DificultadesEscolares ,
              RespiraPorBoca: values.RespiraPorBoca ,
              ApneaRoncar: values.ApneaRoncar,
              ChupaLabioDedos: values.ChupaLabioDedos,
              Asma: values.Asma,
              Sarampion: values.Sarampion,
              FiebreReumatica: values.FiebreReumatica,
              PaladarHendido: values.FiebreReumatica ,
              TosFerina: values.TosFerina,
              Poliomelitis: values.Poliomelitis,
              Epilepsia: values.Epilepsia,
              Escarlatina: values.Escarlatina,
              Tuberculosis: values.Tuberculosis,
              EnfermedadCardiaca: values.EnfermedadCardiaca,
              Varicela: values.Varicela,
              Paperas: values.Paperas,
              Hepatitis: values.Hepatitis,
              Difteria: values.Difteria,
              Tifoidea: values.Tifoidea,
              EnfermedadRenal: values.EnfermedadRenal,
              Hemofilia: values.Hemofilia,
              TrastornoHepatico: values.TrastornoHepatico,
              Diabetes: values.Diabetes,
              Reflujo: values.Reflujo,
              TrastornoDeLenguaje: values.TrastornoDeLenguaje,
              Otros: values.Otros,
              TratamientosActivos: values.TratamientosActivos,
              TomaMedicamentos: values.TomaMedicamentos,
              MadreMedicamentoEmbarazo: values.MadreMedicamentoEmbarazo,
              AccidentesEmbarazo: values.AccidentesEmbarazo,
              TipoParto: values.TipoParto,
              DificultadNacimiento: values.DificultadNacimiento,
              AnomaliaCongenitaNacimiento: values.AnomaliaCongenitaNacimiento,
              HaSidoAnesteciado: values.HaSidoAnesteciado,
              ReaccionAnestecia: values.ReaccionAnestecia,

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

            <br></br>



            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Goza su hijo de buena salud? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="BuenaSalud" id="BuenaSalud" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="BuenaSalud" id="BuenaSalud" value="No" />
                No
            </label>
          </div>
            </div>


                <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Ha estado hospitalizado? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Hospitalizado" id="Hospitalizado" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Hospitalizado" id="Hospitalizado" value="No" />
                No
            </label>
          </div>
            </div>


            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Su hijo realiza algún deporte?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="RealizaDeporte" id="RealizaDeporte" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="RealizaDeporte" id="RealizaDeporte" value="No" />
                No
            </label>
          </div>
            </div>


            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Es alérgico a algún medicamento ó alimento?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="AlergiasMedAlim" id="AlergiasMedAlim" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="AlergiasMedAlim" id="AlergiasMedAlim" value="No" />
                No
            </label>
          </div>
            </div>


            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Tiene o ha tenido su hijo algún trastorno emocional o mental? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TranstornoMentalEmocional" id="TranstornoMentalEmocional" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TranstornoMentalEmocional" id="TranstornoMentalEmocional" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Tiene dificultades en la escuela? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="DificultadesEscolares" id="DificultadesEscolares" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="DificultadesEscolares" id="DificultadesEscolares" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Padece su hijo apnea del sueño (ronca)? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ApneaRoncar" id="ApneaRoncar" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ApneaRoncar" id="ApneaRoncar" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Ha observado a su hijo succionar su labio o alguno de sus dedos? </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ChupaLabioDedos" id="ChupaLabioDedos" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ChupaLabioDedos" id="ChupaLabioDedos" value="No" />
                No
            </label>
          </div>
            </div>

            <label>¿Su hijo padece o ha padecido alguna de las siguientes enfermedades?</label>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Asma </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Asma" id="Asma" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Asma" id="Asma" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Sarampión </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Sarampion" id="Sarampion" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Sarampion" id="Sarampion" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Fiebre Reumática </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="FiebreReumatica" id="FiebreReumatica" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="FiebreReumatica" id="FiebreReumatica" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Paladar Hendido </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="PaladarHendido" id="PaladarHendido" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="PaladarHendido" id="PaladarHendido" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Paladar Hendido </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="PaladarHendido" id="PaladarHendido" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="PaladarHendido" id="PaladarHendido" value="No" />
                No
            </label>
          </div>
            </div>



            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Tos Ferina </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TosFerina" id="TosFerina" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TosFerina" id="TosFerina" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Poliomelitis </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Poliomelitis" id="Poliomelitis" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Poliomelitis" id="Poliomelitis" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Epilepsia </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Epilepsia" id="Epilepsia" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Epilepsia" id="Epilepsia" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Escarlatina </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Escarlatina" id="Escarlatina" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Escarlatina" id="Escarlatina" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Tuberculosis </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Tuberculosis" id="Tuberculosis" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Tuberculosis" id="Tuberculosis" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Enfermedad Cardiaca </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="EnfermedadCardiaca" id="EnfermedadCardiaca" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="EnfermedadCardiaca" id="EnfermedadCardiaca" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Varicela </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Varicela" id="Varicela" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Varicela" id="Varicela" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Paperas </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Paperas" id="Paperas" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Paperas" id="Paperas" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Paperas </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Paperas" id="Paperas" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Paperas" id="Paperas" value="No" />
                No
            </label>
          </div>
            </div>


            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Hepatitis </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Hepatitis" id="Hepatitis" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Hepatitis" id="Hepatitis" value="No" />
                No
            </label>
          </div>
            </div>

















            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Difteria</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Difteria" id="Difteria" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Difteria" id="Difteria" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Tifoidea</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Tifoidea" id="Tifoidea" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Tifoidea" id="Tifoidea" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Enfermedad Renal</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="EnfermedadRenal" id="EnfermedadRenal" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="EnfermedadRenal" id="EnfermedadRenal" value="No" />
                No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Hemofilia</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Hemofilia" id="Hemofilia" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Hemofilia" id="Hemofilia" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Trastorno Hepático</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TrastornoHepatico" id="TrastornoHepatico" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TrastornoHepatico" id="TrastornoHepatico" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Diabetes</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Diabetes" id="Diabetes" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Diabetes" id="Diabetes" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Reflujo</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Reflujo" id="Reflujo" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="Reflujo" id="Reflujo" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">Trastorno de Lenguaje</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TrastornoDeLenguaje" id="TrastornoDeLenguaje" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TrastornoDeLenguaje" id="TrastornoDeLenguaje" value="No" />
              No
            </label>
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
                placeholder='Otras condiciones medicas'
              />
              <ErrorMessage
                name='Otros'
                component={() => (
                  <div className='invalid-feedback'>{errors.Otros}</div>
                )}
              />
              <div id='OtrosHelp' className='form-text'>
                agregue alguna otra condición médica
              </div>

            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Se encuentra bajo algún tratamiento médico?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TratamientosActivos" id="TratamientosActivos" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TratamientosActivos" id="TratamientosActivos" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Toma su hijo algún medicamento actualmente?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TomaMedicamentos" id="TomaMedicamentos" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TomaMedicamentos" id="TomaMedicamentos" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Toma su hijo algún medicamento actualmente?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TomaMedicamentos" id="TomaMedicamentos" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TomaMedicamentos" id="TomaMedicamentos" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿La madre tomó medicamentos durante el embarazo?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="MadreMedicamentoEmbarazo" id="MadreMedicamentoEmbarazo" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="MadreMedicamentoEmbarazo" id="MadreMedicamentoEmbarazo" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿La madre sufrió algún accidente durante el embarazo?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="AccidentesEmbarazo" id="AccidentesEmbarazo" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="AccidentesEmbarazo" id="AccidentesEmbarazo" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">El parto fue:</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TipoParto" id="TipoParto" value="Normal" />
              Normal
            </label><br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TipoParto" id="TipoParto" value="Cesarea" />
              Cesarea
            </label><br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TipoParto" id="TipoParto" value="Prematuro" />
              Prematuro
            </label><br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="TipoParto" id="TipoParto" value="Complicado/Forceps" />
              Complicado/Fórceps
            </label><br></br>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿En el nacimiento presentó alguna dificultad?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="DificultadNacimiento" id="DificultadNacimiento" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="DificultadNacimiento" id="DificultadNacimiento" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Presentó alguna anomalía congénita (de nacimiento)?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="AnomaliaCongenitaNacimiento" id="AnomaliaCongenitaNacimiento" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="AnomaliaCongenitaNacimiento" id="AnomaliaCongenitaNacimiento" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Su hijo ha sido anestesiado anteriormente?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="HaSidoAnesteciado" id="HaSidoAnesteciado" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="HaSidoAnesteciado" id="HaSidoAnesteciado" value="No" />
              No
            </label>
          </div>
            </div>

            <div className='mb-4 mt-2'>
            <div id="my-radio-group">¿Tuvo alguna reacción adversa?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ReaccionAnestecia" id="ReaccionAnestecia" value="Si" />
                Si
            </label>
            <br></br>
            <label>
              <Field type="radio" className='form-check-input mx-2'  name="ReaccionAnestecia" id="ReaccionAnestecia" value="No" />
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