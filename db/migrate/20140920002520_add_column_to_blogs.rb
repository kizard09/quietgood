class AddColumnToBlogs < ActiveRecord::Migration
  def change
    add_column :blogs, :location, :text
  end
end
