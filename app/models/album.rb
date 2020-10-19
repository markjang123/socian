class Album < ApplicationRecord
    validates :artist_id, :title, :release_date, presence: true
    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :User
    has_many :tracks,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Track
    has_one_attached :cover
end
