let items = [];
let idCounter = 1;

module.exports = {
  getAll: () => items,
  getById: (id) => items.find((item) => item.id === id),
  create: (data) => {
    const newItem = { id: idCounter++, ...data };
    items.push(newItem);
    return newItem;
  },
};
