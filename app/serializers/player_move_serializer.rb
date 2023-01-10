class PlayerMoveSerializer < ActiveModel::Serializer
  attributes :id, :move
  has_one :game_stat
end
