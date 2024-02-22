import { User, Item, Episode, Order, Admin, db } from "./model.js";

await db.sync({
  force: true,
});

let items = [
  {
    name: "Hills Tapestry",
    price: 40.0,
  },
  { name: "Arches Tapestry", price: 60.0 },
  { name: "Galaxy Tapestry", price: 100.0 },
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
  username: "Lee",
  email: "rj@gmail.com",
  password: "santaclaus",
});

for (const user of users) {
  await User.create(user);
}

let episodes = [
  {
    name: "Girl things",
    description:
      "This one is about how you never know who's really there for you.",
  },
  {
    name: "Silly things",
    description:
      "This one is about embarrassing moments that we wish we just laughed off but made way too big a deal about.",
  },
  {
    name: "Manic things",
    description: "This one is about how we can all get a little crazy...",
  },
];

for (const episode of episodes) {
  await Episode.create(episode);
}

let orders = [
  {
    quantity: "2",
    totalPrice: 160,
  },
  {
    quantity: "1",
    totalPrice: 40,
  },
  {
    quantity: "1",
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

await db.close();
