const express = require('express');
const router = express.Router();
const Category = require('./Model/Categories');

//  Get All Categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving categories', error: error.message });
  }
});

//  Get Category by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving category', error: error.message });
  }
});

//  Create New Category
router.post('/create', async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check if category exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) return res.status(400).json({ message: 'Category already exists' });

    const newCategory = new Category({ name, description });
    await newCategory.save();
    res.status(201).json({ message: 'Category created successfully', category: newCategory });

  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error: error.message });
  }
});

//  Update Category
router.patch('/update/:id', async (req, res) => {
  try {
    const updatedData = req.body;
    updatedData.updated_at = Date.now();

    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!updatedCategory) return res.status(404).json({ message: 'Category not found' });

    res.json({ message: 'Category updated successfully', category: updatedCategory });
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error: error.message });
  }
});

//  Delete Category
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) return res.status(404).json({ message: 'Category not found' });

    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error: error.message });
  }
});

//  Search Category (by name or description)
router.get('/search', async (req, res) => {
  try {
    const { name, description } = req.query;
    let query = {};

    if (name) query.name = new RegExp(name, 'i'); // Case-insensitive search
    if (description) query.description = new RegExp(description, 'i');

    const categories = await Category.find(query);
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error searching categories', error: error.message });
  }
});

module.exports = router;
