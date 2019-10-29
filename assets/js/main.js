
var numeripc, npc, ok, okk, nutente, numeriutenti, x, punteggio, y, bho, contatore;

numeripc = [];
numeriutenti = [];

while(numeripc.length < 16){
  npc = Math.floor(Math.random() * 100) + 1;
  if(numeripc.indexOf(npc) === -1){
    numeripc.push(npc);
  }
}

console.log(numeripc);

ok = 0;

function checo(nutente, numeriutenti) {
  var ii = 0;
  var okk = 0;
  while (okk < 1){
    if (isNaN(nutente)) {
      alert("il valore deve essere un numero");
      okk = 1;
    } else if (nutente > 100) {
      alert("il numero deve essere tra 1 e 100 compresi");
      okk = 1;
    } else if (nutente == numeriutenti[ii]) {
      alert("numero doppio, inserisci un altro");
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
  nutente = prompt("inserisci un numero");
  var z = checo(nutente, numeriutenti);
  x = confronto(nutente, numeripc);
  y = numeriutenti.length;
  document.getElementById('nutente').innerHTML = "numeri scelti da te: " + numeriutenti;
}

document.getElementById('punti').innerHTML = "Hai totalizzato: "  + y + " punti";

document.getElementById('ar').innerHTML = "Numeri scelti dal computer: "  + numeripc;

console.log(numeriutenti);
console.log(y);
