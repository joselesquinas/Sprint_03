const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form input');

// Get the input fields
var nom = document.querySelectorAll('.name');

var password = document.querySelector(".password");

var phone = document.querySelector('.phone');

// Get the error elements
var errorName = document.getElementById('errorName');

var errorPassword = document.getElementById("errorPassword");

var errorPhone = document.getElementById('errorPhone');

/* TODO 
- Tots els camps són obligatoris.

- Tots els camps han de tenir almenys 3 caràcters.

- El nom i cognoms han de contenir només lletres.

- El telèfon ha de contenir només números.

- La contrasenya ha d'incloure números i lletres.

- L'email ha de tenir format d'email.
*/

const expresiones = {
   nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
   apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   password: /^.{4,12}$/, // 4 a 12 digitos.
   direccion: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
   telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};


const validateCampos = (e) => {

   switch (e.target.name) {
      case "fname":
         if(expresiones.nombre.test()){

         } else {

         };
      break;
      case "lname":
         
      break;
      case "email":
         
      break;
      case "Password":

      break;
      case "address":
            
      break;
      case "phone":
            
      break;     

   }

};


inputs.forEach((input) => {
   input.addEventListener('keyup', validateCampos);
   input.addEventListener('blur', validateCampos);
});


// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    // First Name, 
     
   
}

