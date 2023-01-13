# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding winning boards"

WinningBoard.delete_all

w1 = WinningBoard.create!(game_id: boards: "0, 1, 2" )
w2 = WinningBoard.create!(game_id: boards: "3, 4, 5" )
w3 = WinningBoard.create!(game_id: boards: "6, 7, 8" )
w4 = WinningBoard.create!(game_id: boards: "0, 3, 6" )
w5 = WinningBoard.create!(game_id: boards: "1, 4, 7" )
w6 = WinningBoard.create!(game_id: boards: "2, 5, 8" )
w7 = WinningBoard.create!(game_id: boards: "0, 4, 8" )
w8 = WinningBoard.create!(game_id: boards: "2, 4, 6" )

puts "finished seeding"