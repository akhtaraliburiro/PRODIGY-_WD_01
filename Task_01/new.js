document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    this.reset();
    document.getElementById("thank-you").classList.remove("hidden");
  });
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Elements
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  // Name validation
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Message validation
  if (message.value.trim() === "") {
    messageError.textContent = "Message cannot be empty.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Your message has been sent!";
    // Here you can add backend POST request logic
    document.getElementById("contactForm").reset();
  }
});
