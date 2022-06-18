'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Divisi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Divisi.init({
    nama: DataTypes.STRING,
    kepala_divisi: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Divisi',
  });

  Divisi.associate = function(models) {
    Divisi.hasMany(models.User, {
      foreignKey: 'divisi_id',
      as: 'users'
    })

    Divisi.belongsToMany(models.Project, {
      through: 'ProjectDivisi',
      as: 'projects',
      foreignKey: 'divisi_id'
    })
  }
  return Divisi;
};