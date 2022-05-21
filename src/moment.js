var moment = require ('moment')
let mydate;
/*
let mydateU = moment().unix()
 mydate = moment(mydateU)


let fecha1 = moment('2022-01-01')
let fecha2 = moment('2022-01-02')

let mañana = moment('2022-04-14T20:54:29-05:00')

(fecha2.diff(fecha1, 'days'))

(mydateU)
(mañana.diff(mydate, 'days'))
//2022-04-13T20:54:29-05:00
//Moment<2022-04-13T20:55:34-05:00>
*/

/*
let mifechaU = moment().unix()
let mifecha = moment.unix(mifechaU)

let hoy = moment()

(mifechaU)
(mifecha)

let fecha1 = moment('2022-01-01')
let fecha2 = moment('2022-01-02')

(hoy.diff(fecha2, 'days'))
*/

let lunes = moment('2022-04-14T20:54:29-05:00')
let martes = moment('2022-04-15T20:54:30-05:00')

(martes.diff(lunes,'days'))

let miercoles = moment().format()

(miercoles)