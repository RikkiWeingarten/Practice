const div = document.querySelector('div');
console.log(div);

const lists = document.querySelectorAll('.list');

const pete = lists[0].querySelectorAll('li')[1];
pete.textContent = "Richard";

const secondItem = lists[1].querySelectorAll('li')[1];
lists[1].removeChild(secondItem);

lists.forEach(element => {
   element.querySelectorAll('li')[0].textContent = "Rikki";
});

for (let i = 0; i < lists.length; i++) {
    if (i ==0) {
        lists[i].classList.add('university');
        lists[i].classList.add('attendance');
    }
    lists[i].classList.add('student_list');
};

const containerDiv = document.getElementById('container');

containerDiv.style.backgroundColor = 'lightblue';
containerDiv.style.padding = '20px';


const secondList = document.querySelectorAll('.list')[1];
const danLi = secondList.querySelector('li:last-child');
danLi.style.visibility = 'hidden';


const richardLi = secondList.querySelector('li:nth-child(2)');
richardLi.style.border = '2px solid black';

document.body.style.fontSize = '18px';
