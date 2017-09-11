function BinarySearchTree() {
  this.root = null;
}

function Node(data) {
  this.data = data;
  this.left = null;
  this.righ = null;
}

BinarySearchTree.prototype.add = function(data) {
  let node = new Node(data);

  if(!this.root) {
    this.root = node;
  } else {
    let current = this.root;
    while(current){
      if(node.data < current.data) {
        if(!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else  {
        if(!current.right) {
          current.right = node;
        }
        current = current.right;
      }
    }
  }
};

BinarySearchTree.prototype.remove = function(data) {
  const removeNode = (node, data2) => {
    if(!node) {
      return null;
    }

    if(data === node.data) {
      if(!node.left && !node.right) {
        return null;
      }
      if(!node.left) {
        return node.right;
      }
      if(!node.right) {
        return node.left;
      }
      var temp = that.getMin(node.right);
       node.data = temp;
       node.right = removeNode(node.right, temp);
       return node;
     } else if(data < node.data) {
       node.left = removeNode(node.left, data);
       return node;
     } else {
       node.right = removeNode(node.right, data);
       return node;
     }
    }
  };
};

BinarySearchTree.prototype.getMin = function(node) {
  if(!node) {
    node = this.root;
  }

  while(node.left) {
    node = node.left;
  }

  return node.data;
};

BinarySearchTree.prototype.getMax = function(node) {
  if(!node) {
    node = this.root;
  }

  while(node.right) {
    node = node.right;
  }

  return node.data;
};

BinarySearchTree.prototype.add = function(data) {

}
BinarySearchTree.prototype.add = function(data) {

}
BinarySearchTree.prototype.add = function(data) {

}
