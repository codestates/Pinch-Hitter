"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Board.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      occupation: DataTypes.STRING,
      wage: DataTypes.STRING,
      work_date: DataTypes.STRING,
      work_place: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Board",
    }
  );
  return Board;
};
