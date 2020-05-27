// Chiedere all’utente il cognome e array con cognomi cognomi gia presenti
var cognomeUtente = prompt("inserisci il tuo cognome");
var cognomiPresenti = [ 'bianchi', 'rossi', 'duzioni', 'balsano', 'verdi'];
var elementoLista = document.getElementById('lista');
var posizione = document.getElementById('posizione');

// verifico se il cognome è vuoto ,se è un numero ,inserisco nuovo cognome e ordino alfabeeticamente
while ( (isNaN(parseInt(cognomeUtente)) === false) || cognomeUtente.length == 0) {
  cognomeUtente = prompt('errore daammi il tuo vero nome');
}
cognomiPresenti.push(cognomeUtente);
cognomiPresenti.sort();

// // stampo lista ordinata alf e la posizione
for (var i = 0; i < cognomiPresenti.length; i++) {
  elementoLista.innerHTML += '<li>' + cognomiPresenti[i] + '</li>';
  // elementoLista.innerHTML = elementoLista.innerHTML + '<li>' + cognomiPresenti[i] + '</li>';
}
posizione.innerHTML = ('la posizione umana è: ' + (cognomiPresenti.indexOf(cognomeUtente) + 1)+ ' su ' + (cognomiPresenti.length));
