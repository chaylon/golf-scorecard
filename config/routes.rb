Rails.application.routes.draw do
  devise_for :users

  resources :courses, only: [:index]
  authenticated :user do
    root "courses#index"
  end

  root "courses#index"

  namespace :api do
    namespace :v1 do
      resources :courses, only: [:index, :show, :create]
    end
  end
end
