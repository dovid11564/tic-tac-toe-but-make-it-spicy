class GamesController < ApplicationController

    def show
        game = ["", "", "", "", "", "", "", "", ""]
        render json: game, status: :created 
    end
end
