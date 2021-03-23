const colors = require('colors');
const argv = require('yargs')    /** permite controlar el ingreso de datos por consola y crear ayuda en consola para los comandos */
          .options({
            'b':{
              alias : 'base',
              type: 'number',
              demandOption: true,
              describe: 'Es la base de la tabla de multiplicar'
              
            },

            'l': {
              alias: 'listar',
              type: 'boolean',
              default: false,
              describe: 'Ver en consola la tabla de multiplicar'
            },

            'h':{
                alias: 'hasta',
                type: 'number',
                dafault: 10,
                describe: 'Solicita hasta que numero va multiplicar la base'
            }        
          })
          .check((argv,  options) =>{
            if( isNaN(argv.b)){ //chequeo del tipo
              throw 'La base debe ser un numero';
            }

            if(typeof argv.h != 'number'){
                throw 'No puedes ingresar cadenas como limite'
            }

           
            return true;
          })  
          .argv


module.exports = argv;
