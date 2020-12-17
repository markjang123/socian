albums = json.array! @albums do |album| 
    json.extract! album, :id, :title, :genre
    json.artist album.artist
    json.photoUrl url_for(album.cover)
end
users = json.array! @users do |user| 
    json.extract! user, :id, :username, :user_type 
    json.profile_image url_for(user.profile_image)

    # json.profile_image_url url_for(@user.profile_image)
end

