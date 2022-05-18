import { useEffect, useState } from 'react';
import axios from 'axios';

const state = {
  ok: false,
  loading: true,
  data: [],
};

export const useGetInfo = (id) => {
  const [dataState, setDataState] = useState(state);

  useEffect(() => {

    const fetchPacienteInfo = async () => {

        let resultado = [];

        try {
            
            await axios.get(`http://localhost:3001/api/v1/obtener-paciente-completo/${id}`)
                .then((response) => {
                    resultado.push(response.data.paciente[0]);
                });

            await axios.get(`http://localhost:3001/api/v1/alimentacion/${id}`)
            .then((response) => {
                resultado.push(response.data.alimentacion);
            });

            await axios.get(`http://localhost:3001/api/v1/alimentacion-bebe/${id}`)
            .then((response) => {
                resultado.push(response.data.alimentacionbebe);
            });

            await axios.get(`http://localhost:3001/api/v1/antecedentes-familiares/${id}`)
            .then((response) => {
                resultado.push(response.data.antecedentesfamiliares);
            });

            await axios.get(`http://localhost:3001/api/v1/antecedentes-personales/${id}`)
            .then((response) => {
                resultado.push(response.data.antecedentespersonales);
            });

            await axios.get(`http://localhost:3001/api/v1/erupcion-y-denticion/${id}`)
            .then((response) => {
                resultado.push(response.data.erupcionydenticion);
            });

            await axios.get(`http://localhost:3001/api/v1/habitos-higiene/${id}`)
            .then((response) => {
                resultado.push(response.data.habitoshigiene);
            });

            await axios.get(`http://localhost:3001/api/v1/habitos-perniciosos/${id}`)
            .then((response) => {
                resultado.push(response.data.habitosperniciosos);
            });

            await axios.get(`http://localhost:3001/api/v1/medio-bucal-general/${id}`)
            .then((response) => {
                resultado.push(response.data.mediobucalgeneral);
            });

            await axios.get(`http://localhost:3001/api/v1/oclusion-y-alineamiento/${id}`)
            .then((response) => {
                resultado.push(response.data.oclusionyalineamiento);
            });

            await axios.get(`http://localhost:3001/api/v1/tejidos-blandos/${id}`)
            .then((response) => {
                resultado.push(response.data.tejidosblandos);
            });

            setDataState({
                ok: true,
                loading: false,
                data: resultado 
            })
    
        } catch (error) {
            console.error(error);
        }
    }

    fetchPacienteInfo();

  }, [id])
  
  return {
    dataState
  };
};