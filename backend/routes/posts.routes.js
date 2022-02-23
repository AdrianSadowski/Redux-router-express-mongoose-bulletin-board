const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post.find().sort({created: -1});
    if (!result) res.status(404).json({post: 'Not found'});
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    if (!result) res.status(404).json({post: 'Not found'});
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/posts/add', async (req, res) => {
  try {
    const {author, publicationDate, lastUpdate, status, title, description, photo, price, phone, location} =
      req.body;
    const newPost = new Post({
      author,
      publicationDate,
      lastUpdate,
      status,
      title,
      description,
      photo,
      price,
      phone,
      location,
    });
    await newPost.save();
    res.json({newPost});
    if (!newPost) res.status(404).json({post: 'Not Found'});
  } catch (err) {
    res.status(500).json({message: err});
  }
});

module.exports = router;
