class CreateWinningBoards < ActiveRecord::Migration[6.1]
  def change
    create_table :winning_boards do |t|
      t.references :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
