let boxContainer = document.querySelector('#box-container');
let x = 16;

// creates boxes = x
function createBoxes(numberOfBoxes) {
    for(i = 0; i < numberOfBoxes; i++) {
        const newBox = document.createElement('div');
        newBox.classList.toggle('box');
        boxContainer.appendChild(newBox);
    };
};

createBoxes(x);