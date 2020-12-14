

    json.extract! @user, :id, :username, :user_type, :description, :location, :albums, :followers, :posts, :facebook_link, :soundcloud_link, :tumblr_link, :youtube_link, :twitter_link
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
    json.profile_image_url url_for(@user.profile_image)
    json.banner_image_url url_for(@user.banner_image) 

