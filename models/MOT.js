const MOT = function(status, number, reasonsForFailure, advisoryNotes) {
  this.status = status;
  this.number = number;
  this.reasonsForFailure = reasonsForFailure;
  this.advisoryNotes = advisoryNotes;

  MOT.prototype.result = function(first_argument) {
  return this.status ? "pass" : "fail";
  };
};

module.exports = MOT;