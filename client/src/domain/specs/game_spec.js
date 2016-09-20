var Game = require('../models/game');
var Player = require('../models/player');
var assert = require('assert');

describe('Game', function () {
  var game;
  var player1;
  var player2;

  beforeEach(function () {
    game = new Game();
    player1 = new Player({name: "Zsolt"});
    player2 = new Player({name: "Nora"});
  });

  it('should have an empty array for players', function () {
    assert.equal(game.players.length, 0);
  }); 

  it('should be able to add players', function () {
    game.addPlayer(player1)
    assert.equal(game.players[0].name, "Zsolt");
  });

})