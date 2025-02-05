class Queue {
  constructor() {
    this.collection = [];
  }
  enqueue(element) {
    this.collection.push(element);
  }
  dequeue() {
    return this.collection.shift();
  }
  front() {
    return this.collection[0];
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.collection.length === 0;
  }
}
const q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.dequeue("a");
console.log(q.size());
q.front();
q.size();
q.isEmpty();

class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  isEmpty() {
    return this.collection.length === 0;
  }
  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) this.collection.push(element);
    }
  }
  dequeue() {
    const value = this.collection.shift();
    return value[0];
  }
  front() {
    return this.collection[0];
  }
  size() {
    return this.collection.length;
  }
  printCollection() {
    return this.collection;
  }
}
const pq = new PriorityQueue();
pq.enqueue(["a", 1]);
pq.enqueue(["b", 2]);
pq.enqueue(["c", 3]);
pq.enqueue(["b", 2]);
pq.dequeue();
console.log(q.size());
pq.front();
pq.size();
pq.isEmpty();
console.log(pq.printCollection());
