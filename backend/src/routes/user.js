const express = require('express');
const { body } = require('express-validator');
const auth = require('../middleware/auth');
const { getProfile, updateProfile } = require('../controllers/userController');

const router = express.Router();

// GET /api/user/me - get current user profile
router.get('/me', auth, getProfile);

// PUT /api/user/me - update current user profile
router.put(
  '/me',
  auth,
  [body('name').trim().notEmpty().withMessage('Name is required')],
  updateProfile
);

module.exports = router;


