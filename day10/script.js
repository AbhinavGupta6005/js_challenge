let currentPlayer = 'X'
let board = ['','','','','','','','','']
let gameOver = false;

function makeMove(index){
    if(!gameOver && board[index] === ''){
        board[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        checkWinner();
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}

function checkWinner(){
    const winningCombinations = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(const combo of winningCombinations){
        const [a,b,c] = combo;
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            alert(`${currentPlayer} Win's`);
            gameOver = true;
        }
    }
    if(!board.includes('')){
        alert("It's a Tie");
        gameOver = true;
    }
}

function resetGame(){
    board = ['','','','','','','','',''];
    gameOver = false;
    currentPlayer = 'X';

    const cells = document.getElementById('board').children;
    for(let i = 0; i < cells.length; i++){
        cells[i].innerText = ''
    }
}