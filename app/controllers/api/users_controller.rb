require 'open-uri'
class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
    if @user.save
        default_profile = open("https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png")
        @user.profile_image.attach(io: default_profile, filename: "default_profile")
        default_banner = open("https://f4.bcbits.com/img/0018750819_100.png")
        @user.banner_image.attach(io: default_banner, filename: "default_banner")
        login!(@user)
        render :show
    else
        render json: {errors: @user.errors.messages.values.flatten}, status: 422
    end
    end
    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:username_or_email, :username, :email, :password, :user_type)
    end
end
