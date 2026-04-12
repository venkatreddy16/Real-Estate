document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-bar]").forEach((bar) => {
    bar.style.width = `${bar.getAttribute("data-bar")}%`;
  });
});
