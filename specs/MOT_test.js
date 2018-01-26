const assert = require('assert');
const MOT = require('../MOT.js');

describe('MOT test', function() {
  var mot;

  beforeEach(function() {
    mot = new MOT(true, 367580191855, null, ["Oil leak"]);
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

})