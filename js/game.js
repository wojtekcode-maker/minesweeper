document.addEventListener('DOMContentLoaded', () =>{
    const boardElement = document.querySelector('#game-board');
    const resetButton = document.querySelector('.rest-game__button');

    const initilizeBoard = () => {
        boardElement.innerHTML = '';

        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener('click', onCellClick);
                boardElement.appendChild(cell);
            }
        }
    }

    const onCellClick = () => {
        // AJAX request to the backend
        return;
    }

    initilizeBoard();
});