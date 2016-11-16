var Player = require('../models/player');
var Card = require('../models/card');
var abilities = require('../abilities');
var assert = require('assert');


describe('AbilityTest', function(){
  var guardCard;
  var priestCard;
  var baronCard;
  var handmaidCard;
  var princeCard;
  var kingCard;
  var countessCard;
  var princessCard;
  var player1;
  var player2;

  beforeEach(function(){
    guardCard = new Card({name: "guard", score: 1, ability_id: 1});
    priestCard = new Card({name: "priest", score: 2, ability_id: 2});
    baronCard = new Card({name: "baron", score: 3, ability_id: 3});
    handmaidCard = new Card({name: "handmaid", score: 4, ability_id: 4});
    princeCard = new Card({name: "prince", score: 5, ability_id: 5});
    kingCard = new Card({name: "king", score: 6, ability_id: 6});
    countessCard = new Card({name: "countess", score: 7, ability_id: 7});
    princessCard = new Card({name: "princess", score: 8, ability_id: 8});
    player1 = new Player({name: "Jarrod"});
    player2 = new Player({name: "Zsolt"});
  });

  it('can use guard ability', function(){
    player2.getCard(handmaidCard);
    abilities[0].behaviour("handmaid", player2)
    assert.equal(0, player2.numberOfCards());
  });

  it('can use priest ability', function(){
    player1.getCard(baronCard);
    var card = abilities[1].behaviour(player1);
    assert.equal("baron", card.name);
  });

  it('can use baron ability', function(){
    player1.getCard(princeCard);
    player2.getCard(handmaidCard);
    var card = abilities[2].behaviour(player1, player2)
    assert.equal("prince", card.name);
  });

  it('can use handmaid ability', function(){
    abilities[3].behaviour(player1, 2)
    assert.equal(2, player1.protectedTurns);
  });

  it('can use prince ability', function(){
    player1.getCard(kingCard);
    player2.getCard(handmaidCard);
    abilities[4].behaviour(player2, guardCard);
    assert.equal("guard", player2.cards[0].name);
  });

  it('can use king ability', function(){
    player1.getCard(princeCard);
    player2.getCard(handmaidCard);
    abilities[5].behaviour(player1, player2);
    assert.equal("handmaid", player1.cards[0].name);
  });

  it('should discard other card if princess is discarded', function(){
    player1.getCard(princeCard);
    abilities[7].behaviour(player1);
    assert.equal(0, player1.numberOfCards())
  });







})