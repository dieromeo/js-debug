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


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

// Questo codice dichiara una variabile che verifica l'età e assegna un messaggio diverso a seconda se sei minorenne o maggiorenne ad una variabile
// Errori di sintassi: la variabile message dovrebbe essere dichiarata let, in quanto poi modificata
// Errori logici: l'età, anzichè essere impostata come valore della funzione, sarà sempre 32, quindi la funzione è poco riutilizzabile
// Non viene preso in considerazione il caso in cui l'età sia 18
// Non restituisce nessun valore, mentre dovrebbe fare un return di message per non essere undefined

// ESERCIZIO 1 CORRETTO
function checkAge(eta) {
    let message = '';

    if (eta < 18) {
        message = `Sei troppo giovane! Hai ${eta} anni!`;
    } else if (eta === 18) {
        message = `Hai ${eta} anni`
    }
    else {
        message = 'Hai più di 18 anni!';
    }

    return console.log(message);
}
checkAge(17);

// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }

// printColorsNumber();

// Questo codice dichiara una funzione che esamina un array dichiarato al suo interno e ne stampa in console la lunghezza
// Errori di sintassi: scrittura errata di length

// ESERCIZIO 2 CORRETTO
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}

printColorsNumber();

// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// Questo codice dichiara una funzione che chiede all'utente un numero tramite un prompt, e ne somma 12 salvandolo in una variabile total, che stampa poi in console
// Errori logici: il valore del prompt è una stringa, bisogna trasformarla in numero. Inoltre non viene considerato il caso in cui l'utente non inserisca un numero 

// ESERCIZIO 3 CORRETTO
function addNumbers() {
    const userNumber = Number(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// Questo codice dichiara una funzione che chiede all'utente con un prompt di inserire la sua email. Dichiara una variabile di stato per l'accesso
// inizialmete false. Se la mail dell'utente è inclusa nell'array di email la variabile di stato diventa true. Se è true stampa accesso consentito, se no negato
// Errori di sintassi: La variabile grantAccess è dichiarata come stringa anzichè come valore booleano
// Errori logici: si può risparmiare l'if di grantAccess === true inserendo la stampa nell'if che verifica che la mail sia inclusa

// ESERCIZIO 4 CORRETTO
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
        console.log('Accesso consentito!');
    }
    else {
        console.log('Accesso negato!');
    }
}
checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();

// Questo codice dichiara una funzione simile alla precedente, solo che al posto di usare includes lo fa con un ciclo for, e salva il valore
// dell'array in posizione i in una variabile. Inoltre, prima di controllare se la mail inserita è presente, controlla che abbia più di 5 caratteri
//Errori di sintassi: manca la parantesi di chiusura della funzione e la variabile di stato è stata di nuovo dichiarata come stringa
// Errori logici: il console log va dchiarato fuori dal ciclo per non stamparlo più volte

// ESERCIZIO 5 CORRETTO
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }
        }
    }
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();




























