import { DataTypes, Model } from "sequelize";

class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    username: {
      type: DataTypes.STRING(30),
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      required: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      unique: true,
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
    name: {
      type: DataTypes.STRING(50),
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
