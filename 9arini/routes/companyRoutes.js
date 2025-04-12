// routes/companyRoutes.js
import express from 'express';
import { getTopTeachers } from '../controllers/companyController.js';

const router = express.Router();

// Company dashboard routes
router.get('/dashboard/top-teachers', getTopTeachers); // Get top teachers based on rating

export default router;
