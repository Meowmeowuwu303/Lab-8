'use strict';

const store = (value) => {
  return () => value;
};

// Тестування
const read = store(5);
const value = read();
console.log(value); // Output: 5
