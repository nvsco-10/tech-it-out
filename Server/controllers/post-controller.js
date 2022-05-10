const Post = require('../models/Post');
const User = require('../models/User');

module.exports = {

    async createPost({ user, body }, res) {

        try {
        const newPost= await Post.create(body)
        console.log(newPost)

        if (!newPost) {
            return res.status(400).json({ message: 'Something went wrong' });
        }

        res.json(newPost)

        // const updatedUser = await User.findOneAndUpdate(
        //     // { _id: user._id },
        //     { _id: "6279ad281dfd742007c63ecc" },
        //     { $addToSet: { posts: newPost._id } },
        //     { new: true }
        // )
        
        // if(!updatedUser) {
        //     return res.status(400).json({ message: 'Cannot find a user with this id!' });
        // }

        // res.json(updatedUser);

        } catch (err) {
        return res.status(400).json(err);
        }
    },
}