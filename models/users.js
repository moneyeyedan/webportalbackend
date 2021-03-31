'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.user_profiles,{
        foreignKey:'user_id',
        onDelete:'CASCADE',
          onUpdate:'CASCADE'
      });
      this.belongsTo(models.user_profiles,{
        foreignKey:'id',
        onDelete:'CASCADE',
          onUpdate:'CASCADE'
      });

    }
  };
  users.init({
    id:{
      type:DataTypes.UUID,
      primaryKey: true,

    },
    email: DataTypes.STRING,
    mobile_no: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    hash_key: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'users',
    underscored: true,
    schema:'auth'

  });
  return users;
};