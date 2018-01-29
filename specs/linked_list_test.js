const assert = require('assert');
const LinkedList = require('../models/linkedList.js');
const Node = require('../models/node.js');
const Vehicle = require('../models/vehicle.js');
const MOT = require('../models/mot.js');
const Dates = require('../models/dates.js');

describe('LinkedList test', function() {
  var linkedList;

  var node;
  var car;
  var dates;
  var mot;

  var node2;
  var car2;;
  var dates2;
  var mot2;

  var node3;
  var car3;
  var dates3;
  var mot3;

  beforeEach(function() {
    linkedList = new LinkedList();

    car = new Vehicle('L101VLY', 110439);
    dates = new Dates(new Date(2018, 0, 19), new Date(2019, 0, 19));
    mot = new MOT(dates, true, 367580191855, null, ["Oil leak"]);
    node = new Node(mot, car, dates);

    car2 = new Vehicle('L101VLY', 110439);
    dates2 = new Dates(new Date(2018, 0, 18), null);
    mot2 = new MOT(dates, false, 586456865382, ["Nearside Front position lamp(s) not working (1.1.A.3b)", "Power steering fluid level below minimum (2.3.1)", "Nearside Front Tyre has ply or cords exposed 195/50/15 (4.1.D.1b)"], ["Coolant level below minimum", "Oil leak", "Front brake disc worn, pitted or scored, but not seriously weakened both (3.5.1i)", "front brake fluctuating, but not excessively both (3.7.B.3)"]);
    node2 = new Node(mot2, car2, dates2);
  })

  it('has a length of zero when created', function() {
    assert.strictEqual(linkedList.length, 0);
  })

  it('has no head when created', function() {
    assert.strictEqual(linkedList.head, null);
  })

  it('can unshift items', function() {
    assert.strictEqual(linkedList.unshift(node), 1);
    assert.strictEqual(linkedList.head, node);
  })
})