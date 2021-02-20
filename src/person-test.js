var Person = require("./person.js");
var Dog = require("./dog.js");
var assert = require('chai').assert;

describe("Person", function() {

  it.skip('should have a type', function() {
    var crossStitch = new Person({ type: 'cross stitch' });
    var macrame = new Person({ type: 'macrame' });

    assert.equal(crossStitch.name, 'cross stitch');
    assert.equal(macrame.name, 'macrame');
  })

})
