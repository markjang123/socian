# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "demoUser", password_digest: "$2a$12$JT98UKjUzhLIwE8Wbo3/EO.NRF43w9CT1b62c8ZSw7q6TR9uMIB8C", email: "demo@user.com", user_type: "fan")