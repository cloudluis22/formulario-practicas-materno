import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const AdministrarConsultas = () => {
  const { id } = useParams();
  const [Data, setData] = useState({
    loading: true,
    data: [],
    ok: false,
  });
  useEffect(() => {
    setTimeout(() => {
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
    }, 1000);
  }, [id]);
   

  return (
    <div className='bcg-administrar-consultas '>
      <h1 className='text-center mt-3 animate__animated animate__fadeIn'>
        Administrador de Consultas
      </h1>
      <h2 className='text-center animate__animated animate__fadeIn'> Paciente: {Data.data.NombrePaciente} </h2>
      
      <div>

        <div className='row px-5'>
            <div className='col-8'> 
                <table className='table table-striped table-responsive animate__animated animate__fadeInUp flex-grow-1'>
                    <thead>
                        <tr>
                            <th className='col'> Fecha </th>
                            <th className='col'> Área </th>
                            <th className='col'> Progreso </th>
                            <th className='col'> Acciones </th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className='col-4'>
                <div className='card'>
                    <h4 className='text-center'> Consulta </h4>
                    <form className='px-4'>

                        <label for="fecha" class="form-label"> Fecha de la consulta </label>
                        <input type="date" class="form-control" name="fecha" />

                        <label for="area" class="form-label"> Área </label>
                        <input type="text" class="form-control" name="area" />

                    </form>
                </div>
            </div>
        </div>  


      </div>

    </div>
  )
}
