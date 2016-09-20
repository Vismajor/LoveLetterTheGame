var Game = function(options){
	this.players = [];
  this.deck = options.deck;
}

Game.prototype = {
  addPlayer: function(player){
    this.players.push(player);
  }
}


module.exports = Game;

