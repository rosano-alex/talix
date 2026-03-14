
# Async Signals

Async signals help manage asynchronous state.

```ts
import { asyncSignal } from "ICTUS"

const user = asyncSignal(async () => {
  const res = await fetch("/api/user")
  return res.json()
})
```

State shape:

```
{
  loading: boolean
  value: T | null
  error: unknown
}
```
