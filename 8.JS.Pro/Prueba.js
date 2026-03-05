import { InfoEmpresa, Cliente, Producto, Invoice } from "./class.js";

const empresa = new InfoEmpresa("Tech Solutions", "Calle Mayor 10", "123456789", "A12345678");
const cliente = new Cliente("Juan Pérez", "Av. Libertad 25", "987654321", "B87654321");
const producto1 = new Producto("Laptop", 1200, 5);
const producto2 = new Producto("Ratón", 20, 2);

const factura = new Invoice(empresa, cliente, 21, "Transferencia");
factura.agregarProducto(producto1);
factura.agregarProducto(producto2);

factura.mostrarFactura();   
