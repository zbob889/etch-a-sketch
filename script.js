const grid = document.getElementById('grid');

function createGrid(dimension){
    grid.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

    for (let i = 0; i < (dimension * dimension); i++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.color = 'white';
        grid.appendChild(cell);
    }
}