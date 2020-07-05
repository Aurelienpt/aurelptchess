var i = 0;

var config = {
    draggable: true,
    dropOffBoard: 'snapback',
    position: '1k1rr3/1pp2p1q/p4Pn1/2Q3P1/6B1/5P2/PPP5/1K1R4 w - - 0 1'
}

var board = ChessBoard('board', config);
var moves = [
    '1k1rr3/1pp2p1q/p4Pn1/2Q3P1/6B1/5P2/PPP5/1K1R4 w - - 0 1',
'1k2r3/1pp2p1q/p4Pn1/2Q3P1/6B1/5P2/PPP5/1K1r4 w - - 0 1',
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