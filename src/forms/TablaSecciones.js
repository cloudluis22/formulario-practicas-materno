import React from 'react';

export const TablaSecciones = ({ setFormIndex }) => {
  return (
    <div
      className='card px-4'
      style={{
        width: '550px',
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '550px',
      }}>
      <h1 className='text-center mt-2'> Secciones </h1>
      <h5 className='text-center'>
        {' '}
        Seleccione una sección para editar o visualizar{' '}
      </h5>
      <p className='mt-1 font-lighter text-center fst-italic fs-6'>
        {' '}
        Nota: Solo se pueden editar y registrar información hasta 24 horas
        máximo de haber registrado un paciente.{' '}
      </p>
      <table className='table table-light table-borderless'>
        <tr className='gy-5'>
          <td> Información</td>
          <td>
            <button
              className='btn btn-outline-primary text-nowrap btn-sm me-2 ms-2 mb-4'
              onClick={() => {
                setFormIndex(1);
              }}>
              {' '}
              Editar/Añadir Información{' '}
            </button>
          </td>
          <td>
            <button className='btn btn-outline-info text-nowrap btn-sm mb-4'>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td> Alimentación </td>
          <td>
            <button
              className='btn btn-outline-primary text-nowrap btn-sm ms-2 mb-4'
              onClick={() => {
                setFormIndex(2);
              }}>
              {' '}
              Editar/Añadir Información{' '}
            </button>
          </td>
          <td>
            <button className='btn btn-outline-info text-nowrap btn-sm mb-4'>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td> Hábitos de Higiene </td>
          <td>
            <button
              className='btn btn-outline-primary text-nowrap btn-sm ms-2 mb-4'
              onClick={() => {
                setFormIndex(3);
              }}>
              {' '}
              Editar/Añadir Información{' '}
            </button>
          </td>
          <td>
            <button className='btn btn-outline-info text-nowrap btn-sm mb-4'>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td> Antecedentes Personales </td>
          <td>
            <button
              className='btn btn-outline-primary text-nowrap btn-sm ms-2 mb-4'
              onClick={() => {
                setFormIndex(4);
              }}>
              {' '}
              Editar/Añadir Información{' '}
            </button>
          </td>
          <td>
            <button className='btn btn-outline-info text-nowrap btn-sm mb-4'>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td> Antecedentes Familiares </td>
          <td>
            <button
              className='btn btn-outline-primary text-nowrap btn-sm ms-2 mb-4'
              onClick={() => {
                setFormIndex(5);
              }}>
              {' '}
              Editar/Añadir Información{' '}
            </button>
          </td>
          <td>
            <button className='btn btn-outline-info text-nowrap btn-sm mb-4'>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td> Oclusión y Alineamiento </td>
          <td>
            <button
              className='btn btn-outline-primary text-nowrap btn-sm ms-2 mb-4'
              onClick={() => {
                setFormIndex(6);
              }}>
              {' '}
              Editar/Añadir Información{' '}
            </button>
          </td>
          <td>
            <button className='btn btn-outline-info text-nowrap btn-sm mb-4'>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td> Tejidos Blandos </td>
          <td>
            <button
              className='btn btn-outline-primary text-nowrap btn-sm ms-2 mb-4'
              onClick={() => {
                setFormIndex(7);
              }}>
              {' '}
              Editar/Añadir Información{' '}
            </button>
          </td>
          <td>
            <button className='btn btn-outline-info text-nowrap btn-sm mb-4'>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td> Habitos Perniciosos </td>
          <td>
            <button
              className='btn btn-outline-primary text-nowrap btn-sm ms-2 mb-4'
              onClick={() => {
                setFormIndex(8);
              }}>
              {' '}
              Editar/Añadir Información{' '}
            </button>
          </td>
          <td>
            <button className='btn btn-outline-info text-nowrap btn-sm mb-4'>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td> Erupción y Dentición </td>
          <td>
            <button
              className='btn btn-outline-primary text-nowrap btn-sm ms-2 mb-4'
              onClick={() => {
                setFormIndex(9);
              }}>
              {' '}
              Editar/Añadir Información{' '}
            </button>
          </td>
          <td>
            <button className='btn btn-outline-info text-nowrap btn-sm mb-4'>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td> Medio Bucal General </td>
          <td>
            <button
              className='btn btn-outline-primary text-nowrap btn-sm ms-2 mb-4'
              onClick={() => {
                setFormIndex(10);
              }}>
              {' '}
              Editar/Añadir Información{' '}
            </button>
          </td>
          <td>
            <button className='btn btn-outline-info text-nowrap btn-sm mb-4'>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td> Amamantación </td>
          <td>
            <button
              className='btn btn-outline-primary text-nowrap btn-sm ms-2 mb-4'
              onClick={() => {
                setFormIndex(11);
              }}>
              {' '}
              Editar/Añadir Información{' '}
            </button>
          </td>
          <td>
            <button className='btn btn-outline-info text-nowrap btn-sm mb-4'>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};
