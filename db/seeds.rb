require 'faker'

User.destroy_all
Photo.destroy_all

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#  USERS
users = [
  User.create({username: 'guest_user', password: 'password'}),
  User.create({username: 'rickandmorty', password: 'password'}),
  User.create({username: 'cheesesteak', password: 'password'}),
  User.create({username: 'montgomery', password: 'password'}),
  User.create({username: 'harrypotter', password: 'password'}),
  # User.create({username: 'jennifer', password: 'password'}),
  # User.create({username: 'juicebox', password: 'password'}),
  # User.create({username: 'superman', password: 'password'}),
  # User.create({username: 'starlord', password: 'password'}),
  # User.create({username: 'oldirtybastard', password: 'password'}),
  # User.create({username: 'milkandcookies', password: 'password'}),
  # User.create({username: 'omelette', password: 'password'}),
  # User.create({username: 'baconeggscheese', password: 'password'}),
  # User.create({username: 'giantcactus', password: 'password'}),
  # User.create({username: 'ketofriendly', password: 'password'})
]


# PROFILE AND COVER PHOTO SEEDS
users.each_with_index do |user, idx|
  profile = File.open("app/assets/images/seed_pics/profile/photo#{idx}.jpg")
  Photo.create({
      title: 'profile_pic_id#835612',
      author_id: user.id,
      author_profile_img_id: user.id,
      image: profile
  })
  cover = File.open("app/assets/images/seed_pics/cover/cover#{idx}.jpg")
  Photo.create({
    title: Faker::RickAndMorty.location,
    description: Faker::RickAndMorty.quote,
    author_id: user.id,
    author_cover_img_id: user.id,
    image: cover
    })
end

users.each_with_index do |user, idx|
  cover = File.open("app/assets/images/seed_pics/batch1/p#{idx}.jpg")
  Photo.create({
    title: Faker::RickAndMorty.location,
    description: Faker::RickAndMorty.quote,
    author_id: user.id,
    author_cover_img_id: user.id,
    image: cover
    })
end

users.each_with_index do |user, idx|
  cover = File.open("app/assets/images/seed_pics/batch2/p#{idx}.jpg")
  Photo.create({
    title: Faker::RickAndMorty.location,
    description: Faker::RickAndMorty.quote,
    author_id: user.id,
    author_cover_img_id: user.id,
    image: cover
    })
end

users.each_with_index do |user, idx|
  cover = File.open("app/assets/images/seed_pics/batch2/p#{idx}.jpg")
  Photo.create({
    title: Faker::RickAndMorty.location,
    description: Faker::RickAndMorty.quote,
    author_id: user.id,
    author_cover_img_id: user.id,
    image: cover
    })
end
