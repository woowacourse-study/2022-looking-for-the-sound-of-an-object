import { ORDER_PROGRESS } from './constants.js';

export default class Order {
  #state

  #subscribers;

  constructor() {
    this.#state = {
      progress: ORDER_PROGRESS.PENDING,
      orderedMenu: null
    }
    this.#subscribers = new Set();
  }
  
  get progress() { return this.#state.progress; }

  addSubscriber(subscriber) {
    this.#subscribers.add(subscriber);
  }

  notify() {
    this.#subscribers.forEach((subscriber) => subscriber({...this.#state}));
  }

  updateOrderStateToPending() {
    this.#state = {
      progress: ORDER_PROGRESS.PENDING,
      orderedMenu: null
    }
    this.notify();
  }

  updateOrderStateToMaking(orderedMenu) {
    this.#state = {
      progress: ORDER_PROGRESS.MAKING,
      orderedMenu
    }
    this.notify();
  }

  updateOrderStateToComplete() {
    this.#state = {
      ...this.#state,
      progress: ORDER_PROGRESS.COMPLETE,
    }
    this.notify();
  }
}
