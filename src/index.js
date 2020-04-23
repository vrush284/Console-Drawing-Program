const  inquirer = require('inquirer');
const CONSTANTS = require('./Common/Constants/Constants');
const validateAndGetInputData = require('./Common/Validators/InputValidator');
const draw = require('./Components/Draw/draw');
const getCanvasMetaData = require('./Components/Canvas/canvas');
const getLineMetaData = require('./Components/Line/line');
const getRectangleMetaData = require('./Components/Rectangle/rectangle');
const getFillColourMetaData = require('./Components/FillColour/fillColour');

const userInput = () => {
    inquirer.prompt([CONSTANTS.QUESTION]).then((input) => {
        const inputData = validateAndGetInputData(input.command);
        drawOnConsole(inputData);
        userInput();
    }).catch((err) => {
        console.log(err);
    });
}

let canvasMetaData;

const drawOnConsole = (inputData) => {
    
    if (inputData.command === CONSTANTS.DRAW_COMMANDS.INVALID_COMMAND) {
        console.log(`${CONSTANTS.ERROR_MESSAGES.INVALID_INPUT}..!!!`);
    return;
    }
    if (inputData.command === CONSTANTS.DRAW_COMMANDS.DRAW_CANVAS ) {
        canvasMetaData = getCanvasMetaData(inputData);
        draw.draw(canvasMetaData);
    }
    if (inputData.command === CONSTANTS.DRAW_COMMANDS.DRAW_LINE && checkIfCanvasPresent(canvasMetaData)) {
        const lineMetaData = getLineMetaData(inputData);
        draw.drawInsideCanvas(lineMetaData, canvasMetaData);
    }
    if (inputData.command === CONSTANTS.DRAW_COMMANDS.DRAW_RECTANGLE && checkIfCanvasPresent(canvasMetaData)) {
        const rectangleMetaData = getRectangleMetaData(inputData);
        draw.drawInsideCanvas(rectangleMetaData, canvasMetaData);
    }
    if (inputData.command === CONSTANTS.DRAW_COMMANDS.FILL_CANVAS && checkIfCanvasPresent(canvasMetaData)) {
        getFillColourMetaData(inputData, canvasMetaData);
        draw.draw(canvasMetaData);
    }
    if (inputData.command === CONSTANTS.DRAW_COMMANDS.QUIT) {
        process.exit();
      }
}

const checkIfCanvasPresent = (canvasMetaData) => {
    if (canvasMetaData) {
        return true;
      }
      console.log(CONSTANTS.ERROR_MESSAGES.NO_CANVAS);
      return false
}

userInput();

module.exports =  {
    checkIfCanvasPresent
}