
# Computed Values

Computed values derive state from signals.

```ts
import { signal, computed } from "ICTUS"

const price = signal(10)
const quantity = signal(2)

const total = computed(() => price.get() * quantity.get())
```

Update:

```ts
price.set(20)

console.log(total.get()) // 40
```
