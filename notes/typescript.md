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
