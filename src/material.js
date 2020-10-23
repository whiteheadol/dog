class Material {
  constructor(material) {
    this.name = material.name;
    this.cost = material.cost;
    this.amount = material.amount;
  }

  calculateCost() {
    return this.cost * this.amount;
  }

}

module.exports = Material;
