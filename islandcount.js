const numIslands = function(grid) {
  if (!grid.length){
    return 0
  }
  const cache = {}
  let count = 0
  for (let y = 0;y<grid.length;y++){
      for (let x = 0; x<grid[0].length;x++){
        if (grid[y][x] === '1' && !cache[`${y},${x}`]){
          console.log(y,x)
            exploreIsland(y,x)
            count++
        }
      }
  }
    
  function exploreIsland(posY,posX){
      
      if (posY < 0 || posX < 0 || posY >= grid.length || posX >= grid[0].length) // out of bounds buddy
        return;

      if (grid[posY][posX] === '0')
        return;
        
      if (cache[`${posY},${posX}`])
        return;

        if (grid[posY][posX] === '1'){
          cache[`${posY},${posX}`] = true
        }
      
       
      return exploreIsland(posY + 1, posX) || exploreIsland(posY - 1,posX) || exploreIsland(posY,posX+1) || exploreIsland(posY, posX-1);
     // mark node as visited
    
  }  

  return count
};

const testCase3 = [
                  ["1","1","1","1","1","1","1","1","1"],
                  ["1","0","0","0","0","0","0","0","1"],
                  ["1","0","1","0","1","0","1","0","1"],
                  ["1","0","1","0","1","0","1","0","1"],
                  ["1","0","1","0","1","0","1","0","1"],
                  ["1","0","0","0","0","0","0","0","1"],
                  ["1","1","1","1","1","1","1","1","1"]
                  ];


  console.log(numIslands(testCase3))