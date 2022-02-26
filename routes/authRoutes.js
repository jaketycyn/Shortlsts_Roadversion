import express from "express";
import {
  registerUser,
  loginUser,
  updateUser,
} from "../controllers/authController.js";

const router = express.Router();

router.route("/registerUser").post(registerUser);
router.route("/loginUser").post(loginUser);
router.route("/updateUser").patch(updateUser);

export default router;
