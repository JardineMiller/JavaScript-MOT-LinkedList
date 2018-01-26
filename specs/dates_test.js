const assert = require('assert');
const Dates = require('../models/dates.js');

describe('Dates test', function() {
  var dates;

  beforeEach(function() {
    dates = new Dates(new Date(2018, 0, 19), new Date(2019, 0, 19));
  })

  it('has a tested date', function() {
    expected = new Date(2018, 0, 19);
    assert.deepEqual(dates.tested, expected);
  })

  it('has a tested expiry date', function() {
    expected = new Date(2019, 0, 19);
    assert.deepEqual(dates.expires, expected);
  })

})