
alert("Game On!!!");

var board = [
    [null, null, null, "S", null],
    [null, "S", null, "S", null ],
    ["S", null, null, null, null ],
    [null, "S", null, null, null],
    [null, null, null, null, "S"],
   ];
   
//   for (let i = 0; i < 10; i++){
//    var row = getRandomNum();
// var column = getRandomNum();
   
//     var randomSquare = board[row][column];
   
//    if (randomSquare === "S"){
//      console.log("Hit on: " + row + ", " + column);
//      board[row][column] = null;
//    }
//    else {
//      console.log("Missed")
//    }
//    }
   
//   function getRandomNum(){
//    return Math.floor(Math.random() * 5);
//   }







   for (let r=0; r < board.length; r++){

      for (let c=0; c < board[r].length; c++){
        if (board[r][c] === "S"){

        return 
         // console.log ('Ship found at: ${r}, ${c}')
        }
      }
   }

   for (let i = 0; i < 10; i++){

      let randRow = Math.floor(Math.random() * board.length );

      let randCol = Math.floor(Math.random() * board[randRow].length);

      let strike = board[randRow][randCol];

      if(strike === 'S'){
          board[randRow][randCol] = null;

        checkIfWin();
      
      }

   }