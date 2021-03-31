'use strict';

// import {v4 as uuid} from 'uuid';
var CryptoJS = require("crypto-js");
function pas_encript(){
   var hash_key = '*123456*';

  var ciphertext = CryptoJS.AES.encrypt('12345678', hash_key).toString();

  return ciphertext;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
 
     await queryInterface.bulkInsert({tableName:'users',schema:'auth'}, 
     [
       {
        id:'a83d9a4b-9996-4c2f-9047-62703ff8ee4a',
        email: 'admin@webportal.com',
        mobile_no: '9087746685',
        password: pas_encript(),
        is_active: true,
        // created_by: "f44414df-753f-4df3-8db9-0a93c79c306c",
        // updated_by: "f44414df-753f-4df3-8db9-0a93c79c306c",
        hash_key: '*123456*',
        created_at: new  Date(),
        updated_at:new Date()
       },
       {
        id:'e8f3e93f-640b-4585-8fdf-2016850e9749',
        email: 'manager@webportal.com',
        mobile_no: '9087746686',
        password: pas_encript(),
        is_active: true,
        // created_by: "fbb7268d-3765-402b-93ba-84ef8ce63ce0",
        // updated_by: "fbb7268d-3765-402b-93ba-84ef8ce63ce0",
        hash_key: '*123456*',
        created_at: new  Date(),
        updated_at:new Date()
       }
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete({tableName:'users',schema:'auth'}, null, {});
   
  }
};
