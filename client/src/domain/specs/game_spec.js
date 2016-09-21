var Game = require('../models/game');
var Player = require('../models/player');
var Deck = require('../models/deck');
var cards = require('../cards.json');
var assert = require('assert');

describe('Game', function () {
  var game;
  var player1;
  var player2;
  var deck;

  beforeEach(function () {
    deck = new Deck(cards);
    player1 = new Player({name: "Zsolt", id: 1});
    player2 = new Player({name: "Nora", id: 2});
    game = new Game({deck: deck, players: [player1, player2]});
  });

  it('should have an empty array for players', function () {
    assert.equal(game.players.length, 2);
  }); 

  it('should have a deck with 16 cards', function(){
    assert.equal(game.deck.numberOfCards(), 16);
  });

  it('should discard one card from the deck AND add it to the discarded pile', function(){
    game.discard();
    assert.equal(game.discards.length, 1);
    assert.equal(game.deck.numberOfCards(), 15);
  });

  it('should have an active player', function(){
    // assert.equal(game.activePlayer, player1 || player2);
  });

  it('should deal a card to all players', function(){
    game.startRoundDeal();
    assert.equal(game.players[0].numberOfCards(), 1);
    assert.equal(game.players[1].numberOfCards(), 1);
  });

  it('should be able to put people out of round', function(){
    game.outOfRound(1)
    assert.equal(game.numberOfPlayers(), 1);
    assert.equal(game.outOfRoundPlayers.length, 1);
  });  

  it('should set the starter player to position 0', function(){
    var startingPlayer = game.setStartingPlayer();
    assert.equal(game.players[0].name, startingPlayer.name );
    // assert.equal(game.outOfRoundPlayers.length, 1);
  });

  // it('should rotate players', function(){
  //   game.rotatePlayers
  //   assert.equal(game.numberOfPlayers(), 1);
  //   assert.equal(game.outOfRoundPlayers.length, 1);
  // });

  it('should deal a card to all players, put one in the discard pile, and have an active player at game start', function(){
    game.startRound();
    assert.equal(game.players[0].numberOfCards(), 1);
    assert.equal(game.players[1].numberOfCards(), 1);
    // assert.equal(game.activePlayer, player1 || player2);
    assert.equal(game.discards.length, 1);
  });

})