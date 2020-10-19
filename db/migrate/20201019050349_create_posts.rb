class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|  
      t.integer :author_id, null:false
      t.text :body, null:false
      t.string :title, null:false
      t.timestamps
    end
    add_index :posts, :title
    add_index :posts, :author_id
  end
end
