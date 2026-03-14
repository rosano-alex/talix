
# Devtools

ICTUS provides developer tooling scaffolds.

## Signal Graph Debugger

Visualizes dependencies.

Example graph:

Signal → Computed → Component

## Timeline Devtools

Tracks state updates.

```ts
timeline.record("signal update")
timeline.print()
```
