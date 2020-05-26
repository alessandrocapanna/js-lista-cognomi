// Chiedere all’utente il cognome
var cognomeUtente = prompt("inserisci il tuo cognome");

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var cognomiPresenti = [ 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
cognomiPresenti.push(cognomeUtente);

// stampa la lista ordinata alfabeticamente
cognomiPresenti.sort();
alert('questa è la lista dei cognomi in ordine alfabeetico: ' + cognomiPresenti);

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
alert('la posizione umana è: ' + (cognomiPresenti.indexOf(cognomeUtente) + 1)+ ' su ' + (cognomiPresenti.length));
