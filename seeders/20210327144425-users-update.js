
'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return queryInterface.sequelize.query(
        `
        UPDATE auth.users SET  created_by='f44414df-753f-4df3-8db9-0a93c79c306c',updated_by= 'f44414df-753f-4df3-8db9-0a93c79c306c' WHERE id='a83d9a4b-9996-4c2f-9047-62703ff8ee4a';
        UPDATE auth.users SET   created_by='fbb7268d-3765-402b-93ba-84ef8ce63ce0',updated_by= 'fbb7268d-3765-402b-93ba-84ef8ce63ce0' WHERE id='e8f3e93f-640b-4585-8fdf-2016850e9749';

        `
    ).then(response=>{
        console.log(response)
    })
    .catch(error=>{
        console.log(error);
    })
 
     
  
  },

  down: async (queryInterface, Sequelize) => {
  
    //  await queryInterface.bulkDelete({tableName:'users',schema:'auth'}, null, {});
   
  }
};

