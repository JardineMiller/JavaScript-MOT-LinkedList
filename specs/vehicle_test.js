const assert = require('assert');
const Vehicle = require('../vehicle.js');

describe('Vehicle test', function() {
  var car;

  beforeEach(function() {
    car = new Vehicle('L101VLY', 110439);
  })

  it('has a registration num', function() {
    assert.strictEqual(car.registration, "L101VLY");
  })

  it('has a mileage', function() {
    assert.strictEqual(car.mileage, 110439);
  })

})