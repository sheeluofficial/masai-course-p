// const express = require("express")

// console.log(express())

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const timerEventEmitter = new MyEmitter();


let currentTime = 0;

// This will trigger the update event each passing second
setInterval(() => {
    currentTime++;
    timerEventEmitter.emit('update', currentTime);
}, 1000);



timerEventEmitter.on('update', (time) => {
    console.log('Message Received from publisher');
    console.log(`${time} seconds passed since the program started`);
});