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

DoublyLinkedList.prototype.remove = function(data) {
  var current = this.head;

  while(current) {
    if(current.data === data) {
      if(current == this.head && current === this.tail) {
        this.head = null;
        this.tail = null;
      } else if(current === this.head) {
        this.head = current.next;
        this.head.previous = null;
      } else if(current === this.tail) {
        this.tail = current.previous;
        this.tail.next = null;
      } else {
        current.next.previous = current.previous;
        current.previous.next = current.next;
      }
      this.length--;
    }

    current = current.next;
  }
};

DoublyLinkedList.prototype.insertAfter = function(data, beforeNodeData) {
  let current = this.head;

  while(current) {
    if(current.data === beforeNodeData) {
      let node = new Node(data);

      if(current === this.tail) {
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
      } else {
        current.next.previous = node;
        node.next = current.next;
        node.previous = current;
        current.next = node;
      }
      this.length++;
    }

    current = current.next;
  }
};

DoublyLinkedList.prototype.traverse = function(cb) {
  let current = this.head;

  while(current) {
    cb(current);
    current = current.next;
  }
};

DoublyLinkedList.prototype.traverseBackwards = function(cb) {
  let current = this.tail;

  while(current) {
    cb(current);
    current = current.previous;
  }
};

DoublyLinkedList.prototype.print =  function() {
  var current = this.head;
  var str = '';

  while(current) {
    str += current.data + ' ';
    current = current.next;
  }
  console.log(str);
};

let list = new DoublyLinkedList();

list.add(5);
list.add('hello');
list.add(15);
list.print();
list.remove(5);
list.print();
list.insertAfter(100, 'hello');
list.print();
