const changeCellsButton = document.getElementById('changeCellsButton');
changeCellsButton.addEventListener('click', function() {
    let number = window.prompt('How many cells would you like on each side?');
    createGrid(number);
});


const grid = document.getElementById('grid');

function createGrid(dimension){
    grid.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

    for (let i = 0; i < (dimension * dimension); i++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.backgroundColor = 'white';
        grid.appendChild(cell);
    }

    grid.addEventListener('mouseover', function(event) {
        let cell = event.target;
        if (cell.classList.contains('cell')) {
            cell.style.backgroundColor = 'black';}
    })
}