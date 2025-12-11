console.log("hello world");

// TODO: collect users data and send to the server

const guestForm = document.getElementById("guestbook");
// console.log(guestForm);

// submit event to collect users data
function handleGuestSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(guestForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);

  // fetch the POST server route
  fetch("http://localhost:8080/guestbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

guestForm.addEventListener("submit", handleGuestSubmit);

// !Once you are finished your projct, replace your localhost url with the deployed server url from Render

// ======================================

// TODO: render user's data on the interface

// fetch the GET route from the server

// render the data using DOM elements (one piece per data)
