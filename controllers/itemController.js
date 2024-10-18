// const { getUserModel } = require("../connection/connection");

// async function getAllUsers(req, res) {
//     try {
//         const userModel = getUserModel();
//         const users = await userModel.findAll();
//         if (users.length == 0) {
//             return res.status(400).json({ err: "user not found" });
//         }
//         return res.status(200).json(users);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ err: "internal server error" });
//     }
// }

// async function createUser(req, res) {
//     const { userName, email, jobTitle } = req.body;
//     try {
//         const userModel = getUserModel();
//         const user = await userModel.findOne({ where: { email: email } })
//         if (user == null) {
//             await userModel.create(req.body);
//             return res.status(201).json({ msg: "user added successfully" })
//         }
//         return res.status(200).json({ msg: "user already exist" });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ err: "internal server error" });
//     }
// }

// async function updateUser(req, res) {
//     const reqid = req.params.id;

//     const { name, email, jobTitle } = req.body;
//     try {
//       const user = await userModel.findByPk(reqid);
//       if (user) {
//         user.userName = name;
//         user.email = email;
//         user.jobTitle = jobTitle;
//         await user.save();
//         res.status(200).json(user);
//       } else {
//         res.status(404).json({ error: 'User not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Error updating user' });
//     }
  
// }

// module.exports = {
//     getAllUsers,
//     createUser,
//     updateUser
// }

const Item = require('../models/itemModel');

const getItems = async (req, res) => {
  try {
    const items = await Item.getAll();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching items' });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await Item.getById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching item' });
  }
};

const createItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newItem = await Item.create(name, description);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: 'Error creating item' });
  }
};

const updateItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    const updatedItem = await Item.update(req.params.id, name, description);
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: 'Error updating item' });
  }
};

const deleteItem = async (req, res) => {
  try {
    await Item.delete(req.params.id);
    res.status(204).json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting item' });
  }
};

module.exports = { getItems, getItemById, createItem, updateItem, deleteItem };
