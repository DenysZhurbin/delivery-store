var state = {
  products: [
    {
      name: "",
      title: "Стул 1 из данных",
      quantity: 532,
      orderAmount: 0
    },
    {
      name: "",
      title: "Стул 2 из данных",
      quantity: 600,
      orderAmount: 0
    },
    {
      name: "",
      title: "Стул 3 из данных",
      quantity: 100,
      orderAmount: 0
    },
  ],
};

function render(data) {
  var outputContainer = document.getElementsByClassName("container")[0];
  var products = data.products;

  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    var productElement = document.createElement("div");
    productElement.classList.add('product');
    productElement.innerHTML = `<div class="product__title">${product.title}</div>
          <div class="product__actions">
              <input type="text" value="${product.quantity}" class="form-control form-control--available-quantity">
              <input type="text" value="${product.orderAmount}" class="form-control form-control--order-amount">
              <button type="button" class="btn btn-primary">Add</button>
          </div>`;

    outputContainer.appendChild(productElement);
  }
}

function handleUserAction() {
  var productsElements = document.getElementsByClassName("product");
  var buttons = document.querySelectorAll('.product .btn');
  console.log(buttons);
  // button.addEventListener("click", function (event) {
  //   console.log(event.target);
  // });
  for (var i = 0; i < productsElements.length; i++) {
    var product = productsElements[i];
    console.log(product);
    product.addEventListener("click", function (event) {
      console.log(event.target)
    });
  }
}

function initCatalog() {
  render(state);
  handleUserAction();
}