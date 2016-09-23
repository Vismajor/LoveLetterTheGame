var Player = function(options){
  this.id = options.id,
  this.name = options.name,
  this.cards = [],
  this.playedCards = []
}

Player.prototype = {
  getCard: function(dealtCard){
    this.cards.push(dealtCard);
  },
  numberOfCards: function(){
    return this.cards.length;
  },  
  numberOfPlayedCards: function(){
    return this.playedCards.length;
  },
  playCard: function(chosenCardId){
    chosenCard = this.cards.splice(chosenCardId, 1)[0];
    this.playedCards.push(chosenCard)
  },
  checkPlayedScore: function(){
    var score = 0;
    for (i=0; i < this.playedCards.length; i++){
      score += this.playedCards[i].score
    }
    return score
  }
}

module.exports = Player;