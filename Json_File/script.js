/* const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => displayData(json));
}; */

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();

const displayData = (data) => {
  console.log(data);
  const container = document.querySelector("#foxesContainer");

  //   data.forEach((post) => {
  data.forEach((user) => {
    const postElement = document.createElement("div");

    postElement.innerHTML = `
  <h2>${user.name}</h2>
  <p>${user.email}</p>
  <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
 `;

    container.appendChild(postElement);
  });
};
