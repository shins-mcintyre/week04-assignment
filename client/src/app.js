console.log("hello world");

// set up
// import express from "express";
// import cors from "cors";
// const app = express();
// app.use(cors());
// app.use(express.json());

// update links to render
// const clientUrl = "https://week04-assignment-8por.onrender.com/";
const serverUrl = "https://week04-assignment-server-1jmp.onrender.com";
const localHost = "http://localhost:8080";

// TODO: collect users data and send to the server

const guestForm = document.getElementById("guestbook");
// console.log(guestForm);
// const dataOutput = document.getElementById("data-output");

// submit event to collect users data
async function handleGuestSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(guestForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log("Submitting:", formValues);

  // fetch the POST server route - this connects client to server
  await fetch(`${localHost}/guestbook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  // Advice from chat gpt: Refresh the displayed list after submitting
  await getGuestbookData();
}

// when the form is submitted, the function above triggers and data is put into the database and the guestbook is loaded within that function
guestForm.addEventListener("submit", handleGuestSubmit);

// ======================================

// TODO: render user's data on the interface

async function getAllEntries() {
  const response = await fetch(`${localHost}/guestbook`);
  const entries = await response.json();

  const container = document.getElementById("data-output");
  container.innerHTML = ""; // clear first

  entries.forEach((rows) => {
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("form-entry");

    entryDiv.innerHTML = `
      <h2>${rows.name}</h2>
      <p><strong>Description:</strong> ${rows.location || "No description"}</p>
      <p><strong>Visibility:</strong> ${rows.date}</p>
      <p><strong>Stars:</strong> ${rows.comment}</p>
      <hr>
    `;

    container.appendChild(entryDiv);
  });
}

getAllEntries();

// async function getGuestbookData() {
//   // fetch the GET route from the server (apparently cannot include body in GET response?)
//   const response = await fetch(`${localHost}/guestbook`);
//   // data is the json version of what is fetched (the response)
//   const rowsData = await response.json();
//   console.log("Fetched entries:", rows);
//   const name = rowsData.name;
//   const location = rowsData.location;
//   const date = rowsData.date;
//   const comment = rowsData.comment;
//   const outputText = `Name: ${name}
//     Location: ${location}
//     Date: ${date}
//     Comment: ${comment}`;

//   document.getElementById("data-output").textContent = outputText;

// renderData(rows);
// return data;
// }

// getGuestbookData();

// // render the data using DOM elements (one piece per data)
// function createData(rows) {
//   // select the element where the data will go
//   // add blank text to the element
//   dataOutput.innerHTML = `${entry.name}`;
//   guestForm.appendChild(dataOutput);
// }

// async function renderData() {
//   const entryData = await getGuestbookData();
//   createData(entryData);
// }

// renderData();

// clear old content - not sure I want to do this?
// dataOutput.innerHTML = "";

//   // make a loop to render each data point
//   rows.forEach((entry) => {
//     const item = document.createElement("div");
//     item.classList.add("guest-entry");
//     item.innerHTML = `
//       <p><strong>${entry.name}</strong> from ${entry.location}</p>
//       <p>${entry.comment}</p>
//       <p><i>${entry.date}</i></p>
//   `;

//     dataOutput.appendChild(item);
//   });
// }

// window.addEventListener("DOMContentLoaded", loadGuestbook);

// use that data to render the submissions on the site (into guestForm)

// render the data using DOM elements (one piece per data)
// function createData(rows) {
//   // select the element where the data will go
//   // add blank text to the element
//   dataOutput.innerHTML = `${entry.name}`;
//   guestForm.appendChild(dataOutput);

//   // control function to run the functions in order
//   async function renderData() {
//     const entryData = await loadGuestbook();
//     createData(entryData);
//   }

//   renderData();

//   //   // create a loop so each value in the table is added to the page
//   //   rows.forEach((entry) => {
//   //     // for each submission or row, create a div, give it a class name, add text to it and append it

//   //   });
// }

// // load up entries when window is opened:
// // window.addEventListener("DOMContentLoaded", loadGuestbook);
