
# Reactive Collections

## Reactive Array

```ts
import { reactiveArray } from "ICTUS"

const todos = reactiveArray()

todos.push("Buy milk")
todos.push("Walk dog")
```

## Reactive Map

```ts
import { reactiveMap } from "ICTUS"

const users = reactiveMap()

users.set("1", {name:"Alex"})
```

## Reactive Set

```ts
import { reactiveSet } from "ICTUS"

const selected = reactiveSet()

selected.add(1)
selected.add(2)
```
