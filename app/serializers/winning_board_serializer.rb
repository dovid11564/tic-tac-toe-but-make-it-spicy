class WinningBoardSerializer < ActiveModel::Serializer
  attributes :id
  has_one :game
end
