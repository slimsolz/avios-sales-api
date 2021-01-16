import express from "express";
import { errorResponse, successResponse } from "../helpers/responseUtil";
import userRouter from "./usersRoute";
import productRouter from "./productsRoute";

const router = express.Router();

router.get("/", (req, res) => {
  successResponse(res, 200, null);
});

router.use("/auth", userRouter);
router.use("/", productRouter);

router.all("*", (req, res) => {
  errorResponse(res, 404, "404 Page not found");
});

export default router;
