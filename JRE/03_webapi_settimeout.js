// 03_webapi_settimeout.js
// CONCEPT: setTimeout is NOT run by the JS engine itself.
// It is handed off to the WebAPI (or Node's timer system), which
// runs the countdown OUTSIDE the call stack, then queues the callback.
// Run: node 03_webapi_settimeout.js

console.log('1: synchronous - runs first');

setTimeout(() => {
  console.log('3: this runs AFTER the stack is empty, even with 0ms delay');
}, 0);

console.log('2: synchronous - runs second');

// TRY THIS: change the delay to 2000. Notice "2" still prints before "3"
// no matter how small the delay is - because setTimeout callback
// ALWAYS waits for the current call stack to finish first.
