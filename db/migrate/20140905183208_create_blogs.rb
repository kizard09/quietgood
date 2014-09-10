class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :name
      t.date :date
      t.text :post

      t.timestamps
    end
  end
end
