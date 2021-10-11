Rails.application.routes.draw do
  resources :students
  resources :breakout_rooms
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
