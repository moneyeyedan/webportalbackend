'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('user_profiles', [
     {
      id:"f44414df-753f-4df3-8db9-0a93c79c306c",
      user_id: "a83d9a4b-9996-4c2f-9047-62703ff8ee4a",
      birthday: '10-05-1997',
      role_id: 1,
      is_active: true,
      created_at: new  Date(),
      updated_at:new Date()
     },
     {
      id:"fbb7268d-3765-402b-93ba-84ef8ce63ce0",
      user_id: "e8f3e93f-640b-4585-8fdf-2016850e9749",
      birthday: '10-05-1997',
      role_id: 2,
      is_active: true,
      created_at: new  Date(),
      updated_at:new Date()
     }
    ], {});
 
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('user_profiles', null, {});
    
  }
};
