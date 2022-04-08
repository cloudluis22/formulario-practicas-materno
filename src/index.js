import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TablaAlimentacion } from './views/TablaAlimentacion';
import { TablaAmamantacion } from './views/TablaAmamantacion';
import { TablaAntecedentes } from './views/TablaAntecedentesP';
import { TablaHabitos } from './views/TablaHabitosH';
import { TablaAntecedentesFamiliares } from './views/TablaAntecedentesFamiliares'
import { TablaOclusion } from './views/TablaOclusion'
import { TablaTejidos } from './views/TablaTejidos'
import { TablaErupcion } from './views/TablaErupcion'
import { TablaPerniciosos } from './views/TablaPerniciosos'
import { TablaMedioBucalG } from './views/TablaMedioBucalG'

ReactDOM.render(<TablaMedioBucalG />, document.getElementById('root'));
