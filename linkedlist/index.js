// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let curr = this.head;
    let counter = 0;
    while (curr) {
      counter++;
      curr = curr.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let curr = this.head ? this.head : null;
    while (curr) {
      if (!curr.next) {
        break;
      }
      curr = curr.next;
    }
    return curr;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next ? this.head.next : null;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let curr = this.head.next;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    let curr = this.head;
    while (curr) {
      if (!curr.next) {
        break;
      }
      curr = curr.next;
    }
    let new_node = new Node(data);
    curr.next = new_node;
  }

  getAt(i) {
    if (!this.head) {
      return null;
    }
    let curr = this.head;
    let counter = 0;
    while (curr) {
      if (counter === i) {
        return curr;
      }
      counter++;
      curr = curr.next;
    }
    return curr;
  }

  removeAt(i) {
    if (!this.head) {
      return;
    }
    if (i === 0) {
      this.head = this.head.next;
      return;
    }
    let prev = this.getAt(i - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(data, i) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (i === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let prev = this.getAt(i - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
    return;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
