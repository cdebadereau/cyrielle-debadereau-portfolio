document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("mouseenter", () => {
    project.classList.add("hover");
  });
  project.addEventListener("mouseleave", () => {
    project.classList.remove("hover");
  });
});
