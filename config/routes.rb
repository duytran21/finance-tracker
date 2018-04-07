Rails.application.routes.draw do
  
  resources :categories
  devise_for :users, :controllers => {
                        :registrations => 'user/registrations',
  }


  resources :user_stocks, except: [:show, :edit, :update]
  resources :users, only: [:show, :index, :edit, :update] do
    resources :articles, only: [:new]
  end
  resources :articles, except: [:new]
  resources :friendships
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'

  get 'my_portfolio', to: "users#my_portfolio"

  get 'search_stocks', to: "stocks#search"

  get 'my_friends', to: "users#my_friends"

  get 'search_friends', to: "users#search"

  post 'add_friend', to: "users#add_friend"

  get 'blogs', to: "articles#blogs"

  get 'myposts', to: "articles#myposts"

  #resources :users do
  #  resources :articles
  #end
  
end
