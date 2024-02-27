import {
  User,
  Item,
  Episode,
  Order,
  Admin,
  Comment,
  Post,
  db,
} from "./model.js";

await db.sync({
  force: true,
});

let items = [
  {
    picture: "images/tapestry1.jpg",
    itemName: "Funfetti Tapestry",
    price: 60.0,
  },
  {
    picture: "/images/tapestry2.jpg",
    itemName: "Pastels Tapestry",
    price: 50.0,
  },
  {
    picture: "/images/tapestry3.jpg",
    itemName: "Pink Woman Tapestry",
    price: 100.0,
  },
  {
    picture: "/images/tapestry4.jpg",
    itemName: "Arches Tapestry",
    price: 100.0,
  },
  {
    picture: "/images/tapestry5.jpg",
    itemName: "Sands Tapestry",
    price: 100.0,
  },
  {
    picture: "/images/tapestry6.jpg",
    itemName: "Plus Tapestry",
    price: 100.0,
  },
  {
    picture: "/images/tapestry7.jpg",
    itemName: "Falls Tapestry",
    price: 100.0,
  },
  {
    picture: "/images/tapestry8.jpg",
    itemName: "Funfetti Necklace",
    price: 15.0,
  },
  {
    picture: "/images/tapestry9.jpg",
    itemName: "Galaxy Tapestry",
    price: 100.0,
  },
];

for (const item of items) {
  await Item.create(item);
}

let users = [
  {
    username: "jess999",
    email: "jess90@gmail.com",
    password: "reptiles",
  },
  {
    username: "marslanding",
    email: "fredflint@gmail.com",
    password: "reptiles",
  },
  {
    username: "clairearnold",
    email: "artsyfartsy@gmail.com",
    password: "reptiles",
  },
];

const user1 = await User.create({
  username: "lee",
  email: "rj@gmail.com",
  password: "santaclaus",
});

for (const user of users) {
  await User.create(user);
}

let episodes = [
  {
    episodeName: "Girl things",
    episodeDescription:
      "This one is about how you never know who's really there for you.",
  },
  {
    episodeName: "Silly things",
    episodeDescription:
      "This one is about embarrassing moments that we wish we just laughed off but made way too big a deal about.",
  },
  {
    episodeName: "Manic things",
    episodeDescription:
      "This one is about how we can all get a little crazy...",
  },
];

for (const episode of episodes) {
  await Episode.create(episode);
}

let orders = [
  {
    quantity: 2,
    totalPrice: 160,
  },
  {
    quantity: 1,
    totalPrice: 40,
  },
  {
    quantity: 2,
    totalPrice: 100,
  },
];

for (const order of orders) {
  await Order.create(order);
}

let admins = [
  {
    email: "catmm@gmail.com",
    password: "greenismyfav",
  },
];

for (const admin of admins) {
  await Admin.create(admin);
}

let posts = [
  {
    postName: "Stuff",
    postText:
      "oeinfgoerngoueanrgoienrofnerognreougneoragoerifmreifgnerogerogoergkkfdjgnieunrgkjenrgoiuneargljnsertighnaekrjgnkejng",
  },
  {
    postName: "Things",
    postText:
      "iaywebrfnaiewybfaiwenfiewBFHUGREBKAEJRNFVKAJRWVCIHBERFGHBEARUGBadbrfyuserbvisernvisdrnviurnivnsr",
  },
  {
    postName: "Places",
    postText:
      "iaerygbfiauenriunaweicvbaewgbcvweybfniauenfiunrbhivhjgnsbiveoarwenviawerunviearnivrensivhrnvhndibhnvidfsjnvijernvidjndfnvifdjnviajdfnv",
  },
];

for (const post of posts) {
  await Post.create(post);
}

await db.close();
