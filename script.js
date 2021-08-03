let carrito = [];

const phones = [
  {
    id: 1,
    modelo: "Samsung Galaxy S21 Ultra",
    precio: 120000,
    stock: 6,
    caracteristicas: `Pantalla: 6,8 Dynamic Amoled
                                Procesador: Exynos 2100  **
                                Ram: 16 Gb`,
    img: "/img/s21.png",
  },
  {
    id: 2,
    modelo: "Samsung Galaxy Note 20",
    precio: 140000,
    stock: 3,
    caracteristicas: `Pantalla: 6,9 Dynamic Amoled
                                Procesador: Exynos 990
                                Ram: 12 Gb`,
    img: "/img/note20.png",
  },
  {
    id: 3,
    modelo: "Iphone 11 pro MAX",
    precio: 150000,
    stock: 8,
    caracteristicas: `Pantalla: 6,5 Oled Super Retina
                                Procesador: Chip A13 Bionic
                                Ram: 4 Gb`,
    img: "/img/iphone11.png",
  },
  {
    id: 4,
    modelo: "Iphone 12 pro MAX",
    precio: 175000,
    stock: 10,
    caracteristicas: `Pantalla: 6,7 Oled Super Retina
                                Procesador: Chip A14 Bionic
                                Ram: 6 Gb`,
    img: "/img/iphone12.png",
  },
];





//Pinto en el html el array de objetos y los selecciono
for (const phone of phones) {
    let containerC = document.createElement("div");
    $("#rowCards").append(`
        <div class="card" style="width: 18rem;">
        <img src="${phone.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title" value= "">${phone.modelo}</h3>
            <p class="card-text">${phone.caracteristicas}</p>
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

    containerC.tabIndex = phone;
}


//Boton que agrega items al carrito
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
//Funciones para el carrito
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
            console.log(inputValue)
        }
    }
    carrito.push(newItem);
    renderCarrito();
    setLocalStorage();
    carritoTotalFinal();
}

function carritoTotalFinal() {
    let totalItems = 0;
    carrito.map((car) => {
        totalItems = car.total;
    });
    
    document.querySelector(".tbody").append(`Total de la compra: $ ${totalItems}`);
    getLocalStorage();
}

const bodyCarrito = document.querySelector(".tbody");
function renderCarrito() {
    bodyCarrito.innerHTML = "";
    carrito.map((item) => {
        const tr = document.createElement("tr");
        tr.classList.add("itemCarrito");
        const contenido = `
        <td scope="row">${item.id}</td>
        <td class="table__telefono">${item.title}</td>
        <td class="table__precio">$: ${item.price}</td>
            <td class="table__cantidad">
                <input type="number" id="cantidad"  value="${item.cantidad}">
                <button class="btn btn-delete-${item.id}" id="btn-delete-${item.id}">x</button>
            </td>
            <td class="table__iva">$: ${item.iva}</td>
            <td class="table__envio">$:${item.envio}</td>
            <td class="table__total">$:${item.total}</td>
            `;

        tr.innerHTML = contenido;
        bodyCarrito.appendChild(tr);

        document.getElementById("btn-delete-" + item.id).addEventListener(
        "click", removeItemCarrito);
    });
    }

    function removeItemCarrito(e) {
    e.target.parentNode.parentNode.remove();
    } 

    //Almacena datos del carrito
    function setLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function getLocalStorage() {
    if (localStorage.getItem("carrito")) {
        let itemDeCarrito = JSON.parse(localStorage.getItem("carrito"));
        carrito = itemDeCarrito
        console.log(itemDeCarrito);
    } else "no hay entradas";
}
