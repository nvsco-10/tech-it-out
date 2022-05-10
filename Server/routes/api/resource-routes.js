const router = require('express').Router();
const { getResources, createResource, getResourceById, getResourceByType, deleteResource, updateResource, addComment, deleteComment } = require('../../controllers/resource-controller');

// /api/resources
router.route('/')
    .get(getResources)
    .post(createResource)

// /api/resources/:resourceId
router.route('/:resourceId')
    .get(getResourceById)
    .post(addComment)
    .delete(deleteResource)
    .put(updateResource)

router.route('/type/:resourceType')
    .get(getResourceByType)

// /api/resources/:resourceId/comments/:commentId
router.route('/:resourceId/comments/:commentId')
    .delete(deleteComment)



module.exports = router;