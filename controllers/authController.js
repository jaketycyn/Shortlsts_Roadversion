import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new BadRequestError("Please provide all values");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      throw new BadRequestError("Email already in use");
    }

    const user = await User.create({ name, email, password });

    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({
      user: { email: user.email, name: user.name },
      token,
    });
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
