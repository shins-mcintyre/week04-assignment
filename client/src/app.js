console.log("hello world");

// set up
// import express from "express";
// import cors from "cors";
// const app = express();
// app.use(cors());
// app.use(express.json());

// update links to render
// const clientUrl = "https://week04-assignment-server-1jmp.onrender.com";
const serverUrl = "https://week04-assignment-server-1jmp.onrender.com";

// TODO: collect users data and send to the server

const guestForm = document.getElementById("guestbook");
// console.log(guestForm);
const dataOutput = document.getElementById("data-output");

// submit event to collect users data
async function handleGuestSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(guestForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log("Submitting:", formValues);

  // fetch the POST server route - this connects client to server
  await fetch(`${serverUrl}/guestbook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  // Advice from chat gpt: Refresh the displayed list after submitting
  await loadGuestbook();
}

// when the form is submitted, the function above triggers and data is put into the database and the guestbook is loaded within that function
guestForm.addEventListener("submit", handleGuestSubmit);

// ======================================

// TODO: render user's data on the interface

async function loadGuestbook() {
  // fetch the GET route from the server (apparently cannot include body in GET response?)
  const response = await fetch(`${serverUrl}/guestbook`);
  // data is the json version of what is fetched (the response)
  const rows = await response.json();
  console.log("Fetched entries:", rows);
  renderData(rows);
  // return data;
}

// render the data using DOM elements (one piece per data)
function createData(rows) {
  // select the element where the data will go
  // add blank text to the element
  dataOutput.innerHTML = `${entry.name}`;
  guestForm.appendChild(dataOutput);
}

async function renderData() {
  const entryData = await loadGuestbook();
  createData(entryData);
}

renderData();

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
