const cart = {};

const cartCountElement = document.getElementById("cartCount");
const cartItemsList = document.getElementById("cartItems");

document.querySelectorAll(".buyButton").forEach((button) => {
  button.addEventListener("click", () => {
    const article = button.closest("article");
    const name = button.dataset.name;
    const quantity = parseInt(article.querySelector(".quantityInput").value);

    if (cart[name]) {
      cart[name] += quantity;
    } else {
      cart[name] = quantity;
    }

    updateCartDisplay();
  });
});

function updateCartDisplay() {
  cartItemsList.innerHTML = "";

  const productNames = Object.keys(cart);

  if (productNames.length === 0) {
    cartItemsList.innerHTML = "<li>Varukorgen är tom</li>";
  } else {
    productNames.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = `${name} – ${cart[name]} st`;
      cartItemsList.appendChild(li);
    });
  }

  const totalCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  cartCountElement.textContent = totalCount;
}

const toggleButton = document.getElementById("toggleCartButton");
const closeButton = document.getElementById("closeCartButton");
const cartPanel = document.getElementById("cartPanel");

toggleButton.addEventListener("click", () => {
  cartPanel.classList.remove("hide");
  toggleButton.setAttribute("aria-expanded", "true");
});

closeButton.addEventListener("click", () => {
  cartPanel.classList.add("hide");
  toggleButton.setAttribute("aria-expanded", "false");
});
