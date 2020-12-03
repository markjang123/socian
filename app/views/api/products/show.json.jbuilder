json.extract! product, :id, :seller_id, :name, :price
json.product_image_url url_for(product.product_image)