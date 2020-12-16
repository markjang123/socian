class Api::LikesController < ApplicationController
    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else 
            render json: {error: "failed to save like"}
        end
    end
    def destroy 
        @like = Like.find_by(id: params[:id])
        if @like.destroy
            render json: {msg: "destroyed"}
        else 
            render json: {msg: "failed to destroy"}
        end
    end
    private
    def like_params
        params.require(:like).permit(:liker_id, :likeable_id, :likeable_type)
    end
end
