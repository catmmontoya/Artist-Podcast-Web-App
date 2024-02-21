const handlerFunctions = {
  getAllItems: async (req, res) => {
    const allItems = await Item.findAll();
    res.json(allItems);
  },

  addItem: {},

  deleteItem: {},
};

export default handlerFunctions;
