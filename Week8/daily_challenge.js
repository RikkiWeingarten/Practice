const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const name = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place =document.getElementById("place").value;
    
    const story = document.getElementById("story");
    story.textContent = `Once upon a time in an old ${noun}, there lived the ${adjective} king named ${name}.
    He loved to ${verb} with his family in ${place}`
});