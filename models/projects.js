'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user_profiles,{
        foreignKey:'id',
        onDelete:'CASCADE',
          onUpdate:'CASCADE'
      });

    }
  };
  projects.init({
    id:{
      type:DataTypes.UUID,
      primaryKey: true,

    },
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'projects',
    underscored: true,
  });
  return projects;
};