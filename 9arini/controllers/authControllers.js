// controllers/authController.js

export const registerUser = async (req, res) => {
    const { email, password, role, learningInterests, teachingLanguages, location } = req.body;
    
    try {
      // Handle registration of normal users and companies
      const user = new User({ 
        email, 
        password, 
        role, 
        learningInterests, 
        teachingLanguages, 
        location 
      });
      await user.save();
  
      if (role === 'company') {
        // Redirect to a dashboard where they can purchase analytics features
        return res.status(201).json({ message: 'Company registered. Please proceed to dashboard to purchase analytics features.' });
      }
      
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  