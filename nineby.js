class threeByThree {
    board = document.querySelector('#' + selec + 'b');
    realBoard = [
        ['zero', 'one', 'two'],
        ['three', 'four', 'five'],
        ['six', 'seven', 'eight']
    ]

    checkWin() {
        let win = true;
        for (i = 0; i < 3; i++) {
            let x = this.realBoard[i][1]
            for (j = 0; j < 3; j++) {
                if (this.realBoard[i][j] != x) {
                    win = false;
                }
            }
            if (win) {
                return win;
            }
            win = true;


        }
        for (i = 0; i < 3; i++) {
            let x = this.realBoard[1][i]
            for (j = 0; j < 3; j++) {
                if (this.realBoard[j][i] != x) {
                    win = false;
                }
            }
            if (win) {
                return win;
            }
            win = true;
        }

        if ((this.realBoard[0][0] == this.realBoard[1][1]) && (this.realBoard[1][1] == this.realBoard[2][2])) {
            return true;
        }
        if ((this.realBoard[0][2] == this.realBoard[1][1]) && (this.realBoard[1][1] == this.realBoard[2][0])) {
            return true;
        }


        return false;
    }

    checkDraw() {
        let check = true;
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                if (this.realBoard[i][j] != 'red' && this.realBoard[i][j] != 'blue') {
                    check = false;
                }
            }
        }
        return check;
    }

}
let counter = 0;
let curColor = ''
let nine = [
    ['zero', 'one', 'two'],
    ['three', 'four', 'five'],
    ['six', 'seven', 'eight']
]
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {

        if (i == 0 && j == 0) {
            selec = 'zero'
        }
        if (i == 0 && j == 1) {
            selec = 'one'
        }
        if (i == 0 && j == 2) {
            selec = 'two'
        }
        if (i == 1 && j == 0) {
            selec = 'three'
        }
        if (i == 1 && j == 1) {
            selec = 'four'
        }
        if (i == 1 && j == 2) {
            selec = 'five'
        }
        if (i == 2 && j == 0) {
            selec = 'six'
        }
        if (i == 2 && j == 1) {
            selec = 'seven'
        }
        if (i == 2 && j == 2) {
            selec = 'eight'
        }
        nine[i][j] = new threeByThree;
    }
}

rbutton = document.querySelector('#reload')
rbutton.addEventListener('click', function(event) {
    location.reload();
})
let overallBoard = [
    ['zero', 'one', 'two'],
    ['three', 'four', 'five'],
    ['six', 'seven', 'eight']
]
let oxen = 0;

function allCheckWin() {
    let win = true;
    for (i = 0; i < 3; i++) {
        oxen = overallBoard[i][1]
        for (j = 0; j < 3; j++) {
            if (overallBoard[i][j] != oxen) {
                win = false;
            }
        }
        if (win) {
            return win;
        }
        win = true;


    }
    for (i = 0; i < 3; i++) {
        oxen = overallBoard[1][i]
        for (j = 0; j < 3; j++) {
            if (overallBoard[i][j] != oxen) {
                win = false;
            }
        }
        if (win) {
            return win;
        }
        win = true;
    }

    if ((overallBoard[0][0] == 'red' && overallBoard[1][1] == 'red') && (overallBoard[2][2] == 'red')) {
        oxen = overallBoard[0][0];
        return true;
    }
    if ((overallBoard[0][0] == 'blue' && overallBoard[1][1] == 'blue') && (overallBoard[2][2] == 'blue')) {
        oxen = overallBoard[0][0];
        return true;

    }
    if ((overallBoard[2][0] == 'red' && overallBoard[1][1] == 'red') && (overallBoard[0][2] == 'red')) {
        oxen = overallBoard[1][1];
        return true;

    }
    if ((overallBoard[2][0] == 'blue' && overallBoard[1][1] == 'blue') && (overallBoard[0][2] == 'blue')) {
        oxen = overallBoard[1][1];
        return true;

    }


    return false;
}

