var assert = require('assert');
var Player = require('../models/player');
var Card = require('../models/card');
var drawCardChecker = require('../drawCardCheck')

describe('DrawCardCheck', function(){
  var princeCard;
  var kingCard;
  var countessCard;
  var player1;

  beforeEach(function(){
    princeCard = new Card({name: "prince", score: 5, id: 13});
    kingCard = new Card({name: "king", score: 6, id: 14});
    countessCard = new Card({name: "countess", score: 7, id: 15});
    player1 = new Player({name: "Jarrod"});
  });

  it('returns true if countess is caught with the king', function(){
    player1.getCard(kingCard);
    player1.getCard(countessCard);
    result = drawCardChecker.countessChecker(player1);
    assert.equal(true, result);
  });






});