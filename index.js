const PORT = 8000;
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const response = await fetch(
    "https://fake-authentication1.p.rapidapi.com/api/v1/authentication/register",
    {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Host": "fake-authentication1.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_X_RAPIDAPI_API_KEY}`,
      },
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  res.json(response);
});

app.listen(8000, () => console.log("Server is running on port " + PORT));
