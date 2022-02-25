var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
    // this.throwCount = 0;
  }

fillFoodBowl() {
  this.dog.hungry = false;
}

// throwBall() {
//   if (this.throwCount < 2) {
//     this.throwCount++;
//     return `${this.dog.name} loves playing fetch!`;
//   } else {
//     return `Oh, I think ${this.dog.name} is too tired. I guess we won't play fetch right now.`;
//   }
// }

throwBall() {
  if (this.dog.fetchBall() === `This is fun!`) {
    return `${this.dog.name} loves playing fetch!`;
  } else {
    return `Oh, I think ${this.dog.name} is too tired. I guess we won't play fetch right now.`;
  }
}

adoptAPup(name, age) {
  if (!this.dog) {
    this.dog = new Dog({name: name, age: age});
  } else {
    return `You can't adopt ${name}. You already have ${this.dog.name}!`;
  }
}
}

module.exports = Person;
