import express from "express";
import UserController from "../controllers/UserController";
import { isLoggedIn } from "../middlewares/authenticate";
import {
  registerUserValidator,
  loginUserValidator,
} from "../middlewares/userValidations";

const userRouter = express.Router();

userRouter.post("/register", registerUserValidator, UserController.register);
userRouter.post("/login", loginUserValidator, UserController.login);

export default userRouter;
