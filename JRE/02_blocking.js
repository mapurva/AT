// 02_blocking.js
// CONCEPT: JS Engine is single-threaded — one long task BLOCKS everything else.
// Run: node 02_blocking.js

console.log('Step 1: before blocking work');

// Simulate a long-running synchronous task (NOT a real-world thing to do!)
function blockFor(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // do nothing, just burn time on the main thread
  }
}

console.log('Step 2: blocking for 2 seconds...');
blockFor(2000);
console.log('Step 3: after blocking work (notice nothing else could happen during step 2)');

// TRY THIS IN BROWSER: open this in browser console, then try clicking
// anything on the page WHILE it is blocking. Nothing responds — page is frozen.
