// chiedo all'utente il suo cognome
var cognomeUtente=prompt("Iserisci il tuo cognome");

// creo array cognomi
var listaCognomi = ['Rossi','Bianchi','Aligheri','Manzoni','Marquez'];

// inserire elemento all'interno di lista
listaCognomi.push(cognomeUtente);

// ordino cognomi in ordine alfabetico
listaCognomi.sort();

// assegnazione variabile per posizione all'interno dell'array
var a = listaCognomi.indexOf(cognomeUtente);

// ciclo while per stampa in ordine alfabetico elementy array
var i = 0;
while(i<listaCognomi.length){
  document.getElementById('list').innerHTML += '<p>'+listaCognomi[i]+'</p>';
  i++
}

// stampa della posizione
document.getElementById('position').innerHTML='Il tuo Cognome è nella posizione:' +  a;
