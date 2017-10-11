
function random(m, s) {
  return Math.round(m + 2.0 * s * (Math.random() + Math.random() + Math.random() - 1.5));
}

function getSum(total, num) {
    return total + num;
}
function myFunction(item) {
    return results.reduce(getSum);
}

let tests = 10000000; //How many simulations you want to run.
let winBet = 9.52; //How much you win for winning your bet.
let loseBet = 10; //In other words, how much you are betting.
let currentMoney = 0;
let spread = -10; //The spread given by the bettor. This number is actually the opposing teams score relative to your teams.  So if your team has a spread of +10, it means your team is expected to lose by 10 points.
let expectedScore = -11; //Like the spread, this what you think the opposing teams score will be relative to yours.
let stdDev = 11.7; //based on 538's models, 68% chance the game stays within this point total, which I'm guessing means it's a single standard deviation away.

for ( i=0; i<tests; i++ ){
  let x = random(expectedScore, stdDev);
  if ( x < spread ) {
    //console.log("win " + x);
    currentMoney += winBet;
  } else if ( x > spread ) {
    //console.log("lose " + x);
    currentMoney -= loseBet;
  }
}
let expectedReturn = currentMoney/tests;
console.log(expectedReturn.toFixed(2)); //Prints your expected return on your bet.  In other words, if you made this bet "tests" number of times, how much money would you make or lose per test, on average?
