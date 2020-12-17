    json.extract! @user, :id, :username, :user_type, :description, :location, :albums, :followers, :likes_given, :tracks_liked, :posts, :facebook_link, :soundcloud_link, :tumblr_link, :youtube_link, :twitter_link
    json.products do 
        json.array! @user.products do |product|
            json.extract! product, :id, :seller_id, :name, :price, :category
            json.product_image_url url_for(product.product_image)
        end
    end
    json.followees do 
        json.array! @user.followees do |user|
            json.extract! user, :id, :username, :user_type, :location
            json.profile_image_url url_for(user.profile_image)
        end
    end
    json.albums_liked do 
        json.array! @user.albums_liked do |album|
            json.extract! album, :id, :title, :artist_id
            json.photoUrl url_for(album.cover)
            json.artist album.artist
            json.tracks album.tracks
        end
    end 
    json.profile_image_url url_for(@user.profile_image)
    json.banner_image_url url_for(@user.banner_image) 

