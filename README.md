
# JavaScript Basics

JavaScript consists of three main parts:

1. **ECMAScript** – Provides the core functionality.
2. **DOM (Document Object Model)** – Interfaces for interacting with web page elements.
3. **BOM (Browser Object Model)** – APIs for interacting with the browser.

---

## 🔧 JavaScript Engine

- Parses, compiles, and executes JavaScript code.
- Common engines:
  - V8 (Chrome)
  - SpiderMonkey (Firefox)
  - JavaScriptCore (Safari)

**V8 Engine Internals:**
- **Ignition** – Turns JS into bytecode and starts running it.
- **TurboFan** – Optimizes frequently-used code for faster execution.

---

## 📜 History

- Created in **1995** by **Brendan Eich** at Netscape.
- Originally called **Mocha**.

---

## 📦 Variables

- Use `let` and `const` for block scope.
- Variables are `undefined` by default if not initialized.
- `const` cannot be reassigned.
- Identifiers are case-sensitive.
- JavaScript strings are **immutable**.

---

## 🔢 Type Conversion

- Convert to Boolean: `Boolean(value)`
- Create unique values: `Symbol()`

---

## 🧾 Objects

```javascript
console.log(contact.lastName);
console.log(contact['phone']); // '(408)-555-9999'
```

---

## 📚 Arrays

- **Create arrays:**
  ```javascript
  let scores = new Array();        // Empty array
  let scores = Array(10);          // Array with length 10
  let names = ['Alice', 'Bob'];    // Preferred
  ```

- **Access elements:**
  ```javascript
  console.log(mountains.length);
  ```

- **Common methods:**
  - Add: `.push()`, `.unshift()`
  - Remove: `.pop()`, `.shift()`
  - Find index: `.indexOf('North Sea')`
  - Check array: `Array.isArray(seas)`

---

## 🔁 Loops

```javascript
let mountains = ['Everest', 'K2'];
for (let i = 0; i < mountains.length; i++) {
  console.log(`${i + 1}. ${mountains[i]}`);
}

fruits.forEach(function(fruit, index) {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

for (let score of scores) {
  console.log(score);
}
```

---

## 🌈 ES6 Features

- **Rest parameters:**
  ```javascript
  function sum(...args) { }
  ```

- **Octal and Binary:**
  ```javascript
  let octal = 0o755;
  let binary = 0b1010;
  ```

- **Modules:**
  ```javascript
  export { display };
  ```

---

## 👤 Classes

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    newName = newName.trim();
    if (newName === '') {
      throw 'The name cannot be empty';
    }
    this._name = newName;
  }
}
```

---

## 🔄 Execution Context, Hoisting, and Scope

- JavaScript is **single-threaded** with an event loop and call stack.
- **Hoisting**: Variable and function declarations are moved to the top during the creation phase.
- `let` and `const` are hoisted but not initialized.
- Function expressions and arrow functions are **not** hoisted.

### 🧠 Variable Scope

- **Local scope**: Inside functions
- **Block scope**: Inside `{}` blocks using `let` or `const`

---

## 🔒 Closures

A **closure** gives a function access to its outer scope. Created at function creation time.

---

## 📦 Promises

```javascript
const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve('Done!');
  } else {
    reject('Error');
  }
});
```

- `resolve()` – Promise fulfilled
- `reject()` – Promise failed

---

## ⏳ Async/Await

```javascript
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

- `async` – Marks function as asynchronous
- `await` – Waits for promise resolution
- `try...catch` – Handles errors
