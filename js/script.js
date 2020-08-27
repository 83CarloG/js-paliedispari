// Primo esercizio
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('Inserisci una parola');

function palindroma (str)	{
// Misuro la lunghezza della stringa
	var lung = str.length;
// Ciclo la prima metà della stringa
	for (var i = 0; i < lung / 2; i++) {
//	Se la prima metà della stringa è uguale alla sua seconda metà
//	la parola è palindroma (controllo la prima e l'ultima lettera, la seconda e la penultima lettera, e così via...)
//	altrimenti al primo disallineamento tra le due metà scattera un false e la parola non sarà palindroma
		if (str[i] === str[lung - 1 - i]) {
			return true;
		}
		return false;
	}
}

if (palindroma(parola)) {
	alert('La parola è palindroma');
} else {
	alert('La parola non è palindroma');
}


// Secondo esercizio
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
var scelta = prompt('pari o dispari?p/d');
var numeroBot = getRandomInt(1, 6);
var sum = numeroUtente + numeroBot;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //	The maximum is exclusive and the minimum is inclusive
}

function esito (num) {
	num % 2 ? 'd' : 'p';
}

alert('il tuo numero è ' + numeroUtente + ' la tua scelta è ' + scelta)
alert('il numero scelto dal computer è ' + numeroBot);
alert('la somma è di ' + sum);

if (esito(sum) === scelta) {
	alert('Hai vinto!');
} else {
	alert('Hai perso!!');
}
