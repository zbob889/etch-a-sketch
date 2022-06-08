const grid = document.getElementById('grid');

function createGrid(dimension){
    grid.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

    for (let i = 0; i < (dimension * dimension); i++){
        let cell = document.createElement('div');
        //cell.id = i + 1;
        cell.className = 'cell';
        //cell.style.height = `${500/dimension}px`;
        //cell.style.width = `${500/dimension}px`;
        cell.style.color = 'white';
        grid.appendChild(cell);
    }
}