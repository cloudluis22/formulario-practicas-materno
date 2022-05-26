import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Formulario } from './views/Formulario';
import { RegistrarPaciente } from './views/RegistrarPaciente';
import { Pacientes } from './views/Pacientes';
import { ImprimirPaciente } from './views/ImprimirPaciente';
import { AdministrarConsultas } from './views/AdministrarConsultas';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/pacientes' element={<Pacientes />} />
        <Route path='/edicion/:id' element={<Formulario />} />
        <Route path='/registro' element={<RegistrarPaciente />} />
        <Route path='/imprimir/:id' element={<ImprimirPaciente />} />
        <Route path='/administrar-consultas/:id' element={<AdministrarConsultas />} />
        <Route path='*' element={<Navigate to='/pacientes' replace />} />
      </Routes>
    </Router>
  );
};
