const Potion = require ('../lib/Potion');

const Enemy = function (name, weapon){
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

// returns if player is alive
    Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
      return false;
    }
    return true;
  };

// returns player's health
    Enemy.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
  };

    Enemy.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
  };

  Enemy.prototype.reduceHealth = function(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
  };

  Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };
  
};

module.exports = Enemy;