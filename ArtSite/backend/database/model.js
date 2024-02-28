import { DataTypes, Model } from "sequelize";
import connectToDB from "./db.js";
import util from "util";

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
      allowNull: false,
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
    picture: {
      type: DataTypes.STRING,
    },
    itemName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    episodeName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    episodeDescription: {
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

class Post extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Post.init(
  {
    postId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    postName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    postText: {
      type: DataTypes.TEXT,
      allowNull: false,
      required: true,
    },
  },
  {
    modelName: "post",
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

class Admin extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Admin.init(
  {
    adminId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      required: true,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
      required: true,
    },
  },
  {
    modelName: "admin",
    sequelize: db,
  }
);

class Comment extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Comment.init(
  {
    commentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    input: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    modelName: "comment",
    sequelize: db,
  }
);

//Relationships
User.belongsToMany(Item, { through: "UserItem" });
Item.belongsToMany(User, { through: "UserItem" });

Comment.belongsTo(User, { foreignKey: "commentId" });

User.hasMany(Order, { foreignKey: "orderId" });
Order.belongsTo(User, { foreignKey: "orderId" });
Item.hasMany(Order, { foreignKey: "orderId" });
Order.belongsTo(Item, { foreignKey: "orderId" });

Comment.belongsTo(User, { foreignKey: "commentId" });
User.hasMany(Comment, { foreignKey: "commentId" });
Comment.belongsTo(Episode, { foreignKey: "commentId" });
Episode.hasMany(Comment, { foreignKey: "commentId" });

// userObj.addItem(itemObj)
// itemObj.addUser(userObj)
// itemObj.getUsers()
// userObj.getItems()

export { User, Item, Episode, Order, Admin, Comment, Post };
