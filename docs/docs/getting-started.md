
# Getting Started

## Creating a Signal

```ts
import { signal } from "ICTUS"

const count = signal(0)
```

## Reading the value

```ts
count.get()
```

## Updating the value

```ts
count.set(5)
```

Any dependent computations automatically update.
