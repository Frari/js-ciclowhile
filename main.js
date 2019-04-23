// chiedo all'utente il suo cognome
var cognomeUtente=prompt("Iserisci il tuo cognome");
// creo array cognomi
var listaCognomi = ['Rossi','Bianchi','Aligheri','Manzoni','Marquez'];
// inserire elemento all'interno di lista
listaCognomi.push(cognomeUtente);

document.writeln(listaCognomi.sort());

// ciclo while per determinare posizione dell'elemento all'interno dell'array
var a = listaCognomi.indexOf(cognomeUtente);

var i = 0;
while(i<listaCognomi.length){
  document.writeln(a);
  i++
}
// stampare a video la lista in ordine alfabetico

// dire all'utente in che posizione si trova il suo cognome
