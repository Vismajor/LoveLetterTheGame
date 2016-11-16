
var drawCardChecker = {
  countessChecker: function(activePlayer){
    var discardTriggerIds = [14, 13, 12];
    var cards = activePlayer.cards;
    var result = [];
    cardIds = cards.map(card => card.id);
    discardTriggerIds.forEach(function(id){
      result.push(cardIds.includes(15 && id))
    });
    return result.includes(true);
  }
}

module.exports = drawCardChecker;