'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectDivisi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectDivisi.init({
    project_id: DataTypes.INTEGER,
    divisi_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProjectDivisi',
  });
  return ProjectDivisi;
};