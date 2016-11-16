var Player = require('../models/player');
var Card = require('../models/card');
var assert = require('assert');

describe('Player', function(){
  var player;
  var card;

  beforeEach(function(){
    player = new Player({name: "HungarianBarbarian", id: 1});
    card = new Card({name: "guard", score: 1, id: 1})
  });

  it('should have an id', function(){
    assert.equal(player.id, 1);
  });

  it('should have a name after creation', function(){
    assert.equal(player.name, "HungarianBarbarian");
  });

  it('should have an empty array for cards', function(){
    assert.equal(player.numberOfCards(), 0);
  });

  it('should have an empty array for played cards', function(){
    assert.equal(player.numberOfPlayedCards(), 0);
  });

  it('should be able to receive card', function(){
    player.getCard(card)
    assert.equal(player.numberOfCards(), 1);
  });

  it('should be able to play card', function(){
    player.playCard(1)
    assert.equal(player.numberOfCards(), 0);
    assert.equal(player.numberOfPlayedCards(), 1);
  });

})