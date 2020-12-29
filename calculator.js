// JavaScript for the calculator

// 1. On définit les variables générales
let data = [];
let res = null;
let decimal = false;

// 2. Si Cancel est sélectionné, data reprend sa valeur d'origine
function cancelSelected() {
  data = []
  document.getElementById('screen').innerHTML = (data);
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
  data = []  
  data.push(res)
  // let result = data.join('');
  // document.getElementById('screen').innerHTML = (eval(result));
};

// 4. Si un numéro ou la virgule est sélectionné, on regarde si le dernier element de data est un nombre ou un opérateur :
function numberSelected(number) {
// si on a sélectionné une virgule, on l'ajoute au dernier item
  if (number === '.') {
    decimal = true
    data[data.length -1] = data[data.length -1] + .0;
    tmp = data[data.length -1].toString() + '.';
  }
  // si le denier item est un nombre, on y ajoute notre numéro
  else if (typeof data[data.length -1] == "number") {
    // 1. si c'est un nombre décimal
    if (decimal) {
      // on transforme le dernier item de data en string
      strData = data[data.length -1].toString();
      // on localise la virgule
      decimalLocation = strData.indexOf('.');
      // cas particulier
      if (decimalLocation === -1){
        decimaler = 10**-1
      }
      // dans les autres cas, on récupère le nombre de chiffres après la virgule dans le dernier item de data
      else {
        i = strData.length - decimalLocation;
      // ce résultat est le nombre de 0 qu'on met après la virgule du multiplicateur
        decimaler = 10**-i
      }
      // on prend le multiplicateur et on multiplie number avec
      data[data.length -1] = data[data.length -1] + number*decimaler;
      tmp = data[data.length -1];
    }
    // 2. si ce n'est pas un nombre décimal
    else {
      data[data.length -1] = data[data.length -1]*10 + number;
      tmp = data[data.length -1];
    }
  }
// si le denier item est un opérateur, on crée un nouvel item
  else {
     data.push(number);
     decimal = false;
     tmp = number;
    };
  document.getElementById('screen').innerHTML = (tmp);
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
       // on crée un nouvel item
      else {
        data.push(operator);
      };
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