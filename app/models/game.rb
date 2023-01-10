class Game < ApplicationRecord
  belongs_to :user
  has_many :winning_boards
  has_many :game_stats
  has_many :player_moves
  has_many :computer_moves
end
