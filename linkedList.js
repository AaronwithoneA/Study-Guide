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

LinkedList.prototype.remove = function(data) {
  var current = this.head;
  var previous = this.head;

  while(current) {
    if(data === current.data) {
      if(current === this.head) {
        this.head = this.current.next;
      }
      if(current === this.tail) {
        this.tail = previous;
      }

      previous.next = current.next;
      this.length--;
    }else {
      previous = current;
    }
  }
  current = current.next;
};

LinkedList.prototype.insertAfter =  function(data, beforeNodeData) {
  var current = this.head;

  while(current) {
    if(current.data === beforeNodeData) {
      var newNode = new Node(data);

      if(beforeNodeData === this.tail.data) {
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        newNode.next = current.next;
        current.next = newNode;
      }
      this.length++;
    }
    current = current.next;
  }
};

LinkedList.prototype.length = function() {
  return this.length;
};
