// Assegno una variabile per impostare i numeri da 1 a 100
const n1 = 100;

// Creo la funzione che mi permette di vedere i 100 numeri in console con "for"
for (let i = 0; i < n1; i++) {

    // Imposto la variabile per partire dal numero 1
    const num1 = i + 1
    console.log(num1)

    // Imposto la variabile per i multipli di 3 con Modulo %
    const resto3 = num1 % 3
    // console.log(resto3)

    // Imposto la variabile per i multipli di 5 con Module %
    const resto5 = num1 % 5
    // console.log(num1)

    // SE il numero è multiplo sia di 3 che di 5 stampa 'FizzBuzz'
    if (resto3 === 0 && resto5 === 0) {
        console.log(num1, 'FizzBuzz')
    }

    // ALTRIMENTI SE il numero è multiplo di 3 stampa 'Fizz'
    else if (resto3 === 0) {
        console.log (num1, 'Fizz')
    }

    // ALTRIMENTI SE il numero è multiplo di 5 stampa 'Buzz'
    else if (resto5 === 0) {
        console.log (num1, 'Buzz')
    }

}


