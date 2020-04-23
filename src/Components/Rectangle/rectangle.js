const getRectangleMetaData = (inputData) => {
   const {x1, y1, x2, y2} = inputData;
   if (x1 < x2) {
       if (y1 < y2) {
          return getRectangleData(x1, y1, x2, y2); 
       } else {
           return getRectangleData(x1, y2, x2, y1);
       }
   } else {
       if (y1 < y2) {
           return getRectangleData(x2, y1, x1, y1);
       } else {
           return getRectangleData(x2, y2, x1, y2);
       }
   }
}

const getRectangleData = (x1, y1, x2, y2) => {
    const rectangle = [];
    const horizontalEnd = x2 + 1;
    const verticalEnd = y2;

    for (let x = x1; x< horizontalEnd; x++) {
        rectangle.push([x, y1]);
    }

    for (let x = x1; x < horizontalEnd; x++ ) {
        rectangle.push([x, y2]);
    }

    for (let y = y1; y < verticalEnd; y++ ){
        rectangle.push([x1, y]);
    }

    for (let y =y1; y< verticalEnd; y++) {
        rectangle.push([x2, y]);
    }
    return rectangle;
}

module.exports = getRectangleMetaData;