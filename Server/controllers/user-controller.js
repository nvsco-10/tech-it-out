// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single user by their username
  async getSingleUser({ user = null, params }, res) {
    try {
      const foundUser = await User.findOne({
        $or: [{ username: params.username }],
      })
        .populate('posts')
        .select('-__v')
  
      if (!foundUser) {
        return res.status(400).json({ message: 'Cannot find a user with this id!' });
      }
  
      res.json(foundUser);

    } catch(err) {
      return res.status(500).json(err)
    }

  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    try {
      const user = await User.create(body);

      if (!user) {
        return res.status(400).json({ message: 'Something is wrong!' });
      }
      const token = signToken(user);
      res.json({ token, user });

    } catch(err) {
      return res.status(500).json(err)
    }
    
  },
  // delete a user
  async deleteUser({ params }, res) {
    try {
      const deletedUser = await User.findOneAndDelete({ _id: params.id })

      if (!deletedUser) {
        return res.status(400).json({ message: "Can't find this user" });
      }

      res.json({ message: 'User successfully deleted!' })

    } catch(err) {
        return res.status(500).json(err)
    }
    
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({ username: body.username });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Incorrect username or password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  
};
