// const { DataTypes } = require("sequelize");

// const createUserModel = async(sequelize) => {
//     const User = sequelize.define('User' , {
//         userName:{
//             type:DataTypes.STRING,
//             allowNull:false
//         },
//         email:{
//             type:DataTypes.STRING,
//             allowNull:false,
//             unique:true,
//             isLowercase:true
//         },
//         jobTitle:{
//             type:DataTypes.STRING,
//             allowNull:false
//         }
//     });

//     return User;
// }
// module.exports = {
//     createUserModel
// }

const pool = require('../connection/connection');

class Item {
  static async getAll() {
    const result = await pool.query('SELECT * FROM items');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(name, description) {
    const result = await pool.query(
      'INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    return result.rows[0];
  }

  static async update(id, name, description) {
    const result = await pool.query(
      'UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *',
      [name, description, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM items WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Item;
