
class Node {
  constructor(x, y, type, passable, movementCost) {
    this.type = type;

    this.passable = passable;

    this.x = x;
    this.y = y;
    this.movementCost = movementCost;

    this.parent = null;

    this.heuristic = null;
    this.g = Number.POSITIVE_INFINITY;
    this.f = Number.POSITIVE_INFINITY;
  }

  setHeuristic(heuristic) {
    this.heuristic = heuristic;
  }

  setG(g) {
    this.g = g;
  }

  setF(f) {
    this.f = f;
  }

  toString(){return `{(${this.type}) x: ${this.x}, y: ${this.y}}`;}

  setParent(parent) {
    this.parent = parent;
  }
}
