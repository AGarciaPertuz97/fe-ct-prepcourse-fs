/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   array[0];
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var respuesta = array[array.length - 1]; // Para saber el ultimo siempre se utiliza el xxxx[xxxx.lenght - 1]
   return respuesta;
   
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var respuesta = array.length;
   return respuesta;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
  var respuesta = array.map((num) => {    // Esta es la forma para sumarle +1 a todos los elementos siempre en un arreglo.
   return num + 1; 
}) 
 return respuesta;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var respuesta = palabras.join(" "); // Para concatenar letras y agregarle espacio se utiliza las "" con espacio entre ellas, osea quedaría asi (" ").
   return respuesta;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var respuesta = array.includes(elemento);
   return respuesta;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var respuesta = 0;

   for (let i=0; i < arrayOfNums.length; i++){ // Utilizo esta función para sumar todos los elementos de un arreglo.
      respuesta = respuesta + arrayOfNums[i]
   }
   return respuesta;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var respuesta1 = 0;

   for (let i=0; i < resultadosTest.length; i++){
      respuesta1 = respuesta1 + resultadosTest[i];
   }
   return respuesta1/resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var respuesta =  Math.max(...arrayOfNums); // Se utiliza Math.max para encontrar el número más grande de un arreglo, siempre utilizan los 3 puntos (...xxxx).
   return respuesta;
   
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length >= 1) // Si el tamaño del arreglo es mayor o = a 1, se iniciliza la multiplicacion en 1, si no automaticamente me retorna el 0.
   multiplicacion = 1;
   else
   multiplicacion = 0;

   for (let i=0; i < arguments.length; i++){ // Con este se recorre todo el arreglo y se van multiplicando los argumentos.
   multiplicacion *= arguments[i]; // El *= es una forma de reducir la función "multiplicacion = multiplicacion * 1".
   }
   return multiplicacion;

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var respuesta = 0;

   for (let i = 0; i < array.length; i++){ // Este bucle lo usé para recorrer
   if(array[i] > 18){ // Aquí estoy diciendo si el array es mayor que 18, entonces sumarle de a 1 al contador "respuesta"
      respuesta++;
   };
  }
  return respuesta;

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia){
      case 1:
         return "Es fin de semana";
         break;
      case 7:
         return "Es fin de semana";
         break;
      default:
         return "Es dia laboral";
         break;
}
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
  var numeroString = num.toString(); // Con esta función paso el número a String
  var primerDigito = numeroString.charAt(0) //Con esta función identifico el primer carcter del string.
  if (primerDigito == 9){ //Compar el carcater 9 con el número 9, no es igualdad estricta por eso solo son 2 "=="
      return true;
  } else {
      return false;
  }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   
   for (let i = 0; i < array.length - 1; i++) //Con for hacemos que recorra el arreglo completamente.
   if (array[0] !== array[i+1]){ //Aqui estamos diciendo que si el arreglo en la posicion 0 es distinto a la siguiente posicion, entonces retorne falso.
      return false;
   } else {
      return true;
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var newArray = []; //Creo un arreglo donde guardaré a los meses "Enero", "Marzo", "Noviembre" en dado caso los encuentre.
var cont = 0; // El conteo arranca en la posicion 0
     for (var i = 0; i < array.length; i++) {
      if (array[i] == 'Enero' || array[i] == 'Marzo' || array[i] == 'Noviembre') {
         newArray.push(array[i]); // Si encuentra cualquiera de los 3 meses, entonces se agregaría automaticamente al nuevo arreglo "newArray"
         cont++; // El conteo va sumando de a 1, pasando por cada posición
     }
   }
   if (cont < 3){
      return 'No se encontraron los meses pedidos'; //Si a a la 2da posición no lo encuentra, entonces se retorna que no se encontraron los meses.
   }  else {
         return newArray}
 }



function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   
   const table = []; // Se crea el arreglo
   for (let i = 0; i <= 10; i++){ // Se utiliza un for para que haga el recorrido maximo 10 veces y vaya incrementando de a 1
      n = 6 * i; // con la variable n, indicamos que 6 se multiplique por cada iteración del bucle osea, 6*1, 6*2..etc
      table.push(n); // usamos el método push para que se vayan añadiendo los resultados al final del arreglo.
   } 
   return table; // Una vez termine el bucle, le decimos que retorne la variable al  final con los arreglos completados
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nuevoArreglo = []; //Declaramos el nuevo arreglo que llenaremos con los valores mayores a 100
   for (let i = 0; i < array.length; i++){ // Usamos el bucle for para indicar que el recorrido arranca en la posición 0, que no puede superar el tamaño del arreglo y que se vaya incrementando de a 1.
      if(array[i]>100){ // escribimos la condición que nos piden, en este caso sería, "sí el arreglo es mayor a 100, entonces agregarlo al nuevo arreglo usando el .push abajo"
         nuevoArreglo.push(array[i]);  // Añadimos con el metodo push al final cada elemento del array, los escribimos array[i] para que se vaya sumando la iteración del bucle.     
      }
   }
         return nuevoArreglo; //Retornamos el bucle, se debe escribir el return fuera del bucle.
}
   

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   
   var Resultado = []; // Array donde se guardarán los valores de cada iteración

   // Bucle "for" que se ejecutará mientras "i" sea menor a 10
  for (i = 0; i < 10; i++) {
    // Aumentar el número recibido en 2
    num += 2;

    // Agregar el nuevo valor a la array de resultados
    Resultado.push(num);

    // Si el valor de la suma y la cantidad de iteraciones coinciden, retornar el string "Se interrumpió la ejecución"
    if (num === i) {
      return "Se interrumpió la ejecución";
    }
  }

  // Si no se ha interrumpido la ejecución, devolver el array de resultados
  return Resultado;           
 
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   var nuevoArreglo = [];
   
   for (i = 0; i < 10; i++){
      if (i === 5)
      continue;

      num += 2; 
      nuevoArreglo.push(num)
      
   }
   return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
