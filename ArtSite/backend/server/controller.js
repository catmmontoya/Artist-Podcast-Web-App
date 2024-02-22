import { User, Item, Episode } from "../database/model.js";

// function loginRequired(req, res) => {
//     if (!req.session.userId) {
//       res.status(401).json({ error: 'Must log in'})
//     } else {
//       next()
//     }
//   }

const handlerFunctions = {
  getAllItems: async (req, res) => {
    console.log("HIT");
    const allItems = await Item.findAll();
    console.log(allItems);
    res.send(allItems);
  },

  logIn: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username: username } });

    if (user && user.password === password) {
      req.session.userId = user.userId;
      res.json({ success: true });
    } else {
      res.json({ success: false }); // this is the 'response' object, which is received by axios on the front end
    }
  },

  addItem: {},

  deleteItem: {},
};

export default handlerFunctions;
