import express from "express";
import cors from "cors";
import api from "./routes/api.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// using the routes - just having only one endpoint lol
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("do the request to /api endpoint");
});

app.listen(3000, (err) => {
  if (!err) {
    console.log("Server is running on port 3000");
  } else {
    console.error(err);
  }
});
