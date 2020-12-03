json.array! @products do |product| 
    json.extract! product, :id, :seller_id, :product_type, :name, :price
    json.product_image_url url_for(product.product_image)
end