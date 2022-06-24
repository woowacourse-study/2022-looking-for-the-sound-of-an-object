interface CustomerCharge {
  value: number;
  returnedChangeValue: number;
}

interface Order {
  progress: "PENDING" | "MAKING" | "COMPLETE";
  orderedMenu: string | null;
}

export { CustomerCharge, Order };
