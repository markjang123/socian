class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
    if @user.save
        login!(@user)
        render :show
    else
        render json: {errors: @user.errors.full_messages}, status: 422
    end
    end
    def show
        debugger
        @user = User.find_by(id: params[:id])
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:username_or_email, :username, :email, :password, :user_type)
    end
end