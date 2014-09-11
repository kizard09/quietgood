class CreateHeros < ActiveRecord::Migration
  def change
    create_table :heros do |t|
      t.string :name
      t.string :image
      t.text :description
      t.timestamps
    end
  end
end
