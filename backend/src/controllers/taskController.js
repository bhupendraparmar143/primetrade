const { validationResult } = require('express-validator');
const Task = require('../models/Task');

/**
 * Get all tasks for the authenticated user
 * GET /api/tasks?search=&status=
 */
const getTasks = async (req, res) => {
  const { search, status } = req.query;

  const filter = { user: req.user.id };

  if (status) {
    filter.status = status;
  }

  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
    ];
  }

  try {
    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    return res.json(tasks);
  } catch (err) {
    console.error('Tasks list error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

/**
 * Get a single task by ID
 * GET /api/tasks/:id
 */
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    return res.json(task);
  } catch (err) {
    console.error('Task fetch error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

/**
 * Create a new task
 * POST /api/tasks
 */
const createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, status } = req.body;

  try {
    const task = await Task.create({
      user: req.user.id,
      title,
      description,
      status: status || 'pending',
    });

    return res.status(201).json(task);
  } catch (err) {
    console.error('Task create error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

/**
 * Update a task
 * PUT /api/tasks/:id
 */
const updateTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.json(task);
  } catch (err) {
    console.error('Task update error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

/**
 * Delete a task
 * DELETE /api/tasks/:id
 */
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOneAndDelete({ _id: id, user: req.user.id });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error('Task delete error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};

