/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const cherry = {
  name: "Carton of Cherries",
  price: 4,
  quantity: 0,
  productId: 100,
  image: "images/cherry.jpg"
}

const orange = {
  name: "Bag of Oranges",
  price: 10,
  quantity: 0,
  productId: 101,
  image: "images/orange.jpg"
}

const strawberry = {
  name: "Carton of Strawberries",
  price: 5,
  quantity: 0,
  productId: 102,
  image: "images/strawberry.jpg"
}

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
products.push(cherry);
products.push(orange);
products.push(strawberry);

/* Declare an empty array named cart to hold the items in the cart */
let cart = []

// Global totalPaid variable to hold the total paid in dollars by the customer.
let totalPaid = 0;

/* A function to fetch the product from products array. Returns the product object. */
function fetchProduct(productId) {
  return products.filter((prod) => prod.productId == productId)[0];
}

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {

  // Find the product referenced by ID, this returns an array of objects that match the id so the actual item will be index 0.
  let curProduct = fetchProduct(productId);

  // Increment the quantity every time a product is added to cart.
  curProduct.quantity++;

  // Check to see if product already in cart array, if not add it.
  if (cart.indexOf(curProduct) === -1) {
    cart.push(curProduct);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  let curProduct = fetchProduct(productId);
  curProduct.quantity++;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let curProduct = fetchProduct(productId);

  if (curProduct.quantity >= 1){
    curProduct.quantity--;
    if (curProduct.quantity === 0){
      cart.splice(0, cart.length,...cart.filter((el) => el.productId !== productId));
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  curProduct = fetchProduct(productId);
  curProduct.quantity = 0;
  cart.splice(0, cart.length,...cart.filter((el) => el.productId !== productId));
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal() {
  let total = 0;

  for (const product of cart) {
    total += product.price * product.quantity;
  }

  return total;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(amount) {
  let total = cartTotal();
  totalPaid += amount;

  return totalPaid - total;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
