const producto = {
    id: 123,
    nombre: 'Laptop',
    precio: 1500,
    disponible: true
}

// Obtener claves
const claves = Object.keys(producto);
console.log(claves);

// Obtener valores
const valores = Object.values(producto);
console.log(valores);

// Obtener pares clave-valor
const entradas = Object.entries(producto);
console.log(entradas);

// Iterar sobre el objeto con forEach
Object.entries(producto).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});