function rockPaperScissors(n) {
  let rounds = n;
  const results = [];
  
  const weapons = ['rock', 'paper', 'scissors'];
  
  function recurse(roundsLeft, played) {
    if(roundsLeft === 0) {
      results.push(played);
      return;
    }
    for(let i = 0; i < weapons.length; i++) {
      const current = weapons[i];
      recurse(roundsLeft-1, played.concat(current));
    }
  };
  recurse(rounds, []);
  return results;
}


console.log(rockPaperScissors(2))
