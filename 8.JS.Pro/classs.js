

export class Empresa {
    #nombre;
    #direccion;
    #telefono;
    #nif;

    constructor(nombre, direccion, telefono, nif) {
        this.#nombre = nombre;
        this.#direccion = direccion;
        this.#telefono = telefono;
        this.#nif = nif;
    }

    getInfo() {
        return `${this.#nombre} Dirección: ${this.#direccion} Teléfono: ${this.#telefono}NIF: ${this.#nif}`;
    }
}

export class Cliente {
    #nombre;
    #direccion;
    #telefono;
    #nif;

    constructor(nombre, direccion, telefono, nif) {
        this.#nombre = nombre;
        this.#direccion = direccion;
        this.#telefono = telefono;
        this.#nif = nif;
    }

    getInfo() {
        return `${this.#nombre} Dirección: ${this.#direccion} Teléfono: ${this.#telefono} NIF: ${this.#nif}`;
    }
}

export class Item {
    #descripcion;
    #precio;
    #cantidad;

    constructor(descripcion, precio, cantidad) {
        this.#descripcion = descripcion;
        this.#precio = precio;
        this.#cantidad = cantidad;
    }

    getSubtotal() {
        return this.#precio * this.#cantidad;
    }

    getInfo() {
        return `${this.#descripcion} - ${this.#cantidad} x ${this.#precio}€ = ${this.getSubtotal()}€`;
    }
}

export class Invoice {
    #empresa;
    #cliente;
    #items;
    #importeTotal;
    #tipoIVA;
    #formaPago;

    constructor(empresa, cliente, tipoIVA, formaPago) {
        this.#empresa = empresa;
        this.#cliente = cliente;
        this.#items = [];
        this.#importeTotal = 0;
        this.#tipoIVA = tipoIVA;
        this.#formaPago = formaPago;
    }

    agregarItem(item) {
        this.#items.push(item);
    }

    #calcularImporteTotal() {
        let subtotal = 0;
        for (let item of this.#items) {
            subtotal += item.getSubtotal();
        }
        this.#importeTotal = subtotal + (subtotal * this.#tipoIVA / 100);
    }

    calcular() {
        this.#calcularImporteTotal();
    }

    mostrarImporteTotal() {
        console.log(`Importe total (IVA ${this.#tipoIVA}%): ${this.#importeTotal}€`);
    }

    mostrarFactura() {
        this.#calcularImporteTotal();

        console.log("===== FACTURA =====");
        console.log("EMPRESA:");
        console.log(this.#empresa.getInfo());

        console.log("CLIENTE:");
        console.log(this.#cliente.getInfo());

        console.log("DETALLE:");
        this.#items.forEach(item => {
            console.log(item.getInfo());
        });

        console.log(`IVA: ${this.#tipoIVA}%`);
        console.log(`Forma de pago: ${this.#formaPago}`);
        console.log(`TOTAL: ${this.#importeTotal}€`);
    }
}
