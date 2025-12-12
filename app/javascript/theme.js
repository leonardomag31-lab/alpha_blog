function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getStoredTheme() {
  return localStorage.getItem("theme");
}

function getPreferredTheme() {
  const stored = getStoredTheme();

  if (stored === "light" || stored === "dark") return stored;

  return systemPrefersDark() ? "dark" : "light";
}

function setIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;

  const icons = {
    light: "bi bi-sun",
    dark: "bi bi-moon-stars",
    auto: "bi bi-circle-half"
  };

  icon.className = icons[theme];
}

function applyTheme(theme) {
  const html = document.getElementById("html-root");
  const finalTheme = theme === "auto" ? getPreferredTheme() : theme;

  html.setAttribute("data-bs-theme", finalTheme);
  setIcon(theme);
}

document.addEventListener("DOMContentLoaded", () => {
  const stored = getStoredTheme() || "auto";
  applyTheme(stored);

  // Atualiza automaticamente quando o sistema muda (somente se estiver em auto)
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (getStoredTheme() === "auto") {
      applyTheme("auto");
    }
  });

  // Ativando os botões do dropdown
  document.querySelectorAll(".theme-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-theme");
      localStorage.setItem("theme", selected);
      applyTheme(selected);
    });
  });
});
