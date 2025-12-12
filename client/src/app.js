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

// submit event to collect users data
async function handleGuestSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(guestForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);

  // fetch the POST server route - this connects client to server
  await fetch(`${serverUrl}/guestbook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

// fetch("https://week04-assignment-server-1jmp.onrender.com/guestbook", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ formValues }),
// });

guestForm.addEventListener("submit", handleGuestSubmit);

// !Once you are finished your projct, replace your localhost url with the deployed server url from Render

// ======================================

// TODO: render user's data on the interface

async function loadGuestbook() {
  // fetch the GET route from the server (apparently cannot include body in GET response?)
  const response = await fetch(`${serverUrl}/guestbook`);
  // data is the json version of what is fetched (the response)
  const data = await response.json();
  console.log(data);
  renderData(data);
}

// // render the data using DOM elements (one piece per data)
// function renderData(rows) {
//   // select the element where the data will go
//   const dataOutput = document.getElementById("data-output");
//   // add blank text to the element
//   dataOutput.innerHTML = "";

//   // create a loop so each value in the table is added to the page
//   rows.forEach((entry) => {
//     // for each submission or row, create a div, give it a class name, add text to it and append it
//     const item = document.createElement("div");
//     item.classList.add("guest-entry");
//     item.innerHTML = `
//     <p><strong>${entry.name}</strong> from ${entry.location}</p>
//     <p>${entry.comment}</p>
//     <p><i>${entry.date}</i></p>
// `;

//     dataOutput.appendChild(item);
//   });
// }

// // load up entries when window is opened:
// window.addEventListener("DOMContentLoaded", loadGuestbook);
