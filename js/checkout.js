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
   nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
   apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   password: /^.{4,12}$/, // 4 a 12 digitos.
   direccion: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
   telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};
const campos = {
   nombre: false,
   apellido: false,
   correo: false,
   password: false,
   direccion: false,
	telefono: false
}

const validateCampos = (e) => {
   switch (e.target.name) {
      case "fname":
         validateCampo(expresiones.nombre, e.target, 'Name');
      break;
      case "lname":
         validateCampo(expresiones.apellido, e.target, 'LastName');
      break;
      case "email":
         validateCampo(expresiones.correo, e.target, 'Email');
      break;
      case "Password":
         validateCampo(expresiones.password, e.target, 'Password');
      break;
      case "address":
         validateCampo(expresiones.direccion, e.target, 'Address');
      break;
      case "phone":
         validateCampo(expresiones.telefono, e.target, 'Phone'); 
      break;     
   }
};

const validateCampo = (expresion, input, campo) => {
   if (expresion.test(input.value)) {
      document.getElementById(`error${campo}`).style.display = "none";
      document.getElementById(`div_${campo}`).classList.remove('input-incorrecto');
      document.getElementById(`div_${campo}`).classList.add('input-correcto');
      campos[campo] = true;
   } else {
      document.getElementById(`div_${campo}`).classList.add('input-incorrecto');
      document.getElementById(`error${campo}`).style.display = "block";
      campos[campo] = false;
   };

};


inputs.forEach((input) => {
   input.addEventListener('keyup', validateCampos);
   input.addEventListener('blur', validateCampos);
});

form.addEventListener('submit', (e) => {
   e.preventDefault();
});
// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    // First Name, 
     
   
};

