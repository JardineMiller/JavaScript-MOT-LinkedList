const assert = require('assert');
const MOT = require('../models/MOT.js');
const Dates = require('../models/dates.js');

describe('MOT test', function() {
  var mot;
  var dates;

  beforeEach(function() {
    dates = new Dates(new Date(2018, 0, 19), new Date(2019, 0, 19));
    mot = new MOT(dates, true, 367580191855, null, ["Oil leak"]);
  })

  it('has an MOT number', function() {
    assert.strictEqual(mot.number, 367580191855);
  })

  it('has a result', function() {
    assert.strictEqual(mot.result(), "pass");
  })

  it('does not have reasons for failure if it has passed', function() {
    assert.strictEqual(mot.reasonsForFailure, null);
  })

  it('does have advisory notes', function() {
    assert.strictEqual(mot.advisoryNotes.length, 1);
  })

  it('has a tested date', function() {
    expected = new Date(2018, 0, 19);
    assert.deepEqual(mot.dates.tested, expected);
  })

  it('has a tested expiry date', function() {
    expected = new Date(2019, 0, 19);
    assert.deepEqual(mot.dates.expires, expected);
  })

})