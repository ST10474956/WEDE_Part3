// Array to hold cart items
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(productName, price) {
    cart.push({ product: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Item added to cart");
    updateCart(); // Update cart on the page immediately
}

// Function to update the cart display (on the confirmation page)
function updateCart() {
    let cartSummary = document.getElementById('order-summary');
    cartSummary.innerHTML = '';  // Clear previous items

    let cartTotal = 0;
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.product} - R${item.price.toFixed(2)}`;
        cartSummary.appendChild(listItem);
        cartTotal += item.price;
    });

    let totalElement = document.createElement('p');
    totalElement.textContent = `Total: R${cartTotal.toFixed(2)}`;
    cartSummary.appendChild(totalElement);
}

// When the cart page loads, show cart items
window.onload = function() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart();
};

// Function to open the cart (if you want to show a modal)
function openCart() {
    alert("Your cart has been updated.");
}
