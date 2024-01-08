// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Poetry = require('./models/poetrySchema');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://tahirnizamani:21t57m17aIbSVtFh@cluster0.7cum9od.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/api/poetries', async (req, res) => {
  try {
    const poetries = await Poetry.find();
    res.json(poetries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/poetries', async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
