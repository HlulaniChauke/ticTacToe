# ticTacToe
This code represents a simple implementation of a Tic-Tac-Toe game using HTML, CSS, and JavaScript. Let's break down the major components and their functionalities:

    HTML Structure:
        The HTML structure includes a game board with cells (represented by div elements) where players can place their tokens (X or O).
        There are buttons to allow players to choose their token (X or O).

    CSS Styling:
        The CSS styling likely includes styles for the game board, tokens (X and O), and other elements to make the game visually appealing.

    JavaScript Components:

        displayController Object:
            displayPlayers: Updates the display to show the names of the players and their chosen tokens (X or O).
            displayMessage: Updates a message area with a given message.
            displayToken: Adds a CSS class to a specific div element on the game board to visually represent a player's token.

        gameBoard Object:
            boardSize: Specifies the size of the game board (3x3 in this case).
            movesMade: Tracks the number of moves made.
            gameOver: Tracks whether the game is over.
            winner: Stores the name of the winner.
            board: Represents the game board as a 2D array.
            tokenPlacements: Places a player's token on the board at a specified location and checks for a winner or a tie.
            playTurn: Handles the turns of the players, allowing the human player to click on a cell and the computer player to make a move.
            getPlayer1move: Allows the human player to click on a cell and returns the location.
            getPlayer2move: Generates a random location for the computer player's move.
            threeInARowCheck: Checks if there are three tokens in a row horizontally, vertically, or diagonally.
            collision: Checks if a specific location on the board is already occupied.
            generateLocationAI: Generates a random location for the computer player's move.
            gameStart: Resets the game board and related variables for a new game.

        players Object:
            player1 and player2: Objects representing the two players, with properties for name and token.
            tokenSelection: Prompts the user to select a token (X or O) and enter their name. Initializes player objects accordingly.

    Window Load Event:
        The game starts when the window loads. It prompts the user to select a token, then displays the players, and initiates the first turn.
