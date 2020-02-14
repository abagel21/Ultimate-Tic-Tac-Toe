const board = document.querySelector('#board');
let counter = 0;
let curColor = ''
let realBoard = [
    ['zero', 'one', 'two'],
    ['three', 'four', 'five'],
    ['six', 'seven', 'eight']
]

function checkWin() {
    let win = true;
    for (i = 0; i < 3; i++) {
        let x = realBoard[i][1]
        for (j = 0; j < 3; j++) {
            if (realBoard[i][j] != x) {
                win = false;
            }
        }
        if (win) {
            return win;
        }
        win = true;


    }
    for (i = 0; i < 3; i++) {
        let x = realBoard[1][i]
        for (j = 0; j < 3; j++) {
            if (realBoard[j][i] != x) {
                win = false;
            }
        }
        if (win) {
            return win;
        }
        win = true;
    }

    if ((realBoard[0][0] == realBoard[1][1]) && (realBoard[1][1] == realBoard[2][2])) {
        return true;
    }
    if ((realBoard[0][2] == realBoard[1][1]) && (realBoard[1][1] == realBoard[2][0])) {
        return true;
    }


    return false;
}

function checkDraw() {
    let check = true;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (realBoard[i][j] != 'red' && realBoard[i][j] != 'blue') {
                check = false;
            }
        }
    }
    return check;
}
const rbutton = document.querySelector('#reload')
rbutton.addEventListener('click', function(event) {
    location.reload();
})

board.addEventListener('click', function(event) {
    console.log(event.target.id);
    let i = 4;
    let j = 3;
    if (event.target.id == 'zero') {
        i = 0;
        j = 0;
    }
    if (event.target.id == 'one') {
        i = 0;
        j = 1;
    }
    if (event.target.id == 'two') {
        i = 0;
        j = 2;
    }
    if (event.target.id == 'three') {
        i = 1;
        j = 0;
    }
    if (event.target.id == 'four') {
        i = 1;
        j = 1;
    }
    if (event.target.id == 'five') {
        i = 1;
        j = 2;
    }
    if (event.target.id == 'six') {
        i = 2;
        j = 0;
    }
    if (event.target.id == 'seven') {
        i = 2;
        j = 1;
    }
    if (event.target.id == 'eight') {
        i = 2;
        j = 2;
    }
    console.log(i, j);

    console.log(realBoard);
    if (!(realBoard[i][j] == 'red' || realBoard[i][j] == 'blue')) {
        if (counter % 2 == 0) {
            curColor = 'red';
            event.target.style.backgroundColor = 'red';

        } else {
            event.target.style.backgroundColor = 'blue';
            curColor = 'blue'
        }
        realBoard[i][j] = curColor;

        counter++;
        console.log(checkWin())
        if (checkWin()) {
            alert(curColor + " has won the game");

        }
        if (checkDraw() && !checkWin()) {
            alert('Draw!')

        }
    }
})