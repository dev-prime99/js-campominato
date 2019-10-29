
var numeripc, npc, ok, okk, nutente, numeriutenti, x, punteggio, y;

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
okk = 0;

punteggio = 0;

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

y = 0;

while (ok < 1) {
  while (y < 1) {
    nutente = prompt("inserisci un numero");
    var i = 0;
    while (i <= 15 && okk == 1) {
      if (nutente == numeriutenti[i]) {
        ook = 1;
      } else if (i > 14){
        y = 1;
        i++;
      } else{
        i++;
      }
    }
  }
  x = confronto(nutente, numeripc);
  punteggio++;
}

console.log(punteggio - 1);
