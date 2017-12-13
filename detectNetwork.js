// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  cardNumber = cardNumber.split('').map(function(string) {
    return parseInt(string);
  });
  
  
  if (JSON.stringify(cardNumber.slice(0, 2)) === (JSON.stringify([3, 8]) || JSON.stringify([3, 9])) && cardNumber.length === 14) {
    return 'Diner\'s Club';
  } else if (JSON.stringify(cardNumber.slice(0, 2)) === (JSON.stringify([3, 4]) || JSON.stringify([3, 7])) && cardNumber.length === 15) {
    return 'American Express';
  } else {
    return 'not a valid credit card #'
  }

};


function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('PASSED : ' + testName);
  } else {
    console.log('FAILED : ' + testName + ', expected: ' + expected + ', but got: ' + actual);
  }
}

assertEqual(detectNetwork('343456789012345'), 'American Express', 'detects correct credit network')