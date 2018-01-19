var numberLocale = require('./index');

console.log(numberLocale.toLocaleString(1000.0));
console.log(numberLocale.toLocaleString(10000, 'pt-BR'));
console.log(numberLocale.toLocaleString('1024.30', 'pt-BR'));
console.log(numberLocale.toLocaleString('1024.3000004', 'pt-BR', { style: 'currency', currency: 'brl' }));
