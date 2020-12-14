console.log(arguments);
console.log(require("module").wrapper);

// module.exports

const Calculator = require("./module.exports");
const calculator = new Calculator();
console.log(calculator.add(0.1, 0.2));

// exports

const { add } = require("./exports");
console.log(add(0.1, 0.2));

// cache
require("./cache")();
require("./cache")();
require("./cache")();
require("./cache")();
