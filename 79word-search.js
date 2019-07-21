let board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]


var exist = function(board, word) {
  // create cache
  let visitedNodes = {};

  // loop over board..
  for (let i = 0;i<board.length;i++){
    for (let j = 0;j<board[0].length;j++){
      if (board[i][j] === word[0]){
        if (board[i][j] === word){
          return true
        } else if (dfs(board, word,0, i, j)){
          return true
        }
      }
    }
  }

  function dfs(board,word,w,i,j){
    let position = i + ',' + j
    // console.log(position)
    
    if (visitedNodes[position]){
      return false// exit in case we already visited the node, 
          }
    console.log(position)
    if (w === word.length){
      return true
    } 

    // if (board[i][j] === undefined){
    //   return false
    // }
    if (i >=board.length || j >= board[0].length|| i<0 || j <0){
      return false
    } 

      let result = false;

     if (word[w] === board[i][j]){ // if we haven't, and the position we are at on the board corresponds to the index of word, save into cache. 
       visitedNodes[position] = true;
       result = dfs(board,word,w+1,i+1,j) || dfs(board,word,w+1,i-1,j) || dfs(board, word, w+1, i, j+1) || dfs(board, word, w+1, i, j-1)
       visitedNodes[position] = false

     } // keep cache of node you visited. 

     


     return result
    // log out of bounds condition     
  }

  // console.log('failed')
  return false
 
};

console.log(exist(board,'SEE'))