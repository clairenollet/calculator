// JavaScript for the calculator

// Fonctionnement du script :
// 1. on définit une variable data, qui est un string
// 2. à chaque numéro sélectionné, on ajoute ce numéro à la chaîne de caractères data
// 3. si la chaîne de caractères commence par 0 et que 0 n'est pas suivi d'une virgule, on doit enlever ce 0 (pas très grave car pas d'impact dans le calcul final)
// 4. au clic sur cancel, data reprend sa valeur vide d'origine
// 5. au clic sur égal, data est convertie en integer : la chaîne de caractère devient une opération dont le résultat est affiché dans l'élément screen

// On définit la variable data, qui est un string
let data = ""

// On définit la variable number, qui est un string
let number = selectedElement.to_s

// Si Cancel est sélectionné, data reprend sa valeur d'origine
function cancelSelected() {
  data = ""
  document.getElementById('screen').innerHTML = (data);
}

// Si Equal est sélectionné, on transforme data en integer puis on affiche le résultat
function equalSelected() {
  let result = data.to_i
  document.getElementById('screen').innerHTML = (result);
}

// Si un élément est sélectionné, on l'ajoute à la suite de data
function zeroSelected() {
    data += number
    document.getElementById('screen').innerHTML = (data);
}