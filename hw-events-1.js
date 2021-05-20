const { MyMessenger, MESSAGE_EVENT } = require('./messenger-ee');

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on(MESSAGE_EVENT, (MESSAGE_EVENT) => {
    console.log(MESSAGE_EVENT)
});

new MyMessenger(myEmitter);

// myEmitter.emit(MESSAGE_EVENT);