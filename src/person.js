class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
  }

  throwBall() {
    var dogReaction = this.dog.fetchBall();

    if (dogReaction === `This is fun!`) {
      return `${this.dog.name} loves playing fetch!`;
    } else {
      return `Oh, I think ${this.dog.name} is too tired. I guess we won't play fetch right now.`;
    }
  }

  fillFoodBowl() {
    this.dog.eat();
  }

  goToDogPark(dogs) {
    this.dog.currentFriends.push(...dogs);
    this.dog.playWithFriends();
  }

  goHome() {
    this.dog.currentFriends = [];
  }

}

module.exports = Person;
