const router = require('express').Router();
const { getPosts, createPost, getSinglePost, deletePost, updatePost, deleteComment, addComment } = require('../../controllers/post-controller');

// /api/posts
router.route('/')
    .get(getPosts)
    .post(createPost);

// /api/posts/:postId
router.route('/:postId')
    .get(getSinglePost)
    .post(addComment)
    .delete(deletePost)
    .put(updatePost)

// /api/posts/:postId/comments/:commentId
router.route('/:postId/comments/:commentId')
    .delete(deleteComment)



module.exports = router;