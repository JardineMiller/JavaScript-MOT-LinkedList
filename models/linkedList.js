const LinkedList = function() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.unshift = function(node) {
  this.head = node;
  this.length++;
  return this.length;
};

module.exports = LinkedList;