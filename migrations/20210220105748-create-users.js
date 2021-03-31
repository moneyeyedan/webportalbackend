'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true

      },
      mobile_no: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,

      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      hash_key: {
        type: Sequelize.STRING,
        allowNull: false,

      },
    },
    {
      schema:'auth'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};