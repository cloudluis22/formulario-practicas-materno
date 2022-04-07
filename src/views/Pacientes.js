import React from 'react';

export const Pacientes = () => {
  return (
    <div className='bcg-main-color'>
      <h1 className='text-white text-center mt-3'>
        Información de los Pacientes
      </h1>
      <div
        className='d-flex justify-content-center align-items-center flex-column mt-5'
        style={{
          width: '100%',
        }}>
        <div
          className='spinner-border text-primary text-light'
          role='status'
          style={{ width: '6rem', height: '6rem' }}
        />
        <p className='text-white mt-3'> Cargando Información... </p>
      </div>
    </div>
  );
};
