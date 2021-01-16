import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import router from "./routes/routerIndex.js";

const app = express();

const port = process.env.PORT || 8000;
app.set("port", port);

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

export default app;
