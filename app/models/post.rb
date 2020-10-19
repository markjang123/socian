validates :author_id, :body, :title, presence: true
class Post < ApplicationRecord
    belongs_to :author, 
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end
