import {phone1, phone2, phone3, phone4} from "./SmartPhones.js"

const phones = [phone1, phone2, phone3, phone4]
let carrito = [];


  for(const phone of phones){
  $("#rowCards").append(`
        <div class="card" style="width: 18rem;">
        <img src="${phone.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title" value= "">${phone.modelo}</h3>
            <p class="card-text">${phone.descr}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="price">${phone.precio}</li>
            <li class="list-group-item" id="stock">Stock: ${phone.stock}</li>
            <li class="list-group-item" id="id">ID: ${phone.id}</li>
        </ul>
        <div class="card-body">
            <button class= "btn" id = "btn-carrito">Agregar al carrito</button>
        </div>
        </div>
                                `);

}

const bodyCarrito = document.querySelector(".tbody");
function renderCarrito() {
  bodyCarrito.innerHTML = "";
  carrito.map((item) => {
    var tr = document.createElement("tr");
    tr.classList.add("itemCarrito");
    const contenido = `
        <td scope="row">${item.id}</td>
        <td class="table__telefono">${item.title}</td>
        <td class="table__precio">$: ${item.price}</td>
            <td class="table__cantidad">
                <input type="number" id="cantidad" readonly value="${item.cantidad}">
                <button class="btn btn-delete-${item.id}" id="btn-delete-${item.id}">x</button>
            </td>
            <td class="table__iva">$: ${item.iva}</td>
            <td class="table__envio">$:${item.envio}</td>
            <td class="table__total">$:${item.total}</td>
            `;

    tr.innerHTML = contenido;
    bodyCarrito.appendChild(tr);

    document
      .getElementById("btn-delete-" + item.id)
      .addEventListener("click", removeItemCarrito);

      cleanCarrito()
  });
}

const clickButton = document.querySelectorAll("#btn-carrito");
clickButton.forEach((btn) => {
  btn.addEventListener("click", addToCarrito);
});

function addToCarrito(e) {
  const button = e.target;
  const item = button.closest(".card");
  const title = item.querySelector(".card-title").textContent;
  const price = item.querySelector("#price").textContent;
  const value = parseInt(price);
  const id = item.querySelector("#id").textContent;
  const iva = ivaDeItem(value);
  const envio = costoEnvio(value);
  const total = totalItem(value, iva, envio);

  const newItem = {
    title: title,
    price: value,
    id: id,
    iva: iva,
    envio: envio,
    total: total,
    cantidad: 1,
  };
  addItemCarrito(newItem);
}

const costoEnvio = (s) => s * 0.3;
const ivaDeItem = (x) => x * 0.21;
const totalItem = (a, b, c) => a + b + c;

function addItemCarrito(newItem) {
  const inputCantidad = bodyCarrito.querySelector("#cantidad");

  for (let i = 1; i < carrito.length; i++) {
    if (carrito[i].title === newItem.title) {
      carrito[i].cantidad;
      const inputValue = inputCantidad[i];
      inputValue.value;
      //return null;
      console.log(inputValue);
    }
  }
  carrito.push(newItem);
  renderCarrito();

  carritoTotalFinal();
  
}

function carritoTotalFinal() {
  setLocalStorage("carrito", carrito);
  console.log(carrito)
  /* let totalItems = 0;
  carrito.map((car) => {
    totalItems = car.total;
  });

  document
    .querySelector(".tbody")
    .append(`Total de la compra: $ ${totalItems}`); */
}

function removeItemCarrito(e) {
  e.target.parentNode.parentNode.remove();
  
}

function cleanCarrito() { 
  let list = document.querySelectorAll(".tbody")
  let btnClean = document.querySelector("#clean")

  btnClean.addEventListener("click" , function () {
    list.forEach(c => {
      c.remove()
    });
  })
}


//Almacena datos del carrito
function setLocalStorage(itemName, item) {
  let temp = JSON.parse(localStorage.getItem(itemName))
  if(temp){
    temp = {...temp, item}

  }else{
    temp = {item};
  }
  localStorage.setItem(itemName, JSON.stringify(temp));
}

function getLocalStorageOnload() {
  if (localStorage.getItem("carrito")) {
    let itemDeCarrito = JSON.parse(localStorage.getItem("carrito"));
    carrito = itemDeCarrito.item;
    renderCarrito()
  } else {""}}
  getLocalStorageOnload()

  function cleanLocalStorage() { 
    
  }
