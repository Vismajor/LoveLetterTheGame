var Deck = require('../models/deck');
var cards = require('../cards.json');
var assert = require('assert');

describe('Deck', function(){
  var deck;

  beforeEach(function(){
    deck = new Deck(cards);
  });

  it('should have 15 cards', function(){
    assert.equal(deck.cards.length, 15);
  });

})