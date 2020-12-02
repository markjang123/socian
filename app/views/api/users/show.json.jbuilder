
    json.extract! @user, :id, :username, :user_type, :description, :location, :albums, :followers
    json.profile_image_url url_for(@user.profile_image)
    json.banner_image_url url_for(@user.banner_image) 
