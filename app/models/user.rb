class User < ApplicationRecord
    validates :username, :email, :session_token, :password_digest, :password null: false
    validates :username, :email, :session_token, uniqueness: true
    validate :password, length: {minimum : 6}, allow_nil: true
    after_initialize :ensure_session_token
    attr_reader :password
    def self.find_by_credentials(username_or_email, password)
        @user = User.find_by(username: username_or_email) || User.find_by(email: username_or_email)
        if @user && self.is_password?(password)
            @user
        else 
            nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)   
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
