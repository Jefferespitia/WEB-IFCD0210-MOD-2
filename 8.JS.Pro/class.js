Class InfoEmpresa {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`NIF: ${this.nif}`);
    }
}

const empresa1 = new InfoEmpresa("Tech Solutions", "Calle Mayor 123", "555-1234", "B12345678");
empresa1.mostrarInfo();


class cliente {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`NIF: ${this.nif}`);
    }
}

const cliente1 = new cliente("Juan Pérez", "Calle Luna 456", "555-5678", "C87654321");
cliente1.mostrarInfo();

class producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: $${this.precio.toFixed(2)}`);
        console.log(`Cantidad: ${this.cantidad}`);
    }
}

const producto1 = new producto("Laptop", 1200, 5);
producto1.mostrarInfo();

