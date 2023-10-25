"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputadorFactory = void 0;
const Pc_1 = require("./Pc");
const Server_1 = require("./Server");
class ComputadorFactory {
    static criarComputador(ram, hd, cpu, type) {
        if (type === "PC") {
            return new Pc_1.Pc(ram, hd, cpu);
        }
        else if (type === "Server") {
            return new Server_1.Server(ram, hd, cpu);
        }
        else {
            throw new Error("Tipo de computador não foi detectado.");
        }
    }
}
exports.ComputadorFactory = ComputadorFactory;
