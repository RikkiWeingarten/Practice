let selectedColor = null;
let isMouseDown = false;

const documentBody = document.body;
const colorBlocks = document.querySelectorAll("#sidebar > *");
const fillableBlocks = document.querySelectorAll("#main > *");
const clearBtn = document.querySelector("button");

clearBtn.addEventListener("click", function() {
    fillableBlocks.forEach((block) => {
        block.style.backgroundColor = "white";
    });
});

documentBody.addEventListener("mousedown", function() {
    isMouseDown = true;
});

documentBody.addEventListener("mouseup", function() {
    isMouseDown = false;
});

colorBlocks.forEach((block) => {
    block.addEventListener("click", function(event) {
        selectedColor = event.target.style.backgroundColor;
    });
});

fillableBlocks.forEach((block) => {
    block.addEventListener("mousedown", function(event) {
        if (selectedColor) event.target.style.backgroundColor = selectedColor;
    });
    block.addEventListener("mouseover", function(event) {
        if (isMouseDown && selectedColor) event.target.style.backgroundColor = selectedColor;
    });
});
