class CreateComputerMoves < ActiveRecord::Migration[6.1]
  def change
    create_table :computer_moves do |t|
      t.references :game_stat, null: false, foreign_key: true
      t.integer :move

      t.timestamps
    end
  end
end
