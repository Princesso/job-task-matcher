const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/create', reviewController.createReview);
router.get('/reviews/:userId', reviewController.getUserReviews);

module.exports = router;