let x = 1;
let y = 1;
let tryx = 1;
let tryy = 1;
let oldx = 0;
let oldy = 0;
let n = document.querySelector('#board')
let pickNewLocation = false;
let oldColor = 'random';
nine[x][y].board.parentNode.style.backgroundColor = 'lightyellow';
n.addEventListener('click', function(event) {
    if (pickNewLocation) {
        oldx = x;
        oldy = y;
        if (event.target.parentNode.parentNode.id == 'zero') {
            x = 0;
            y = 0;
        }
        if (event.target.parentNode.parentNode.id == 'one') {
            x = 0;
            y = 1;
        }
        if (event.target.parentNode.parentNode.id == 'two') {
            x = 0;
            y = 2;
        }
        if (event.target.parentNode.parentNode.id == 'three') {
            x = 1;
            y = 0;
        }
        if (event.target.parentNode.parentNode.id == 'four') {
            x = 1;
            y = 1;
        }
        if (event.target.parentNode.parentNode.id == 'five') {
            x = 1;
            y = 2;
        }
        if (event.target.parentNode.parentNode.id == 'six') {
            x = 2;
            y = 0;
        }
        if (event.target.parentNode.parentNode.id == 'seven') {
            x = 2;
            y = 1;
        }
        if (event.target.parentNode.parentNode.id == 'eight') {
            x = 2;
            y = 2;
        }

        nine[oldx][oldy].board.parentNode.style.backgroundColor = oldColor;
        pickNewLocation = false;
    } else {
        if (event.target.parentNode.id == 'zerob') {
            tryx = 0;
            tryy = 0;
        }
        if (event.target.parentNode.id == 'oneb') {
            tryx = 0;
            tryy = 1;
        }
        if (event.target.parentNode.id == 'twob') {
            tryx = 0;
            tryy = 2;
        }
        if (event.target.parentNode.id == 'threeb') {
            tryx = 1;
            tryy = 0;
        }
        if (event.target.parentNode.id == 'fourb') {
            tryx = 1;
            tryy = 1;
        }
        if (event.target.parentNode.id == 'fiveb') {
            tryx = 1;
            tryy = 2;
        }
        if (event.target.parentNode.id == 'sixb') {
            tryx = 2;
            tryy = 0;
        }
        if (event.target.parentNode.id == 'sevenb') {
            tryx = 2;
            tryy = 1;
        }
        if (event.target.parentNode.id == 'eightb') {
            tryx = 2;
            tryy = 2;
        }

        if (tryx == x && tryy == y) {
            nine[x][y].board.parentNode.style.backgroundColor = 'lightyellow';

            let i = 4;
            let j = 3;
            let r = 2;

            r = event.target.id.slice(0, event.target.id.indexOf('-') + 1)

            if (event.target.id == '' + r + 'zero') {
                i = 0;
                j = 0;
            }
            if (event.target.id == '' + r + 'one') {
                i = 0;
                j = 1;
            }
            if (event.target.id == '' + r + 'two') {
                i = 0;
                j = 2;
            }
            if (event.target.id == '' + r + 'three') {
                i = 1;
                j = 0;
            }
            if (event.target.id == '' + r + 'four') {
                i = 1;
                j = 1;
            }
            if (event.target.id == '' + r + 'five') {
                i = 1;
                j = 2;
            }
            if (event.target.id == '' + r + 'six') {
                i = 2;
                j = 0;
            }
            if (event.target.id == '' + r + 'seven') {
                i = 2;
                j = 1;
            }
            if (event.target.id == '' + r + 'eight') {
                i = 2;
                j = 2;
            }



            if (!(nine[x][y].realBoard[i][j] == 'red' || nine[x][y].realBoard[i][j] == 'blue')) {
                if (counter % 2 == 0) {
                    curColor = 'red';
                    event.target.style.backgroundColor = 'red';

                } else {
                    event.target.style.backgroundColor = 'blue';
                    curColor = 'blue'
                }
                nine[x][y].realBoard[i][j] = curColor;



                if (nine[x][y].checkWin()) {
                    nine[x][y].board.parentNode.style.backgroundColor = curColor;

                    overallBoard[x][y] = curColor;
                }
                if (nine[x][y].checkDraw() && !nine[x][y].checkWin()) {
                    alert('Draw!')

                }
                if (allCheckWin()) {
                    alert(oxen + ' has won the game!')
                }
                oldx = x;
                oldy = y;
                if (!nine[x][y].checkWin()) {
                    nine[oldx][oldy].board.parentNode.style.backgroundColor = 'white';
                }
                x = i;
                y = j;
                counter++;

            }


        }
    }
    if (overallBoard[x][y] == 'red' || overallBoard[x][y] == 'blue') {
        pickNewLocation = true;
        oldColor = overallBoard[x][y];
        if (!allCheckWin()) {
            nine[x][y].board.parentNode.style.backgroundColor = 'purple'
        }
    } else {
        if (!allCheckWin()) {
            nine[x][y].board.parentNode.style.backgroundColor = 'lightyellow'
        }
    }



})