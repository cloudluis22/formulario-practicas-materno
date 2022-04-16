import React from 'react';
import modalValues from '../ModalValues';

export const TablaSecciones = ({
  setFormIndex,
  setOpenModal,
  setCurrentModal,
}) => {
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
          <td className='text-light'> Información</td>
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
          <td className='text-light'>
            <button
              className='btn btn-outline-info text-nowrap btn-sm mb-4'
              onClick={() => {
                setOpenModal(true);
                setCurrentModal(modalValues.informacion);
              }}>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td className='text-light'> Alimentación </td>
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
            <button
              className='btn btn-outline-info text-nowrap btn-sm mb-4'
              onClick={() => {
                setOpenModal(true);
                setCurrentModal(modalValues.alimentacion);
              }}>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td className='text-light'> Hábitos de Higiene </td>
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
            <button
              className='btn btn-outline-info text-nowrap btn-sm mb-4'
              onClick={() => {
                setOpenModal(true);
                setCurrentModal(modalValues.habitosDeHigiene);
              }}>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td className='text-light'> Antecedentes Personales </td>
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
            <button
              className='btn btn-outline-info text-nowrap btn-sm mb-4'
              onClick={() => {
                setOpenModal(true);
                setCurrentModal(modalValues.antecedentesPersonales);
              }}>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td className='text-light'> Antecedentes Familiares </td>
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
            <button
              className='btn btn-outline-info text-nowrap btn-sm mb-4'
              onClick={() => {
                setOpenModal(true);
                setCurrentModal(modalValues.antecedentesFamiliares);
              }}>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td className='text-light'> Oclusión y Alineamiento </td>
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
            <button
              className='btn btn-outline-info text-nowrap btn-sm mb-4'
              onClick={() => {
                setOpenModal(true);
                setCurrentModal(modalValues.oclusionAlineamiento);
              }}>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td className='text-light'> Tejidos Blandos </td>
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
            <button
              className='btn btn-outline-info text-nowrap btn-sm mb-4'
              onClick={() => {
                setOpenModal(true);
                setCurrentModal(modalValues.tejidosBlandos);
              }}>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td className='text-light'> Habitos Perniciosos </td>
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
            <button
              className='btn btn-outline-info text-nowrap btn-sm mb-4'
              onClick={() => {
                setOpenModal(true);
                setCurrentModal(modalValues.habitosPerniciosos);
              }}>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td className='text-light'> Erupción y Dentición </td>
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
            <button
              className='btn btn-outline-info text-nowrap btn-sm mb-4'
              onClick={() => {
                setOpenModal(true);
                setCurrentModal(modalValues.erupcionDenticion);
              }}>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td className='text-light'> Medio Bucal General </td>
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
            <button
              className='btn btn-outline-info text-nowrap btn-sm mb-4'
              onClick={() => {
                setOpenModal(true);
                setCurrentModal(modalValues.medioBucal);
              }}>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>

        <tr>
          <td className='text-light'> Amamantación </td>
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
            <button
              className='btn btn-outline-info text-nowrap btn-sm mb-4'
              onClick={() => {
                setOpenModal(true);
                setCurrentModal(modalValues.amamantacion);
              }}>
              {' '}
              Ver Información{' '}
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};
