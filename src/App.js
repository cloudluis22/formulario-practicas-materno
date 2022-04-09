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

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/pacientes' element={<Pacientes />} />
        <Route path='/edicion/:id' element={<Formulario />} />
        <Route path='/registro' element={<RegistrarPaciente />} />
        <Route path='*' element={<Navigate to='/pacientes' replace />} />
      </Routes>
    </Router>
  );
};
