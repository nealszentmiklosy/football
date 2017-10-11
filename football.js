
function random(m, s) {
  return Math.round(m + 2.0 * s * (Math.random() + Math.random() + Math.random() - 1.5));
}

function gamble(tests, stdDev, spread, bettingLine, expectedScore) {
  let currentMoney = 0;
  if ( bettingLine > 0 ) {
    //console.log('positive betting line')
    var winBet = bettingLine;
    var loseBet = 100;
  } else if ( bettingLine < 0 ) {
    //console.log('negative betting line')
    var winBet = 100;
    var loseBet = bettingLine * -1;
  } else {
    //console.log('even betting line')
    var winBet = 100;
    var loseBet = 100;
  }
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
  return (expectedReturn / loseBet).toFixed(2); //Prints your expected return on your bet.  In other words, if you bet 1$ "tests" number of times, how much money would you make or lose per test, on average?
}


// let winBet = 10; //How much you win for winning your bet.
// let loseBet = 10; //In other words, how much you are betting.
let bettingLine = -115; // SET TO 0 IF BETTING LINE IS EVEN!! The betting line, if negative, tells you how much you must bet to win 100$.  If positive, it tells you how much you win for betting 100$. Set to 0 if the bet is even.
let spread = 10; //The spread given by the bettor. This number is actually the opposing teams score relative to your teams.  So if your team has a spread of +10, it means your team is expected to lose by 10 points.
let expectedScore = 5; //Like the spread, this what you think the opposing teams score will be relative to yours.

// You probably don't need to alter anything after this.

let tests = 10000000; //How many simulations you want to run.
let stdDev = 11.7; //based on 538's models, 68% chance the game stays within this point total, which I'm guessing means it's a single standard deviation away.

console.log(gamble(tests, stdDev, spread, bettingLine, expectedScore));
