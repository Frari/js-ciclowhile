// chiedo all'utente il suo cognome
var cognomeUtente=prompt("Iserisci il tuo cognome");

// creo array cognomi
var listaCognomi = ['Rossi','Bianchi','Aligheri','Manzoni','Marquez'];

// inserire elemento all'interno di lista
listaCognomi.push(cognomeUtente);

// assegnazione variabile per posizione all'interno dell'array
var a = listaCognomi.indexOf(cognomeUtente);

// ciclo while per determinare posizione dell'elemento all'interno dell'array
var i = 0;
while(i<listaCognomi.length){
  i++
}

// stampa dei cognomi e della posizione
document.getElementById('list').innerHTML=listaCognomi.sort();
document.getElementById('position').innerHTML='Il tuo Cognome è nella posizione: ' + a;
