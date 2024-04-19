function analyseArray(array) {
    var sum;
    var min;
    var max;
    var length = array.length;

    if (length === 0) {
        return {
            average: null,  // or some other sensible default or error handling
            min: null,
            max: null,
            length: 0
        };
    }

    for (i = 0; i < length; i++) {

        if (array[i].isNaN()) {

        } 
        if (array[i] < min) {
            min = array[i];
        } if ( array[i] > max) {
            max = array[i];
        }

        sum += array[i];
    }

    var average = (sum/length).toFixed(2);

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}
  
module.exports = analyseArray;
  