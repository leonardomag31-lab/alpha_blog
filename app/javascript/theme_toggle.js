document.addEventListener("DOMContentLoaded", () => {
  const html = document.getElementById("html-root");
  const icon = document.getElementById("theme-icon");

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
    if (!icon) return;
    const icons = {
      light: "bi bi-sun",
      dark: "bi bi-moon-stars",
      auto: "bi bi-circle-half"
    };
    icon.className = icons[theme];
  }

  function applyTheme(theme) {
    if (!html) return;
    const finalTheme = theme === "auto" ? getPreferredTheme() : theme;
    html.setAttribute("data-bs-theme", finalTheme);
    setIcon(theme);
  }

  // Inicializa
  const stored = getStoredTheme() || "auto";
  applyTheme(stored);

  // Atualiza automaticamente quando o sistema muda (só se estiver em auto)
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (getStoredTheme() === "auto") applyTheme("auto");
  });

  // Botões do dropdown
  document.querySelectorAll(".theme-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-theme"); // "light", "dark" ou "auto"
      localStorage.setItem("theme", selected);
      applyTheme(selected);
    });
  });
});
