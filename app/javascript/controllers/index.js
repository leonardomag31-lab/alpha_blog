// Import and register all your controllers from the importmap via controllers/**/*_controller
import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Carrega automaticamente todos os controllers no diretório atual
const context = require.context(".", true, /_controller\.js$/)
context.keys().forEach((key) => {
  application.register(
    key.replace("./", "").replace("_controller.js", ""),
    context(key).default
  )
})