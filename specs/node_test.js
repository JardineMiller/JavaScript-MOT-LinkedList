// Registration
// Pass/Fail
// MOT date
// Mileage
// MOT Number
// Expiry
// Reasons for failure
// Advisory notice items
// Next item

const assert = require('assert');
const Node = require('../node.js');

describe('Node test', function() {
  var node;

  beforeEach(function() {
    node = new Node("L101VLY", true, new Date(2018, 0, 19), 110439, 367580191855, new Date(2019, 0, 19), null, ["Oil leak"], null);
  })

  it('has a registration num', function() {
    assert.strictEqual(node.registration, "L101VLY");
  })

  it('has a result', function() {
    assert.strictEqual(node.result(), "pass");
  })

  it('has a tested date', function() {
    expected = new Date(2018, 0, 19);
    assert.deepEqual(node.dateTested, expected);
  })

  it('has a tested expiry date', function() {
    expected = new Date(2019, 0, 19);
    assert.deepEqual(node.dateExpires, expected);
  })

  it('has a mileage', function() {
    assert.strictEqual(node.mileage, 110439);
  })

  it('has an MOT number', function() {
    assert.strictEqual(node.motNumber, 367580191855);
  })

  it('does not have reasons for failure if it has passed', function() {
    assert.strictEqual(node.reasonsForFailure, null);
  })

  it('does have advisory notes', function() {
    assert.strictEqual(node.advisoryNotes.length, 1);
  })

  it('does not have a next item when created', function() {
    assert.strictEqual(node.next, null);
  })


})