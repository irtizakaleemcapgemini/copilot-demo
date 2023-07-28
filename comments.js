// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Import models
const Comment = require('../models/Comment');
const User = require('../models/User');
const Post = require('../models/Post');

// Import middleware
const auth = require('../middleware/auth');

// @route   POST api/comments
// @desc    Create a comment
// @access  Private
router.post(
    '/',

    // Check if user is logged in
    auth,

    // Validate input
    [
        check('text', 'Text is required').not().isEmpty(),
        check('post', 'Post is required').not().isEmpty(),
    ],

    // Create comment
    async (req, res) => {
        