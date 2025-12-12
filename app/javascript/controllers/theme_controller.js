import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.options = this.element.querySelectorAll(".theme-option")
    this.options.forEach(button => {
      button.addEventListener("click", this.setTheme.bind(this))
    })

    // Inicializa o ícone de acordo com o tema atual
    this.updateIcon(this.getCurrentTheme())
  }

  setTheme(event) {
    const theme = event.currentTarget.dataset.theme

    if (theme === "light") {
      document.documentElement.setAttribute("data-bs-theme", "light")
    } else if (theme === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-bs-theme")
    }

    this.updateIcon(theme)
  }

  updateIcon(theme) {
    const icon = document.getElementById("theme-icon")
    if (!icon) return

    // Ícones de Sol/Lua/Auto
    icon.textContent = theme === "light" ? "☀️"
                     : theme === "dark"  ? "🌑"
                     : "⚪"
  }

  getCurrentTheme() {
    if (document.documentElement.getAttribute("data-bs-theme") === "light") return "light"
    if (document.documentElement.getAttribute("data-bs-theme") === "dark") return "dark"
    return "auto"
  }
}
