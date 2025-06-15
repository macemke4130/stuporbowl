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

router.post(`${apiRoute}/admin/jwt`, async (req, res) => {
  const tokenFromFrontEnd = req.body.token;

  let response = {};

  const auth = await jsonwebtoken.default.verify(tokenFromFrontEnd, privateKey, function (err, decoded) {
    if (err) {
      response = {
        message: "Invalid JWT",
        status: 401,
        data: { valid: false },
      };
    } else {
      response = {
        message: "Valid JWT",
        status: 200,
        data: { valid: true },
      };
    }

    res.json(response);
  });
});

router.get(`${apiRoute}/users/`, async (req, res) => {
  try {
    const sql = await query(`SELECT * FROM users;`);

    const response = {
      message: "All Users.",
      status: 200,
      data: sql,
    };

    res.json(response);
  } catch (e) {
    const response = {
      message: e.sqlMessage,
      status: e.errno,
      data: null,
    };

    res.json(response);
    console.log(e);
  }
});

router.get(`${apiRoute}/2026/racers`, async (req, res) => {
  try {
    const sql = await query(`SELECT * FROM year2026;`);

    const response = {
      message: "All registered racers for year 2026.",
      status: 200,
      data: sql,
    };

    res.json(response);
  } catch (e) {
    const response = {
      message: e.sqlMessage,
      status: e.errno,
      data: null,
    };

    res.json(response);
    console.log(e);
  }
});

router.post(`${apiRoute}/2026/register-racer`, async (req, res) => {
  const data = prepData(req.body);
  console.log(data);

  try {
    const sql = await query(`INSERT INTO year2026 (${data.columns}) VALUES (${data.marks})`, data.values);

    const response = {
      message: "Successfully registerd racer.",
      status: 200,
      data: sql,
    };

    res.json(response);
  } catch (e) {
    const response = {
      message: e.sqlMessage,
      status: e.errno,
      data: null,
    };

    res.json(response);
    console.log(e);
  }
});

export default router;
