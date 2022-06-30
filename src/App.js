import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from 'react-router-dom';
import { Formulario } from './views/Formulario';
import { RegistrarPaciente } from './views/RegistrarPaciente';
import { Pacientes } from './views/Pacientes';
import { ImprimirPaciente } from './views/ImprimirPaciente';
import { AdministrarConsultas } from './views/AdministrarConsultas';
import { TratamientoDental } from './views/TratamientoDental';

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/pacientes' element={<Pacientes />} />
        <Route path='/edicion/:id' element={<Formulario />} />
        <Route path='/registro' element={<RegistrarPaciente />} />
        <Route path='/imprimir/:id' element={<ImprimirPaciente />} />
        <Route path='/administrar-consultas/:id' element={<AdministrarConsultas />} />
        <Route path='/evolucion-paciente/:id' element={<AdministrarConsultas />} />
        <Route path='/tratamiento-dental/:id' element={<TratamientoDental />} />
        <Route path='*' element={<Navigate to='/pacientes' replace />} />
      </Routes>
    </HashRouter>
  );
};
