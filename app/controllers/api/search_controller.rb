class Api::SearchController < ApplicationController
    def index
        @albums = Album.all
        @users = User.all
    end
end
