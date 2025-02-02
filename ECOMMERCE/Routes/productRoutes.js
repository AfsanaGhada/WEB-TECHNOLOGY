const express = require('express');
const router = express.Router();
const Product = require('../Model/Products');
const multer = require('multer');

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save images to "uploads/" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

//  Get All Products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('categories', 'name');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
});

//  Get Product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('categories', 'name');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving product', error: error.message });
  }
});

//  Get All Products by Category ID
router.get('/category/:categoryId', async (req, res) => {
  try {
    const products = await Product.find({ categories: req.params.categoryId }).populate('categories', 'name');
    if (products.length === 0) return res.status(404).json({ message: 'No products found in this category' });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
});

//  Create New Product (With Image Upload)
router.post('/create', upload.array('images', 5), async (req, res) => {
  try {
    const { name, description, price, categories, stock } = req.body;
    const imagePaths = req.files.map(file => file.path);

    const newProduct = new Product({ name, description, price, categories, stock, images: imagePaths });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });

  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
});

//  Update Product (With Image Upload)
router.patch('/update/:id', upload.array('images', 5), async (req, res) => {
  try {
    const updatedData = req.body;
    updatedData.updated_at = Date.now();
    
    if (req.files.length > 0) {
      updatedData.images = req.files.map(file => file.path);
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedData, { new: true }).populate('categories', 'name');
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });

    res.json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
});

//  Delete Product
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
});

//  Search Products (by name or description)
router.get('/search', async (req, res) => {
  try {
    const { name, description } = req.query;
    let query = {};

    if (name) query.name = new RegExp(name, 'i'); // Case-insensitive search
    if (description) query.description = new RegExp(description, 'i');

    const products = await Product.find(query).populate('categories', 'name');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error searching products', error: error.message });
  }
});

module.exports = router;
