
class GridDrawing {
  constructor(grid, colorCodes, canvas) {
    // input:
    //      grid: Grid object
    //      colorCodes: object with chars as keys and values are color hex strings
    //      canvas: a canvas dom element


    this.tileSize = 20; // pixels
    this.context = canvas.getContext('2d');
    this.colorCodes = colorCodes;

    this.context.fillStyle = '#ffffff';
    this.context.fillRect(0, 0, canvas.width, canvas.height);

    grid.grid.forEach( (xArray, y) => {

      xArray.forEach( (node, x) => {

        this.context.fillStyle = colorCodes[node.type];
        this.context.fillRect(x*this.tileSize, y*this.tileSize, this.tileSize, this.tileSize)
      });
    });
    this.drawCosts(
      colorCodes,
      grid.charCosts,
      grid.startChar,
      grid.goalChar,
      grid.impassableChars,
      5,
      grid.grid.length * this.tileSize + 5
    );
  }

  drawPath(path, startNode, endNode) {
    /* input:
            path: array of nodes
     */
    let halfSize = this.tileSize/2;
    this.context.fillStyle = '#151511';
    path.forEach( node => {
      this.context.beginPath();
      this.context.arc((node.x)*this.tileSize+halfSize, (node.y)*this.tileSize+halfSize, 2, 0, Math.PI*2);
      this.context.fill();
    });
  }

  drawCosts(colorCodes, charCosts, startChar, goalChar, impassableChars, offSetX, offSetY) {
    // input:
    //      colorCodes: object with chars as keys and values are color hex strings
    //      charCosts: object with chars as keys and values are costs integers
    //      impassableChars: chars you cant go through
    //      offSetX, offSetY: coords to start drawing


    // The final order should be:
    // 1. the starting chars, then the chars ordered by cost (low to high), then the impassables, and lastly the goal char
    let orderedChars = Object.keys(charCosts).sort( (char1, char2) =>
      charCosts[char1] - charCosts[char2]
    );

    orderedChars.forEach(c=>console.log(c));

    // Remove start char and insert it at beginning
    let indexOfStart = orderedChars.indexOf(startChar);
    orderedChars.splice(indexOfStart,1);
    orderedChars.unshift(startChar);

    // Add impassables
    orderedChars = orderedChars.concat(impassableChars);

    // Remove goal char and place it at end
    let indexOfGoal = orderedChars.indexOf(goalChar);
    orderedChars.splice(indexOfGoal,1);
    orderedChars.push(goalChar);

    let tileSize = this.tileSize;
    let margin = 5;
    this.context.font = '20px Arial';
    this.context.fillStyle = '#000';

    this.context.fillText('Color semantics', offSetX, offSetY+16);

    this.context.font = '16px Arial';

    offSetY += 16+margin*2;


    orderedChars.forEach( (char, index) => {
      console.log(char);
      console.log(typeof 'a');
      let xPos = offSetX + margin;
      let yPos = offSetY + index*tileSize + index*margin;

      this.context.fillStyle = colorCodes[char];
      this.context.fillRect(xPos, yPos, tileSize, tileSize);

      let textXPos = xPos+tileSize+margin;
      let textYPos = yPos+17;
      this.context.fillStyle = '#000';

      if (char !== 'A' && char !== 'B' && !impassableChars.includes(char)) {
        this.context.fillText('Cost: ' + charCosts[char], textXPos, textYPos);

      } else if (impassableChars.includes(char)) {
        this.context.fillText('Wall', textXPos, textYPos);

      } else if (char === 'A') {
        this.context.fillText('Starting position', textXPos, textYPos);

      } else if (char === 'B') {
        this.context.fillText('Goal', textXPos, textYPos);
      }
    });
  }
}
