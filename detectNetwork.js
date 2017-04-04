// Reuben Nahouraii
// 4-3-17

// credit card object to hold all the credit card specifications
let creditcards =
{
  americanExpress : {
    name : "American Express",
    startingDigits : [34, 37],
    length : [15]
  },
  dinersClub : {
    name : "Diner's Club",
    startingDigits : [38, 39],
    length : [14]
  },
  visa : {
    name : "Visa",
    startingDigits : [4],
    length : [13, 16, 19]
  },
  mastercard : {
    name : "MasterCard",
    startingDigits : [51, 52, 53, 54, 55],
    length : [16]
  }
}

// checks the first two numbers of a given card to determine the network
function checkStartingDigits(cardNumber, startingDigitsArray) {
  // debugger
  let endIndex = String(startingDigitsArray[0]).length;
  for(let i = 0; i < startingDigitsArray.length; i++)
    if(cardNumber.substring(0, endIndex) == startingDigitsArray[i])
      return true
  return false
}

// checks the length of a given card to determine the network
function checkLength(cardNumber, lengthArray) {
  for(let i = 0; i < lengthArray.length; i++)
    if(cardNumber.length === lengthArray[i])
      return true
  return false
}

// searches for a credit card given a credit card number and credit card object
function findCard(cardNumber) {
  for(let card in this)
  {
    let cardObj = this[card]
    if
    (
      checkStartingDigits(cardNumber, cardObj.startingDigits) &&
      checkLength(cardNumber, cardObj.length)
    )
      return cardObj.name
  }
  return 'Card Not Found'
}

// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
var detectNetwork = function(cardNumber) {
  return findCard.call(creditcards, cardNumber)
};

// test cases
function testNetworks()
{
  detectNetwork('38345678901234')
  detectNetwork('39345678901234')
  detectNetwork('343456789012345')
  detectNetwork('373456789012345')

  detectNetwork('4123456789012')
  detectNetwork('4123456789012345')
  detectNetwork('4123456789012345678')
  detectNetwork('5112345678901234')
  detectNetwork('5212345678901234')
  detectNetwork('5312345678901234')
  detectNetwork('5412345678901234')
  detectNetwork('5512345678901234')
}
