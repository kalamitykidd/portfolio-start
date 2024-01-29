// Create a new array with at least 4 values
let luckyNumbers = [25, 31, 12, 19];

// Create a new function expression
function powerBall (paramaters) {
    paramaters += 1;
    console.log(paramaters);
};

// Create a new function with two parameters. One will be a  
//function expression and the other will be a number.
function lottoPicks (powerBall, luckyNumbers) {
    const lotto = powerBall + 7;
    return lotto.toFixed(2);
}
    if (luckyNumbers % 2 === 0) {
        lottoPicks(luckyNumbers);
    } else {
        console.log("The number is odd");
    }


// Step 6: Create a for-in loop to iterate through the array indexes
for (let index in luckyNumbers) {
    processNumber(lotto, luckyNumbers[index]);
}
