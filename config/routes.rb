Rails.application.routes.draw do
  devise_for :users

  resources :courses, only: [:index]
  authenticated :user do
    root "courses#index"
  end

  root "courses#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :scorecards, only: [:index, :create]
      resources :scores, only: [:create]
      resources :courses, only: [:index, :show, :create] do
        resources :holes, only: [:create]
      end
    end
  end
end
