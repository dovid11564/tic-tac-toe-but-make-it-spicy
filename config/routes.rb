Rails.application.routes.draw do
  
  resources :computer_moves
  resources :player_moves
  resources :game_stats
  resources :winning_boards
  resources :games_tables
  resources :games
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
