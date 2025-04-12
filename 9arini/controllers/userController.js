import User from '../models/user.js';

// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password'); // Exclude password
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user profile
export const updateUserProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Set user preferences: location, learningInterests, teachingLanguages
export const setPreferences = async (req, res) => {
  try {
    const { location, learningInterests, teachingLanguages } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { location, learningInterests, teachingLanguages },
      { new: true }
    ).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user points
export const getUserPoints = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('points');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ points: user.points });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user level
export const getUserLevel = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('points');
    if (!user) return res.status(404).json({ message: 'User not found' });

    let level = 'Débutant';
    const points = user.points;

    if (points >= 1000) level = 'Expert';
    else if (points >= 600) level = 'Avancé';
    else if (points >= 400) level = 'Intermédiaire';
    else if (points >= 200) level = 'Élémentaire';

    res.json({ level });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
