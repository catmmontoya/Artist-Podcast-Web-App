import { User, Item, Episode, db } from "./model.js";

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

let episodes = [{}, {}];

const user1 = await User.create({
  username: "Lee",
  email: "rj@gmail.com",
  password: "santaclaus",
});

for (const user of users) {
  await User.create(user);
}

await db.close();
