function createNode(value = null, next = null) {
  return { value, next };
}

function createLinkedList() {
  let head = null;

  function append(value) {
    const node = createNode(value);
    if (!head) {
      head = node;
      return;
    }
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  function prepend(value) {
    const node = createNode(value, head);
    head = node;
  }

  function toString() {
    let result = "";
    let current = head;
    while (current) {
      result += `${current.value} -> `;
      current = current.next;
    }
    return result + "null";
  }

  function size() {
    let count = 0;
    let current = head;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  function tail() {
    if (!head) return null;
    let current = head;
    while (current.next) {
      current = current.next;
    }
    return current.value;
  }

  function getHead() {
    return head ? head.value : null;
  }

  function pop() {
    if (!head) return null;
    if (!head.next) {
      const poppedValue = head.value;
      head = null;
      return poppedValue;
    }
    let current = head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    const poppedValue = current.next.value;
    current.next = null;
    return poppedValue;
  }

  function at(index) {
    let current = head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current;
      }
      current = current.next;
      count++;
    }
    return null;
  }

  function find(value) {
    let current = head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return { index, node: current };
      }
      current = current.next;
      index++;
    }
    return null;
  }

  function contains(value) {
    return !!find(value);
  }

  function insertAt(value, index) {
    if (index === 0) {
      prepend(value);
      return;
    }
    let current = head;
    let count = 0;
    while (current && count < index - 1) {
      current = current.next;
      count++;
    }
    if (!current) {
      throw new Error("Index out of bounds");
    }
    current.next = createNode(value, current.next);
  }

  function removeAt(index) {
    if (index === 0) {
      if (!head) return null;
      head = head.next;
      return;
    }
    let current = head;
    let count = 0;
    while (current && count < index - 1) {
      current = current.next;
      count++;
    }
    if (!current || !current.next) {
      throw new Error("Index out of bounds");
    }
    current.next = current.next.next;
  }

  return {
    get head() {
      return head;
    },
    append,
    prepend,
    toString,
    size,
    tail,
    getHead,
    pop,
    at,
    contains,
    insertAt,
    removeAt,
  };
}

// Examples and tests

const list = createLinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log(list.head);
console.log(list.getHead());
console.log(list.toString());
console.log(list.size());
console.log(list.contains(20));
console.log(list.contains(40));
console.log(list.tail());
console.log(list.pop());
console.log(list.at(1));
console.log(list.insertAt(77, 0));
console.log(list.toString());
console.log(list.removeAt(1));
console.log(list.toString());
