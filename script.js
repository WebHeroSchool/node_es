const {performance} = require('perf_hooks');

function swap(array, i, j) {
    var tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function max_heapify(array, i, length) {
    while (true) {
        var left = i*2 + 1;
        var right = i*2 + 2;
        var largest = i;

        if (left < length && array[left] > array[largest]) {
            largest = left;
        }

        if (right < length && array[right] > array[largest]) {
            largest = right;
        }

        if (i == largest) {
            break;
        }

        swap(array, i, largest);
        i = largest;
    }
}

function heapify(array, length) {
    for (var i = Math.floor(length/2); i >= 0; i--) {
        max_heapify(array, i, length);
    }
}

function heapsort(array) {
    heapify(array, array.length);

    for (var i = array.length - 1; i > 0; i--) {
        swap(array, i, 0);

        max_heapify(array, 0, i-1);
    }
}


let arr = new Array(999999);
arr.fill(Math.random());

let time1 = performance.now();
heapsort(arr);
time1 = performance.now() - time1;

let time2 = performance.now();
arr.sort((a, b) => a - b);
time2 = performance.now() - time2;

console.log(time1);
console.log(time2);