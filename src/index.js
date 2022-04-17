import CustomerCharge from './store/CustomerCharge.js';
import Order from './store/Order.js';

import BeverageMaker from './BeverageMaker.js';
import OrderTaker from './OrderTaker.js';
import GuideMessageContainer from './GuideMessageContainer.js';
import CustomerChargeForm from './CustomerChargeForm.js';
import ReturnChangeSection from './ReturnChangeSection.js';

const customerCharge = new CustomerCharge();
const order = new Order();

const customerChargeForm = new CustomerChargeForm({customerCharge, order})
const guide = new GuideMessageContainer({customerCharge, order});
const orderTaker = new OrderTaker({customerCharge, order});
const beverageMaker = new BeverageMaker({customerCharge, order});
const returnChangeSection = new ReturnChangeSection({customerCharge, order});

customerCharge.addCustomerCharge(0)
order.updateOrderStateToPending();
