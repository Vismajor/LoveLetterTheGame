var Game = require('../models/game');
var Player = require('../models/player');
var Deck = require('../models/deck');
var cards = require('../cards.json');
var drawDummyCards = require('../drawDummyCards.json');
var assert = require('assert');

describe('Game', function () {
  var game;
  var player1;
  var player2;
  var player3;
  var deck;
  var drawGame;

  beforeEach(function () {
    Deck.prototype.shuffleCards = function(){};
    Game.prototype.setStartingPlayer = function(){return this.players[0]};
    deck = new Deck(cards);
    drawDeck = new Deck(drawDummyCards);
    player1 = new Player({name: "Zsolt", id: 1});
    player2 = new Player({name: "Nora", id: 2});
    player3 = new Player({name: "Arthur", id: 3});
    game = new Game({deck: deck, players: [player1, player2, player3]});
    drawGame = new Game({deck: drawDeck, players: [player1, player2, player3]});
  });

  it('should have a deck with 16 cards', function(){
    assert.equal(game.deck.numberOfCards(), 16);
  });

  it('should discard one card from the deck AND add it to the discarded pile', function(){
    game.discard();
    assert.equal(game.discards.length, 1);
    assert.equal(game.deck.numberOfCards(), 15);
  });

  it('should deal a card to all players', function(){
    game.startRoundDeal();
    assert.equal(game.players[0].numberOfCards(), 1);
    assert.equal(game.players[1].numberOfCards(), 1);
  });

  it('should be able to put people out of round', function(){
    game.outOfRound(1)
    assert.equal(game.numberOfPlayers(), 2);
    assert.equal(game.outOfRoundPlayers.length, 1);
  });  

  it('should set the starter player to position 0', function(){
    var startingPlayer = game.setStartingPlayer();
    assert.equal(game.players[0].name, startingPlayer.name );
  });

  it('should rotate players', function(){
    currentPlayer = game.activePlayer;
    game.rotatePlayers();
    assert.notEqual(game.activePlayer.id, currentPlayer.id);
  });

  it('should rotate players, play cards after playing a turn, and give the new active player a new card', function(){
    chosenCardId = game.activePlayer.cards[0]
    game.startRound();
    game.playTurn(chosenCardId);
    assert.equal(game.activePlayer.numberOfCards(), 2);
  }); 

  it('should not have any cards after playing through the game and should have a winner', function(){
    game.playThroughGame();
    assert.equal(game.deck.numberOfCards(), 0)
    assert.equal(game.checkWinner()[0].name, "Arthur")
  }); 

  it('should not have any cards after playing through the game and should multiple winners for a draw', function(){
    drawGame.playThroughGame();
    assert.equal(drawGame.deck.numberOfCards(), 0)
    assert.equal(drawGame.checkWinner().length, 3)
  });

  it('should deal a card to all players, put one in the discard pile, and have an active player at game start', function(){
    game.startRound();
    assert.equal(game.players[0].numberOfCards(), 2);
    assert.equal(game.players[1].numberOfCards(), 1);
    assert.equal(game.discards.length, 1);
  });

})