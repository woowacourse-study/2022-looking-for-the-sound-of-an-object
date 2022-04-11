export const materialStore = {
  setMaterialStore(stuff) {
    localStorage.setItem('materialStore', JSON.stringify(stuff));
  },
  getMaterialStore() {
    if (localStorage.getItem('materialStore')) {
      return JSON.parse(localStorage.getItem('materialStore'));
    }
    return 0;
  },
  buyCoffee() {
    const existMaterial = this.getMaterialStore();
    const { coffeeBean, cup } = existMaterial;
    const newData = { coffeeBean: coffeeBean - 1, cup: cup - 1 };

    this.setMaterialStore(newData);
  },
};
