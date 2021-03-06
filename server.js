//! removed cors for now
import express from "express";
import morgan from "morgan";

const app = express();

import dotenv from "dotenv";
dotenv.config();

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// DB and authenticate user
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import listsRouter from "./routes/listsRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/build")));

// if (process.env.NODE_ENV !== "production") {
//   app.use(morgan("dev"));
// }

app.use(express.json());
// routes

// error middle-wares

// !has to be commented out when dev but comment in when building
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

app.get("/api/v1", (req, res) => {});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/lists", authenticateUser, listsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
