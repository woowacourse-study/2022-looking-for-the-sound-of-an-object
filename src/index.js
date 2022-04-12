import Order from './Order.js';

import BeverageMaker from './BeverageMaker.js';
import OrderTaker from './OrderTaker.js';

const order = new Order();

const orderTaker = new OrderTaker(order);
const beverageMaker = new BeverageMaker(order);
