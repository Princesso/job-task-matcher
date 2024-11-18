const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  skillsRequired: [{ type: String, required: true }], // List of required skills
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Client who posted the task
  budget: { type: Number },
  deadline: { type: Date },
  status: { type: String, enum: ['open', 'in progress', 'completed'], default: 'open' },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
