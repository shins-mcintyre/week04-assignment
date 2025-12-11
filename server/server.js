// TODO: set up a server
// installed express, pg and dotenv and cors in server
// imports
import express from "express";

// unsure if we need pg and dotenv here, or just in db connection?
// import pg from "pg";
// import dotenv from "dotenv";
import cors from "cors";

// configs
dotenv.config();

const app = express();
app.use(express.json());

// port
const PORT = 8080;
app.listen(PORT, function () {
  console.info(`Server is running in port ${PORT} for your assignment`);
});

// root route - check that it is working - READ a startup message
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to the server for your assignment - everything is good to go!",
  });
});

// port message appears in terminal and startup message appears in localhost:8080 - all good so far
// =====================

// TODO: a route to READ data from database

// this route will read data from the guestbook to feedback to the client - will this be needed to show the results on the page after submission?
app.get("/guestbook", (req, res) => {
  res.json({
    message:
      "This is the READ / GET root route - replace the action here later",
  });
});
// this message is showing ok in localhost:8080/guest-book

// TODO: a route to POST data from database
// this route will allow data submitted in the form to go into the data base
app.post("/guestbook", (req, res) => {
  console.log({
    status:
      "Guest book entry submitted successfully - change this action later",
  });
});
