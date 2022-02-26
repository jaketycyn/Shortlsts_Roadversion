import User from "../models/User.js";

const registerUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }

  res.send("registerUser");
};
const loginUser = async (req, res) => {
  res.send("loginUser");
};
const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { registerUser, loginUser, updateUser };
