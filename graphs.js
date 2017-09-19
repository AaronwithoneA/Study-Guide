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

Graph.prototype.traverseDFS_ = function(vertex, visited, fn) {
  if(!vertex) {
    return;
  }

  fn(vertex);
  visited[vertex] =  true;

  let connections = this.edges[vertex];
  for(let i = 0; i < connections.length; i++) {
    let connectedVertex = connections[i];
    if(!visited[connectedVertex]) {
      this.traverseDFS_(connectedVertex, visited, fn);
    }
  }
};

Graph.prototype.topologicalSort = function() {
  let sorted = [];
  let queue = [];
  let edges = this.edges;

  for(let i = 0; i < this.vertices.length; i++) {
    let vertex = this.vertices[i];
    if(vertex.inEdges.length === 0) {
      queue.push(vertex);
    }
  }

  while(queue.length) {
    let current = queue.pop();
    sorted.push(current);
    let destinations = current.outEdges;

    for(let i = 0; i < destinations.length; i++) {
      let destination = destinations[i];
      if(destination.inEdges.length === 0) {
        queue.push(destination);
      }
      let index = destination.inEdges.indexOf(current);
      destination.inEdges.splice(index, 1);
    }

    current.outEdges = [];
    let vertexIndex = this.vertices.indexOf(current);
    this.vertices.splice(vertexIndex, 1);
  }

  return sorted;
};
