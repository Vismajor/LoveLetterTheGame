var Game = function(options){
	this.players = options.players;
  this.deck = options.deck;
  this.discards = [];
  this.activePlayer = this.setStartingPlayer();
  this.outOfRoundPlayers = [];
}

Game.prototype = {
  addPlayer: function(player){
    this.players.push(player);
  },  
  numberOfPlayers: function(){
    return this.players.length;
  },
  discard: function(numToDiscard = 1){
    discardedCard = this.deck.giveCard(numToDiscard);
    this.discards.push(discardedCard);
  },
  dealCard: function(numToDiscard = 1, playerToGetCard){
    dealtCard = this.deck.giveCard(numToDiscard)
    playerToGetCard.getCard(dealtCard);
  },
  outOfRound: function(playerId){
    var players = this.players
    var match = null;
    for(var i = 0; i < players.length; i++) {
        if(players[i].id == playerId) {
            match = players.splice(i, 1);
            break;
        }
    }
    this.outOfRoundPlayers.push(match)
  },
  setStartingPlayer: function(){
    var startingPlayer = this.players[Math.floor(Math.random() * this.players.length)];
    return startingPlayer;
  },
  startRoundDeal: function(){
    var players = this.players
    var playersLength = this.players.length
    for (var i = 0; i < playersLength; i++) {
      this.dealCard(1, players[i]);
    }
  },
  startRound: function(){
    this.discard(1);
    this.startRoundDeal();
  }
}


module.exports = Game;

