const Chance = require('chance');
const chance = new Chance();

const MESSAGE_EVENT = "msg_evt";

class MyMessenger {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.action();
    }

    action() {
        setTimeout(() => {
            this.eventEmitter.emit(MESSAGE_EVENT, chance.string({ length: 10 }));
            this.action()
        }, chance.integer({min: 1500, max: 4000}))
    }
}

module.exports = {
    MyMessenger,
    MESSAGE_EVENT
};