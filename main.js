//dichiaro variabili
let sceltaGiocatore;
let sceltaComputer;
let idIconaComputer;

//variabile booleana per chi sta vincendo
let vinceGiocatore = true;



//setto punteggio tabelloni a 0
let playerCount = 0;
let computerCount = 0;

//catturo pulsante restart
let reset = document.querySelector(".myButton");



//rendo dinamici con string interpolation i due tabelloni
document.querySelector("p:nth-child(1)").innerHTML = `Punteggio Giocatore: ${playerCount}`;
let punteggioGiocatore = document.querySelector("p:nth-child(1)");


document.querySelector("p:nth-child(2)").innerHTML = `Punteggio Computer: ${computerCount}`;
let punteggioComputer = document.querySelector("p:nth-child(2)")



//catturo icone 
let icone = document.querySelectorAll(".cards i");


//catturo il modal e modal content
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal-content");
let cards = document.querySelectorAll(".modal-content i");
let sasso = document.querySelector("modal-content #sasso");



//aggiungo listener per chiuder il modal

modal.addEventListener("click", function() {
    this.style.display = "none";
    sceltaComputer = "";
    sceltaGiocatore = "";
    document.getElementById("h2-sasso").innerHTML = "<h3><span></span><br></h3>";
    document.getElementById("h2-carta").innerHTML = "<h3><span></span><br></h3>";
    document.getElementById("h2-forbice").innerHTML = "<h3><span></span><br></h3>";
    $("br").remove();
    for (let card of cards) {
        card.style.display = "none";
    };

});

reset.addEventListener("click", function() {
    playerCount = 0;
    computerCount = 0;
    document.querySelector("p:nth-child(1)").innerHTML = `Punteggio Giocatore: ${playerCount}`;
    document.querySelector("p:nth-child(2)").innerHTML = `Punteggio Computer: ${computerCount}`;
    sceltaComputer = "";
    sceltaGiocatore = "";
})


//creo funzione per generare scelta random pc
function randomPc() {

    sceltaComputer = Math.floor((Math.random() * 3) + 1);
    if (sceltaComputer == 1) {
        sceltaComputer = "sasso";
    } else if (sceltaComputer == 2) {
        sceltaComputer = "carta";
    } else if (sceltaComputer == 3) {
        sceltaComputer = "forbice";
    }
}


//funziomne startgame

