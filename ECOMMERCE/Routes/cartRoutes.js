const express = require('express');
const mongoose = require('mongoose');
const Cart = require('./Model/cart');  // Path to the Cart model file
const Product = require('./Model/products');  // Path to the Product model file
const User = require('./Model/user');  // Path to the User model file
const router = express.Router();

// Get all carts
router.get('/', async (req, res) => {
  try {
    const carts = await Cart.find().populate('user_id').populate('items.product_id');
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching carts', error: error.message });
  }
});

// Get cart by user ID
router.get('/user/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ user_id: req.params.userId }).populate('items.product_id');
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart', error: error.message });
  }
});

// Create or update cart (for adding items to cart)
router.post('/add', async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;

    // Check if user exists
    const user = await User.findById(user_id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check if product exists
    const product = await Product.findById(product_id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Calculate price (product price * quantity)
    const price = product.price * quantity;

    // Check if cart already exists for the user
    let cart = await Cart.findOne({ user_id });

    if (cart) {
      // If cart exists, check if product already in cart
      const existingItem = cart.items.find(item => item.product_id.toString() === product_id);
      if (existingItem) {
        // If the product is already in the cart, update the quantity and price
        existingItem.quantity += quantity;
        existingItem.price = product.price * existingItem.quantity;
      } else {
        // If the product is not in the cart, add new item
        cart.items.push({ product_id, quantity, price });
      }

      // Recalculate total
      cart.total = cart.items.reduce((acc, item) => acc + item.price, 0);

      await cart.save();
      res.status(200).json(cart);
    } else {
      // If no cart exists, create a new one
      cart = new Cart({
        user_id,
        items: [{ product_id, quantity, price }],
        total: price
      });

      await cart.save();
      res.status(201).json(cart);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error: error.message });
  }
});

// Update cart item (e.g., update quantity)
router.patch('/update/:cartId', async (req, res) => {
  try {
    const { product_id, quantity } = req.body;
    const cart = await Cart.findById(req.params.cartId);

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Find the product in the cart and update its quantity
    const item = cart.items.find(item => item.product_id.toString() === product_id);
    if (!item) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    item.quantity = quantity;
    item.price = item.product_id.price * quantity;  // Update price based on new quantity

    // Recalculate total
    cart.total = cart.items.reduce((acc, item) => acc + item.price, 0);

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart', error: error.message });
  }
});

// Delete a cart
router.delete('/delete/:cartId', async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.cartId);
    if (cart) {
      res.json({ message: 'Cart deleted successfully' });
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting cart', error: error.message });
  }
});

// Search for products in the cart by name
router.get('/search', async (req, res) => {
  try {
    const query = req.query.name || '';
    const cart = await Cart.find({ 'items.product_id.name': { $regex: query, $options: 'i' } }).populate('items.product_id');
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error searching cart', error: error.message });
  }
});

module.exports = router;
