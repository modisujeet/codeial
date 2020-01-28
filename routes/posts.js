const express = require('express');
const router = express.Router();

const postsController = require('../controller/post_controller');

router.get('/post', postsController.post);


module.exports = router;