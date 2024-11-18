const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  const { taskId, reviewerId, revieweeId, rating, comment } = req.body;
  try {
    const newReview = new Review({ taskId, reviewerId, revieweeId, rating, comment });
    await newReview.save();
    res.status(201).json({ message: 'Review added successfully!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ revieweeId: req.params.userId });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
