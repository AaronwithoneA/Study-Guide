function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.add = function(data) {
  let node = new Node(data);

  let current = this.head;

  if(!this.head) {
  this.head = node;
  this.tail = node;
  } else {
  this.tail.next = node;
  this.tail = node;
  }

  this.length++;
};
