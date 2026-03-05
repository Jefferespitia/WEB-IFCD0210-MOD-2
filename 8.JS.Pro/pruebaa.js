

import { Empresa, Cliente, Item, Invoice } from './classs.js';

const empresa = new Empresa(
    "Tech Solutions",
    "Calle Mayor 10",
    "123456789",
    "A12345678"
);

const cliente = new Cliente(
    "Juan Pérez",
    "Av. Libertad 25",
    "987654321",
    "B87654321"
);

const factura = new Invoice(empresa, cliente, 21, "Transferencia");

factura.agregarItem(new Item("Ordenador", 800, 1));
factura.agregarItem(new Item("Ratón", 20, 2));

factura.mostrarFactura();
