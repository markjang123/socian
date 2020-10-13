class AddConstraintToType < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :type, :string, null: false
  end
end
