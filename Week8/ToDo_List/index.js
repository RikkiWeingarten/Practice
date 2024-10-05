const tasks = [];
const xIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="10" width="7.5" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff3dae" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>'

function addTask(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task').value;
    
    tasks.push(taskInput);
    const listTasks = document.querySelector('.listTasks');

    const taskDiv = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'taskCheckbox';
    checkbox.name = 'taskCheckbox';

    const label = document.createElement('label');
    label.htmlFor = 'taskCheckbox';
    label.textContent = taskInput;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", "10");
    svg.setAttribute("width", "7.5");
    svg.setAttribute("viewBox", "0 0 384 512");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "#ff3dae");
    path.setAttribute("d", "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z");

    svg.appendChild(path);

    taskDiv.appendChild(svg);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
 

    listTasks.appendChild(taskDiv);



};