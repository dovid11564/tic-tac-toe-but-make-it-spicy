class GamesController < ApplicationController
  def show
     
    game = [[0], [1], [2], [3], [4], [5], [6], [7], [8]]
    render json: game, status: :created
  end
end
