var local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
    { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
    { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ]
};


/* ***********************************************************************************************
2.1 En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original). 
Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']
*********************************************************************************************** */

for (const sucursales of local.ventas) {
  sucursales.sucursal = "Centro";
};

local.sucursales = ['Centro', 'Caballito'];


/* ***********************************************************************************************
2.2 Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal
*********************************************************************************************** */

let agregarObjetosNuevos = [
  {
    fecha: new Date(2019, 01, 12),
    nombreVendedora: 'Hedy',
    componentes: ['Monitor GPRS 3000', 'HDD Toyiva'],
    sucursal: 'Centro'
  },
  {
    fecha: new Date(2019, 01, 24),
    nombreVendedora: 'Sheryl',
    componentes: ['Motherboard ASUS 1500', 'HDD Wezter Dishital'],
    sucursal: 'Caballito'
  },
  {
    fecha: new Date(2019, 01, 01),
    nombreVendedora: 'Ada',
    componentes: ['Motherboard MZI', 'RAM Quinston Fury'],
    sucursal: 'Centro'
  },
  {
    fecha: new Date(2019, 01, 11),
    nombreVendedora: 'Grace',
    componentes: ['Monitor ASC 543', 'RAM Quinston'],
    sucursal: 'Caballito'
  },
  {
    fecha: new Date(2019, 01, 15),
    nombreVendedora: 'Ada',
    componentes: ['Motherboard ASUS 1200', 'RAM Quinston Fury'],
    sucursal: 'Centro'
  },
  {
    fecha: new Date(2019, 01, 12),
    nombreVendedora: 'Hedy',
    componentes: ['Motherboard ASUS 1500', 'HDD Toyiva'],
    sucursal: 'Caballito'
  },
  {
    fecha: new Date(2019, 01, 21),
    nombreVendedora: 'Grace',
    componentes: ['Motherboard MZI', 'RAM Quinston'],
    sucursal: 'Centro'
  },
  {
    fecha: new Date(2019, 01, 08),
    nombreVendedora: 'Sheryl',
    componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'],
    sucursal: 'Centro'
  },
  {
    fecha: new Date(2019, 01, 16),
    nombreVendedora: 'Sheryl',
    componentes: ['Monitor GPRS 3000', 'RAM Quinston Fury'],
    sucursal: 'Centro'
  },
  {
    fecha: new Date(2019, 01, 27),
    nombreVendedora: 'Hedy',
    componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'],
    sucursal: 'Caballito'
  },
  {
    fecha: new Date(2019, 01, 22),
    nombreVendedora: 'Grace',
    componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'],
    sucursal: 'Centro'
  },
  {
    fecha: new Date(2019, 01, 05),
    nombreVendedora: 'Ada',
    componentes: ['Motherboard ASUS 1500', 'RAM Quinston'],
    sucursal: 'Centro'
  },
  {
    fecha: new Date(2019, 01, 01),
    nombreVendedora: 'Grace',
    componentes: ['Motherboard MZI', 'HDD Wezter Dishital'],
    sucursal: 'Centro'
  },
  {
    fecha: new Date(2019, 01, 07),
    nombreVendedora: 'Sheryl',
    componentes: ['Monitor GPRS 3000', 'RAM Quinston'],
    sucursal: 'Caballito'
  },
  {
    fecha: new Date(2019, 01, 14),
    nombreVendedora: 'Ada',
    componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'],
    sucursal: 'Centro'
  }
];

for (const objects of agregarObjetosNuevos) {
  local.ventas.push(objects);
};
