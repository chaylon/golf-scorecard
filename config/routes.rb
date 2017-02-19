Rails.application.routes.draw do
  devise_for :users

  resources :courses, only: [:index]
  authenticated :user do
    root "courses#index"
  end

  root "courses#index"

end
