class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
  }

  fillFoodBowl() {
    this.dog.eat();
  }

  throwBall() {
    var dogReaction = this.dog.fetchBall();

    if (dogReaction === `This is fun!`) {
      return `${this.dog.name} loves playing fetch!`;
    } else {
      return `Oh, I think ${this.dog.name} is too tired. I guess we won't play fetch right now.`;
    }
  }
  
}

module.exports = Person;
