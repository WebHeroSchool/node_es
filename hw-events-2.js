const EventEmitter = require('events');

const myEmitter = new EventEmitter();

let isBlock = false;
let isOpen = false;


myEmitter.on('open', () => {
    console.log("Открыть дверь")
    if (isBlock) {
        console.error("Дверь заблокирована. Невозможно открыть")
        return
    }
    if (isOpen) {
        console.log("Дверь уже открыта");
    } else {
        console.log("Дверь открыта")
        isOpen = !isOpen;
    }
});

myEmitter.on('close', () => {
    console.log("Закрыть дверь")
    if (isOpen) {
        console.log("Дверь закрыта");
        isOpen = !isOpen;
    } else {
        console.log("Дверь уже закрыта")
    }
});

myEmitter.on('block', () => {
    console.log("Заблокировать дверь")
    if (isOpen) {
        console.error("Дверь открыта. Невозможно заблокировать")
        return
    }
    if (isBlock) {
        console.log("Дверь уже заблокирована");
    } else {
        isBlock = !isBlock;
        console.log("Дверь заблокирована");
    }
});

myEmitter.emit('open');
myEmitter.emit('close');
myEmitter.emit('block');


