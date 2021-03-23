const {crearArchivo}= require('./helpers/multiplicar')//desestructuracion del objeto de la funcion de multiplicar
const argv = require('./config/yargs')
const colors = require('colors')
console.clear();

//console.log(argv);
  crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(`\n ${colors.cyan.bold(`${nombreArchivo}.txt creado.`)} `))
  .catch(err => console.log(err)); 
  






















































/* const [,,arg3 = '--base=5'] = process.argv; //permite obtener los valores que estan almacenado en el array de la consola 
const [,base] = arg3.split('='); */
//console.log(base); 





