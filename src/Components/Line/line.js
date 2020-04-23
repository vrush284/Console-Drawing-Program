const getLineMetaData = (inputData) => {
    if (inputData.x1 === inputData.x2 || inputData.y1 === inputData.y2) {
        return parallelLineData(inputData);
    } else {
        return  nonParallelLineData(inputData);
    }
}

const parallelLineData = (inputData) => {
    const {x1,x2,y1,y2} = inputData;
    const lineData = [];
    if (x1 === x2) {
       const {start, length} =  getLengthAndStartValue(y1, y2);
       for (let i = start; i < length; i++) {
           lineData.push([x1, i]);
       }
    } else {
       const {start, length} =  getLengthAndStartValue(x1, x2);
       for (let i = start; i < length; i++) {
            lineData.push([i, y1]);
        }
    }
    return lineData;
}

const nonParallelLineData = (inputData) => {
    const {x1,x2,y1,y2} = inputData;
    const lineData = [];
    const slope = (y2-y1)/(x2-x1);
    const yIntercept = y1 - (slope * x1);
    let length;
    let start;
    if (x1 < x2) {
        length = x2 + 1;
        start = x1;
    } else {
        length = x1 + 1;
        start = x2;
    }
    for (let i = start; i < length; i++) {
        const coordinate = [i, i * slope + yIntercept];
        lineData.push(coordinate);
    }
    return lineData;
}


const getLengthAndStartValue = (dest1, dest2) => {
    let data = {};
    if (dest1 < dest2) {
        data.length = dest2 + 1;
        data.start = dest1;
    } else {
        data.length = dest1 + 1;
        data.start = dest2;
    }
    return data;
}

module.exports = getLineMetaData;