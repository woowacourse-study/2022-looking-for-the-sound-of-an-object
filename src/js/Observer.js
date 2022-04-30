class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach(observer => observer.show());
  }
}

const observer = new Observer();

export { observer };
