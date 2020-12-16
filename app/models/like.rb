class Like < ApplicationRecord
    validates :liker_id, uniqueness: {scope: [:likeable_id, :likeable_type]}
    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User
    belongs_to :likeable, polymorphic: true
end
