Rails.application.routes.draw do
  get 'pages/map'
  get 'pages/chat'
  get 'pages/search'
  devise_for :users
     root to: "pages#home"
     get 'pages/map', to: 'pages#map'
     get 'pages/chat', to: 'pages#chat'
     get 'pages/search', to: 'pages#search'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
