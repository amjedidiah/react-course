# Key Developer Concepts

## Classes

- JS has classes as syntatic sugar
- Underneath the hood, it still uses functions and prototypes

## Promises && Async Await

- Saves us callback hell
- Separates the success and failure of an asynchronous operation
- For multiple async calls, it is best to use `async-await`, especially if one async call is dependent on another
- For error handling in `async-await` calls, use `try-catch`
