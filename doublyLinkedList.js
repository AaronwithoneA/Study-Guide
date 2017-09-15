function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(data) {
  this.data = data;
  this.next = null;
  this.previous = null;
}

DoublyLinkedList.prototype.add = function(data) {
  let node = new Node(data);

  if(!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  this.length++;
};
