const CONSTANTS = require('../Constants/Constants');

module.exports = (command) => {
    if (isDrawCanvas(command)) {
        return getCanvasData(command);
    }
    if (isDrawRectangle(command)) {
        return getRectangleData(command);
    }
    if (isDrawLine(command)) {
        return getLineData(command);     
    }
    if (isFillRectangle(command)) {
        return getFillColorData(command);
    }
    if (isQuit(command)) {
        return { command: CONSTANTS.DRAW_COMMANDS.QUIT}
    }
    return {command: CONSTANTS.DRAW_COMMANDS.INVALID_COMMAND };
};

const isDrawCanvas = (command) => {
    if (CONSTANTS.REGULAR_EXPRESSIONS.DRAW_CANVAS.test(command)) {
        return true;
    }
    return false;
}

const isDrawRectangle = (command) => {
    if (CONSTANTS.REGULAR_EXPRESSIONS.DRAW_RECTANGLE.test(command)) {
        return true;
    }
    return false;
}

const isDrawLine = (command) => {
    if (CONSTANTS.REGULAR_EXPRESSIONS.DRAW_LINE.test(command)) {
        return true;
    }
    return false;
}

const isFillRectangle = (command) => {
    if (CONSTANTS.REGULAR_EXPRESSIONS.FILL_CANVAS.test(command)) {
        return true;
    }
    return false;
}

const isQuit = (command) => {
    if (CONSTANTS.REGULAR_EXPRESSIONS.QUIT.test(command)) {
        return true;
    }
    return false;
}


const getCanvasData = (command) => {
    const inputData = {};
    const inputMetaData = command.match(CONSTANTS.REGULAR_EXPRESSIONS.DRAW_CANVAS);
    inputData.command = CONSTANTS.DRAW_COMMANDS.DRAW_CANVAS;
    inputData.width = Number(inputMetaData[1]);
    inputData.height = Number(inputMetaData[2]);
    return inputData;
}

const getRectangleData = (command) => {
    const inputData = {};
    const inputMetaData = command.match(CONSTANTS.REGULAR_EXPRESSIONS.DRAW_RECTANGLE);
    inputData.command = CONSTANTS.DRAW_COMMANDS.DRAW_RECTANGLE;
    inputData.x1 = Number(inputMetaData[1]);
    inputData.y1 = Number(inputMetaData[2]);
    inputData.x2 = Number(inputMetaData[3]);
    inputData.y2 = Number(inputMetaData[4]);
    return inputData;
}

const getLineData = (command) => {
    const inputData = {};
    const inputMetaData = command.match(CONSTANTS.REGULAR_EXPRESSIONS.DRAW_LINE);
    inputData.command = CONSTANTS.DRAW_COMMANDS.DRAW_LINE;
    inputData.x1 = Number(inputMetaData[1]);
    inputData.y1 = Number(inputMetaData[2]);
    inputData.x2 = Number(inputMetaData[3]);
    inputData.y2 = Number(inputMetaData[4]);  
    return inputData;
}

const getFillColorData = (command) => {
    const inputData = {};
    const inputMetaData = command.match(CONSTANTS.REGULAR_EXPRESSIONS.FILL_CANVAS);
    inputData.command = CONSTANTS.DRAW_COMMANDS.FILL_CANVAS;
    inputData.x = Number(inputMetaData[1]);
    inputData.y = Number(inputMetaData[2]);
    inputData.colour = inputMetaData[3];  
    return inputData;
}