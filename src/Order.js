export default class Order {
  #state

  #subscribers;

  constructor() {
    this.#state = {
      progress: 'pending',
      orderedMenu: null
    }
    this.#subscribers = new Set();
  }

  get state() { return this.#state; }

  addSubscriber(subscriber) {
    this.#subscribers.add(subscriber);
  }

  notify() {
    this.#subscribers.forEach((subscriber) => subscriber({...this.#state}));
  }

  updateOrderStateToPending() {
    this.#state = {
      progress: 'pending',
      orderedMenu: null
    }
    this.notify();
  }

  updateOrderStateToMaking(orderedMenu) {
    this.#state = {
      progress: 'making',
      orderedMenu
    }
    this.notify();
  }

  updateOrderStateToComplete() {
    this.#state = {
      ...this.#state,
      progress: 'complete',
    }
    this.notify();
  }
}
