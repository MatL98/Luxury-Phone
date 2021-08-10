class Phones {
  constructor(id, modelo, precio, stock,descr, img){
    this.id = id;
    this.modelo = modelo;
    this.precio = precio;
    this.stock = stock;
    this.descr = descr;
    this.img = img;
  }
}

export  const phone1 = new Phones(1, "Samsung Galaxy S21 Ultra",120000, 6, "Pantalla: 6,8 Dynamic Amoled Procesador: Exynos 2100  **Ram: 16 Gb", "/img/s21.png")
export  const phone2 = new Phones(2, "Samsung Galaxy Note 20",140000, 6, "Pantalla: 6,9 Dynamic Amoled Procesador: Exynos 990Ram: 12 Gb", "/img/note20.png")
export  const phone3 = new Phones(3, "Iphone 11 pro MAX",150000, 6, "Pantalla: 6,5 Oled Super Retina Procesador: Chip A13 BionicRam: 4 Gb", "/img/iphone11.png")
export  const phone4 = new Phones(4, "Iphone 12 pro MAX",175000, 6, "Pantalla: 6,7 Oled Super RetinaProcesador: Chip A14 BionicRam: 6 Gb", "/img/iphone12.png")

