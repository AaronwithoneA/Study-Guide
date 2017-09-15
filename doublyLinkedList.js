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
