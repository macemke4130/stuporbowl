import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();

// Secure redirect for produciton.
app.get("*", (req, res, next) => {
  if (req.headers.host.includes("localhost")) {
    next();
  } else {
    if (req.headers["x-forwarded-proto"] !== "https") {
      res.redirect(301, `https://www.stuporbowl.org${req.url}`);
    } else {
      next();
    }
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "not-found.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "public"));
});

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`\n ❤️  Server listening on port: ${port} ❤️ \n`));

export default app;