function startGame() {

    randomPc();

    //ipotesi pareggio 
    if (sceltaComputer == sceltaGiocatore) {
        console.log("pareggio");
        modal.style.display = "block";

        if (sceltaComputer == "sasso") {
            for (let card of cards) {
                if (card.id == "sasso") {
                    card.style.display = "block";
                    document.getElementById("h2-sasso").innerHTML = "<h3><span>Pareggio!</span><br> Il Computer ha scelto:</h3>";
                    //document.querySelector(".modal-content p:nth-child(1)").innerHTML = "<p>Il Computer ha scelto:</p>";
                    //document.querySelector(".modal-content h2:nth-child(1)").style.color = "black";
                    document.querySelector("#h2-sasso span").style.color = "blue";
                }
            }

        } else if (sceltaComputer == "carta") {
            for (let card of cards) {
                if (card.id == "carta") {
                    card.style.display = "block";

                    document.getElementById("h2-carta").innerHTML = "<h3><span>Pareggio!</span><br> Il Computer ha scelto:</h3>";
                    document.querySelector("#h2-carta span").style.color = "blue";
                }
            }

        } else {
            for (let card of cards) {
                if (card.id == "forbice") {
                    card.style.display = "block";

                    document.getElementById("h2-forbice").innerHTML = "<h3><span>Pareggio!</span><br> Il Computer ha scelto:</h3>";
                    document.querySelector("#h2-forbice span").style.color = "blue";
                }
            }
        }
    }
    //altre ipotesi
    else if (sceltaGiocatore == "sasso" && sceltaComputer == "carta") {
        console.log("Vince il Computer!");
        modal.style.display = "block";
        computerCount++;
        document.querySelector("p:nth-child(2)").innerHTML = `Punteggio Computer: ${computerCount}`;
        //document.querySelector(".modal-content h2:nth-child(1)").style.color = "red";

        for (let card of cards) {
            if (card.id == "carta") {
                card.style.display = "block";
                document.getElementById("h2-carta").innerHTML = "<h3><span>Vince il Computer!</span><br> Il Computer ha scelto:</h3>";
                document.querySelector("#h2-carta span").style.color = "red";
            }
        }

    } else if (sceltaGiocatore == "sasso" && sceltaComputer == "forbice") {
        console.log("Hai Vinto!");
        modal.style.display = "block";
        playerCount++;
        document.querySelector("p:nth-child(1)").innerHTML = `Punteggio Giocatore: ${playerCount}`;
        //document.querySelector(".modal-content h2:nth-child(1)").style.color = "green";

        for (let card of cards) {
            if (card.id == "forbice") {
                card.style.display = "block";
                document.getElementById("h2-forbice").innerHTML = "<h3><span>Hai Vinto!</span><br> Il Computer ha scelto:</h3>";
                document.querySelector("#h2-forbice span").style.color = "green";
            }
        }

    } else if (sceltaGiocatore == "carta" && sceltaComputer == "sasso") {
        console.log("Hai Vinto!");
        modal.style.display = "block";
        playerCount++;
        document.querySelector("p:nth-child(1)").innerHTML = `Punteggio Giocatore: ${playerCount}`;
        //document.querySelector(".modal-content h2:nth-child(1)").style.color = "green";


        for (let card of cards) {
            if (card.id == "sasso") {
                card.style.display = "block";
                document.getElementById("h2-sasso").innerHTML = "<h3><span>Hai Vinto!</span><br> Il Computer ha scelto:</h3>";
                document.querySelector("#h2-sasso span").style.color = "green";
            }
        }

    } else if (sceltaGiocatore == "carta" && sceltaComputer == "forbice") {
        console.log("Vince il Computer!");
        modal.style.display = "block";
        computerCount++;
        document.querySelector("p:nth-child(2)").innerHTML = `Punteggio Computer: ${computerCount}`;
        //document.querySelector(".modal-content h2:nth-child(1)").style.color = "red";


        for (let card of cards) {
            if (card.id == "forbice") {
                card.style.display = "block";
                document.getElementById("h2-forbice").innerHTML = "<h3><span>Vince il Computer!</span><br> Il Computer ha scelto:</h3>";
                document.querySelector("#h2-forbice span").style.color = "red";
            }
        }

    } else if (sceltaGiocatore == "forbice" && sceltaComputer == "sasso") {
        console.log("Vince il Computer!");
        modal.style.display = "block";
        computerCount++;
        document.querySelector("p:nth-child(2)").innerHTML = `Punteggio Computer: ${computerCount}`;
        //document.querySelector(".modal-content h2:nth-child(1)").style.color = "red";


        for (let card of cards) {
            if (card.id == "sasso") {
                card.style.display = "block";
                document.getElementById("h2-sasso").innerHTML = "<h3><span>Vince il Computer!</span><br> Il Computer ha scelto:</h3>";
                document.querySelector("#h2-sasso span").style.color = "red";
            }
        }

    } else if (sceltaGiocatore == "forbice" && sceltaComputer == "carta") {
        console.log("Hai Vinto!");
        modal.style.display = "block";
        playerCount++;
        document.querySelector("p:nth-child(1)").innerHTML = `Punteggio Giocatore: ${playerCount}`;
        //document.querySelector(".modal-content h2:nth-child(1)").style.color = "green";


        for (let card of cards) {
            if (card.id == "carta") {
                card.style.display = "block";
                document.getElementById("h2-carta").innerHTML = "<h3><span>Hai Vinto!</span><br> Il Computer ha scelto:</h3>";
                document.querySelector("#h2-carta span").style.color = "green";
            }
        }

    }
};



//aggiungo un listener al click delle cards che fa scattare le due scelte

for (let icona of icone) {
    icona.addEventListener("click", function() {
        sceltaGiocatore = this.id;
        startGame();

    })
};