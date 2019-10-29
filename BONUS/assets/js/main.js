
var numeripc, npc, ok, okk, nutente, numeriutenti, x, punteggio, y, bho, contatore, difficolta, difn;

numeripc = [];
numeriutenti = [];

difficolta = prompt("seleziona la difficolta da 0 a 2");
if(difficolta <= 0 || difficolta > 2){
  difn = 100;
  alert("Numeri da 1 a 100");
} else if(difficolta == 1){
  difn = 80;
  alert("Numeri da 1 a 80")
} else if(difficolta == 2){
  difn = 50;
  alert("Numeri da 1 a 50")
}

while(numeripc.length < 16){
  npc = Math.floor(Math.random() * difn) + 1;
  if(numeripc.indexOf(npc) === -1){
    numeripc.push(npc);
  }
}

console.log(numeripc);

ok = 0;

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
  //return nutente;
}

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

document.getElementById('punti').innerHTML = "Hai totalizzato: "  + y + " punti";

document.getElementById('ar').innerHTML = "Numeri scelti dal computer: "  + numeripc;

console.log(numeriutenti);
console.log(y);
