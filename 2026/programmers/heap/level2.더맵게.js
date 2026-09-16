function createMinHeap() {
  const heap = [];

  function push(val) {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (heap[parent] <= heap[i]) break;
      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      i = parent;
    }
  }

  function pop() {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let left = i * 2 + 1,
          right = i * 2 + 2,
          smallest = i;
        if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
        if (right < heap.length && heap[right] < heap[smallest])
          smallest = right;
        if (smallest === i) break;
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
      }
    }
    return top;
  }

  return {
    push,
    pop,
    size: () => heap.length,
    peek: () => heap[0],
  };
}

function solution(scoville, K) {
  const heap = createMinHeap();
  scoville.forEach((s) => heap.push(s));
  let count = 0;

  while (heap.peek() < K) {
    if (heap.size() < 2) return -1;
    const newValue = heap.pop() + heap.pop() * 2;
    heap.push(newValue);
    count++;
  }

  return count;
}
