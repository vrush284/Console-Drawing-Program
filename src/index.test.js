const checkIfCanvasPresent = require('./index').checkIfCanvasPresent;
const getCanvasMetaData = require('./Components/Canvas/canvas');
describe('Check if canvas is drawn', () => {
    test('Should return false as no canvas is drawn', () => {
        let canvas;
        const isCanvasPresent = checkIfCanvasPresent(canvas);
        expect(isCanvasPresent).toBeFalsy();
    });
});

describe('Check if canvas is drawn', () => {
    test('Should return true as canvas is drawn', () => {
        let canvas = getCanvasMetaData({
            width: 10,
            height: 20,
        });
        const isCanvasPresent = checkIfCanvasPresent(canvas);
        expect(isCanvasPresent).toBeTruthy();
    });
});