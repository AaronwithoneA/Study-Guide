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









BinarySearchTree.prototype.add = function(data) {

}
BinarySearchTree.prototype.add = function(data) {

}
BinarySearchTree.prototype.add = function(data) {

}
BinarySearchTree.prototype.add = function(data) {

}
BinarySearchTree.prototype.add = function(data) {

}
