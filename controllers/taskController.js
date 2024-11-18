const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, skillsRequired, clientId, budget, deadline } = req.body;
  try {
    const newTask = new Task({ title, description, skillsRequired, clientId, budget, deadline });
    await newTask.save();
    res.status(201).json({ message: 'Task created successfully!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.searchTasks = async (req, res) => {
  const { skills } = req.query;
  try {
    const tasks = await Task.find({ skillsRequired: { $in: skills.split(',') } });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
