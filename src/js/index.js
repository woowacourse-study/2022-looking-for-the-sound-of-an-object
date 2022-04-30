import Charge from './components/Charge/Charge.js';
import Order from './components/Order/Order.js';
import { observer } from './Observer.js';

function app() {
  const charge = new Charge();
  const order = new Order();

  observer.subscribe(charge);
  observer.subscribe(order);
  observer.notify();
}

app();
