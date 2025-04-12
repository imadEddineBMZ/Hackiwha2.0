import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'You are authenticated!' });
});

export default router;

