import React from 'react';
import modalValues from '../ModalValues';

export const Modal = ({ setOpen, formulario, idPaciente }) => {
  return (
    <div className='modal-background animate__animated animate__fadeIn animate__faster'>
      <div className='modal-box'>
        <h1 className='text-dark text-center'> {formulario} </h1>
        <span className='close-modal' onClick={() => setOpen(false)}>
          X
        </span>
      </div>
    </div>
  );
};
