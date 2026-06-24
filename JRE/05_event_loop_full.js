// 05_event_loop_full.js
// CONCEPT: Combines call stack, webAPI delegation, microtask queue,
// and task queue in one example. This is the "final exam" demo.
// Run: node 05_event_loop_full.js

console.log('A: synchronous start');

setTimeout(() => {
  console.log('F: setTimeout 1 (Task Queue)');
}, 0);

Promise.resolve().then(() => {
  console.log('D: Promise 1 (Microtask Queue)');
});

setTimeout(() => {
  console.log('G: setTimeout 2 (Task Queue)');
}, 0);

Promise.resolve().then(() => {
  console.log('E: Promise 2 (Microtask Queue)');
});

console.log('B: synchronous middle');

function syncFunction() {
  console.log('C: called synchronously from a function');
}
syncFunction();

// PREDICT THE FULL ORDER before running. Then check against this explanation:
//
// 1. All synchronous code runs first, top to bottom: A, B, C
// 2. Call stack is now empty -> Event Loop drains Microtask Queue FULLY: D, E
// 3. THEN Event Loop takes ONE task from Task Queue, runs it: F
// 4. Stack empty again -> check Microtasks (none left) -> take next Task: G
//
// FINAL ORDER: A, B, C, D, E, F, G
