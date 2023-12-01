console.log("Its working");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("blue");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "css/default.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "css/blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "css/green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "css/purple.css";
  }

  localStorage.setItem("theme", mode);
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Fetch form data
  var formData = new FormData(this);

  // Send form data to the server
  fetch(this.action, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Handle the response from the server if needed
    return response.text();
  })
  .then(data => {
    console.log('Form data sent successfully:', data);
    // You can display a success message or redirect the user here
  })
  .catch(error => {
    console.error('Error sending form data:', error);
    // You can display an error message to the user here
  });
});
