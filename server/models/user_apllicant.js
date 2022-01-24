'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_apllicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user_apllicant.belongsTo(models.Notice_Board, {foreignKey: 'title'})
      models.user_apllicant.belongsTo(models.User, {foreignKey: 'apllicant_id'})
    }
  }
  user_apllicant.init({
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_mobile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_apllicant',
  });
  return user_apllicant;
};