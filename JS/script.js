// Prezzo al km
var kmE = 0.21


// Chiamo la funzione pendendo l'input
function calcoloKm() {
  var name = document.getElementById("Name").value;
  var eta = document.getElementById("eta").value;
  var km = document.getElementById("km").value;

// Sollevo eccezioni
  if (eta === "") {
    alert("Il campo età non può essere vuoto!")
  }

  if (km === "") {
    alert("Il campo km non può essere vuoto!")
  }

  if (/\D/.test(eta)) {
    alert("Non sono ammessi caratteri nel campo età :)");
  }

  if (/\D/.test(km)) {
    alert("Non sono ammessi caratteri nel campo km :)");
  }

// Condizioni di età e sconto
  if(eta < 18) {
    var prezzoL = kmE * km;
    var prezzoPer =  prezzoL * (20 / 100);
    var prezzoIn = prezzoL - prezzoPer;
    var prezzoF = prezzoIn.toFixed(2);
  }

  else if (eta >= 65) {
    var prezzoL = kmE * km;
    var prezzoPer =  prezzoL * (40 / 100);
    var prezzoIn = prezzoL - prezzoPer;
    var prezzoF = prezzoIn.toFixed(2);
  }

  else{
    var prezzoL = kmE * km;
    var prezzoF = prezzoL.toFixed(2);
    }
// Stampo il risultato
  document.getElementById("risultato").innerHTML = "Ciao " + name + ", spenderai " + prezzoF + "€";
}
