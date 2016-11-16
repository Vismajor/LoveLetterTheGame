var abilities = [
  { id: 1,
    description: "Name a non-Guard card and choose another player. If that player has that card, he or she is out of the round.",
    behaviour: function(guess, targetPlayer){
      if(targetPlayer.cards[0].name === guess){
        targetPlayer.discardCard();
      }
    }
  },
  { id: 2,
    description: "Look at another player's hand.",
    behaviour: function(targetPlayer){
      return targetPlayer.cards[0];
    }
  },
  { id: 3,
    description: "You and another player secretly compare hands. The player with the lower value is out of the round.",
    behaviour: function(targetPlayer, activePlayer){
      var targetPlayerScore = targetPlayer.cards[0].score;
      var activePlayerScore = activePlayer.cards[0].score;

      if(targetPlayerScore === activePlayerScore)return;
      var loser = targetPlayerScore > activePlayerScore ? activePlayer : targetPlayer;
      loser.discardCard();
    }
  },
  { id: 4,
    description: "Until the next turn, ignore all effects from other players' card.",
    behaviour: function(targetPlayer, numberOfPlayers){
      targetPlayer.protectedTurns = numberOfPlayers;
    }
  },

  { id: 5,
    description: "Choose any player (including yourself) to discard his or her hand and draw a new card.",
    behaviour: function(targetPlayer, card){
      targetPlayer.discardCard();
      if(card){
        targetPlayer.getCard(card)
      }
    }
  },

  { id: 6,
    description: "Trade hands with another player of your choice.",
    behaviour: function(targetPlayer, activePlayer){
      var card1 = targetPlayer.discardCard();
      var card2 = activePlayer.discardCard();
      targetPlayer.getCard(card2);
      activePlayer.getCard(card1);
    }
  },
  { id: 7,
    description: "If you have this card and the King or Prince in your hand, you must discard this card."
  },
  { id: 8,
    description: "If you discard this card, you are out of the round.",
    behaviour: function(activePlayer){
      activePlayer.discardCard();
    }
  }
]

module.exports = abilities;