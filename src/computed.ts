import { activeObserver, setObserver } from "./context";
import { NodeFlags, type Node } from "./node";
import { LaneTypes } from "./lanetypes";

export class ComputedNode<T> implements Node {
  compute: () => T;
  value!: T;

  lane = LaneTypes.USER;
  flags = NodeFlags.DIRTY;

  constructor(fn: () => T) {
    this.compute = fn;
  }

  observers: Node[] = [];

  get(): T {
    // Only recompute when explicitly marked dirty via mark().
    // The epoch-based fallback was removed: it caused every computed to
    // recompute whenever *any* pulse changed (epoch increments globally),
    // bypassing the fine-grained DIRTY propagation from the dependency graph.
    if (this.flags & NodeFlags.DIRTY) {
      this.recompute();
    }

    // Track this computed as a dependency of the active observer
    const obs = activeObserver;
    if (obs && this.observers.indexOf(obs) === -1) {
      this.observers.push(obs);
    }

    return this.value;
  }

  mark() {
    if (!(this.flags & NodeFlags.DIRTY)) {
      this.flags |= NodeFlags.DIRTY;

      // Propagate dirty marks to downstream observers
      for (let i = 0; i < this.observers.length; i++) {
        const observer = this.observers[i];
        if (observer) {
          observer.mark();
        }
      }
    }
  }

  run() {
    this.recompute();
  }

  private recompute() {
    const prev = activeObserver;
    setObserver(this);

    try {
      const v = this.compute();
      this.value = v;
    } finally {
      setObserver(prev);
    }

    this.flags = NodeFlags.CLEAN;
  }
}
