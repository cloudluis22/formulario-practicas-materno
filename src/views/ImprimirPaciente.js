import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const ImprimirPaciente = () => {
  const { id } = useParams();


  return (
    <div className='bcg-imprimir-color'>
        <p> {id} </p>
    </div>
  )
}
