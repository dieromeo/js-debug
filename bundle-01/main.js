/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

/*
Questo codice esegue un ciclo for che va da 0 a 4 , e stampa il valore della variabile contatore (i) in console ad ogni iterazione.
*/
// Non sono presenti errori di sintassi
// Errori logici: Bisognerebbe cambiare la condizione con i < 5 per stampare i valori fino a 5. Con questo codice non si entra mai nel ciclo perchè i = 0 è sempre < 5

// ESERCIZIO 1 CORRETTO

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// Questo codice dichiara una funzione che, preso un numero come valore, verifica se il numero è pari. Se lo è ne restituisce il numero + 5
// Errori di sintassi: La condizione dell' if così scritta non verifica che il numero sia pari ( num % 2 === 0 ) ma tenta di farne una riassegnazione
//Errori logici: l'ultimo return non ha senso per due motivi: 
//essendo a sua volta dopo un return non viene mai letto
//anche venisse eseguito restituirebbe solo il numero immesso in input senza la modifica

// ESERCIZIO 2 CORRETTO
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
}


// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// Questo codice dichiara una funzione che effettua un ciclo for che stampa in console i numeri da 0 a 4
// Errori di sintassi: nella dichiarazione del for, al posto delle virgole vanno inseriti i ;. 
// Errori di logica: la funzione si chima loop to five, ma stampa solo i numeri fino a quattro. Valuterei un cambio di nome o l'inserimento del <= nella condizione del for

// ESERCIZIO 3 CORRETTO
function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// Questo codice dichiara una funzione che preso un array, lo itera con un ciclo for, verifica su il numero è pari, se lo è lo pusha in un altro array con solo i numeri pari, infine ritorna il nuovo array
// Errori di sintassi: gli array potrebbero essere dichiarati come const in quanto viene modificato solo il valore all'interno dell'array.
// Il punto e virgola va omesso dopo l'incremento di i così come quello dopo la condizione dell'if. Nella condizione dell'if bisogna controllare che il modulo sia uguale a 0 (===).

// Errori di logica: la condizione del for esclude così facendo l'ultimo numero dell'array. 
// Nell'if bisogna controllare che numbers[i] sia pari, non tutto l'array. Nel push dobbiamo inserire non il contatore ma l'elemento di numbers in posizione i (numbers[i]).
// Per evitare che si interrompa alla prima iterazione, il return va messo fuori da ciclo

// ESERCIZIO 4 CORRETTO
function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers();
