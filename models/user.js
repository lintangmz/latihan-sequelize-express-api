'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    nama: DataTypes.STRING(30),
    nik: DataTypes.STRING(16),
    divisi_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = function(models) {
    User.belongsTo(models.Divisi, {
      foreignKey: 'divisi_id',
      as: 'divisi'
    })
  }
  return User;
};