let board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]


var exist = function(board, word) {
  board = board.reduce(function(counted, e){
      console.log((counted))
      return counted.concat(e);
  })

  console.log(board)
  
  var i = 0,
      hash = {};
  
  board.forEach(function(e){
      if(hash[e])hash[e]++;
      else hash[e] = 1;
  })
  
  word.split('').forEach(function(e){
      if(hash[e])hash[e]--;
      else return false
  })
  
  return true
};

console.log(exist(board,'String'))