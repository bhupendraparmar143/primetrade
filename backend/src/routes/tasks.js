const express = require('express');
const { body } = require('express-validator');
const auth = require('../middleware/auth');
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

// GET /api/tasks?search=&status=
router.get('/', auth, getTasks);

// POST /api/tasks
router.post(
  '/',
  auth,
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('status')
      .optional()
      .isIn(['pending', 'in-progress', 'completed'])
      .withMessage('Invalid status'),
  ],
  createTask
);

// GET /api/tasks/:id
router.get('/:id', auth, getTaskById);

// PUT /api/tasks/:id
router.put(
  '/:id',
  auth,
  [
    body('title').optional().trim().notEmpty().withMessage('Title cannot be empty'),
    body('status')
      .optional()
      .isIn(['pending', 'in-progress', 'completed'])
      .withMessage('Invalid status'),
  ],
  updateTask
);

// DELETE /api/tasks/:id
router.delete('/:id', auth, deleteTask);

module.exports = router;


