class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :seller_id, null: false
      t.string :name, null:false
      t.string :category
      t.integer :price, null:false
      t.timestamps
    end
    add_index :products, :seller_id
  end
end
