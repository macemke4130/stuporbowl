import express from "express";
import compression from "compression";
import path from "path";
import api from "./api.js";

const __dirname = path.resolve();
const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api);

app.use(express.static(path.join(__dirname, "dist")));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "dist", "not-found.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "dist"));
});

// const port = process.env.PORT || 3000;
const port = 3000;

app.listen(port, () => {
  console.log(`\n ❤️  Server listening on port: ${port} ❤️ \n`);
});

export default app;
