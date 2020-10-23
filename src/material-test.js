var Material = require("./material.js");
var assert = require('chai').assert;

describe("Material", function() {
  
  it('should have a name', function() {
    var thread = new Material({ name: 'thread' });
    var fabric = new Material({ name: 'fabric' });

    assert.equal(thread.name, 'thread');
    assert.equal(fabric.name, 'fabric');
  })

  it('should have a cost', function() {
    var thread = new Material({ name: 'thread', cost: .25 });
    var fabric = new Material({ name: 'fabric', cost: 4 });

    assert.equal(thread.cost, .25);
    assert.equal(fabric.cost, 4);
  })

  it('should have an amount', function() {
    var thread = new Material({ name: 'thread', cost: .25, amount: 8 });
    var fabric = new Material({ name: 'fabric', cost: 4, amount: 3 });

    assert.equal(thread.amount, 8);
    assert.equal(fabric.amount, 3);
  })

  it('should have be able to calculate total cost of materials', function() {
    var thread = new Material({ name: 'thread', cost: .25, amount: 8 });
    var fabric = new Material({ name: 'fabric', cost: 4, amount: 3 });

    assert.equal(thread.calculateCost(), 2);
    assert.equal(fabric.calculateCost(), 12);
  })

});
