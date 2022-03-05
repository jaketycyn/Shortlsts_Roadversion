import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

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
  const user = await User.findOne({ email });
  if (!user) {
    //purposely vague info to user for security reasons
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  console.log(user);

  // add back in later with proper password encryption/checking
  // const isPasswordCorrect = await user.comparePassword(password);
  // if (!isPasswordCorrect) {
  //   throw new UnAuthenticatedError("Invalid Credentials");
  // }
  res.status(StatusCodes.OK).json({ user });
};
const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { registerUser, loginUser, updateUser };
