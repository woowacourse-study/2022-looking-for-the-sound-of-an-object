import menus from './constant/menus.js';
import { ORDER_PROGRESS } from './constant/index.js';
import { $ } from './util/index.js';

export default class GuideMessageContainer {
  constructor({customerCharge, order}) {
    this.order = order;
    this.customerCharge = customerCharge;

    this.$guideMessageContainer = $('#guide-message-container');

    this.customerCharge.addSubscriber(this.updateOnCustomerChargeChange);
    this.order.addSubscriber(this.updateOnOrderChange);
  }

  updateOnCustomerChargeChange = () => {
    if (this.order.progress === ORDER_PROGRESS.PENDING) {
      this.updateOnOrderPending();
    }
  }

  updateOnOrderChange = ({progress, orderedMenu}) => {
    switch (progress) {
    case ORDER_PROGRESS.PENDING:
      this.updateOnOrderPending();
      break;
    case ORDER_PROGRESS.MAKING:
      this.updateOnOrderMaking(orderedMenu);
      break;
    case ORDER_PROGRESS.COMPLETE:
      this.updateOnOrderComplete(orderedMenu);
      break;
    default:
    }
  }

  updateOnOrderPending = () => {
    this.updateGuideText(
      this.customerCharge.value >= Math.min(...Object.keys(menus).map(menu => menus[menu].price)) 
        ? '원하는 음료를 선택하세요.'
        : '투입 금액이 부족하여 선택 가능한 음료가 없습니다.'
    )
  }

  updateOnOrderMaking = (menu) => {
    this.updateGuideText(`${menus[menu].name} 준비 중...`);
  }

  updateOnOrderComplete = (menu) => {
    this.updateGuideText(`${menus[menu].name} 나왔습니다. 😉`);
  }

  updateGuideText(guideMessage) {
    this.$guideMessageContainer.textContent = guideMessage;
  }

}
