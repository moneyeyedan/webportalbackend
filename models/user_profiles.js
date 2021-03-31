'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.users,{
        foreignKey:'created_by',
        onDelete:'CASCADE',
          onUpdate:'CASCADE'
      });
      this.hasMany(models.users,{
        foreignKey:'updated_by',
        onDelete:'CASCADE',
          onUpdate:'CASCADE'
      });
      this.hasMany(models.projects,{
        foreignKey:'created_by',
        onDelete:'CASCADE',
          onUpdate:'CASCADE'
      });
      this.hasMany(models.projects,{
        foreignKey:'updated_by',
        onDelete:'CASCADE',
          onUpdate:'CASCADE'
      });
      // this.hasMany(models.projects);
      this.belongsTo(models.users,{
        foreignKey:'id',
        onDelete:'CASCADE',
          onUpdate:'CASCADE'
      });
    }
  };
  user_profiles.init({
    id:{
      type:DataTypes.UUID,
      primaryKey: true,

    },
    user_id: DataTypes.UUID,
    birthday: DataTypes.DATE,
    role_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user_profiles',
    underscored: true,
  });
  return user_profiles;
};