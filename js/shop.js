// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [{
      id: 1,
      name: 'cooking oil',
      price: 10.5,
      type: 'grocery'
   },
   {
      id: 2,
      name: 'Pasta',
      price: 6.25,
      type: 'grocery'
   },
   {
      id: 3,
      name: 'Instant cupcake mixture',
      price: 5,
      type: 'grocery'
   },
   {
      id: 4,
      name: 'All-in-one',
      price: 260,
      type: 'beauty'
   },
   {
      id: 5,
      name: 'Zero Make-up Kit',
      price: 20.5,
      type: 'beauty'
   },
   {
      id: 6,
      name: 'Lip Tints',
      price: 12.75,
      type: 'beauty'
   },
   {
      id: 7,
      name: 'Lawn Dress',
      price: 15,
      type: 'clothes'
   },
   {
      id: 8,
      name: 'Lawn-Chiffon Combo',
      price: 19.99,
      type: 'clothes'
   },
   {
      id: 9,
      name: 'Toddler Frock',
      price: 9.99,
      type: 'clothes'
   }
]
// Array with products (objects) added directly with push(). Products in this 
// array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but 
// each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// TODO Exercise 1
function buy(id) {
   // 1. Loop for to the array products to get the item to add to cart
   // 2. Add found product to the cartList array
   /*
         let listado = {};
         for (const item in products) {
            if (products[item].id == id) {
               listado = products[item]; // producto seleccionado
            }
         }
         
         cartList.push(listado);
   */

   // lanzando ejercicio 7
   addToCart(id);
}


// TODO Exercise 2 vaciado de Array cartList & cart de productos
function cleanCart() {
   //console.log(cartList);
   cartList.splice(0, cartList.length);
   cart.splice(0, cart.length);
}

// TODO Exercise 3
function calculateTotal() {
   // Calculate total price of the cart using the "cartList" array
   total = 0;
   for (let i = 0; i < cartList.length; i++) {
      total += cartList[i].price;
      // console.log("El resultado es " + total);
   };
}

// TODO Exercise 4
function generateCart() {
   // Using the "cartlist" array that contains all the items in the shopping cart, 
   // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

   let article = {};
   let exist = false;
   for (let i = 0; i < cartList.length; i++) {
      if (cart.length === 0) {
         // No hay articulo en el cart
         article = {
            id: cartList[i].id,
            name: cartList[i].name,
            price: cartList[i].price,
            type: cartList[i].type,
            quantity: 1,
            subtotal: cartList[i].price,
            subtotalWithDiscount: 0
         };
         cart.unshift(article);
         console.log(cart);
      } else {
         for (let j = 0; j < cart.length; j++) {
            if (cartList[i].id == cart[j].id) {
               // articulo SI esta en el cart
               cart[j].quantity += 1;
               cart[j].subtotal = cart[j].price * cart[j].quantity;
               exist = true;
            }
         }
         if (!exist) {
            // articulo NO esta en el cart
            article = {
               id: cartList[i].id,
               name: cartList[i].name,
               price: cartList[i].price,
               type: cartList[i].type,
               quantity: 1,
               subtotal: cartList[i].price * cartList[i].quantity,
               subtotalWithDiscount: 0
            };
            cart.push(article);
         }
         exist = false;
      }
   };
}


// TODO Exercise 5
function applyPromotionsCart() {
   // Apply promotions to each item in the array "cart"
   for (let i = 0; i < cart.length; i++) {
      if (cart[i].articulo.id == 1 && cart[i].quantity >= 3) {
         // Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.
         let preciOferta = 10;
         cart[i].subtotalWithDiscount = preciOferta * cart[i].quantity;
      } else if (cart[i].articulo.id == 3 && cart[i].quantity >= 10) {
         // En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3.
         let x = ((cart[i].articulo.price * 2) / 3);
         cart[i].subtotalWithDiscount = Number.parseFloat(x).toFixed(2) * cart[i].quantity;
      } else {
         cart[i].subtotalWithDiscount = 0;
      };
   }
   // Modificado para ejercicio 7
};


// ** Nivell II **

// Exercise 7
function addToCart(id) {
   // Refactor previous code in order to simplify it 
   // 1. Loop for to the array products to get the item to add to cart
   // 2. Add found product to the cart array or update its quantity in case it has been added previously.
   const n = (id - 1);
   let exist = false;
   if (cart.length === 0) {
      // No hay articulo en el cart
      cart.unshift({
         articulo: products[n],
         quantity: 1,
         subtotal: products[n].price,
         subtotalWithDiscount: 0
      });
   } else {
      // articulo SI esta en el cart  
      for (let i = 0; i < cart.length; i++) {
         if (products[n].id == cart[i].articulo.id) {
            // articulo SI esta en el cart
            cart[n].quantity += 1;
            cart[n].subtotal = cart[n].articulo.price * cart[n].quantity;
            exist = true;
         }
      };
      if (!exist) {
         // articulo NO esta en el cart
         cart.push({
            articulo: products[n],
            quantity: 1,
            subtotal: products[n].price,
            subtotalWithDiscount: 0
         });
      };
      exist = false;
   };
   applyPromotionsCart();
   console.log(cart);
};

// Exercise 8
function removeFromCart(id) {
   // 1. Loop for to the array products to get the item to add to cart
   // 2. Add found product to the cartList array
   const n = (id - 1);
   console.log(cart[n].articulo.id);
   if (id == cart[n].articulo.id) {
      // articulo SI esta en el cart
      if (cart[n].quantity == 1) {
         cart[n] = [];
      } else {
         cart[n].quantity -= 1;
         cart[n].subtotal = cart[n].articulo.price * cart[n].quantity;
         applyPromotionsCart();
      }
   };
}

// Exercise 9
function printCart() {
   // Fill the shopping cart modal manipulating the shopping cart dom

}