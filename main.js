function Product(productName, price, inStock) {
    this.productName = productName;
    this.price = price;
    let _inStock = inStock;

    this.getInStock = function () {
        return _inStock;
    }

    this.addToStock = function (quantity) {
        if (typeof quantity === 'number') {
            return _inStock += quantity;
        }
    }

    this.removeToStock = function (quantity) {
        if (typeof quantity === 'number') {
            return _inStock -= quantity;
        }
    }
}


function Book(title, author, quantityOfPages) {
    Product.call(this, 'livro de aventura', 52.65, 10);
    this.title = title;
    this.author = author;
    this.quantityOfPages = quantityOfPages;
}

function Descktop(cpu, gpu, ramMemory, storage) {
    Product.call(this, 'Personal Computer', 8356, 12);
    this.cpu = cpu;
    this.gpu = gpu;
    this.ramMemory = ramMemory;
    this.storage = storage;
}

function Car(brand, model, fabricationYear) {
    Product.call(this, 'SUV Jeap', 105000, 25);
    this.brand = brand;
    this.model = model;
    this.fabricationYear = fabricationYear;
}


const product = new Product('book', 120, 30)
console.log(product);
console.log(product.getInStock());
product.addToStock(20);
console.log(product.getInStock());
product.removeToStock(15)
console.log(product.getInStock());



const book = new Book('Eragon', 'Christopher Paolini', 468)
console.log(book);
console.log(book.getInStock());
book.addToStock(20);
console.log(book.getInStock());
book.removeToStock(15)
console.log(book.getInStock());


const pcDesktop = new Descktop('i7 11ª generation', 'RTX 3060', '16GB', 'SSD-520')
console.log(pcDesktop);
console.log(pcDesktop.getInStock());
pcDesktop.addToStock(20);
console.log(pcDesktop.getInStock());
pcDesktop.removeToStock(15)
console.log(pcDesktop.getInStock());



const car = new Car('Jeap', 'Renegate', 2023);
console.log(car);
console.log(car.getInStock());
car.addToStock(20);
console.log(car.getInStock());
car.removeToStock(15)
console.log(car.getInStock());



