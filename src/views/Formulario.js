import React from 'react';
import { useParams } from 'react-router-dom';

export const Formulario = () => {
  const { id } = useParams();

  return (
    <div>
      <h1> Formulario General </h1>
      <p> El ID del paciente es: {id} </p>
    </div>
  );
};
