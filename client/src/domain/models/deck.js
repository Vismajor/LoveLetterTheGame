var Card = require('./card');

var Deck = function(cards){
  this.cards = [];
  this.setupDeck(cards);
  this.shuffleCards();
}

Deck.prototype = {
  addCard: function(card){
    this.cards.push(card);
  },
  setupDeck: function(cards){
    for(card of cards){
      this.addCard(new Card(card));
    }
  },
  numberOfCards: function(){
    return this.cards.length
  },
  giveCard: function(numToDiscard = 1){
    givenCard = this.cards.splice(0, numToDiscard)[0];
    return givenCard
  },
  shuffleCards: function(){
    var numberOfCards = this.numberOfCards();
    var chosenCard
    var currentCard
    while(numberOfCards) {
      chosenCard = Math.floor(Math.random() * numberOfCards--);
      currentCard = this.cards[numberOfCards];
      this.cards[numberOfCards] = this.cards[chosenCard];
      this.cards[chosenCard] = currentCard;
    }
    return this.cards
  }
}

module.exports = Deck;