import CustomerCharge from './store/CustomerCharge.js';
import Order from './store/Order.js';

import BeverageIngredientsList from './BeverageIngredientsList.js';
import BeverageButtonSection from './BeverageButtonSection.js';
import GuideMessageContainer from './GuideMessageContainer.js';
import CustomerChargeForm from './CustomerChargeForm.js';
import ReturnChangeSection from './ReturnChangeSection.js';

const customerCharge = new CustomerCharge();
const order = new Order();

const customerChargeForm = new CustomerChargeForm({ customerCharge, order });
const guideMessageContainer = new GuideMessageContainer({ customerCharge, order });
const beverageButtonSection = new BeverageButtonSection({ customerCharge, order });
const beverageIngredientsList = new BeverageIngredientsList({ order });
const returnChangeSection = new ReturnChangeSection({ customerCharge });

customerCharge.addCustomerCharge(0);
order.updateOrderStateToPending();
