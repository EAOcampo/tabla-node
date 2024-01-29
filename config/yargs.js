const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "La base por la cual se va a multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "Sirve para mostrar en consola la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe:
      "Sirve como parametro para definir hasta que numero quieres que llegue la tabla de multiplicar",
  })

  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
