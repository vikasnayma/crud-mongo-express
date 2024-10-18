// const { Sequelize } = require('sequelize');
// const { createUserModel } = require('../models/usermodel');


// const sequelize = new Sequelize('postgres', 'postgres', 'vikas', {
//   host: 'localhost',
//   dialect: 'postgres',
//   port: 5432
// });

// let userModel = null;
// const connection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//     userModel = await createUserModel(sequelize);
//     await sequelize.sync();
//     console.log("Database Synced");
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// const getUserModel = () => {
//   if (!userModel) {
//     throw new Error('User model not initialized');
//   }
//   return userModel;
// }

// module.exports = {
//   connection,
//   getUserModel
// }

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'vikas',
  port: 5432,
});

module.exports = pool;
