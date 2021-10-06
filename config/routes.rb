Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # devise_for :users, :controllers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users do
      resources :restaurants do
        resources :punchcards do
          resources :rewards 
        end
      end
    end
  end

    get 'things', to: 'things#index'
    get 'restaurants/all', to: 'restaurants#all'
  
    delete 'users/:id', to: 'users#delete'

end
