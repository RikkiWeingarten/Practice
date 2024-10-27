const planets = ["Mercury", "Venus", "Mars", "Earth", "Jupiter", "Saturn", "Uranus", "Netune"];
const planetColors = ["gray","yellow", "blue","red", "orange",   "gold",  "lightblue", "darkblue"];

const section = document.querySelector('.listPlanets')
for (let i = 0; i <planets.length; i++) {
    let color = planetColors[i];
    let element = document.createElement('div');
    element.classList.add('planet');
    element.style.backgroundColor = color;
    section.appendChild(element)
}