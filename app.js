const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");

console.clear();
// console.log(argv);
crearArchivo(argv.b, argv.l, argv.h)
  .then((crearArchivo) => console.log(crearArchivo.rainbow))
  .catch((error) => error);


  