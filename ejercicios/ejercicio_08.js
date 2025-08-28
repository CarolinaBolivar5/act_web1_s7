const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];

const [primero, segundo, tercero] = lenguajes;
console.log('Primeros 3 lenguajes:', primero, segundo, tercero);

const [primeroLang, , , , ultimoLang] = lenguajes;
console.log('Primero y último lenguaje:', primeroLang, ultimoLang);


// Usa rest operator para separar el primero del resto 
const [primeroRest, ...resto] = lenguajes;
console.log('Primero:', primeroRest);

// - Intercambia dos variables usando desestructuración
[lenguajes[0], lenguajes[2]] = [lenguajes[2], lenguajes[0]];

console.log("Después del intercambio:", lenguajes);