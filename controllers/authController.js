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
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  res.send("loginUser");
};
const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { registerUser, loginUser, updateUser };
