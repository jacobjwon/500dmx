require 'faker'

User.destroy_all
Follow.destroy_all
Photo.destroy_all

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
#  USERS
users = [
  User.create({username: 'guest_user', password: 'password'}),
  User.create({username: 'rickandmorty', password: 'password'}),
  User.create({username: 'cheesesteak', password: 'password'}),
  User.create({username: 'montgomery', password: 'password'}),
  User.create({username: 'harrypotter', password: 'password'}),
  User.create({username: 'janetjackson', password: 'password'}),
  User.create({username: 'juicebox', password: 'password'}),
  User.create({username: 'frazzlesnazzle', password: 'password'}),
  User.create({username: 'starlord', password: 'password'}),
  User.create({username: 'dirtmcgirt', password: 'password'})
]

# FOLLOWS
for i in (0...users.length) do
  for j in (i+1...users.length) do
    if rand(0..11) > 3
      Follow.create({
        follower_id: users[i].id,
        following_id: users[j].id
        })
    end
    if rand(0..11) > 3
      Follow.create({
        follower_id: users[j].id,
        following_id: users[i].id
        })
    end
  end
end

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
  cover = File.open("app/assets/images/seed_pics/sample1/p#{idx}.jpg")
  Photo.create({
    title: Faker::RickAndMorty.location,
    description: Faker::RickAndMorty.quote,
    author_id: user.id,
    author_cover_img_id: user.id,
    image: cover
    })
end

users.each_with_index do |user, idx|
  cover = File.open("app/assets/images/seed_pics/sample2/p#{idx}.jpg")
  Photo.create({
    title: Faker::RickAndMorty.location,
    description: Faker::RickAndMorty.quote,
    author_id: user.id,
    author_cover_img_id: user.id,
    image: cover
    })
end

users.each_with_index do |user, idx|
  cover = File.open("app/assets/images/seed_pics/sample3/p#{idx}.jpg")
  Photo.create({
    title: Faker::RickAndMorty.location,
    description: Faker::RickAndMorty.quote,
    author_id: user.id,
    author_cover_img_id: user.id,
    image: cover
    })
end
