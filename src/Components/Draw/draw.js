const CONSTANTS = require('../../Common/Constants/Constants');


const draw = (canvasData) => {
    if (!canvasData) {
        return;
      }
      const horizontalDataArray = canvasData;
      const height = horizontalDataArray.length;
      const width = horizontalDataArray[0].length;
      for (let y = 0; y < height; y++) {
        const verticalDataArray = horizontalDataArray[y];
        let verticalData = '';
        for (let x = 0; x < width; x++) {
          const xVal = verticalDataArray[x];
          if (xVal.draw === CONSTANTS.DRAW_SYMBOLS.INITIAL_FILL_VALUE) {
            verticalData += (xVal.fill || CONSTANTS.DRAW_SYMBOLS.INITIAL_FILL_VALUE);
          } else {
            verticalData += xVal.draw;
          }
        }
        console.log(verticalData);
      }
}

const drawInsideCanvas = (newMetaData, canvasMetaData ) => {
    const length = newMetaData.length;
    for (let i = 0; i < length; i++) {
        const dataCoordinate = newMetaData[i];
        const x = dataCoordinate[0];
        const y = dataCoordinate[1];
        if (canvasMetaData[y] && canvasMetaData[y][x]) {
            const canvasDataCoordinate = canvasMetaData[y][x];
            if (canvasDataCoordinate.draw === CONSTANTS.DRAW_SYMBOLS.INITIAL_FILL_VALUE) {
                canvasDataCoordinate.draw = CONSTANTS.DRAW_SYMBOLS.DEFAULT_DRAW_VALUE;
            }
        }
    }
    draw(canvasMetaData);
} 

module.exports = {
    draw,
    drawInsideCanvas
};