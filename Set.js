class MySet {
  constructor() {
    this.collection = [];
  }
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }
  values() {
    return this.collection;
  }
  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }
  size() {
    return this.collection.length;
  }
  union(otherSet) {
    const unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((element) => {
      unionSet.add(element);
    });
    secondSet.forEach((element) => {
      unionSet.add(element);
    });
    return unionSet;
  }
  interSection(otherSet) {
    const interSectionSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach((element) => {
      if (otherSet.has(element)) {
        interSectionSet.add(element);
      }
    });
    return interSectionSet;
  }
  difference(otherSet) {
    const differenceSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach((element) => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });
    return differenceSet;
  }
  subset(otherSet) {
    const firstSet = this.values();
   return firstSet.every((element) => otherSet.has(element));
  }
}

const setA = new MySet();
const setB = new MySet();
setA.add("a");
setA.add("b");
setB.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
console.log(setA.union(setB));
console.log(setA.difference(setB));
console.log(setA.interSection(setB));
console.log(setA.subset(setB));
