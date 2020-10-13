class ApplicationController < ActionController::Base
    helper_method :current_user, :require_logged_in, :logged_in?
    def current_user
        @current_user = User.find_by_credentials(params[:user][:username_or_email], params[:user][:password])
    end

    def require_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def logged_in?
        !!@current_user
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        session[:session_token] = nil
        @current_user.reset_session_token!
        @current_user = nil
    end
end
