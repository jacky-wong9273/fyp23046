// src/index.ts
import express from "express";
import bodyParser from "body-parser";

// create express app
const app = express();
const port = 3000;

/* Use body parser to propely decode body json */
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// default message indicating the api is running
app.get("/", (req, res) => {
  res.send("API is running.");
});

// start listening to http requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
