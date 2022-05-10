const router = require('express').Router();
const { createPost } = require('../../controllers/post-controller');

// /api/thoughts
router.route('/')
    .post(createPost);

// /api/thoughts/:thoughtId
// router.route('/:thoughtId')
//     .get(getSingleThought)
//     .put(updateThought)
//     .delete(deleteThought);



module.exports = router;