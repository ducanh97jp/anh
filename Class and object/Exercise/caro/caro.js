let board = [];
for (let i = 0; i < 20; i++) {
    board[i] = new Array(20);
    for (let j = 0; j < 20; j++) {
        board[i][j] = null;
    }
}

let check_x = true;
let win = false;

function play(x, y) {
    if (win) {
        return;
    }
    if (board[x][y] == null) {
        if (check_x) {
            board[x][y] = "X";
        } else {
            board[x][y] = "O";
        }
        check_x = !check_x;
    } else {
        alert("o nay da duc danh dau!");
        return;
    }

    let divInput = document.getElementById("cell-" + x + "-" + y);
    divInput.innerHTML = board[x][y];
    check_win(x, y, board[x][y])
}
const check_win = (x, y, value) => {
    if (board[x][y + 1] == value && board[x][y + 2] == value && y < 18 ||
        board[x][y + 1] == value && board[x][y - 1] == value && y >= 1 && y < 19 ||
        board[x][y - 1] == value && board[x][y - 2] == value && y >= 2 && y < 20) {
        alert(value + " win");
        win = true;
    } else if (board[x + 1][y] == value && board[x + 2][y] == value && x < 18 ||
        board[x + 1][y] == value && board[x - 1][y] == value && x >= 1 && x < 19 ||
        board[x - 1][y] == value && board[x - 2][y] == value && x >= 2 && x < 20) {
        alert(value + 'win');
        win = true;
    } else if (board[x + 1][y + 1] == value && board[x + 2][y + 2] == value && y < 18 && x < 18 ||
        board[x - 1][y - 1] == value && board[x + 1][y + 1] == value && y >= 1 && y < 19 && x >= 1 && x < 19 ||
        board[x - 1][y - 1] == value && board[x - 2][y - 2] == value && y >= 2 && y < 20 && x >= 2 && x < 20) {
        alert(value + " win");
        win = true;
    } else if (board[x + 1][y - 1] == value && board[x + 2][y - 2] == value && y >= 18 && x < 18 ||
        board[x - 1][y + 1] == value && board[x + 1][y - 1] == value && y >= 1 && y < 19 && x >= 1 && x < 19 ||
        board[x - 1][y + 1] == value && board[x - 2][y + 2] == value && y < 18 && x >= 2) {
        alert(value + " win");
        win = true;
    }

}
function reStart() {
    for (let i = 0; i < 20; i++) {
        board[i] = new Array(20);
        for (let j = 0; j < 20; j++) {
            board[i][j] = null;
            document.getElementById("cell-" + i + "-" + j).innerHTML = board[i][j];
        }
    }
    win = false;
}