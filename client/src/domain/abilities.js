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
      higherCard = [...arguments].sort(function (a, b) {
        return b.cards[0].score - a.cards[0].score;
      });
      return higherCard[0].cards[0];
    }
  },
  { id: 4,
    description: "Until the next turn, ignore all effects from other players' card.",
    behaviour: function(targetPlayer, numberOfPlayers){
      targetPlayer.protectedTurns = numberOfPlayers;
    }
  },
  { id: 5,
    description: "Choose any player (including yourself) to discard his or her hand and draw a new card."
  },
  { id: 6,
    description: "Trade hands with another player of your choice."
  },
  { id: 7,
    description: "If you have this card and the King or Prince in your hand, you must discard this card."
  },
  { id: 8,
    description: "If you discard this card, you are out of the round."
  }
]

module.exports = abilities;