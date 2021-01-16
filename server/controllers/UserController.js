import jwt from "jsonwebtoken";
import { hashPassword, verifyPassword } from "../helpers/encrypt";
import {
  successResponse,
  successResponseWithToken,
  errorResponse,
} from "../helpers/responseUtil";
import Model from "../models";
import "babel-polyfill";

require("dotenv").config();
const { User } = Model;

class UserController {
  static async register(req, res, next) {
    try {
      const { firstName, lastName, email, password, role } = req.body;
      const hashedPassword = hashPassword(password);
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        role,
        password: hashedPassword,
      });

      const returnData = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role,
      };
      successResponse(res, 201, returnData);
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, role, password } = req.body;
      const user = await User.findOne({
        where: { email: email.toLowerCase() },
      });

      if (!user) return errorResponse(res, 400, "email or password is invalid");
      const confirmPassword = verifyPassword(password, user.password);
      if (!confirmPassword)
        return errorResponse(res, 400, "email or password is invalid");

      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.SECRET,
        { expiresIn: process.env.TOKEN_EXPIRATION }
      );
      return successResponseWithToken(
        res,
        200,
        "login successful",
        user,
        token
      );
    } catch (err) {
      next(err);
    }
  }
}

export default UserController;
