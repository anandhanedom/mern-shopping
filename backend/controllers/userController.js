import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// @desc    Authenticate user & get token
// @route   POST api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const { _id, isAdmin, name, email } = user;
    res.status(200).json({ _id, name, email, isAdmin, token: null });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export { authUser };
