// controllers/companyController.js
import User from '../models/user.js';

/**
 * Get top N rated teachers
 */
export const getTopTeachers = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const result = await User.aggregate([
      { $match: { role: 'instructor' } }, // Filter only instructors
      { $sort: { averageRating: -1 } },   // Sort by average rating
      { $limit: limit },                  // Limit to top N teachers
      { $project: { name: 1, email: 1, averageRating: 1, teachingLanguages: 1, location: 1 } } // Project required fields
    ]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
