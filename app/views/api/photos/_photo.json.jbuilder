json.extract! photo, :id, :title, :description, :author_id

json.image_url photo.image.url
json.thumb_url photo.image.url(:thumb)
json.preview_url photo.image.url(:medium)

json.isCoverPhoto !!photo.author_cover_img_id
json.author photo.author.username
