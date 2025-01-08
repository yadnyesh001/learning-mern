const express = require('express');
const { registerUser, getAllUsers } = require('../controllers/user.controller');

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to fetch all users
router.get('/users', getAllUsers);

module.exports = router;
