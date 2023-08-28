const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// ... MongoDB connection and model setup ...

// Read and store data from data.json
const dataFile = fs.readFileSync('data.json', 'utf8');
const jsonData = JSON.parse(dataFile);

Data.insertMany(jsonData.productRequests)
  .then(() => {
    console.log('Data inserted successfully.');
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  });

// Define routes to fetch data
app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define other route handlers

app.get('/api/product/:id', async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await Data.findOne({
      'productRequests.id': productId,
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const requestedProduct = product.productRequests.find(
      (item) => item.id === productId
    );

    res.json(requestedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// More route handlers can be added here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
