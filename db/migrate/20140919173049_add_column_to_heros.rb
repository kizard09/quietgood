class AddColumnToHeros < ActiveRecord::Migration
  def change
    add_column :heros, :secondimage, :string
  end
end
