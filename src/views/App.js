import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Formulario } from './Formulario';
import { MainForm } from './MainForm';
import { Pacientes } from './Pacientes';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/pacientes' element={<Pacientes />} />
        <Route path='/edicion/:id' element={<Formulario />} />
        <Route path='/registro' element={<MainForm />} />
        <Route path='*' element={<Navigate to='/pacientes' replace />} />
      </Routes>
    </Router>
  );
};
