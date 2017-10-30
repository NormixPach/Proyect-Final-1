prompt("Ingresa el texto");
var cesar = function (cipher){//crear una funcion con las palabras cipher y decipher
  var out = ""; //no agregar espacios vacios
  for(var i = 0; i < cipher.length; i ++){ //la variable i es igual a 0;si i es menor q el texto aumentale 1
    var x = cipher [i]; //guardar la posicion q va a tomar i
    //si el incice ASCII es mayor o igual a 65 y el indice es menor o igual a 90
    if ((x.charCodeAt(0)>= 65) && (x.charCodeAt(0) <= 90)){
      var n = x.charCodeAt(0) - 65; // guardar la popsicion del valor fijo
    }

  }

}


var cesarC = function (decipher){
  var out = "";
  for(var i = 0; i < decipher.length; i ++){
    var x = decipher [i];
  }

}
