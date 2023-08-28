const express = require('express');
const router = express.Router();
const Data = require('../models/Data'); // Assuming your model is in this path

router.get('/requests', async (req, res) => {
  try {
    const productRequests = await Data.find({}, { _id: 0, productRequests: 1 });
    res.status(200).json(productRequests[0].productRequests);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/request/:id', async (req, res) => {
  const requestId = parseInt(req.params.id);
  try {
    const data = await Data.findOne({ 'productRequests.id': requestId }, { _id: 0, productRequests: 1 });
    if (data) {
      const request = data.productRequests.find((req) => req.id === requestId);
      if (request) {
        res.status(200).json(request);
      } else {
        res.status(404).json({ error: 'Request not found' });
      }
    } else {
      res.status(404).json({ error: 'Request not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
