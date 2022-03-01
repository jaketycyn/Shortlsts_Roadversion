import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const registerUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ user });
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
