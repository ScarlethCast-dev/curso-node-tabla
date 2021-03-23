const fs = require("fs"); //importo el paquete que me permite almacenar archivos en disco
const colors = require('colors')

const crearArchivo = (base = 5, listar=false, limite=10) => {
  return new Promise((resolve, reject) => {
    let consola = ""; //almacena lo que se va guardar adelante en el archivo de texto
    let salida = "";
    let lim = limite;
    let tabla = `Tabla del ${base}`;
    //Realiza la operacion de multiplicacion
    for (let i = 1; i <= lim; i++) {
      let resultado = 0;
      resultado = base * i; //almacena lo que se va guardar adelante en el archivo de texto
      consola += `  ${colors.yellow.bold(base)} ${colors.magenta.bold('X')} ${colors.red.bold(i)} ${colors.gray.bold('=')} ${colors.cyan.bold(resultado)}\n`;
      salida += ` ${base} X ${i} = ${resultado}\n`
    }

    //mostrar daos procesados
    if(listar){
      console.log(`\n ${colors.bgGreen(`-----------------------------------`)}`)
      console.log(` ${colors.bgGreen(`-----------------------------------`)}`)
      console.log(` ${colors.bgBlue(`----------- ${colors.rainbow(`TABLA DE ${base}`)} ------------`)}  `)
      console.log(` ${colors.bgCyan(`-----------------------------------`)}`)
      console.log(` ${colors.bgCyan(`-----------------------------------`)} \n`)
      console.log(consola);
    }  

    // Escribir archivo en disco duro: fs.write permite almacenar archivos en disco
    fs.writeFile(`./salida/tabla-${base}.txt`, `${tabla}\n\n${salida} `, err=>{
        (!err)
        ? resolve(`tabla-${base}`)
        : reject(`Ha ocurrido un error al guardar el archivo`);
    })   
      
  });
};

/** exporto* la funcion en un objeto */
module.exports = {
  crearArchivo
};


