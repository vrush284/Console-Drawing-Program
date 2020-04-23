
const getCanvasMetaData = require('./canvas');

describe('Return Canvas MetaData', () => {
    test('Should not return data if height or width is equal to 0', () => {
        const metaData = getCanvasMetaData({
            width: 0,
            height: 20,
        });
        expect(metaData).toBeUndefined();
    })
});

describe('Return Canvas MetaData', ()  => {
    test('Should return metadata with width + 2 and height + 2', () => {
        const canvasWidth = 4;
        const canvasHeight = 6;
        const metadata = getCanvasMetaData({
            width: canvasWidth,
            height: canvasHeight,
        });
        const height = metadata.length;
        const width = metadata[0].length;
        expect( (height === canvasHeight + 2) && (width === canvasWidth + 2)).toBeTruthy();
    });
});