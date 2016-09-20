var Card = require('./card');

var Deck = function(cards){
  this.cards = cards
}

Deck.prototype = {
  addCard: function(card){
    this.cards.push(card);
  }

}

module.exports = Deck;