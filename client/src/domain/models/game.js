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
    var winner = players[0];
    var winners = [winner];
    var highestScore = winner.cards[0].score;
    for (i=1; i < this.players.length; i++){
      if (players[i].cards[0].score >= highestScore && players[i].id != winner.id){
        winners.push(players[i]);
      }      
    }
    return winners
  },
  //TODO merge draw/winner into one function
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

