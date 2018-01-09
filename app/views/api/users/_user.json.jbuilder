json.username user.username
json.id user.id

json.thumbnails user.photos.reject {|photo| photo.title == 'profile_pic_id#835612'}
  .map { |photo| asset_path(photo.image.url(:thumb)) }

if user.profile_photo
  json.profilePhotoUrl asset_path(user.profile_photo.image.url(:thumb))
end

if user.cover_photo
  json.coverPhotoUrl asset_path(user.cover_photo.image.url)
end

json.photos user.photos.reject { |photo| photo.title == 'profile_pic_id#835612' }
  .map {|photo| photo.id }
