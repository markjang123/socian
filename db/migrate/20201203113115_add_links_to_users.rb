class AddLinksToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :soundcloud_link, :string
    add_column :users, :facebook_link, :string
    add_column :users, :twitter_link, :string
    add_column :users, :youtube_link, :string
    add_column :users, :tumblr_link, :string
  end
end
