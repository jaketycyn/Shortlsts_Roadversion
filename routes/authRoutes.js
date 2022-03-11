import express from "express";
import {
  registerUser,
  loginUser,
  updateUser,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

const authRouter = express.Router();

authRouter.route("/register").post(registerUser);
authRouter.route("/login").post(authenticateUser, loginUser);
authRouter.route("/updateUser").patch(authenticateUser, updateUser);

export default authRouter;
