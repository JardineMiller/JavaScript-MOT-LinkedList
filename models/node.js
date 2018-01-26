const Node = function(mot, car, dates) {
  this.mot = mot;
  this.car = car;
  this.dates = dates;
  this.next = null;
};

module.exports = Node;