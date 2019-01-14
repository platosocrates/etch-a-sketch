let boxContainer = document.querySelector('#box-container');
let boxWidth;
let x = 16;
let button = document.querySelector('button');
let boxes;

// creates boxes = x, box width = 100/x
function createBoxes(numberOfBoxes) {
    boxWidth = 100/x + "%";
    
    for(i = 0; i < (numberOfBoxes ** 2); i++) {
        const newBox = document.createElement('div');
        newBox.classList.toggle('box');
        newBox.style.width = boxWidth;
        boxContainer.appendChild(newBox);
    };
};

// clears grid and deletes all the boxes (besides container)
function deleteBoxes() {
    while (boxContainer.hasChildNodes()) {
        boxContainer.removeChild(boxContainer.firstChild);
    }
}

// initializes original 16x16 grid
createBoxes(x);
boxes = document.querySelectorAll('.box');

// function prompts for value to set grid, if not a positive integer then it alerts to try again
function buttonClick() {
    let p = Number(prompt("Enter the value you would like the width and height of the grid to be!"));
    if (Number.isInteger(p) && p > 0) {
        x = p;
        deleteBoxes();
        createBoxes(x);
        alert("Successfully set your grid!");
        boxes = document.querySelectorAll('.box');
        hoverBoxes();
    }
    else {
        alert("Try again, enter a positive integer this time!");
    }
}


// attaches an event listener for button to run buttonClick function

button.addEventListener('click', (e) => {
    buttonClick();
});

// function that returns a random rgb color value
// (one of the optional objectives)
let randomColor;
let randomNumber;

function randomizeNumber() {
    randomNumber = Math.floor(Math.random() * 255);
    return randomNumber;
}

function randomizeColor() {
    return 'rgb(' + randomizeNumber() + ', ' + randomizeNumber() + ', ' + randomizeNumber() + ')';
    
}

// function that attaches an even listener on hover to all of the .boxes

function hoverBoxes() {
    boxes.forEach((box) => {
        box.onmouseover = () => {
            box.style.backgroundColor = randomizeColor();
        }
    });
}

hoverBoxes();