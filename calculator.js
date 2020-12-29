// JavaScript for the calculator

// Fonctionnement du script :

// 1. Je déclare une variable sous forme d'array null : variable = [];

// 2. Au clic sur "cancel", la variable retrouve sa valeur nulle d'origine ;

// 3. Au clic sur un numéro : 

// 4. Au clic sur un opérateur : 

// 5. Au clic sur "résultat", je joins tous les items avec console.log(elements.join(''))

/////////

// 1. On définit la variable data
let data = [];
let res = null;
let decimal = false;

// 2. Si Cancel est sélectionné, data reprend sa valeur d'origine
function cancelSelected() {
  data = []
  document.getElementById('screen').innerHTML = (data);
};

// 5. Si Equal est sélectionné, on affiche le résultat
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

// 3. Si un numéro est sélectionné, on regarde si le dernier element de data est un nombre ou un opérateur :
function numberSelected(number) {
// si c'est un nombre on l'ajoute à la suite

  if (number === '.') {
    decimal = true
    data[data.length -1] = data[data.length -1] + .0;
    tmp = data[data.length -1].toString() + '.';
    // tmp = str(data[data.length -1])+'.';
  }
  else if (typeof data[data.length -1] == "number") {
    if (decimal) {
      // on transforme le dernier item de data en string
      strData = data[data.length -1].toString();
      // on localise la virgule
      decimalLocation = strData.indexOf('.');
      if (decimalLocation === -1){
        decimaler = 10**-1
      }
      // on récupère le nombre de chiffres après la virgule
      else {
        i = strData.length - decimalLocation;
        console.log(i); 
        console.log(strData.length);
        console.log(decimalLocation);
        console.log(data[data.length -1]);
      // ce résultat est le nb de 0 apres la virgule du multiplicateur
        decimaler = 10**-i
      }
  
      // on prend le multiplicateur et on le * avec number
      data[data.length -1] = data[data.length -1] + number*decimaler;
      tmp = data[data.length -1];

    }
    else {
      data[data.length -1] = data[data.length -1]*10 + number;
      tmp = data[data.length -1];
    }
  }
// si c'est un opérateur on crée un nouvel item
  else {
     data.push(number);
     decimal = false;
     tmp = number;
    };
  document.getElementById('screen').innerHTML = (tmp);
};

// clic sur decimal
function decimalSelected() {
  numberSelected('.');
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