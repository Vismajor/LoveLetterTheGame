var Player = function(options){
  this.id = options.id,
  this.name = options.name,
  this.cards = []
}

Player.prototype = {
  getCard: function(dealtCard){
    this.cards.push(dealtCard);
  },
  numberOfCards: function(){
    return this.cards.length;
  }
}

module.exports = Player;