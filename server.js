"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    constructor(ram, hd, cpu) {
        this.type = "Server";
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
exports.Server = Server;
