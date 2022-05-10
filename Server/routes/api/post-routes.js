const router = require('express').Router();
const { getPosts, createPost, getSinglePost } = require('../../controllers/post-controller');

// /api/posts
router.route('/')
    .get(getPosts)
    .post(createPost);

// /api/posts/:postId
router.route('/:postId')
    .get(getSinglePost)



module.exports = router;