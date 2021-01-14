import cors from "cors";
import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
// Allow backend to access .env file
config();

const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const routes = require("./routes");

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../dist")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
  });
}

// TODO : API routes
app.get("/", (req, res) => {
  res.json({
    first: "Bob",
    last: "Billy",
    message: "Hello there",
  });
});

app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
