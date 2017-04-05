// Reuben Nahouraii
// 4-3-17

// credit card object to hold all the credit card specifications
let creditcards =
{
  cards :
  {
    americanExpress : {
      name : "American Express",
      prefix : [34, 37],
      length : [15]
    },
    dinersClub : {
      name : "Diner's Club",
      prefix : [38, 39],
      length : [14]
    },
    visa : {
      name : "Visa",
      prefix : [4],
      length : [13, 16, 19]
    },
    mastercard : {
      name : "MasterCard",
      prefix : [51, 52, 53, 54, 55],
      length : [16]
    },
    discover : {
      name : "Discover",
      prefix : [65, 644, 645, 646, 647, 648, 649, 6011],
      length : [16, 19]
    },
    maestro : {
      name : "Maestro",
      prefix : [5018, 5020, 5038, 6304],
      length : [12, 13, 14, 15, 16, 17, 18, 19]
    }
  },
  getMaxLength : function() {
    let max = 0
    for(card in this.cards)
    {
      let cardObj = this.cards[card]
      for(let i = 0; i < cardObj.length.length; i++)
        max = cardObj.length[i] > max ? cardObj.length[i] : max
    }
    return max
  }
}

// checks the first two numbers of a given card to determine the network
function checkPrefix(cardNumber, prefixArray) {
  if(!cardNumber)
    debugger
  for(let i = 0; i < prefixArray.length; i++)
  {
    let endIndex = String(prefixArray[i]).length;
    if(cardNumber.substring(0, endIndex) == prefixArray[i])
      return true
  }
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
  for(let card in this.cards)
  {
    let cardObj = this.cards[card]
    if
    (
      checkPrefix(cardNumber, cardObj.prefix) &&
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
