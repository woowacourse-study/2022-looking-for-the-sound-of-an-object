interface CustomerCharge {
  value: number;
  returnedChangeValue: number;
}

interface Order {
  progress: string;
  orderedMenu: string | null;
}

export { CustomerCharge, Order };
