import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from '../hooks/useForm';

export const AdministrarConsultas = () => {
  const { id } = useParams();
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });

  const [values, handleInputChange, reset] = useForm({
    fecha: '',
    area: '',
    progreso: ''
  });

  const { fecha, area, progreso } = values;

  const [consultas, setConsultas] = useState([]);


  useEffect(() => {
    
    axios
      .get(`http://localhost:3001/api/v1/obtener-paciente/${id}`)
      .then((response) => {
        setData({
          loading: false,
          data: { NombrePaciente: response.data.paciente[0].NombrePaciente, },
          ok: false,
        });
      })
      .catch((error) => {
        
        setData({
          loading: false,
          data: [],
          ok: false,
        });
      });

  }, [id]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const consulta = {
      fecha,
      area,
      progreso
    }

    setConsultas([...consultas, consulta])

    reset();
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
                         <tr onClick={() => {
                           console.log(consulta)
                          }}> 
                           <td> {consulta.fecha} </td>
                           <td> {consulta.area} </td>
                           <td> {consulta.progreso} </td>
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

                        <label for="fecha" className="form-label"> Fecha de la consulta </label>
                        <input type="date" className="form-control" name="fecha" value={fecha} onChange={handleInputChange} />

                        <label for="area" className="form-label"> Área </label>
                        <input type="text" className="form-control" name="area" value={area} onChange={handleInputChange} />

                        <label for="progreso" className="form-label"> Progreso </label>
                        <textarea name='progreso' className='form-control' rows='6' value={progreso} onChange={handleInputChange} />

                        <button className='btn btn-success mt-3' onClick={handleSubmit}> Agregar Consulta </button>

                    </form>
                </div>
            </div>
        </div>  


      </div>

    </div>
  )
}
