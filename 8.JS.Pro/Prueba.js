function calcularTotal(precio, iva) {
    const montoIva = precio * (iva / 100);
    const precioFinal = precio + montoIva;
    console.log("Precio original: $" + precio);
    console.log("IVA (" + iva + "%): $" + montoIva);
    console.log("Precio final: $" + precioFinal);
}
calcularTotal(100, 21);



class factura {
    constructor(numero, cliente, productos) {
        this.numero = numero;
        this.cliente = cliente;
        this.productos = productos;
    }
    mostrarInfo() {
        console.log(`Número de factura: ${this.numero}`);
        console.log(`Cliente: ${this.cliente.nombre}`);
        console.log("Productos:");
        this.productos.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)} x ${producto.cantidad}`);
        });
    }
}

const factura1 = new factura("F001", cliente1, [producto1]);
factura1.mostrarInfo();



