// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// credit card object to hold all the credit card specifications
let creditcards =
{
  americanExpress : {
    name : "American Express",
    firstTwo : [34, 37],
    length : 15
  },
  dinersClub : {
    name : "Diner's Club",
    firstTwo : [38, 39],
    length : 14
  }
}

// checks the first two numbers of a given card to determine the network
function checkFirstTwo(cardNumber, firstTwoArray) {
  // debugger
  for(let i = 0; i < firstTwoArray.length; i++)
    if(cardNumber.substring(0,2) == firstTwoArray[i])
      return true
  return false
}

// checks the length of a given card to determine the network
function checkLength(cardNumber, length) { return cardNumber.length === length }

// searches for a credit card given a credit card number and credit card object
function findCard(cardNumber) {
  for(let card in this)
  {
    let cardObj = this[card]
    if
    (
      checkFirstTwo(cardNumber, cardObj.firstTwo) &&
      checkLength(cardNumber, cardObj.length)
    )
      return cardObj.name
  }
  return 'Card Not Found'
}

var detectNetwork = function(cardNumber) {
  return findCard.call(creditcards, cardNumber)
};

console.log('running tests')
console.log('should be diner club === ', detectNetwork('38345678901234'))
console.log('should be diner club === ', detectNetwork('39345678901234'))
console.log('should be American Express === ', detectNetwork('343456789012345'))
console.log('should be American Express === ', detectNetwork('373456789012345'))
