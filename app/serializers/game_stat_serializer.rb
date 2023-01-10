class GameStatSerializer < ActiveModel::Serializer
  attributes :id
  has_one :game
end
