const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// user model:
// username - String, required, unique
// email - String, required, unique
// password - String, required
// isAdmin - Boolean, default false,
// posts - Array

