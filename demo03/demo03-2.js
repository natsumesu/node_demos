'use strict'

const eventEmitter=require('events');

class myEventEmitter extends eventEmitter{}

const myEmitter = new myEventEmitter;

myEmitter.on('event1', () => {
	console.log('event1 !');
});

myEmitter.emit('event1');