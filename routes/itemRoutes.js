// const express = require('express');
// const { getAllUsers, createUser , updateUser } = require('../controllers/user_controller');
// const router = express.Router();

// router
// .get('/', getAllUsers)
// .post('/', createUser)
// .put('/:id' , updateUser);

// module.exports = router;


const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/items', itemController.getItems);
router.get('/items/:id', itemController.getItemById);
router.post('/items', itemController.createItem);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
