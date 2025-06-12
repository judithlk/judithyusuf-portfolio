document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.elements["name"].value;

  const message = document.getElementById("formMessage");
  message.classList.remove("hidden");
  message.textContent = `Thank you, ${name || "friend"}! Your message has been sent.`;

  this.reset();

  setTimeout(() => {
    message.classList.add("hidden");
  }, 5000);
});
