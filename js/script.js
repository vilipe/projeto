var title = document.querySelector("#title");
var containerStart = document.getElementById("container-start");
var containerGame = document.getElementById("container-game")

function startGame() {
    var playerName = document.querySelector("#email").value;
    if(playerName == "email" || playerName == null) {
       
    } 


    title.innerHTML = playerName + " o que voce procura?";
    containerStart.style.display = "none";
    containerGame.style.display = "flex";
}
