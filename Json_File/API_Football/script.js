
const fetchData = async () => {
    try {
      const response = await fetch("https://api-football-v1.p.rapidapi.com/v3/timezone");
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
    data.forEach((timezone) => {
      const postElement = document.createElement("div");
  
      postElement.innerHTML = `
    <h2>${user.name}</h2>
    <p>${user.email}</p>
    <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
   `;
  
      container.appendChild(postElement);
    });
  };
  



const url = 'https://api-football-v1.p.rapidapi.com/v3/timezone';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}