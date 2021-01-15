const each = require('async-each-series');


const delays = [300, 400, 500, 600, 200, 1000, 300, 760];
each(delays, function (delay, next) {
    setTimeout(function () {
        console.log("delay was " + delay);
        next();
    }, delay);
}, function (err) {
    console.log('done');
});

