class AddTypeToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :type, :string
    add_column :posts, :album_id, :integer
    add_column :posts, :date, :string
    remove_column :posts, :title
  end
end
