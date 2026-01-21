'use strict';

const iterate = (object, callback) => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      callback(key, object[key], object);
    }
  }
};

// Тестування
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});

// Output:
// { key: 'a', value: 1 }
// { key: 'b', value: 2 }
// { key: 'c', value: 3 }
