# TypeScript - Cheat Sheet de Types

## 1. Tipos básicos

```ts
let nombre: string = "Manu";
let edad: number = 27;
let activo: boolean = true;
let vacio: null = null;
let indefinido: undefined = undefined;
```

Los tipos básicos más usados son:

- `string`: texto
- `number`: números
- `boolean`: verdadero o falso
- `null`: valor vacío intencional
- `undefined`: valor no definido

---

## 2. Inferencia de tipos

TypeScript muchas veces entiende el tipo automáticamente.

```ts
let nombre = "Manu"; // TypeScript infiere string
let edad = 27;       // TypeScript infiere number
```

No siempre hace falta escribir el tipo si es obvio.

```ts
let ciudad = "Montevideo";
```

Esto ya alcanza. No es necesario hacer:

```ts
let ciudad: string = "Montevideo";
```

---

## 3. Arrays

```ts
const numeros: number[] = [1, 2, 3];
const nombres: string[] = ["Ana", "Luis", "Manu"];
```

Otra forma válida:

```ts
const puntajes: Array<number> = [10, 20, 30];
```

La forma más común suele ser:

```ts
number[]
string[]
User[]
```

---

## 4. Objetos

```ts
const usuario: { nombre: string; edad: number } = {
  nombre: "Manu",
  edad: 27,
};
```

Esto funciona, pero si el objeto crece conviene usar `type`.

---

## 5. Type alias

Un `type` sirve para darle nombre a una forma de datos.

```ts
type Usuario = {
  nombre: string;
  edad: number;
  activo: boolean;
};

const usuario: Usuario = {
  nombre: "Manu",
  edad: 27,
  activo: true,
};
```

Se lee así:

> Un `Usuario` es un objeto que tiene `nombre`, `edad` y `activo`.

---

## 6. Propiedades opcionales

El signo `?` indica que una propiedad puede estar o no estar.

```ts
type Producto = {
  nombre: string;
  precio: number;
  descripcion?: string;
};

const producto1: Producto = {
  nombre: "Teclado",
  precio: 100,
};

const producto2: Producto = {
  nombre: "Mouse",
  precio: 50,
  descripcion: "Mouse inalámbrico",
};
```

`descripcion` es opcional.

---

## 7. Union types

Sirven para permitir más de un tipo posible.

```ts
let id: string | number;

id = "abc123";
id = 123;
```

También se usan mucho con valores fijos:

```ts
type Estado = "pendiente" | "aprobado" | "rechazado";

let estado: Estado = "pendiente";
```

Esto evita valores inválidos.

```ts
estado = "aprobado";  // OK
estado = "cancelado"; // Error
```

---

## 8. Literal types

Un literal type limita el valor exacto que puede tener una variable.

```ts
type Rol = "admin" | "user" | "guest";

const rol: Rol = "admin";
```

Muy útil para estados, roles, acciones, tipos de botones, etc.

---

## 9. Funciones

Se pueden tipar los parámetros y el valor de retorno.

```ts
function sumar(a: number, b: number): number {
  return a + b;
}
```

Si una función no devuelve nada, se usa `void`.

```ts
function saludar(nombre: string): void {
  console.log("Hola " + nombre);
}
```

Con arrow functions:

```ts
const multiplicar = (a: number, b: number): number => {
  return a * b;
};
```

---

## 10. Arrays de objetos

```ts
type Post = {
  titulo: string;
  likes: number;
};

const posts: Post[] = [
  { titulo: "Primer post", likes: 10 },
  { titulo: "Segundo post", likes: 20 },
];
```

Esto significa que `posts` es un array donde cada elemento tiene forma de `Post`.

---

## 11. Type dentro de otro type

```ts
type Direccion = {
  ciudad: string;
  pais: string;
};

type Persona = {
  nombre: string;
  direccion: Direccion;
};

const persona: Persona = {
  nombre: "Manu",
  direccion: {
    ciudad: "Montevideo",
    pais: "Uruguay",
  },
};
```

Esto ayuda a separar responsabilidades y ordenar mejor los datos.

---

## 12. Intersection types

Sirven para combinar tipos.

```ts
type Usuario = {
  nombre: string;
  edad: number;
};

type Empleado = {
  empresa: string;
};

type Desarrollador = Usuario & Empleado;

const dev: Desarrollador = {
  nombre: "Manu",
  edad: 27,
  empresa: "Quanam",
};
```

`Desarrollador` tiene todo lo de `Usuario` y todo lo de `Empleado`.

---

## 13. Any

`any` desactiva las ventajas principales de TypeScript.

```ts
let valor: any = "hola";

valor = 123;
valor = true;
```

Conviene evitarlo salvo casos puntuales, porque TypeScript deja de ayudarte.

---

## 14. Unknown

`unknown` es más seguro que `any`.

```ts
let dato: unknown = "hola";

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
}
```

Con `unknown`, antes de usar el valor tenés que comprobar qué tipo es.

---

## 15. Type narrowing

TypeScript puede reducir el tipo usando condiciones.

```ts
function imprimirId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```

Dentro del `if`, TypeScript sabe que `id` es `string`.

Dentro del `else`, sabe que `id` es `number`.

---

## 16. Diferencia rápida entre `type` e `interface`

Ambos sirven para describir objetos.

```ts
type Usuario = {
  nombre: string;
  edad: number;
};
```

```ts
interface Usuario {
  nombre: string;
  edad: number;
}
```

Para empezar, podés usar `type` sin problema.

Regla práctica:

- Usá `type` para aliases, unions, literals y combinaciones.
- Usá `interface` cuando estés modelando objetos o clases en proyectos más grandes.

---

## 17. Ejemplo práctico completo

```ts
type EstadoUsuario = "activo" | "inactivo" | "bloqueado";

type Usuario = {
  id: string | number;
  nombre: string;
  edad: number;
  email?: string;
  estado: EstadoUsuario;
};

const usuarios: Usuario[] = [
  {
    id: 1,
    nombre: "Manu",
    edad: 27,
    estado: "activo",
  },
  {
    id: "abc-123",
    nombre: "Ana",
    edad: 30,
    email: "ana@mail.com",
    estado: "inactivo",
  },
];

function mostrarUsuario(usuario: Usuario): void {
  console.log(`${usuario.nombre} - ${usuario.estado}`);
}

usuarios.forEach(mostrarUsuario);
```

---

## Regla mental rápida

Cuando escribís esto:

```ts
type Usuario = {
  nombre: string;
  edad: number;
};
```

Pensalo así:

> Estoy creando una forma esperada para mis datos.

TypeScript no cambia cómo corre JavaScript. Te ayuda antes, marcando errores mientras programás.

---

## Orden recomendado para aprender

1. Tipos básicos
2. Arrays
3. Objetos
4. Type alias
5. Propiedades opcionales
6. Union types
7. Funciones tipadas
8. Arrays de objetos
9. Unknown vs any
10. Type narrowing
