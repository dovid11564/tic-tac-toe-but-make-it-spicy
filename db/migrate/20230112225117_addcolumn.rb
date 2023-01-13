class Addcolumn < ActiveRecord::Migration[6.1]
  def change
    add_column :winning_boards, :boards, :string

  end
end
