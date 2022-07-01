import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from '../hooks/useForm';
import uniqid from 'uniqid';
import moment from 'moment'
import 'moment/locale/es';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faPrint,
  faTooth
} from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import config from '../config.json';

export const AdministrarConsultas = () => {
  moment.locale('es');
  const { id } = useParams();
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  const [values, handleInputChange, reset, setForm] = useForm({
    Fecha: '',
    Area: '',
    Progreso: ''
  });

  let navigate = useNavigate();

 const imprimirConsultas = () => {
    const doc = new jsPDF();
    autoTable(doc, {html: '#tabla-consultas'});
    doc.text(`Paciente: ${Data.data.NombrePaciente}`, doc.internal.pageSize.getWidth() / 2, 10, null, 'center');
    doc.save('consultas.pdf');
  }

  const volverMenuPacientes = () => {
    navigate('/pacientes')
  }

  const irMenuTratamientoDental = () => {
    navigate(`/tratamiento-dental/${id}`)
  }

  const { Fecha, Area, Progreso } = values;

  const [consultas, setConsultas] = useState([]);

  const [editMode, setEditMode] = useState(false);
  const [consultaActual, setConsultaActual] = useState({})

  const obtenerPacientes = () => {
    axios
    .get(`${config.server_adress}/api/v1/consultas/${id}`)
    .then((response) => {
      setConsultas(response.data.consultas);
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
      .get(`${config.server_adress}/api/v1/consultas/${id}`)
      .then((response) => {
        setConsultas(response.data.consultas);
      })

      
    } catch (error) {
      setData({
        loading: false,
        data: [],
        ok: false,
      });

      console.log(error);

    }

  }, [id]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const IdConsulta = uniqid();

    if( Fecha === '' || Area === '' || Progreso === '') {
      Swal.fire({
        icon: 'error',
        title: 'Operacion Fallida',
        text: 'Por favor, asegurese de llenar todos los campos correspondientes antes de crear la consulta.',
      })

      return;
    }

    axios.post(`${config.server_adress}/api/v1/consultas/${id}`, {
      IdConsulta,
      IdPaciente: id,
      Fecha: moment(Fecha).format('DD/MM/YYYY'),
      Area,
      Progreso
    })
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Operación Exitosa',
        text: 'Consulta agregada exitosamente.',
      })
      obtenerPacientes();
      reset();
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Operacion Fallida',
        text: 'Algo salió mal, intenta más tarde o contacta un administrador',
      })
    })

  }

  const handleDelete = (evt) => {
    evt.preventDefault();
    Swal.fire({
      title: '¿Está seguro que desea borrar esta consulta?',
      text: 'Estos cambios no se pueden deshacer.',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Sí, deseo eliminar esta consulta',
      denyButtonText: `No, conserva esta consulta`,
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(`${config.server_adress}/api/v1/consultas/${id}/${consultaActual.IdConsulta}`)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Operación Exitosa',
            text: 'Consulta eliminada exitosamente.',
          })
          obtenerPacientes();
          setEditMode(false);
          setConsultaActual({})
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Operacion Fallida',
            text: 'Algo salió mal, intenta más tarde o contacta un administrador',
          })
        })
    }});

  }

  const handleDescartar = () => {
    setEditMode(false);
    setConsultaActual({});
    reset();
  }

  const handleEdit = (editValues) => {

    const fecha = editValues.Fecha.split('/');
    const fechaFormateada = `${fecha[2]}-${fecha[1]}-${fecha[0]}`

    setForm({
      Fecha: fechaFormateada,
      Area: editValues.Area,
      Progreso: editValues.Progreso
    })
    setConsultaActual({
      IdConsulta: editValues.IdConsulta,
      Fecha: fechaFormateada,
      Area: editValues.Area,
      Progreso: editValues.Progreso
    })
    setEditMode(true);

  }

  const handleSubmitEdit = (evt) => {
    evt.preventDefault();

    if( Fecha === consultaActual.Fecha && Area === consultaActual.Area && Progreso === consultaActual.Progreso) {
      Swal.fire({
        icon: 'error',
        title: 'Operacion Fallida',
        text: 'Por favor, asegurese de realizar cambios para poder modificar la consulta, de lo contrario descarte los cambios.',
      })
      
      return;
    }

    Swal.fire({
      title: '¿Está seguro que desea modificar esta consulta?',
      text: 'Estos cambios no se pueden deshacer.',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Sí, deseo modificar esta consulta',
      denyButtonText: `No, conserva esta consulta`,
    }).then((result) => {
      if (result.isConfirmed) {

        axios.put(`${config.server_adress}/api/v1/consultas/${id}`, {
          IdConsulta: consultaActual.IdConsulta,
          Fecha: moment(Fecha).format('DD/MM/YYYY'),
          Area,
          Progreso
        })
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Operación Exitosa',
            text: 'Consulta modificada exitosamente.',
          })
          obtenerPacientes();
          setEditMode(false);
          setConsultaActual({})
          reset();
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Operacion Fallida',
            text: 'Algo salió mal, intenta más tarde o contacta un administrador',
          })
        })
    }});

  }
   

  return (
    <div className='bcg-administrar-consultas overflow-auto'>
      
      <h1 className='text-center mt-3 animate__animated animate__fadeIn'>
        Evolución del Paciente
      </h1>
      <h2 className='text-center animate__animated animate__fadeIn'> Paciente: {Data.data.NombrePaciente} </h2>

      <button className='btn btn-primary btn-regresar-consultas animate__animated animate__fadeIn' onClick={volverMenuPacientes}> <FontAwesomeIcon icon={faArrowLeft} /> Regresar a Menu Pacientes </button>

      
      <div>

        <div className='row px-5'>
            <div className='col-8'> 
                <table className='table table-striped table-responsive table-hover animate__animated animate__fadeInUp flex-grow-1' id='tabla-consultas'>
                    <thead>
                        <tr>
                            <th className='col'> Fecha </th>
                            <th className='col'> Área </th>
                            <th className='col'> Progreso </th>
                        </tr>
                    </thead>
                    <tbody>
                     {consultas.map((consulta) => {
                       return (
                         <tr className='fila' key={consulta.IdConsulta} onClick={() => { handleEdit(consulta) }}> 
                           <td> {consulta.Fecha} </td>
                           <td> {consulta.Area} </td>
                           <td> {consulta.Progreso} </td>
                         </tr>
                       )
                     })}
                    </tbody>
                </table>
            </div>

            <div className='col-4 d-flex flex-column'>
                <div className='card'>
                    <h4 className='text-center mt-3'> Consulta </h4>
                    <form className='px-4 pb-3 d-flex flex-column align-items-center'>

                        <label htmlFor="Fecha" className="form-label"> Fecha de la consulta </label>
                        <input type="date" className="form-control" name="Fecha" value={Fecha} onChange={handleInputChange} />

                        <label htmlFor="Area" className="form-label"> Área </label>
                        <input type="text" className="form-control" name="Area" value={Area} onChange={handleInputChange} />

                        <label htmlFor="Progreso" className="form-label"> Progreso </label>
                        <textarea name='Progreso' className='form-control' rows='6' value={Progreso} onChange={handleInputChange} />

                        <div className='d-flex flex-row'>
                         { editMode && <button className='btn me-2 btn-danger mt-3' onClick={handleDelete}> Eliminar Consulta </button> } 
                         { editMode && <button className='btn me-2 btn-success mt-3' onClick={handleSubmitEdit}> Modificar Consulta </button>  } 
                         { editMode && <button className='btn me-2 btn-info mt-3' onClick={handleDescartar}> Descartar Cambios </button> } 
                         { !editMode && <button className='btn me-2 btn-success mt-3' onClick={handleSubmit}> Agregar Consulta </button> }
                        </div>

                    </form>
                </div>
                <button className='btn btn-primary mt-3 align-self-center' onClick={imprimirConsultas}> Imprimir Consultas <FontAwesomeIcon icon={faPrint} /> </button>
                <button className='btn btn-primary mt-1 align-self-center' onClick={irMenuTratamientoDental}> Tratamiento de Dientes <FontAwesomeIcon icon={faTooth} /> </button>
            </div>
        </div>  
      </div>
    </div>
  )
}
