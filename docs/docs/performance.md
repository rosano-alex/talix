
# Performance

ICTUS includes several optimizations:

• Lazy computed evaluation  
• Batched scheduler  
• Minimal dependency propagation  

Example:

```ts
const count = signal(0)

const doubled = computed(() => count.get() * 2)

count.set(1)
count.set(2)
count.set(3)
```

Only the final value recomputes when accessed.
