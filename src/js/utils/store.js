const store = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    let items;

    try {
      items = JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error(e);
    }

    return items;
  },
};

export { store };
