import axios from 'axios';

const GetPaciente = (id) => {

    const paciente = { };

    axios.get(`http://localhost:3001/api/v1/obtener-paciente-completo/${id}`)
        .then((response) => {
            paciente = {... paciente, infoPaciente : response.data.paciente[0]}
        })

   return paciente;

}
