const CONSTANTS = require('../../Common/Constants/Constants');

const getCanvasMetaData = (canvasMetaData) => {
    if (canvasMetaData.width === 0 || canvasMetaData.height === 0) {
        return;
    }
    const horizontalDataArray = [];
    const horizontalEdgeEnd = canvasMetaData.height + 1;
    const verticalEdgeEnd = canvasMetaData.width + 1;
    for (let y = 0; y < canvasMetaData.height + 2; y ++) {
        const verticalDataArray = [];
        for (let x = 0; x < canvasMetaData.width + 2; x++) {
            let drawValue = CONSTANTS.DRAW_SYMBOLS.INITIAL_FILL_VALUE;
            if (y === 0 || y === horizontalEdgeEnd) {
                drawValue = CONSTANTS.DRAW_SYMBOLS.HORIZONTAL_BORDER_VALUE;
            } else if (x === 0 || x === verticalEdgeEnd) {
                drawValue = CONSTANTS.DRAW_SYMBOLS.VERTICAL_BORDER_VALUE;
            }
            verticalDataArray.push({
                draw: drawValue
            });
        }
        horizontalDataArray.push(verticalDataArray);
    }
    return horizontalDataArray;
}

module.exports = getCanvasMetaData;