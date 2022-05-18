
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetInfo } from '../hooks/useGetInfo';

export const ImprimirPaciente = () => {
  const { id } = useParams();
  const { dataState } =  useGetInfo(id);

  useEffect(() => {
  
  }, [dataState]);
  

  return (
    <div className='bcg-imprimir-color'>
        <p> {id} </p>
    </div>
  )
}
