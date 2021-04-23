const Character = require('./Character');
const Potion = require("./Potion");

class Player extends Character {
    constructor(name = '') {
        // call parent constructor
        super(name);
     
        this.inventory = [new Potion('health'), new Potion()];
    };

    // returns and object with various player properties
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility,
        };
    };

    // returns the inventory array or false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

    // adds a potion to player's inventory
    addPotion() {
        this.inventory.push(Potion);
    };

    usePotion(index) {
        const potion = this.inventory.splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    };
};

module.exports = Player;