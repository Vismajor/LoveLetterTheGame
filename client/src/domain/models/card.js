var Ability = require('./ability');


var Card = function(options){
  this.name = options.name,
  this.score = options.score,
  this.id = options.id,
  this.ability_id = options.ability_id
  this.ability = this.setAbility(abilities)
}

Card.prototype = {
  setAbility: function(abilities){
    for(ability of abilities){
      if(this.ability_id === ability.id){
        return new Ability(ability)
      }
    }
  }
}

module.exports = Card;