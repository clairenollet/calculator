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

// 2. Si Cancel est sélectionné, data reprend sa valeur d'origine
function cancelSelected() {
  data = []
  document.getElementById('screen').innerHTML = (data);
};

// 5. Si Equal est sélectionné, on affiche le résultat
function equalSelected() {
  let result = data.join('');
  document.getElementById('screen').innerHTML = (result);
  // document.getElementById('screen').innerHTML = (eval(result));
};

// 3. Si un numéro est sélectionné, on regarde si le dernier element de data est un nombre ou un opérateur :
function numberSelected(number) {
// si c'est un nombre on l'ajoute à la suite
  if (typeof data[data.length -1] == "number") {
    data[data.length -1] = data[data.length -1]*10 + number;
  }
// si c'est un opérateur on crée un nouvel item
    else {
     data.push(number);
    };
  document.getElementById('screen').innerHTML = (data);
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
      document.getElementById('screen').innerHTML = (data);
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