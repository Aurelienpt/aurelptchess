var i = 0;

var config = {
    draggable: true,
    dropOffBoard: 'snapback',
    position: '1r5k/6pp/2pr4/P1Q3bq/1P2Bn2/2P5/5PPP/R3NRK1 b - - 0 1'
}

var board = ChessBoard('board', config);
var moves = [
    '1r5k/6pp/2pr4/P1Q3bq/1P2Bn2/2P5/5PPP/R3NRK1 b - - 0 1',
'1r5k/6pp/2pr4/P1Q3bq/1P2B3/2P5/4nPPP/R3NRK1 w - - 1 2',
'1r5k/6pp/2pr4/P1Q3bq/1P2B3/2P5/4nPPP/R3NR1K b - - 2 2',
'1r5k/6pp/2pr4/P1Q3b1/1P2B3/2P5/4nPPq/R3NR1K w - - 0 3',
'1r5k/6pp/2pr4/P1Q3b1/1P2B3/2P5/4nPPK/R3NR2 b - - 0 3',
'1r5k/6pp/2p4r/P1Q3b1/1P2B3/2P5/4nPPK/R3NR2 w - - 1 4'
]


function deplacement(liste, variable) {
    variable++;
    board.position(liste[variable]);
    return verifi(variable, liste)
};

function deplacement_backward(liste, variable) {
    variable--;
    board.position(liste[variable]);
    return verifi(variable, liste)
};

function verifi(variable, liste) {
    console.log(variable)
    console.log(liste.length)
    if (variable < 0) {
        variable = 0
    }
    if (variable > liste.length) {
        variable = liste.length - 1
    }

    return variable
}