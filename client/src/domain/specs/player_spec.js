var Player = require('../models/player');
var assert = require('assert');

describe('Player', function(){
  var player;

  beforeEach(function(){
    player = new Player({name: "HungarianBarbarian"});
  });

  it('should have a name after creation', function(){
    assert.equal(player.name, "HungarianBarbarian");
  });

  it('should have an empty array for cards', function(){
    assert.equal(player.cards.length, 0);
  });
})