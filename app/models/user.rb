class User < ApplicationRecord
    USER_TYPES = ["artist", "fan"]
    validates :username, :email, :session_token, :user_type, presence: true
    validates :password_digest, presence: {message: "Password can\'t be blank"}
    validates :username, :email, :session_token, uniqueness: true
    validates :user_type, inclusion: USER_TYPES
    validates :password, length: {minimum: 6}, allow_nil: true
    after_initialize :ensure_session_token
    attr_reader :password
    def self.find_by_credentials(username_or_email, password)
        # debugger
        @user = User.find_by(username: username_or_email) || User.find_by(email: username_or_email)
        if @user && @user.is_password?(password)
            @user
        else 
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)   
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
