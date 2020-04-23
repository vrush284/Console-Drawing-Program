const validateAndGetInputData = require('./InputValidator');
const CONSTANTS = require('../Constants/Constants');


describe('Should Validate Input', () => {
    test('Should Return Invalid Input Command', () => {
        const {command} = validateAndGetInputData('C 20 4 ');
        expect(command).toEqual(CONSTANTS.DRAW_COMMANDS.INVALID_COMMAND); 
    })
});

describe('Should Validate Input', () => {
    test('Should Return Draw Canvas Command', () => {
        const resultCommand = CONSTANTS.DRAW_COMMANDS.DRAW_CANVAS;
        const {command} = validateAndGetInputData('C 16 6');
        expect(command).toEqual(resultCommand);
    })
});

describe('Should Validate Input', () => {
    test('Should Return Draw Line Command', () => {
        const resultCommand = CONSTANTS.DRAW_COMMANDS.DRAW_LINE;
        const {command} = validateAndGetInputData('L 6 3 6 4');
        expect(command).toEqual(resultCommand);
    })
});

describe('Should Validate Input', () => {
    test('Should Return Draw Rectangle Command', () => {
        const resultCommand = CONSTANTS.DRAW_COMMANDS.DRAW_RECTANGLE;
        const {command} = validateAndGetInputData('R 6 3 6 4');
        expect(command).toEqual(resultCommand);
    })
});

describe('Should Validate Input', () => {
    test('Should Return Fill Colour Command', () => {
        const resultCommand = CONSTANTS.DRAW_COMMANDS.FILL_CANVAS;
        const {command} = validateAndGetInputData('B 6 3 b');
        expect(command).toEqual(resultCommand);
    })
});

describe('Should Validate Input', () => {
    test('Should Return Quit Command', () => {
        const resultCommand = CONSTANTS.DRAW_COMMANDS.QUIT;
        const {command} = validateAndGetInputData('Q');
        expect(command).toEqual(resultCommand);
    })
});
