# TypeScript

## Interfaces & Types

| Interfaces       | Types              |
| ---------------- | ------------------ |
| Can be extended  | Cannot be extended |
| Cannot use union | Can use union      |

```ts
interface Person {
  name: string;
  age: number;
}

type Person = {
  name: string;
  age: number;
};
```

## Function Overloading

Multiple definitions of a function with the same name but different signatures.

```ts
export type Action<T> = {
  type: T;
};

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload ? { type, payload } : { type };
}
```

## Discriminating Unions

```ts
type Action =
  | { type: "ADD"; payload: number }
  | { type: "SUBTRACT"; payload: number }
  | { type: "RESET" };

function reducer(state: number, action: Action) {
  // const {type, payload} = action; This will throw an error because payload is not defined for RESET

  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "SUBTRACT":
      return state - action.payload;
    case "RESET":
      return 0;
    default:
      return state;
  }
}
```

## Type Guards / Predicate Functions / Narrowing

```ts
function isActionWithPayload(
  action: Action
): action is ActionWithPayload<string, any> {
  return action.hasOwnProperty("payload");
}

function reducer(state: number, action: Action) {
  if (isActionWithPayload(action)) {
    switch (action.type) {
      case "ADD":
        return state + action.payload;
      case "SUBTRACT":
        return state - action.payload;
      default:
        return state;
    }
  } else {
    switch (action.type) {
      case "RESET":
        return 0;
      default:
        return state;
    }
  }
}
```

## Intersection Types (All)

All properties of both types must be present.

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  salary: number;
};

type EmployeePerson = Person & Employee;

const employeePerson: EmployeePerson = {
  name: "John",
  age: 30,
  company: "Google",
  salary: 100000,
};
```

## Union Types (Either)

All properties of either type must be present.

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  salary: number;
};

type PersonOrEmployee = Person | Employee;

const person: PersonOrEmployee = {
  name: "John",
  age: 30,
};

const employee: PersonOrEmployee = {
  company: "Google",
  salary: 100000,
};
```

## Return Type

```ts
type Human = {
  name: string;
};

type MyFunc = () => Human;

type ReturnValue = ReturnType<MyFunc>;
```
