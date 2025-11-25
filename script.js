// TEST - confirms script is loading
console.log("✅ script.js loaded");

// Featured items
const featuredItems = [
  {
    id: 1,
    name: "Classic Chocolate Cake",
    price: "KES 1500",
    image: "images/chocolate-cake.jpg",
    description: "Rich, moist chocolate cake with creamy frosting"
  },
  {
    id: 2,
    name: "Vanilla Cupcakes",
    price: "KES 100",
    image: "images/vanilla_cupcakes.jpg",
    description: "Soft vanilla cupcakes topped with smooth buttercream"
  },
  {
    id: 3,
    name: "Artisan Sourdough",
    price: "KES 200",
    image: "images/sourdough.jpg",
    description: "Traditional sourdough with a crisp golden crust"
  },
  {
    id: 4,
    name: "Strawberry Tart",
    price: "KES 500",
    image: "images/strawberry-tart.jpg",
    description: "Fresh strawberries layered over silky custard"
  }
];

// Cart
let cartItems = 0;
const cartCountElement = document.getElementById('cartCount');

function updateCartCount() {
  cartCountElement.textContent = cartItems;
}

function addToCart() {
  cartItems++;
  updateCartCount();
}

// Render products
function generateProducts() {
  const grid = document.getElementById('productsGrid');

  if (!grid) {
    console.error("❌ productsGrid not found");
    return;
  }

  grid.innerHTML = '';

  featuredItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${item.image}" class="product-image" style="width:100%;height:220px;object-fit:cover;">
      <div style="padding:15px">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <strong>${item.price}</strong>
          <button onclick="addToCart()" class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  console.log("✅ Products rendered");
}

// INIT
document.addEventListener('DOMContentLoaded', generateProducts);
