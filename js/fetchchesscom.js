var boite = document.getElementById("boitenoire");
fetch("https://api.chess.com/pub/player/gamingboiii").then(function(response) {
    
response.text().then(function(text){
        texte = JSON.parse(text);

        var a = document.getElementById("avatar");
        a.setAttribute('src', texte["avatar"]);
        document.getElementById("username").append(texte["username"]);
        document.getElementById("amis").append(texte["followers"]);
        

        // let unix_timestamp = texte["last_online"];
        // var date = new Date(unix_timestamp*1000);

        // document.getElementById("online").append(date);

    });

});

fetch("https://api.chess.com/pub/player/gamingboiii/stats").then(function(response) {
    response.text().then(function(text) {
        texte = JSON.parse(text);
        document.getElementById("elo").append(texte["chess_blitz"]["last"]["rating"]);
        document.getElementById('victoire').append(texte["chess_blitz"]["record"]["win"]);
        document.getElementById('defaite').append(texte["chess_blitz"]["record"]["loss"]);
    });
});