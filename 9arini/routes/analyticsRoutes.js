import express from 'express';
import {
  getTopLocations,
  getTopLearningInterests,
  getTopTeachingLanguages
} from '../controllers/analystController.js';

const router = express.Router();

// Query params: ?limit=5
router.get('/locations', getTopLocations);
router.get('/learning-interests', getTopLearningInterests);
router.get('/teaching-languages', getTopTeachingLanguages);

export default router;
