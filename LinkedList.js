class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  search(value) {
    if (this.isEmpty()) return -1;
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return i;
      i++;
      curr = curr.next;
    }
    return -1;
  }
  removeValue(value) {
    if (this.isEmpty()) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      const removedNode = prev.next;
      prev = removedNode.next;
    }
  }
  remove(index) {
    if (index < 0 || index > this.size) return;
    let removedNode;
    if (index === 0) {
      removedNode = this.value;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 1; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) this.prepend(value);
    else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 1; i < index; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  print() {
    if (this.isEmpty()) console.log("List is Empty");
    else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
}
const list = new LinkedList();
console.log(list.isEmpty(), list.getSize());
list.prepend(10);
list.print();
list.prepend(20);
list.prepend(30);
list.print();
console.log(list.getSize());
list.insert(25, 2);
list.print();
list.remove(3);
list.removeValue(30);
list.print();


