// 04_microtask_vs_task.js
// CONCEPT: Microtasks (Promises) ALWAYS run before Tasks (setTimeout),
// even if the setTimeout was scheduled first.
// Run: node 04_microtask_vs_task.js

console.log('1: synchronous code');

setTimeout(() => {
  console.log('4: setTimeout callback (Task Queue)');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise callback (Microtask Queue)');
});

console.log('2: synchronous code');

// PREDICT the order BEFORE running. Correct order: 1, 2, 3, 4
//
// WHY:
// - "1" and "2" run immediately (main thread, call stack).
// - setTimeout's callback goes to the TASK QUEUE.
// - Promise's callback goes to the MICROTASK QUEUE.
// - Event Loop empties Call Stack -> drains ALL Microtasks -> THEN takes one Task.
