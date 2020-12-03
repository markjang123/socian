class Product < ApplicationRecord
    belongs_to :seller,
        primary_key: :id,
        foreign_key: :seller_id,
        class_name: :User
    has_one_attached :product_image

end
