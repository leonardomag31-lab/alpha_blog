Rails.application.routes.draw do
  # Rota principal
  root "pages#home"

  # Páginas estáticas
  get "home", to: "pages#home"
  get "about", to: "pages#about"

  # Recursos de artigos
  resources :articles

  # Comentados - PWA / health check
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
end
