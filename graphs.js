function Graph () {
  this.vertices = [];
  this.edges = {};
}

Graph.prototype.addVertex = function (vertex) {
  this.vertices.push(vertex);
  this.edges[vertex] = [];
};
