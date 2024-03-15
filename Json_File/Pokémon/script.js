let pokemons = [];

const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
    .then((response) => response.json())
    .then((json) => {
      const fetches = json.results.map((item) => {
        return fetch(item.url).then((res) => res.json());
      });

      Promise.all(fetches).then((data) => {
        pokemons = data;
        displayData(pokemons);
        // console.log(pokemons);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};

fetchData();

const displayData = (data) => {
  const container = document.querySelector(".data");
  container.innerHTML = "";

  data.forEach((pokemon) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.innerHTML = `<h2>${pokemon.name}</h2>
    <div class="card">
    <p>Weight: ${pokemon.weight / 10} kg</p> 
    <p>Height: ${pokemon.height / 10} m</p>
    </div>
    `;
    container.appendChild(pokemonCard);
  });
};

const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

/* 
const searchInput = document.querySelector('#search');

const searchFoxes = (e) => {
  console.log(e.target.value);
};

searchInput.addEventListener('input', searchFoxes); */

const searchPokemons = debounce((searchInput) => {
  /* console.log(searchInpit); to check what data we are getting in console */
  const filteredData = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  displayData(filteredData);
}, 300);

document.querySelector("#search").addEventListener("input", (e) => {
  searchPokemons(e.target.value);
});
