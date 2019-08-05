function uniquePaths(m,n){
  // START == (1,1)
  let startX = 1;
  let startY = 1;
  let memo = {};
  function move(x,y){
    if (x > m || y > n ) return 0; // out of bounds
    if (x === m || y === n){  // reached the end
        memo[`${x},${y}`] = 1;
        return 1;
    }
    if (memo[`${x},${y}`] === undefined) {
      memo[`${x},${y}`] = move(x+1,y) + move(x,y+1) 
    }
    return memo[`${x},${y}`]
  }
   move(startX,startY)
   console.log(memo)
   return memo['1,1']
// the robot cannot move to a value that is >=x && >= y ||  =< 0
}

//      2    1
//[ X , X , X  ] // 
//[ X , X , X  ]

console.log(uniquePaths(3,2))





// var uniquePaths = function(m, n) {
//   var arr = new Array(m);
//     for (var i = 0; i < arr.length; ++i) {
//       arr[i] = new Array(n);
//     }

//     let res = numberOfPathsRecDP(arr,m-1,n-1);
//     // console.log(arr)
//     //console.log(arr2D)
//     return res
//   };
  
//   function numberOfPathsRecDP(memo,m,n){
//     //console.log('index',m,n)
//     if(m === 0 || n === 0) {
//       memo[m][n] = 1
//       return 1; 
//     }
    
//     if(memo[m][n] === undefined){
//       //console.log(n)
//       memo[m][n] = numberOfPathsRecDP(memo,m-1,n) + numberOfPathsRecDP(memo,m,n-1)
//     }
//     return memo[m][n];
//   }

