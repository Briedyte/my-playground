const PORT = 8000;
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const headers = {
  "content-type": "application/json",
  "X-RapidAPI-Host": "fake-authentication1.p.rapidapi.com",
  "X-RapidAPI-Key": `${process.env.REACT_APP_X_RAPIDAPI_API_KEY}`,
};

const baseUrl =
  "https://fake-authentication1.p.rapidapi.com/api/v1/authentication/";

app.post("/register", async (req, res) => {
  const response = await fetch(`${baseUrl}"register"`, {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: headers,
  })
    .then((result) => result.json())
    .catch((e) => e);

  res.json(response);
});

app.post("/login", async (req, res) => {
  const response = await fetch(`${baseUrl}login`, {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: headers,
  })
    .then((result) => result.json())
    .catch((e) => e);

  res.json(response);
});

app.listen(PORT, () => console.log("Server is running on port " + PORT));
