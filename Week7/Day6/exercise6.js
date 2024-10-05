const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

const newListItem = document.createElement('li');
const newLink = document.createElement('a');
newLink.setAttribute('href', '#'); // Set the link's destination
const linkText = document.createTextNode('Logout');
newLink.appendChild(linkText);

newListItem.appendChild(newLink);

const ulElement = document.querySelector('ul');

ulElement.appendChild(newListItem);

const firstListItem = ulElement.firstElementChild;

const lastListItem = ulElement.lastElementChild;

console.log('First list item text:', firstListItem.textContent);
console.log('Last list item text:', lastListItem.textContent);