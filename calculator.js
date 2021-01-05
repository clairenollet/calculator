// JavaScript for the calculator

// 1. On définit les variables générales
let data = [];
let res = null;
let decimal = false;
let counter = 0;

// 2. Si Cancel est sélectionné, data reprend sa valeur d'origine
function cancelSelected() {
  data = []
  document.getElementById('screen').innerHTML = (data);
  counter = 0;
  counter_zero = 0;
  decimal = false;
};

// 3. Si Equal est sélectionné, on affiche le résultat
function equalSelected() {
  let nb1 = data[0]
  let nb2 = data[2]
  let op = data[1]
  if (op === '+') {
    res = nb1 + nb2
  }
  else if (op === '-') {
    res = nb1 - nb2
  }  
  else if (op === '*') {
    res = nb1 * nb2
  } 
  else if (op === '/') {
    res = nb1 / nb2
  }
  document.getElementById('screen').innerHTML = (res);
  data = [];
  data.push(res);
  counter = 0;
  counter_zero = 0;
  decimal = false;
}

// 4. Si un numéro ou la virgule est sélectionné, on regarde si le dernier element de data est un nombre ou un opérateur :
function numberSelected(number) {
// si on a sélectionné une virgule, on l'ajoute au dernier item
  if (number === '.') {
    decimal = true
    data[data.length -1] = data[data.length -1] + .0;
    str = data[data.length -1].toString() + '.';
  }
  // si le denier item est un nombre, on y ajoute notre numéro
  else if (typeof data[data.length -1] == "number") {
    // 1. si c'est un nombre décimal
    if (decimal) {
      // on ajoute un point au compteur
      counter += 1
      // on maj le nombre de 0 qu'on met après la virgule du multiplicateur
      decimaler = 10**-counter
      // on prend le multiplicateur et on multiplie number avec
      data[data.length -1] = data[data.length -1] + number*decimaler;
      str = data[data.length -1].toString();
      if ((number == "0") && (counter == 1 || counter == counter_zero+1)) {
        str += '.';
      }
      if (number == 0) {
        counter_zero += 1
        str += '0'.repeat(counter_zero);
      }
      else {
        counter_zero = 0
      }      


    }
    // 2. si ce n'est pas un nombre décimal
    else {
      data[data.length -1] = data[data.length -1]*10 + number;
      str = data[data.length -1];
    }
  }
// si le denier item est un opérateur, on crée un nouvel item
  else {
    data.push(number);
    decimal = false;
    str = number;
    counter = 0;
    counter_zero = 0;
    };
  document.getElementById('screen').innerHTML = (str);
};

// 4. Au clic sur un opérateur : 
function operatorSelected(operator) {
  // si ma variable est nulle, je fais une alerte
    if (data.length === 0) {
      window.alert('Operation cannot start with an operator');
    }
    // si l'utilisateur sélectionne deux fois de suite un operateur on met une alerte
    else if (typeof data[data.length -1] == 'string') {
        window.alert('Operator cannot be selected after an operator');
      }
    else {
      if (data.length === 3) {
        equalSelected()
      }
      // on crée un nouvel item
      data.push(operator);
    }

  };

  function addSelected() {
    operatorSelected('+');
  };

  function substractSelected() {
    operatorSelected('-');
  };

  function multiplySelected() {
    operatorSelected('*');
  };

  function divideSelected() {
    operatorSelected('/');
  };