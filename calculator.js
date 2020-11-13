// JavaScript for the calculator

let number = 0

// Si 0 est sélectionné, on stocke 0 dans number
function zeroSelected() {
    number = number + 0;
    document.getElementById('screen').innerHTML = (number);
  }

function oneSelected() {
    number = number + 1;
    document.getElementById('screen').innerHTML = (number);
  }

function cancelSelected() {
    number = 0
    document.getElementById('screen').innerHTML = (number);
  }

function equalSelected() {
  let result = number
  document.getElementById('screen').innerHTML = (result);
}
