Rails.application.routes.draw do
  #
  # Mount ember apps. keep this on top
  #
  mount_ember_app :frontend, to: '/'

  #
  # API
  #
  resources :companies
end
