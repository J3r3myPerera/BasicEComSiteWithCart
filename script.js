document.addEventListener("DOMContentLoaded", function () {
  const itemsContainer = document.getElementById("items");
  const sidePanel = document.getElementById("side-panel");
  const cartContainer = document.getElementById("cart-items");
  const checkoutButton = document.getElementById("checkout-btn");

  const items = [
    { id: 1, name: "Item 1", price: 10, image: "item1.jpg" },
    { id: 2, name: "Item 2", price: 15, image: "item2.jpg" },
    { id: 3, name: "Item 3", price: 20, image: "item3.jpg" },
  ];

  // Function to display items
  function displayItems() {
    itemsContainer.innerHTML = "";
    items.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item");
      itemElement.innerHTML = `
                <img src="images/${item.image}" alt="${item.name}">
                <p>${item.name} - $${item.price}</p>
            `;
      itemElement.addEventListener("click", function () {
        addToCart(item);
      });
      itemsContainer.appendChild(itemElement);
    });
  }

  // Function to add item to cart
  function addToCart(selectedItem) {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${selectedItem.name} - $${selectedItem.price}`;
    cartContainer.appendChild(cartItem);
    showSidePanel();
  }

  // Function to show side panel
  function showSidePanel() {
    sidePanel.classList.remove("hidden");
  }

  // Event listener for checkout button
  checkoutButton.addEventListener("click", function () {
    alert("Checkout functionality not implemented yet.");
  });

  // Display initial items
  displayItems();
});
