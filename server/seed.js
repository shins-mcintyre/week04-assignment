// TODO:  Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.

// setup - not sure all of these are needed?
import express from "express";
import dotenv from "dotenv";
import pg from "pg";
dotenv.config();

export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// dummy data - the issue I am having with this is it is adding multiple rows with the same data when I run it
// asked chatGPT and I added a constraint in SQL called guestbook_unique to ensure name and date are unique, and added the on conflict do nothing below
db.query(
  `INSERT INTO guestbook (name, location, date, comment) VALUES ($1, $2, $3, $4)
  ON CONFLICT (name, date) DO NOTHING`,
  ["Martin", "Sweden", "12/12/2025", "Wow-ow-wee-wah"]
);
