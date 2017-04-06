// Reuben Nahouraii
// 4-4-17
// Testing credit cards prefix with varying lengths

var should = chai.should();
// build a test number to to use for the different credit cards
let testNumber = '1'.repeat(creditcards.getMaxLength())

for(let card in creditcards.cards)
{
  let cardObj = creditcards.cards[card]
  describe(cardObj.name, function() {
             for(let p = 0; p < cardObj.prefix.length; p++)
               for(let l = 0; l < cardObj.length.length; l++)
                 it('has a prefix of ' + cardObj.prefix[p] + ' and a length of ' +
                     cardObj.length[l], function() {
                       let endIndex = cardObj.length[l] - String(cardObj.prefix[p]).length
                       detectNetwork(cardObj.prefix[p] + testNumber.substring(0, endIndex)).
                       should.equal(cardObj.name)
                     })
           })
}

describe('should support China UnionPay')
describe('should support Switch')
