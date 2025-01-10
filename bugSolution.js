function foo(a, b) {
  // Explicitly check for null or undefined and handle non-numeric inputs
  if (a === null || a === undefined || b === null || b === undefined || typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Or throw an error, depending on desired behavior
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null)); // 0
console.log(foo(1, 'a')); // 0
console.log(foo(undefined,2)); //0