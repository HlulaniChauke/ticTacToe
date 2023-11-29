const displayController = {
    tokenSelection: function(){

    },
    
    gameStart: function(){

    },
    
    displayWinner: function(){

    },
    displayToken: function(token, {a,b}){
        

    }
}

const gameBoard ={
    boardSize: 3,
    movesMade: 0,
    board : [["","",""],["","",""],["","",""]],

    tokenPlacements : function(token, location){
        let {a,b} = location;
        this.board[a][b] = token;
        displayToken(token, {a,b})
    },
    

    threeInARowCheck : function(){
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
    }
}

const players = {

    infor : function(){
        function Player (name, token){
            this.name = name;
            this.token = token;
        }
        
        let name = getName();
        let token = getToken();
        let player1 = new Player(name, token);
        if (token === "X"){
            player2 = new Player("AI", "O");
        }else{
            player2 = new Player("AI", "X");
        }
        let arr = [player1, player2];
       return arr;
    }

};

function getName(){
    // return prompt("Enter your name please");
}

function getToken(){
    // return prompt("Token please?");
}

// let theToken = ""
// function getToken(){
//     const tokenButtons = document.getElementsByClassName("token");
//     buttons = Array.from(tokenButtons);
//     buttons.forEach( button => {
//         button.addEventListener("click", (e) =>{
//             theToken = e.target.id;
//          });
//  console.log(theToken);
//     });
//     return theToken;
// }

window.onload = function(){
    console.log(getToken());
}