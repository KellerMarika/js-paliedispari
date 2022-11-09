/* PALINDROMIA */

/* dichiaro la funzione */

/**
 * confronta l'argomento stringa con la sua versione rovesciata e letta al contrario e verifica se sono identiche
 * stringStraight === stringReverse condizione
 * Ritorna "è un palindromo!" o 'NON è un palindromo' a seconda della stringa passatagli per argomento
 * @param {string} string dovrebbe essere una stringa 
 * @return "è un palindromo!" || 'NON è un palindromo'
 */
function checkPalindrome(string) {

    // convalidi il dato inserito dall'utente ---sennò return
    if (string === undefined) {
        return
    }

    //metto tutto minuscolo o rischio falsi negativi
    string = string.toLowerCase()
    //se il dato è valido lo inserisco in una variabile "dritto"
    let stringStraight = string
    //console.log(stringStraight)

    //ora creo una copia rigirata dello stesso dato validato e la inserisco in una variabile "rovescio"

    //split separa le lettere("") se fosse stato così (" ")separava le parole
    //reverse() inverte l'ordine di comparizione 
    //join("")unisce le lettere 
    let stringReverse = stringStraight.split("").reverse().join("")
    //console.log(stringReverse);

    //a controllo che il valore di dritto sia  === a quello di rovescio
    if (stringStraight === stringReverse) {

        // il return ha un valore diverso a seconda che la condizione sia true o false 

        //avrei potuto anche fare return di stringStraight === stringReverse (true o false ) per poi gestire di conseguenza il dato uscente ma così è più parlante

        return "è un palindromo!"
    } else {
        return "NON è un palindromo!"
    }
}



/* elementi */

//palindrome_Btn
const palindrome_Btn = document.querySelector("#palindrome-btn");
//console.log(palindrome_Btn);

const palindrome_Input = document.querySelector("[name=palindrome]");
//console.log(palindrome_Input);

palindrome_Btn.addEventListener("click", function () {

    const userWord = palindrome_Input.value;

    if (userWord === "" ||
        userWord === undefined) {
        alert("inserisci un dato valido,perfavore");
    }

    /* invoco la funzione */

    checkPalindrome(userWord);

    const palindromeResult_El = document.querySelector(".palindrome-result");

    palindromeResult_El.innerHTML = `${userWord} ${checkPalindrome(userWord)}`

});

/* ************************************************************************* */

/* PARI E DISPARI */

/* dichiaro la funzione  somma*/

/**somma di due argomenti numerici e restituisce il valore somma
 * num1 + num2  oprazione
 * return === num1 + num2 
 * @param {number} num1 
 * @param {number} num2 
 *@return  num1 + num2
*/
function sum(num1, num2) {

    const summary = num1 + num2
    console.log(summary);
    return summary
}

/* dichiaro la funzione  pari o dispari*/

/**
 * verifica se l'argomento numero inserito è pari o dispari
 * num% === 0 condizione
 * * Ritorna "è pari!" o 'è dispari'
 * @param {number} number 
 * @return "è pari!" || 'è dispari'
 */
function checkEvenOdd(number) {
    //verifico validità valore
    //i controlli sulla validità del valore richiesto del form vanno eseguiti sulla funzione bottone perchè questa è generica 
    if (isNaN(number)) {
        return
    }

    // il return ha un valore diverso a seconda che la condizione sia true o false 
    if (number % 2 === 0) {

        return "pari"
    } else {
        return "dispari"
    }
}

/* dichiaro la funzione  random 1-5 fai da te*/
/**
 * esegue un'estrazione casuale di un numero intero compreso fra i valori passati per argomenti(compresi anchessi)
 * 
 * @param {number} minNumber è il valore minimo del range entro il quale si desidera estrarre il numero dalla funzione
 * @param {number} maxNumber è il valore massimo del range entro il quale si desidera estrarre il numero dalla funzione
 * @returns il valore di returns è compreso fra i valori minNumber e maxNumber  minNumber <=returns <=maxNumber
 */
function randomNumberRange(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
}

//console.log(randomNumberRange(1, 5));





/* raccolgo elementi necessari */
const evenOdd_btn = document.getElementById("evenOdd-btn");
console.log(evenOdd_btn);

/* funzione */
evenOdd_btn.addEventListener("click", function () {


    /* raccolgo elementi necessari  che mi serve esistano solo qua dentro */

    //prendo in esame solo il radio button con valore checked
    const evenOdd_input = document.querySelector("[name=even_odd-radio]:checked")
    console.log(evenOdd_input.value);

    const userChoice = evenOdd_input.value

    const userNumber_El = document.querySelector("[type=number]");
    console.log(userNumber_El);



    // raccolgo il valore dall'input
    const userNumber = parseInt(userNumber_El.value);
    console.log(userNumber);
    //eseguo i controlli sul dato
    if (userNumber === undefined ||
        isNaN(userNumber) ||
        userNumber < 1 ||
        userNumber > 5) {
        alert("inserisci un dato valido, perfavore");
    }
    //genero un valore random da 1 a 5 col pc
    const pcNumber = randomNumberRange(1, 5);
    console.log(pcNumber);

    //faccio la somma dei due valori (user number + pc number) e verifico se è pari
    //creo una variabile di comodo? che nome bleah

    summaryModule = checkEvenOdd(sum(userNumber, pcNumber));
    console.log(summaryModule);

    //se il valore di checkEvenOdd===al valore scelto dall'utente nei radiobutton ha vito
    if (summaryModule === userChoice) {
        alert("hai vinto");
    }else{
        alert("hai perso");
    }
});










//console.log(checkEvenOdd(4))

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Se l’utente ha scritto “pari” e la somma è pari, ha vinto l’utente
Se l’utente ha scritto “pari” e la somma è dispari, ha vinto il pc */