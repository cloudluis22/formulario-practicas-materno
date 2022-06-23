import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';
import config from '../config.json';

export const TablaAntecedentes = ({ IdPaciente }) => {
  const [LblRealizaDeporte, setLblRealizaDeporte] = useState(true);
  const [LblAlergiasMedAlim, setLblAlergiasMedAlim] = useState(true);
  const [LblTrastornoMentalEmocional, setLblTrastornoMentalEmocional] =
    useState(true);
  const [LblChupaLabioDedos, setLblChupaLabioDedos] = useState(true);
  const [LblTomaMedicamentos, setLblTomaMedicamentos] = useState(true);
  const [LblMadreMedicamentoEmbarazo, setLblMadreMedicamentoEmbarazo] =
    useState(true);
  const [LblDificultadNacimiento, setLblDificultadNacimiento] = useState(true);
  const [LblAnomaliaCongenitaNacimiento, setLblAnomaliaCongenitaNacimiento] =
    useState(true);
  const [LblReaccionAnestesia, setLblReaccionAnestesia] = useState(true);

  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  let formValues = {
    BuenaSalud: '',
    Hospitalizado: '',
    RealizaDeporte: '',
    LblRealizaDeporte: '',
    AlergiasMedAlim: '',
    LblAlergiasMedAlim: '',
    TrastornoMentalEmocional: '',
    LblTrastornoMentalEmocional: '',
    DificultadesEscolares: '',
    RespiraPorBoca: '',
    ApneaRoncar: '',
    ChupaLabioDedos: '',
    LblChupaLabioDedos: '',
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
    LblTomaMedicamentos: '',
    MadreMedicamentoEmbarazo: '',
    LblMadreMedicamentoEmbarazo: '',
    AccidentesEmbarazo: '',
    TipoParto: '',
    DificultadNacimiento: '',
    LblDificultadNacimiento: '',
    AnomaliaCongenitaNacimiento: '',
    LblAnomaliaCongenitaNacimiento: '',
    HaSidoAnestesiado: '',
    ReaccionAnestesia: '',
    LblReaccionAnestesia: '',
  };

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `${config.server_adress}/api/v1/antecedentes-personales/${IdPaciente}`
        )
        .then((response) => {
          setData({
            loading: false,
            data: response.data.antecedentespersonales,
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
    }, 1000);
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

          if (!values.BuenaSalud) {
            errors.BuenaSalud = 'Debe de seleccionar este campo';
          }

          if (values.RealizaDeporte === 'Si') {
            setLblRealizaDeporte(true);
            if (!values.LblRealizaDeporte) {
              errors.LblRealizaDeporte = 'Usted tiene que llenar este campo';
            }
          } else {
            setLblRealizaDeporte(false);
          }

          if (values.AlergiasMedAlim === 'Si') {
            setLblAlergiasMedAlim(true);
            if (!values.LblAlergiasMedAlim) {
              errors.LblAlergiasMedAlim = 'Usted tiene que llenar este campo';
            }
          } else {
            setLblAlergiasMedAlim(false);
          }

          if (values.TrastornoMentalEmocional === 'Si') {
            setLblTrastornoMentalEmocional(true);
            if (!values.LblTrastornoMentalEmocional) {
              errors.LblTrastornoMentalEmocional =
                'Usted tiene que llenar este campo';
            }
          } else {
            setLblTrastornoMentalEmocional(false);
          }

          if (values.ChupaLabioDedos === 'Si') {
            setLblChupaLabioDedos(true);
            if (!values.LblChupaLabioDedos) {
              errors.LblChupaLabioDedos = 'Usted tiene que llenar este campo';
            }
          } else {
            setLblChupaLabioDedos(false);
          }

          if (values.TomaMedicamentos === 'Si') {
            setLblTomaMedicamentos(true);
            if (!values.LblTomaMedicamentos) {
              errors.LblTomaMedicamentos = 'Usted tiene que llenar este campo';
            }
          } else {
            setLblTomaMedicamentos(false);
          }

          if (values.MadreMedicamentoEmbarazo === 'Si') {
            setLblMadreMedicamentoEmbarazo(true);
            if (!values.LblMadreMedicamentoEmbarazo) {
              errors.LblMadreMedicamentoEmbarazo =
                'Usted tiene que llenar este campo';
            }
          } else {
            setLblMadreMedicamentoEmbarazo(false);
          }

          if (values.DificultadNacimiento === 'Si') {
            setLblDificultadNacimiento(true);
            if (!values.LblDificultadNacimiento) {
              errors.LblDificultadNacimiento =
                'Usted tiene que llenar este campo';
            }
          } else {
            setLblDificultadNacimiento(false);
          }

          if (values.AnomaliaCongenitaNacimiento === 'Si') {
            setLblAnomaliaCongenitaNacimiento(true);
            if (!values.LblAnomaliaCongenitaNacimiento) {
              errors.LblAnomaliaCongenitaNacimiento =
                'Usted tiene que llenar este campo';
            }
          } else {
            setLblAnomaliaCongenitaNacimiento(false);
          }

          if (values.ReaccionAnestesia === 'Si') {
            setLblReaccionAnestesia(true);
            if (!values.LblReaccionAnestesia) {
              errors.LblReaccionAnestesia = 'Usted tiene que llenar este campo';
            }
          } else {
            setLblReaccionAnestesia(false);
          }

          if (!values.Otros) {
            errors.Otros =
              'En caso de no añadir otra condición, escriba "No aplica"';
          }

          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          let submitValues = {
            id: IdPaciente,
            BuenaSalud: values.BuenaSalud,
            Hospitalizado: values.Hospitalizado,
            RealizaDeporte: values.RealizaDeporte,
            LblRealizaDeporte: values.LblRealizaDeporte,
            AlergiasMedAlim: values.AlergiasMedAlim,
            LblAlergiasMedAlim: values.LblAlergiasMedAlim,
            TrastornoMentalEmocional: values.TrastornoMentalEmocional,
            LblTrastornoMentalEmocional: values.LblTrastornoMentalEmocional,
            DificultadesEscolares: values.DificultadesEscolares,
            RespiraPorBoca: values.RespiraPorBoca,
            ApneaRoncar: values.ApneaRoncar,
            ChupaLabioDedos: values.ChupaLabioDedos,
            LblChupaLabioDedos: values.LblChupaLabioDedos,
            Asma: values.Asma,
            Sarampion: values.Sarampion,
            FiebreReumatica: values.FiebreReumatica,
            PaladarHendido: values.PaladarHendido,
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
            LblTomaMedicamentos: values.LblTomaMedicamentos,
            MadreMedicamentoEmbarazo: values.MadreMedicamentoEmbarazo,
            LblMadreMedicamentoEmbarazo: values.LblMadreMedicamentoEmbarazo,
            AccidentesEmbarazo: values.AccidentesEmbarazo,
            TipoParto: values.TipoParto,
            DificultadNacimiento: values.DificultadNacimiento,
            LblDificultadNacimiento: values.LblDificultadNacimiento,
            AnomaliaCongenitaNacimiento: values.AnomaliaCongenitaNacimiento,
            LblAnomaliaCongenitaNacimiento:
              values.LblAnomaliaCongenitaNacimiento,
            HaSidoAnestesiado: values.HaSidoAnestesiado,
            ReaccionAnestesia: values.ReaccionAnestesia,
            LblReaccionAnestesia: values.LblReaccionAnestesia,
          };

          if (!edit) {
            await axios
              .post(
                `${config.server_adress}/api/v1/antecedentes-personales/${IdPaciente}`,
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
                  'La informacion de los antecedentes no ha podido ser enviada correctamente, prueba de nuevo.',
                  'error'
                );
              });
          } else {
            await axios
              .put(
                `${config.server_adress}/api/v1/antecedentes-personales/${IdPaciente}`,
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
            <br></br>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>¿Goza su hijo de buena salud? </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='BuenaSalud'
                    id='BuenaSalud'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='BuenaSalud'
                    id='BuenaSalud'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>¿Ha estado hospitalizado? </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Hospitalizado'
                    id='Hospitalizado'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Hospitalizado'
                    id='Hospitalizado'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>¿Su hijo realiza algún deporte?</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='RealizaDeporte'
                    id='RealizaDeporte'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='RealizaDeporte'
                    id='RealizaDeporte'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {LblRealizaDeporte && (
              <div className='mb-3'>
                <label htmlFor='LblRealizaDeporte' className='form-label'>
                  Nombre del deporte
                </label>
                <Field
                  type='text'
                  autocomplete='off'
                  id='LblRealizaDeporte'
                  name='LblRealizaDeporte'
                  className={
                    !touched.LblRealizaDeporte
                      ? 'form-control'
                      : errors.LblRealizaDeporte
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Nombre del deporte'
                />
                <ErrorMessage
                  name='LblRealizaDeporte'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblRealizaDeporte}
                    </div>
                  )}
                />
              </div>
            )}

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿Es alérgico a algún medicamento o alimento?
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='AlergiasMedAlim'
                    id='AlergiasMedAlim'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='AlergiasMedAlim'
                    id='AlergiasMedAlim'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {/*LblAlergiasMedAlim*/}

            {LblAlergiasMedAlim && (
              <div className='mb-3'>
                <label htmlFor='LblAlergiasMedAlim' className='form-label'>
                  ¿A qué le tiene alergia?
                </label>
                <Field
                  type='text'
                  autocomplete='off'
                  id='LblAlergiasMedAlim'
                  name='LblAlergiasMedAlim'
                  className={
                    !touched.LblAlergiasMedAlim
                      ? 'form-control'
                      : errors.LblAlergiasMedAlim
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Detonante de la alergia'
                />
                <ErrorMessage
                  name='LblAlergiasMedAlim'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblAlergiasMedAlim}
                    </div>
                  )}
                />
              </div>
            )}

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿Tiene o ha tenido su hijo algún trastorno emocional o mental?{' '}
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TrastornoMentalEmocional'
                    id='TrastornoMentalEmocional'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TrastornoMentalEmocional'
                    id='TrastornoMentalEmocional'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {/*LblTrastornoMentalEmocional */}

            {LblTrastornoMentalEmocional && (
              <div className='mb-3'>
                <label
                  htmlFor='LblTrastornoMentalEmocional'
                  className='form-label'>
                  Especifique
                </label>
                <Field
                  type='text'
                  autocomplete='off'
                  id='LblTrastornoMentalEmocional'
                  name='LblTrastornoMentalEmocional'
                  className={
                    !touched.LblTrastornoMentalEmocional
                      ? 'form-control'
                      : errors.LblTrastornoMentalEmocional
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique'
                />
                <ErrorMessage
                  name='LblTrastornoMentalEmocional'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblTrastornoMentalEmocional}
                    </div>
                  )}
                />
              </div>
            )}

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>¿Tiene dificultades en la escuela? </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='DificultadesEscolares'
                    id='DificultadesEscolares'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='DificultadesEscolares'
                    id='DificultadesEscolares'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'> ¿Respira por la boca? </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='RespiraPorBoca'
                    id='RespiraPorBoca'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='RespiraPorBoca'
                    id='RespiraPorBoca'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿Padece su hijo apnea del sueño (ronca)?{' '}
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='ApneaRoncar'
                    id='ApneaRoncar'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='ApneaRoncar'
                    id='ApneaRoncar'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿Ha observado a su hijo succionar su labio o alguno de sus
                dedos?{' '}
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='ChupaLabioDedos'
                    id='ChupaLabioDedos'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='ChupaLabioDedos'
                    id='ChupaLabioDedos'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {/*LblChupaLabioDedos*/}

            {LblChupaLabioDedos && (
              <div className='mb-3'>
                <label htmlFor='LblChupaLabioDedos' className='form-label'>
                  ¿Con que frecuencia?
                </label>
                <Field
                  type='text'
                  autocomplete='off'
                  id='LblChupaLabioDedos'
                  name='LblChupaLabioDedos'
                  className={
                    !touched.LblChupaLabioDedos
                      ? 'form-control'
                      : errors.LblChupaLabioDedos
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='frecuencia'
                />
                <ErrorMessage
                  name='LblChupaLabioDedos'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblChupaLabioDedos}
                    </div>
                  )}
                />
              </div>
            )}

            <label>
              ¿Su hijo padece o ha padecido alguna de las siguientes
              enfermedades?
            </label>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Asma </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Asma'
                    id='Asma'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Asma'
                    id='Asma'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Sarampión </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Sarampion'
                    id='Sarampion'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Sarampion'
                    id='Sarampion'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Fiebre Reumática </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='FiebreReumatica'
                    id='FiebreReumatica'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='FiebreReumatica'
                    id='FiebreReumatica'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Paladar Hendido </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='PaladarHendido'
                    id='PaladarHendido'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='PaladarHendido'
                    id='PaladarHendido'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Tos Ferina </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TosFerina'
                    id='TosFerina'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TosFerina'
                    id='TosFerina'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Poliomelitis </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Poliomelitis'
                    id='Poliomelitis'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Poliomelitis'
                    id='Poliomelitis'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Epilepsia </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Epilepsia'
                    id='Epilepsia'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Epilepsia'
                    id='Epilepsia'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Escarlatina </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Escarlatina'
                    id='Escarlatina'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Escarlatina'
                    id='Escarlatina'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Tuberculosis </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Tuberculosis'
                    id='Tuberculosis'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Tuberculosis'
                    id='Tuberculosis'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Enfermedad Cardiaca </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='EnfermedadCardiaca'
                    id='EnfermedadCardiaca'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='EnfermedadCardiaca'
                    id='EnfermedadCardiaca'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Varicela </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Varicela'
                    id='Varicela'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Varicela'
                    id='Varicela'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Paperas </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Paperas'
                    id='Paperas'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Paperas'
                    id='Paperas'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Hepatitis </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Hepatitis'
                    id='Hepatitis'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Hepatitis'
                    id='Hepatitis'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Difteria</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Difteria'
                    id='Difteria'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Difteria'
                    id='Difteria'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Tifoidea</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Tifoidea'
                    id='Tifoidea'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Tifoidea'
                    id='Tifoidea'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Enfermedad Renal</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='EnfermedadRenal'
                    id='EnfermedadRenal'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='EnfermedadRenal'
                    id='EnfermedadRenal'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Hemofilia</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Hemofilia'
                    id='Hemofilia'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Hemofilia'
                    id='Hemofilia'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Trastorno Hepático</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TrastornoHepatico'
                    id='TrastornoHepatico'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TrastornoHepatico'
                    id='TrastornoHepatico'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

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
              <div id='my-radio-group'>Reflujo</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Reflujo'
                    id='Reflujo'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='Reflujo'
                    id='Reflujo'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>Trastorno de Lenguaje</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TrastornoDeLenguaje'
                    id='TrastornoDeLenguaje'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TrastornoDeLenguaje'
                    id='TrastornoDeLenguaje'
                    value='No'
                  />
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
              <div id='my-radio-group'>
                ¿Se encuentra bajo algún tratamiento médico?
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TratamientosActivos'
                    id='TratamientosActivos'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TratamientosActivos'
                    id='TratamientosActivos'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿Toma su hijo algún medicamento actualmente?
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TomaMedicamentos'
                    id='TomaMedicamentos'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TomaMedicamentos'
                    id='TomaMedicamentos'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {/*LblTomaMedicamentos */}

            {LblTomaMedicamentos && (
              <div className='mb-3'>
                <label htmlFor='LblTomaMedicamentos' className='form-label'>
                  ¿Cuáles?
                </label>
                <Field
                  type='text'
                  autocomplete='off'
                  id='LblTomaMedicamentos'
                  name='LblTomaMedicamentos'
                  className={
                    !touched.LblTomaMedicamentos
                      ? 'form-control'
                      : errors.LblTomaMedicamentos
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Nombre de los medicamentos'
                />
                <ErrorMessage
                  name='LblTomaMedicamentos'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblTomaMedicamentos}
                    </div>
                  )}
                />
              </div>
            )}

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿La madre tomó medicamentos durante el embarazo?
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='MadreMedicamentoEmbarazo'
                    id='MadreMedicamentoEmbarazo'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='MadreMedicamentoEmbarazo'
                    id='MadreMedicamentoEmbarazo'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {/*MadreMedicamentoEmbarazo*/}
            {LblMadreMedicamentoEmbarazo && (
              <div className='mb-3'>
                <label
                  htmlFor='LblMadreMedicamentoEmbarazo'
                  className='form-label'>
                  ¿Cuáles?
                </label>
                <Field
                  type='text'
                  autocomplete='off'
                  id='LblMadreMedicamentoEmbarazo'
                  name='LblMadreMedicamentoEmbarazo'
                  className={
                    !touched.LblMadreMedicamentoEmbarazo
                      ? 'form-control'
                      : errors.LblMadreMedicamentoEmbarazo
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Nombre de los medicamentos'
                />
                <ErrorMessage
                  name='LblMadreMedicamentoEmbarazo'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblMadreMedicamentoEmbarazo}
                    </div>
                  )}
                />
              </div>
            )}

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿La madre sufrió algún accidente durante el embarazo?
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='AccidentesEmbarazo'
                    id='AccidentesEmbarazo'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='AccidentesEmbarazo'
                    id='AccidentesEmbarazo'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>El parto fue:</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TipoParto'
                    id='TipoParto'
                    value='Normal'
                  />
                  Normal
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TipoParto'
                    id='TipoParto'
                    value='Cesarea'
                  />
                  Cesarea
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TipoParto'
                    id='TipoParto'
                    value='Prematuro'
                  />
                  Prematuro
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='TipoParto'
                    id='TipoParto'
                    value='Complicado/Forceps'
                  />
                  Complicado/Fórceps
                </label>
                <br></br>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿En el nacimiento presentó alguna dificultad?
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='DificultadNacimiento'
                    id='DificultadNacimiento'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='DificultadNacimiento'
                    id='DificultadNacimiento'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {/*DificultadNacimiento*/}
            {LblDificultadNacimiento && (
              <div className='mb-3'>
                <label htmlFor='LblDificultadNacimiento' className='form-label'>
                  ¿Cuáles?
                </label>
                <Field
                  type='text'
                  autocomplete='off'
                  id='LblDificultadNacimiento'
                  name='LblDificultadNacimiento'
                  className={
                    !touched.LblDificultadNacimiento
                      ? 'form-control'
                      : errors.LblDificultadNacimiento
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique'
                />
                <ErrorMessage
                  name='LblDificultadNacimiento'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblDificultadNacimiento}
                    </div>
                  )}
                />
              </div>
            )}

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿Presentó alguna anomalía congénita (de nacimiento)?
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='AnomaliaCongenitaNacimiento'
                    id='AnomaliaCongenitaNacimiento'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='AnomaliaCongenitaNacimiento'
                    id='AnomaliaCongenitaNacimiento'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>
            {/*AnomaliaCongenitaNacimiento*/}
            {LblAnomaliaCongenitaNacimiento && (
              <div className='mb-3'>
                <label
                  htmlFor='LblAnomaliaCongenitaNacimiento'
                  className='form-label'>
                  ¿Cuáles?
                </label>
                <Field
                  type='text'
                  autocomplete='off'
                  id='LblAnomaliaCongenitaNacimiento'
                  name='LblAnomaliaCongenitaNacimiento'
                  className={
                    !touched.LblAnomaliaCongenitaNacimiento
                      ? 'form-control'
                      : errors.LblAnomaliaCongenitaNacimiento
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique'
                />
                <ErrorMessage
                  name='LblAnomaliaCongenitaNacimiento'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblAnomaliaCongenitaNacimiento}
                    </div>
                  )}
                />
              </div>
            )}

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>
                ¿Su hijo ha sido anestesiado anteriormente?
              </div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='HaSidoAnestesiado'
                    id='HaSidoAnestesiado'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='HaSidoAnestesiado'
                    id='HaSidoAnestesiado'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            <div className='mb-4 mt-2'>
              <div id='my-radio-group'>¿Tuvo alguna reacción adversa?</div>
              <div role='group' aria-labelledby='my-radio-group'>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='ReaccionAnestesia'
                    id='ReaccionAnestesia'
                    value='Si'
                  />
                  Si
                </label>
                <br></br>
                <label>
                  <Field
                    type='radio'
                    className='form-check-input mx-2'
                    name='ReaccionAnestesia'
                    id='ReaccionAnestesia'
                    value='No'
                  />
                  No
                </label>
              </div>
            </div>

            {/*ReaccionAnestesia */}
            {LblReaccionAnestesia && (
              <div className='mb-3'>
                <label htmlFor='LblReaccionAnestesia' className='form-label'>
                  Especifique
                </label>
                <Field
                  type='text'
                  autocomplete='off'
                  id='LblReaccionAnestesia'
                  name='LblReaccionAnestesia'
                  className={
                    !touched.LblReaccionAnestesia
                      ? 'form-control'
                      : errors.LblReaccionAnestesia
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Especifique'
                />
                <ErrorMessage
                  name='LblReaccionAnestesia'
                  component={() => (
                    <div className='invalid-feedback'>
                      {errors.LblReaccionAnestesia}
                    </div>
                  )}
                />
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
