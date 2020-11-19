albums = json.array! @albums do |album| 
    json.extract! album, :id, :title
    json.artist album.artist
end
users = json.array! @users do |user| 
    json.extract! user, :id, :username
end

