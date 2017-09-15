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
        this.head = current.next;
      }
      if(current === this.tail) {
        this.tail = previous;
      }

      previous.next = current.next;
      this.length--;
    }else {
      previous = current;
    }
    current = current.next;
  }
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

LinkedList.prototype.traverse = function(cb) {
  var current = this.head;

  while(current) {
    cb(current);
  }

  current = current.next;
};

LinkedList.prototype.includes = function (data) {
  var current = this.head;

  while(current) {
    if(current.data === data) {
      return true;
    }
    current = current.next;
  }

  return false;
};

LinkedList.prototype.print = function() {
  var current = this.head;
  var str = '';

  while(current) {
    str += current.data + ' ';
    current = current.next;
  }
  console.log(str);
};

LinkedList.prototype.kthFromEnd = function(k) {
  var i = 1;
  var k;
  var kthNode;

  var current = this.head;

  while(current) {
    if(i === k) {
      kthNode = this.head;
    } else if (i - k > 0) {
      kthNode = kthNode.next;
    }
    i++;
    current = current.next;
  }

  return kthNode;
};

var list = new LinkedList();

list.add(5);
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

console.log(list.kthFromEnd(4));
// list.print();
// list.remove(5);
// console.log(list.includes(3));
// list.print();
