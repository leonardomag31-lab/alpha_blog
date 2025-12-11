// Import and register all your controllers from the importmap via controllers/**/*_controller
import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

const application = Application.start()

const context = require.context(".", true, /\.js$/)
application.load(definitionsFromContext(context))