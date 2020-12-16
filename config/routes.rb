Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show] do 
        resources :albums, only: [:index]
    end
    resources :albums, only: [:index, :show]
    resources :follows, only: [:index, :create, :show, :destroy]
    resources :likes, only: [:index, :create, :show, :destroy]
    resource :session, only: [:create, :destroy]
    get 'search', to: 'search#index'
  end
end
