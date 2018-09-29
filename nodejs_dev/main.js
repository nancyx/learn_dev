// include events module
var events = require("events");
// create an object of eventEmitter
var eventEmitter = new events.EventEmitter();

// create a program of event handler
var connectHandler = function connected(){
  console.log("Connection succeeds!");

  // trigger data_receieved event
  eventEmitter.emit('data_receieved');
}

// bind connection to connect_handler
eventEmitter.on('connection', connectHandler);

//bind data_receieved to an anonymous function
eventEmitter.on('data_receieved', function(){
  console.log('Receiving data successfully.');
});

// trigger connection event
eventEmitter.emit('connection');

console.log('The program ends.');
