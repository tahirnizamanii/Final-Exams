// poetryController.js
const Poetry = require('../models/poetrySchema');

exports.getAllPoetries = async (req, res) => {
  try {
    const poetries = await Poetry.find();
    res.json(poetries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPoetry = async (req, res) => {
  const { title, content, poet } = req.body;

  const newPoetry = new Poetry({
    title,
    content,
    poet,
  });

  try {
    const savedPoetry = await newPoetry.save();
    res.status(201).json(savedPoetry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
