// JavaScript for the calculator

// Fonctionnement du script :

// 1. Je déclare une variable sous forme d'array null : variable = [];

// 2. Au clic sur "cancel", la variable retrouve sa valeur nulle d'origine ;

// 3. Au clic sur un numéro : 
// si ma variable est nulle (variable = []), le numéro est stocké en index 0 de la variable ;
// si ma variable contient un nombre impair d'items (si variable.length % 2 != 0), le numéro est ajouté au dernier item ;
// si ma variable contient un nombre pair d'items (si variable.length % 2 === 0), un nouvel item est créé pour stocker ce numéro ;

// 4. Au clic sur un opérateur : 
// si ma variable contient un nombre impair d'items, un nouvel item est créé dans l'array avec variable.push('opérateur sélectionné') ;
// si ma variable contient un nombre pair d'items, je .pop() le dernier item, et j'ajoute l'opérateur sélectionné à sa place.

// 5. Au clic sur "résultat", je joins tous les items avec console.log(elements.join('')); 
// Je peux alors faire un return de l'opération (ou du nombre s'il n'y a pas eu d'opération) et l'afficher dans l'élément #screen de ma calculatrice.

// TODO :
// Gérer le 0 en tête d'item lorsqu'il n'y a pas de virgule après : il faudrait le supprimer, sinon ça pourrait donner des var = [010, -, 023]; par ex.
// Écrire le script avec tous les if...else.
// Établir le lien entre le script et le html, probablement avec un onClick par bouton de la calculatrice (mais il y a peut-être plus intelligent).

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
};

// 3. Si un numéro est sélectionné :
function numberSelected(number) {
// si ma variable est nulle (variable = []), le numéro est stocké en index 0 de la variable ;
  if (data.length === 0) {
  data = [number];
  }
// si ma variable contient un nombre impair d'items, le numéro est ajouté au dernier item ;
    else if (data.length % 2 != 0) {
   // insertion du numéro à la fin du dernier item
    }
// si ma variable contient un nombre pair d'items, un nouvel item est créé pour stocker ce numéro ;
    else {
   data = data.push(number);
    }
    document.getElementById('screen').innerHTML = (data);
};

// clic sur 0
function zeroSelected() {
  numberSelected(0);
};

// clic sur 1
function oneSelected() {
  numberSelected(1);
};

// clic sur 2
function twoSelected() {
  numberSelected(2);
};

// clic sur 3
function threeSelected() {
  numberSelected(3);
};

// clic sur 4
function fourSelected() {
  numberSelected(4);
};

// clic sur 5
function fiveSelected() {
  numberSelected(5);
};

// clic sur 6
function sixSelected() {
  numberSelected(6);
};

// clic sur 7
function sevenSelected() {
  numberSelected(7);
};

// clic sur 8
function eightSelected() {
  numberSelected(8);
};

// clic sur 9
function nineSelected() {
  numberSelected(9);
};

// clic sur decimal
function decimalSelected() {
  numberSelected('.');
};

// 4. Au clic sur un opérateur : 
function operatorSelected(operator) {
  // si ma variable est nulle, je fais une alerte
    if (data.length === 0) {
      window.alert('Operation cannot start with an operator!');
    }
  // si ma variable contient un nombre impair d'items, un nouvel item est créé dans l'array avec variable.push('opérateur sélectionné') ;
      else if (data.length % 2 != 0) {
        data = data.push(operator);
      }
  // si ma variable contient un nombre pair d'items, je .pop() le dernier item, et j'ajoute l'opérateur sélectionné à sa place.
      else {
        data = data.pop();
        data = data.push(operator);
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