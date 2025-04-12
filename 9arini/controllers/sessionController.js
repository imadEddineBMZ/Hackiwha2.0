// controllers/sessionController.js
import Session from '../models/Session.js';

// Create a new session
export const createSession = async (req, res) => {
  try {
    const { type, teacher, students, startTime, endTime } = req.body;
    const newSession = new Session({ type, teacher, students, startTime, endTime });
    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get session details by ID
export const getSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) return res.status(404).json({ message: 'Session not found' });
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update session details by ID
export const updateSession = async (req, res) => {
  try {
    const updates = req.body;
    const session = await Session.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!session) return res.status(404).json({ message: 'Session not found' });
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a session by ID
export const deleteSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) return res.status(404).json({ message: 'Session not found' });
    res.json({ message: 'Session deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all sessions
export const getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
