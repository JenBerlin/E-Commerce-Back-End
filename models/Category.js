const { Model, DataTypes } = require("sequelize");

// Hier importiere ich connection.js
const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    id: {
      // define columns
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      // define columns
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Hier durch weiß jedes Model "ich bin Teil der Datenbank"
    // Ist der Zugang zur Datenbank, als Kurzschreibform "sequelize: sequelize"
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
