const { Schema, model, Types } = require('mongoose');

// Schema to create comment 
const commentSchema = new Schema(
    {
      commentId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      comment: {
        type: String,
        required: true,
        maxLength: 5000,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleString('en-US')
      },
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
);

// Schema to create Thought model
const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        content: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 10000,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => new Date(timestamp).toLocaleString('en-US')
        },
        username: {
            type: String,
            required: true,
        },
        comments: [commentSchema],
    },
    {
        toJSON: {
        virtuals: true,
        getters: true,
        },
        id: false,
    }
);

postSchema
.virtual('commentCount')
.get(function () {
    return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = Post;