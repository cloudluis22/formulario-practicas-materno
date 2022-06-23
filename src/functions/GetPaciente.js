import axios from 'axios';
import config from '../config.json';

const GetPaciente = (id) => {

    const paciente = { };

    axios.get(`${config.server_adress}/api/v1/obtener-paciente-completo/${id}`)
        .then((response) => {
            paciente = {...paciente, infoPaciente : response.data.paciente[0]}
        })

   return paciente;

}
