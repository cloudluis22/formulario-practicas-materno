import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Formulario } from './Formulario';
import { Pacientes } from './Pacientes';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/pacientes' element={<Pacientes />} />
        <Route path='/registro/:id' element={<Formulario />} />
        <Route path='/registro' element={<Formulario />} />
        <Route path='*' element={<Navigate to='/pacientes' replace />} />
      </Routes>
    </Router>
  );
};
