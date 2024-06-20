class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0; // 가장 끝에 +1
  }

  // 맨 뒤에 넣음
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  // 맨 앞에꺼 뺌
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  //다음꺼 골라
  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}
