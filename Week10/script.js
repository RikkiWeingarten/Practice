const { button, elements, loading } = getDOMElements();

button.addEventListener('click', () => fetchCharacterData(elements));

function getDOMElements() {
    return {
        button: document.getElementById('button'),
        loading: document.getElementById('loading'),
        elements: {
        name: document.getElementById('name'),
        height: document.getElementById('height'),
        gender: document.getElementById('gender'),
        birth_year: document.getElementById('birth-year'),
        home_world: document.getElementById('home-world')
        }
    };
}

function fetchCharacterData(elements) {
    const randomId = Math.floor(Math.random() * 83) + 1; 
    const url = `https://www.swapi.tech/api/people/${randomId}`;

    loading.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Loading...`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const character = data.result.properties;
            return fetch(character.homeworld) 
                .then(response => response.json())
                .then(homeworldData => {
                    character.homeworld_name = homeworldData.result.properties.name;
                    displayCharacterData(character, elements);
                });
        })
        .catch(error => {
            console.error('Fetch error:', error);
            elements.name.textContent = "Oh no, that person isn't available";
            elements.height.textContent = '';
            elements.gender.textContent = '';
            elements.birth_year.textContent = '';
            elements.home_world.textContent = '';
        });
       
}


function displayCharacterData(character, elements) {
    elements.name.textContent = `${character.name}`;
    elements.height.textContent = `Height: ${character.height}`;
    elements.gender.textContent = `Gender: ${character.gender}`;
    elements.birth_year.textContent = `Birth Year: ${character.birth_year}`;
    elements.home_world.textContent = `Home World: ${character.homeworld_name}`;
}
