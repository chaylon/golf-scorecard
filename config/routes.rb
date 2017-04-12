Rails.application.routes.draw do
  devise_for :users

  resources :courses, only: [:index, :show]
  resources :scorecards, only: [:index, :show, :new]
  resources :users, only: [:show]

  authenticated :user do
    root "courses#index"
  end

  get '/new' => 'news#index'
  root "courses#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :scorecards, only: [:index, :create]
      resources :scores, only: [:create]
      resources :courses, only: [:index, :show, :create] do
        resources :holes, only: [:create]
        collection do
          get 'filter'
        end
      end
    end
  end
end
