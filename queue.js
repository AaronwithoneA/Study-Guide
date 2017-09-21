function Queue() {
  this.queue = [];
}


Queue.prototype.enqueue = function(value) {
  this.queue.push(value);
};
