'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Full extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Full.init({
    userId: DataTypes.INTEGER,
    idMeal: DataTypes.INTEGER,
    strMeal: DataTypes.STRING,
    strMealThumb: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Full',
  });
  return Full;
};