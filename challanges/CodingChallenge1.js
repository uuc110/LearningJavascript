const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
function checkWinner(avgDolphins, avgKoalas) {
  if(avgDolphins > avgKoalas){
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
  }else{
    return `Koalas win (${avgKoalas} vs ${avgDolphins})`
  }
}

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(avgDolphins, avgKoalas))