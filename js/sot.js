var i = 0;

var config = {
    draggable: true,
    dropOffBoard: 'snapback',
    position: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
}

var board = ChessBoard('board', config);
var moves = [
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/pppp1ppp/8/4p3/6P1/8/PPPPPP1P/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR w KQkq - 0 1',
'rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 0 1'
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