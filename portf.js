function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

function sendMessage(event) {
  event.preventDefault();

  document.getElementById("successMsg").innerText =
    "Message sent successfully! (Demo only)";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
