/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var miGato = { // Se crea la variable.
      "nombre": nombre, // La primera propiedad se le pone "nombre" y el dato será nombre sin "".
      "edad": edad, // Lo mismo la "edad".
      "meow": function(){ // La propiedad "meow" se le asigna una function().
   return "Meow!";} // Esa función retornará lo que nos piden, en este caso "Meow!"
}
   return miGato;
} 
function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var nuevoUsuario = {
      "nombre": nombre,
      "email": email,
      "password": password} 
      return nuevoUsuario;
} 

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   
   return objeto;

}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo](); // Recuerda un método es una función, solo que se le llama método.
   // Una función se invoca declarándola así function()
   // El ejercicio te pide que invoques un método al objeto (ambos por parámetro)
   // Y la única manera de invocar la propiedad recibida por parametro es bracket notation
   // Así las cosas sería objeto[EL NOMBRE RECIBIDO POR PARÁMETRO]()
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   return objetoMisterioso.numeroMisterioso*5; // Se escribe el parámetro.propiedad y esto se multiplica por 5.

}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad]; // se utiliza el [] para especificaer que se quiere usar el bracket-Notation
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
      if (objetoUsuario['email']){     // Se le indica que si el objetoUsuario en su propiedad ['email'] posee un valor definido,
         return true;                  //retorne true, de lo contrario, retorne false
      }  else {
         return false;
      }
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objeto[propiedad]){ // igual que el ejercicio anterior.
      return true;
   } else {
      return false;
   }
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario['password'] === password){ // Aqui le decimos que si la propiedad "password" del objetoUsuario es igual al parámetro "password" retorne true. De lo contrario retorne False.
      return true;
   } else {
      return false;
   }
} console.log(verificarPassword({password:'Hola'},'Hola'));

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword; // Aqui remplaamos la password almacenada en la propiedad "password" del objeto "objetoUsuario"
   return objetoUsuario; // retornamos objeto con la informacion actualizada.
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo); // 
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:

   // EXPLICACION - cuando dice que "usuarios" es un array de objetos "usuario" me imagino esto:
   // usuarios = [usuario, usuario, usuario, etc]
   // Luego dice, cada "usuario" tiene una propiedad "esPremium" y me imagino esto:
   // usuario = {
   //   esPremium: algo,
   // }
   // Y cuando dice que definamos cada propiedad "esPremium" de cada objeto como "true," me imagino esto:
   // esPremium: true,

   for (var i = 0; i < objetoMuchosUsuarios.length; i++){ // Se utiliza un bucle para recorrer todos los objetos.
      objetoMuchosUsuarios[i].esPremium = true; // se le indica que en cada recorrido a la propiedad premium se le defina = true.
   }
     return objetoMuchosUsuarios; // se retorna el objeto.

}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:

   var userPosts = objetoUsuario.posts;
   var totalLikes = 0;

   for (var i = 0; i < userPosts.length; i++){
      totalLikes = totalLikes + userPosts[i].likes;
   }
   return totalLikes;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function (){
      return objetoProducto.precio - (objetoProducto.precio * objetoProducto.porcentajeDeDescuento);
      };
      return objetoProducto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
