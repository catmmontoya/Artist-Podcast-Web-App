import { User, Item, db } from "./model.js";

// const allUsers = await User.findAll();

// console.log(allUsers);

// const user1 = await User.findOne({ include: Item });
// console.log(user1);

// const item1 = await Item.findOne();

// await user1.addItem(item1);

// // Have to re-query when dealing with relationship modifications (eager loads)
// // If not, can usually just invoke 'await userObj.refresh()'
// const user1Updated = await User.findOne({ include: Item });

// console.log(user1Updated);

const allItems = await Item.findAll();

console.log(allItems);

await db.close();
