var Deck = require('../models/deck');
var cards = require('../cards.json');
var Card = require('../models/card')
var assert = require('assert');

describe('Deck', function(){
  var deck;
  var card;

  beforeEach(function(){
    deck = new Deck(cards);
    card = new Card({"name": "guard", "score": 1});
  });

  it('should return the number of cards in the deck', function(){
    assert.equal(deck.numberOfCards(), 16);
  });

  it('should add one card', function(){
    deck.addCard(card);
    assert.equal(deck.numberOfCards(), 17);
  });

  it('should have 15 cards', function(){
    assert.equal(deck.numberOfCards(), 16);
  });



})