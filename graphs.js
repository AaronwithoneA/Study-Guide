function Graph () {
  this.vertices = [];
  this.edges = {};
}

Graph.prototype.addVertex = function (vertex) {
  this.vertices.push(vertex);
  this.edges[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  if(!vertex1 && !vertex2) {
    return 'Neither vertex exists';
  } else if(!vertex1) {
    return 'Vertex1 does not exist';
  } else if(!vertex2) {
    return 'Vertex2 does not exist';
  } else {
    this.edges[vertex1].push(vertex2);
    this.edge(vertex2).push(vertex1);
  }
};

Graph.prototype.traverseDFS = function(vertex, fn) {
  if(!vertex) {
    return 'Vertex does not exist';
  }

  let visited = {};
  this.traverseDFS_(vertex, visited, fn);
};
