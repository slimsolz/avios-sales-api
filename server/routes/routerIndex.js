import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("welcome");
});

router.all("*", (req, res) => {
  errorResponse(res, 404, "404 Page not found");
});

export default router;
