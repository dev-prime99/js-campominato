
var numeripc, npc, ok, nutente, x, y, punteggio;

numeripc = [];

while(numeripc.length < 16){
  npc = Math.floor(Math.random() * 100) + 1;
  if(numeripc.indexOf(npc) === -1) numeripc.push(npc);
}

console.log(numeripc);

ok = 0;

punteggio = 0;

function confronto() {
  for (var i = 0; i < 16; i++){
    if (nutente == numeripc[i]) {
      console.log("male")
      i = 17;
      ok = 1;
    } else{
      console.log("bene");
      ok = 0
    }
  }
  return ok;
}

function richiesta() {
  nutente = prompt("Inserisci un numero");
}

while (ok < 1) {
  y = richiesta()
  x = confronto();
  punteggio++;
}

console.log(punteggio - 1);
