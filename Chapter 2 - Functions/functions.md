# Explicit vs Inferred Types en TypeScript

En TypeScript, un tipo puede ser **explícito** o **inferido**.

Un tipo explícito (*explicit type annotation*) es cuando escribís el tipo manualmente.

```ts
const age: number = 27;
```

En funciones, también podés escribir explícitamente el tipo de retorno:

```ts
const calculateTotal = (
  price: number,
  quantity: number,
  discount: number
): number => {
  return price * quantity * (1 - discount);
};
```

Acá el `: number` indica que la función devuelve un `number`.

Un tipo inferido (*inferred type* / *type inference*) es cuando TypeScript deduce el tipo automáticamente.

```ts
const age = 27;
```

TypeScript entiende solo que `age` es un `number`.

También puede inferir el retorno de una función:

```ts
const calculateTotal = (
  price: number,
  quantity: number,
  discount: number
) => {
  return price * quantity * (1 - discount);
};
```

Acá TypeScript deduce que la función devuelve un `number`.

## Regla práctica

Usá **type inference** cuando el tipo es obvio.

Usá **explicit type annotation** cuando la función es importante, exportada, compleja o cuando querés forzar un tipo de retorno específico.