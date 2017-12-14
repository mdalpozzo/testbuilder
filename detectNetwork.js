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
  
  
  if (JSON.stringify(cardNumber.slice(0, 2)) === JSON.stringify([3, 8]) || JSON.stringify(cardNumber.slice(0, 2)) === JSON.stringify([3, 9]) && cardNumber.length === 14) {
    return 'Diner\'s Club';
  } else if (JSON.stringify(cardNumber.slice(0, 2)) === JSON.stringify([3, 4]) || JSON.stringify(cardNumber.slice(0, 2)) === JSON.stringify([3, 7]) && cardNumber.length === 15) {
    return 'American Express';
  } else if (['4903', '4905', '4911', '4936', '6333', '6759'].indexOf(cardNumber.slice(0, 4).join('')) > -1 || ['564182', '633110'].indexOf(cardNumber.slice(0, 6).join('')) > -1 && [16, 18, 19].indexOf(cardNumber.length) > -1) {
    return 'Switch';
  } else if (JSON.stringify(cardNumber[0]) === '4' && [13, 16, 19].indexOf(cardNumber.length) > -1) {
    return 'Visa';
  } else if (['51', '52', '53', '54', '55'].indexOf(cardNumber.slice(0, 2).join('')) > -1 && cardNumber.length === 16) {
    return 'MasterCard';
  } else if (['644', '645', '646', '647', '648', '649'].indexOf(cardNumber.slice(0, 3).join('')) > -1) {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Discover';
    }
  } else if (cardNumber.slice(0,4).join('') === '6011') {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Discover';
    }
  } else if (cardNumber.slice(0, 2).join('') === '65') {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Discover';
    }
  } else if (['5018', '5020', '5038', '6304'].indexOf(cardNumber.slice(0, 4).join('')) !== -1 && cardNumber.length <= 19 && cardNumber.length >= 12) {
    return 'Maestro';
  } else if (parseInt(cardNumber.slice(0, 6).join('')) >= 622126 && parseInt(cardNumber.slice(0, 6).join('')) <= 622925 && [16, 17, 18, 19].indexOf(cardNumber.length > -1)) {
    return 'China UnionPay';  
  } else if (parseInt(cardNumber.slice(0, 6).join('')) >= 624 && parseInt(cardNumber.slice(0, 6).join('')) <= 626 && [16, 17, 18, 19].indexOf(cardNumber.length > -1)) {
    return 'China UnionPay';
  } else if (parseInt(cardNumber.slice(0, 6).join('')) >= 6282 && parseInt(cardNumber.slice(0, 6).join('')) <= 6288 && [16, 17, 18, 19].indexOf(cardNumber.length > -1)) {
    return 'China UnionPay';
  } else {
    return 'not a valid credit card #';
  }

};
