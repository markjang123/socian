class Api::AlbumsController < ApplicationController
    def index 
        if params.has_key?(:user_id)
            @albums = Album.where(artist_id: params[:user_id])
        else
            @albums = Album.all
        end
        render :index
    end
    def show
        @album = Album.find(params[:id])
        render :show
    end
end
