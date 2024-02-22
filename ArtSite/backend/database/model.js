import { DataTypes, Model } from "sequelize";
import connectToDB from "./db.js";
import util from "util";
import { setDefaultResultOrder } from "dns";

export const db = await connectToDB(`postgresql:///artists`);
class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      required: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      required: true,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);

class Item extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Item.init(
  {
    itemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "item",
    sequelize: db,
  }
);

class Episode extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Episode.init(
  {
    episodeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    modelName: "episode",
    sequelize: db,
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  }
);

class Order extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Order.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "order",
    sequelize: db,
    timestamps: true,
    createdAt: true,
  }
);

// User.belongsTo(Item, { foreignKey: "userId" });
// Item.hasMany(User, { foreignKey: "userId" });

// Item.belongsTo(User, { foreignKey: "userId" });
// User.hasMany(Item, { foreignKey: "userId " });

User.belongsToMany(Item, { through: "UserItem" });
Item.belongsToMany(User, { through: "UserItem" });
// userObj.addItem(itemObj)
// itemObj.addUser(userObj)
// itemObj.getUsers()
// userObj.getItems()

export { User, Item, Episode, Order };
