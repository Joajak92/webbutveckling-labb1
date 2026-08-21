const buyButtons = document.querySelectorAll(".buyButton");
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.name;
    alert(`Du har lagt till ${productName} i varukorgen.`);
  });
});
