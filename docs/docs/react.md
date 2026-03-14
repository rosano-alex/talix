
# React Integration

ICTUS integrates with React using `useSignal`.

```tsx
import { useSignal } from "ICTUS/react"
import { signal } from "ICTUS"

const count = signal(0)

export function Counter(){

  const value = useSignal(count)

  return (
    <View>
      <Text>{value}</Text>

      <Button
        title="Add"
        onPress={() => count.set(value + 1)}
      />
    </View>
  )
}
```
