let boardChecker = 
{
    '1':0,
    '2':0,
    '3':0,
    '4':0,
    '5':0,
    '6':0,
    '7':0,
    '8':0,
    '9':0,
}

let boardCheckerInit = 
{
    '1':0,
    '2':0,
    '3':0,
    '4':0,
    '5':0,
    '6':0,
    '7':0,
    '8':0,
    '9':0,
}

function resetChecker(){
    Object.assign(boardChecker,boardCheckerInit)
}


let board = 
[
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]

let newBoard = [[],[],[],[],[],[],[],[],[]]

function doneOrNot(board){
    for (let i = 0;i<board.length;i++){
        let j = 0
        for (j;j<board.length;j++){
            let verticalRow = board[j][i]
            boardChecker[verticalRow]++ 
            newBoard[i].push(verticalRow)
        }
        
        let updatedBoardCount = Object.values(boardChecker)
        let passedChecker = updatedBoardCount.every((el)=>{
            return el === 1
        })
        if (passedChecker !== true){
            return `Failed Sudoku Puzzle at row${j},column ${i+1},`
        }
        resetChecker();
    }
            return true
  }

  function checkBothDimensions(board){
      if (doneOrNot(board) === true && doneOrNot(newBoard) === true){
          return 'Good shit nigga. You got it!'
      } else {
          return 'You failed this shit'
      }
  }

  console.log(checkBothDimensions(board))