'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    var quantityOfNegativeNumbers = 0;
    var quantityOfPositiveNumbers = 0;
    var quantityOfZeros = 0;
    var arraySize = arr.length;
    
    arr.forEach((number) => {
        if(number < 0) {
            quantityOfNegativeNumbers++;
        } else if(number > 0) {
            quantityOfPositiveNumbers++;
        } else {
            quantityOfZeros++;
        }
    })
    
    var positiveRatio = quantityOfPositiveNumbers / arraySize;
    var negativeRatio = quantityOfNegativeNumbers / arraySize;
    var zeroRatio = quantityOfZeros / arraySize;
    
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
