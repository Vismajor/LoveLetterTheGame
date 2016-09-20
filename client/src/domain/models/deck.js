var Card = require('./card');

var Deck = function(cards){
  this.cards = []
  this.getCards(cards);
  this.shuffleCards();
}

Deck.prototype = {
  addCard: function(card){
    this.cards.push(card);
  },
  getCards: function(cards){
    for(card of cards){
      this.addCard(new Card(card));
    }
  },
  numberOfCards: function(){
    return this.cards.length
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