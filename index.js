const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Filtrar pizzas con IDs impares
const pizzasImpares = pizzas.filter(pizza => pizza.id % 2 !== 0);

// Mostrar en consola
console.log('Pizzas con IDs Impares:');
pizzasImpares.forEach(pizza => {
  console.log(`Pizza ${pizza.nombre} (ID: ${pizza.id})`);
});


// Filtrar pizzas con precio de 600 o menos
const pizzasEconomicas = pizzas.filter(pizza => pizza.precio <= 600);

// Mostrar en consola
console.log('Pizzas Económicas:');
pizzasEconomicas.forEach(pizza => {
  console.log(`${pizza.nombre} - Precio: $${pizza.precio}`);
});


// Crear lista de productos y sus precios
const listaProductos = pizzas.map(pizza => {
  return { nombre: pizza.nombre, precio: pizza.precio };
});

// Mostrar en consola
console.log('Lista de Productos y Precios:');
listaProductos.forEach(producto => {
  console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});


// Mostrar ingredientes de cada pizza
pizzas.forEach(pizza => {
  console.log(`Ingredientes de la pizza "${pizza.nombre}":`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log(`- ${ingrediente}`);
  });
});










