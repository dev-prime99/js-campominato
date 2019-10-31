
var numeripc, npc, ok, okk, nutente, numeriutenti, x, punteggio, y, bho, contatore, difficolta, difn;

numeripc = [];
numeriutenti = [];

//SELEZIONARE DIFFICOLTA

ok = 0;

while (ok < 1) {
  difficolta = prompt("seleziona la difficolta da 1 a 3");
  if (isNaN(difficolta)) {
    alert("Inserire un umero compreso tra 1 e 3");
  } else if(difficolta == 1){
    difn = 100;
    ok = 1;
    alert("Numeri da 1 a 100");
  } else if(difficolta == 2){
    difn = 80;
    ok = 1;
    alert("Numeri da 1 a 80")
  } else if(difficolta == 3){
    difn = 50;
    ok = 1;
    alert("Numeri da 1 a 50")
  }
}


//GENERATORE DI NUMERI
while(numeripc.length < 16){
  npc = Math.floor(Math.random() * difn) + 1;
  if(numeripc.indexOf(npc) === -1){
    numeripc.push(npc);
  }
}

console.log(numeripc);

ok = 0;

//CONFRONTO NUMERI UTENTI E PC
function checo(nutente, numeriutenti, n) {
  var ii = 0;
  var okk = 0;
  while (okk < 1){
    if (isNaN(nutente)) {
      alert("Il valore deve essere un numero");
      okk = 1;
    } else if (nutente > n) {
      alert("Il numero deve essere tra 1 e " + n + " compresi");
      okk = 1;
    } else if (nutente == numeriutenti[ii]) {
      alert("Numero doppio, inserisci un altro");
      okk = 1;
    } else if (ii > numeriutenti.length) {
      numeriutenti.push(nutente);
      okk = 1;
    } else{
      ii++;
    }
  }
}

// CONVALIDATORE NUMERI INSERITI DALL'UTENTE
function confronto(user, numeripc) {
  ok = 0;
  var i = 0;
  while (i < 16 && ok == 0) {
    if (user == numeripc[i]) {
      console.log("male")
      ok = 1;
    } else{
      i++;
    }
  }
  return ok;
}


while (ok < 1) {
  nutente = prompt("Inserisci un numero");
  var z = checo(nutente, numeriutenti, difn);
  x = confronto(nutente, numeripc);
  y = numeriutenti.length;
  document.getElementById('nutente').innerHTML = "Numeri scelti da te: " + numeriutenti;
}


// PRENDE IL NUMERO BOMBA
ok = 0;
var iii = 0;
while (ok < 1) {
  if (numeriutenti[numeriutenti.length-1] == numeripc[iii]) {
    ok = 1;
    var nbomb = numeripc[iii];
    var pos = numeripc.indexOf(numeripc[iii]);
    pos > -1 && numeripc.splice(pos, 1);
  } else {
    iii++;
  }
}

//LISTA NUMERI PC
for (var i = 0; i < 15; i++) {
  document.getElementById('list').innerHTML += "<li>" + numeripc[i] + "</li>";
}

// SCRITTURA NUMERO BOMBA COLORATO DI ROSSO
document.getElementById('list').innerHTML += "<li>" + nbomb + "</li>";

document.getElementById('punti').innerHTML = "Hai totalizzato: "  + y + " punti";

console.log(numeriutenti);
console.log(y);
