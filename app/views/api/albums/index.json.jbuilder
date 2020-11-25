json.array! @albums do |album| 
    json.extract! album, :id, :title, :artist_id
    json.photoUrl url_for(album.cover)
    json.artist album.artist
    json.tracks album.tracks
end