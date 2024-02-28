import {
  User,
  Item,
  Episode,
  Order,
  Admin,
  Comment,
  Post,
} from "../database/model.js";

// function loginRequired(req, res) => {
//     if (!req.session.userId) {
//       res.status(401).json({ error: 'Must log in'})
//     } else {
//       next()
//     }
//   }

const handlerFunctions = {
  getAllItems: async (req, res) => {
    const allItems = await Item.findAll();
    res.send(allItems);
  },

  getAllEpisodes: async (req, res) => {
    const allEpisodes = await Episode.findAll();
    res.send(allEpisodes);
  },

  getAllBlogPosts: async (req, res) => {
    const allBlogPosts = await Post.findAll();
    res.send(allBlogPosts);
  },

  //User
  sessionCheck: async (req, res) => {
    if (req.session.userId) {
      res.send({
        message: "User is still logged in",
        success: true,
        userId: req.session.userId,
      });
      return;
    } else {
      res.send({
        message: "No user found",
        success: false,
      });
    }
  },

  logIn: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username: username } });

    if (user && user.password === password) {
      req.session.userId = user.userId; //This saves their info
      res.json({ success: true, userId: req.session.userId });
    } else {
      res.json({ success: false, message: "Invalid User Information" }); // this is the 'response' object, which is received by axios on the front end
    }
  },

  logOut: async (req, res) => {
    req.session.destroy();

    res.send({
      message: "User logged out",
      success: true,
    });
  },

  createUser: async (req, res) => {
    const { username, email, password } = req.body;

    if (await User.findOne({ where: { username } })) {
      res.status(400).send({
        message: "Username already in use",
        userId: null,
      });
      return;
    }
    const user = await User.create({
      username: username.toLowerCase(),
      password,
      email,
    });

    // if (req.session.adminId) {
    //   res.status(200).send({
    //     message: "New user created successfully",
    //   });
    //   return;
    // }

    req.session.userId = user.userId;

    res.status(200).send({
      message: "User created and logged in",
      userId: user.userId,
      user: user,
    });
  },

  addToCart: {
    // const user = await User.findOne({
    //   where: {
    //     username,
    //   },
    //   include: {
    //     model: Order,
    //     include: {
    //       model: Item,
    //     },
    //   },
    // });
  },

  buyItem: {},

  //Admin
  addItem: (req, res) => {
    const itemName = req.body.itemName;
    const itemPic = req.body.picture;
    const itemPrice = req.body.price;

    const newItem = {
      itemName: itemName,
      picture: itemPic,
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

  addEpisode: (req, res) => {
    const epName = req.body.episodeName;
    const epDescription = req.body.episodeDescription;

    const newEpisode = {
      episodeName: epName,
      episodeDescription: epDescription,
    };

    Episode.push(newEpisode);
    res.send({
      message: "Here's a new podcast episode!",
      allEpisodes: Episode,
    });
  },

  addBlogPost: {},
};

export default handlerFunctions;
