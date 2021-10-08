Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users do
      resources :user_punchcard do
        resources :restaurants do
          resources :punchcards do
            resources :rewards 
        end
      end
    end
  end
    get 'restaurants/all', to: 'restaurants#all'
    get 'punchcards/all', to: 'punchcards#all'
    get 'user/:id/punchcard_by_user', to: 'punchcards#punchcard_by_user'
    delete 'users/:id', to: 'users#delete'
    get 'rewards', to: 'user_punchcard#show_rewards'
    get '/earn/:userpunchcard_id', to: 'user_punchcard#show'
    get '/employee', to: 'user_punchcard#view_customers'
  end
  
end
         