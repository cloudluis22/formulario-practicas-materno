import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTooth
} from '@fortawesome/free-solid-svg-icons';

export const Diente = ({Numero, ID ,DienteSeleccionado}) => {
  return (
    <div className='me-2 mt-2' onClick={() => DienteSeleccionado(ID)} >
        <span className='fs-5'> { Numero } </span>
        <br />
        <FontAwesomeIcon icon={faTooth} size={'2x'} className='diente-icon' />
    </div>
  )
}
