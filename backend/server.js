import express from "express";
import dotenv from "dotenv/config";
import scoreboardRoutes from "./routes/scoreboardRoutes.js";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/scoreboard", scoreboardRoutes);

app.get("/", (req, res) => res.send("SErver is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
