export default class CustomerCharge {
  #state;

  #subscribers;

  constructor() {
    this.#state = {
      value: 0,
      returnedChangeValue : 0,
    }
    this.#subscribers = new Set();
  }

  get value() { return this.#state.value; }


  addSubscriber(subscriber) {
    this.#subscribers.add(subscriber);
  }

  notify() {
    this.#subscribers.forEach((subscriber) => subscriber({...this.#state}));
  }

  addCustomerCharge(chargeToAdd) {
    this.#state.value += chargeToAdd;
    this.notify();
  }

  subtractCustomerCharge(chargeToSubtract) {
    this.#state.value -= chargeToSubtract;
    this.notify();
  }

  returnLeftCustomerCharge() {
    this.#state.returnedChangeValue = this.#state.value;
    this.#state.value = 0;
    this.notify();
  }
}
