const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const resourceRoutes = require('./resource-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/resources', resourceRoutes);

module.exports = router;
