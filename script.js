let arrayForEach = ['a', 'b', 'c'];

function showItemForEach(element, i, array) {
    console.log(`${element}:${i} - ${array}`);
}

function newForEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        let currentItem = array[i];
        let index = i;
        callback(currentItem, index, array);
    }
}

console.log(newForEach(arrayForEach, showItemForEach));

/** Fill Function */
let arrayFill = [1, 2, 3, 5, 7, 8, 9];

function newFill(array, value, start = 0, end = array.length) {
    for(let i = start; i < end; i++) {
        array[i] = value;
    }
    return array;
}

console.log(newFill(arrayFill, 4, 1, 5));

/** Map Function */

function mapCallback(index, i, array) {
    return `${array[i]} é muito bom`;
}

function newMap(array, callback) {
    let mapOutput = [];
    
    for(let i = 0; i < array.length; i++) {
        mapOutput[i] = callback(array[i], i, array);
    }
    return mapOutput;
}
console.log(newMap(['maça', 'uva', 'morango'], mapCallback));

/** Some Function */

function newSomeCallback(index, i, array) {
    if(index > 10) {
        return true;
    }
}

function newSome(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
console.log(newSome([1, 2, 12], newSomeCallback));

/** Find Function */
const findArray = [2, 5, 12];
function findBiggerThenTen(element, currentValue) {
    if(currentValue >= element) {
        return true;
    }
}

function newFind(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(10, array[i])) {
            return array[i];
        }
    }
    return false;
}
console.log(newFind(findArray, findBiggerThenTen));

/** FindIndex Function */
const findIndexArray = [2, 5, 12];
function findBiggerThenTen(element, currentValue) {
    if(currentValue >= element) {
        return true;
    }
}

function newFindIndex(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(10, array[i])) {
            return i;
        }
    }
    return -1;
}
console.log(newFindIndex(findIndexArray, findBiggerThenTen));

/** Every Function */

const everyArray = [20, 55, 12];
function isEveryBiggerThenTen(element, currentValue) {
    if(element >= currentValue) {
        return false;
    }
}

function newEvery(array, callback) {
    let output = true;
    for(let i = 0; i < array.length; i++) {
        if(callback(10, array[i]) === false) {
            output = false;
        }
    }
    return output;
}

console.log(newEvery(everyArray, isEveryBiggerThenTen));

/** Filter Function */
const filterArray = [12, 5, 8, 130, 44];
function isBigEnough(numToComp, item, i, array) {
    if(item > numToComp) {
        return true;
    }
}

function newFilter(array, callback) {
    let output = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(10, array[i], i, array)) {
            output.push(array[i]);
        }
    }
    return output;
}
console.log(newFilter(filterArray, isBigEnough));

/** Concat Function */

function newConcat(arr1, arr2) {
    let output = [];
    output = [...arr1, ...arr2];
    return output;
}
console.log(newConcat([1,2,3], [4,5,6]));

/** Includes Function */

function newIncludes(array, element, fromIndex = 0) {
    for(let i = fromIndex; i < array.length; i++) {
        if(element === array[i]) {
            return true;
        }
    }
    return false;
}
console.log(newIncludes([1,2,3], 2));

/** IndexOf Function */

function newIndexOf(array, searchElem, fromIndex = 0) {
    for(let i = fromIndex; i < array.length; i++) {
        if(searchElem === array[i]) {
            return i;
        }
    }
    return -1;
}
console.log(newIndexOf([2,5,9], 2));

/** Join Function */

function newJoin(arr, elem) {
    let output = '';
    if(elem === undefined) {
        for(let i = 0; i < arr.length; i++) {
            if(i === arr.length-1) {
                output += `${arr[i]}`
            } else {
                output += `${arr[i]},`
            }
        }
    } else {
        for(let i = 0; i < arr.length; i++) {
            if(i === arr.length-1) {
                output += `${arr[i]}`
            } else {
                output += `${arr[i]}${elem}`
            }
        }
    }
    return output;
}
console.log(newJoin(['Fire', 'Air', 'Water'], '*'))

/** Reduce Function */

function reduceCallback(acc, currValue, index, array) {
    return acc + currValue;
}

function newReduce(arr, callback) {
    let output = 0;
    for(let i = 0; i < arr.length; i++) {
        output += callback(0, arr[i], i, arr);
    }
    return output;
}
console.log(newReduce([0,1,2,3,4], reduceCallback));