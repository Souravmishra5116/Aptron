import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/config.js";
import router from "./routes/authRoute.js";
import cors from "cors"; //import cors

const app = express();

// configure env
dotenv.config();
//database configure
connectDb();
//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api/v1/auth", router);
//PORT
const PORT = process.env.PORT || 8000;

//REST API
app.get("/", (req, res) => {
  res.send({ message: "welcome to ecommerce app" });
});
app.listen(PORT, () =>
  console.log(
    chalk.bgBlue.white.bold(
      `server is running on ${process.env.DEV_MODE} mode ${PORT}`
    )
  )
);
