function Graph (vertices) {
  this.vertices = vertices ? vertices.slice() : [];
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
  let dupGraph = new Graph(this.vertices);
  let sorted = [];
  let queue = [];
  let edges = dupGraph.edges;

  for(let i = 0; i < dupGraph.vertices.length; i++) {
    let vertex = dupGraph.vertices[i];
    if(vertex.inEdges.length === 0) {
      queue.push(vertex);
    }
  }

  while(queue.length) {
    let current = queue.shift();
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
    let vertexIndex = dupGraph.vertices.indexOf(current);
    dupGraph.vertices.splice(vertexIndex, 1);
  }

  return sorted;
};

let graph = new Graph();

graph.addVertex(10);
console.log(graph.vertices);

let graph2 = new Graph(graph.vertices);
graph2.addVertex(5);
console.log(graph.vertices);
