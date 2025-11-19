// ========== PRODUCT SEARCH ==========
const searchInput = document.getElementById("productSearch");
if (searchInput) {
  searchInput.addEventListener("keyup", function() {
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = name.includes(filter) ? "block" : "none";
    });
  });
}

// ========== CART SYSTEM ==========
let cart = [];

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", function() {
    const product = this.parentElement.querySelector("h3").textContent;
    const price = this.parentElement.querySelector(".price").textContent;
    cart.push({ product, price });
    updateCart();
    cartModal.style.display = "block";
  });
});

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - ${item.price}`;
    cartItems.appendChild(li);

    const priceNum = parseFloat(item.price.replace(/[R,]/g, ""));
    total += priceNum;
  });

  cartTotal.textContent = `Total: R${total.toFixed(2)}`;
}

// ========== CART POPUP ==========
const cartModal = document.getElementById("cartModal");
const closeCart = document.querySelector(".close-cart");
const checkoutBtn = document.getElementById("checkoutBtn");

function openCart() {
  if (cartModal) cartModal.style.display = "block";
}

if (closeCart) {
  closeCart.onclick = () => cartModal.style.display = "none";
}

if (checkoutBtn) {
  checkoutBtn.onclick = () => {
    alert("Checkout complete! Thank you for your purchase.");
    cart = [];
    updateCart();
    cartModal.style.display = "none";
  };
}

window.onclick = function(event) {
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  }
};

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && cartModal) {
    cartModal.style.display = "none";
  }
});
// General scripts
function openCart() {
  document.getElementById("cartModal").style.display = "flex";
}
(function() {
  const input = document.getElementById('productSearch');
  if (!input) return;
  const cards = Array.from(document.querySelectorAll('.product-card'));
  const noResults = document.createElement('p');
  noResults.className = 'no-results';
  noResults.textContent = 'No products match your search.';
  input.parentNode.appendChild(noResults);
  noResults.style.display = 'none';

  let t;
  input.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      const q = input.value.trim().toLowerCase();
      let shown = 0;
      cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const price = card.querySelector('.price').textContent.toLowerCase();
        const match = name.includes(q) || price.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) shown++;
      });
      noResults.style.display = q && shown === 0 ? '' : 'none';
    }, 150);
  });
})();
