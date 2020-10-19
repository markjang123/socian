class Album < ApplicationRecord
    validates :artist_id, :title, :release_date, presence: true
    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :User
end
