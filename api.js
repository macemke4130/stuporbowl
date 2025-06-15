import express from "express";
import { query, apiRoute, prepData } from "./dbConnect.js";
import { publicIpv4 } from "public-ip";
import { UAParser } from "ua-parser-js";
import config from "./config/index.js";

import * as jsonwebtoken from "jsonwebtoken";

const privateKey = config.keys.jwt;

const router = express.Router();

// Secure redirect for produciton.
router.get("*", (req, res, next) => {
  console.log(req.headers.host);
  if (req.headers.host.includes("localhost") || req.headers.host.includes("192")) {
    next();
  } else {
    if (req.headers["x-forwarded-proto"] !== "https") {
      res.redirect(301, `https://www.stuporbowl.org${req.url}`);
    } else {
      next();
    }
  }
});

router.get(`${apiRoute}/greet/`, async (req, res) => {
  const response = {
    message: "Greeting.",
    status: 200,
    data: "Hello, Mace!",
  };

  res.json(response);
});

export default router;
