class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]
    def create
        @user = User.find_by(params[:user][:username_or_email], params[:user][:password])
        if @user
            login!(@user)
            render :show
        else
            render json: {errors: "Invalid credentials"}
        end
    end
    
    def destroy
        logout!
    end
end
