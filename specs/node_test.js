const assert = require('assert');
const Node = require('../models/node.js');
const Vehicle = require('../models/vehicle.js');
const MOT = require('../models/mot.js');
const Dates = require('../models/dates.js');

describe('Node test', function() {
  var node;
  var car;
  var dates;
  var mot;

  beforeEach(function() {
    car = new Vehicle('L101VLY', 110439);
    dates = new Dates(new Date(2018, 0, 19), new Date(2019, 0, 19));
    mot = new MOT(dates, true, 367580191855, null, ["Oil leak"]);
    node = new Node(mot, car, dates);
  })

  it('has a registration num', function() {
    assert.strictEqual(node.car.registration, "L101VLY");
  })

  it('has a result', function() {
    assert.strictEqual(node.mot.result(), "pass");
  })

  it('has a tested date', function() {
    expected = new Date(2018, 0, 19);
    assert.deepEqual(node.mot.dates.tested, expected);
  })

  it('has a tested expiry date', function() {
    expected = new Date(2019, 0, 19);
    assert.deepEqual(node.mot.dates.expires, expected);
  })

  it('has a mileage', function() {
    assert.strictEqual(node.car.mileage, 110439);
  })

  it('has an MOT number', function() {
    assert.strictEqual(node.mot.number, 367580191855);
  })

  it('does not have reasons for failure if it has passed', function() {
    assert.strictEqual(node.mot.reasonsForFailure, null);
  })

  it('does have advisory notes', function() {
    assert.strictEqual(node.mot.advisoryNotes.length, 1);
  })

  it('does not have a next item when created', function() {
    assert.strictEqual(node.next, null);
  })


})