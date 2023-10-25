"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pc = void 0;
// Tipo PC
class Pc {
    constructor(ram, hd, cpu) {
        this.type = "PC";
        this.ram = ram;
        this.hd = hd;
        this.cpu = cpu;
    }
    getRam() {
        return this.ram;
    }
    getHd() {
        return this.hd;
    }
    getCpu() {
        return this.cpu;
    }
    getType() {
        return this.type;
    }
    toString() {
        return `RAM: ${this.getRam()}, HD: ${this.getHd()}, CPU: ${this.getCpu()}, Type: ${this.getType()}`;
    }
}
exports.Pc = Pc;
