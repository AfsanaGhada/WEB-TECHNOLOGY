const express = require('express');
const router = express.Router();
const User = require('./Model/User');

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find().select('-password'); // Exclude password field
    res.json(users);
  });
  
  const JWT_SECRET = 'your_jwt_secret';

//  Get All Users (Admin Only)
router.get('/', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });

    const users = await User.find().select('-password'); // Exclude passwords
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
});

//  Get User by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    user ? res.json(user) : res.status(404).json({ message: 'User not found' });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
});

//  Get User by Email
router.get('/email/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email }).select('-password');
    user ? res.json(user) : res.status(404).json({ message: 'User not found' });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
});

//  User Registration
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, addresses } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, role, addresses });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

//  User Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (user.isBlocked) {
      return res.status(403).json({ message: 'User is blocked' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

//  Update User Profile
router.patch('/update/:id', authMiddleware, async (req, res) => {
  try {
    if (req.user.userId !== req.params.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const updatedData = req.body;
    if (updatedData.password) {
      updatedData.password = await bcrypt.hash(updatedData.password, 10);
    }

    updatedData.updated_at = Date.now();
    const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedData, { new: true }).select('-password');
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
});

//  Delete User (Self or Admin)
router.delete('/delete/:id', authMiddleware, async (req, res) => {
  try {
    if (req.user.userId !== req.params.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
});

//  Block/Unblock User (Admin Only)
router.patch('/block/:id', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isBlocked = !user.isBlocked;
    await user.save();

    res.json({ message: `User ${user.isBlocked ? 'blocked' : 'unblocked'} successfully` });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user status', error: error.message });
  }
});

//  Get User Order History
router.get('/order-history/:id', authMiddleware, async (req, res) => {
  try {
    if (req.user.userId !== req.params.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const orders = await Order.find({ userId: req.params.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving order history', error: error.message });
  }
});
  
//  Search Users (By Name, Email, or Role)
router.get('/search', authMiddleware, async (req, res) => {
  try {
    const { name, email, role } = req.query;
    let query = {};

    if (name) query.name = new RegExp(name, 'i'); // Case-insensitive search
    if (email) query.email = new RegExp(email, 'i');
    if (role) query.role = role;

    const users = await User.find(query).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error searching users', error: error.message });
  }
});

module.exports = router;
