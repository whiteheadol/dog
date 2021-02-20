class Dog {
  constructor(pet) {
    this.name = pet.name;
    this.age = pet.age;
    this.hungry = true;
    this.energyLevel = 10;
  }

  eat() {
    if(this.hungry) {
      this.hungry = false;
    } else {
      return `I refuse to eat.`;
    }
  }

  fetchBall() {
    if(this.energyLevel > 3) {
      this.energyLevel--;
    } else {
      return `Nah, I'm going to sleep instead.`
    }
  }

  rest() {
    if ((this.age < 8 && this.energyLevel < 11) || this.energyLevel < 5) {
      this.energyLevel++;
    } else {
      return `I have too much energy to rest. I'm going to chew something instead.`
    }
  }

}

module.exports = Dog;
