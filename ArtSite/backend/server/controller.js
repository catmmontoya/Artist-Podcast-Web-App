import { User, Item, Episode, Order, Admin } from "../database/model.js";

// function loginRequired(req, res) => {
//     if (!req.session.userId) {
//       res.status(401).json({ error: 'Must log in'})
//     } else {
//       next()
//     }
//   }

const handlerFunctions = {
  getAllItems: async (req, res) => {
    // console.log("HIT");
    const allItems = await Item.findAll();
    // console.log(allItems);
    res.send(allItems);
  },

  //User
  logIn: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username: username } });

    if (user && user.password === password) {
      req.session.userId = user.userId;
      res.json({ success: true });
    } else {
      res.json({ success: false, message: "Invalid User Information" }); // this is the 'response' object, which is received by axios on the front end
    }
  },

  buyItem: {},

  //Admin
  addItem: (req, res) => {
    const itemName = req.body.itemName;
    const itemPic = req.body.itemPic;
    const itemPrice = req.body.price;

    const newItem = {
      name: itemName,
      pic: itemPic,
      price: itemPrice,
    };

    Item.push(newItem);
    res.send({
      message: "Here's your new item",
      allItems: Item,
    });
  },

  deleteItem: (req, res) => {
    const itemId = req.body.itemId;

    for (let i = 0; i < Item.length; i++) {
      if (Item[i].id === +itemId) {
        Item.splice(i, 1);
        break;
      }
    }
    res.send({ message: "Item deleted", allItems: Item });
  },

  addBlogPost: {},

  addEpisode: {},
};

export default handlerFunctions;
