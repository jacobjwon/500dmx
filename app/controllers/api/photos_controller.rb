class Api::PhotosController < ApplicationController
  def index
    if params[:user_id]
      user = User.find_by_username(params[:user_id])
      if user
        @photos = user.photos.reject { |photo| photo.author_profile_img_id == user.id }
      else
        render json: ['User not found'], status: 422
      end
    else
      @photos = Photo.where(author_profile_img_id: nil).shuffle
    end
  end

  def create
    @photo = Photo.new(photo_params)
    if params[:type] == 'profile'
      @user = User.find(@photo.author_id)
      @user.profile_photo.destroy if @user.profile_photo
      @user.profile_photo = @photo
      if @photo.save
        render "api/users/show"
      else
        render json: ['error with update'], statute: 422
      end
    elsif @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    if params[:type] == 'coverphoto'
      @photo = Photo.find_by(id: params[:id])
      if @photo.author.cover_photo
        oldphoto = @photo.author.cover_photo
        oldphoto.author_cover_img_id = nil
        oldphoto.save
      end
      @photo.author_cover_img_id = @photo.author_id
      if @photo.save
        render "api/photos/show"
      else
        render json: @photo.errors.full_messages, status: 422
      end
    else
      @photo = Photo.find_by(id: params[:id])
      if @photo.update(photo_params)
        render "api/photos/show"
      else
        render json: ['invalid request!'], status: 422
      end
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render "api/photos/show"
  end

  def show
    @photo = Photo.find_by(id: params[:id])
    if @photo
      render "api/photos/show"
    else
      render json: ['photo doesn\'t exist'], status: 422
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :image, :author_id)
  end

end
