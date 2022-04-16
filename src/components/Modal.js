import React from 'react';
import modalValues from '../ModalValues';
import { InformacionGeneral } from '../modal/InformacionGeneral';
import { Alimentacion } from '../modal/Alimentacion';
import { HabitosDeHigiene } from '../modal/HabitosDeHigiene';
import { AntecedentesPersonales } from '../modal/AntecedentesPersonales';
import { AntecedentesFamiliares } from '../modal/AntecedentesFamiliares';
import { OclusionAlineamiento } from '../modal/OclusionAlineamiento';
import { TejidosBlandos } from '../modal/TejidosBlandos';
import { HabitosPerniciosos } from '../modal/HabitosPerniciosos';
import { ErupcionDenticion } from '../modal/ErupcionDenticion';
import { MedioBucalGeneral } from '../modal/MedioBucalGeneral';
import { Amamantacion } from '../modal/Amamantacion';

export const Modal = ({ setOpen, formulario, idPaciente }) => {
  return (
    <div className='modal-background animate__animated animate__fadeIn animate__faster'>
      <div className='modal-box'>
        <h1 className='text-dark text-center'> {formulario} </h1>
        <span className='close-modal' onClick={() => setOpen(false)}>
          X
        </span>

        {formulario === modalValues.informacion && (
          <InformacionGeneral idPaciente={idPaciente} />
        )}

        {formulario === modalValues.alimentacion && (
          <Alimentacion idPaciente={idPaciente} />
        )}

        {formulario === modalValues.habitosDeHigiene && (
          <HabitosDeHigiene idPaciente={idPaciente} />
        )}

        {formulario === modalValues.antecedentesPersonales && (
          <AntecedentesPersonales idPaciente={idPaciente} />
        )}

        {formulario === modalValues.antecedentesFamiliares && (
          <AntecedentesFamiliares idPaciente={idPaciente} />
        )}

        {formulario === modalValues.oclusionAlineamiento && (
          <OclusionAlineamiento idPaciente={idPaciente} />
        )}

        {formulario === modalValues.tejidosBlandos && (
          <TejidosBlandos idPaciente={idPaciente} />
        )}

        {formulario === modalValues.habitosPerniciosos && (
          <HabitosPerniciosos idPaciente={idPaciente} />
        )}

        {formulario === modalValues.erupcionDenticion && (
          <ErupcionDenticion idPaciente={idPaciente} />
        )}

        {formulario === modalValues.medioBucal && (
          <MedioBucalGeneral idPaciente={idPaciente} />
        )}

        {formulario === modalValues.amamantacion && (
          <Amamantacion idPaciente={idPaciente} />
        )}
      </div>
    </div>
  );
};
