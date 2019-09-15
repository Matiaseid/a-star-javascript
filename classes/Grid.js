
// Node must be loaded first (the file, not the runtime)

class Grid {
  constructor(inputGrid, startChar, goalChar, impassableChars, charCosts) {
    /* input:
            inputGrid: a 2D array of characters
            startChar: where we start
            goalChar: where we want to go
            impassableChars: array of chars that represent impassable nodes
            charCosts: object with chars as keys and associated costs of moving to them as value
    */


    this.nodes = []; // Keep track of all the nodes
    this.grid = []; // Keep track of the node layout
    this.startNode = null;
    this.goalNode = null;
    this.charCosts = charCosts;
    this.startChar = startChar;
    this.goalChar = goalChar;
    this.impassableChars = impassableChars;

    this.createNodesAndGrid(inputGrid, this.nodes, this.grid, startChar, goalChar, impassableChars, charCosts);
    this.calculateAndSetHeuristics(this.nodes, this.goalNode);

    this.startNode.setG(0);
    this.startNode.setF(this.startNode.heuristic);
  }

  createNodesAndGrid(inputGrid, nodes, grid, startChar, goalChar, impassableChars, charCosts) {
    // Create a node for each tile
    for (let y=0; y<inputGrid.length; y++) {

      this.grid.push([]);
      for (let x=0; x<inputGrid[y].length; x++) {

        let char = inputGrid[y][x];
        let movementCost = charCosts[char];
        let passable = impassableChars.indexOf(char) === -1;
        let node = new Node(x, y, char, passable, movementCost);

        // Add
        this.nodes.push(node);
        this.grid[y].push(node);

        // See if this is start or goal node
        if (char === startChar) {
          this.startNode = node;
        }
        else if (char === goalChar) {
          this.goalNode = node;
        }
      }
    }
  }

  calculateAndSetHeuristics(nodes, goalNode) {
    nodes.forEach( node => {
      // Heuristic is manhattan distance
      let heuristic =
        Math.abs( goalNode.x - node.x) + Math.abs( goalNode.y - node.y );

      node.setHeuristic(heuristic);
    })
  }

  getNeighbours(node) {
    let neighbours = [];
    let x = node.x;
    let y = node.y;

    let aboveArray = this.grid[y-1];
    if (aboveArray && aboveArray[x].passable) neighbours.push( aboveArray[x] );

    let belowArray = this.grid[y+1];
    if (belowArray && belowArray[x].passable) neighbours.push( belowArray[x] );

    let toRightNode = this.grid[y][x+1];
    if (toRightNode && toRightNode.passable) neighbours.push( toRightNode );

    let toLeftNode = this.grid[y][x-1];
    if (toLeftNode && toLeftNode.passable) neighbours.push( toLeftNode );

    return neighbours;
  }

  pathFromNodeToStart(node) {
    // Returns an array representing the path
    // from this tile to the start tile
    // Not the path does not include this node or the start node
    // But it does have everything in between

    let path = [];
    let parent = node.parent;

    while (parent !== this.startNode) {

      node = parent;
      path.push(node);

      parent = node.parent;
    }
    return path;
  }

  getNode(x, y) {
    return this.grid[y][x];
  }
}
