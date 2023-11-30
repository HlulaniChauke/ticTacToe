const displayController = {

    displayMessage: function (msg){
        const msgArea = document.getElementById("messageArea");
        msgArea.innerHTML = msg;
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

    tokenPlacements : function(token, location){
        let {a,b} = location;
        this.board[a][b] = token;
        displayToken(token, {a,b})
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
        if (this.board[a][b] === "")
        return false;
    },

    generateLocationAI: function(){
        let row = Math.floor(Math.random*this.boardSize);
        let col = Math.floor(Math.random*this.boardSize);
        return [row,col];
    },

    gameStart: function(){
       this.movesMade = 0,
        this.gameOver =false,
        this.winner = "",
        this.board = [["","",""],["","",""],["","",""]],
    }
}

const players = {

    tokenSelection: function(){
        const tokenButtons = document.getElementsByClassName("token");
        buttons = Array.from(tokenButtons);
        buttons.forEach(element => {
            element.addEventListener("click", (e) =>{
                let token = element.id;
                const nameLabel = document.querySelector(`label[for="${token}"]`);
                nameLabel.textContent = prompt("Whats your name?");
                if (token === "x") {
                    const nameLabel2 = document.querySelector(`label[for="o"]`);
                    nameLabel2.textContent = "Computer";
                }else{
                    const nameLabel2 = document.querySelector(`label[for="x"]`);
                    nameLabel2.t = "Computer";
                }
            }
            );
        });
    },
    
    infor : function(){
        function Player (name, token){
            this.name = name;
            this.token = token;
        }
        
        const player1Name = document.querySelector(`label[for="x"]`);

    }

};

window.onload = function(){
    console.log(getToken());
}