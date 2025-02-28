document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("mouseenter", () => {
    project.classList.add("hover");
  });
  project.addEventListener("mouseleave", () => {
    project.classList.remove("hover");
  });
});

// Footer Copy Button
function copyEmail() {
  const emailAddress = document.getElementById("email-address").innerHTML;
  navigator.clipboard
    .writeText(emailAddress)
    .then(() => {
      alert("Email copiato!");
    })
    .catch((err) => {
      console.error("Errore", err);
    });
}
