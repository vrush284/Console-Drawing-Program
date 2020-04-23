let startCoordStack;
let currentCanvasData;
let emptyDrawValue;
let drawValue;

// if a up or down row's coord is connected to its left coord,
// no need to add it to the stack because it has the same start coord.
let noNeedToAddUpRowCoord;
let noNeedToAddDownRowCoord;

const moveUp = (coord) => {
  const x = coord[0];
  const y = coord[1];
  return [x, y - 1];
}

const moveDown = (coord) => {
  const x = coord[0];
  const y = coord[1];
  return [x, y + 1];
}

const moveLeft = (coord) => {
  const x = coord[0];
  const y = coord[1];
  return [x - 1, y];
}

const moveRight = (coord) => {
  const x = coord[0];
  const y = coord[1];
  return [x + 1, y];
}

const fillColor = (coord) => {
  const x = coord[0];
  const y = coord[1];
  currentCanvasData[y][x].fill = drawValue;
}

const getNoNeedToAddRowCoordFlag = (isUp) => {
  return isUp ? noNeedToAddUpRowCoord : noNeedToAddDownRowCoord;
}

const setNoNeedToAddRowCoordFlag = (isUp, flag) => {
  if (isUp) {
    noNeedToAddUpRowCoord = flag;
  } else {
    noNeedToAddDownRowCoord = flag;
  }
}

const addRowCoordToStack = (coord, isUp) => {
  if (canFillCoord(coord)) {
    if (!getNoNeedToAddRowCoordFlag(isUp)) {
      const startCoord = getStartCoordForOneRow(coord);
      startCoordStack.push(startCoord);
      setNoNeedToAddRowCoordFlag(isUp, true);
    }
  } else {
    setNoNeedToAddRowCoordFlag(isUp, false);
  }
}

const addUpRowCoordToStack = (coord) => {
  const upRowCoord = moveUp(coord);
  addRowCoordToStack(upRowCoord, true);
}

const addDownRowCoordToStack = (coord) => {
  const downRowCoord = moveDown(coord);
  addRowCoordToStack(downRowCoord, false);
}

const proceedWithStartCoord = (coord) => {
  fillColor(coord);
  setNoNeedToAddRowCoordFlag(true, false);
  setNoNeedToAddRowCoordFlag(false, false);
  addUpRowCoordToStack(coord);
  addDownRowCoordToStack(coord);
}

/**
 * Find the leftest positioned one among connected coordinates from target
 * @param {array} target target coordinate
 * @returns {array} start coordinate
 */
const getStartCoordForOneRow = (target) => {
  let startCoord = target;
  let loop = true;
  while (loop) {
    let temp = moveLeft(startCoord);
    if (canFillCoord(temp)) {
      startCoord = temp;
    } else {
      loop = false;
    }
  }
  return startCoord;
}

const handleRightCoord = (coord) => {
  fillColor(coord);
  addUpRowCoordToStack(coord);
  addDownRowCoordToStack(coord);
}

const processLeftToRight = (startCoord) => {
  let loop = true;
  let current = startCoord;
  while (loop) {
    let next = moveRight(current);
    if (canFillCoord(next)) {
      handleRightCoord(next);
      current = next;
    } else {
      loop = false;
    }
  }
}

const doFill = (coord) => {
  let loop = true;
  let currentCoord = getStartCoordForOneRow(coord);
  while (loop) {
    proceedWithStartCoord(currentCoord);
    processLeftToRight(currentCoord);
    if (startCoordStack.length < 1) {
      loop = false;
    } else {
      currentCoord = startCoordStack.pop();
    }
  }
}

const canFillCoord = (target) => {
  const x = target[0];
  const y = target[1];
  if (currentCanvasData[y] && currentCanvasData[y][x]) {
    const coord = currentCanvasData[y][x];
    return !(coord.draw !== emptyDrawValue || coord.fill === drawValue);
  } else {
    return false;
  }
}

const fill = (inputData, canvasData) => {
  startCoordStack = [];
  currentCanvasData = canvasData;
  emptyDrawValue = ' ';
  drawValue = inputData.colour;
  const coord = [inputData.x, inputData.y];
  if (canFillCoord(coord)) {
    doFill(coord);
  }
}

module.exports = fill;