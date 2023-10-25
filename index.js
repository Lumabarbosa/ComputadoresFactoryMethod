"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Factory_1 = require("./Factory");
const computUm = Factory_1.ComputadorFactory.criarComputador(32, 400, 2.2, 'PC');
const computDois = Factory_1.ComputadorFactory.criarComputador(5, 500, 3.5, 'Server');
console.log(computUm.toString());
console.log(computDois.toString());
