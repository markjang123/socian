class User < ApplicationRecord
    USER_TYPES = ["artist", "fan"]
    validates :username, :email, :session_token, :user_type, presence: true
    validates :password_digest, presence: {message: "Password can\'t be blank"}
    validates :username, :email, :session_token, uniqueness: true
    validates :user_type, inclusion: USER_TYPES
    validates :password, length: {minimum: 6}, allow_nil: true
    after_initialize :ensure_session_token
    attr_reader :password
    has_many :follows_given,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :Follow
    has_many :follows_received,
        primary_key: :id,
        foreign_key: :followee_id,
        class_name: :Follow
    has_many :followees,
        through: :follows_given,
        source: :followee
    has_many :followers,
        through: :follows_received,
        source: :follower
    has_many :albums,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Album
    has_many :tracks,
        through: :albums,
        source: :tracks
    has_many :posts,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Post
    has_one_attached :profile_image
    has_one_attached :banner_image
        
    def self.find_by_credentials(username_or_email, password)
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
