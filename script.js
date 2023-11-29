const displayController = {
    //the actuall board
    //the tokens
    //the result
    //play/restart game
}

const gameBoard ={
    //choose token
    //generateMoves
    //noMoves
    //collision
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
    return prompt("Enter your name please");
}

function getToken(){
    return prompt("enter your token");
}

window.onload = function(){
    let myArr = players.infor();
    console.log(myArr[0].name, myArr[0].token);
    console.log(myArr[1].name, myArr[1].token);
}