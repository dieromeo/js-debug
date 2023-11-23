/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
// const cars = [
//     {
//         manufacturer: 'Ford',
//         model: 'Fiesta',
//         type: 'diesel'
//     },
//     {
//         manufacturer: 'Audi',
//         model: 'A1',
//         type: 'benzina'
//     },
//     {
//         manufacturer: 'Volkswagen',
//         model: 'Golf',
//         type: 'Benzina'
//     },
//     {
//         manufacturer: 'Fiat',
//         model: 'Panda',
//         type: 'metano'
//     },
//     {
//         manufacturer: 'Fiat',
//         model: 'Multipla',
//         type: 'GPL'
//     },
//     {
//         manufacturer: 'Tesla',
//         model: 'Model 3',
//         type: 'elettrico'
//     },
//     {
//         manufacturer: 'Volkswagen',
//         model: 'Polo',
//         type: 'benzina'
//     },
//     {
//         manufacturer: 'Ford',
//         model: 'Kuga',
//         type: 'Diesel'
//     },
//     {
//         manufacturer: 'Seat',
//         model: 'Ibiza',
//         type: 'metano'
//     }
//     {
//         manufacturer: 'Audi',
//         model: 'R8',
//         type: 'Benzina'
//     },
// ];

// const gasolineCars = cars.filter((auto) >= auto.type === 'benzina');

// const dieselCars = cars.filter((auto) => {
//     auto.type === 'diesel';
// });

// const otherCars = cars.filter((auto) => {
//     return auto.type !== 'benzina' || auto.type !== 'diesel';
// });

// console.log('Auto a benzina');
// console.log('*******************************');
// console.log(gasolineCars);

// console.log('Auto a diesel');
// console.log('*******************************');
// console.log(dieselCars);

// console.log('Tutte le altre auto');
// console.log(otherCars);

// Questo codice dichiara un array di oggetti auto, con marca, modello e tipo. Dopodiche tramite la funzione filter crea tre array, uno contenente solo le auto a benzina
// uno contenente solo quelle diesel e uno contenente le altre
// Errori di sintassi: dopo l'oggetto seat manca la virgolo dopo la chiusura della graffa.
// La prima array function è scritta >= al posto di =>
// Errori logici: bisogna inserire un .toLowerCase dopo auto.type per evitare che siano scritte con maiuscole.
// va modificata la condizione dell'ultimo filter sostituendo l'or con un and
// Non serve inserire il return nell'ultimo filter ma si può scrivere in un unica riga

// ESERCIZIO 1 CORRETTO
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter((auto) => auto.type.toLowerCase() === 'benzina');

const dieselCars = cars.filter((auto) => auto.type.toLowerCase() === 'diesel');

const otherCars = cars.filter((auto) => auto.type.toLowerCase() !== 'benzina' && auto.type !== 'diesel');

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);