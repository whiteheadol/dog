var Craft = require("./craft.js");
var Material = require("./material.js");
var assert = require('chai').assert;

describe("Craft", function() {

  it('should have a type', function() {
    var crossStitch = new Craft({ type: 'cross stitch' });
    var macrame = new Craft({ type: 'macrame' });

    assert.equal(crossStitch.type, 'cross stitch');
    assert.equal(macrame.type, 'macrame');
  })
  
  it('should have a list of materials', function() {
    var canvas = new Material({ name: 'canvas', cost: 15, amount: 1});
    var paint = new Material({ name: 'paint', cost: 5, amount: 3});
    var painting = new Craft({ type: 'painting', materials: [ canvas, paint ]});

    assert.deepEqual(painting.materials, [ canvas, paint ]);
  })

  it('should start as incomplete', function() {
    var canvas = new Material({ name: 'canvas', cost: 15, amount: 1});
    var paint = new Material({ name: 'paint', cost: 5, amount: 3});
    var painting = new Craft({ type: 'painting', materials: [ canvas, paint ]});

    assert.equal(painting.completed, false);
  })

  it('should be able to complete craft', function() {
    var canvas = new Material({ name: 'canvas', cost: 15, amount: 1});
    var paint = new Material({ name: 'paint', cost: 5, amount: 3});
    var painting = new Craft({ type: 'painting', materials: [ canvas, paint ]});

    painting.completeCraft();

    assert.equal(painting.completed, true);
  })

  it('should be able to calculate total cost of craft', function() {
    var canvas = new Material({ name: 'canvas', cost: 15, amount: 1});
    var paint = new Material({ name: 'paint', cost: 5, amount: 3});
    var painting = new Craft({ type: 'painting', materials: [ canvas, paint ]});

    var totalCost = painting.calculateTotal();

    assert.equal(totalCost, 30)
  })
})
