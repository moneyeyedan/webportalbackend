'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        {
            tableName: 'users',
            schema: 'auth'
          },
        'created_by', 
        {
            type: Sequelize.UUID,
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            allowNull: true,
            references:{
              model:{
                tableName:"user_profiles"
                // schema:"public"
              },
              key:"id"
            }
        }
      )
        .then(() => {
          return queryInterface.addColumn(
            {
                tableName: 'users',
                schema: 'auth'
              },
            'updated_by', 
            {
                type: Sequelize.UUID,
                onDelete:'CASCADE',
                onUpdate:'CASCADE',
                allowNull: true,
                references: {
                  model:{
                    tableName:'user_profiles'
                  },
                  key:'id'
                }
            },{
                schema:'auth'
            }
          );
        });
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        {
            tableName: 'users',
            schema: 'auth'
          }, 
        'created_by' 
      )
        .then(() => {
          return queryInterface.removeColumn(
            {
                tableName: 'users',
                schema: 'auth'
              },
            'updated_by' 
          );
        });
    }
  };