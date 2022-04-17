import Order from './Order.js';

import BeverageMaker from './BeverageMaker.js';
import OrderTaker from './OrderTaker.js';
import CustomerCharge from './CustomerCharge.js';
import Guide from './Guide.js';
import CustomerChargeForm from './CustomerChargeForm.js';

const customerCharge = new CustomerCharge();
const order = new Order();

const customerChargeForm = new CustomerChargeForm({customerCharge, order})
const guide = new Guide({customerCharge, order});
const orderTaker = new OrderTaker({customerCharge, order});
const beverageMaker = new BeverageMaker({order});

order.updateOrderStateToPending();
