class GamesController < ApplicationController
  def show
    game = [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
    render json: game, status: :created
  end
end
