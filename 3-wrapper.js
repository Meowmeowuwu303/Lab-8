'use strict';

const contract = (fn, ...types) => {
  const returnType = types[types.length - 1];
  const argTypes = types.slice(0, -1);
  
  return (...args) => {
    for (let i = 0; i < argTypes.length; i++) {
      const expectedType = argTypes[i].name.toLowerCase();
      const actualType = typeof args[i];
      if (actualType !== expectedType) {
        throw new TypeError(`Argument ${i + 1} must be ${expectedType}, but got ${actualType}`);
      }
    }
    
    const result = fn(...args);
    
    const expectedReturnType = returnType.name.toLowerCase();
    const actualReturnType = typeof result;
    if (actualReturnType !== expectedReturnType) {
      throw new TypeError(`Return type must be ${expectedReturnType}, but got ${actualReturnType}`);
    }
    
    return result;
  };
};

// Тестування 1: додавання чисел
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // Output: 5

// Тестування 2: конкатенація рядків
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // Output: Hello world!

// Тестування 3: помилка типу
try {
  const res3 = addNumbers(2, '3'); // TypeError
} catch (error) {
  console.error('Error:', error.message);
}
