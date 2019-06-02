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

function resetBoardChecker(){
    Object.assign(boardChecker,boardCheckerInit)
}

let test = [1,3,2,4,8,0]
let result = test.sort((a,b)=>a-b)
console.log(result)
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


function checkHorizontal(board){
    board.forEach((row)=>{

    })
}
let flippedBoard = [[],[],[],[],[],[],[],[],[]]

// function push3x3Array(board){
//     let threeByThree = []
//     for (let i = 0;i<board.length/3;i++){
//         let j = 0
//         for (j;j<board.length/3;j++){
//             threeByThree.push(board[i][j])
//         }
//     }
//     return threeByThree
// }


function columnChecker(board){
    for (let i = 0;i<board.length;i++){
        let j = 0
        for (j;j<board.length;j++){
            let verticalRow = board[j][i]
            boardChecker[verticalRow]++ 
            flippedBoard[i].push(verticalRow)
        }
        
        let updatedBoardCount = Object.values(boardChecker)
        let passedChecker = updatedBoardCount.every((el)=>{
            return el === 1
        })
        if (passedChecker !== true){
            return `Failed Sudoku Puzzle at row${j},column ${i+1},`
        }
        resetBoardChecker();
    }
            return true
  }

  function validSolution(board){
      if (columnChecker(board) === true && columnChecker(flippedBoard) === true){
          return 'Good shit nigga. You got it!'
      } else {
          return 'You failed this shit'
      }
  }
 
  console.time('Function #1');
  columnChecker(board)
  console.timeEnd('Function #1')



