const fs = require("fs");
require("colors");
const crearArchivo = async (numero = 5, l = false, h = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= h; i++) {
      salida += `${numero} * ${i} = ${numero * i}\n`;
    }

    if (l) {
      console.log("===========================".green);
      console.log("     TABLA DEL       ", numero);
      console.log("===========================".green);
      console.log(salida);
    }
    fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
    return `Tabla ${numero}.txt creada`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};

// TODO : COdigo normal
/* 

const crearArchivo = (numero = 5) => {
  console.log("===========================");
  console.log("     TABLA DEL       ", numero);
  console.log("===========================");

  let salida = "";

  for (let i = 1; i <= 10; i++) {
    salida += `${numero} * ${i} = ${numero * i}\n`;
  }

  console.log(salida);

  fs.writeFileSync(`tabla-${numero}.txt`, salida);
  console.log(`Tabla ${numero}.txt creada`);
};

module.exports = {
  crearArchivo,
};
 */
// TODO : Codigo async-await
/* 
const crearArchivo = async (numero = 5) => {
  try {
    console.log("===========================");
    console.log("     TABLA DEL       ", numero);
    console.log("===========================");

    let salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${numero} * ${i} = ${numero * i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${numero}.txt`, salida);
    console.log(`Tabla ${numero}.txt creada`);
  } catch (error) {
    return error;
  }
};
*/
// TODO : Codigo con promesa
/* 
const crearArchivo = (numero = 5) => {
  return new Promise((resolve, reject) => {
    console.log("===========================");
    console.log("     TABLA DEL       ", numero);
    console.log("===========================");

    let salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${numero} * ${i} = ${numero * i}\n`;
    }

    console.log(salida);
    fs.writeFileSync(`tabla-${numero}.txt`, salida);
    resolve(`Tabla ${numero}.txt `);
  });
};
*/
