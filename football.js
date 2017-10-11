
function random(m, s) {
  return Math.round(m + 2.0 * s * (Math.random() + Math.random() + Math.random() - 1.5));
}

function getSum(total, num) {
    return total + num;
}
function myFunction(item) {
    return results.reduce(getSum);
}

let tests = 10000000;
let winBet = 8.7;
let loseBet = 10;
let currentMoney = 0;
let spread = 10;

for ( i=0; i<tests; i++ ){
  let x = random(5, 11.7);
  if ( x < spread ) {
    currentMoney += winBet;
  } else if ( x > spread ) {
    currentMoney -= loseBet;
  }
}
let expectedReturn = currentMoney/tests;
console.log(expectedReturn.toFixed(2));
