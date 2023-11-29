const displayController = {

    //the actuall board
    //the tokens
    //the result
    //play/restart game
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

    },
    collision : function(){

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