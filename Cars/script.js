class Car {
    constructor(licensePlateNumber, maker, model, owner, price, color) {
      this.licensePlate = licensePlateNumber;
      this.maker = maker;
      this.model = model;
      this.owner = owner;
      this.price = price;
      this.color = color;
    }
  }
  const carArray = [];
  
  const carForm = document.getElementById('car-form');
  carForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const licensePlate = document.getElementById('license-plate').value;
    const maker = document.getElementById('maker').value;
    const model = document.getElementById('model').value;
    const owner = document.getElementById('owner').value;
    const price = document.getElementById('price').value;
    const color = document.getElementById('color').value;
    const newCar = new Car(licensePlate, maker, model, owner, price, color);
    carArray.push(newCar);
    displayCars();
    carForm.reset();
  });
  
  