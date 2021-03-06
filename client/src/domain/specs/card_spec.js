var Card = require('../models/card');
var assert = require('assert');

describe('Card', function(){
  var card;

  beforeEach(function(){
    card = new Card({name: "Guard", score: 1, id: 1, ability_id: 1});
  });

  it('should have a name after creation', function(){
    assert.equal(card.name, "Guard");
  });

  it('should have a score', function(){
    assert.equal(card.score, 1);
  });

  it('should have an id', function(){
    assert.equal(card.id, 1);
  });

  it('should have an ability_id', function(){
    assert.equal(card.ability_id, 1);
  });

})