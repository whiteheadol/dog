class Craft {
  constructor(project) {
    this.type = project.type;
    this.materials = project.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
  }

  calculateTotal() {
    var cost = 0;
    for (var i = 0; i < this.materials.length; i++) {
      cost += this.materials[i].calculateCost();
    }
    return cost;
  }

}

module.exports = Craft;
