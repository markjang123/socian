class Track < ApplicationRecord
    validates :album_id, :title, :length, presence: true

    belongs_to :album,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Album
    has_many :likes, 
        as: :likeable
    has_many :likers,
        through: :likes,
        source: :liker
end
