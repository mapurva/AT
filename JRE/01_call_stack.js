// 01_call_stack.js
// CONCEPT: Call Stack is LIFO (Last In, First Out)
// Run: node 01_call_stack.js
// Or paste into browser console (F12)

let firstName = 'John';

function first() {
  console.log('Inside first() - START');
  let a = 'hello';
  second();
  let x = a + ' ' + firstName;
  console.log('Inside first() - END');
}

function second() {
  console.log('Inside second() - START');
  let b = 'Hi';
  third();
  let y = b + ' ' + firstName;
  console.log('Inside second() - END');
}

function third() {
  console.log('Inside third() - START');
  let c = 'Hey';
  let z = c + ' ' + firstName;
  console.log('Inside third() - END');
}

console.log('Program START');
first();
console.log('Program END');

// TRY THIS: predict the console.log order BEFORE running.
// Notice: functions that START last, FINISH first (stack = LIFO).
