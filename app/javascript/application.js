// Importações principais
import "bootstrap";
import "@hotwired/turbo-rails";
import "./controllers";
import "./stylesheets/application.scss";
import "./theme_toggle"
// ============================
// Theme Switcher (Light/Dark/Auto)
// ============================

function applyTheme(theme) {
  const html = document.documentElement;

  if (theme === "auto") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    html.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
  } else {
    html.setAttribute("data-bs-theme", theme);
  }

  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.className =
      theme === "light" ? "bi bi-sun"
      : theme === "dark" ? "bi bi-moon-stars"
      : "bi bi-circle-half";
  }
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
}

document.addEventListener("turbo:load", () => {
  const savedTheme = localStorage.getItem("theme") || "auto";
  applyTheme(savedTheme);

  document.querySelectorAll(".theme-option").forEach(btn => {
    btn.addEventListener("click", () => {
      setTheme(btn.dataset.theme);
    });
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if ((localStorage.getItem("theme") || "auto") === "auto") {
      applyTheme("auto");
    }
  });
});
import * as bootstrap from "bootstrap"
