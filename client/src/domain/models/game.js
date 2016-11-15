var abilities = require('../abilities')

var Game = function(options){
	this.players = options.players;
  this.deck = options.deck;
  this.discards = [];
  this.activePlayer = this.setStartingPlayer();
  this.outOfRoundPlayers = [];
}

Game.prototype = {
  addAbility: function(ability){
    this.activeAbilities.push(ability);
  },

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
    dealtCard = this.deck.giveCard(numToDiscard);
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
  rotatePlayers: function(reverse = false){
    if(reverse)
      this.players.unshift(this.players.pop());
    else
      this.players.push(this.players.shift()); 
    this.activePlayer = this.players[0];
  }, 
  setStartingPlayer: function(){
    var players = this.players;
    var startingPlayer = this.players[Math.floor(Math.random() * this.players.length)];
    while(players[0].id != startingPlayer.id)
      this.rotatePlayers();
    return startingPlayer;
  },
  startRoundDeal: function(){
    var players = this.players;
    var playersLength = this.players.length;
    for (var i = 0; i < playersLength; i++) {
      this.dealCard(1, players[i]);
    }
  },
  startRound: function(){
    this.discard(1);
    this.startRoundDeal();
    this.dealCard(1, this.activePlayer);
  },
  playTurn: function(chosenCardId){
    if (this.deck.length == 0){
      this.activePlayer.playCard(chosenCardId);
      return
    }
    else {
      this.activePlayer.playCard(chosenCardId);
      this.rotatePlayers();
      this.dealCard(1, this.activePlayer)
    }
  },
  checkWinner: function(){
    var players = this.players;
    var winners = [];
    var highestScore = 0;
    for (i=0; i < this.players.length; i++){
      if (players[i].cards[0].score >= highestScore){
        highestScore = players[i].cards[0].score;
      }      
    }
    for (i=0; i < this.players.length; i++){
      if (players[i].cards[0].score >= highestScore){
        winners.push(players[i])
      }
    }
    return winners
  },
  playThroughGame: function(){
    this.startRound();
    while(this.deck.numberOfCards() > 0){
      chosenCardId = this.activePlayer.cards[0]
      this.playTurn(chosenCardId);
    }
    chosenCardId = this.activePlayer.cards[0]
    this.playTurn(chosenCardId);
  }
}


module.exports = Game;

