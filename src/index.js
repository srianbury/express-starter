import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./routes";

const app = express();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/example", routes.example);
app.get("*", (req, res) => {
  return res.status(301).json({ result: "Route not found." });
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
