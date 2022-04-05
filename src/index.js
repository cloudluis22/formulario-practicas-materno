import React from 'react';
import ReactDOM from 'react-dom';
import { MainForm } from './views/MainForm';
import './index.css';
import { TablaAlimentacion } from './views/TablaAlimentacion';
import { TablaAmamantacion } from './views/TablaAmamantacion';
import { TablaAntecedentes } from './views/TablaAntecedentesP';
import { TablaHabitos } from './views/TablaHabitosH';

ReactDOM.render(<TablaAntecedentes />, document.getElementById('root'));
