const displayController = {

    displayPlayers: function(){
        const labelX = document.querySelector(`label[for="x"]`);
        const labelO = document.querySelector(`label[for="o"]`);

        if (players.player1.token === "x"){
            labelX.textContent = players.player1.name;
            labelO.textContent = players.player2.name;
        }else{
            labelX.textContent = players.player2.name;
            labelO.textContent = players.player1.name;
        }
    },

    displayMessage: function (msg){
        const msgArea = document.getElementById("messageArea");
        msgArea.innerHTML = msg;
        gameBoard.gameOver = true
    },

    displayToken: function(token, location){
        const theDivWithToken = document.getElementById(location); 
        if (token === "x"){
            theDivWithToken.classList.add("cross");
        }else{
            theDivWithToken.classList.add("nots");
        }
    }
}

const gameBoard ={
    boardSize: 3,
    movesMade: 0,
    gameOver: false,
    winner: "",
    board : [["","",""],["","",""],["","",""]],
    location1 : "",
    location2 : "",

    tokenPlacements : function(token, location){
        displayController.displayToken(token,location );
        location = location.split("");
        let a = location[0];
        let b = location[1];
        this.board[a][b] = token;
        this.movesMade++;
        // check 3 in a row
        //check moves
        if (this.threeInARowCheck(token)){
            if(players.player1.token === token){
                this.winner = players.player1.name;
                displayController.displayMessage(this.winner+ " is the winner");
            }else if(players.player2.token === token){
                this.winner = players.player2.name;
                displayController.displayMessage(this.winner+ " is the winner");
            } else if ( this.movesMade === 9){
            displayController.displayMessage("It`s a tie");
            }
        };
    },

   playTurn : function () {
        if (this.movesMade < this.boardSize * this.boardSize && !this.gameOver) {
            if (players.player1.token === "x") {
                this.getPlayer1move().then((location) => {
                    this.tokenPlacements(players.player1.token, location);
                    this.tokenPlacements(players.player2.token,this.getPlayer2move());
                    this.playTurn(); // Call next turn
                });
            } else {
                this.tokenPlacements(players.player2.token, this.getPlayer2move());
                if(!this.gameOver){
                    this.getPlayer1move().then((location) => {
                        this.tokenPlacements(players.player1.token, location);
                        this.playTurn(); 
                    });   
                }
            };
        };
    },

    getPlayer1move: function () {
        return new Promise((resolve) => {
            const cells = document.getElementsByClassName("gameCells");
            const cellArray = Array.from(cells);

            const clickHandler = (e) => {
                const location = e.target.id;
                cellArray.forEach((element) => {
                    element.removeEventListener("click", clickHandler);
                });
                resolve(location);
            };

            cellArray.forEach((element) => {
                element.addEventListener("click", clickHandler);
            });
        });
    },


    getPlayer2move : function(){
       let location;
        do {
            location = this.generateLocationAI();
        }while(this.collision(location)=== true);

        return location;
    },
    

    threeInARowCheck : function(token){
            for (let i = 0; i < this.board.length; i++) {
                if (this.board[i][0] === token && this.board[i][1] === token && this.board[i][2] === token) {
                    return true;
                }
            }
            for (let j = 0; j < this.board[0].length; j++) {
                if (this.board[0][j] === token && this.board[1][j] === token && this.board[2][j] === token) {
                    return true;
                }
            }
            if (this.board[0][0] === token && this.board[1][1] === token && this.board[2][2] === token) {
                return true;
            }
            if (this.board[0][2] === token && this.board[1][1] === token && this.board[2][0] === token) {
                return true;
            }
            return false;
    },

    collision : function(location){
        let [a,b]=location;
        if (this.board[a][b] === "")
        {return false;}
        return true
    },

    generateLocationAI: function(){
        let row = Math.floor(Math.random()*this.boardSize);
        let col = Math.floor(Math.random()*this.boardSize);
        let location = row +""+col;
        return location;
    },

    gameStart: function(){
       this.movesMade = 0;
        this.gameOver =false;
        this.winner = "";
        this.board = [["","",""],["","",""],["","",""]];
    },

    gameRestart: function(){
        const restart = document.getElementById("restart");
        restart.addEventListener("click", (e) =>{
            location.reload();
        });
    }
}

const players = {

    player1 : {}, 
    player2 : {}, 

    tokenSelection: function(){
        return new Promise((resolve) => {
        
        function Player (name, token){
            this.name = name;
            this.token = token;
        }

        const tokenButtons = document.getElementsByClassName("token");
        let buttons = Array.from(tokenButtons);

        const tokenSelectionhandler = (e) => {
            let token = e.target.id;
            let theName = prompt("Whats your name?");
            this.player1 = new Player (theName, token);
            if (token === "x") {
                this.player2 = new Player("Computer", "o");
            }else{
                this.player2 = new Player("Computer", "x"); 
            };
            resolve();

        };
    
        buttons.forEach(element => {
            element.addEventListener("click", tokenSelectionhandler);});
        });
    }

};

window.onload = function(){
    gameBoard.gameStart();
    players.tokenSelection().then(() => {
        displayController.displayPlayers();
        gameBoard.playTurn();
        gameBoard.gameRestart();
    });
    }
    
