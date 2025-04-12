// controllers/analystController.js (analytics endpoints)
import User from '../models/user.js';

/**
 * Get top N locations by user count
 */
export async function getTopLocations(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const result = await User.aggregate([
      { $match: { location: { $exists: true, $ne: null } } },
      { $group: { _id: '$location', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: limit }
    ]);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
}

/**
 * Get top N learning interests (languages users want to learn)
 */
export async function getTopLearningInterests(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const result = await User.aggregate([
      { $unwind: '$learningInterests' },
      { $group: { _id: '$learningInterests.language', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: limit }
    ]);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
}

/**
 * Get top N teaching languages (languages users can teach)
 */
export async function getTopTeachingLanguages(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const result = await User.aggregate([
      { $unwind: '$teachingLanguages' },
      { $group: { _id: '$teachingLanguages.language', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: limit }
    ]);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
}