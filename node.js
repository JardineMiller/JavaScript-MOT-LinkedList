const Node = function(registration, status, dateTested, mileage, motNumber, dateExpires, reasonsForFailure, advisoryNotes) {
  this.registration = registration;
  this.status = status;
  this.dateTested = dateTested;
  this.dateExpires = dateExpires;
  this.mileage = mileage;
  this.motNumber = motNumber;
  this.reasonsForFailure = reasonsForFailure;
  this.advisoryNotes = advisoryNotes;
  this.next = null;
}

Node.prototype.result = function(first_argument) {
  return this.status ? "pass" : "fail";
};

module.exports = Node;