var Card = require('../models/card');
var assert = require('assert');

describe('Card', function(){
  var card;

  beforeEach(function(){
    card = new Card({name: "Guard", score: 1});
  });

  it('should have a name after creation', function(){
    assert.equal(card.name, "Guard");
  });

  it('should have a score', function(){
    assert.equal(card.score, 1);
  });
})