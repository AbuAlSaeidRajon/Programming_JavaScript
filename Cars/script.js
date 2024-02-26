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

  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value;
    searchCar(searchInput);
  });
  
  function displayCars() {
    const carTableBody = document.getElementById('car-table-body');
    carTableBody.innerHTML = '';
    carArray.forEach((car) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${car.licensePlate}</td>
        <td>${car.maker}</td>
        <td>${car.model}</td>
        <td>${car.owner}</td>
        <td>${car.price}</td>
        <td>${car.color}</td>
      `;
      carTableBody.appendChild(row);
    });
  }
  
  