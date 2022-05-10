const Resource = require('../models/Resource');

module.exports = {

    // get all resource
    async getResources(req, res) {
        
        try {
            const allResources = await Resource.find()
                .populate('comments')
                .select('-__v')
                
            if(!allResources) {
                return res.status(400).json({ message: 'Couldn\'t get Resources' });
            }

            res.json(allResources)

        } catch (err) {
            return res.status(500).json(err);
        }
    },

    // add a resource to database
    async createResource({ body }, res) {

        try {
            const newResource = await Resource.create(body)
            console.log(body)
            
            if (!newResource) {
                return res.status(400).json({ message: 'Something went wrong!' });
            }

            res.json(newResource);

        } catch (err) {
            console.log(err)
            return res.status(400).json(err);
        }
    },

    // get resource by id
    async getResourceById({ params }, res) {
        try {
            const singleResource = await Resource.findOne({ _id: params.resourceId })
                .populate('comments')
                .select('-__v')

            if (!singleResource) {
                return res.status(400).json({ message: 'No resource with that ID!' });
            }

            res.json(singleResource)

        } catch(err) {
            res.status(500).json(err)
        }
    },

    // get resource by id
    async getResourceByType({ params }, res) {
        console.log(params)
        try {
            const singleResource = await Resource.find({ type: params.resourceType })
                .populate('comments')
                .select('-__v')

            if (!singleResource) {
                return res.status(400).json({ message: 'No resource with that ID!' });
            }

            res.json(singleResource)

        } catch(err) {
            res.status(500).json(err)
        }
    },

    // edit resource by ID
    async updateResource({body, params}, res) {
        try {
            const updatedResource = await Resource.findOneAndUpdate(
                { _id: params.resourceId },
                { $set: body },
                { runValidators: true, new: true }
            )

            if (!updatedResource) {
                return res.status(400).json({ message: "Can't find resource with that ID!" });
            }

            res.json(updatedResource)
    
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete resource by ID
    async deleteResource({ params }, res) {
        try {
          const deletedResource = await Resource.findOneAndDelete({ _id: params.resourceId })
    
          if (!deletedResource) {
            return res.status(400).json({ message: "Can't find resource with that ID!" });
          }
    
          res.json({ message: 'Resource successfully deleted!' })
    
        } catch(err) {
            return res.status(500).json(err)
        }
        
    },

    // add comment to resource
    async addComment({ body, params }, res) {
        try {
            const updatedResource = await Resource.findOneAndUpdate(
                { _id: params.resourceId },
                { $addToSet: { comments: body } },
                { runValidators: true, new: true }
            )

            if (!updatedResource) {
                return res.status(400).json({ message: "Can't find resource with that ID!" });
            }

            res.json(updatedResource)
    
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete single comment from resource
    async deleteComment({ params }, res) {
        try {
            const updatedResource = await Resource.findOneAndUpdate(
                { _id: params.resourceId },
                { $pull: { comments: { commentId: params.commentId } } },
                { new: true }
            )

            if (!updatedResource) {
                return res.status(400).json({ message: "Can't find resource with that ID!" });
            }

            res.json({ message: 'Comment successfully deleted!' })
    
        } catch(err) {
            res.status(500).json(err);
        }
    },
}