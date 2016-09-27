var Card = require('../models/card');
var Ability = require('../models/ability');
var assert = require('assert');

describe('Card', function(){
  var card;
  var ability;

  beforeEach(function(){
    ability = new Ability({id: 1, description: "Name a non-Guard card and choose another player. If that player has that card, he or she is out of the round."})
    abilities = [ability]
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

  it('should have an ability set up with ID and description', function(){
    card.setAbility(abilities)
    assert.equal(card.ability.id, 1);
    assert.equal(card.ability.description, "Name a non-Guard card and choose another player. If that player has that card, he or she is out of the round.");
  });
})