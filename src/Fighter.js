const MAX_LIFE = 100;
class Fighter {
  constructor(name, strength, dexterity, life) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  fight(defender) {
    let damage = Math.floor(Math.random() * this.strength) + 1;

    if (defender.dexterity > damage) {
      damage = 0;
    } else {
      damage -= defender.dexterity;
    }
    if (damage > defender.life) {
      defender.life = 0;
    } else {
      defender.life -= damage;
    }
  }
}

module.exports = Fighter;
