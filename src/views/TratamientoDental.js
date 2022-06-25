import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../config.json';

export const TratamientoDental = () => {

    const [Data, setData] = useState({
        loading: true,
        data: [],
        ok: false,
    });

  const { id } = useParams();

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


      // ADAPTAR A TRATAMIENTO DENTAL
    //   axios
    //   .get(`${config.server_adress}/api/v1/consultas/${id}`)
    //   .then((response) => {
    //     setConsultas(response.data.consultas);
    //   })

      
    } catch (error) {
      setData({
        loading: false,
        data: [],
        ok: false,
      });

      console.log(error);

    }

  }, [id]);

  return (
    <div className='bcg-tratamiento-dental'>
      <h1 className='text-white text-center mt-3 animate__animated animate__fadeIn'>
        Tratamiento Dental
      </h1>
      <h2 className='text-center animate__animated animate__fadeIn'> Paciente: {Data.data.NombrePaciente} </h2>
    </div>
  )
}