// controllers/reviewController.js
import Review from '../models/Review.js';
import Session from '../models/Session.js';

// Create a new review for a session
export const createReview = async (req, res) => {
  try {
    const { sessionId, studentId, rating, comment } = req.body;

    // Check if the session exists
    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ message: 'Session not found' });

    // Check if the student is part of the session
    if (!session.students.includes(studentId) && session.teacher.toString() !== studentId)
      return res.status(403).json({ message: 'Student must be part of the session to review' });

    // Create the review
    const newReview = new Review({
      session: sessionId,
      student: studentId,
      rating,
      comment,
    });

    await newReview.save();

    // Add the review to the session
    session.reviews.push(newReview._id);
    await session.save();

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all reviews for a specific session
export const getReviewsForSession = async (req, res) => {
  try {
    const reviews = await Review.find({ session: req.params.sessionId }).populate('student', 'name email');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a review by ID
export const updateReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { rating, comment },
      { new: true }
    );

    if (!review) return res.status(404).json({ message: 'Review not found' });

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a review by ID
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });

    // Remove the review from the session's reviews array
    const session = await Session.findById(review.session);
    session.reviews = session.reviews.filter(
      (reviewId) => reviewId.toString() !== review._id.toString()
    );
    await session.save();

    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
