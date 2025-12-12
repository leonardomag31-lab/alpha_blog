import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.options = this.element.querySelectorAll(".theme-option")
    this.options.forEach(button => {
      button.addEventListener("click", this.setTheme)
    })
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

    // Atualiza o ícone do botão
    const icon = document.getElementById("theme-icon")
    if (icon) {
      icon.className = theme === "light" ? "bi bi-sun"
                   : theme === "dark" ? "bi bi-moon-stars"
                   : "bi bi-circle-half"
    }
  }
}
