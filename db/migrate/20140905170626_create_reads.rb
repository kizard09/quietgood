class CreateReads < ActiveRecord::Migration
  def change
    create_table :reads do |t|
      t.string :name
      t.string :book
      t.text :synopsis

      t.timestamps
    end
  end
end
