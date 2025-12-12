// TODO: set up a server
// installed express, pg and dotenv and cors in server
// imports
import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";
import { db } from "./dbConnection.js";

// configs
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

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
// app.get("/guestbook", (req, res) => {
//   res.json({
//     message:
//       "This is the READ / GET root route - replace the action here later",
//   });
// });
// this message is showing ok in localhost:8080/guest-book

// change GET route to get an array from the guestbook rather than a message - taken fro chat GPT to resolve one of my errors, since the for Each function was not working as I didn't have an array
app.get("/guestbook", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM guestbook ORDER BY date DESC");
    res.json(result.rows); // send the array directly
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// this worked but it doesn't actually link to database - copied below one instead from demo...
// // TODO: a route to POST data from database
// // this route will allow data submitted in the form to go into the data base
// app.post("/guestbook", (req, res) => {
//   console.log({
//     status:
//       "Guest book entry submitted successfully - change this action later",
//   });
// });

//TODO: CREATE data using the form values from the client to send it to the database
app.post("/guestbook", (req, res) => {
  //receive the data from the client
  const newEntry = req.body.formValues;
  console.log(newEntry);
  //query the database to insert the data into the staff table
  //we use parameters in SQL to protect the data and to reuse the query
  const query = db.query(
    `INSERT INTO guestbook (name, location, date, comment) VALUES ($1, $2, $3, $4)`,
    [newEntry.name, newEntry.location, newEntry.date, newEntry.comment]
  );
  res.json({ status: "success", values: newEntry });
});

// YES the form entries are appearing in terminal and in the database!!!
