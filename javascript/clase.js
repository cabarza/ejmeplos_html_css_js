class Vehiculo {
    constructor(ruedas, color, largo, tipo) {
        this.ruedas = ruedas;
        this.color = color;
        this.largo = largo;
        this.tipo = tipo;
    }

    encender() {
        console.log(`${this.tipo} Encendido`);
    }

    avanzar() {
        console.log(`${this.tipo} Avanzando en ${this.ruedas} ruedas`);
    }

    detener() {
        console.log(`${this.tipo} Detenido`);
    }
}

class Automovil extends Vehiculo {
    constructor(color, largo, puertas) {
        super(4, color, largo, 'AUTOMOVIL');
        this.puertas = puertas;
    }

    encender() {
        console.log(`${this.tipo} Motor Encendido`);
    }

    avanzar() {
        console.log(`${this.tipo} a toda marcha`);
    }

    detener() {
        console.log(`${this.tipo} Motor apagado`);
    }
}

class Motocicleta extends Vehiculo {
    constructor(cilindrada) {
        super(2, 'cualquiera', 3, 'MOTOCICLETA');
        this.cilindrada = cilindrada;
    }


    correr() {
        console.log(`${this.tipo} ruuuuuunnnnn `);
    }

}

const auto = new Vehiculo(8, 'rojo', 6, 'AUTOMOVIL');
auto.encender();
auto.avanzar();
auto.detener();


const auto2 = new Automovil('blanco', 3, 3);
auto2.encender();
auto2.avanzar();
auto2.detener();


const moto = new Motocicleta(650);
moto.encender();
moto.avanzar();
moto.correr();
moto.detener();
