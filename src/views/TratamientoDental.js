import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../config.json';
import { Diente } from '../components/Diente';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import uniqid from 'uniqid';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

export const TratamientoDental = () => {

  const navigate = useNavigate();

    const [Data, setData] = useState({
        loading: true,
        data: [],
        ok: false,
    });

    const [infoDienteActual, setInfoDienteActual] = useState({})
    const [dienteSeleccionado, setDienteSeleccionado] = useState(0);
    const [editMode, setEditMode] = useState(false);

    const [values, handleInputChange, reset, setForm] = useForm({
      EstadoDiente: '',
    });

    const { EstadoDiente} = values;


  const { id } = useParams();

  const volverMenuEvolucion = () => {
    navigate(`/evolucion-paciente/${id}`)
  }

  const handleSubmit = (evt) => {

    const idEstado = uniqid();

    evt.preventDefault();
    axios.post(`${config.server_adress}/api/v1/tratamiento-dental/${id}/${infoDienteActual.NumeroDiente}`, {
      EstadoDiente: EstadoDiente,
      IdEstado: idEstado
    })
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Operación Exitosa',
        text: 'Estado de Diente agregada exitosamente.',
      })
      .then(() => {
        window.location.reload();
      })
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Operación Fallida',
        text: 'Algo salió mal, intenta más tarde o contacta un administrador.',
      })
      console.log(error);
    })
  }

  const handleEdit = (evt) => {
    evt.preventDefault();
    axios.put(`${config.server_adress}/api/v1/tratamiento-dental/${id}/${infoDienteActual.NumeroDiente}`, {
      EstadoDiente: EstadoDiente,
      IdEstado: infoDienteActual.IdEstado
    })
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Operación Exitosa',
        text: 'Estado de Diente editado exitosamente.',
      })
      .then(() => {
        window.location.reload();
      })
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Operación Fallida',
        text: 'Algo salió mal, intenta más tarde o contacta un administrador.',
      })
    })
  }

  useEffect(() => {
    
    try {

      axios
      .get(`${config.server_adress}/api/v1/obtener-paciente/${id}`)
      .then((response) => {
        setData({
          loading: false,
          data: { NombrePaciente: response.data.paciente[0].NombrePaciente, },
          ok: false,
        });
      })

      axios
      .get(`${config.server_adress}/api/v1/tratamiento-dental/${id}/${infoDienteActual.NumeroDiente}`)
      .then((response) => {

        if(response.data.odontograma.length > 0) {
          setEditMode(true);
          setForm({
            EstadoDiente: response.data.odontograma[0].EstadoDiente
          })

          setInfoDienteActual({
            NumeroDiente: dienteSeleccionado,
            IdEstado: response.data.odontograma[0].IdEstado
          })
          
        } else {
          setEditMode(false);
          setInfoDienteActual({
            NumeroDiente: dienteSeleccionado,
          })
          reset();
        }
      })

    } catch (error) {
      setData({
        loading: false,
        data: [],
        ok: false,
      });
    }

  }, [id, dienteSeleccionado, infoDienteActual.NumeroDiente]);

  return (
    <div className='bcg-tratamiento-dental'>
      <h1 className='text-white text-center mt-3 animate__animated animate__fadeIn'>
        Tratamiento Dental
      </h1>
      <h2 className='text-center animate__animated animate__fadeIn'> Paciente: {Data.data.NombrePaciente} </h2>
      <h3 className='text-center animate__animated animate__fadeIn'> Seleccione un diente para editar su estado actual </h3>

      <button className='btn btn-primary btn-regresar-consultas animate__animated animate__fadeIn' onClick={volverMenuEvolucion}> <FontAwesomeIcon icon={faArrowLeft} /> Regresar a Menu Evolución </button>

      <div className='row px-5'>

        <div className='col-8'>

          <div className='d-flex flex-column align-items-center justify-content-center'>


            <div className='d-flex flex-row'>
                
              <div className='justify-content-end d-flex me-3' onCl>

                <Diente Numero={18} ID={0} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={17} ID={1} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={16} ID={2} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={15} ID={3} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={14} ID={4} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={13} ID={5} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={12} ID={6} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={11} ID={7} DienteSeleccionado={setDienteSeleccionado} /> 

              </div>

              <div className='justify-content-end d-flex'>

                <Diente Numero={21} ID={8} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={22} ID={9} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={23} ID={10} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={24} ID={11} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={25} ID={12} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={26} ID={13} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={27} ID={14} DienteSeleccionado={setDienteSeleccionado} />
                <Diente Numero={28} ID={15} DienteSeleccionado={setDienteSeleccionado} /> 

              </div>
              
            </div>

            <div className='d-flex flex-row'>
                
                <div className='justify-content-end d-flex me-3'>
  
                  <Diente Numero={55} ID={16} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={54} ID={17} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={53} ID={18} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={52} ID={19} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={51} ID={20} DienteSeleccionado={setDienteSeleccionado}/>

                </div>
  
                <div className='justify-content-end d-flex'>
  
                  <Diente Numero={61} ID={21} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={62} ID={22} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={63} ID={23} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={64} ID={24} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={65} ID={25} DienteSeleccionado={setDienteSeleccionado} />
  
                </div>
                
              </div>

              
            <div className='d-flex flex-row'>
                
                <div className='justify-content-end d-flex me-3'>
  
                  <Diente Numero={85} ID={26} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={84} ID={27} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={83} ID={28} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={82} ID={29} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={81} ID={30} DienteSeleccionado={setDienteSeleccionado} />

                </div>
  
                <div className='justify-content-end d-flex'>
  
                  <Diente Numero={71} ID={31} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={72} ID={32} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={73} ID={33} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={74} ID={34} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={75} ID={35} DienteSeleccionado={setDienteSeleccionado} />
  
                </div>

              </div>

              <div className='d-flex flex-row'>
                
                <div className='justify-content-end d-flex me-3'>
  
                  <Diente Numero={48} ID={36} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={47} ID={37} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={46} ID={38} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={45} ID={39} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={44} ID={40} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={43} ID={41} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={42} ID={42} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={41} ID={43} DienteSeleccionado={setDienteSeleccionado} />

                </div>
  
                <div className='justify-content-end d-flex'>
  
                  <Diente Numero={31} ID={44} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={32} ID={45} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={33} ID={46} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={34} ID={47} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={35} ID={48} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={36} ID={49} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={37} ID={50} DienteSeleccionado={setDienteSeleccionado} />
                  <Diente Numero={38} ID={51} DienteSeleccionado={setDienteSeleccionado} />
  
                </div>
                
              </div>

          </div>


        </div>

        <div className='col-4 d-flex flex-column'>
        <div className='card'>
                    <h4 className='text-center mt-3'> Odontograma </h4>
                    <form className='px-4 pb-3 d-flex flex-column align-items-center'>

                        <label htmlFor="EstadoDiente" className="form-label"> Estado del Diente: </label>
                        <textarea name='EstadoDiente' className='form-control' rows='6' onChange={handleInputChange} value={EstadoDiente} />
                        {!editMode && <button className='btn me-2 btn-success mt-3' onClick={handleSubmit}> Agregar Estado del Diente </button>}
                        { editMode && <button className='btn me-2 btn-success mt-3' onClick={handleEdit}> Editar Estado del Diente </button>}
                    </form>
                </div>
        </div>

      </div>

    </div>
  )
}