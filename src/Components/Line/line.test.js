const getLineMetaData = require('./line');
describe('Return Line MetaData', () => {
    test('Should return a single coordinate when both the input coordinates are equal/same ', () => {
        const metaData = getLineMetaData({
            x1: 1,
            y1: 1,
            x2: 1,
            y2: 1, 
        });
        expect(metaData).toEqual([[1, 1]]);
        expect(metaData).toHaveLength(1);
    })
});


describe('Return Line MetaData', () => {
    test('Should return expected coordinates', () => {
        const resultData = [ [ 1, 1 ], [ 2, 2 ] ];
        const metaData = getLineMetaData({
            x1: 1,
            y1: 1,
            x2: 2,
            y2: 2,
        });
        expect(metaData).toEqual(resultData);
    }) 
});