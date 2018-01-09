Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :show, :index] do
      resources :photos, only: [:index]
    end
    resources :photos, only: [:create, :show, :update, :destroy, :index]
    resource :session, only: [:create, :destroy]

  end

  root 'static_pages#root'

end
