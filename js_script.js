/* =========================================
   Week 8 Final Project JavaScript
========================================= */

/* -------------------------------
   Button Interaction on Home Page
---------------------------------- */
const homeButton = document.getElementById("homeButton");
if (homeButton) {
  homeButton.addEventListener("click", () => {
    alert("You clicked the Home button!");
  });
}

/* -------------------------------
   Form Validation on Contact Page
---------------------------------- */
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formFeedback.style.color = "red";
      formFeedback.textContent = "Please fill in all fields.";
      return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      formFeedback.style.color = "red";
      formFeedback.textContent = "Please enter a valid email.";
      return;
    }

    formFeedback.style.color = "green";
    formFeedback.textContent = "Message sent successfully!";
    contactForm.reset();
  });
}
