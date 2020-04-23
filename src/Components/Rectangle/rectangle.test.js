const getRectangleMetaData = require('./rectangle');

describe('Return Rectangle MetaData', () => {
    test('Should return same coordinate if both input coordinates are equal', () => {
        const metaData = getRectangleMetaData({
            x1: 3,
            y1: 3,
            x2: 3,
            y2: 3,
        });
        expect(metaData).toContainEqual([3,3]);
    }) 
});

describe('Return Rectangle MetaData', () => {
    test('Should return expected coordinates', () => {
        const resultData =  [ [ 1, 1 ], [ 2, 1 ], [ 1, 2 ], [ 2, 2 ], [ 1, 1 ], [ 2, 1 ] ];
        const metaData = getRectangleMetaData({
            x1: 1,
            y1: 1,
            x2: 2,
            y2: 2,
        });
        expect(metaData).toEqual(resultData);
    }) 
});
