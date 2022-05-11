const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  deleteUser,
  deletePost,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

router.route('/:id')
  .get(getSingleUser)
  .delete(deleteUser);

// router.route('/posts/:postId').delete(authMiddleware, deletePost);



// FOR TESTING - DELETE BEFORE DEPLOYMENT //
router.route('/:username').get(getSingleUser);



module.exports = router;
