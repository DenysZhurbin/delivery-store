var state = {
  products: [
    {
      name: "product-1",
      title: "Стул 1 из данных",
      quantity: 3,
      orderAmount: 0
    },
    {
      name: "product-2",
      title: "Стул 2 из данных",
      quantity: 600,
      orderAmount: 0
    },
    {
      name: "product-3",
      title: "Стул 3 из данных",
      quantity: 100,
      orderAmount: 0
    },
  ],
};

function render(data) {
  var outputContainer = document.getElementsByClassName("container")[0];
  var products = data.products;

  while (outputContainer.firstChild) {
    outputContainer.removeChild(outputContainer.lastChild);
  }

  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    var productElement = document.createElement("div");
    // classList.add добавляет имя класса к уже имеющемуюся блоку (dom node)
    productElement.classList.add('product');
    // innerHtml = принимает строку, которую браузер понимает как html (будет как дочерний контент dom node)
    productElement.innerHTML = `<div class="product__title">${product.title}</div>
      <div class="product__actions" data-product-index="${i}" data-product-name="${product.name}">
          <input type="text" value="${product.quantity}" class="form-control form-control--available-quantity">
          <input type="text" value="${product.orderAmount}" class="form-control form-control--order-amount">
          <button type="button" class="btn btn-primary btn-increase-order-amount">Add</button>
      </div>`;
    // запись вида ${product.quantity} - это современный синтаксис template string es6

    outputContainer.appendChild(productElement);
  }
}

function handleUserAction() {
  var productsElements = document.getElementsByClassName("product");

  for (var i = 0; i < productsElements.length; i++) {
    var product = productsElements[i];
    var button = product.querySelectorAll(".btn-increase-order-amount")[0];

    button.addEventListener("click", function (event) {
      var button = event.target;
      var productIndex = button.parentNode.getAttribute("data-product-index");

      state.products[productIndex].orderAmount += 1;
      // todo - заменить перерисовку на обновлние атрибута input
      render(state);
      handleUserAction();
    });

  }
}

function getOrderValues(state) {
  return {

  }
}

function initCatalog() {
  render(state);
  handleUserAction();
  getOrderValues(state);
}

// note
// мы хотим всегда работать с данными
// приложение разделяется на Данные, Отрисовку (то что меняет документ), и фн-ции Меняющие Данные
// на основе данных выводятся значения - если нет функций render,
// но нужно обновить значение атрибута (например input, ты обязан обновить данные state)
// атрибуты удобны для связи js и document elements - если нужно, добавляй смело

// todo
// заменить перерисовку на обновление элемента и данных
// изучить функции для работы с документами - создание элемента, добавление/удаление класса,
// удаление элемента, вывод элемента в блок (appendChild)
// изучит функцию map и заменить ей циклы https://learn.javascript.ru/array-iteration#map
// устанавливать атрибут disabled на кнопку, если значение поля order-amount равно значению полю quantity
// фн-ция getOrderValues должна вернуть массив объектов, объект формата [{ name: $, orderAmount: $ }, ...]
// улучшать верстку