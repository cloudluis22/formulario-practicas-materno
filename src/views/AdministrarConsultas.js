import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from '../hooks/useForm';
import uniqid from 'uniqid';

export const AdministrarConsultas = () => {
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

  const { Fecha, Area, Progreso } = values;

  const [consultas, setConsultas] = useState([]);

  const [editMode, setEditMode] = useState(false);
  const [consultaActual, setConsultaActual] = useState({})

  const obtenerPacientes = () => {
    axios
    .get(`http://localhost:3001/api/v1/consultas/${id}`)
    .then((response) => {
      setConsultas(response.data.consultas);
    })
  }


  useEffect(() => {
    
    try {

      axios
      .get(`http://localhost:3001/api/v1/obtener-paciente/${id}`)
      .then((response) => {
        setData({
          loading: false,
          data: { NombrePaciente: response.data.paciente[0].NombrePaciente, },
          ok: false,
        });
      })

      axios
      .get(`http://localhost:3001/api/v1/consultas/${id}`)
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
    axios.post(`http://localhost:3001/api/v1/consultas/${id}`, {
      IdConsulta,
      IdPaciente: id,
      Fecha,
      Area,
      Progreso
    })
    .then(() => {
      obtenerPacientes();
    })

    reset();
  }

  const handleDelete = (evt) => {
    evt.preventDefault();
    axios.delete(`http://localhost:3001/api/v1/consultas/${id}/${consultaActual.IdConsulta}`)
    .then(() => {
      obtenerPacientes();
      setEditMode(false);
      setConsultaActual({})
    })
  }

  const handleDescartar = () => {
    setEditMode(false);
    setConsultaActual({});
    reset();
  }

  const handleEdit = (editValues) => {
    setForm({
      Fecha: editValues.Fecha,
      Area: editValues.Area,
      Progreso: editValues.Progreso
    })
    setConsultaActual({
      IdConsulta: editValues.IdConsulta,
      Fecha: editValues.Fecha,
      Area: editValues.Area,
      Progreso: editValues.Progreso
    })
    setEditMode(true);
  }

  const handleSubmitEdit = (evt) => {
    evt.preventDefault();
    axios.put(`http://localhost:3001/api/v1/consultas/${id}`, {
      IdConsulta: consultaActual.IdConsulta,
      Fecha,
      Area,
      Progreso
    })
    .then(() => {
      obtenerPacientes();
      reset();
    })

  }
   

  return (
    <div className='bcg-administrar-consultas '>
      <h1 className='text-center mt-3 animate__animated animate__fadeIn'>
        Administrador de Consultas
      </h1>
      <h2 className='text-center animate__animated animate__fadeIn'> Paciente: {Data.data.NombrePaciente} </h2>
      
      <div>

        <div className='row px-5'>
            <div className='col-8'> 
                <table className='table table-striped table-responsive table-hover animate__animated animate__fadeInUp flex-grow-1'>
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

            <div className='col-4'>
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
            </div>
        </div>  


      </div>

    </div>
  )
}
