class Dog {
  constructor(pet) {
    this.name = pet.name;
    this.age = pet.age;
    this.hungry = true;
    this.energyLevel = 10;
    this.currentFriends = [];
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
      return `This is fun!`;
    } else {
      return `Nah, I'm going to sleep instead.`;
    }
  }

  rest() {
    if ((this.age < 8 && this.energyLevel <= 10) || this.energyLevel <= 5) {
      this.energyLevel++;
    } else {
      return `I have too much energy to rest. I'm going to chew something instead.`;
    }
  }

  playWithFriends() {
    if(!this.currentFriends.length) {
      return `I miss my friends.`;
    } else {
      return `I love playing with my friends, ${this.currentFriends}!`
    }
  }

}

module.exports = Dog;
